import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const options = ['es', 'en'];

  return (
    <div className="relative flex items-center rounded-full border border-white/10 bg-white/[0.04] p-0.5 text-xs font-semibold">
      {options.map((opt) => {
        const active = language === opt;
        return (
          <button
            key={opt}
            onClick={() => setLanguage(opt)}
            className={`relative z-10 px-3 py-1 uppercase tracking-wider transition ${
              active ? 'text-ink-950' : 'text-white/60 hover:text-white'
            }`}
            aria-pressed={active}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 -z-10 rounded-full bg-white"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            {opt}
          </button>
        );
      })}
    </div>
  );
}
