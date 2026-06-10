import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { GripVertical } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import useMediaQuery from '../../hooks/useMediaQuery.js';
import ThemePicker from '../ThemePicker.jsx';
import { THEME_DOCK_TOOLTIP_FLAG } from '../../config/themeColors.js';

const EASE = [0.22, 1, 0.36, 1];

/**
 * ThemeColorDock
 *
 * Draggable glass pill with a grip handle + the existing ThemePicker
 * (FlowerMenu radial open pattern). Drag/click distinction is handled
 * by Framer Motion's `drag` — a real drag suppresses the underlying
 * palette-button click automatically.
 *
 *  - Pill (closed): [grip][palette]
 *  - Pill (open):   palette button morphs into X, color dots fan out
 *                   in the four cardinal directions (handled by
 *                   FlowerMenu inside ThemePicker).
 *  - Tooltip: small `rounded-full` bubble — visible on hover/focus
 *             and once at first-load for 2 s (persisted in
 *             localStorage). `whitespace-nowrap` so the short
 *             "Arrastra · Click color" text never wraps.
 */
export default function ThemeColorDock() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const isMobile = useMediaQuery('(max-width: 1023px)');

  const constraintsRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [tooltipShownOnce, setTooltipShownOnce] = useState(false);
  const [wiggle, setWiggle] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);

  /* --------------------- mount + first-load wiggle/tooltip ---------------- */

  useEffect(() => {
    setReady(true);
    if (typeof window === 'undefined' || reduceMotion) return undefined;
    if (localStorage.getItem(THEME_DOCK_TOOLTIP_FLAG)) return undefined;

    const showTimer = setTimeout(() => {
      setTooltipShownOnce(true);
      setWiggle(true);
    }, 1200);
    const hideTimer = setTimeout(() => {
      setTooltipShownOnce(false);
      try {
        localStorage.setItem(THEME_DOCK_TOOLTIP_FLAG, '1');
      } catch {
        /* private mode — ignore */
      }
    }, 1200 + 2200);
    const wiggleReset = setTimeout(() => setWiggle(false), 1200 + 900);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearTimeout(wiggleReset);
    };
  }, [reduceMotion]);

  /* --------------------------------- render ------------------------------- */

  const tooltipVisible = hovered || tooltipShownOnce;
  const tooltipText = isMobile ? t.theme.mobileHint : t.theme.tooltip;

  const wiggleAnimation = reduceMotion
    ? { opacity: 1, scale: 1, y: 0 }
    : wiggle
      ? { opacity: 1, scale: 1, y: 0, x: [0, -6, 0, -4, 0] }
      : { opacity: 1, scale: 1, y: 0 };

  return (
    <>
      <div
        ref={constraintsRef}
        className="pointer-events-none fixed inset-0 z-[55]"
        aria-hidden
      />

      {ready && (
        <motion.div
          drag
          dragMomentum={false}
          dragElastic={0.12}
          dragConstraints={constraintsRef}
          whileDrag={{ scale: 1.06, cursor: 'grabbing' }}
          initial={{ opacity: 0, scale: 0.85, y: 12 }}
          animate={wiggleAnimation}
          transition={
            wiggle && !reduceMotion
              ? {
                  x: { duration: 0.9, ease: 'easeInOut' },
                  default: { duration: 0.45, ease: EASE },
                }
              : { delay: reduceMotion ? 0 : 0.5, duration: 0.45, ease: EASE }
          }
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
          onFocus={() => setHovered(true)}
          onBlur={() => setHovered(false)}
          style={{ touchAction: 'none' }}
          className="fixed bottom-24 right-5 z-[70] flex cursor-grab touch-none items-center gap-0.5 rounded-full border border-white/10 bg-ink-900/85 p-1 pl-1.5 shadow-soft backdrop-blur-md lg:bottom-8 lg:right-8"
        >
          {/* Drag handle */}
          <span
            aria-hidden
            className="grid h-7 w-3 place-items-center text-white/35"
          >
            <GripVertical className="h-3.5 w-3.5" />
          </span>

          {/*
           * Palette + tooltip wrapper. The tooltip is positioned relative
           * to THIS element so it sits centered above the palette button.
           * When the FlowerMenu opens, the top petal (purple) reaches
           * roughly 56 px above the wrapper — `marginBottom` lifts the
           * tooltip past it so it lands cleanly above the purple dot.
           */}
          <div className="relative">
            <ThemePicker onOpenChange={setPickerOpen} />

            <motion.div
              className="pointer-events-none absolute left-1/2 z-[80]"
              style={{
                bottom: '100%',
                transform: 'translateX(-50%)',
              }}
              animate={{ marginBottom: pickerOpen ? 64 : 8 }}
              transition={{ duration: 0.25, ease: EASE }}
            >
              <AnimatePresence>
                {tooltipVisible && (
                  <motion.div
                    key="dock-tooltip"
                    role="tooltip"
                    initial={{ opacity: 0, y: 4, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: EASE }}
                    className="max-w-[160px] whitespace-nowrap rounded-full border border-white/10 bg-ink-950/95 px-2.5 py-1.5 text-[11px] font-medium text-white/80 shadow-soft backdrop-blur-md"
                  >
                    {tooltipText}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
}
