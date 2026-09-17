import { motion, useReducedMotion } from "motion/react";
import { REVEAL_VIEWPORT } from "../../lib/animation/viewport.js";
import { EASE_OUT } from "../../lib/animation/doodle.js";

/*
 * DoodleIcon
 *
 * The hand-drawn icon set for everything illustrative outside the hero, so the
 * sections speak the same marker language as the collage: round caps, slightly
 * uneven curves, one stroke weight, `currentColor`. Lucide stays for purely
 * functional UI (arrows, close, toggles, navigation).
 *
 * `draw` animates the strokes in (pathLength) the first time the icon scrolls
 * into view. Under reduced motion the icon is simply drawn.
 */

export const DOODLES = {
  check: ["M4.5 12.8c2 1.5 3.4 3.1 4.6 5 2.8-5.6 6-9.3 10.4-12.1"],
  arrow: ["M4 12.4c5-.4 10-.6 15.2-.2", "M14 6.8c2 2 3.8 3.6 5.4 5.4-1.8 1.8-3.4 3.6-5.2 5.6"],
  sparkle: ["M12 3.2c.9 4.6 3.4 7.2 8 8.6-4.6 1.2-7.2 3.8-8.2 8.6-1-4.8-3.4-7.4-8-8.6 4.6-1.2 7.2-4 8.2-8.6Z"],
  star: ["M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.2-4.1 5.8-.8Z"],
  brain: [
    "M11 5.2c-3-1.2-5.6 1-5.2 3.6-2.4.6-3.2 3.6-1.6 5.4-.8 2.4 1 4.8 3.6 4.4.6 2 2.8 2.8 4.8 1.8",
    "M13 5.2c3-1.2 5.6 1 5.2 3.6 2.4.6 3.2 3.6 1.6 5.4.8 2.4-1 4.8-3.6 4.4-.6 2-2.8 2.8-4.8 1.8",
    "M12 4.6v16",
    "M12 9.2h3M12 13.2h3.6M12 16.8h2.4",
  ],
  briefcase: [
    "M4.2 8.4h15.6c.6 0 1 .4 1 1v8.8c0 .6-.4 1-1 1H4.2c-.6 0-1-.4-1-1V9.4c0-.6.4-1 1-1Z",
    "M9 8.2V6.4c0-.8.6-1.4 1.4-1.4h3.2c.8 0 1.4.6 1.4 1.4v1.8",
    "M3.4 13c5.6 1.6 11.6 1.6 17.2 0",
  ],
  search: ["M10.6 4.2c3.6-.2 6.4 2.6 6.4 6s-2.8 6.4-6.4 6.4-6.4-2.8-6.4-6.4 2.8-5.8 6.4-6Z", "M15.4 15.6l4.8 4.4"],
  doc: [
    "M6.2 3.6h8l4 4v12.2c0 .4-.4.8-.8.8H6.2c-.4 0-.8-.4-.8-.8V4.4c0-.4.4-.8.8-.8Z",
    "M14 3.8v4h4",
    "M8.6 12.2h6.8M8.6 15.8h5",
  ],
  network: [
    "M12 3.6a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8Z",
    "M5.4 15.6a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8Z",
    "M18.6 15.6a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8Z",
    "M10.8 8.2l-4 7.6M13.2 8.2l4 7.6M7.8 18h8.4",
  ],
  checklist: [
    "M4 6.6l1.6 1.6 2.8-3",
    "M4 12.6l1.6 1.6 2.8-3",
    "M4 18.6l1.6 1.6 2.8-3",
    "M11.6 7h8.4M11.6 13h7.6M11.6 19h8",
  ],
  layers: ["M12 3.8l8.4 4.4-8.4 4.4-8.4-4.4Z", "M3.8 12.4l8.2 4.2 8.2-4.2", "M3.8 16.4l8.2 4.2 8.2-4.2"],
  shield: [
    "M12 3.4c2.6 1.4 5 2 7.6 2.2.2 6.6-2.2 11.6-7.6 15-5.4-3.4-7.8-8.4-7.6-15 2.6-.2 5-.8 7.6-2.2Z",
    "M8.8 12.2l2.2 2.2 4.2-4.6",
  ],
  pulse: ["M2.8 12.6h4.2l2.2-5.2 3.6 10.4 2.6-7 1.6 1.8h4.2"],
  building: [
    "M5.2 20.4V5.6c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v14.8",
    "M15.2 10.4h3.6c.6 0 1 .4 1 1v9",
    "M3.4 20.6h17.2",
    "M8.4 8.2h1.2M12 8.2h1.2M8.4 11.8h1.2M12 11.8h1.2M8.4 15.4h1.2M12 15.4h1.2",
  ],
  food: ["M7 3.6v6.2c0 1.2.8 2 2 2s2-.8 2-2V3.6", "M9 3.6v17", "M16.6 20.6V3.8c-2.2 1-3.4 3.6-3.4 7.2 0 1.6.8 2.4 2 2.6"],
  language: [
    "M4.4 5.2h11.2c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H9.8l-3.6 3v-3H4.4c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1Z",
    "M7.6 12.2l2.4-5.4 2.4 5.4M8.4 10.4h3.2",
    "M18.4 9.4h1.2c.6 0 1 .4 1 1v6.4c0 .6-.4 1-1 1h-1.2v2.6l-3-2.6h-2.4",
  ],
  branch: [
    "M6.6 3.6v12.2",
    "M6.6 20.4a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Z",
    "M17.4 8.4a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Z",
    "M17.4 8.6c0 4.8-4.2 5.4-10.8 7.2",
  ],
  card: [
    "M3.8 6.2h16.4c.6 0 1 .4 1 1v9.8c0 .6-.4 1-1 1H3.8c-.6 0-1-.4-1-1V7.2c0-.6.4-1 1-1Z",
    "M3 10.2h18",
    "M6.6 14.6h3.6",
  ],
  boxes: ["M12 3.6l7.6 4.2v8.4L12 20.4l-7.6-4.2V7.8Z", "M4.6 7.8L12 12l7.4-4.2M12 12v8.2"],
  chat: [
    "M4.2 4.8h10.4c.6 0 1 .4 1 1v6.6c0 .6-.4 1-1 1H9l-3.6 3v-3H4.2c-.6 0-1-.4-1-1V5.8c0-.6.4-1 1-1Z",
    "M18.2 9h1.6c.6 0 1 .4 1 1v6.4c0 .6-.4 1-1 1h-1.6v2.8l-3.2-2.8h-3",
  ],
  target: [
    "M12 3.6c4.8-.2 8.4 3.6 8.4 8.4s-3.8 8.4-8.4 8.4-8.4-3.6-8.4-8.4 3.4-8.2 8.4-8.4Z",
    "M12 7.8c2.4 0 4.2 1.8 4.2 4.2s-1.8 4.2-4.2 4.2-4.2-1.8-4.2-4.2 1.8-4.2 4.2-4.2Z",
    "M12 11.2v1.4",
  ],
  chart: ["M4 3.8v16.4h16.4", "M8.2 16.4v-4.2M12.2 16.4V8.6M16.2 16.4v-6.2"],
  cloud: ["M7.4 18.4c-2.4 0-4-1.6-4-3.8 0-2 1.6-3.6 3.6-3.8.4-3 2.8-5 5.6-5 2.6 0 4.8 1.8 5.4 4.4 2 .2 3.6 1.8 3.6 4 0 2.4-1.8 4.2-4.2 4.2Z"],
  ribbon: [
    "M12 3.4c3.2 0 5.6 2.4 5.6 5.4s-2.4 5.6-5.6 5.6-5.6-2.6-5.6-5.6 2.4-5.4 5.6-5.4Z",
    "M8.8 13.4l-1.6 7.2 4.8-2.6 4.8 2.6-1.6-7.2",
  ],
  mail: [
    "M3.8 6.2h16.4c.6 0 1 .4 1 1v9.8c0 .6-.4 1-1 1H3.8c-.6 0-1-.4-1-1V7.2c0-.6.4-1 1-1Z",
    "M3.2 7c3 2.6 5.8 4.8 8.8 6.6 3-1.8 5.8-4 8.8-6.6",
  ],
};

export default function DoodleIcon({
  name,
  className,
  style,
  strokeWidth = 2.1,
  draw = false,
  delay = 0,
  ...rest
}) {
  const reduceMotion = useReducedMotion();
  const paths = DOODLES[name];
  if (!paths) return null;
  const animated = draw && !reduceMotion;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
      style={style}
      {...rest}
    >
      {paths.map((d, i) =>
        animated ? (
          <motion.path
            key={i}
            d={d}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={REVEAL_VIEWPORT}
            transition={{ duration: 0.55, delay: delay + i * 0.08, ease: EASE_OUT }}
          />
        ) : (
          <path key={i} d={d} />
        ),
      )}
    </svg>
  );
}

/** Icon-component shape (`<Icon className strokeWidth />`) for maps that expect lucide-like components. */
export const doodle = (name, defaults = {}) => {
  const Icon = (props) => <DoodleIcon name={name} {...defaults} {...props} />;
  Icon.displayName = `Doodle(${name})`;
  return Icon;
};
