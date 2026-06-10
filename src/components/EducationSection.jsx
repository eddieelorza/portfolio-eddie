import { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { REVEAL_VIEWPORT } from '../lib/animation/viewport.js';
import {
  Award,
  BarChart3,
  Brain,
  Check,
  Cloud,
  ExternalLink,
  Sparkles,
  Target,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import SectionHeading from './SectionHeading.jsx';
import graduationImg from '../assets/graduation.webp';

/**
 * EducationSection
 *
 * 2-column credentials showcase (stacks on <lg):
 *  - Left: "credential hero card" — chips on top, graduation image
 *    in the middle, 2 featured credential links below. Premium
 *    group-hover (border, shadow, image scale, cred lift).
 *  - Right: tabs (AI / Product / Data / Cloud) with bento-style
 *    credential panel — featured cert + mix of linked credentials
 *    and capability badges.
 */

const TAB_ICONS = {
  ai: Brain,
  product: Target,
  data: BarChart3,
  cloud: Cloud,
};

function getTabIcon(id) {
  return TAB_ICONS[id] || Sparkles;
}

export default function EducationSection() {
  const { t } = useLanguage();
  const e = t.education;
  const [activeTabId, setActiveTabId] = useState(e.tabs[0].id);

  return (
    <section id="estudios" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-page">
        <SectionHeading
          eyebrow={e.eyebrow}
          title={e.title}
          description={e.description}
        />

        <div className="mt-2 grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          <CredentialHeroCard e={e} />
          <CredentialTabsPanel
            e={e}
            activeTabId={activeTabId}
            onChange={setActiveTabId}
          />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- LEFT: hero card ---------------------------- */

function CredentialHeroCard({ e }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={REVEAL_VIEWPORT}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800 shadow-soft transition-all duration-300 hover:border-white/25"
      style={{
        willChange: 'transform',
      }}
    >
      {/* Graduation image fills the card — taller so it covers the
          full section height next to the tabs panel on desktop. */}
      <img
        src={graduationImg}
        alt={e.photoAlt}
        loading="lazy"
        decoding="async"
        width="1200"
        height="640"
        className="h-[520px] w-full object-cover brightness-95 transition-transform duration-500 will-change-transform group-hover:scale-[1.02] md:h-[580px] lg:h-[600px]"
      />

      {/* Always-visible overlay — stats on top, featured credentials at
          the bottom, with a dark scrim for legibility over the image. */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {/* Dark scrim for legibility over the image */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/25 to-ink-950/90"
        />

        {/* Subtle accent glows in the corners */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full opacity-45 blur-3xl"
          style={{ background: 'rgb(var(--accent) / 0.32)' }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full opacity-35 blur-3xl"
          style={{ background: 'rgb(var(--accent-glow) / 0.25)' }}
        />

        {/* Stats — top */}
        <div className="relative flex flex-wrap gap-2 p-5 md:p-6">
          {e.stats.map((stat) => (
            <span
              key={stat}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink-950/45 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur-md"
            >
              {stat}
            </span>
          ))}
        </div>

        {/* Featured credentials — bottom */}
        {e.featured && e.featured.length > 0 && (
          <div className="relative grid gap-2 p-5 md:p-6 sm:grid-cols-2">
            {e.featured.map((cred) => (
              <a
                key={cred.href}
                href={cred.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${cred.label} — ${e.verifyLabel}`}
                className="group/cred flex items-center gap-3 rounded-xl border border-white/15 bg-ink-950/55 p-3 backdrop-blur-md transition hover:border-white/30 hover:bg-ink-950/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <span
                  aria-hidden
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/[0.1]"
                  style={{ color: 'rgb(var(--accent-soft))' }}
                >
                  <Award className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                    {e.verifyLabel}
                  </p>
                  <p className="mt-0.5 truncate text-sm font-semibold text-white">
                    {cred.label}
                  </p>
                </div>
                <ExternalLink className="h-3.5 w-3.5 shrink-0 text-white/55 transition group-hover/cred:translate-x-0.5 group-hover/cred:text-white" />
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ---------------------------- RIGHT: tabs panel --------------------------- */

function CredentialTabsPanel({ e, activeTabId, onChange }) {
  const activeTab =
    e.tabs.find((tab) => tab.id === activeTabId) || e.tabs[0];

  const handleTabKeyDown = useCallback(
    (event) => {
      const idx = e.tabs.findIndex((tab) => tab.id === activeTabId);
      if (idx < 0) return;
      let next = null;
      if (event.key === 'ArrowRight') next = (idx + 1) % e.tabs.length;
      else if (event.key === 'ArrowLeft')
        next = (idx - 1 + e.tabs.length) % e.tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = e.tabs.length - 1;
      if (next === null) return;
      event.preventDefault();
      const nextId = e.tabs[next].id;
      onChange(nextId);
      requestAnimationFrame(() => {
        document
          .getElementById(`edu-tab-${nextId}`)
          ?.focus({ preventScroll: true });
      });
    },
    [e.tabs, activeTabId, onChange]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={REVEAL_VIEWPORT}
      transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl border border-white/10 bg-white/[0.025] p-3 shadow-soft md:p-4"
    >
      {/* Tablist (segmented) */}
      <div
        role="tablist"
        aria-label={e.eyebrow}
        className="flex flex-wrap gap-1 rounded-2xl bg-white/[0.03] p-1"
        onKeyDown={handleTabKeyDown}
      >
        {e.tabs.map((tab) => {
          const Icon = getTabIcon(tab.id);
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              id={`edu-tab-${tab.id}`}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`edu-tab-panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onChange(tab.id)}
              className={
                'flex flex-1 min-w-[64px] items-center justify-center gap-2 rounded-xl px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ' +
                (isActive
                  ? 'bg-white/[0.08] text-white shadow-soft'
                  : 'text-white/55 hover:bg-white/[0.04] hover:text-white/85')
              }
            >
              <Icon
                className="h-3.5 w-3.5"
                style={{
                  color: isActive
                    ? 'rgb(var(--accent-soft))'
                    : 'currentColor',
                }}
              />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab panel — bento */}
      <div
        id={`edu-tab-panel-${activeTab.id}`}
        role="tabpanel"
        aria-labelledby={`edu-tab-${activeTab.id}`}
        className="relative mt-3 overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-5 md:p-6"
        style={{ minHeight: '460px' }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full opacity-50 blur-3xl"
          style={{ background: 'rgb(var(--accent) / 0.25)' }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <CredentialBento tab={activeTab} featuredLabel={e.featuredLabel} />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function CredentialBento({ tab, featuredLabel }) {
  const HeroIcon = getTabIcon(tab.id);

  return (
    <div>
      {/* Hero */}
      <div className="flex items-start gap-3">
        <span
          aria-hidden
          className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white shadow-glow"
          style={{
            background:
              'linear-gradient(135deg, rgb(var(--accent) / 0.5), rgb(var(--accent-glow) / 0.3))',
          }}
        >
          <HeroIcon className="h-6 w-6" />
        </span>
        <div className="min-w-0">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: 'rgb(var(--accent-soft))' }}
          >
            {tab.category}
          </p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-white">
            {tab.title}
          </h3>
        </div>
      </div>

      {/* Featured credential */}
      {tab.featured && (
        <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <div className="flex items-center gap-2">
            <Award
              className="h-3.5 w-3.5"
              style={{ color: 'rgb(var(--accent-soft))' }}
            />
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
              {featuredLabel}
            </p>
          </div>
          <p className="mt-2 text-sm font-semibold leading-snug text-white">
            {tab.featured}
          </p>
        </div>
      )}

      {/* Items — mix of linked credentials and capability badges */}
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {tab.items.map((item) => (
          <li key={item.label}>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="group flex items-start gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2.5 transition hover:border-white/25 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <span
                  aria-hidden
                  className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-white/[0.06]"
                  style={{ color: 'rgb(var(--accent-soft))' }}
                >
                  <Award className="h-3 w-3" />
                </span>
                <span className="flex-1 text-sm leading-snug text-white/85">
                  {item.label}
                </span>
                <ExternalLink className="mt-1 h-3 w-3 shrink-0 text-white/40 transition group-hover:translate-x-0.5 group-hover:text-white" />
              </a>
            ) : (
              <div className="flex items-start gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
                <span
                  aria-hidden
                  className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-white/[0.04]"
                  style={{ color: 'rgb(var(--accent-soft))' }}
                >
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm leading-snug text-white/75">
                  {item.label}
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
