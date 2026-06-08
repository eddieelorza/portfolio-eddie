import { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Award,
  BarChart3,
  Brain,
  Check,
  ChevronDown,
  Cloud,
  ExternalLink,
  Sparkles,
  Target,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import SectionHeading from './SectionHeading.jsx';

/**
 * EducationSection — credentials showcase.
 *
 * Two-column layout (stacks on <lg):
 *  - Left:  stats chips, accordion (4 steps), certificate links.
 *  - Right: tabs (AI / Product / Data / Cloud) + credential bento panel.
 *
 * Step ↔ Tab is bidirectional: opening a step activates the matching
 * tab and vice versa. Built without images — all visuals are JSX.
 */

const STEP_ICONS = {
  applied_ai: Brain,
  product_ownership: Target,
  data_analytics: BarChart3,
  technical_foundations: Cloud,
};

const TAB_ICONS = {
  ai: Brain,
  product: Target,
  data: BarChart3,
  cloud: Cloud,
};

const STEP_TO_TAB = {
  applied_ai: 'ai',
  product_ownership: 'product',
  data_analytics: 'data',
  technical_foundations: 'cloud',
};

const TAB_TO_STEP = Object.fromEntries(
  Object.entries(STEP_TO_TAB).map(([step, tab]) => [tab, step])
);

function getStepIcon(id) {
  return STEP_ICONS[id] || Sparkles;
}

function getTabIcon(id) {
  return TAB_ICONS[id] || Sparkles;
}

export default function EducationSection() {
  const { t } = useLanguage();
  const e = t.education;

  const [openStepId, setOpenStepId] = useState(e.steps[0].id);
  const [activeTabId, setActiveTabId] = useState(STEP_TO_TAB[e.steps[0].id] || e.tabs[0].id);

  const handleStepToggle = useCallback(
    (stepId) => {
      setOpenStepId((current) => (current === stepId ? null : stepId));
      const mappedTab = STEP_TO_TAB[stepId];
      if (mappedTab) setActiveTabId(mappedTab);
    },
    []
  );

  const handleTabChange = useCallback((tabId) => {
    setActiveTabId(tabId);
    const mappedStep = TAB_TO_STEP[tabId];
    if (mappedStep) setOpenStepId(mappedStep);
  }, []);

  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-page">
        <SectionHeading
          eyebrow={e.eyebrow}
          title={e.title}
          description={e.description}
        />

        <div className="mt-2 grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <LeftColumn
            e={e}
            openStepId={openStepId}
            onToggle={handleStepToggle}
          />
          <RightColumn
            e={e}
            activeTabId={activeTabId}
            onChange={handleTabChange}
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ LEFT COLUMN ----------------------------- */

function LeftColumn({ e, openStepId, onToggle }) {
  return (
    <div>
      {/* Stats chips */}
      <div className="flex flex-wrap gap-2">
        {e.stats.map((stat) => (
          <span key={stat} className="chip">
            {stat}
          </span>
        ))}
      </div>

      {/* Accordion */}
      <div className="mt-6 divide-y divide-white/[0.06] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
        {e.steps.map((step) => (
          <AccordionItem
            key={step.id}
            step={step}
            open={openStepId === step.id}
            onToggle={() => onToggle(step.id)}
          />
        ))}
      </div>

      {/* Certificate verification links */}
      {e.certificates && e.certificates.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {e.certificates.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="chip transition hover:border-white/25 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <Award
                className="h-3.5 w-3.5"
                style={{ color: 'rgb(var(--accent-soft))' }}
              />
              {c.label}
              <ExternalLink className="h-3 w-3 text-white/40" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function AccordionItem({ step, open, onToggle }) {
  const Icon = getStepIcon(step.id);
  const panelId = `edu-step-panel-${step.id}`;
  const headerId = `edu-step-header-${step.id}`;

  return (
    <div>
      <button
        id={headerId}
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-white/[0.025] focus-visible:outline-none focus-visible:bg-white/[0.04]"
      >
        <span
          aria-hidden
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/[0.06]"
          style={{ color: 'rgb(var(--accent-soft))' }}
        >
          <Icon className="h-4 w-4" />
        </span>
        <span className="flex-1 text-sm font-semibold tracking-tight text-white">
          {step.title}
        </span>
        <motion.span
          aria-hidden
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/40"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={headerId}
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 pl-[60px] pt-0 text-sm leading-relaxed text-white/70">
              {step.content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------ RIGHT COLUMN ---------------------------- */

function RightColumn({ e, activeTabId, onChange }) {
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
        document.getElementById(`edu-tab-${nextId}`)?.focus({
          preventScroll: true,
        });
      });
    },
    [e.tabs, activeTabId, onChange]
  );

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-3 shadow-soft md:p-4">
      {/* Tablist (segmented) */}
      <div
        role="tablist"
        aria-label={e.eyebrow}
        className="flex flex-wrap gap-1 rounded-xl bg-white/[0.03] p-1"
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
                'flex flex-1 min-w-[64px] items-center justify-center gap-2 rounded-lg px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ' +
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
        className="relative mt-3 overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-5 md:p-6"
        style={{ minHeight: '460px' }}
      >
        {/* Soft accent glow in the corner — premium, decorative */}
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
    </div>
  );
}

function CredentialBento({ tab, featuredLabel }) {
  const HeroIcon = getTabIcon(tab.id);

  return (
    <div>
      {/* Hero credential */}
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
            {tab.subtitle}
          </p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-white">
            {tab.title}
          </h3>
        </div>
      </div>

      {/* Featured credential card */}
      {tab.highlight && (
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
            {tab.highlight}
          </p>
        </div>
      )}

      {/* Items grid (2 cols on md+) */}
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {tab.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 transition hover:border-white/15 hover:bg-white/[0.04]"
          >
            <span
              aria-hidden
              className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-white/[0.05]"
              style={{ color: 'rgb(var(--accent-soft))' }}
            >
              <Check className="h-3 w-3" />
            </span>
            <span className="text-sm leading-snug text-white/80">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
