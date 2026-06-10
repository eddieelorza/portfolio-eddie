/**
 * Shared viewport configuration for Framer Motion `whileInView`.
 *
 * Using a single object keeps every reveal animation in sync: the
 * margins, replay behaviour and amount threshold live in one place.
 */

/**
 * Replay on every entry. Use this for reveals (headings, cards,
 * paragraphs). When the element leaves the viewport, motion reverts
 * to `initial`; when it re-enters, the animation plays again.
 */
export const REVEAL_VIEWPORT = {
  once: false,
  margin: '-15% 0px -15% 0px',
};

/**
 * One-shot. Use for elements where re-running the animation would
 * look broken — e.g. a CountUp that resets to zero on each scroll.
 */
export const REVEAL_ONCE = {
  once: true,
  margin: '-15% 0px',
};
