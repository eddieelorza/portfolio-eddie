import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export const THEMES = [
  { id: 'purple', label: 'Purple', color: '#7c5cff' },
  { id: 'cyan', label: 'Cyan', color: '#06b6d4' },
  { id: 'orange', label: 'Orange', color: '#f97316' },
  { id: 'green', label: 'Green', color: '#22c55e' },
];

const ThemeContext = createContext(null);
const STORAGE_KEY = 'eddie-portfolio-theme';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'purple';
    return localStorage.getItem(STORAGE_KEY) || 'purple';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme, themes: THEMES }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}
