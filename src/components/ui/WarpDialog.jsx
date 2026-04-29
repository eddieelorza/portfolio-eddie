import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils.js';

export default function WarpDialog({ open, onClose, title, children, className }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
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
              closed: { opacity: 0, backdropFilter: 'blur(0px)' },
              open: { opacity: 1, backdropFilter: 'blur(14px)' },
            }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-ink-950/70"
            onClick={onClose}
          />

          <motion.div
            variants={{
              closed: {
                opacity: 0,
                scale: 0.6,
                rotateX: -65,
                y: 80,
                filter: 'blur(20px)',
              },
              open: {
                opacity: 1,
                scale: 1,
                rotateX: 0,
                y: 0,
                filter: 'blur(0px)',
              },
            }}
            transition={{
              type: 'spring',
              stiffness: 220,
              damping: 26,
              mass: 0.9,
            }}
            style={{ transformPerspective: 1400 }}
            className={cn(
              'relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-ink-900/95 to-ink-800/95 p-7 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)] backdrop-blur-2xl',
              className
            )}
          >
            <div
              className="pointer-events-none absolute -inset-px rounded-3xl"
              style={{
                background:
                  'linear-gradient(135deg, rgb(var(--accent) / 0.5), transparent 50%, rgb(var(--accent-glow) / 0.4))',
                WebkitMask:
                  'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: 1,
              }}
            />

            <div className="relative flex items-start justify-between gap-4">
              <div>
                {title && (
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                    {title}
                  </h3>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="relative mt-5">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
