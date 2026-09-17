import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Sparkles } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import TextRotator from "./ui/TextRotator.jsx";
import SparklesText from "./ui/SparklesText.jsx";
import InteractiveGradientBackground from "./ui/InteractiveGradientBackground.jsx";
import { PrimaryCTA, GhostCTA } from "./ui/HeroButtons.jsx";
import { cn } from "../lib/utils.js";
import avatarImg from "../assets/avatar.webp";
import profileImg from "../assets/eddie-portrait.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  // Subtle parallax on the big accent blob — drifts down as the user
  // scrolls into the next section. transform/opacity only.
  const blobY = useTransform(scrollY, [0, 600], [0, 90]);
  const blobOpacity = useTransform(scrollY, [0, 600], [1, 0.4]);

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
      style={{ isolation: "isolate" }}
    >
      <InteractiveGradientBackground intensity={0.8} opacity={0.45} />
      <div
        className="absolute inset-0 bg-grid opacity-40"
        style={{ transform: "translateZ(0)" }}
      />
      <motion.div
        aria-hidden
        style={{
          y: blobY,
          x: "-50%",
          opacity: blobOpacity,
          background: "rgb(var(--accent) / 0.18)",
        }}
        className="absolute -top-40 left-1/2 h-[500px] w-[800px] rounded-full blur-3xl"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/70 backdrop-blur"
            >
              <Sparkles
                aria-hidden
                className="h-3.5 w-3.5"
                style={{ color: "rgb(var(--accent-soft))" }}
              />
              <span>{t.hero.badge}</span>
            </motion.div>

            <SparklesText count={10} className="mt-6 block">
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={1}
                className="text-[2rem] font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.5rem]"
              >
                <span className="text-white">{t.hero.title1}</span>
                <br className="md:hidden" />{" "}
                {/* A real space, not md:ml-3: the margin indented the word
                    whenever it wrapped onto its own line. */}
                <span className="inline-block">
                  <TextRotator
                    words={t.hero.rotatingWords}
                    interval={3500}
                    className="font-bold"
                  />
                </span>
                <br />
                <span className="text-white/80">{t.hero.title2}</span>
              </motion.h1>
            </SparklesText>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-6 max-w-xl text-base text-white/65 md:text-lg"
            >
              {t.hero.subtitle}
            </motion.p>

            {t.hero.chips && t.hero.chips.length > 0 && (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={2.6}
                className="mt-6 flex flex-wrap gap-2"
              >
                {t.hero.chips.map((c) => (
                  <span key={c} className="chip">
                    {c}
                  </span>
                ))}
              </motion.div>
            )}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3.4}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <PrimaryCTA href="#proyectos">{t.hero.ctaProjects}</PrimaryCTA>
              <GhostCTA href="#contact">{t.hero.ctaContact}</GhostCTA>
            </motion.div>
          </div>

          <HeroVisual hello={t.hero.stickerHello} tag={t.hero.stickerTag} />
        </div>
      </div>
    </section>
  );
}

/*
 * Sticker-collage hero, after the playful portfolio references: the cutout
 * portrait breaks out of an organic accent blob, wears a white sticker outline
 * (.sticker-outline in index.css), and a few stickers and hand-drawn marks sit
 * around it. Everything is painted from the accent tokens, so gradient accents
 * show both hues in the blob and the whole collage follows light/dark mode.
 *
 * Motion is decorative and seen once per visit: a short staggered pop-in with
 * a strong ease-out, then a slow float on the stickers. MotionConfig's
 * reducedMotion="user" drops the transforms for people who ask for less.
 */
const EASE_OUT = [0.23, 1, 0.32, 1];

const pop = (delay) => ({
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.45, delay, ease: EASE_OUT },
});

const float = (distance, duration) => ({
  animate: { y: [0, -distance, 0] },
  transition: { duration, repeat: Infinity, ease: "easeInOut" },
});

/*
 * Terminal palette. The window is a fixed dark object in both modes (like the
 * white sticker edges), so its text colours are fixed too; all of them clear
 * 4.5:1 on #0D0D14.
 */
const TERM = {
  bg: "rgb(13 13 20)",
  text: "rgb(226 232 240)",
  dim: "rgb(148 163 184)",
  ok: "rgb(74 222 128)",
  prompt: "rgb(125 211 252)",
  deploy: "rgb(244 114 182)",
};

