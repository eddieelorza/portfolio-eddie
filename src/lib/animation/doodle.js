/**
 * Motion vocabulary for the hand-made language outside the hero.
 *
 *  - stickerSlap: a sticker pressed onto the page — a quick spring pop from
 *    slightly small and tilted, settling at a small resting tilt.
 *  - markerDraw:  strokes drawing in (pathLength), used on heading underlines
 *    and doodle icons (see DoodleIcon `draw`).
 *
 * Card hover (lift + straighten from a resting tilt) is plain CSS on each
 * card, gated to fine pointers, so it retargets instead of restarting.
 *
 * Transforms and opacity are skipped by <MotionConfig reducedMotion="user">;
 * pathLength is not a transform, so callers guard it with useReducedMotion().
 */
import { REVEAL_VIEWPORT } from "./viewport.js";

export const EASE_OUT = [0.23, 1, 0.32, 1];

export const stickerSlap = ({ rotate = -2, delay = 0 } = {}) => ({
  initial: { opacity: 0, scale: 0.86, rotate: rotate - 6 },
  whileInView: { opacity: 1, scale: 1, rotate },
  viewport: REVEAL_VIEWPORT,
  transition: { type: "spring", stiffness: 420, damping: 17, delay },
});

export const markerDraw = ({ delay = 0.25, duration = 0.6 } = {}) => ({
  initial: { pathLength: 0 },
  whileInView: { pathLength: 1 },
  viewport: REVEAL_VIEWPORT,
  transition: { duration, delay, ease: EASE_OUT },
});
