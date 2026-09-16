import { memo, useMemo, useState } from "react";
import { motion } from "motion/react";
import { REVEAL_VIEWPORT } from "../lib/animation/viewport.js";
import {
  ArrowUpRight,
  Boxes,
  Building2,
  CircleCheck,
  CreditCard,
  LayoutGrid,
  Lock,
  Maximize2,
  UtensilsCrossed,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import { useTheme } from "../contexts/ThemeContext.jsx";
import SectionHeading from "./SectionHeading.jsx";
import GlowCard from "./ui/GlowCard.jsx";
import ProjectGallery from "./ProjectGallery.jsx";
import ProjectViewer from "./ProjectViewer.jsx";

/**
 * One icon per project, positional — project titles are translated
 * ("Sistema Regional" / "Regional System"), so they cannot be used as keys.
 * Keep this array the same length and order as `t.projects.items`.
 *
 * It previously held three icons for four projects, so the fourth fell through
 * to a `|| Boxes` fallback and wore the same glyph as the second. The pairings
 * were inverted too: the payments platform got the boxes icon while the hotel
 * CRM got the credit card.
 */
const ICONS = [
  Building2, // Plataforma comercial hotelera — hotel group
  UtensilsCrossed, // SaaS de menús digitales — restaurants
  CreditCard, // Paga Fácil — payments platform (absorbed the microfrontends card)
  Boxes, // Sistema Regional — four independent microfrontends
];

/** Neutral, and deliberately not one of the four above, so a project added
 *  without extending ICONS is visibly unmapped rather than a duplicate. */
const FALLBACK_ICON = LayoutGrid;

/**
 * Column count that never strands a single card alone on the last row. Four
 * projects in a 3-up grid left one orphaned; deriving the count keeps that
 * from coming back as projects are added.
 *
 *   4 → 2 cols (2+2)   ·   5 → 3 cols (3+2)   ·   6 → 3 cols (3+3)
 */
function getGridClass(count) {
  if (count <= 2) return "sm:grid-cols-2";
  const lastRow = count % 3;
  return lastRow === 0 || lastRow === 2
    ? "md:grid-cols-2 lg:grid-cols-3"
    : "md:grid-cols-2";
}

const themeToGlow = {
  terracota: "terracota",
  azul: "azul",
  bosque: "bosque",
  tinta: "tinta",
};

const ProjectCard = memo(function ProjectCard({
  project,
  index,
  glowColor,
  Icon,
  noDemoLabel,
  newTabLabel,
  galleryLabels,
  detailLabels,
}) {
  const [viewerOpen, setViewerOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={REVEAL_VIEWPORT}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      className="h-full"
    >
      <GlowCard
        glowColor={glowColor}
        className="group flex h-full flex-col p-6"
      >
        <div className="flex items-start justify-between">
          <span
            className="grid h-11 w-11 place-items-center rounded-xl text-white shadow-soft"
            style={{
              background:
                "linear-gradient(135deg, rgb(var(--accent) / 0.45), rgb(var(--accent-glow) / 0.3))",
            }}
          >
            <Icon aria-hidden className="h-5 w-5" />
          </span>
          {/*
           * Top-right says where the project stands. A status ("En
           * producción", "Fase 1 entregada") wins; internal systems say why
           * there is no demo. The "opens elsewhere" arrow now lives on a real
           * link in the card body — it used to be a decorative icon with
           * nothing clickable behind it.
           */}
          {project.status ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-white/55">
              <CircleCheck aria-hidden className="h-3 w-3" />
              {project.status}
            </span>
          ) : project.internal ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-white/55">
              <Lock aria-hidden className="h-3 w-3" />
              {noDemoLabel}
            </span>
          ) : null}
        </div>

        <div className="mt-5">
          <p
            className="text-xs uppercase tracking-[0.18em]"
            style={{ color: "rgb(var(--accent-soft))" }}
          >
            {project.tag}
          </p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            {project.description}
          </p>
        </div>

        {project.gallery?.length > 0 && (
          <ProjectGallery
            projectTitle={project.title}
            items={project.gallery}
            labels={galleryLabels}
            variant={project.galleryVariant}
            note={project.galleryNote}
          />
        )}

        {project.figures?.length > 0 && (
          <dl className="mt-5 flex flex-wrap gap-x-7 gap-y-3 border-y border-white/[0.07] py-4">
            {project.figures.map((figure) => (
              <div key={figure.label}>
                <dt className="sr-only">{figure.label}</dt>
                <dd className="font-display text-2xl font-bold leading-none tracking-tight text-white">
                  {figure.value}
                </dd>
                <p
                  aria-hidden
                  className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-white/50"
                >
                  {figure.label}
                </p>
              </div>
            ))}
          </dl>
        )}

        <ul className="mt-5 space-y-2">
          {project.metrics.map((m) => (
            <li
              key={m}
              className="flex items-start gap-2.5 text-sm leading-relaxed text-white/75"
            >
              {/*
               * `items-start` + `shrink-0`. The dot used to be `items-center`
               * on a flex row with no shrink guard, so on multi-line bullets it
               * floated to the vertical middle of the paragraph, and the flex
               * squeeze crushed it from 6px to as little as 2.2px wide — an
               * ellipse, not a dot.
               */}
              <span
                aria-hidden
                className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: "rgb(var(--accent-soft))" }}
              />
              <span>{m}</span>
            </li>
          ))}
        </ul>

        {/*
         * Opens the long-form viewer. Every card has it: projects with
         * `detail.sections` show those, the rest fall back to their bullets.
         */}
        <button
          type="button"
          onClick={() => setViewerOpen(true)}
          aria-haspopup="dialog"
          className="group/detail mt-5 inline-flex items-center gap-1.5 self-start rounded-full text-sm font-semibold text-white transition hover:underline hover:underline-offset-4"
        >
          <Maximize2
            aria-hidden
            className="h-4 w-4 transition group-hover/detail:scale-110"
          />
          {detailLabels.open}
          <span className="sr-only">: {project.title}</span>
        </button>

        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link mt-2 inline-flex items-center gap-1.5 self-start rounded-full text-sm font-semibold transition hover:underline hover:underline-offset-4"
            style={{ color: "rgb(var(--accent-soft))" }}
          >
            {project.linkLabel}
            <span className="sr-only"> ({newTabLabel})</span>
            <ArrowUpRight
              aria-hidden
              className="h-4 w-4 transition group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </a>
        )}

        {project.stack?.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1.5 border-t border-white/5 pt-5">
            {project.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        )}
      </GlowCard>

      <ProjectViewer
        project={project}
        open={viewerOpen}
        onClose={() => setViewerOpen(false)}
        labels={detailLabels}
        galleryNote={galleryLabels.note}
        newTabLabel={newTabLabel}
      />
    </motion.div>
  );
});

export default function Projects() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const glowColor = useMemo(() => themeToGlow[theme] || "terracota", [theme]);

  return (
    <section id="proyectos" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-page">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />

        <div className={`grid gap-6 ${getGridClass(t.projects.items.length)}`}>
          {t.projects.items.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              index={i}
              glowColor={glowColor}
              Icon={ICONS[i] || FALLBACK_ICON}
              noDemoLabel={t.projects.noDemoLabel}
              newTabLabel={t.projects.newTabLabel}
              galleryLabels={t.projects.gallery}
              detailLabels={t.projects.detail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
