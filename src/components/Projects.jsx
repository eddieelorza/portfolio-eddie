import { useMemo, useState } from "react";
import { LayoutGrid, Plus } from "lucide-react";
import { doodle } from "./doodles/DoodleIcon.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import SectionHeading from "./SectionHeading.jsx";
import ServiceCarousel from "./ui/ServiceCarousel.jsx";
import ProjectViewer from "./ProjectViewer.jsx";

/**
 * One icon per project, positional — project titles are translated
 * ("Sistema Regional" / "Regional System"), so they cannot be used as keys.
 * Keep this array the same length and order as `t.projects.items`.
 */
const ICONS = [
  doodle("building"), // CRM comercial hotelero — hotel group
  doodle("network"), // Entre Todos — community resource graph
  doodle("food"), // Tastify — restaurants SaaS
  doodle("language"), // English OS — study system
  doodle("branch"), // Spine — product reasoning graph in git
  doodle("card"), // Paga Fácil — payments platform
  doodle("boxes"), // Sistema Regional — independent microfrontends
  doodle("chat"), // Octobile — internal messaging app
];

/** Neutral, and deliberately not one of the above, so a project added
 *  without extending ICONS is visibly unmapped rather than a duplicate. */
const FALLBACK_ICON = LayoutGrid;

/**
 * The section is a skim: numbered minimal cards in a carousel. Everything
 * else a project carries — gallery, figures, bullets, stack, external link —
 * lives in ProjectViewer, opened from each card's "Ver recursos".
 *
 * A single viewer is mounted for the section (it used to be one per card).
 */
export default function Projects() {
  const { t } = useLanguage();
  // `viewer.index` outlives `open` so the dialog keeps its content while its
  // exit animation plays.
  const [viewer, setViewer] = useState({ index: 0, open: false });
  const { items, detail, carousel } = t.projects;

  const cards = useMemo(
    () =>
      items.map((project, i) => ({
        id: project.title,
        number: String(i + 1).padStart(3, "0"),
        eyebrow: project.tag,
        title: project.title,
        description: project.description,
        icon: ICONS[i] || FALLBACK_ICON,
        action: (
          <button
            type="button"
            onClick={() => setViewer({ index: i, open: true })}
            aria-haspopup="dialog"
            className="group/detail inline-flex items-center gap-2 rounded-full text-sm font-semibold text-white after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:outline-none hover:underline hover:underline-offset-4"
          >
            <span
              aria-hidden
              className="grid h-7 w-7 place-items-center rounded-full bg-accent text-on-accent transition-transform duration-200 ease-out group-hover/detail:rotate-90"
            >
              <Plus className="h-4 w-4" />
            </span>
            {detail.open}
            <span className="sr-only">: {project.title}</span>
          </button>
        ),
      })),
    [items, detail.open],
  );

  return (
    <section id="proyectos" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-page">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />

        <ServiceCarousel items={cards} labels={carousel} />
      </div>

      <ProjectViewer
        project={items[viewer.index] ?? items[0]}
        open={viewer.open}
        onClose={() => setViewer((v) => ({ ...v, open: false }))}
        labels={detail}
        galleryNote={t.projects.gallery.note}
        newTabLabel={t.projects.newTabLabel}
      />
    </section>
  );
}
