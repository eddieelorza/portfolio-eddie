import { motion, useScroll, useReducedMotion, useSpring } from 'motion/react';

/**
 * Fixed thin scroll progress bar at the top of the viewport.
 * - Sits above the navbar (z-60).
 * - Hidden when prefers-reduced-motion is on (the bar moves on scroll).
 * - Uses CSS transform only — no layout cost.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.2,
  });

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-[rgb(var(--accent))] via-[rgb(var(--accent-glow))] to-[rgb(var(--accent-soft))]"
    />
  );
}