/*
 * The session the terminal plays: a Starship prompt, a typed Claude Code
 * command, the spinner, then the results. `cost` is how many ticks a step
 * takes — typed steps spend one tick per character, the rest appear at once
 * and hold for their cost.
 */
const SESSION = [
  { kind: "typed", text: 'claude "ship it"' },
  { kind: "thinking", cost: 16 },
  { kind: "line", cost: 7, bullet: "⏺", bulletColor: TERM.ok, text: "Deployed ✓" },
];
const SESSION_HOLD = 34;
const POWERLINE_FIRST = "polygon(0 0, calc(100% - 7px) 0, 100% 50%, calc(100% - 7px) 100%, 0 100%)";
const POWERLINE_NEXT = "polygon(0 0, calc(100% - 7px) 0, 100% 50%, calc(100% - 7px) 100%, 0 100%, 7px 50%)";

/*
 * Warp/iTerm-style glass window: translucent and blurred, so the collage
 * shows through it, with a Starship powerline prompt in the accent colours
 * and a Claude Code session. One setInterval drives the playback; under
 * reduced motion everything is shown at once and it never ticks.
 */
function HeroTerminal() {
  const reduceMotion = useReducedMotion();
  const steps = SESSION.map((step) => ({
    ...step,
    cost: step.kind === "typed" ? step.text.length : step.cost,
  }));
  const total = steps.reduce((n, st) => n + st.cost, 0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const id = setInterval(() => setTick((t) => (t + 1) % (total + SESSION_HOLD)), 65);
    return () => clearInterval(id);
  }, [reduceMotion, total]);

  const now = reduceMotion ? total + SESSION_HOLD : tick;
  let start = 0;
  const shown = steps.map((step) => {
    const at = now - start;
    start += step.cost;
    return { step, at };
  });
  const thinkingDone = now >= steps[0].cost + steps[1].cost;

  return (
    <div
      className="relative overflow-hidden rounded-2xl font-mono text-[10.5px] leading-relaxed sm:text-xs"
      style={{
        background: "linear-gradient(160deg, rgb(20 20 32 / 0.72), rgb(12 12 20 / 0.6))",
        color: TERM.text,
        backdropFilter: "blur(18px) saturate(160%)",
        WebkitBackdropFilter: "blur(18px) saturate(160%)",
        border: "1px solid rgb(255 255 255 / 0.16)",
        boxShadow:
          "inset 0 1px 0 rgb(255 255 255 / 0.12), 0 24px 48px -20px rgb(var(--shadow) / 0.55)",
      }}
    >
      {/* accent sheen through the glass */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-40 blur-2xl"
        style={{ background: "rgb(var(--accent-glow))" }}
      />

      <div className="relative flex items-center gap-1.5 px-3 pb-1 pt-2.5">
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "rgb(248 113 113)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "rgb(251 191 36)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "rgb(74 222 128)" }} />
        <span className="ml-auto text-[10px]" style={{ color: TERM.dim }}>zsh — claude</span>
      </div>

      <div className="relative min-h-[4.9rem] px-3.5 pb-3 pt-1">
        {/* Starship powerline prompt */}
        <div className="mb-1 flex items-stretch whitespace-nowrap text-[10px] font-semibold sm:text-[11px]">
          <span
            className="rounded-l-md py-0.5 pl-2 pr-3"
            style={{
              background: "linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-glow)))",
              color: "rgb(var(--on-accent))",
              clipPath: POWERLINE_FIRST,
            }}
          >
            ~/portfolio
          </span>
          <span
            className="-ml-1.5 py-0.5 pl-3 pr-3"
            style={{ background: "rgb(255 255 255 / 0.14)", color: TERM.ok, clipPath: POWERLINE_NEXT }}
          >
            ⎇ main
          </span>
        </div>

        {shown.map(({ step, at }, i) => {
          if (step.kind === "typed") {
            const chars = Math.max(0, Math.min(step.text.length, at));
            const typing = at >= 0 && at < step.text.length;
            return (
              <div key={i} className="whitespace-nowrap">
                <span style={{ color: TERM.ok }}>❯</span> {step.text.slice(0, chars)}
                {typing && (
                  <span className="ml-px inline-block h-3 w-1.5 translate-y-0.5 animate-pulse" style={{ background: TERM.text }} />
                )}
              </div>
            );
          }
          if (at < 0) return null;
          if (step.kind === "thinking") {
            return (
              <div key={i} className="whitespace-nowrap">
                <motion.span
                  className="inline-block"
                  style={{ color: TERM.deploy }}
                  animate={thinkingDone ? { rotate: 0 } : { rotate: 360 }}
                  transition={thinkingDone ? { duration: 0 } : { duration: 1.2, repeat: Infinity, ease: "linear" }}
                >
                  ✻
                </motion.span>{" "}
                <span style={{ color: thinkingDone ? TERM.dim : TERM.text }}>
                  {thinkingDone ? "Thought for 2s" : "Thinking…"}
                </span>
              </div>
            );
          }
          return (
            <motion.div
              key={i}
              className={cn("whitespace-nowrap", step.indent && "pl-3")}
              initial={reduceMotion ? false : { opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: EASE_OUT }}
            >
              <span style={{ color: step.bulletColor }}>{step.bullet}</span> {step.text}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/*
 * Marker doodles around the portrait, after the hand-lettered references:
 * tech icons drawn in with a short stagger, a few handwritten words, and
 * small loops (twinkling stars, a bobbing rocket, a wiggling crown). Colours
 * come from the tokens: ink for most marks, the accent for the highlights.
 * Everything is decorative and aria-hidden.
 */
const MARKER = "'Permanent Marker', 'Space Grotesk', cursive";
const INK = "rgb(var(--fg) / 0.85)";
const ACCENT = "rgb(var(--accent-soft))";

const DOODLE_ICONS = {
  brain: [
    "M22 9c-6-2-11 3-10 8-5 1-7 7-4 11-2 5 2 10 7 9 1 4 5 6 9 4",
    "M26 9c6-2 11 3 10 8 5 1 7 7 4 11 2 5-2 10-7 9-1 4-5 6-9 4",
    "M24 8v33",
    "M24 17h6m-6 8h8m-8 8h5",
  ],
  bulb: [
    "M24 8c-8 0-13 6-13 13 0 5 3 8 6 11v4h14v-4c3-3 6-6 6-11 0-7-5-13-13-13Z",
    "M18 41h12M20 45h8",
    "M24 1v3M7 9l3 2M41 9l-3 2",
  ],
  rocket: [
    "M31 6c7 2 11 6 11 12L26 34 14 22 31 6Z",
    "M16 25l-8 2 6 6M24 33l-2 8 6-6",
    "M11 37l-6 6M16 40l-3 6M8 32l-4 3",
  ],
  robot: [
    "M13 14h22v16H13Z",
    "M24 14V8",
    "M20 26h8",
    "M16 33h16v10H16Z",
    "M16 37l-6-4M32 37l6-4",
  ],
  crown: ["M8 36l3-22 9 11 4-15 5 15 9-11 3 22Z"],
  bolt: ["M28 4 14 26h10l-4 18 16-24H26l2-16Z"],
  star: ["M24 6l5 11 12 1-9 8 3 12-11-6-11 6 3-12-9-8 12-1Z"],
  sparkle: ["M24 4c2 11 9 18 20 20-11 2-18 9-20 20-2-11-9-18-20-20 11-2 18-9 20-20Z"],
  loop: [
    "M11 24a13 13 0 0 1 23-8",
    "M35 9v7h-7",
    "M37 24a13 13 0 0 1-23 8",
    "M13 39v-7h7",
  ],
  code: ["M16 14 6 24l10 10", "M32 14l10 10-10 10", "M27 10l-6 28"],
};

function Doodle({ icon, className, color = INK, delay = 1, width = 3.2, loop }) {
  return (
    <motion.div
      aria-hidden
      className={cn("pointer-events-none absolute", className)}
      {...(loop ?? {})}
    >
      <svg viewBox="0 0 48 48" className="block h-auto w-full" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {DOODLE_ICONS[icon].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke={color}
            strokeWidth={width}
            style={{ stroke: color }}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: delay + i * 0.08, ease: EASE_OUT }}
          />
        ))}
        {icon === "robot" && (
          <>
            <motion.circle cx="19" cy="21" r="1.8" style={{ fill: color }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + 0.4 }} />
            <motion.circle cx="29" cy="21" r="1.8" style={{ fill: color }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + 0.4 }} />
          </>
        )}
        {icon === "rocket" && (
          <motion.circle cx="31" cy="17" r="3" strokeWidth={width} style={{ stroke: color }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + 0.4 }} />
        )}
      </svg>
    </motion.div>
  );
}

