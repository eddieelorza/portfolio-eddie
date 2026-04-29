import { lazy, Suspense, useMemo } from 'react';
import {
  User,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Layers,
  BarChart3,
  Mail,
} from 'lucide-react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import BottomMenuBar from './components/ui/BottomMenuBar.jsx';

const About = lazy(() => import('./components/About.jsx'));
const Experience = lazy(() => import('./components/Experience.jsx'));
const EducationSection = lazy(() =>
  import('./components/EducationSection.jsx')
);
const Projects = lazy(() => import('./components/Projects.jsx'));
const TechStack = lazy(() => import('./components/TechStack.jsx'));
const Impact = lazy(() => import('./components/Impact.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));
const FloatingThemePicker = lazy(() =>
  import('./components/FloatingThemePicker.jsx')
);

function SectionFallback({ minHeight = '60vh' }) {
  return <div aria-hidden style={{ minHeight }} />;
}

function MobileNav() {
  const { t } = useLanguage();
  const items = useMemo(
    () => [
      { href: '#about', label: t.nav.about, icon: User },
      { href: '#experience', label: t.nav.experience, icon: Briefcase },
      { href: '#education', label: t.nav.education, icon: GraduationCap },
      { href: '#projects', label: t.nav.projects, icon: FolderKanban },
      { href: '#stack', label: t.nav.stack, icon: Layers },
      { href: '#impact', label: t.nav.impact, icon: BarChart3 },
      { href: '#contact', label: t.nav.contact, icon: Mail },
    ],
    [t]
  );
  return (
    <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 lg:hidden">
      <BottomMenuBar items={items} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen overflow-x-hidden bg-ink-950 text-white">
          <Navbar />
          <main>
            <Hero />
            <Suspense fallback={<SectionFallback />}>
              <About />
              <Experience />
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
          <MobileNav />
          <Suspense fallback={null}>
            <FloatingThemePicker />
          </Suspense>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
