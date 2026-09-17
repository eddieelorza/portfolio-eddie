import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Link2 } from "lucide-react";
import { REVEAL_VIEWPORT } from "../lib/animation/viewport.js";
import { EASE_OUT, markerDraw } from "../lib/animation/doodle.js";
import DoodleIcon, { doodle } from "./doodles/DoodleIcon.jsx";
import Tape from "./doodles/Tape.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { cn } from "../lib/utils.js";
import useMediaQuery from "../hooks/useMediaQuery.js";

/**
 * ProductOperatingSystem — "Cómo trabajo"
 *
 * The workflow is a sequence, so it is drawn as a route: a hand-drawn line
 * that links seven numbered stops, in order.
 *
 * Desktop (lg+): the stops are a tablist. Step 1 is open by default, so a
 * visitor who never clicks still reads one example; ← → / Home / End move
 * between steps and the detail sheet below swaps in place.
 * Mobile/tablet: the same route turns vertical and every step is visible —
 * no taps needed on a small screen.
 */

// One per step of the workflow, in order (see t.product.items).
const ICONS = {
  problem: doodle("search"),
  scope: doodle("doc"),
  solution: doodle("network"),
  plan: doodle("checklist"),
  build: doodle("layers"),
  quality: doodle("shield"),
  operate: doodle("pulse"),
};

const FALLBACK_DOODLE = doodle("sparkle");

const getIcon = (id) => ICONS[id] || FALLBACK_DOODLE;

export default function ProductOperatingSystem() {
  const { t } = useLanguage();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const data = t.product;

  return (
    <section id="producto" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeading eyebrow={data.eyebrow} title={data.title} description={data.description} />

        {isDesktop ? <RouteTabs data={data} /> : <RouteList data={data} />}

        <CraftBar craft={data.craft} />
      </div>
    </section>
  );
}

/* ------------------------------ desktop: route ----------------------------- */

// The route's geometry lives in a 0..1000 × 0..120 box stretched to the row's
// width. The SVG is 120px tall, so y maps 1:1 onto the stops' top padding;
// stops alternate above and below the midline so the line wanders.
const ROUTE_W = 1000;
const ROUTE_H = 120;
const WAVE = 20;

function stopPoint(i, total) {
  return {
    x: ((i + 0.5) / total) * ROUTE_W,
    y: ROUTE_H / 2 + (i % 2 ? WAVE : -WAVE),
  };
}

function routePath(total) {
  const pts = Array.from({ length: total }, (_, i) => stopPoint(i, total));
  return pts.reduce((d, p, i) => {
    if (i === 0) return `M${p.x} ${p.y}`;
    const prev = pts[i - 1];
    const mx = (prev.x + p.x) / 2;
    return `${d} C${mx} ${prev.y} ${mx} ${p.y} ${p.x} ${p.y}`;
  }, "");
}

