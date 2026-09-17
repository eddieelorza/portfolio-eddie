import { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils.js";
import { REVEAL_VIEWPORT } from "../../lib/animation/viewport.js";

/**
 * ServiceCarousel
 *
 * Minimal numbered cards in an Embla carousel — "( 001 )", an icon, and a
 * title/summary pinned to the bottom. Adapted from a shadcn/TS snippet to this
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
  "linear-gradient(135deg, rgb(var(--accent) / 0.16), rgb(var(--accent-glow) / 0.05))",
  "linear-gradient(200deg, rgb(var(--accent-glow) / 0.14), rgb(var(--accent) / 0.04))",
  "linear-gradient(160deg, rgb(var(--accent-soft) / 0.12), rgb(var(--fg) / 0.02))",
  "linear-gradient(90deg, rgb(var(--accent) / 0.1), rgb(var(--accent-glow) / 0.12))",
];

function ServiceCard({ item, index }) {
  const Icon = item.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={REVEAL_VIEWPORT}
      transition={{ duration: 0.5, delay: Math.min(index, 3) * 0.08 }}
      className="relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-ink-900 p-7 sm:p-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: TONES[index % TONES.length] }}
      />

      <div className="relative flex flex-col items-start">
        <span className="font-mono text-sm text-white/50">( {item.number} )</span>
        {Icon && <Icon aria-hidden strokeWidth={1.5} className="mt-8 h-11 w-11 text-white" />}
      </div>

      <div className="relative mt-auto pt-10">
        {item.eyebrow && (
          <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-white/50">
            {item.eyebrow}
          </p>
        )}
        <h3 className="text-lg font-semibold uppercase leading-snug tracking-wider">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-white/70">
          {item.description}
        </p>
        {item.action && <div className="mt-6">{item.action}</div>}
      </div>
    </motion.article>
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
              className="min-w-0 shrink-0 grow-0 basis-[88%] pl-4 sm:basis-1/2 lg:basis-1/3"
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