function Word({ children, className, color = INK, delay = 1, rotate = 0, underline }) {
  return (
    <motion.span
      aria-hidden
      className={cn("pointer-events-none absolute whitespace-nowrap leading-none", className)}
      style={{ fontFamily: MARKER, color }}
      initial={{ opacity: 0, scale: 0.9, rotate: rotate - 6 }}
      animate={{ opacity: 1, scale: 1, rotate }}
      transition={{ duration: 0.45, delay, ease: EASE_OUT }}
    >
      {children}
      {underline && (
        <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-2 w-full" fill="none">
          <motion.path
            d="M2 6c20-4 40-4 60-2s26 2 36-2"
            strokeWidth="3.5"
            strokeLinecap="round"
            style={{ stroke: underline }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.3, ease: EASE_OUT }}
          />
        </svg>
      )}
    </motion.span>
  );
}

const twinkle = (duration, delay = 0) => ({
  animate: { scale: [1, 0.75, 1], opacity: [1, 0.6, 1] },
  transition: { duration, delay, repeat: Infinity, ease: "easeInOut" },
});

function TechDoodles() {
  return (
    <>
      <Doodle icon="crown" color={ACCENT} className="left-[47%] top-[28%] w-[15%] -rotate-12" delay={1.1}
        loop={{ animate: { rotate: [-12, -4, -12] }, transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" } }} />

      <Word className="left-[2%] top-[35%] text-[clamp(22px,6vw,34px)] sm:top-[29%]" rotate={-6} delay={1.2} underline={ACCENT}>AI</Word>
      <Doodle icon="brain" color={ACCENT} className="left-[15%] top-[33%] w-[12%] sm:top-[27%]" delay={1.3} />

      <motion.pre
        aria-hidden
        className="pointer-events-none absolute left-[2%] top-[47%] m-0 sm:top-[45%] font-mono text-[clamp(9px,2.4vw,12px)] font-semibold leading-tight"
        style={{ color: INK }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.55, 1] }}
        transition={{ duration: 1.2, delay: 1.5 }}
      >{"10101\n01010\n10101"}</motion.pre>

      <Word className="right-[1%] top-[29%] text-[clamp(14px,4vw,21px)]" rotate={7} delay={1.4} underline={ACCENT}>{"{ CODE }"}</Word>
      <Doodle icon="bolt" color={INK} className="right-[3%] top-[37%] w-[9%] rotate-6" delay={1.55}
        loop={{ animate: { opacity: [1, 0.55, 1] }, transition: { duration: 2.2, repeat: Infinity } }} />

      <Doodle icon="rocket" color={ACCENT} className="right-[24%] -top-[1%] w-[12%]" delay={1.6}
        loop={{ animate: { y: [0, -6, 0] }, transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } }} />

      <Doodle icon="robot" color={INK} className="left-[1%] top-[58%] w-[11%] -rotate-6" delay={1.7} />
      <Doodle icon="bulb" color={ACCENT} className="left-[4%] -bottom-[9%] w-[9%] rotate-[-10deg]" delay={1.8} />
      <Word className="left-[15%] -bottom-[6%] text-[clamp(13px,3.6vw,18px)]" rotate={-3} delay={1.9} color={INK} underline={ACCENT}>THINK · BUILD · SHIP</Word>
      <Doodle icon="loop" color={ACCENT} className="left-[74%] -bottom-[9%] w-[8%]" delay={2}
        loop={{ animate: { rotate: [0, 360] }, transition: { duration: 8, repeat: Infinity, ease: "linear" } }} />

      <motion.div className="pointer-events-none absolute left-[28%] top-[22%] w-[6%]" {...twinkle(2.4)}>
        <Doodle icon="sparkle" color={ACCENT} className="relative w-full" delay={1.2} />
      </motion.div>
      <motion.div className="pointer-events-none absolute right-[33%] top-[27%] w-[5%]" {...twinkle(2.8, 0.6)}>
        <Doodle icon="star" color={INK} className="relative w-full" delay={1.35} width={3.6} />
      </motion.div>
      <motion.div className="pointer-events-none absolute left-[16%] top-[70%] w-[5%]" {...twinkle(2.2, 1.1)}>
        <Doodle icon="sparkle" color={INK} className="relative w-full" delay={1.75} />
      </motion.div>
    </>
  );
}

