import { AnimatePresence, motion } from 'motion/react';
import { Code2 } from 'lucide-react';
import { cn } from '../../lib/utils.js';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import useScrollState from '../../hooks/useScrollState.js';
import useActiveSection from '../../hooks/useActiveSection.js';
import { NAV_ITEMS, NAV_SECTION_IDS, HERO_ID } from '../../config/navigation.js';
import LanguageToggle from '../LanguageToggle.jsx';

const EASE = [0.22, 1, 0.36, 1];
const LAYOUT_DURATION = 0.35;

/**
 * DesktopHeader
 *
 * Initial (top of the page):
 *   [Logo pill — centered]                  [ES/EN pill — top right]
 *
 * Scrolled past 80 px:
 *   [Logo · links ······ ES/EN · CTA]   (one full-width navbar)
 *
 * The right-side ES/EN pill is rendered as a separate piece when
 * collapsed. As the user scrolls, the navbar pill expands to absorb
 * the links + ES/EN + CTA, and the corner pill fades out — both with
 * the same easing/duration so the transition reads as one motion.
 */
export default function DesktopHeader() {
  const { t } = useLanguage();
  const scrolled = useScrollState(80);
  const active = useActiveSection(NAV_SECTION_IDS);
  const links = NAV_ITEMS.filter((item) => item.desktop);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="fixed inset-x-0 top-0 z-50 hidden overflow-visible lg:block"
      style={{ transform: 'translateZ(0)' }}
    >
      <div className="container-page relative mt-4 overflow-visible">
        {/* Right-corner standalone ES/EN pill (collapsed state only). */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              key="lang-corner"
              initial={{ opacity: 0, scale: 0.92, x: 8 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.92, x: 8 }}
              transition={{ duration: LAYOUT_DURATION, ease: EASE }}
              className="glass-soft absolute right-0 top-0 rounded-full p-0.5 shadow-soft"
            >
              <LanguageToggle />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main pill — expands from logo-only to full nav. */}
        <div className="flex justify-center">
          <motion.nav
            layout
            transition={{
              layout: { duration: LAYOUT_DURATION, ease: EASE },
            }}
            className={cn(
              'glass-soft flex items-center rounded-full px-3 py-2 shadow-soft',
              scrolled ? 'w-full justify-between gap-3' : 'justify-center'
            )}
          >
            <motion.a
              layout="position"
              transition={{ duration: LAYOUT_DURATION, ease: EASE }}
              href={`#${HERO_ID}`}
              aria-label="Eddie Elorza · Home"
              className="flex shrink-0 items-center gap-2 rounded-full px-2 outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              <span
                className="grid h-8 w-8 place-items-center rounded-full text-white shadow-glow"
                style={{
                  background:
                    'linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-glow)))',
                }}
              >
                <Code2 className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold tracking-tight">
                Eddie Elorza
              </span>
            </motion.a>

            <AnimatePresence mode="popLayout">
              {scrolled && (
                <motion.div
                  key="nav-right"
                  layout
                  initial={{ opacity: 0, scale: 0.96, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.96, filter: 'blur(4px)' }}
                  transition={{ duration: LAYOUT_DURATION, ease: EASE }}
                  className="flex items-center gap-3"
                >
                  <ul className="flex items-center gap-1">
                    {links.map((item) => {
                      const isActive = active === item.id;
                      return (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            aria-current={isActive ? 'true' : undefined}
                            className={cn(
                              'rounded-full px-3 py-1.5 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
                              isActive
                                ? 'bg-white/[0.08] text-white'
                                : 'text-white/70 hover:bg-white/[0.06] hover:text-white'
                            )}
                          >
                            {t.nav[item.labelKey]}
                          </a>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="flex items-center gap-2">
                    <LanguageToggle />
                    <a
                      href="#contact"
                      className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-ink-950 transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    >
                      {t.nav.cta}
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        </div>
      </div>
    </motion.header>
  );
}
