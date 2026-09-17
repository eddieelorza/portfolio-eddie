import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Loader2, Play } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { REVEAL_VIEWPORT } from "../lib/animation/viewport.js";
import { cn } from "../lib/utils.js";
import photos from "../data/gallery.json";

/*
 * "Fuera del código": travel photos from the Pinterest board and the coding
 * playlist.
 *
 * Photos are synced at build time by scripts/sync-pinterest.mjs into
 * src/assets/gallery (two WebP widths) plus src/data/gallery.json. Width,
 * height and dominant colour from the manifest reserve each tile, so the
 * masonry never shifts while images arrive.
 */
const EASE_OUT = [0.23, 1, 0.32, 1];
const PINTEREST_BOARD = "https://www.pinterest.com/Heeeyedd/travel/";
const PLAYLIST_ID = "5SFU6S5nH59dJD61Yb1faj";
const PLAYLIST_URL = `https://open.spotify.com/playlist/${PLAYLIST_ID}`;
const PLAYER_HEIGHT = 352; // Spotify's full embed height

const images = import.meta.glob("../assets/gallery/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});
const imageUrl = (id, width) => images[`../assets/gallery/${id}-${width}.webp`];

// Printed photos pinned by hand: a small, uneven resting tilt per tile.
const TILTS = ["-1.6deg", "1.2deg", "-0.6deg", "1.8deg", "-1.1deg", "0.7deg"];

export default function Personal() {
  const { t } = useLanguage();
  const copy = t.personal;

  return (
    <section id="personal" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
          <Gallery copy={copy} />
          <Playlist copy={copy} />
        </div>
      </div>
    </section>
  );
}

function Gallery({ copy }) {
  const visible = photos.filter((photo) => imageUrl(photo.id, 480));
  const pageSize = usePageSize();
  const pages = Math.max(1, Math.ceil(visible.length / pageSize));
  const [page, setPage] = useState(0);
  const [minHeight, setMinHeight] = useState(0);
  const galleryRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // A breakpoint change can shrink the page count under the current page.
  const current = Math.min(page, pages - 1);
  const shown = visible.slice(current * pageSize, (current + 1) * pageSize);

  const goTo = (next) => {
    if (next === current || next < 0 || next >= pages) return;
    const gallery = galleryRef.current;
    // Hold the old page's height through the swap so the page below does not
    // jump up while the grid is empty between exit and enter.
    setMinHeight(gallery.offsetHeight);
    setPage(next);
    if (gallery.getBoundingClientRect().top < 0) {
      gallery.scrollIntoView({
        block: "start",
        behavior: reduceMotion ? "auto" : "smooth",
      });
    }
  };

  return (
    <div ref={galleryRef} className="scroll-mt-28">
      <div style={{ minHeight }}>
        <AnimatePresence
          mode="wait"
          initial={false}
          // The next page mounts right after the exit, so its tiles already
          // hold the height again.
          onExitComplete={() => setMinHeight(0)}
        >
          <motion.ul
            key={`${pageSize}-${current}`}
            exit={{ opacity: 0, transition: { duration: 0.12, ease: "easeOut" } }}
            aria-label={copy.galleryLabel}
            className="columns-2 gap-4 sm:columns-3 sm:gap-5"
          >
            {shown.map((photo, i) => {
              const index = current * pageSize + i;
              return (
                <motion.li
                  key={photo.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={REVEAL_VIEWPORT}
                  transition={{
                    duration: 0.45,
                    ease: EASE_OUT,
                    delay: Math.min(i * 0.05, 0.3),
                  }}
                  className="mb-4 break-inside-avoid sm:mb-5"
                >
                  <figure
                    style={{ "--tilt": TILTS[index % TILTS.length] }}
                    className={cn(
                      "rounded-xl border border-white/10 bg-ink-900 p-2 shadow-soft",
                      "rotate-[var(--tilt)] transition-transform duration-200 ease-out",
                      "[@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1 [@media(hover:hover)_and_(pointer:fine)]:hover:rotate-0",
                    )}
                  >
                    <img
                      src={imageUrl(photo.id, 960)}
                      srcSet={`${imageUrl(photo.id, 480)} 480w, ${imageUrl(photo.id, 960)} 960w`}
                      sizes="(min-width: 1024px) 240px, (min-width: 640px) 30vw, 45vw"
                      width={photo.width}
                      height={photo.height}
                      alt={`${copy.photoAlt} (${index + 1}/${visible.length})`}
                      loading="lazy"
                      decoding="async"
                      style={{ backgroundColor: photo.color }}
                      className="block h-auto w-full rounded-lg"
                    />
                  </figure>
                </motion.li>
              );
            })}
          </motion.ul>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
        {pages > 1 && (
          <Pagination copy={copy} page={current} pages={pages} onChange={goTo} />
        )}
        <a
          href={PINTEREST_BOARD}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost transition-transform duration-150 ease-out active:scale-[0.97]"
        >
          {copy.pinterestCta}
          <ArrowUpRight aria-hidden className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

// 9 photos fill a 3×3 on desktop; 6 keep a two-column phone page short.
const PAGE_SIZE_MOBILE = 6;
const PAGE_SIZE_DESKTOP = 9;
const DESKTOP_QUERY = "(min-width: 640px)"; // Tailwind `sm`, where columns go to 3

function usePageSize() {
  const [wide, setWide] = useState(
    () => typeof window !== "undefined" && window.matchMedia(DESKTOP_QUERY).matches,
  );
  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => setWide(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);
  return wide ? PAGE_SIZE_DESKTOP : PAGE_SIZE_MOBILE;
}

// First, last and the neighbours of the current page; gaps become "…".
function pageItems(pages, current) {
  if (pages <= 7) return Array.from({ length: pages }, (_, i) => i);
  const items = [0];
  const from = Math.max(1, current - 1);
  const to = Math.min(pages - 2, current + 1);
  if (from > 1) items.push("gap-start");
  for (let i = from; i <= to; i++) items.push(i);
  if (to < pages - 2) items.push("gap-end");
  items.push(pages - 1);
  return items;
}

// 40px circles with a pseudo-element stretching the hit area to 44px.
const pageButton =
  "relative grid h-10 min-w-10 place-items-center rounded-full px-2 font-display text-sm font-semibold " +
  "transition-transform duration-150 ease-out active:scale-[0.97] " +
  "after:absolute after:-inset-0.5 after:content-[''] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

/*
 * The current page wears the section's sticker: an accent chip, slightly
 * tilted, that slides between numbers (shared layoutId) instead of blinking
 * from one to the next.
 */
function Pagination({ copy, page, pages, onChange }) {
  return (
    <nav aria-label={copy.pagination} className="flex items-center gap-1.5">
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={page === 0}
        aria-label={copy.previousPage}
        className={cn(
          pageButton,
          "border border-white/15 bg-white/[0.03] text-white/80 disabled:pointer-events-none disabled:opacity-35",
          "[@media(hover:hover)_and_(pointer:fine)]:hover:border-white/30",
        )}
      >
        <ChevronLeft aria-hidden className="h-4 w-4" />
      </button>

      <ul className="flex items-center gap-1">
        {pageItems(pages, page).map((item) =>
          typeof item === "string" ? (
            <li key={item} aria-hidden className="w-6 text-center font-marker text-white/50">
              …
            </li>
          ) : (
            <li key={item}>
              <button
                type="button"
                onClick={() => onChange(item)}
                aria-label={`${copy.page} ${item + 1}`}
                aria-current={item === page ? "page" : undefined}
                className={cn(
                  pageButton,
                  item === page
                    ? "text-on-accent"
                    : "text-white/65 [@media(hover:hover)_and_(pointer:fine)]:hover:text-white",
                )}
              >
                {item === page && (
                  <motion.span
                    layoutId="gallery-page-sticker"
                    aria-hidden
                    className="absolute inset-0.5 rounded-[0.65rem] bg-accent shadow-soft"
                    style={{ rotate: -4 }}
                    transition={{ type: "spring", duration: 0.35, bounce: 0.2 }}
                  />
                )}
                <span className="relative">{item + 1}</span>
              </button>
            </li>
          ),
        )}
      </ul>

      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={page === pages - 1}
        aria-label={copy.nextPage}
        className={cn(
          pageButton,
          "border border-white/15 bg-white/[0.03] text-white/80 disabled:pointer-events-none disabled:opacity-35",
          "[@media(hover:hover)_and_(pointer:fine)]:hover:border-white/30",
        )}
      >
        <ChevronRight aria-hidden className="h-4 w-4" />
      </button>

      <p aria-live="polite" className="ml-2 font-marker text-sm text-white/60">
        {page + 1} / {pages}
      </p>
    </nav>
  );
}

/*
 * The Spotify embed is a heavy third-party iframe (its own JS, fonts and
 * cookies), so the page ships a same-size facade and only mounts the player
 * when asked. The facade stays on top until the iframe fires `load`, then
 * crossfades out; focus moves to the player so keyboard users are not dropped
 * on <body> when the button unmounts.
 */
function Playlist({ copy }) {
  const [state, setState] = useState("idle"); // idle | loading | ready
  const frameRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={REVEAL_VIEWPORT}
      transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.1 }}
      className="lg:sticky lg:top-28"
    >
      <div
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900 shadow-soft"
        style={{ height: PLAYER_HEIGHT }}
      >
        {state !== "idle" && (
          <iframe
            ref={frameRef}
            title={copy.playerTitle}
            src={`https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator`}
            width="100%"
            height={PLAYER_HEIGHT}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            onLoad={() => {
              setState("ready");
              frameRef.current?.focus();
            }}
            className="absolute inset-0 block border-0"
          />
        )}

        <AnimatePresence>
          {state !== "ready" && (
            <motion.div
              key="facade"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col justify-between p-7"
              style={{
                background:
                  "radial-gradient(120% 80% at 100% 0%, rgb(var(--accent) / 0.22), transparent 60%), radial-gradient(90% 70% at 0% 100%, rgb(var(--accent-glow) / 0.18), transparent 60%)",
              }}
            >
              <div>
                <span className="section-eyebrow">{copy.playlistEyebrow}</span>
                <p className="mt-3 font-display text-3xl font-bold tracking-tight text-white">
                  {copy.playlistName}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {copy.playlistNote}
                </p>
              </div>

              <EqualizerBars />

              <button
                type="button"
                onClick={() => setState("loading")}
                disabled={state === "loading"}
                aria-busy={state === "loading"}
                className="btn-accent self-start transition-transform duration-150 ease-out active:scale-[0.97] disabled:cursor-progress"
              >
                {state === "loading" ? (
                  <Loader2 aria-hidden className="h-4 w-4 animate-spin" />
                ) : (
                  <Play aria-hidden className="h-4 w-4 fill-current" />
                )}
                {copy.play}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <a
        href={PLAYLIST_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
      >
        {copy.openSpotify}
        <ArrowUpRight aria-hidden className="h-4 w-4" />
      </a>
    </motion.div>
  );
}

// Static, decorative: a still equalizer reads as "music" without a loop that
// would run for as long as the section is on screen.
const BARS = [38, 64, 46, 82, 58, 30, 70, 50, 88, 42, 60, 34, 74, 48];

function EqualizerBars() {
  return (
    <div aria-hidden className="flex h-16 items-end gap-1.5">
      {BARS.map((height, i) => (
        <span
          key={i}
          className="w-2 rounded-full"
          style={{
            height: `${height}%`,
            background:
              "linear-gradient(to top, rgb(var(--accent)), rgb(var(--accent-glow)))",
            opacity: 0.35 + (height / 100) * 0.65,
          }}
        />
      ))}
    </div>
  );
}
