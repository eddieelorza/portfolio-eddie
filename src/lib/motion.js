/**
 * Shared motion presets used across sections.
 * Keeps the easing curve and viewport thresholds consistent.
 */

export const easePremium = [0.22, 1, 0.36, 1];

export const L1_fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: easePremium },
};

export const L2_scaleFade = {
  initial: { opacity: 0, scale: 0.96 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: easePremium },
};
