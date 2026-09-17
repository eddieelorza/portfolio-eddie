import { motion } from "motion/react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiJest,
  SiVite,
  SiDocker,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiDynatrace,
  SiSonarqubeserver,
  SiJira,
  SiConfluence,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJenkins,
  SiNotion,
} from "react-icons/si";
import { FaAws, FaFigma, FaRobot } from "react-icons/fa";
import {
  TbApi,
  TbBrain,
  TbChartBar,
  TbDatabase,
  TbPlugConnected,
  TbSparkles,
} from "react-icons/tb";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import SectionHeading from "./SectionHeading.jsx";
import InfiniteSlider from "./ui/InfiniteSlider.jsx";
import { REVEAL_VIEWPORT } from "../lib/animation/viewport.js";
import { EASE_OUT } from "../lib/animation/doodle.js";

// 30 badges. Ordered so the marquee opens with Product / AI / Data
// tooling (Notion · Figma · Jira · LLM Apps · Claude Code …) and
// pushes engineering/dev tools (Jenkins, GitLab, Vite, Jest) to the
// second row — first impression reads as a PM/TPM, not a frontend dev.
const techs = [
  // Row 1 — Product · AI · Data
  { name: "Notion", Icon: SiNotion, color: "currentColor" },
  { name: "Figma", Icon: FaFigma, color: "#F24E1E" },
  { name: "Jira", Icon: SiJira, color: "#2684FF" },
  { name: "Confluence", Icon: SiConfluence, color: "#2684FF" },
  { name: "LLM Apps", Icon: TbBrain, color: "rgb(var(--accent-soft))" },
  { name: "Claude Code", Icon: TbSparkles, color: "#D97757" },
  { name: "AI Agents", Icon: FaRobot, color: "#22C55E" },
  { name: "AI Prompting", Icon: FaRobot, color: "rgb(var(--accent-soft))" },
  { name: "n8n", Icon: TbPlugConnected, color: "#EA4B71" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4F8FBF" },
  { name: "SQL", Icon: TbDatabase, color: "#7DD3FC" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Tableau", Icon: TbChartBar, color: "#E97627" },
  { name: "Dynatrace", Icon: SiDynatrace, color: "#1496FF" },
  { name: "API Design", Icon: TbApi, color: "#38BDF8" },

  // Row 2 — Engineering · Delivery
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "SonarQube", Icon: SiSonarqubeserver, color: "#4E9BCD" },
  { name: "Jenkins", Icon: SiJenkins, color: "#D24939" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "currentColor" },
  { name: "GitLab", Icon: SiGitlab, color: "#FC6D26" },
  { name: "Vite", Icon: SiVite, color: "#FFD028" },
  { name: "TanStack Query", Icon: TbPlugConnected, color: "#FF4154" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Jest", Icon: SiJest, color: "#C21325" },
];

/* Resting tilt per badge, so a moving row reads as stickers on a strip of
   paper rather than a row of buttons. Static: the marquee is the motion. */
const TILTS = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-0"];

function TechBadge({ name, Icon, color, index }) {
  return (
    <div
      className={`flex h-16 w-44 shrink-0 items-center gap-3 rounded-xl border border-white/10 bg-ink-900 px-4 shadow-soft ${TILTS[index % TILTS.length]}`}
    >
      {/* Brand colours stay: they make the logos recognisable at a glance. */}
      <Icon aria-hidden className="h-6 w-6 shrink-0" style={{ color }} />
      <span className="font-display text-sm font-semibold leading-tight text-white/80">{name}</span>
    </div>
  );
}

export default function TechStack() {
  const { t } = useLanguage();
  const half = Math.ceil(techs.length / 2);
  const rowOne = techs.slice(0, half);
  const rowTwo = techs.slice(half);

  return (
    <section id="stack" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow={t.stack.eyebrow}
          title={t.stack.title}
          description={t.stack.description}
        />

        {t.stack.categories && t.stack.categories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={REVEAL_VIEWPORT}
            transition={{ duration: 0.4, ease: EASE_OUT }}
            className="mb-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
          >
            {t.stack.categories.map((c, i) => (
              <span key={c} className="inline-flex items-center gap-3">
                <span className="font-hand text-2xl font-bold leading-none" style={{ color: "rgb(var(--accent-soft))" }}>
                  {c}
                </span>
                {i < t.stack.categories.length - 1 && (
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-white/25" />
                )}
              </span>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={REVEAL_VIEWPORT}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          className="relative mx-auto max-w-6xl space-y-3"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          {/* py keeps the tilted corners and shadows inside the slider's overflow-hidden. */}
          <InfiniteSlider gap={20} duration={70} durationOnHover={160} className="py-3">
            {rowOne.map((tech, i) => (
              <TechBadge key={tech.name} {...tech} index={i} />
            ))}
          </InfiniteSlider>

          <InfiniteSlider gap={20} duration={80} durationOnHover={170} reverse className="py-3">
            {rowTwo.map((tech, i) => (
              <TechBadge key={tech.name} {...tech} index={i + 2} />
            ))}
          </InfiniteSlider>
        </motion.div>
      </div>
    </section>
  );
}
