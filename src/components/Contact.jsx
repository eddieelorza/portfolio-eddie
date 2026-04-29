import { useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import SectionHeading from './SectionHeading.jsx';
import BackgroundGradientAnimation from './ui/BackgroundGradientAnimation.jsx';
import WarpDialog from './ui/WarpDialog.jsx';
import ContactForm from './ContactForm.jsx';

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'edd.elorza@gmail.com',
    href: 'mailto:edd.elorza@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/eddie-elorza',
    href: 'https://www.linkedin.com/in/eddie-elorza',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '/eddieelorza',
    href: 'https://github.com/eddieelorza',
  },
];

export default function Contact() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const scaleRange = reduceMotion ? [1, 1, 1] : [0.96, 1.02, 1];
  const opacityRange = reduceMotion ? [0.7, 0.7, 0.7] : [0.5, 0.95, 0.7];
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], scaleRange);
  const blobOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    opacityRange
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ scale }}
          className="relative overflow-hidden rounded-3xl border border-white/10 p-8 md:p-14"
        >
          <motion.div
            style={{ opacity: blobOpacity }}
            className="absolute inset-0"
          >
            <BackgroundGradientAnimation />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-br from-ink-950/60 via-ink-950/40 to-ink-950/70" />

          <div className="relative">
            <SectionHeading
              eyebrow={t.contact.eyebrow}
              title={t.contact.title}
              description={t.contact.description}
            />

            <div className="mx-auto grid max-w-3xl gap-3 md:grid-cols-3">
              {channels.map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                  className="group glass edge-glow flex flex-col gap-3 rounded-2xl p-5 transition hover:border-white/25"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.06]"
                      style={{ color: 'rgb(var(--accent-soft))' }}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowRight className="h-4 w-4 text-white/40 transition group-hover:translate-x-0.5 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-white/90">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <motion.button
                type="button"
                onClick={() => setOpen(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-accent group"
              >
                {t.contact.cta}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <WarpDialog open={open} onClose={() => setOpen(false)} title={t.contact.cta}>
        <ContactForm onSuccess={() => setOpen(false)} />
      </WarpDialog>
    </section>
  );
}
