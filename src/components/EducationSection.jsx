import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { REVEAL_VIEWPORT } from "../lib/animation/viewport.js";
import { ExternalLink } from "lucide-react";
import { EASE_OUT } from "../lib/animation/doodle.js";
import DoodleIcon, { doodle } from "./doodles/DoodleIcon.jsx";
import Tape from "./doodles/Tape.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import SectionHeading from "./SectionHeading.jsx";
import graduationImg from "../assets/graduation.webp";

/**
 * EducationSection
 *
 * 2-column credentials showcase (stacks on <lg):
 *  - Left: the graduation photo as a taped polaroid — chips on top,
 *    2 featured credential links below.
 *  - Right: a taped sheet with tabs (AI / Product / Data / Cloud); the
 *    active tab is a sticker. Each panel: featured cert + a mix of
 *    linked credentials and capability checks.
 */

const TAB_ICONS = {
  ai: doodle("brain"),
  product: doodle("target"),
  data: doodle("chart"),
  cloud: doodle("cloud"),
};

function getTabIcon(id) {
  return TAB_ICONS[id] || doodle("sparkle");
}

// Hover lift only where a real pointer hovers (sticky after a tap on touch).
const FINE_HOVER = "[@media(hover:hover)_and_(pointer:fine)]";

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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={REVEAL_VIEWPORT}
      transition={{ duration: 0.45, ease: EASE_OUT }}
      className="lg:-rotate-1"
    >
      {/* A polaroid taped to the page: paper frame, photo inset. The tape
          needs the frame to not clip, so overflow-hidden lives on the photo. */}
      <div className="group relative rounded-2xl border border-white/10 bg-ink-900 p-2.5 shadow-soft sm:p-3">
      <Tape tilt={-4} />
      <div className="relative overflow-hidden rounded-xl">
      {/* Graduation image fills the card — taller so it covers the
          full section height next to the tabs panel on desktop. */}
      <img
        src={graduationImg}
        alt={e.photoAlt}
        loading="lazy"
        decoding="async"
        width="1200"
        height="640"
        className={`h-[500px] w-full object-cover brightness-95 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${FINE_HOVER}:group-hover:scale-[1.02] md:h-[560px] lg:h-[580px]`}
      />

      {/* Always-visible overlay — stats on top, featured credentials at
          the bottom, with a dark scrim for legibility over the image. */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {/* Dark scrim for legibility over the image */}
        <div
          aria-hidden
          data-effect="dark-only"
          className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/25 to-ink-950/90"
        />
        {/* Light mode: a real photographic scrim (warm near-black, weighted to
            the bottom) instead of a cream veil over the whole image. The chips
            and credential cards carry their own surfaces, so they stay legible. */}
        <div
          aria-hidden
          data-effect="light-only"
          className="absolute inset-0 bg-gradient-to-b from-[rgb(28_25_23/0.18)] via-transparent to-[rgb(28_25_23/0.45)]"
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
                className="group/cred flex items-center gap-3 rounded-xl border border-white/15 bg-ink-950/55 p-3 backdrop-blur-md transition hover:border-white/30 hover:bg-ink-950/70"
              >
                <span
                  aria-hidden
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/[0.1]"
                  style={{ color: "rgb(var(--accent-soft))" }}
                >
                  <DoodleIcon name="ribbon" className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                    {e.verifyLabel}
                  </p>
                  <p className="mt-0.5 truncate text-sm font-semibold text-white">
                    {cred.label}
                  </p>
                </div>
                <ExternalLink
                  aria-hidden
                  className="h-3.5 w-3.5 shrink-0 text-white/55 transition group-hover/cred:translate-x-0.5 group-hover/cred:text-white"
                />
              </a>
            ))}
          </div>
        )}
      </div>
      </div>
      </div>
    </motion.div>
  );
}

/* ---------------------------- RIGHT: tabs panel --------------------------- */

