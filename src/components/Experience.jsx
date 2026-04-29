import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import SectionHeading from './SectionHeading.jsx';
import TimelineSlider from './ui/TimelineSlider.jsx';
import useMediaQuery from '../hooks/useMediaQuery.js';

export default function Experience() {
  const { t } = useLanguage();
  const roles = t.experience.roles;
  const [active, setActive] = useState(0);
  const ticks = roles.map((r) => r.period.split(' ')[0]);
  const role = roles[active];
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          description={t.experience.description}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[auto_1fr] md:gap-12"
        >
          <TimelineSlider
            ticks={ticks}
            value={active}
            onChange={setActive}
            orientation={isDesktop ? 'vertical' : 'horizontal'}
            size={isDesktop ? 420 : 280}
            className={isDesktop ? '' : 'w-full'}
          />

          <div className="relative md:min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.article
                key={role.company}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="card edge-glow shimmer-border h-full"
              >
                <header className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.06]"
                      style={{ color: 'rgb(var(--accent-soft))' }}
                    >
                      <Briefcase className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight md:text-xl">
                        {role.company}
                      </h3>
                      <p className="text-sm text-white/60">{role.role}</p>
                    </div>
                  </div>
                  <span className="chip">{role.period}</span>
                </header>

                <p className="mt-5 text-sm leading-relaxed text-white/70">
                  {role.summary}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-[1.4fr_1fr]">
                  <ul className="space-y-2">
                    {role.impact.map((text, i) => (
                      <motion.li
                        key={text}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                        className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-3"
                      >
                        <Sparkles
                          className="mt-0.5 h-4 w-4 flex-shrink-0"
                          style={{ color: 'rgb(var(--accent-soft))' }}
                        />
                        <span className="text-xs leading-relaxed text-white/75 md:text-sm">
                          {text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap content-start gap-1.5">
                    {role.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15 + i * 0.04, duration: 0.3 }}
                        className="chip"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
