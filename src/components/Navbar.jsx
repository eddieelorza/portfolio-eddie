import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import LanguageToggle from './LanguageToggle.jsx';

const SECTION_IDS = [
  'about',
  'experience',
  'product',
  'education',
  'projects',
  'stack',
  'impact',
];

function useActiveSection() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    );
    if (sections.length === 0) return;

    const visibility = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.intersectionRatio);
        }
        let bestId = null;
        let bestRatio = 0;
        for (const [id, ratio] of visibility) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        if (bestRatio > 0) setActive(bestId);
      },
      {
        // Trigger near the top of the viewport so the active link matches
        // the section the user is reading, not the one entering at the bottom.
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

export default function Navbar() {
  const { t } = useLanguage();
  const active = useActiveSection();

  const links = [
    { href: '#about', id: 'about', label: t.nav.about },
    { href: '#experience', id: 'experience', label: t.nav.experience },
    { href: '#product', id: 'product', label: t.nav.product },
    { href: '#education', id: 'education', label: t.nav.education },
    { href: '#projects', id: 'projects', label: t.nav.projects },
    { href: '#stack', id: 'stack', label: t.nav.stack },
    { href: '#impact', id: 'impact', label: t.nav.impact },
  ];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
      style={{ transform: 'translateZ(0)' }}
    >
      <div className="container-page mt-4">
        <nav className="flex items-center justify-between gap-2 rounded-full px-3 py-2 lg:glass-soft">
          <a href="#top" className="flex shrink-0 items-center gap-2 pl-2">
            <span
              className="grid h-8 w-8 place-items-center rounded-full text-white shadow-glow"
              style={{
                background:
                  'linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-glow)))',
              }}
            >
              <Code2 className="h-4 w-4" />
            </span>
            <span className="hidden text-sm font-semibold tracking-tight sm:inline">
              Eddie Elorza
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={
                      'rounded-full px-3 py-1.5 text-sm transition ' +
                      (isActive
                        ? 'bg-white/[0.08] text-white'
                        : 'text-white/70 hover:bg-white/[0.06] hover:text-white')
                    }
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <a
              href="#contact"
              className="hidden rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-ink-950 transition hover:bg-white/90 sm:inline-flex"
            >
              {t.nav.cta}
            </a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
