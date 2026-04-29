import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-page flex flex-col items-center justify-between gap-3 text-sm text-white/45 md:flex-row">
        <p>© {new Date().getFullYear()} Eddie Elorza Ruiz</p>
        <p className="font-mono text-xs">{t.footer}</p>
      </div>
    </footer>
  );
}
