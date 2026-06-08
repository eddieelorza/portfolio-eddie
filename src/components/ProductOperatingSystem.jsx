import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  ArrowRight,
  Bot,
  CreditCard,
  GitBranch,
  Link2,
  Rocket,
  Search,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import SectionHeading from './SectionHeading.jsx';
import useMediaQuery from '../hooks/useMediaQuery.js';

/**
 * ProductOperatingSystem
 *
 * Radial orbital visualization of the product operating model.
 * - Desktop (lg+): orbital interaction with auto-rotation + floating
 *   detail dialog rendered ABSOLUTELY inside the orbital container
 *   (no layout push, no CLS).
 * - Mobile/tablet: graceful fallback to a card grid using the site
 *   design system (.card, .chip, edge-glow).
 *
 * Data lives in `t.product` (see translations.js). Icons map by id.
 */

const ICONS = {
  payments: CreditCard,
  discovery: Search,
  prioritization: GitBranch,
  ai: Bot,
  stakeholders: Users,
  delivery: Rocket,
};

// Rotation: ~3°/s (≈120s per revolution). Slow + premium.
const ROTATION_STEP = 0.15; // degrees per tick
const TICK_MS = 50;
const RADIUS_LG = 200; // px, default desktop orbit radius
const RADIUS_XL = 230; // px, ≥1280px

function getIcon(id) {
  return ICONS[id] || Sparkles;
}

export default function ProductOperatingSystem() {
  const { t } = useLanguage();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const data = t.product;
  const [activeId, setActiveId] = useState(null);

  const activeItem = useMemo(
    () => data.items.find((it) => it.id === activeId) || null,
    [data.items, activeId]
  );

  return (
    <section id="product" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
        />

        {isDesktop ? (
          <OrbitalView
            data={data}
            activeId={activeId}
            activeItem={activeItem}
            onSelect={setActiveId}
          />
        ) : (
          <GridView data={data} />
        )}
      </div>
    </section>
  );
}

/* -------------------------- desktop: orbital view ------------------------- */

