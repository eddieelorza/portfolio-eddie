import { motion, useReducedMotion } from "motion/react";
import { REVEAL_VIEWPORT } from "../lib/animation/viewport.js";
import { EASE_OUT, markerDraw, stickerSlap } from "../lib/animation/doodle.js";

/**
 * Titles mark one word with asterisks in translations.js ("Lo que he
 * *construido*"). That word is lettered in the marker face with a hand-drawn
 * underline, the same language as the hero collage. Keeping the mark in the
 * copy (not split in JSX) lets each language choose its own word.
 */
export const stripMarks = (text = "") => text.replace(/\*/g, "");

function MarkedTitle({ title }) {
  const reduceMotion = useReducedMotion();
  const parts = title.split(/(\*[^*]+\*)/g).filter(Boolean);

  return parts.map((part, i) => {
    if (!part.startsWith("*")) return <span key={i}>{part}</span>;
    const word = part.slice(1, -1);
    return (
      <span
        key={i}
        className="relative inline-block whitespace-nowrap px-1 font-marker font-normal tracking-normal"
        style={{ color: "rgb(var(--accent-soft))" }}
      >
        {word}
        <svg
          aria-hidden
          viewBox="0 0 120 12"
          preserveAspectRatio="none"
          className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full"
          fill="none"
        >
          <motion.path
            d="M3 8c24-5 50-6 76-3 14 2 26 2 38-3"
            strokeWidth="4.5"
            strokeLinecap="round"
            style={{ stroke: "rgb(var(--accent-glow))" }}
            {...(reduceMotion ? {} : markerDraw())}
          />
        </svg>
      </span>
    );
  });
}

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      {/* The label is a small sticker slapped onto the page rather than a
          dotted kicker; on-accent text on the accent fill clears 4.5:1 in
          every accent × mode pair. */}
      <motion.span
        {...stickerSlap({ rotate: -2 })}
        className="inline-block rounded-md bg-accent px-2.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-on-accent shadow-soft"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={REVEAL_VIEWPORT}
        transition={{ duration: 0.5, ease: EASE_OUT }}
        className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl"
        aria-label={stripMarks(title)}
      >
        <MarkedTitle title={title} />
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={REVEAL_VIEWPORT}
          transition={{ duration: 0.5, delay: 0.05, ease: EASE_OUT }}
          className="mt-4 text-base text-white/60"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
