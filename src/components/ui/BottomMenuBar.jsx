import { memo, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils.js';

const springConfig = { duration: 0.3, ease: 'easeInOut' };

function BottomMenuBar({ items, className, initialActive = 0 }) {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(initialActive);
  const menuRef = useRef(null);
  const tooltipRef = useRef(null);
  const [tooltipPos, setTooltipPos] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (hoverIndex !== null && menuRef.current && tooltipRef.current) {
      const child = menuRef.current.children[hoverIndex];
      const menuRect = menuRef.current.getBoundingClientRect();
      const itemRect = child.getBoundingClientRect();
      const tipRect = tooltipRef.current.getBoundingClientRect();
      const left =
        itemRect.left - menuRect.left + (itemRect.width - tipRect.width) / 2;
      setTooltipPos({
        left: Math.max(0, Math.min(left, menuRect.width - tipRect.width)),
        width: tipRect.width,
      });
    }
  }, [hoverIndex]);

  return (
    <div className={cn('relative', className)}>
      <AnimatePresence>
        {hoverIndex !== null && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={springConfig}
            className="pointer-events-none absolute -top-9 left-0 right-0 z-50"
          >
            <motion.div
              ref={tooltipRef}
              className={cn(
                'inline-flex h-7 items-center justify-center overflow-hidden rounded-lg px-3',
                'border border-white/10 bg-ink-900/95 backdrop-blur',
                'shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_18px_-6px_rgba(0,0,0,0.6)]'
              )}
              initial={{ x: tooltipPos.left }}
              animate={{ x: tooltipPos.left }}
              transition={springConfig}
              style={{ width: 'auto' }}
            >
              <p className="whitespace-nowrap text-[12px] font-medium leading-tight text-white/90">
                {items[hoverIndex].label}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        ref={menuRef}
        className={cn(
          'relative z-10 inline-flex h-12 items-center justify-center gap-1 px-2',
          'rounded-full border border-white/10 bg-ink-900/85 backdrop-blur-xl',
          'shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_30px_-10px_rgba(0,0,0,0.6)]'
        )}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeIndex === index;
          return (
            <a
              key={index}
              href={item.href}
              onClick={() => setActiveIndex(index)}
              className="group relative flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition hover:text-white"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onTouchStart={() => setHoverIndex(index)}
              onTouchEnd={() => setHoverIndex(null)}
              aria-label={item.label}
            >
              {isActive && (
                <motion.span
                  layoutId="bottommenu-active"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-glow)))',
                    boxShadow: '0 6px 20px -6px rgb(var(--accent) / 0.7)',
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <Icon
                className={cn(
                  'relative h-[18px] w-[18px] transition',
                  isActive ? 'text-white' : 'group-hover:text-white'
                )}
              />
              <span className="sr-only">{item.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default memo(BottomMenuBar);