function RouteTabs({ data }) {
  const reduceMotion = useReducedMotion();
  const { items } = data;
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const active = items[activeIndex] ?? items[0];

  const select = useCallback((index, { focus = false } = {}) => {
    setActiveIndex(index);
    // Synchronous focus: rAF does not fire in background tabs.
    if (focus) tabRefs.current[index]?.focus();
  }, []);

  const onKeyDown = (e) => {
    const last = items.length - 1;
    const next = {
      ArrowRight: activeIndex === last ? 0 : activeIndex + 1,
      ArrowLeft: activeIndex === 0 ? last : activeIndex - 1,
      Home: 0,
      End: last,
    }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    select(next, { focus: true });
  };

  return (
    <div className="mx-auto mt-4 max-w-5xl">
      <div className="relative">
        <svg
          aria-hidden
          viewBox={`0 0 ${ROUTE_W} ${ROUTE_H}`}
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 top-0 h-[120px] w-full"
          fill="none"
        >
          <motion.path
            d={routePath(items.length)}
            strokeWidth="3"
            strokeLinecap="round"
            style={{ stroke: "rgb(var(--accent-glow) / 0.6)" }}
            {...(reduceMotion ? {} : markerDraw({ delay: 0.1, duration: 1.2 }))}
          />
        </svg>

        <div
          role="tablist"
          aria-label={data.title.replace(/\*/g, "")}
          onKeyDown={onKeyDown}
          className="relative grid"
          style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
        >
          {items.map((item, i) => {
            const Icon = getIcon(item.id);
            const isActive = i === activeIndex;
            const { y } = stopPoint(i, items.length);
            return (
              <button
                key={item.id}
                ref={(el) => (tabRefs.current[i] = el)}
                type="button"
                role="tab"
                id={`route-tab-${item.id}`}
                aria-selected={isActive}
                aria-controls="route-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => select(i)}
                className="group flex flex-col items-center rounded-2xl pb-2 focus-visible:outline-none"
                // Centre the 56px stop on the route's y for this column.
                style={{ paddingTop: y - 28 }}
              >
                <span
                  aria-hidden
                  className={cn(
                    "relative grid h-14 w-14 place-items-center rounded-full border-2 transition-[transform,background-color,border-color,color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
                    "group-focus-visible:ring-2 group-focus-visible:ring-accent group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-ink-950",
                    "group-active:scale-95",
                    isActive
                      ? "-rotate-3 scale-110 border-transparent bg-accent text-on-accent shadow-soft"
                      : "border-white/15 bg-ink-900 text-white/80 [@media(hover:hover)_and_(pointer:fine)]:group-hover:border-accent-glow",
                  )}
                >
                  <Icon aria-hidden className="h-6 w-6" strokeWidth={2} />
                  <span
                    className={cn(
                      "absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full font-hand text-lg font-bold leading-none",
                      isActive ? "bg-ink-950 text-white" : "bg-ink-950 text-white/60",
                    )}
                  >
                    {i + 1}
                  </span>
                </span>
                <span
                  className={cn(
                    "mt-3 text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-200",
                    isActive ? "text-white" : "text-white/55",
                  )}
                >
                  {item.short ?? item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        id="route-panel"
        role="tabpanel"
        aria-labelledby={`route-tab-${active.id}`}
        className="relative mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-ink-900 p-7 pt-9 shadow-soft md:p-9 md:pt-10"
      >
        <Tape tilt={activeIndex % 2 ? 3 : -3} />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4, transition: { duration: 0.12 } }}
            transition={{ duration: 0.22, ease: EASE_OUT }}
          >
            <StepBody item={active} data={data} index={activeIndex} as="h3" />
            <RelatedSteps
              item={active}
              data={data}
              onSelect={(id) => select(items.findIndex((it) => it.id === id), { focus: true })}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function RelatedSteps({ item, data, onSelect }) {
  const related = item.related.map((rid) => data.items.find((it) => it.id === rid)).filter(Boolean);
  if (related.length === 0) return null;
  return (
    <div className="mt-6 border-t border-white/10 pt-5">
      <p className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-white/60">
        <Link2 aria-hidden className="h-3.5 w-3.5" />
        {data.relatedLabel}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {related.map((r) => {
          const RelatedIcon = getIcon(r.id);
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => onSelect(r.id)}
              className="chip transition-[transform,border-color,color] duration-150 ease-out active:scale-[0.97] hover:border-white/25 hover:text-white"
            >
              <RelatedIcon aria-hidden className="h-4 w-4" style={{ color: "rgb(var(--accent-soft))" }} />
              {r.title}
              <ArrowRight aria-hidden className="h-3 w-3 text-white/40" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* Shared by the desktop sheet and the mobile route. */
function StepBody({ item, data, index, as: Heading = "h3", showIcon = true }) {
  const Icon = getIcon(item.id);
  return (
    <>
      <div className="flex items-start gap-4">
        {showIcon && (
          <span
            aria-hidden
            className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/[0.06]"
            style={{ color: "rgb(var(--accent-soft))" }}
          >
            <Icon aria-hidden className="h-6 w-6" />
          </span>
        )}
        <div className="min-w-0">
          <p className="font-hand text-xl font-bold leading-none" style={{ color: "rgb(var(--accent-soft))" }}>
            {data.categories[item.category] ?? `${index + 1}`}
          </p>
          <Heading className="mt-1 text-balance font-display text-xl font-semibold tracking-tight text-white">
            {item.title}
          </Heading>
        </div>
      </div>
      <p className="mt-4 text-[0.95rem] leading-relaxed text-white/70">{item.content}</p>
    </>
  );
}

/* --------------------------- mobile/tablet: route -------------------------- */

function RouteList({ data }) {
  return (
    <ol className="relative mx-auto mt-2 max-w-2xl">
      {/* The route, vertical: a dotted hand line behind the stops. */}
      <span
        aria-hidden
        className="absolute bottom-6 left-[1.6rem] top-6 w-0 border-l-[3px] border-dotted"
        style={{ borderColor: "rgb(var(--accent-glow) / 0.55)" }}
      />
      {data.items.map((item, i) => {
        const Icon = getIcon(item.id);
        return (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={REVEAL_VIEWPORT}
            transition={{ duration: 0.4, ease: EASE_OUT }}
            className="relative flex gap-4 pb-8 last:pb-0"
          >
            <span
              aria-hidden
              className="relative z-10 grid h-[3.2rem] w-[3.2rem] shrink-0 place-items-center rounded-full border-2 border-white/15 bg-ink-900"
              style={{ color: "rgb(var(--accent-soft))" }}
            >
              <Icon aria-hidden className="h-6 w-6" />
              <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-accent font-hand text-lg font-bold leading-none text-on-accent">
                {i + 1}
              </span>
            </span>
            <div className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-ink-900 p-5 shadow-soft">
              <StepBody item={item} data={data} index={i} showIcon={false} />
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}

/* ------------------------- the engineering quality bar -------------------- */

// Which craft items (by position in t.product.craft.items, same order in both
// languages) belong to each group in t.product.craft.groups.
const CRAFT_GROUPS = [
  [0, 1, 7], // Build: architecture, performance, DevEx
  [2, 3, 5, 6], // Secure: security, reliability, testing, accessibility
  [4, 8, 9], // Operate & deliver: observability, delivery, product analytics
];

/**
 * The route says how I work; this band says what I hold the work to. Ten
 * equal cards read as a keyword row, so the dimensions are grouped into three
 * sheets, each a short checklist with the concrete practice behind it.
 */
function CraftBar({ craft }) {
  if (!craft) return null;
  const groups = craft.groups
    ? CRAFT_GROUPS.map((idx, g) => ({ title: craft.groups[g], items: idx.map((i) => craft.items[i]).filter(Boolean) }))
    : [{ title: null, items: craft.items }];

  return (
    <div className="mt-16 md:mt-20">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">{craft.title}</h3>
        <p className="text-sm text-white/55">{craft.note}</p>
      </div>
      <div className="mt-8 grid items-start gap-6 lg:grid-cols-3">
        {groups.map((group, g) => (
          <motion.section
            key={group.title ?? g}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={REVEAL_VIEWPORT}
            transition={{ duration: 0.4, delay: g * 0.06, ease: EASE_OUT }}
            className="relative rounded-2xl border border-white/10 bg-ink-900 p-6 pt-8 shadow-soft"
          >
            <Tape tilt={g % 2 ? 3 : -3} />
            {group.title && (
              <h4 className="font-hand text-2xl font-bold leading-none" style={{ color: "rgb(var(--accent-soft))" }}>
                {group.title}
              </h4>
            )}
            <dl className="mt-4 space-y-4">
              {group.items.map((item) => (
                <div key={item.k} className="flex gap-3">
                  <DoodleIcon
                    name="check"
                    strokeWidth={2.6}
                    className="mt-0.5 h-5 w-5 shrink-0"
                    style={{ color: "rgb(var(--accent-soft))" }}
                  />
                  <div className="min-w-0">
                    <dt className="text-sm font-semibold text-white">{item.k}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-white/70">{item.v}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
