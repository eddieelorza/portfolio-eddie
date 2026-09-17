import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { cn } from "../../lib/utils.js";

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

  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b));

  /*
   * Letters take the active accent, with a gentle wave that blends each one
   * toward the foreground colour.
   *
   * This used to be a hue sweep, `hsl(hue, 85%, 65%)`, cycling through the
   * full wheel. On the dark canvas its worst letter already sat at 4.02:1; on
   * cream the yellow letters measured 1.04:1 — invisible — and darkening the
   * sweep enough to pass (30% lightness) still only reached 3.55:1 while
   * turning every hue to mud. It was also the most "AI purple" element on the
   * page. Mixing toward --fg can only raise contrast, so every letter is at
   * least as legible as --accent-soft, which clears 4.5:1 in all 8 accent ×
   * mode pairs.
   */
  const colorFor = (i, total) => {
    const phase = (i / Math.max(total - 1, 1)) * Math.PI + index * 0.9;
    const accentShare = Math.round(82 + 18 * Math.sin(phase)); // 64–100%
    return `color-mix(in oklab, rgb(var(--accent-soft)) ${accentShare}%, rgb(var(--fg)))`;
  };

  return (
    <span
      className={cn(
        "relative inline-block align-bottom whitespace-nowrap",
        className,
      )}
    >
      <span className="invisible" aria-hidden>
        {longest}
      </span>
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
          {words[index].split("").map((letter, i, arr) => (
            <motion.span
              key={`${index}-${i}`}
              custom={i}
              variants={letterVariants}
              style={{
                color: colorFor(i, arr.length),
                display: "inline-block",
                textShadow: "var(--text-glow)",
                fontWeight: "inherit",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
