import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import TextRotator from './ui/TextRotator.jsx';
import SparklesText from './ui/SparklesText.jsx';
import InteractiveGradientBackground from './ui/InteractiveGradientBackground.jsx';
import { PrimaryCTA, GhostCTA } from './ui/HeroButtons.jsx';
import avatarImg from '../assets/avatar.webp';
import profileImg from '../assets/profile.webp';

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

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
      style={{ isolation: 'isolate' }}
    >
      <InteractiveGradientBackground intensity={0.8} opacity={0.45} />
      <div
        className="absolute inset-0 bg-grid opacity-40"
        style={{ transform: 'translateZ(0)' }}
      />
      <div
        className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full blur-[100px]"
        style={{ background: 'rgb(var(--accent) / 0.18)' }}
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
                className="h-3.5 w-3.5"
                style={{ color: 'rgb(var(--accent-soft))' }}
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
                <br className="md:hidden" />
                <span className="md:ml-3 inline-block">
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

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <PrimaryCTA href="#projects">{t.hero.ctaProjects}</PrimaryCTA>
              <GhostCTA href="#contact">{t.hero.ctaContact}</GhostCTA>
            </motion.div>
          </div>

          <HeroVisual
            avatarLabel={t.hero.avatarLabel}
            photoLabel={t.hero.photoLabel}
          />
        </div>
      </div>
    </section>
  );
}

function HeroVisual({ avatarLabel, photoLabel }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto h-[460px] w-full max-w-md"
    >
      <div
        className="absolute inset-0 rounded-[2.5rem] blur-2xl opacity-60"
        style={{
          background: 'rgb(var(--accent) / 0.4)',
          transform: 'translateZ(0)',
        }}
      />

      <motion.div
        className="absolute right-0 bottom-0 h-[380px] w-[280px] overflow-hidden rounded-[2rem] border border-white/10 bg-ink-800 shadow-soft"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src={profileImg}
          alt="Eddie Elorza"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-900 to-transparent" />
        {/* <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur">
          <span
            className="h-2 w-2 animate-pulse-soft rounded-full"
            style={{ backgroundColor: 'rgb(var(--accent-soft))' }}
          />
          <span className="text-xs text-white/85">{photoLabel}</span>
        </div> */}
      </motion.div>

      <motion.div
        className="absolute left-0 top-0 h-[200px] w-[200px] overflow-hidden rounded-[1.75rem] border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-3 shadow-glow"
        animate={{ y: [0, 8, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[1.25rem]">
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background:
                'linear-gradient(135deg, rgb(var(--accent) / 0.4), rgb(var(--accent-glow) / 0.2))',
            }}
          />
          <img
            src={avatarImg}
            alt="Avatar"
            className="relative h-full w-full object-contain text-[rgb(var(--accent))]"
          />
        </div>
        {/* <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-ink-900 px-3 py-1 text-[10px] font-medium text-white/80 shadow-soft">
          {avatarLabel}
        </div> */}
      </motion.div>

      <motion.div
        className="absolute -right-2 top-2 h-16 w-16 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur"
        animate={{ rotate: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="m-2 h-12 w-12 rounded-xl"
          style={{
            background:
              'linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-glow)))',
          }}
        />
      </motion.div>
    </motion.div>
  );
}
