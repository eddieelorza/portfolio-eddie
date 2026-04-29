import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import SectionHeading from './SectionHeading.jsx';
import { GradientWord } from './AnimatedText.jsx';

const tagsContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};

const tagSharpen = {
  hidden: { opacity: 0, y: 14, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

        <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-base leading-relaxed text-white/70"
          >
            <p>{t.about.p1}</p>
            <p>
              {t.about.p2.split(' ').map((word, i) => {
                const highlight = ['product', 'product:', 'producto'].includes(
                  word.toLowerCase()
                );
                return (
                  <span key={i}>
                    {highlight ? <GradientWord>{word}</GradientWord> : word}{' '}
                  </span>
                );
              })}
            </p>
            {t.about.p3 && <p>{t.about.p3}</p>}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card edge-glow shimmer-border"
          >
            <motion.ul
              variants={tagsContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="space-y-3"
            >
              {t.about.tags.map((tag) => (
                <motion.li
                  key={tag}
                  variants={tagSharpen}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3"
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: 'rgb(var(--accent))' }}
                  />
                  <span className="text-sm font-medium text-white/85">
                    {tag}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
