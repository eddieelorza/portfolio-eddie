import { useEffect, useId, useRef, useState } from "react";
import { motion } from "motion/react";
import { Palette } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { cn } from "../../lib/utils.js";

/**
 * MobileThemeMenu
 *
 * The accent picker for screens below lg, where the draggable dock is not
 * rendered. The radial FlowerMenu needs ~110px of free space around its
 * toggler, which a header pill does not have, so here the same four swatches
 * drop down as a small row under the button.
 *
 * The popover is positioned against the header pill (the nearest `relative`
 * ancestor), not the button, so it lines up with the pill's right edge instead
 * of running off the left side of a 375px screen.
 *
 * Closes on selection, Escape (focus returns to the button) and any pointer
 * down outside the menu.
 */
export default function MobileThemeMenu() {
  const { theme, setTheme, themes, mode } = useTheme();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const onKeyDown = (event) => {
    if (event.key === "Escape" && open) {
      event.stopPropagation();
      setOpen(false);
      buttonRef.current?.focus();
    }
  };

  const label = open ? t.a11y.closeColors : t.a11y.openColors;

  return (
    <div ref={rootRef} onKeyDown={onKeyDown}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={label}
        title={label}
        className={cn(
          "relative grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/[0.12] bg-white/[0.06] text-white/70 transition-colors duration-200 after:absolute after:-inset-1.5 after:content-[''] hover:border-white/25 hover:text-white",
          open && "border-white/25 text-white",
        )}
      >
        <Palette aria-hidden className="h-4 w-4" />
      </button>

      {open && (
        <motion.div
          id={menuId}
          role="group"
          aria-label={t.themeLabel}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="glass-soft absolute right-0 top-full mt-2 flex gap-1 rounded-full p-1 shadow-soft"
        >
          {themes.map((option) => {
            const active = theme === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => {
                  setTheme(option.id);
                  setOpen(false);
                }}
                aria-label={option.label}
                aria-pressed={active}
                className={cn(
                  "grid h-11 w-11 place-items-center rounded-full transition",
                  active ? "bg-white/[0.1]" : "hover:bg-white/[0.06]",
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "block h-5 w-5 rounded-full",
                    active &&
                      "ring-2 ring-white/80 ring-offset-2 ring-offset-ink-900",
                  )}
                  style={{ backgroundColor: option.swatch[mode] }}
                />
              </button>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}