function OrbitalView({ data, activeId, activeItem, onSelect }) {
  const reduceMotion = useReducedMotion();
  const isXl = useMediaQuery('(min-width: 1280px)');
  const radius = isXl ? RADIUS_XL : RADIUS_LG;

  const [angle, setAngle] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  const paused =
    reduceMotion || activeId !== null || isHovering || isFocused;

  // Auto-rotation loop. Paused when not needed.
  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => {
      setAngle((a) => (a + ROTATION_STEP) % 360);
    }, TICK_MS);
    return () => clearInterval(id);
  }, [paused]);

  // Close on Escape while the floating detail is open.
  useEffect(() => {
    if (!activeId) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onSelect(null);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [activeId, onSelect]);

  // Restore focus to the triggering node when the dialog closes.
  useEffect(() => {
    if (activeId || !triggerRef.current) return;
    const node = triggerRef.current;
    triggerRef.current = null;
    requestAnimationFrame(() => {
      try {
        node.focus({ preventScroll: true });
      } catch {
        node.focus();
      }
    });
  }, [activeId]);

  const positions = useMemo(() => {
    const total = data.items.length;
    return data.items.map((_, index) => {
      const a = ((index / total) * 360 + angle) % 360;
      const rad = (a * Math.PI) / 180;
      const x = radius * Math.cos(rad);
      const y = radius * Math.sin(rad);
      const depth = (1 + Math.sin(rad)) / 2; // 0..1 (back → front)
      const opacity = 0.5 + 0.5 * depth;
      const scale = 0.9 + 0.18 * depth;
      const zIndex = Math.round(10 + 20 * depth); // 10..30, all below overlay (40)
      return { x, y, opacity, scale, zIndex };
    });
  }, [data.items, angle, radius]);

  const activeRelated = activeItem ? activeItem.related : [];

  const handleBlur = useCallback((e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setIsFocused(false);
  }, []);

  const close = useCallback(() => onSelect(null), [onSelect]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={handleBlur}
      className="relative mx-auto mt-6 min-h-[620px] w-full max-w-3xl md:min-h-[720px] xl:max-w-4xl"
      aria-label={data.title}
    >
      {/* Decorative center hub */}
      <CenterHub />

      {/* Decorative orbit ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]"
        style={{ width: radius * 2, height: radius * 2 }}
      />

      {/* Nodes */}
      {data.items.map((item, i) => {
        const pos = positions[i];
        const Icon = getIcon(item.id);
        const isActive = item.id === activeId;
        const isRelated = activeRelated.includes(item.id);
        const isDimmed = activeId !== null && !isActive && !isRelated;

        return (
          <button
            key={item.id}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (isActive) {
                close();
              } else {
                triggerRef.current = e.currentTarget;
                onSelect(item.id);
              }
            }}
            aria-expanded={isActive}
            aria-controls="product-os-dialog"
            className="group absolute focus:outline-none"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
              zIndex: pos.zIndex,
              opacity: isDimmed ? 0.28 : pos.opacity,
              transition: 'opacity 300ms ease',
            }}
          >
            <span
              aria-hidden
              className="relative grid h-11 w-11 place-items-center rounded-full border transition group-focus-visible:ring-2 group-focus-visible:ring-white/40 group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-ink-950"
              style={{
                background: isActive
                  ? 'linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-glow)))'
                  : isRelated
                  ? 'rgba(255,255,255,0.06)'
                  : 'rgba(255,255,255,0.04)',
                borderColor: isActive
                  ? 'transparent'
                  : isRelated
                  ? 'rgb(var(--accent-soft))'
                  : 'rgba(255,255,255,0.18)',
                color: isActive ? '#fff' : 'rgba(255,255,255,0.85)',
                transform: `scale(${isActive ? 1.18 : pos.scale})`,
                boxShadow: isActive
                  ? '0 12px 40px -12px rgb(var(--accent) / 0.6)'
                  : 'none',
                transition:
                  'transform 250ms ease, background 250ms ease, border-color 250ms ease, box-shadow 250ms ease',
              }}
            >
              <Icon className="h-5 w-5" />
            </span>
            <span
              className="pointer-events-none absolute left-1/2 mt-3 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.18em] transition"
              style={{
                top: '100%',
                color: isActive
                  ? '#fff'
                  : isRelated
                  ? 'rgba(255,255,255,0.85)'
                  : 'rgba(255,255,255,0.55)',
              }}
            >
              {item.title}
            </span>
          </button>
        );
      })}

      {/* Floating detail (absolute inside the orbital container) */}
      <AnimatePresence>
        {activeItem && (
          <>
            <motion.button
              key="pos-overlay"
              type="button"
              onClick={close}
              aria-label={data.closeLabel}
              tabIndex={-1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 z-40 cursor-default bg-black/20 backdrop-blur-[1px]"
            />
            <motion.div
              key={`pos-dialog-${activeItem.id}`}
              role="dialog"
              aria-modal="true"
              aria-labelledby="product-os-dialog-title"
              id="product-os-dialog"
              initial={{ opacity: 0, scale: 0.96, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 6 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-1/2 z-50 w-[min(92vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-[#08080b]/90 p-6 shadow-2xl backdrop-blur-xl md:p-8"
            >
              <DetailDialog
                item={activeItem}
                items={data.items}
                data={data}
                onSelect={onSelect}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function CenterHub() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
    >
      <div
        className="absolute -inset-10 rounded-full opacity-40 blur-3xl"
        style={{ background: 'rgb(var(--accent) / 0.45)' }}
      />
      <motion.div
        className="relative grid h-16 w-16 place-items-center rounded-full text-white"
        style={{
          background:
            'linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-glow)))',
          boxShadow: '0 14px 50px -10px rgb(var(--accent) / 0.55)',
        }}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Sparkles className="h-6 w-6" />
      </motion.div>
    </div>
  );
}

function DetailDialog({ item, items, data, onSelect }) {
  const Icon = getIcon(item.id);
  const closeBtnRef = useRef(null);
  const related = item.related
    .map((rid) => items.find((it) => it.id === rid))
    .filter(Boolean);

  // Auto-focus the close button so Escape / Tab flow has a clear start.
  useEffect(() => {
    closeBtnRef.current?.focus({ preventScroll: true });
  }, [item.id]);

  return (
    <>
      <button
        ref={closeBtnRef}
        type="button"
        onClick={() => onSelect(null)}
        aria-label={data.closeLabel}
        className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      >
        <X className="h-4 w-4" />
      </button>

      <div className="flex items-start gap-3 pr-10">
        <span
          aria-hidden
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.06]"
          style={{ color: 'rgb(var(--accent-soft))' }}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: 'rgb(var(--accent-soft))' }}
          >
            {data.categories[item.category]}
          </p>
          <h3
            id="product-os-dialog-title"
            className="mt-1 text-lg font-semibold tracking-tight"
          >
            {item.title}
          </h3>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-white/70">
        {item.content}
      </p>

      <div className="mt-5">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>{data.strengthLabel}</span>
          <span className="font-mono text-white/80">{item.strength}%</span>
        </div>
        <div
          className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={item.strength}
          aria-label={data.strengthLabel}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${item.strength}%` }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full"
            style={{
              background:
                'linear-gradient(90deg, rgb(var(--accent)), rgb(var(--accent-glow)))',
            }}
          />
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-5 border-t border-white/5 pt-4">
          <div className="flex items-center gap-2 text-[11px] text-white/60">
            <Link2 className="h-3.5 w-3.5" />
            <span className="uppercase tracking-[0.18em]">
              {data.relatedLabel}
            </span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {related.map((r) => {
              const RelatedIcon = getIcon(r.id);
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => onSelect(r.id)}
                  className="chip transition hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <RelatedIcon
                    className="h-3.5 w-3.5"
                    style={{ color: 'rgb(var(--accent-soft))' }}
                  />
                  {r.title}
                  <ArrowRight className="h-3 w-3 text-white/40" />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

/* ----------------------- mobile/tablet: grid fallback --------------------- */

function GridView({ data }) {
  return (
    <div className="mt-2 grid gap-5 md:grid-cols-2">
      {data.items.map((item, i) => {
        const Icon = getIcon(item.id);
        return (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.55,
              delay: i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="card card-hover edge-glow"
          >
            <div className="flex items-start gap-3">
              <span
                aria-hidden
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.06]"
                style={{ color: 'rgb(var(--accent-soft))' }}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.2em]"
                  style={{ color: 'rgb(var(--accent-soft))' }}
                >
                  {data.categories[item.category]}
                </p>
                <h3 className="mt-1 text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {item.content}
            </p>
            <div className="mt-5">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>{data.strengthLabel}</span>
                <span className="font-mono text-white/80">{item.strength}%</span>
              </div>
              <div
                className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={item.strength}
                aria-label={data.strengthLabel}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${item.strength}%`,
                    background:
                      'linear-gradient(90deg, rgb(var(--accent)), rgb(var(--accent-glow)))',
                  }}
                />
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
