import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { cn } from '../lib/utils.js';

const OPTIONS = ['es', 'en'];

/**
 * LanguageToggle
 *
 * Segmented switch with a SINGLE white indicator pill that slides
 * via `transform: translateX(...)` between options.
 *
 *  - The indicator is rendered once at the parent level (not inside
 *    the buttons). It never unmounts, so it can never look "missing"
 *    or stuck in a half-rendered state.
 *  - ES → translateX(0%), EN → translateX(100%) (100 % = its own width
 *    which equals one option, so it lands exactly on the next slot).
 *  - Button text colour is the only `active`-dependent style on the
 *    buttons themselves — black on the white pill, light grey when
 *    inactive.
 */
export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const activeIndex = OPTIONS.indexOf(language);

  return (
    <div
      className="relative inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.06] p-0.5 text-xs font-semibold"
      role="group"
    >
      {/* Sliding indicator. Width: 50 % of the container minus the
          2 px padding on each side, so two slots tile exactly. */}
      <motion.span
        aria-hidden
        className="absolute top-0.5 bottom-0.5 rounded-full bg-white"
        style={{
          left: '2px',
          width: 'calc(50% - 2px)',
        }}
        initial={false}
        animate={{ x: activeIndex === 0 ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
      />

      {OPTIONS.map((opt) => {
        const active = opt === language;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => setLanguage(opt)}
            aria-pressed={active}
            className={cn(
              'relative z-10 px-3 py-1 uppercase tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-full',
              active ? 'text-ink-950' : 'text-white/55 hover:text-white'
            )}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
