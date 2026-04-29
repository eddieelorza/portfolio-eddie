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
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import EducationSection from './components/EducationSection.jsx';
import Projects from './components/Projects.jsx';
import TechStack from './components/TechStack.jsx';
import Impact from './components/Impact.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BottomMenuBar from './components/ui/BottomMenuBar.jsx';
import FloatingThemePicker from './components/FloatingThemePicker.jsx';

function MobileNav() {
  const { t } = useLanguage();
  const items = [
    { href: '#about', label: t.nav.about, icon: User },
    { href: '#experience', label: t.nav.experience, icon: Briefcase },
    { href: '#education', label: t.nav.education, icon: GraduationCap },
    { href: '#projects', label: t.nav.projects, icon: FolderKanban },
    { href: '#stack', label: t.nav.stack, icon: Layers },
    { href: '#impact', label: t.nav.impact, icon: BarChart3 },
    { href: '#contact', label: t.nav.contact, icon: Mail },
  ];
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
            <About />
            <Experience />
            <EducationSection />
            <Projects />
            <TechStack />
            <Impact />
            <Contact />
          </main>
          <Footer />
          <MobileNav />
          <FloatingThemePicker />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
