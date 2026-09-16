import { lazy, Suspense, useEffect } from "react";
import { MotionConfig } from "motion/react";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import DesktopHeader from "./components/navigation/DesktopHeader.jsx";
import MobileHeader from "./components/navigation/MobileHeader.jsx";
import MobileBottomNav from "./components/navigation/MobileBottomNav.jsx";
import Hero from "./components/Hero.jsx";
import ScrollProgress from "./components/ui/ScrollProgress.jsx";

const About = lazy(() => import("./components/About.jsx"));
const Experience = lazy(() => import("./components/Experience.jsx"));
const ProductOperatingSystem = lazy(
  () => import("./components/ProductOperatingSystem.jsx"),
);
const EducationSection = lazy(
  () => import("./components/EducationSection.jsx"),
);
const Projects = lazy(() => import("./components/Projects.jsx"));
const TechStack = lazy(() => import("./components/TechStack.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const ThemeColorDock = lazy(
  () => import("./components/theme/ThemeColorDock.jsx"),
);

function SectionFallback({ minHeight = "60vh" }) {
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
    if (typeof window === "undefined") return undefined;

    if (window.location.hash) {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
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

      const href = link.getAttribute("href") || "";
      const id = href.slice(1);
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: prefersReduced ? "auto" : "smooth",
        block: "start",
      });
    }

    document.addEventListener("click", onAnchorClick);
    return () => document.removeEventListener("click", onAnchorClick);
  }, []);
}

/**
 * Skip link — the first Tab stop. Handles its own click (and calls
 * preventDefault, so the hash-free handler above steps aside) because it has
 * to move focus, not just scroll: otherwise the next Tab would start again
 * from the header.
 */
function SkipLink() {
  const { t } = useLanguage();
  return (
    <a
      href="#main"
      onClick={(event) => {
        event.preventDefault();
        const main = document.getElementById("main");
        if (!main) return;
        main.focus({ preventScroll: true });
        main.scrollIntoView({ block: "start" });
      }}
      className="sr-only rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-950 shadow-soft focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200]"
    >
      {t.a11y.skip}
    </a>
  );
}

export default function App() {
  useHashFreeNavigation();

  return (
    <ThemeProvider>
      <LanguageProvider>
        {/*
         * reducedMotion="user": every motion component drops transform and
         * layout animation when the OS asks for reduced motion (opacity
         * still fades). CSS keyframe loops are covered in index.css.
         */}
        <MotionConfig reducedMotion="user">
          <div className="relative min-h-screen overflow-x-hidden bg-ink-950 text-white">
            <SkipLink />
            <ScrollProgress />
            <DesktopHeader />
            <MobileHeader />

            {/*
             * The floating MobileBottomNav stays above the page tail.
             * Padding adds the home-indicator safe area on iPhones so the
             * footer never sits under the dock on notched devices.
             */}
            <main
              id="main"
              tabIndex={-1}
              className="outline-none lg:!pb-0"
              style={{
                paddingBottom: "calc(7rem + env(safe-area-inset-bottom, 0px))",
              }}
            >
              <Hero />
              {/*
               * Proof first: a recruiter's skim reaches the projects straight
               * from the hero CTA instead of five screens down, after
               * Education. Keep NAV_ITEMS in config/navigation.js in the same
               * order so the nav and scroll spy read top to bottom.
               */}
              <Suspense fallback={<SectionFallback />}>
                <Projects />
                <About />
                <Experience />
                <ProductOperatingSystem />
                <EducationSection />
                <TechStack />
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
        </MotionConfig>
      </LanguageProvider>
    </ThemeProvider>
  );
}
