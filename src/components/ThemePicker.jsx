import { useTheme } from "../contexts/ThemeContext.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import FlowerMenu from "./ui/FlowerMenu.jsx";
import { cn } from "../lib/utils.js";

export default function ThemePicker({ onOpenChange }) {
  const { theme, setTheme, themes, mode } = useTheme();
  const { t: copy } = useLanguage();

  const items = themes.map((t) => ({
    render: ({ close }) => {
      const active = theme === t.id;
      // Swatches are per mode: "tinta" is near-black in light and near-cream in
      // dark, so a single fixed colour would vanish against one of them.
      const color = t.swatch[mode];
      return (
        <button
          type="button"
          onClick={() => {
            setTheme(t.id);
            close();
          }}
          aria-label={t.label}
          aria-pressed={active}
          className={cn(
            "group grid h-full w-full place-items-center rounded-full border border-white/10 bg-ink-900/95 transition hover:scale-110",
            active && "ring-2 ring-white/80",
          )}
          style={{
            boxShadow: active ? `0 0 16px ${color}66` : `0 0 10px ${color}33`,
          }}
        >
          <span
            className="block h-3.5 w-3.5 rounded-full"
            style={{ backgroundColor: color }}
          />
        </button>
      );
    },
  }));

  return (
    <FlowerMenu
      items={items}
      togglerSize={36}
      ariaLabel={copy.themeLabel}
      openLabel={copy.a11y.openColors}
      closeLabel={copy.a11y.closeColors}
      onOpenChange={onOpenChange}
    />
  );
}
