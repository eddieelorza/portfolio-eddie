import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Loader2, Play } from "lucide-react";
import { cn } from "../../lib/utils.js";

/*
 * VinylPlayer — the playlist as a record on a turntable.
 *
 * Nothing from Spotify loads until the visitor asks: the record and the play
 * button are ours. On the first press the Spotify iFrame API script loads and
 * mounts the compact embed into a box whose 152px were reserved from the
 * start, so nothing below moves.
 *
 * The motion only tells the truth: the record spins at 33⅓ rpm and the tone
 * arm sits on it while the embed reports playback, and both stop when it
 * pauses. The record stops where it is (animation-play-state), not back at 0.
 * The sheen does not spin — light on a real record stays put.
 *
 * If the API script cannot load (blocked, offline), the plain embed iframe is
 * the fallback: it still plays, only without the spinning record.
 */

const PLAYLIST_ID = "5SFU6S5nH59dJD61Yb1faj";
const PLAYLIST_URL = `https://open.spotify.com/playlist/${PLAYLIST_ID}`;
const EMBED_HEIGHT = 152; // Spotify's compact embed
const API_TIMEOUT = 8000;

let spotifyApi;
function loadSpotifyApi() {
  if (spotifyApi) return spotifyApi;
  spotifyApi = new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("timeout")), API_TIMEOUT);
    window.onSpotifyIframeApiReady = (api) => {
      clearTimeout(timer);
      resolve(api);
    };
    const script = document.createElement("script");
    script.src = "https://open.spotify.com/embed/iframe-api/v1";
    script.async = true;
    script.onerror = () => {
      clearTimeout(timer);
      reject(new Error("script failed"));
    };
    document.body.appendChild(script);
  }).catch((error) => {
    spotifyApi = undefined; // allow a retry on the next press
    throw error;
  });
  return spotifyApi;
}

