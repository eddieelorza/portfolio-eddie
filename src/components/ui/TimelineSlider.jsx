import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils.js';

export default function TimelineSlider({
  ticks,
  value,
  onChange,
  className,
  size = 480,
  orientation = 'vertical',
}) {
  const trackRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const max = ticks.length - 1;
  const isVertical = orientation === 'vertical';

  const updateFromPointer = useCallback(
    (clientX, clientY) => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const ratio = isVertical
        ? Math.max(0, Math.min(1, (clientY - rect.top) / rect.height))
        : Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const idx = Math.round(ratio * max);
      if (idx !== value) onChange(idx);
    },
    [isVertical, max, onChange, value]
  );

  useEffect(() => {
    if (!dragging) return;
    const move = (e) => updateFromPointer(e.clientX, e.clientY);
    const up = () => setDragging(false);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
  }, [dragging, updateFromPointer]);

  const ratio = max === 0 ? 0 : value / max;

  const trackStyle = isVertical
    ? { height: size, width: 8 }
    : { width: '100%', minWidth: typeof size === 'number' ? size : undefined, height: 8 };

  const fillStyle = isVertical
    ? { width: '100%', height: `${ratio * 100}%`, top: 0, left: 0 }
    : { height: '100%', width: `${ratio * 100}%`, top: 0, left: 0 };

  const tickPos = (i) => {
    const r = max === 0 ? 0 : i / max;
    return isVertical
      ? { top: `${r * 100}%`, left: '50%' }
      : { left: `${r * 100}%`, top: '50%' };
  };

  const thumbPos = isVertical
    ? { top: `${ratio * 100}%`, left: '50%' }
    : { left: `${ratio * 100}%`, top: '50%' };

  return (
    <div
      className={cn(
        'relative flex select-none',
        isVertical ? 'items-stretch gap-4' : 'flex-col items-stretch gap-3',
        className
      )}
    >
      <div
        ref={trackRef}
        onPointerDown={(e) => {
          setDragging(true);
          updateFromPointer(e.clientX, e.clientY);
        }}
        className={cn(
          'relative cursor-pointer rounded-full bg-white/[0.06]',
          isVertical ? 'self-stretch' : 'self-stretch'
        )}
        style={trackStyle}
      >
        <motion.span
          className="absolute rounded-full"
          style={{
            background: isVertical
              ? 'linear-gradient(to bottom, rgb(var(--accent)), rgb(var(--accent-glow)))'
              : 'linear-gradient(to right, rgb(var(--accent)), rgb(var(--accent-glow)))',
            boxShadow: '0 0 24px rgb(var(--accent) / 0.55)',
            ...fillStyle,
          }}
          animate={isVertical ? { height: `${ratio * 100}%` } : { width: `${ratio * 100}%` }}
          transition={{ type: 'spring', stiffness: 260, damping: 32 }}
        />

        {ticks.map((_, i) => {
          const active = i <= value;
          return (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onChange(i);
              }}
              aria-label={`Slide ${i + 1}`}
              className="absolute grid h-4 w-4 -translate-x-1/2 -translate-y-1/2 place-items-center"
              style={tickPos(i)}
            >
              <span
                className={cn(
                  'h-2 w-2 rounded-full transition',
                  active ? 'scale-100' : 'scale-75 bg-white/30'
                )}
                style={
                  active
                    ? {
                        backgroundColor: 'rgb(var(--accent))',
                        boxShadow: '0 0 10px rgb(var(--accent) / 0.7)',
                      }
                    : undefined
                }
              />
            </button>
          );
        })}

        <motion.div
          onPointerDown={(e) => {
            e.stopPropagation();
            setDragging(true);
          }}
          className="absolute z-10 grid h-6 w-6 -translate-x-1/2 -translate-y-1/2 cursor-grab place-items-center rounded-full border border-white/40 bg-white shadow-[0_0_0_4px_rgb(var(--accent)/0.25)] active:cursor-grabbing"
          animate={thumbPos}
          transition={{ type: 'spring', stiffness: 320, damping: 30 }}
          style={{ touchAction: 'none' }}
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: 'rgb(var(--accent))' }}
          />
        </motion.div>
      </div>

      <div
        className={cn(
          'flex',
          isVertical
            ? 'flex-col justify-between py-1'
            : 'flex-row items-center justify-between px-1'
        )}
      >
        {ticks.map((label, i) => {
          const active = i === value;
          return (
            <button
              key={`${label}-${i}`}
              type="button"
              onClick={() => onChange(i)}
              className={cn(
                'whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.18em] transition md:text-xs',
                isVertical ? 'text-left' : 'text-center',
                active ? 'text-white' : 'text-white/35 hover:text-white/60'
              )}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
