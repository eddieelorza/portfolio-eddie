import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import SectionHeading from './SectionHeading.jsx';
import CountUp from './ui/CountUp.jsx';

export default function Impact() {
  const { t } = useLanguage();
  return (
    <section id="impact" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow={t.impact.eyebrow}
          title={t.impact.title}
          description={t.impact.description}
        />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {t.impact.items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="card card-hover edge-glow relative overflow-hidden"
            >
              <span
                className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-30 blur-2xl"
                style={{
                  background: 'rgb(var(--accent))',
                  transform: 'translateZ(0)',
                }}
              />
              <div className="relative">
                <p className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                  <CountUp
                    value={item.value}
                    duration={1.8}
                    delay={i * 0.12}
                    className="gradient-animated inline-block"
                  />
                </p>
                <p className="mt-2 text-sm text-white/60">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