/*
 * Pixel crab after Claude Code's terminal mascot: a wide block body, square
 * eyes, side claws and four stubby legs on a 14×10 grid. Fixed Claude orange
 * with dark eyes in both modes. Its legs step in alternating pairs and the
 * body bobs with each step; the walk itself lives on the wrapper.
 */
const CRAB_ORANGE = "rgb(217 119 87)";
const STEP = { duration: 0.32, repeat: Infinity, ease: "easeInOut" };

function ClaudeCrab() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 14 11"
      shapeRendering="crispEdges"
      className="block h-auto w-full overflow-visible drop-shadow-[0_4px_6px_rgb(0_0_0/0.2)]"
    >
      <motion.g animate={{ y: [0, -0.5, 0] }} transition={STEP}>
        <g style={{ fill: CRAB_ORANGE }}>
          <rect x="2" y="2" width="10" height="6" />
          <rect x="0" y="4" width="2" height="2" />
          <rect x="12" y="4" width="2" height="2" />
        </g>
        <g style={{ fill: "rgb(28 25 23)" }}>
          <rect x="4" y="3" width="1" height="2" />
          <rect x="9" y="3" width="1" height="2" />
        </g>
      </motion.g>
      {/* legs: outer pair and inner pair lift in turn */}
      <motion.g style={{ fill: CRAB_ORANGE }} animate={{ y: [0, -0.8, 0, 0] }} transition={{ ...STEP, times: [0, 0.25, 0.5, 1] }}>
        <rect x="3" y="8" width="1" height="2" />
        <rect x="10" y="8" width="1" height="2" />
      </motion.g>
      <motion.g style={{ fill: CRAB_ORANGE }} animate={{ y: [0, 0, -0.8, 0] }} transition={{ ...STEP, times: [0, 0.5, 0.75, 1] }}>
        <rect x="5" y="8" width="1" height="2" />
        <rect x="8" y="8" width="1" height="2" />
      </motion.g>
    </svg>
  );
}

