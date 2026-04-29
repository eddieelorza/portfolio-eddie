import { motion } from 'motion/react';
import { ArrowUpRight, Boxes, CreditCard, Globe2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { useTheme } from '../contexts/ThemeContext.jsx';
import SectionHeading from './SectionHeading.jsx';
import GlowCard from './ui/GlowCard.jsx';

const ICONS = [CreditCard, Boxes, Globe2];

const themeToGlow = {
  purple: 'purple',
  cyan: 'cyan',
  orange: 'orange',
  green: 'green',
};

export default function Projects() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const glowColor = themeToGlow[theme] || 'purple';

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-page">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((p, i) => {
            const Icon = ICONS[i] || Boxes;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
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
                          'linear-gradient(135deg, rgb(var(--accent) / 0.45), rgb(var(--accent-glow) / 0.3))',
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                  </div>

                  <div className="mt-5">
                    <p
                      className="text-xs uppercase tracking-[0.18em]"
                      style={{ color: 'rgb(var(--accent-soft))' }}
                    >
                      {p.tag}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {p.description}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-1.5">
                    {p.metrics.map((m) => (
                      <li
                        key={m}
                        className="flex items-center gap-2 text-sm text-white/75"
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{
                            backgroundColor: 'rgb(var(--accent-soft))',
                          }}
                        />
                        {m}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/5 pt-5">
                    {p.stack.map((s) => (
                      <span key={s} className="chip !text-[11px]">
                        {s}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
