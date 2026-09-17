import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";

/**
 * ModeToggle
 *
 * Switches between the cream (light) and dark canvas. Sits beside the
 * language toggle so both site-wide preferences live in one place.
 *
 * The icon shows where you would go, not where you are — a moon on the cream
 * canvas, a sun on the dark one — and the accessible name says the same
 * thing ("Switch to dark mode"), so the visual and spoken labels agree.
 * `aria-pressed` would be wrong here: it describes a binary on/off, and
 * "dark mode on" reads ambiguously to someone who cannot see the canvas.
 */
export default function ModeToggle() {
  const { mode, toggleMode } = useTheme();
  const { t } = useLanguage();
  const isDark = mode === "dark";
  const label = isDark ? t.mode.toLight : t.mode.toDark;

  return (
    <button
      type="button"
      onClick={toggleMode}
      aria-label={label}
      title={label}
      className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full after:absolute after:-inset-1.5 after:content-[''] border border-white/[0.12] bg-white/[0.06] text-white/70 transition-colors duration-200 hover:border-white/25 hover:text-white"
    >
      {/*
       * Keyed remount with an enter-only animation. Under
       * `AnimatePresence mode="wait"` the new icon could not mount until the
       * old one finished exiting, so a stalled animation loop (a backgrounded
       * tab) would leave the wrong icon showing after the mode had changed.
       */}
      <motion.span
        key={mode}
        initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="grid place-items-center"
      >
        {isDark ? (
          <Sun aria-hidden className="h-4 w-4" />
        ) : (
          <Moon aria-hidden className="h-4 w-4" />
        )}
      </motion.span>
    </button>
  );
}
