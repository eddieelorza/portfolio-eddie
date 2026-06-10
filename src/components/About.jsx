import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import SectionHeading from './SectionHeading.jsx';
import { GradientWord } from './AnimatedText.jsx';
import { REVEAL_VIEWPORT } from '../lib/animation/viewport.js';

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

// Keywords highlighted with GradientWord. Lowercased + simple punctuation
// stripped at match time so we hit "producto" inside "producto,".
const HIGHLIGHT_KEYWORDS = new Set([
  'producto',
  'productos',
  'product',
  'products',
  'fintech',
  'ia',
  'ai',
  'pspo',
  'msc',
]);

function stripWord(word) {
  return word.toLowerCase().replace(/[.,;:!?()]/g, '');
}

function HighlightedText({ children }) {
  return (
    <>
      {children.split(' ').map((word, i) => {
        const stripped = stripWord(word);
        const highlight = HIGHLIGHT_KEYWORDS.has(stripped);
        return (
          <span key={i}>
            {highlight ? <GradientWord>{word}</GradientWord> : word}{' '}
          </span>
        );
      })}
    </>
  );
}

export default function About() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  // Subtle parallax on the decorative accent blob — drifts as the
  // user scrolls past About. transform/opacity only, GPU-friendly.
  const blobY = useTransform(scrollY, [400, 1600], [-40, 80]);

  return (
    <section
      id="sobre-mi"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <motion.div
        aria-hidden
        style={{
          y: blobY,
          background: 'rgb(var(--accent) / 0.32)',
        }}
        className="pointer-events-none absolute right-[-12%] top-[18%] h-72 w-72 rounded-full opacity-25 blur-3xl"
      />

      <div className="container-page">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

        <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={REVEAL_VIEWPORT}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-base leading-relaxed text-white/70"
          >
            <p>
              <HighlightedText>{t.about.p1}</HighlightedText>
            </p>
            <p>
              <HighlightedText>{t.about.p2}</HighlightedText>
            </p>
            {t.about.p3 && (
              <p>
                <HighlightedText>{t.about.p3}</HighlightedText>
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={REVEAL_VIEWPORT}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card edge-glow shimmer-border"
          >
            <motion.ul
              variants={tagsContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ ...REVEAL_VIEWPORT, amount: 0.15 }}
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
