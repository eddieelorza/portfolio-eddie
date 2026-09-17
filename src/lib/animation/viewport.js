/**
 * Shared viewport configuration for Framer Motion `whileInView`.
 *
 * Using a single object keeps every reveal animation in sync: the
 * margins, replay behaviour and amount threshold live in one place.
 */

/**
 * Reveal once. Use this for reveals (headings, cards, paragraphs).
 * Replaying on every entry re-hid content that had already been read, and
 * left it invisible whenever the observer lagged (fast scroll, backgrounded
 * tab, anchor jump).
 */
export const REVEAL_VIEWPORT = {
  once: true,
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
