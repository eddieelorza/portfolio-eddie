import { useTheme } from '../contexts/ThemeContext.jsx';
import FlowerMenu from './ui/FlowerMenu.jsx';
import { cn } from '../lib/utils.js';

export default function ThemePicker() {
  const { theme, setTheme, themes } = useTheme();

  const items = themes.map((t) => ({
    render: ({ close }) => {
      const active = theme === t.id;
      return (
        <button
          type="button"
          onClick={() => {
            setTheme(t.id);
            close();
          }}
          aria-label={`Theme ${t.label}`}
          className={cn(
            'group grid h-full w-full place-items-center rounded-full border border-white/10 bg-ink-900/95 transition hover:scale-110',
            active && 'ring-2 ring-white/80'
          )}
          style={{
            boxShadow: active
              ? `0 0 20px ${t.color}aa`
              : `0 0 12px ${t.color}55`,
          }}
        >
          <span
            className="block h-3.5 w-3.5 rounded-full"
            style={{ backgroundColor: t.color }}
          />
        </button>
      );
    },
  }));

  return <FlowerMenu items={items} togglerSize={36} ariaLabel="Theme picker" />;
}
