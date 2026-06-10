import { lazy, Suspense, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import DesktopHeader from './components/navigation/DesktopHeader.jsx';
import MobileHeader from './components/navigation/MobileHeader.jsx';
import MobileBottomNav from './components/navigation/MobileBottomNav.jsx';
import Hero from './components/Hero.jsx';
import ScrollProgress from './components/ui/ScrollProgress.jsx';

const About = lazy(() => import('./components/About.jsx'));
const Experience = lazy(() => import('./components/Experience.jsx'));
const ProductOperatingSystem = lazy(() =>
  import('./components/ProductOperatingSystem.jsx')
);
const EducationSection = lazy(() =>
  import('./components/EducationSection.jsx')
);
const Projects = lazy(() => import('./components/Projects.jsx'));
const TechStack = lazy(() => import('./components/TechStack.jsx'));
const Impact = lazy(() => import('./components/Impact.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));
const ThemeColorDock = lazy(() =>
  import('./components/theme/ThemeColorDock.jsx')
);

function SectionFallback({ minHeight = '60vh' }) {
  return <div aria-hidden style={{ minHeight }} />;
}

/**
 * Hash-free in-page navigation.
 *
 *  1. If the initial URL carries a `#section` (e.g. someone shared a
 *     link), clear it from the address bar with `history.replaceState`
 *     so the URL stays clean.
 *  2. Delegate every `<a href="#…">` click on the document and turn it
 *     into a `scrollIntoView({ behavior: "smooth" })` call. The URL
 *     hash is never updated. Respects `prefers-reduced-motion`.
 *
 *  Scroll spy (useActiveSection) keeps working — it only touches local
 *  React state, never `window.location`.
 */
function useHashFreeNavigation() {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    if (window.location.hash) {
      history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
      );
    }

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    function onAnchorClick(event) {
      // Honour modifier keys (cmd/ctrl/middle-click → new tab) and
      // anything that already had `preventDefault()` called on it.
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute('href') || '';
      const id = href.slice(1);
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: prefersReduced ? 'auto' : 'smooth',
        block: 'start',
      });
    }

    document.addEventListener('click', onAnchorClick);
    return () => document.removeEventListener('click', onAnchorClick);
  }, []);
}

export default function App() {
  useHashFreeNavigation();

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen overflow-x-hidden bg-ink-950 text-white">
          <ScrollProgress />
          <DesktopHeader />
          <MobileHeader />

          {/*
           * The floating MobileBottomNav stays above the page tail.
           * Padding adds the home-indicator safe area on iPhones so the
           * footer never sits under the dock on notched devices.
           */}
          <main
            className="lg:!pb-0"
            style={{
              paddingBottom: 'calc(7rem + env(safe-area-inset-bottom, 0px))',
            }}
          >
            <Hero />
            <Suspense fallback={<SectionFallback />}>
              <About />
              <Experience />
              <ProductOperatingSystem />
              <EducationSection />
              <Projects />
              <TechStack />
              <Impact />
              <Contact />
            </Suspense>
          </main>

          <Suspense fallback={null}>
            <Footer />
          </Suspense>

          <MobileBottomNav />

          <Suspense fallback={null}>
            <ThemeColorDock />
          </Suspense>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