export default function VinylPlayer({ copy }) {
  // idle → loading → ready, or fallback when the API is unavailable
  const [status, setStatus] = useState("idle");
  const [playing, setPlaying] = useState(false);
  const mountRef = useRef(null);
  const controllerRef = useRef(null);
  const recordRef = useRef(null);
  // Both triggers are disabled while loading, which drops their focus; if one
  // of them held it, the record gets it back once the player is ready.
  const restoreFocusRef = useRef(false);

  useEffect(() => () => controllerRef.current?.destroy?.(), []);

  useEffect(() => {
    if ((status === "ready" || status === "fallback") && restoreFocusRef.current) {
      restoreFocusRef.current = false;
      (status === "ready" ? recordRef.current : mountRef.current)?.focus?.({ preventScroll: true });
    }
  }, [status]);

  const start = () => {
    if (status === "ready") {
      controllerRef.current?.togglePlay();
      return;
    }
    if (status !== "idle") return;
    restoreFocusRef.current = document.activeElement?.dataset?.playTrigger === "true";
    setStatus("loading");

    loadSpotifyApi()
      .then((api) => {
        // The API replaces the element it is given with its iframe; hand it a
        // node React does not own.
        const target = document.createElement("div");
        mountRef.current.replaceChildren(target);
        api.createController(
          target,
          { uri: `spotify:playlist:${PLAYLIST_ID}`, width: "100%", height: EMBED_HEIGHT },
          (controller) => {
            controllerRef.current = controller;
            controller.addListener("ready", () => {
              mountRef.current
                ?.querySelector("iframe")
                ?.setAttribute("title", copy.playerTitle);
              setStatus("ready");
              controller.play();
            });
            controller.addListener("playback_update", (event) => {
              setPlaying(!event.data.isPaused);
            });
          },
        );
      })
      .catch(() => setStatus("fallback"));
  };

  const recordLabel = `${playing ? copy.pause : copy.play}: ${copy.playlistName}`;

  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative aspect-square w-[min(320px,76vw)]">
        <button
          ref={recordRef}
          type="button"
          data-play-trigger="true"
          onClick={start}
          aria-label={recordLabel}
          aria-pressed={status === "ready" ? playing : undefined}
          disabled={status === "loading" || status === "fallback"}
          className={cn(
            "absolute inset-[6%] rounded-full shadow-soft",
            "transition-transform duration-150 ease-out active:scale-[0.98] disabled:cursor-default",
            "[@media(hover:hover)_and_(pointer:fine)]:enabled:hover:scale-[1.015]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-ink-950",
          )}
        >
          <Record spinning={playing} name={copy.playlistName} />
        </button>

        <Tonearm down={playing} />
      </div>

      <div
        className="relative mt-8 w-full max-w-[360px] overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-soft"
        style={{ height: EMBED_HEIGHT }}
      >
        {status === "fallback" ? (
          <iframe
            title={copy.playerTitle}
            src={`https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator`}
            width="100%"
            height={EMBED_HEIGHT}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="block border-0"
          />
        ) : (
          <div
            ref={mountRef}
            className={cn(
              "absolute inset-0 transition-opacity duration-200 ease-out",
              status === "ready" ? "opacity-100" : "opacity-0",
            )}
          />
        )}

        <AnimatePresence initial={false}>
          {(status === "idle" || status === "loading") && (
            <motion.div
              key="facade"
              exit={{ opacity: 0, filter: "blur(2px)" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-between gap-4 px-6"
            >
              <div className="min-w-0">
                <span className="section-eyebrow">{copy.playlistEyebrow}</span>
                <p className="mt-1.5 truncate font-display text-xl font-bold tracking-tight text-white">
                  {copy.playlistName}
                </p>
                <p className="mt-1 text-sm text-white/60">{copy.playlistNote}</p>
              </div>
              <button
                type="button"
                data-play-trigger="true"
                onClick={start}
                disabled={status === "loading"}
                aria-label={status === "loading" ? copy.loadingPlayer : recordLabel}
                className={cn(
                  "btn-accent relative grid h-12 w-12 shrink-0 place-items-center !p-0",
                  "transition-transform duration-150 ease-out active:scale-[0.97] disabled:cursor-progress",
                )}
              >
                {status === "loading" ? (
                  <Loader2 aria-hidden className="h-5 w-5 animate-spin" />
                ) : (
                  <Play aria-hidden className="h-5 w-5 translate-x-px fill-current" />
                )}
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

      {/* Screen readers hear the state change the record shows. */}
      <p aria-live="polite" className="sr-only">
        {status === "ready" ? (playing ? copy.nowPlaying : copy.paused) : ""}
      </p>
    </div>
  );
}

/*
 * A coloured vinyl in the accent: fine grooves over an accent → glow radial,
 * a paper label in the site's sticker colours, and a centre hole.
 */
function Record({ spinning, name }) {
  return (
    <span aria-hidden className="absolute inset-0 block rounded-full">
      <span
        className="absolute inset-0 block animate-spin rounded-full"
        style={{
          animationDuration: "1.8s", // 33⅓ rpm
          animationPlayState: spinning ? "running" : "paused",
          background: [
            "repeating-radial-gradient(circle, rgb(var(--shadow) / 0.2) 0 1px, transparent 1px 3px)",
            "radial-gradient(circle, rgb(var(--accent-glow)) 0%, rgb(var(--accent)) 72%, rgb(var(--accent) / 0.85) 100%)",
          ].join(", "),
          boxShadow: "inset 0 0 0 3px rgb(var(--shadow) / 0.25)",
        }}
      >
        {/* Label: turns with the record, so the name reads as it spins. */}
        <span
          className="absolute inset-[31%] grid place-items-center rounded-full text-center"
          style={{ background: "rgb(var(--fg))", color: "rgb(var(--ink-950))" }}
        >
          <span className="px-3 font-display text-[clamp(0.55rem,2.4vw,0.75rem)] font-bold uppercase leading-tight tracking-wide">
            {name}
          </span>
          <span className="absolute bottom-[16%] font-marker text-[0.6rem] opacity-70">
            33⅓
          </span>
          <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink-950" />
        </span>
      </span>

      {/* Fixed sheen: reflections stay where the light is. */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 20deg, transparent 0deg, rgb(var(--fg) / 0.16) 25deg, transparent 55deg, transparent 180deg, rgb(var(--fg) / 0.1) 205deg, transparent 235deg)",
        }}
      />
    </span>
  );
}

/*
 * Pivot at the top-right corner; at rest the needle sits off the record, and
 * it swings onto the grooves while playing.
 */
function Tonearm({ down }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
    >
      <motion.g
        initial={false}
        animate={{ rotate: down ? 0 : -25 }}
        transition={{ type: "spring", duration: 0.7, bounce: 0.15 }}
        style={{ originX: "90px", originY: "10px", transformBox: "view-box" }}
      >
        <line
          x1="90"
          y1="10"
          x2="71"
          y2="69"
          strokeWidth="2.2"
          strokeLinecap="round"
          style={{ stroke: "rgb(var(--fg) / 0.75)" }}
        />
        <rect
          x="66.5"
          y="67"
          width="9"
          height="6"
          rx="1.5"
          transform="rotate(18 71 70)"
          style={{ fill: "rgb(var(--fg) / 0.85)" }}
        />
      </motion.g>
      <circle cx="90" cy="10" r="5" style={{ fill: "rgb(var(--ink-800))", stroke: "rgb(var(--fg) / 0.35)" }} strokeWidth="1" />
      <circle cx="90" cy="10" r="1.8" style={{ fill: "rgb(var(--accent))" }} />
    </svg>
  );
}
