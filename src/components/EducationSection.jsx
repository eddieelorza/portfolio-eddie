import { motion } from 'motion/react';
import { Award, ExternalLink, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import SectionHeading from './SectionHeading.jsx';
import graduationImg from '../assets/graduation.jpeg';

const bulletsContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.08 },
  },
};

const bulletItem = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function EducationSection() {
  const { t } = useLanguage();
  const e = t.education;

  return (
    <section id="education" className="relative py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-page">
        <SectionHeading
          eyebrow={e.eyebrow}
          title={e.title}
          description={e.description}
        />

        <div className="mx-auto mt-10 max-w-6xl md:mt-12">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] shadow-soft md:grid md:grid-cols-[0.95fr_1.05fr]">
            <motion.figure
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
              style={{ willChange: 'transform' }}
            >
              <div
                aria-hidden
                className="absolute -inset-6 opacity-25 blur-2xl"
                style={{
                  background:
                    'linear-gradient(135deg, rgb(var(--accent) / 0.45), rgb(var(--accent-glow) / 0.16))',
                  transform: 'translateZ(0)',
                }}
              />

              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-[340px] overflow-hidden bg-ink-800 md:h-[480px]"
                style={{ willChange: 'transform' }}
              >
                <img
                  src={graduationImg}
                  alt={e.photoAlt}
                  loading="lazy"
                  className="h-full w-full object-cover brightness-90 contrast-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-ink-950/10 md:to-ink-950/45" />
              </motion.div>
            </motion.figure>

            <motion.article
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.65,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10 -mt-6 flex min-h-[390px] flex-col border-t border-white/10 bg-ink-950/80 p-5 backdrop-blur md:mt-0 md:min-h-[480px] md:border-l md:border-t-0 md:bg-ink-950/65 md:p-8"
              style={{ willChange: 'transform' }}
            >
              <div className="flex items-start gap-3">
                <span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/[0.06]"
                  style={{ color: 'rgb(var(--accent-soft))' }}
                >
                  <GraduationCap className="h-4.5 w-4.5" />
                </span>

                <div className="min-w-0">
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                    style={{ color: 'rgb(var(--accent-soft))' }}
                  >
                    {e.cardLabel}
                  </p>

                  <h3 className="mt-1.5 text-2xl font-semibold leading-tight tracking-tight text-white md:text-[1.7rem]">
                    {e.cardTitle}
                  </h3>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {e.meta.map((m, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-white/65"
                  >
                    {m}
                  </span>
                ))}
              </div>

              <motion.ul
                variants={bulletsContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-5 space-y-3 border-t border-white/5 pt-5"
              >
                {e.highlights.map((text, i) => (
                  <motion.li
                    key={i}
                    variants={bulletItem}
                    className="flex items-start gap-3 text-sm leading-relaxed text-white/65"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: 'rgb(var(--accent-soft))' }}
                    />
                    <span>{text}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {e.certificates.map((c, i) => (
                  <motion.a
                    key={i}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-white/80 transition hover:border-white/25 hover:bg-white/[0.08]"
                  >
                    <Award
                      className="h-3.5 w-3.5"
                      style={{ color: 'rgb(var(--accent-soft))' }}
                    />
                    {c.label}
                    <ExternalLink className="h-3 w-3 text-white/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}