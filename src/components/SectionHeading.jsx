import { motion } from 'motion/react';

/**
 * SectionHeading
 *
 * Optional chapter marker (e.g. `chapter="03"`, `chapterLabel="The track"`)
 * adds a subtle "01 · Label" line above the eyebrow — gives each section
 * a chapter feel without changing the visual identity.
 */
export default function SectionHeading({
  chapter,
  chapterLabel,
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      {chapter && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mb-3 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.32em] text-white/35"
        >
          <span>{chapter}</span>
          {chapterLabel && (
            <>
              <span aria-hidden className="h-px w-6 bg-white/15" />
              <span>{chapterLabel}</span>
            </>
          )}
        </motion.p>
      )}

      <motion.span
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="section-eyebrow"
      >
        <span
          className="h-1 w-1 rounded-full"
          style={{ backgroundColor: 'rgb(var(--accent-soft))' }}
        />
        {eyebrow}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mt-4 text-3xl font-semibold tracking-tight gradient-text md:text-4xl"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-4 text-base text-white/60"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
