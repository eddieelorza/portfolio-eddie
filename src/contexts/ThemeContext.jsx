import { createContext, useContext, useEffect, useMemo, useState } from "react";

/**
 * Accent presets. `swatch` is what the picker paints for each option, per
 * mode — it has to be mode-aware because "tinta" is near-black in light and
 * near-cream in dark, and a fixed swatch would vanish against one of them.
 * The real accent values live in index.css as `[data-theme][data-mode]`.
 */
export const THEMES = [
  {
    id: "terracota",
    label: "Terracota",
    swatch: { light: "#A8481F", dark: "#EFA482" },
  },
  {
    id: "azul",
    label: "Azul tinta",
    swatch: { light: "#1F3B7A", dark: "#9DB8F2" },
  },
  {
    id: "bosque",
    label: "Verde bosque",
    swatch: { light: "#2E5A3A", dark: "#93CFA2" },
  },
  {
    id: "tinta",
    label: "Tinta",
    swatch: { light: "#1C1917", dark: "#EDE6DA" },
  },
];

export const MODES = ["light", "dark"];

const DEFAULT_THEME = "terracota";
const DEFAULT_MODE = "light";

// Keys are shared with the pre-paint script in index.html — keep in sync.
const THEME_KEY = "eddie-portfolio-theme";
const MODE_KEY = "eddie-portfolio-mode";

/**
 * Anyone who visited before the palette change has `purple`, `cyan`, `orange`
 * or `green` stored. Those ids no longer exist, so an unknown stored value
 * falls back to the default instead of leaving `data-theme` pointing at a
 * selector with no rules — which would silently show the :root accent while
 * the picker highlighted nothing.
 */
function readStored(key, allowed, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const value = localStorage.getItem(key);
    return allowed.includes(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

function writeStored(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* private mode / storage disabled — the attribute still applies */
  }
}

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() =>
    readStored(
      THEME_KEY,
      THEMES.map((t) => t.id),
      DEFAULT_THEME,
    ),
  );
  const [mode, setMode] = useState(() =>
    readStored(MODE_KEY, MODES, DEFAULT_MODE),
  );

  useEffect(() => {
    writeStored(THEME_KEY, theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    writeStored(MODE_KEY, mode);
    document.documentElement.setAttribute("data-mode", mode);
    // Keep the browser chrome (mobile address bar) in step with the canvas.
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", mode === "dark" ? "#06060a" : "#F4EFE6");
  }, [mode]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      themes: THEMES,
      mode,
      setMode,
      toggleMode: () => setMode((m) => (m === "dark" ? "light" : "dark")),
    }),
    [theme, mode],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