function CredentialTabsPanel({ e, activeTabId, onChange }) {
  const activeTab = e.tabs.find((tab) => tab.id === activeTabId) || e.tabs[0];

  const handleTabKeyDown = useCallback(
    (event) => {
      const idx = e.tabs.findIndex((tab) => tab.id === activeTabId);
      if (idx < 0) return;
      let next = null;
      if (event.key === "ArrowRight") next = (idx + 1) % e.tabs.length;
      else if (event.key === "ArrowLeft")
        next = (idx - 1 + e.tabs.length) % e.tabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = e.tabs.length - 1;
      if (next === null) return;
      event.preventDefault();
      const nextId = e.tabs[next].id;
      onChange(nextId);
      // Every tab button is always mounted, so focus can move right away;
      // deferring to rAF left focus behind in a backgrounded tab.
      document
        .getElementById(`edu-tab-${nextId}`)
        ?.focus({ preventScroll: true });
    },
    [e.tabs, activeTabId, onChange],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={REVEAL_VIEWPORT}
      transition={{ duration: 0.45, delay: 0.06, ease: EASE_OUT }}
      className="relative rounded-2xl border border-white/10 bg-ink-900 p-3 pt-6 shadow-soft md:p-4 md:pt-7"
    >
      <Tape tilt={3} />
      {/* Tablist (segmented) */}
      <div
        role="tablist"
        aria-label={e.eyebrow}
        className="flex flex-wrap gap-1.5 p-1"
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
                "relative flex flex-1 min-w-[64px] items-center justify-center gap-2 rounded-lg px-3 py-2 after:absolute after:inset-x-0 after:-inset-y-1.5 after:content-[''] text-xs font-bold uppercase tracking-[0.08em] transition-[transform,background-color,color] duration-150 ease-out active:scale-[0.97] " +
                (isActive
                  ? "-rotate-1 bg-accent text-on-accent shadow-soft"
                  : "text-white/60 hover:bg-white/[0.05] hover:text-white/85")
              }
            >
              <Icon aria-hidden className="h-4 w-4" strokeWidth={2.3} />
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
        className="relative mt-2 p-3 md:p-4"
        style={{ minHeight: "460px" }}
      >

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4, transition: { duration: 0.12 } }}
            transition={{ duration: 0.22, ease: EASE_OUT }}
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
          className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/[0.06]"
          style={{ color: "rgb(var(--accent-soft))" }}
        >
          <HeroIcon aria-hidden className="h-7 w-7" draw />
        </span>
        <div className="min-w-0">
          <p className="font-hand text-xl font-bold leading-none" style={{ color: "rgb(var(--accent-soft))" }}>
            {tab.category}
          </p>
          <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-white">
            {tab.title}
          </h3>
        </div>
      </div>

      {/* Featured credential */}
      {tab.featured && (
        <div className="mt-5 rounded-xl border-2 border-dashed p-4" style={{ borderColor: "rgb(var(--accent-glow) / 0.45)" }}>
          <div className="flex items-center gap-2">
            <DoodleIcon
              name="ribbon"
              className="h-4 w-4"
              style={{ color: "rgb(var(--accent-soft))" }}
            />
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
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
                className="group flex items-start gap-2.5 rounded-xl border border-white/10 px-3 py-2.5 transition-[border-color,background-color,transform] duration-150 ease-out active:scale-[0.98] hover:border-white/25 hover:bg-white/[0.04]"
              >
                <span
                  aria-hidden
                  className="mt-0.5 shrink-0"
                  style={{ color: "rgb(var(--accent-soft))" }}
                >
                  <DoodleIcon name="ribbon" className="h-4 w-4" />
                </span>
                <span className="flex-1 text-sm leading-snug text-white/85">
                  {item.label}
                </span>
                <ExternalLink
                  aria-hidden
                  className="mt-1 h-3 w-3 shrink-0 text-white/40 transition group-hover:translate-x-0.5 group-hover:text-white"
                />
              </a>
            ) : (
              <div className="flex items-start gap-2.5 px-3 py-2.5">
                <span
                  aria-hidden
                  className="mt-0.5 shrink-0"
                  style={{ color: "rgb(var(--accent-soft))" }}
                >
                  <DoodleIcon name="check" strokeWidth={2.6} className="h-4 w-4" />
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
