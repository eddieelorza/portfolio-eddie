import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { cn } from "../../lib/utils.js";
import { EASE_OUT } from "../../lib/animation/doodle.js";

/*
 * Letters still rise in one by one, but the outgoing word leaves as a single
 * quick fade that overlaps the entrance. Under the old per-letter exit plus
 * `mode="wait"`, the key line of the H1 sat half-empty for ~1.3s of every
 * 3.5s cycle.
 */
const letterVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.94 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.08 + i * 0.028,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const wordExit = {
  opacity: 0,
  transition: { duration: 0.22, ease: "easeOut" },
};

export default function TextRotator({
  words,
  interval = 3500,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  // Under reduced motion the word holds on the first entry: content that
  // swaps itself every few seconds is motion too, not just the letter wave.
  useEffect(() => {
    if (reduceMotion) {
      setIndex(0);
      return undefined;
    }
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % words.length);
    }, interval);
    return () => clearInterval(t);
  }, [words.length, interval, reduceMotion]);

  /*
   * Letters take the solid accent (--accent-soft clears 4.5:1 in every
   * accent × mode pair). The emphasis comes from a hand-drawn underline that
   * redraws under each new word — the same mark as the section titles —
   * instead of a colour gradient across the letters.
   *
   * History: it was a blend toward --fg per letter, and before that a hue sweep, `hsl(hue, 85%, 65%)`, cycling through the
   * full wheel. On the dark canvas its worst letter already sat at 4.02:1; on
   * cream the yellow letters measured 1.04:1 — invisible — and darkening the
   * sweep enough to pass (30% lightness) still only reached 3.55:1 while
   * turning every hue to mud. It was also the most "AI purple" element on the
   * page. Mixing toward --fg can only raise contrast, so every letter is at
   * least as legible as --accent-soft, which clears 4.5:1 in all 8 accent ×
   * mode pairs.
   */

  return (
    <span
      className={cn(
        "relative inline-grid align-bottom whitespace-nowrap",
        className,
      )}
    >
      {/* Reserve the widest word as rendered, not the one with the most
          characters: "experiencias premium" has as many letters as
          "productos escalables" but is ~20px wider, and overflowed. Every
          word sits invisible in the same grid cell; the cell takes the max. */}
      {words.map((w) => (
        <span key={w} className="invisible [grid-area:1/1]" aria-hidden>
          {w}
        </span>
      ))}
      {/* Per-letter spans read as "A, I, …" — expose the whole word instead. */}
      <span className="sr-only">{words[index]}</span>
      <AnimatePresence initial={false}>
        <motion.span
          key={index}
          aria-hidden
          className="absolute inset-0 flex flex-row items-center justify-start whitespace-nowrap"
          initial="hidden"
          animate="visible"
          exit={wordExit}
        >
          <span className="relative inline-flex">
            {words[index].split("").map((letter, i) => (
              <motion.span
                key={`${index}-${i}`}
                custom={i}
                variants={letterVariants}
                style={{
                  color: "rgb(var(--accent-soft))",
                  display: "inline-block",
                  fontWeight: "inherit",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
            <svg
              aria-hidden
              viewBox="0 0 120 12"
              preserveAspectRatio="none"
              className="pointer-events-none absolute -bottom-[0.18em] left-0 h-[0.22em] w-full"
              fill="none"
            >
              <motion.path
                d="M3 8c24-5 50-6 76-3 14 2 26 2 38-3"
                strokeWidth="4.5"
                strokeLinecap="round"
                style={{ stroke: "rgb(var(--accent-glow))" }}
                initial={reduceMotion ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.35, duration: 0.55, ease: EASE_OUT }}
              />
            </svg>
          </span>
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
