/**
 * Tiny SVG vocabulary for the architecture diagrams in the project viewer.
 *
 * Everything paints from the theme tokens, so a diagram follows cream/dark
 * and the chosen accent like the rest of the page. SVG text does not wrap,
 * which is why boxes take a short `title` plus an optional one-line `sub`.
 */

const FG = "rgb(var(--fg))";
const FG_SOFT = "rgb(var(--fg) / 0.72)";
const LINE = "rgb(var(--fg) / 0.45)";
const CANVAS = "rgb(var(--ink-950))";

export function DiagramDefs({ id }) {
  return (
    <defs>
      <marker
        id={`${id}-arrow`}
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
      >
        <path d="M0,0 L10,5 L0,10 z" fill={LINE} />
      </marker>
    </defs>
  );
}

export function Box({
  x,
  y,
  w,
  h,
  title,
  sub,
  sub2,
  tone = "base",
  align = "middle",
}) {
  const accent = tone === "accent";
  const group = tone === "group";
  // `context` = part of the system, not built by the author: same shape, dashed
  // outline, so the drawing never implies authorship it cannot back.
  const context = tone === "context";
  const tx = align === "start" ? x + 14 : x + w / 2;
  const lines = [sub, sub2].filter(Boolean);
  const titleY = group ? y + 24 : y + h / 2 - lines.length * 8 + 4;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="12"
        fill={
          accent
            ? "rgb(var(--accent) / 0.1)"
            : group
              ? "rgb(var(--fg) / 0.03)"
              : "rgb(var(--ink-900))"
        }
        stroke={accent ? "rgb(var(--accent-soft))" : "rgb(var(--fg) / 0.25)"}
        strokeWidth={accent ? 1.5 : 1}
        strokeDasharray={group || context ? "5 4" : undefined}
      />
      <text
        x={tx}
        y={titleY}
        textAnchor={align}
        fill={FG}
        fontSize="13"
        fontWeight="600"
      >
        {title}
      </text>
      {lines.map((line, i) => (
        <text
          key={line}
          x={tx}
          y={titleY + 17 + i * 15}
          textAnchor={align}
          fill={FG_SOFT}
          fontSize="11"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

export function Arrow({
  id,
  from,
  to,
  label,
  labelAt = "above",
  dashed = false,
  both = false,
}) {
  const [x1, y1] = from;
  const [x2, y2] = to;
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={LINE}
        strokeWidth="1.25"
        strokeDasharray={dashed ? "4 4" : undefined}
        markerEnd={`url(#${id}-arrow)`}
        markerStart={both ? `url(#${id}-arrow)` : undefined}
      />
      {label && (
        <text
          x={mx}
          y={labelAt === "above" ? my - 7 : my + 15}
          textAnchor="middle"
          fill={FG_SOFT}
          fontSize="11"
          stroke={CANVAS}
          strokeWidth="5"
          paintOrder="stroke"
        >
          {label}
        </text>
      )}
    </g>
  );
}

/**
 * Figure wrapper: scrolls sideways on narrow screens instead of shrinking the
 * text to an unreadable size, and gives screen readers a sentence-long
 * description of what the drawing shows.
 */
export function DiagramFigure({
  id,
  title,
  description,
  note,
  width,
  height,
  children,
}) {
  return (
    <figure>
      <div className="-mx-1 overflow-x-auto px-1 pb-2">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          role="img"
          aria-labelledby={`${id}-title ${id}-desc`}
          className="h-auto w-full min-w-[640px]"
          style={{ fontFamily: "inherit" }}
        >
          <title id={`${id}-title`}>{title}</title>
          <desc id={`${id}-desc`}>{description}</desc>
          <DiagramDefs id={id} />
          {children}
        </svg>
      </div>
      {note && (
        <figcaption className="mt-1 text-xs text-white/50">{note}</figcaption>
      )}
    </figure>
  );
}
