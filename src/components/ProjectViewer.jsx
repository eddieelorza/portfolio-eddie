import {
  ArrowUpRight,
  CalendarRange,
  CircleCheck,
  Layers,
  UserRound,
} from "lucide-react";
import WarpDialog from "./ui/WarpDialog.jsx";
import { PROJECT_IMAGES } from "./ProjectGallery.jsx";
import ArchitectureDiagram from "./diagrams/ArchitectureDiagrams.jsx";

/**
 * ProjectViewer
 *
 * The long-form view of any project, opened from its card. Cards stay a
 * skim (tag, title, three bullets); the viewer holds the evidence: screens,
 * figures, and titled sections (architecture, flow, quality…).
 *
 * Every project can open it. One with `detail.sections` shows those; one
 * without falls back to its card bullets under "Puntos clave", so adding a
 * project never requires writing a detail page first.
 *
 * Screens here are plain, large images in a horizontal scroller — not
 * buttons — so the viewer never stacks a second dialog on top of itself.
 */
export default function ProjectViewer({
  project,
  open,
  onClose,
  labels,
  galleryNote,
  newTabLabel,
}) {
  const sections = project.detail?.sections?.length
    ? project.detail.sections
    : [{ title: labels.keyPoints, points: project.metrics }];
  const shots = (project.gallery ?? []).filter((s) => PROJECT_IMAGES[s.image]);

  return (
    <WarpDialog
      open={open}
      onClose={onClose}
      title={project.title}
      eyebrow={
        labels.breadcrumb
          ? `${labels.breadcrumb} / ${project.tag}`
          : project.tag
      }
      closeLabel={labels.close}
      className="max-w-3xl"
    >
      <div className="space-y-8">
        <div>
          <p className="max-w-prose text-base leading-relaxed text-white/75">
            {project.description}
          </p>
          {project.detail?.intro && (
            <p className="mt-3 max-w-prose text-base leading-relaxed text-white/75">
              {project.detail.intro}
            </p>
          )}
        </div>

        <MetaGrid project={project} labels={labels} />

        <ArchitectureDiagram
          diagram={project.detail?.diagram}
          diagrams={project.detail?.diagrams}
        />

        {shots.length > 0 && project.galleryVariant === "desktop" && (
          <figure>
            <ul className="space-y-6">
              {shots.map((shot) => (
                <li key={shot.image}>
                  <img
                    src={PROJECT_IMAGES[shot.image]}
                    alt={shot.caption}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full rounded-xl border border-white/10"
                  />
                  <p className="mt-2 text-xs text-white/60">{shot.caption}</p>
                </li>
              ))}
            </ul>
            <figcaption className="mt-3 text-xs text-white/50">
              {project.galleryNote ?? galleryNote}
            </figcaption>
          </figure>
        )}

        {shots.length > 0 && project.galleryVariant !== "desktop" && (
          <figure>
            <ul className="-mx-1 flex snap-x gap-3 overflow-x-auto px-1 pb-2">
              {shots.map((shot) => (
                <li key={shot.image} className="shrink-0 snap-start">
                  <img
                    src={PROJECT_IMAGES[shot.image]}
                    alt={shot.caption}
                    loading="lazy"
                    decoding="async"
                    width="860"
                    height="1864"
                    className="h-80 w-auto rounded-2xl border border-white/10"
                  />
                  <p className="mt-2 text-xs text-white/60">{shot.caption}</p>
                </li>
              ))}
            </ul>
            <figcaption className="text-xs text-white/50">
              {galleryNote}
            </figcaption>
          </figure>
        )}

        {project.figures?.length > 0 && (
          <dl className="flex flex-wrap gap-x-8 gap-y-3 border-y border-white/[0.07] py-4">
            {project.figures.map((figure) => (
              <div key={figure.label}>
                <dt className="sr-only">{figure.label}</dt>
                <dd className="font-display text-2xl font-bold leading-none tracking-tight text-white">
                  {figure.value}
                </dd>
                <p
                  aria-hidden
                  className="mt-1.5 text-xs uppercase tracking-[0.14em] text-white/55"
                >
                  {figure.label}
                </p>
              </div>
            ))}
          </dl>
        )}

        <div className="grid gap-x-8 gap-y-7 md:grid-cols-2">
          {sections.map((section) => (
            <section key={section.title}>
              <h4 className="text-base font-semibold tracking-tight text-white">
                {section.title}
              </h4>
              {section.body && (
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {section.body}
                </p>
              )}
              {section.points?.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-white/75"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: "rgb(var(--accent-soft))" }}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {project.href && (
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] pt-5">
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline hover:underline-offset-4"
                style={{ color: "rgb(var(--accent-soft))" }}
              >
                {project.linkLabel}
                <span className="sr-only"> ({newTabLabel})</span>
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </WarpDialog>
  );
}

/**
 * MetaGrid
 *
 * The scannable header of a case: what state it is in, what my role was,
 * when it ran, and what it was built with — icon, label, value, in one
 * row of cells. It replaced a lone tag chip and a stack row stranded at
 * the bottom of a case that is now several screens long.
 *
 * A project without a field simply does not get that cell.
 */
function MetaGrid({ project, labels }) {
  const meta = labels.meta ?? {};
  const cells = [
    project.status && {
      icon: CircleCheck,
      label: meta.status,
      value: project.status,
    },
    project.role && { icon: UserRound, label: meta.role, value: project.role },
    project.period && {
      icon: CalendarRange,
      label: meta.period,
      value: project.period,
    },
  ].filter(Boolean);

  if (cells.length === 0 && !project.stack?.length) return null;

  return (
    <dl className="grid gap-x-6 gap-y-5 border-y border-white/[0.07] py-5 sm:grid-cols-2 lg:grid-cols-3">
      {cells.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex items-start gap-3">
          <Icon aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-white/45" />
          <div className="min-w-0">
            <dt className="text-xs uppercase tracking-[0.12em] text-white/45">
              {label}
            </dt>
            <dd className="mt-1 text-sm font-medium text-white/85">{value}</dd>
          </div>
        </div>
      ))}
      {project.stack?.length > 0 && (
        <div className="flex items-start gap-3 sm:col-span-2 lg:col-span-1">
          <Layers
            aria-hidden
            className="mt-0.5 h-4 w-4 shrink-0 text-white/45"
          />
          <div className="min-w-0">
            <dt className="text-xs uppercase tracking-[0.12em] text-white/45">
              {meta.stack}
            </dt>
            <dd className="mt-1.5 flex flex-wrap gap-1.5">
              {project.stack.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </dd>
          </div>
        </div>
      )}
    </dl>
  );
}
