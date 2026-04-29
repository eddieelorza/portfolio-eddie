import { motion } from 'motion/react';
import {
  Code2,
  Cloud,
  GitBranch,
  Workflow,
  Users,
  Compass,
  MessageSquare,
  Target,
} from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

const groups = [
  {
    title: 'Técnicas',
    items: [
      { icon: Code2, label: 'React · TypeScript · Vite' },
      { icon: Workflow, label: 'Microfrontends · Module Federation' },
      { icon: GitBranch, label: 'TanStack Query · State Management' },
      { icon: Cloud, label: 'AWS · CI/CD · Observabilidad' },
    ],
  },
  {
    title: 'Liderazgo',
    items: [
      { icon: Users, label: 'Tech Leadership de squads frontend' },
      { icon: Compass, label: 'Roadmaps técnicos y product thinking' },
      { icon: MessageSquare, label: 'Mentoría y code reviews accionables' },
      { icon: Target, label: 'Decisiones de arquitectura orientadas a impacto' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="Lo técnico y lo humano, en partes iguales"
          description="Mi mayor ventaja no es una stack, es la combinación entre criterio técnico y la capacidad de mover equipos hacia un objetivo claro."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="card card-hover edge-glow"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold tracking-tight">
                  {g.title}
                </h3>
                <span className="chip">{g.items.length} áreas</span>
              </div>

              <ul className="mt-5 grid gap-2">
                {g.items.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-3 transition hover:border-white/15 hover:bg-white/[0.05]"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/[0.05] text-accent-soft">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-white/80">{label}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
