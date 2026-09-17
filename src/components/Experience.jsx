import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import DoodleIcon from "./doodles/DoodleIcon.jsx";
import { EASE_OUT } from "../lib/animation/doodle.js";
import Tape from "./doodles/Tape.jsx";
import { REVEAL_VIEWPORT } from "../lib/animation/viewport.js";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import SectionHeading from "./SectionHeading.jsx";
import TimelineSlider from "./ui/TimelineSlider.jsx";
import useMediaQuery from "../hooks/useMediaQuery.js";

export default function Experience() {
  const { t } = useLanguage();
  const roles = t.experience.roles;
  const [active, setActive] = useState(0);
  // Tick = start year ("2026", "2025"…). Month-only ticks ("Ene · Oct · Nov ·
  // Ene") repeated and said nothing on their own; the full "company · period"
  // stays in each tick's accessible name.
  const ticks = roles.map((r) => r.period.match(/\d{4}/)?.[0] ?? r.period);
  const tickLabels = roles.map((r) => `${r.company} · ${r.period}`);
  const role = roles[active];
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section id="experiencia" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          description={t.experience.description}
        />

        {t.experience.phases && t.experience.phases.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={REVEAL_VIEWPORT}
            transition={{ duration: 0.4, ease: EASE_OUT }}
            className="mx-auto mb-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-2 gap-y-2 md:mb-14"
          >
            {t.experience.phases.map((phase, i) => {
              const isLast = i === t.experience.phases.length - 1;
              return (
                <span key={phase} className="inline-flex items-center gap-2">
                  {/* The current phase is the sticker; the path to it stays quiet. */}
                  <span
                    className={
                      isLast
                        ? "inline-block -rotate-2 rounded-md bg-accent px-3 py-1 text-xs font-bold text-on-accent shadow-soft"
                        : "chip"
                    }
                  >
                    {phase}
                  </span>
                  {!isLast && (
                    <DoodleIcon
                      name="arrow"
                      strokeWidth={2.4}
                      className="h-4 w-4"
                      style={{ color: "rgb(var(--accent-glow))" }}
                    />
                  )}
                </span>
              );
            })}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={REVEAL_VIEWPORT}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[auto_1fr] md:gap-12"
        >
          <TimelineSlider
            ticks={ticks}
            tickLabels={tickLabels}
            value={active}
            onChange={setActive}
            orientation={isDesktop ? "vertical" : "horizontal"}
            size={isDesktop ? 420 : 280}
            className={isDesktop ? "" : "w-full"}
          />

          <div className="relative md:min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.article
                key={role.company}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4, transition: { duration: 0.12 } }}
                transition={{ duration: 0.24, ease: EASE_OUT }}
                className="relative h-full rounded-2xl border border-white/10 bg-ink-900 p-6 pt-8 shadow-soft md:p-8 md:pt-10"
              >
                <Tape tilt={active % 2 ? 3 : -3} />
                <header className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.06]"
                      style={{ color: "rgb(var(--accent-soft))" }}
                    >
                      <DoodleIcon name="briefcase" className="h-6 w-6" draw />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-tight text-white md:text-xl">
                        {role.company}
                      </h3>
                      <p className="text-sm text-white/60">{role.role}</p>
                      {role.track?.length > 0 && (
                        <ul className="mt-2 flex flex-wrap gap-1.5">
                          {role.track.map((key) => (
                            <li
                              key={key}
                              className="rounded-full border px-2 py-0.5 text-xs font-semibold uppercase tracking-[0.08em]"
                              style={{
                                color: "rgb(var(--accent-soft))",
                                borderColor: "rgb(var(--accent) / 0.35)",
                              }}
                            >
                              {t.experience.trackLabels?.[key] ?? key}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <span className="flex items-center gap-2">
                    <span className="chip">{role.period}</span>
                    {/Actualidad|Present/i.test(role.period) && (
                      <span
                        aria-hidden
                        className="-rotate-3 font-hand text-xl font-bold leading-none"
                        style={{ color: "rgb(var(--accent-soft))" }}
                      >
                        {t.experience.currentNote}
                      </span>
                    )}
                  </span>
                </header>

                <p className="mt-5 text-sm leading-relaxed text-white/70">
                  {role.summary}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-[1.4fr_1fr]">
                  <ul className="space-y-3">
                    {role.impact.map((text, i) => (
                      <motion.li
                        key={text}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.06 + i * 0.05, duration: 0.24, ease: EASE_OUT }}
                        className="flex items-start gap-3"
                      >
                        <DoodleIcon
                          name="check"
                          strokeWidth={2.6}
                          draw
                          delay={0.15 + i * 0.06}
                          className="mt-0.5 h-5 w-5 flex-shrink-0"
                          style={{ color: "rgb(var(--accent-soft))" }}
                        />
                        <span className="text-sm leading-relaxed text-white/75">
                          {text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap content-start gap-1.5">
                    {role.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.86, rotate: i % 2 ? 6 : -6 }}
                        animate={{ opacity: 1, scale: 1, rotate: i % 2 ? 1.5 : -1.5 }}
                        transition={{ type: "spring", stiffness: 420, damping: 17, delay: 0.15 + i * 0.05 }}
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
