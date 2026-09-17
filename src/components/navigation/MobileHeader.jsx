import { motion } from "motion/react";
import { Code2 } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { HERO_ID } from "../../config/navigation.js";
import LanguageToggle from "../LanguageToggle.jsx";
import ModeToggle from "../ModeToggle.jsx";
import MobileThemeMenu from "../theme/MobileThemeMenu.jsx";

/**
 * MobileHeader
 *
 * Always-on glass bar at the top of mobile screens (hidden at `lg+`).
 * Shows the logo + name + language toggle from the moment the page
 * loads. No collapse / reveal behavior — the desktop "logo only"
 * pattern is explicitly not applied here. The accent picker lives here too
 * (MobileThemeMenu) — the floating dock is desktop-only.
 */
export default function MobileHeader() {
  const { t } = useLanguage();

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 lg:hidden"
      style={{ transform: "translateZ(0)" }}
    >
      <div className="container-page mt-3">
        <nav
          aria-label={t.a11y.primaryNav}
          className="glass-soft relative flex items-center justify-between rounded-full px-3 py-2 shadow-soft"
        >
          <a
            href={`#${HERO_ID}`}
            aria-label="Eddie Elorza · Home"
            className="relative flex shrink-0 items-center gap-2 rounded-full px-1.5 after:absolute after:inset-x-0 after:-inset-y-1.5 after:content-['']"
          >
            <span
              className="grid h-8 w-8 place-items-center rounded-full text-on-accent shadow-glow"
              style={{
                background:
                  "linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-glow)))",
              }}
            >
              <Code2 aria-hidden className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold tracking-tight">
              Eddie Elorza
            </span>
          </a>

          <div className="flex items-center gap-3">
            <MobileThemeMenu />
            <ModeToggle />
            <LanguageToggle />
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
