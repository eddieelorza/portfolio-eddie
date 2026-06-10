import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '../../lib/utils.js';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import useActiveSection from '../../hooks/useActiveSection.js';
import {
  HERO_ID,
  NAV_ITEMS,
  NAV_SECTION_IDS,
} from '../../config/navigation.js';

/**
 * MobileBottomNav
 *
 *  - Equal-width cells (`flex: 1`) → active never pushes neighbours.
 *  - Highlight pill (`layoutId`): travels between cells as the user
 *    scrolls. Driven by `active` (scroll spy).
 *  - Tooltip: only visible on pointer hover / touch over an item.
 *    Driven by `hoveredId` — completely independent from `active`,
 *    so it never persists while scrolling.
 *  - **Hidden while at the hero** (`active === HERO_ID` or `null`):
 *    fades out + slides down so the dock only appears once the user
 *    is past About.
 *  - Container width: `min(calc(100vw - 32px), 420px)`, hard-centered.
 *  - Bottom offset honours `env(safe-area-inset-bottom)`.
 */
export default function MobileBottomNav() {
  const { t } = useLanguage();
  const active = useActiveSection(NAV_SECTION_IDS);
  const items = NAV_ITEMS.filter((item) => item.bottomNav);
  const [hoveredId, setHoveredId] = useState(null);

  // Hide while the hero is in view (or before the observer has settled).
  const visible = active !== null && active !== HERO_ID;

  return (
    <motion.nav
      initial={{ y: 24, opacity: 0 }}
      animate={{
        y: visible ? 0 : 24,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Section navigation"
      aria-hidden={!visible}
      className="fixed left-1/2 z-[60] lg:hidden"
      style={{
        x: '-50%',
        width: 'calc(100vw - 32px)',
        maxWidth: '420px',
        bottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))',
      }}
    >
      <div className="glass-soft rounded-full px-2 py-2 shadow-soft">
        <ul className="flex w-full items-center">
          {items.map((item) => {
            const isActive = active === item.id;
            const isHovered = hoveredId === item.id;
            const Icon = item.icon;
            return (
              <li
                key={item.id}
                className="relative flex flex-1 items-center justify-center"
              >
                {/* Tooltip — only on hover / touch, never just because
                    the section is active. */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      key={`tip-${item.id}`}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{
                        duration: 0.18,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{ x: '-50%' }}
                      className="pointer-events-none absolute bottom-full left-1/2 mb-2 whitespace-nowrap rounded-xl border border-white/10 bg-ink-950/95 px-3.5 py-2 text-[13px] font-medium text-white shadow-soft backdrop-blur-md"
                    >
                      {t.nav[item.labelKey]}
                    </motion.span>
                  )}
                </AnimatePresence>

                <a
                  href={`#${item.id}`}
                  aria-label={t.nav[item.labelKey]}
                  aria-current={isActive ? 'true' : undefined}
                  onPointerEnter={() => setHoveredId(item.id)}
                  onPointerLeave={() =>
                    setHoveredId((id) => (id === item.id ? null : id))
                  }
                  onBlur={() =>
                    setHoveredId((id) => (id === item.id ? null : id))
                  }
                  className={cn(
                    'relative grid h-10 w-10 place-items-center rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
                    isActive
                      ? 'text-white'
                      : 'text-white/55 hover:text-white/90'
                  )}
                >
                  {/* Sliding highlight (single instance per layoutId). */}
                  {isActive && (
                    <motion.span
                      layoutId="bottom-nav-active"
                      aria-hidden
                      className="absolute inset-0 rounded-full"
                      style={{
                        background:
                          'linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-glow)))',
                        boxShadow:
                          '0 6px 18px -8px rgb(var(--accent) / 0.55)',
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                        mass: 0.55,
                      }}
                    />
                  )}
                  <Icon className="relative h-4 w-4" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}
