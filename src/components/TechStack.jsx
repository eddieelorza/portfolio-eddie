import { motion } from 'motion/react';
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
} from 'react-icons/si';
import { FaAws, FaFigma, FaRobot } from 'react-icons/fa';
import {
  TbApi,
  TbBrain,
  TbChartBar,
  TbDatabase,
  TbPlugConnected,
  TbSparkles,
} from 'react-icons/tb';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import SectionHeading from './SectionHeading.jsx';
import InfiniteSlider from './ui/InfiniteSlider.jsx';
import { REVEAL_VIEWPORT } from '../lib/animation/viewport.js';

// 30 badges. Ordered so the marquee opens with Product / AI / Data
// tooling (Notion · Figma · Jira · LLM Apps · Claude Code …) and
// pushes engineering/dev tools (Jenkins, GitLab, Vite, Jest) to the
// second row — first impression reads as a PM/TPM, not a frontend dev.
const techs = [
  // Row 1 — Product · AI · Data
  { name: 'Notion', Icon: SiNotion, color: '#FFFFFF' },
  { name: 'Figma', Icon: FaFigma, color: '#F24E1E' },
  { name: 'Jira', Icon: SiJira, color: '#2684FF' },
  { name: 'Confluence', Icon: SiConfluence, color: '#2684FF' },
  { name: 'LLM Apps', Icon: TbBrain, color: '#A78BFA' },
  { name: 'Claude Code', Icon: TbSparkles, color: '#D97757' },
  { name: 'AI Agents', Icon: FaRobot, color: '#22C55E' },
  { name: 'AI Prompting', Icon: FaRobot, color: '#A78BFA' },
  { name: 'n8n', Icon: TbPlugConnected, color: '#EA4B71' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4F8FBF' },
  { name: 'SQL', Icon: TbDatabase, color: '#7DD3FC' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'Tableau', Icon: TbChartBar, color: '#E97627' },
  { name: 'Dynatrace', Icon: SiDynatrace, color: '#1496FF' },
  { name: 'API Design', Icon: TbApi, color: '#38BDF8' },

  // Row 2 — Engineering · Delivery
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'AWS', Icon: FaAws, color: '#FF9900' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'SonarQube', Icon: SiSonarqubeserver, color: '#4E9BCD' },
  { name: 'Jenkins', Icon: SiJenkins, color: '#D24939' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'GitHub', Icon: SiGithub, color: '#FFFFFF' },
  { name: 'GitLab', Icon: SiGitlab, color: '#FC6D26' },
  { name: 'Vite', Icon: SiVite, color: '#FFD028' },
  { name: 'TanStack Query', Icon: TbPlugConnected, color: '#FF4154' },
  { name: 'Tailwind', Icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Jest', Icon: SiJest, color: '#C21325' },
];

function TechBadge({ name, Icon, color }) {
  return (
    <div className="group flex h-20 w-44 shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 transition hover:border-white/25 hover:bg-white/[0.06]">
      <span
        className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.04] transition group-hover:scale-110"
        style={{ boxShadow: `0 0 30px ${color}22` }}
      >
        <Icon className="h-6 w-6" style={{ color }} />
      </span>
      <span className="text-sm font-medium uppercase tracking-wider text-white/70 group-hover:text-white">
        {name}
      </span>
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
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 flex flex-wrap justify-center gap-2"
          >
            {t.stack.categories.map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={REVEAL_VIEWPORT}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-6xl space-y-5"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
            maskImage:
              'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          }}
        >
          <InfiniteSlider gap={20} duration={70} durationOnHover={160}>
            {rowOne.map((tech) => (
              <TechBadge key={tech.name} {...tech} />
            ))}
          </InfiniteSlider>

          <InfiniteSlider
            gap={20}
            duration={80}
            durationOnHover={170}
            reverse
          >
            {rowTwo.map((tech) => (
              <TechBadge key={tech.name} {...tech} />
            ))}
          </InfiniteSlider>
        </motion.div>
      </div>
    </section>
  );
}
