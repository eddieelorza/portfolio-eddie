import { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils.js";
import { REVEAL_VIEWPORT } from "../../lib/animation/viewport.js";
import { EASE_OUT } from "../../lib/animation/doodle.js";
import Tape from "../doodles/Tape.jsx";

/**
 * ServiceCarousel
 *
 * Project cards as sheets taped to the page — masking tape, a small resting
 * tilt, a handwritten number, a sticker tag and the doodle icon in a
 * hand-drawn ring — in an Embla carousel. Adapted from a shadcn/TS snippet to this
 * repo: plain JS, `motion/react` instead of framer-motion, and no shadcn
 * Button (the site has no `--primary`/`--input` tokens for it to resolve).
 *
 * The original gave each card a hardcoded Tailwind gradient (purple-100,
 * green-100…). Those ignore `data-mode` and `data-theme`, so the tints here
 * are built from the accent variables and only vary in angle and strength.
 *
 * Each item: { id, number, eyebrow, title, description, icon, action }.
 * `action` is a node rendered under the description (e.g. "Ver recursos").
 */

const TONES = [
  "linear-gradient(135deg, rgb(var(--accent) / 0.12), rgb(var(--accent-glow) / 0.03))",
  "linear-gradient(200deg, rgb(var(--accent-glow) / 0.1), rgb(var(--accent) / 0.02))",
  "linear-gradient(160deg, rgb(var(--accent-soft) / 0.09), rgb(var(--fg) / 0.01))",
  "linear-gradient(90deg, rgb(var(--accent) / 0.07), rgb(var(--accent-glow) / 0.09))",
];

/** Resting tilt, alternating so a row reads as sheets taped by hand. */
const TILTS = ["-rotate-1", "rotate-[0.6deg]", "-rotate-[0.4deg]", "rotate-1"];

/*
 * Hover (lift + straighten) only where a real pointer hovers: on touch the
 * hover state sticks after a tap. CSS transitions, not motion keyframes, so
 * entering and leaving quickly retargets instead of restarting.
 */
const HOVER =
  "[@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1 [@media(hover:hover)_and_(pointer:fine)]:hover:rotate-0";

function ServiceCard({ item, index }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={REVEAL_VIEWPORT}
      transition={{ duration: 0.4, delay: Math.min(index, 3) * 0.06, ease: EASE_OUT }}
      className="h-full"
    >
      {/* `isolate` keeps the tint's -z-10 inside the card, so the content can
          stay unpositioned and the action button's ::after stretches over the
          whole sheet (the entire card opens the viewer). */}
      <article
        className={cn(
          "relative isolate flex h-full flex-col rounded-2xl border border-white/10 bg-ink-900 p-6 pt-8 shadow-soft sm:p-7 sm:pt-9",
          "transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98] motion-reduce:transition-none",
          "focus-within:ring-2 focus-within:ring-accent",
          TILTS[index % TILTS.length],
          HOVER,
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-2xl"
          style={{ background: TONES[index % TONES.length] }}
        />
        <Tape tilt={index % 2 ? 3 : -3} />

        <div className="flex flex-wrap items-start justify-between gap-3">
          <span className="font-hand text-2xl font-bold leading-none text-white/60">
            #{String(index + 1).padStart(2, "0")}
          </span>
          {item.eyebrow && (
            <span
              className={cn(
                "whitespace-nowrap rounded-md bg-accent px-2 py-0.5 text-xs font-bold uppercase tracking-[0.06em] text-on-accent",
                index % 2 ? "-rotate-2" : "rotate-2",
              )}
            >
              {item.eyebrow}
            </span>
          )}
        </div>

        {Icon && (
          <div className="relative mt-6 grid h-16 w-16 place-items-center" style={{ color: "rgb(var(--accent-soft))" }}>
            {/* Hand-drawn ring: an open loop that overshoots its start. */}
            <svg aria-hidden viewBox="0 0 64 64" fill="none" className="absolute inset-0 h-full w-full">
              <path
                d="M34 5c14 1 25 11 25 26 0 15-12 28-28 28S5 47 5 32C5 17 16 7 30 6c6 0 11 2 15 5"
                stroke="rgb(var(--accent-glow))"
                strokeWidth="2.4"
                strokeLinecap="round"
                opacity="0.7"
              />
            </svg>
            <Icon aria-hidden strokeWidth={1.9} draw className="h-8 w-8" />
          </div>
        )}

        <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-white">{item.title}</h3>
        <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-white/70">{item.description}</p>
        {item.action && <div className="mt-auto pt-6">{item.action}</div>}
      </article>
    </motion.div>
  );
}

export default function ServiceCarousel({ items, labels, className }) {
  const [emblaRef, api] = useEmblaCarousel({ align: "start", loop: true });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback((embla) => {
    setSelected(embla.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return undefined;
    onSelect(api);
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  const onKeyDownCapture = useCallback(
    (event) => {
      // Arrow keys belong to the carousel only when focus is on the carousel
      // itself, not inside a text field a card might contain.
      if (event.target.closest("input, textarea")) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  const controlClass =
    "relative grid h-11 w-11 place-items-center rounded-full bg-white/[0.08] text-white transition hover:bg-white/[0.16] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={labels.region}
      onKeyDownCapture={onKeyDownCapture}
      className={cn("relative", className)}
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="-ml-4 flex">
          {items.map((item, index) => (
            <div
              key={item.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} / ${items.length}`}
              className="min-w-0 shrink-0 grow-0 basis-[88%] py-5 pl-4 sm:basis-1/2 lg:basis-1/3"
            >
              <ServiceCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p aria-live="polite" className="font-mono text-sm text-white/50">
          {String(selected + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </p>
        <div className="flex gap-2">
          <button type="button" onClick={scrollPrev} className={controlClass} aria-label={labels.prev}>
            <ArrowLeft aria-hidden className="h-4 w-4" />
          </button>
          <button type="button" onClick={scrollNext} className={controlClass} aria-label={labels.next}>
            <ArrowRight aria-hidden className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
