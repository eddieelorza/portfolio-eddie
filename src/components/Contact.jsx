import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { REVEAL_VIEWPORT } from "../lib/animation/viewport.js";
import { Linkedin, Github, ArrowRight } from "lucide-react";
import { doodle } from "./doodles/DoodleIcon.jsx";
import Tape from "./doodles/Tape.jsx";
import { EASE_OUT, markerDraw } from "../lib/animation/doodle.js";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import SectionHeading from "./SectionHeading.jsx";
import BackgroundGradientAnimation from "./ui/BackgroundGradientAnimation.jsx";
import WarpDialog from "./ui/WarpDialog.jsx";
import ContactForm from "./ContactForm.jsx";

/* Resting tilt per channel card; hover (mouse only) lifts and straightens it. */
const TILTS = ["-rotate-1", "rotate-[0.6deg]", "-rotate-[0.5deg]"];

const channels = [
  {
    icon: doodle("mail", { strokeWidth: 2.2 }),
    label: "Email",
    value: "edd.elorza@gmail.com",
    href: "mailto:edd.elorza@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/eddie-elorza",
    href: "https://www.linkedin.com/in/eddie-elorza",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "/eddieelorza",
    href: "https://github.com/eddieelorza",
  },
];

export default function Contact() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacityRange = reduceMotion ? [0.7, 0.7, 0.7] : [0.5, 0.95, 0.7];
  const blobOpacity = useTransform(scrollYProgress, [0, 0.4, 1], opacityRange);

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="container-page">
        {/* The closing sheet, taped like the rest. The tape sits on an outer
            wrapper because the panel clips its animated background. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={REVEAL_VIEWPORT}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          className="relative"
        >
        <Tape tilt={-3} className="z-10 h-7 w-28" />
        <div className="relative overflow-hidden rounded-3xl border border-white/10 p-8 shadow-soft md:p-14">
          <motion.div
            style={{ opacity: blobOpacity }}
            className="absolute inset-0"
          >
            <BackgroundGradientAnimation />
          </motion.div>

          {/* Light-mode panel surface: lifted card colour with a single soft
              accent wash from the top-right, where the dark blobs would sit. */}
          <div
            aria-hidden
            data-effect="light-only"
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(70% 90% at 100% 0%, rgb(var(--accent) / 0.12), transparent 65%), rgb(var(--ink-900))",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-br from-ink-950/60 via-ink-950/40 to-ink-950/70" />

          <div className="relative">
            <SectionHeading
              eyebrow={t.contact.eyebrow}
              title={t.contact.title}
              description={t.contact.description}
            />

            <div className="mx-auto grid max-w-3xl gap-3 md:grid-cols-3">
              {channels.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className={`group flex flex-col gap-3 rounded-2xl border border-white/10 bg-ink-900 p-5 shadow-soft transition-[transform,border-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-white/25 active:scale-[0.98] motion-reduce:transition-none [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1 [@media(hover:hover)_and_(pointer:fine)]:hover:rotate-0 ${TILTS[i]}`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.06]"
                      style={{ color: "rgb(var(--accent-soft))" }}
                    >
                      <Icon aria-hidden className="h-5 w-5" />
                    </span>
                    <ArrowRight
                      aria-hidden
                      className="h-4 w-4 text-white/40 transition group-hover:translate-x-0.5 group-hover:text-white"
                    />
                  </div>
                  <div>
                    <p className="font-hand text-xl font-bold leading-none" style={{ color: "rgb(var(--accent-soft))" }}>
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-white/90">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="relative mt-10 flex justify-center">
              <div className="relative">
                {/* A hand-drawn arrow curling toward the button (decorative). */}
                <svg
                  aria-hidden
                  viewBox="0 0 90 60"
                  fill="none"
                  className="pointer-events-none absolute -left-24 top-1/2 hidden h-14 w-24 -translate-y-1/2 md:block"
                >
                  <motion.path
                    d="M6 12c14-6 34-4 44 10 6 9 14 14 30 14"
                    strokeWidth="3"
                    strokeLinecap="round"
                    style={{ stroke: "rgb(var(--accent-glow))" }}
                    {...(reduceMotion ? {} : markerDraw({ delay: 0.4, duration: 0.6 }))}
                  />
                  <motion.path
                    d="M70 27l11 9-12 7"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ stroke: "rgb(var(--accent-glow))" }}
                    {...(reduceMotion ? {} : markerDraw({ delay: 0.95, duration: 0.25 }))}
                  />
                </svg>
              <motion.button
                type="button"
                onClick={() => setOpen(true)}
                whileTap={{ scale: 0.97 }}
                className="btn-accent group -rotate-1"
              >
                {t.contact.cta}
                <ArrowRight
                  aria-hidden
                  className="h-4 w-4 transition group-hover:translate-x-0.5"
                />
              </motion.button>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
      </div>

      <WarpDialog
        open={open}
        onClose={() => setOpen(false)}
        title={t.contact.cta}
        closeLabel={t.a11y.close}
      >
        <ContactForm onSuccess={() => setOpen(false)} />
      </WarpDialog>
    </section>
  );
}
