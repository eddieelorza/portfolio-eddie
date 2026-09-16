import { useCallback, useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import { cn } from "../../lib/utils.js";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * WarpDialog
 *
 * The visual treatment is unchanged — the warp-in entrance and the accent
 * gradient edge. What it gained is the behaviour a modal needs, which it had
 * none of: it rendered a plain <div>, left focus wherever it was (the critique
 * found it on the timeline's "Slide 4" button after opening), let Tab walk out
 * into the page behind the backdrop, and labelled its close button "Close" in
 * both languages.
 *
 *  - `role="dialog"` + `aria-modal` + `aria-labelledby` on the title
 *  - focus moves to the first field on open and returns to the trigger on close
 *  - Tab / Shift+Tab cycle inside the panel
 *  - Escape and backdrop click close; background scroll is locked
 *  - under prefers-reduced-motion the 3D warp becomes a plain fade
 *
 * Rendered through a portal on <body>. Opened from inside an animated card,
 * the ancestor's transform became the containing block for `position: fixed`,
 * so the "full-screen" overlay sat inside the card and later cards painted
 * over it.
 *
 * Initial focus is set synchronously in the effect: the panel is committed by
 * then, and deferring to requestAnimationFrame means focus never enters the
 * dialog in a backgrounded tab, where rAF does not fire.
 */
export default function WarpDialog({
  open,
  onClose,
  title,
  eyebrow,
  closeLabel = "Close",
  children,
  className,
}) {
  const panelRef = useRef(null);
  const previouslyFocused = useRef(null);
  const titleId = useId();
  const reduceMotion = useReducedMotion();

  const onKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose?.();
        return;
      }
      if (event.key !== "Tab") return;
      const nodes = panelRef.current?.querySelectorAll(FOCUSABLE);
      if (!nodes || nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return undefined;

    previouslyFocused.current = document.activeElement;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const target =
      panel?.querySelector("input:not([type=checkbox]), textarea") ||
      panel?.querySelector(FOCUSABLE);
    target?.focus({ preventScroll: true });

    return () => {
      document.body.style.overflow = "";
      previouslyFocused.current?.focus?.({ preventScroll: true });
    };
  }, [open]);

  const panelVariants = reduceMotion
    ? { closed: { opacity: 0 }, open: { opacity: 1 } }
    : {
        closed: {
          opacity: 0,
          scale: 0.6,
          rotateX: -65,
          y: 80,
          filter: "blur(20px)",
        },
        open: { opacity: 1, scale: 1, rotateX: 0, y: 0, filter: "blur(0px)" },
      };

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial="closed"
          animate="open"
          exit="closed"
        >
          <motion.div
            variants={{
              closed: { opacity: 0, backdropFilter: "blur(0px)" },
              open: { opacity: 1, backdropFilter: "blur(14px)" },
            }}
            transition={{ duration: reduceMotion ? 0.15 : 0.4 }}
            className="absolute inset-0 bg-ink-950/70"
            onClick={onClose}
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? titleId : undefined}
            onKeyDown={onKeyDown}
            variants={panelVariants}
            transition={
              reduceMotion
                ? { duration: 0.15 }
                : { type: "spring", stiffness: 220, damping: 26, mass: 0.9 }
            }
            style={{ transformPerspective: 1400 }}
            className={cn(
              "relative z-10 flex max-h-[calc(100dvh-2rem)] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-ink-900/95 to-ink-800/95 p-7 shadow-[0_40px_120px_-30px_rgb(var(--shadow)/0.45)] backdrop-blur-2xl",
              className,
            )}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-3xl"
              style={{
                background:
                  "linear-gradient(135deg, rgb(var(--accent) / 0.5), transparent 50%, rgb(var(--accent-glow) / 0.4))",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: 1,
              }}
            />

            <div className="relative flex shrink-0 items-start justify-between gap-4">
              <div className="min-w-0">
                {eyebrow && (
                  <p className="mb-1 truncate text-xs text-white/50">
                    {eyebrow}
                  </p>
                )}
                {title && (
                  <h3
                    id={titleId}
                    className="font-display text-2xl font-semibold tracking-tight text-white"
                  >
                    {title}
                  </h3>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label={closeLabel}
                className="relative grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition after:absolute after:-inset-1 after:content-[''] hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
              >
                <X aria-hidden className="h-4 w-4" />
              </button>
            </div>

            {/*
             * The body scrolls, the header does not: long content (project
             * details) and a phone keyboard over the contact form both used
             * to push the actions out of reach with page scroll locked.
             */}
            <div className="relative -mx-7 mt-5 min-h-0 overflow-y-auto overscroll-contain px-7 py-1">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
