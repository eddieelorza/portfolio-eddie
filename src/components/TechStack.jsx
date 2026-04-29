import { motion } from 'motion/react';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiVuedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiJest,
  SiVite,
  SiDocker,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiGit,
  SiGithub,
  SiGitlab,
  SiWebpack,
  SiBabel,
  SiNginx,
  SiJenkins,
  SiNotion,
} from 'react-icons/si';
import { FaAws, FaFigma, FaRobot } from 'react-icons/fa';
import { TbApi, TbPlugConnected } from 'react-icons/tb';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import SectionHeading from './SectionHeading.jsx';
import InfiniteSlider from './ui/InfiniteSlider.jsx';

const techs = [
  // 🔵 Core Frontend
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Vue', Icon: SiVuedotjs, color: '#41B883' },
  { name: 'Tailwind', Icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3' },
  { name: 'Vite', Icon: SiVite, color: '#FFD028' },

  // 🟣 State / Architecture
  { name: 'TanStack Query', Icon: TbPlugConnected, color: '#FF4154' },
  { name: 'Webpack', Icon: SiWebpack, color: '#8DD6F9' },
  { name: 'Babel', Icon: SiBabel, color: '#F9DC3E' },

  // 🟢 Backend / APIs
  { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Express', Icon: SiExpress, color: '#FFFFFF' },
  { name: 'REST APIs', Icon: TbApi, color: '#38BDF8' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },

  // 🟠 DevOps / Infra
  { name: 'AWS', Icon: FaAws, color: '#FF9900' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'NGINX', Icon: SiNginx, color: '#009639' },
  { name: 'Jenkins', Icon: SiJenkins, color: '#D24939' },

  // 🔴 Quality
  { name: 'Jest', Icon: SiJest, color: '#C21325' },
  { name: 'Checkmarx', Icon: SiJenkins, color: '#00B388' },

  // ⚫ Tools
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'GitHub', Icon: SiGithub, color: '#FFFFFF' },
  { name: 'GitLab', Icon: SiGitlab, color: '#FC6D26' },
  { name: 'Figma', Icon: FaFigma, color: '#F24E1E' },
  { name: 'Notion', Icon: SiNotion, color: '#FFFFFF' },

  // 🤖 AI / Workflow
  { name: 'AI Prompting', Icon: FaRobot, color: '#A78BFA' },
  { name: 'AI Agents', Icon: FaRobot, color: '#22C55E' },
  { name: 'n8n', Icon: TbPlugConnected, color: '#EA4B71' },
];

function TechBadge({ name, Icon, color }) {
  return (
    <div className="group flex h-20 w-44 shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 backdrop-blur transition hover:border-white/25 hover:bg-white/[0.06]">
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
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