function HeroVisual({ hello, tag }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }}
      className="relative mx-auto mb-10 aspect-[4/5] w-full max-w-[420px]"
    >
      <div
        aria-hidden
        className="absolute inset-[10%] rounded-full opacity-50 blur-3xl"
        style={{ background: "rgb(var(--accent) / 0.35)", transform: "translateZ(0)" }}
      />

      <svg
        aria-hidden
        viewBox="0 0 400 400"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-[70%] w-full"
      >
        <defs>
          <linearGradient id="hero-blob" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" style={{ stopColor: "rgb(var(--accent))" }} />
            <stop offset="100%" style={{ stopColor: "rgb(var(--accent-glow))" }} />
          </linearGradient>
        </defs>
        <defs>
          <clipPath id="hero-blob-clip">
            <path d="M312 58c56 34 86 102 76 172-10 72-58 136-132 158-76 22-160 4-204-52C6 278 4 196 36 132 70 64 140 24 214 22c38-1 68 16 98 36Z" />
          </clipPath>
          <pattern id="hero-dashes" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(-30)">
            <path d="M4 11h9" strokeWidth="4" strokeLinecap="round" style={{ stroke: "rgb(var(--on-accent) / 0.28)" }} />
          </pattern>
        </defs>
        <path
          fill="url(#hero-blob)"
          d="M312 58c56 34 86 102 76 172-10 72-58 136-132 158-76 22-160 4-204-52C6 278 4 196 36 132 70 64 140 24 214 22c38-1 68 16 98 36Z"
        />
        {/* Memphis texture on the blob, kept to its upper right like the
            painted references, plus one loose squiggle across it. */}
        <g clipPath="url(#hero-blob-clip)">
          <path d="M230 0h170v220H230Z" fill="url(#hero-dashes)" />
          <path
            d="M20 250c40-40 70 20 110-20s70 30 110-10 70 20 150-30"
            fill="none"
            strokeWidth="14"
            strokeLinecap="round"
            style={{ stroke: "rgb(var(--on-accent) / 0.22)" }}
          />
        </g>
      </svg>

      <TechDoodles />

      <div className="absolute inset-0" style={{ clipPath: "inset(-20% -20% 0 -20%)" }}>
        <img
          src={profileImg}
          alt="Eddie Elorza Ruiz, Software Engineer"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          width="720"
          height="720"
          className="sticker-outline absolute -bottom-1 left-[46%] w-[80%] max-w-none -translate-x-1/2"
        />
      </div>

      {/* Terminal window, top left. */}
      <motion.div {...pop(0.45)} className="absolute -left-2 top-[4%] w-[52%] sm:-left-6 sm:w-[54%]">
        <motion.div {...float(4, 7)} className="relative -rotate-3">
          {/* Claude Code crab walking along the terminal's top edge: across,
              a short pause, back, pause. Transform-only, so it stays on the
              compositor; MotionConfig stops it for reduced motion. */}
          <motion.div
            {...pop(1.25)}
            className="pointer-events-none absolute inset-x-5 top-0.5 z-10 h-0"
          >
            {/* The track is the edge minus the crab's width, so translating
                it by 100% of itself lands the crab exactly at the far end. */}
            <motion.div
              className="absolute bottom-0 left-0 w-[calc(100%-34px)] sm:w-[calc(100%-42px)]"
              animate={{ x: ["0%", "100%", "100%", "0%", "0%"] }}
              transition={{
                duration: 10,
                times: [0, 0.42, 0.5, 0.92, 1],
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute bottom-0 left-0 w-[34px] sm:w-[42px]">
                <ClaudeCrab />
              </div>
            </motion.div>
          </motion.div>
          <HeroTerminal />
        </motion.div>
      </motion.div>

      {/* Speech bubble, top right. */}
      <motion.div {...pop(0.6)} className="absolute right-0 top-[12%]">
        <motion.div
          {...float(5, 5.5)}
          aria-hidden
          className="relative rotate-6 rounded-2xl px-3 py-2 font-display text-sm font-bold leading-tight shadow-soft sm:px-4 sm:py-2.5 sm:text-lg"
          style={{ background: "rgb(var(--fg))", color: "rgb(var(--ink-950))" }}
        >
          {hello}
          <span
            className="absolute -bottom-2 left-6 h-4 w-4 rotate-45 rounded-[3px]"
            style={{ background: "rgb(var(--fg))" }}
          />
        </motion.div>
      </motion.div>

      {/* Deploy status chip, right. */}
      <motion.div {...pop(0.75)} className="absolute -right-2 top-[50%] sm:-right-6">
        <motion.div
          {...float(3, 6)}
          aria-hidden
          className="flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] font-semibold sm:text-xs"
          style={{
            background: "linear-gradient(160deg, rgb(20 20 32 / 0.72), rgb(12 12 20 / 0.6))",
            color: TERM.text,
            backdropFilter: "blur(18px) saturate(160%)",
            WebkitBackdropFilter: "blur(18px) saturate(160%)",
            border: "1px solid rgb(255 255 255 / 0.16)",
            boxShadow:
              "inset 0 1px 0 rgb(255 255 255 / 0.12), 0 14px 30px -14px rgb(var(--shadow) / 0.55)",
          }}
        >
          <motion.span
            className="h-2 w-2 rounded-full"
            style={{ background: "rgb(34 197 94)" }}
            animate={{ opacity: [1, 0.35, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          main · deployed
        </motion.div>
      </motion.div>

      {/* Tag sticker, lower left. */}
      <motion.div {...pop(0.9)} className="absolute bottom-[20%] left-0">
        <motion.div
          {...float(4, 6.5)}
          aria-hidden
          className="-rotate-3 rounded-xl border-[3px] border-white px-3.5 py-2 text-sm font-bold uppercase tracking-wide text-on-accent shadow-soft"
          style={{
            background:
              "linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-glow)))",
          }}
        >
          {tag}
        </motion.div>
      </motion.div>

      {/* The cartoon, big and free: transparent cutout with the sticker edge,
          leaning in from the lower right with a slow wobble. */}
      <motion.div {...pop(1.05)} className="absolute -bottom-3 -right-4 w-[44%] sm:-right-10">
        <motion.img
          src={avatarImg}
          alt=""
          loading="eager"
          decoding="async"
          width="625"
          height="625"
          className="sticker-outline block h-auto w-full"
          style={{ rotate: 8 }}
          animate={{ rotate: [8, 2, 8], y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
