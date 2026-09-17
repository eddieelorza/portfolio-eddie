/**
 * Syncs the public Pinterest board into the "Fuera del código" gallery.
 *
 * Runs before every build (`prebuild`) and on demand (`npm run sync:photos`).
 * Pages through the board's public feed (the same JSON the board page loads;
 * the RSS feed is the fallback, but it stops at the 25 latest pins), keeps
 * photo pins only, newest first, downloads each original and writes
 * two WebP widths plus a manifest (aspect ratio + dominant colour, used as the
 * placeholder so the masonry grid never shifts while images load).
 *
 * Network is best effort: if the feed or a download fails, the photos already
 * in the repo stay and the build continues.
 */
import { mkdir, readdir, readFile, unlink, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const USERNAME = "Heeeyedd";
const BOARD_SLUG = "travel";
const BOARD_RSS = `https://www.pinterest.com/${USERNAME}/${BOARD_SLUG}.rss`;
const PAGE_SIZE = 25;
const MAX_PAGES = 20; // 500 pins — a guard against a feed that never ends
const WIDTHS = [480, 960];
const WEBP_QUALITY = 78;

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(root, "src/assets/gallery");
const MANIFEST = path.join(root, "src/data/gallery.json");

const log = (msg) => console.log(`[sync-pinterest] ${msg}`);

function parseFeed(xml) {
  const items = [];
  for (const [, item] of xml.matchAll(/<item>([\s\S]*?)<\/item>/g)) {
    const link = item.match(/<link>(.*?)<\/link>/)?.[1];
    const img = item.match(/img src=&quot;(https:\/\/i\.pinimg\.com\/[^&]+)&quot;/)?.[1];
    const id = link?.match(/\/pin\/([^/]+)\//)?.[1];
    if (!id || !img) continue;
    const date = new Date(item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? "");
    // The feed links a 236px thumbnail; the same hash lives under /originals.
    const original = img.replace(/\/\d+x\//, "/originals/");
    items.push({
      id,
      pin: link,
      original,
      date: Number.isNaN(date.getTime()) ? null : date.toISOString(),
    });
  }
  return items;
}

// Pinterest's resource endpoints answer unauthenticated for public boards.
async function resource(name, options) {
  const params = new URLSearchParams({
    source_url: `/${USERNAME}/${BOARD_SLUG}/`,
    data: JSON.stringify({ options, context: {} }),
  });
  const res = await request(`https://www.pinterest.com/resource/${name}/get/?${params}`, {
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "X-Pinterest-PWS-Handler": "www/[username]/[slug].js",
  });
  return (await res.json()).resource_response;
}

async function fetchBoardPins() {
  const board = await resource("BoardResource", {
    username: USERNAME,
    slug: BOARD_SLUG,
    field_set_key: "detailed",
  });
  const boardId = board?.data?.id;
  if (!boardId) throw new Error("board id not found");

  const items = [];
  let bookmark;
  for (let page = 0; page < MAX_PAGES; page++) {
    const feed = await resource("BoardFeedResource", {
      board_id: boardId,
      page_size: PAGE_SIZE,
      field_set_key: "react_grid_pin",
      bookmarks: bookmark ? [bookmark] : [],
    });
    for (const pin of feed?.data ?? []) {
      const original = pin.images?.orig?.url;
      // Stories and video pins have no still original to publish.
      if (pin.type !== "pin" || !original || pin.videos) continue;
      const date = new Date(pin.created_at ?? "");
      items.push({
        id: pin.id,
        pin: `https://www.pinterest.com/pin/${pin.id}/`,
        original,
        date: Number.isNaN(date.getTime()) ? null : date.toISOString(),
      });
    }
    bookmark = feed?.bookmark;
    if (!bookmark || bookmark === "-end-") break;
  }
  return items;
}

async function fetchItems() {
  try {
    return await fetchBoardPins();
  } catch (error) {
    log(`board feed unavailable (${error.message}); falling back to RSS`);
    return parseFeed(await (await request(BOARD_RSS)).text());
  }
}

// Pinterest answers the odd 503 under load; three tries with a short backoff.
async function request(url, headers = {}, attempts = 3) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0", ...headers } });
      if (!res.ok) throw new Error(`responded ${res.status}`);
      return res;
    } catch (error) {
      if (attempt >= attempts) throw error;
      await new Promise((resolve) => setTimeout(resolve, 800 * attempt));
    }
  }
}

const download = async (url) => Buffer.from(await (await request(url)).arrayBuffer());

const toHex = ({ r, g, b }) =>
  `#${[r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("")}`;

async function processPhoto(item, previous) {
  const files = WIDTHS.map((w) => path.join(OUT_DIR, `${item.id}-${w}.webp`));
  if (previous && files.every(existsSync)) return { ...previous, pin: item.pin };

  // `rotate()` with no angle applies the EXIF orientation from the phone.
  const source = sharp(await download(item.original)).rotate();
  const { data, info } = await source.clone().webp().toBuffer({ resolveWithObject: true });
  const { dominant } = await sharp(data).stats();

  for (const [i, width] of WIDTHS.entries()) {
    await source
      .clone()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY, effort: 5 })
      .toFile(files[i]);
  }

  return {
    id: item.id,
    pin: item.pin,
    width: info.width,
    height: info.height,
    color: toHex(dominant),
    date: item.date,
  };
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  await mkdir(path.dirname(MANIFEST), { recursive: true });

  const previous = existsSync(MANIFEST)
    ? JSON.parse(await readFile(MANIFEST, "utf8"))
    : [];
  const byId = new Map(previous.map((p) => [p.id, p]));

  let items;
  try {
    items = await fetchItems();
  } catch (error) {
    log(`feed unavailable (${error.message}); keeping ${previous.length} photos`);
    return;
  }

  // Newest first, so a photo added to the board lands on page one. Pin ids
  // grow with every new pin; the feed's dates are often missing.
  const pinOrder = (id) => (/^\d+$/.test(id) ? BigInt(id) : 0n);
  items.sort((a, b) => (pinOrder(b.id) > pinOrder(a.id) ? 1 : -1));

  if (items.length === 0) {
    log(`feed returned no photos; keeping ${previous.length} photos`);
    return;
  }

  const photos = [];
  for (const item of items) {
    try {
      photos.push(await processPhoto(item, byId.get(item.id)));
    } catch (error) {
      const kept = byId.get(item.id);
      log(`skipped ${item.id}: ${error.message}${kept ? " (kept previous)" : ""}`);
      if (kept) photos.push(kept);
    }
  }

  // Drop files for pins that left the board.
  const keep = new Set(photos.flatMap((p) => WIDTHS.map((w) => `${p.id}-${w}.webp`)));
  for (const file of await readdir(OUT_DIR)) {
    if (file.endsWith(".webp") && !keep.has(file)) await unlink(path.join(OUT_DIR, file));
  }

  await writeFile(MANIFEST, `${JSON.stringify(photos, null, 2)}\n`);
  log(`${photos.length} photos synced`);
}

main().catch((error) => {
  log(`failed: ${error.message}; build continues with existing photos`);
});
