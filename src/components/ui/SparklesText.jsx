import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "../../lib/utils.js";

/*
 * SparklesText — adapted from Magic UI's sparkles-text for this repo:
 * plain JS, `motion/react` (already installed; no framer-motion), theme
 * colours instead of hardcoded purple/pink, and children instead of a `text`
 * prop so it can wrap a real <h1>.
 *
 * Like the original, each sparkle twinkles with a small rotation and then
 * reappears somewhere else. The original re-rendered every sparkle from a
 * 100ms interval; here each sparkle regenerates itself when its own twinkle
 * ends, so there are no timers and no parent re-renders. Reduced motion
 * renders no sparkles at all.
 */

const generateSparkle = (colors) => ({
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  color: Math.random() > 0.5 ? colors.first : colors.second,
  delay: Math.random() * 2,
  scale: Math.random() * 0.7 + 0.4,
  duration: Math.random() * 0.6 + 0.9,
  seed: Math.random(),
});

function Sparkle({ colors }) {
  const [s, setS] = useState(() => generateSparkle(colors));

  return (
    <motion.svg
      key={s.seed}
      aria-hidden
      className="pointer-events-none absolute z-20"
      style={{ left: s.x, top: s.y }}
      initial={{ opacity: 0, scale: 0, rotate: 75 }}
      animate={{ opacity: [0, 1, 0], scale: [0, s.scale, 0], rotate: [75, 120, 150] }}
      transition={{ duration: s.duration, delay: s.delay, ease: "easeInOut" }}
      onAnimationComplete={() => setS(generateSparkle(colors))}
      width="18"
      height="18"
      viewBox="0 0 21 21"
    >
      <path
        d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"
        fill={s.color}
      />
    </motion.svg>
  );
}

export default function SparklesText({
  children,
  count = 10,
  colors = { first: "rgb(var(--accent))", second: "rgb(var(--accent-glow))" },
  className,
}) {
  const reduceMotion = useReducedMotion();
  // Sparkles are random, so they only mount on the client after first paint.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <span className={cn("relative inline-block", className)}>
      {mounted &&
        !reduceMotion &&
        Array.from({ length: count }, (_, i) => <Sparkle key={i} colors={colors} />)}
      <span className="relative">{children}</span>
    </span>
  );
}
