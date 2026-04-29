import { useEffect, useRef } from 'react';
import { cn } from '../../lib/utils.js';

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
  cyan: { base: 190, spread: 200 },
};

export default function GlowCard({
  children,
  className = '',
  glowColor = 'purple',
}) {
  const cardRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reduced) return;

    let rafId = null;
    let pending = null;

    const apply = () => {
      rafId = null;
      const e = pending;
      if (!e || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xp = rect.width ? x / rect.width : 0;
      const yp = rect.height ? y / rect.height : 0;
      cardRef.current.style.setProperty('--x', x.toFixed(2));
      cardRef.current.style.setProperty('--xp', xp.toFixed(2));
      cardRef.current.style.setProperty('--y', y.toFixed(2));
      cardRef.current.style.setProperty('--yp', yp.toFixed(2));
    };

    const syncPointer = (e) => {
      pending = e;
      if (rafId == null) rafId = requestAnimationFrame(apply);
    };

    document.addEventListener('pointermove', syncPointer, { passive: true });
    return () => {
      document.removeEventListener('pointermove', syncPointer);
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, []);

  const { base, spread } = glowColorMap[glowColor] || glowColorMap.purple;

  const inlineStyles = {
    '--base': base,
    '--spread': spread,
    '--radius': '18',
    '--border': '2',
    '--backdrop': 'hsl(0 0% 60% / 0.08)',
    '--backup-border': 'var(--backdrop)',
    '--size': '220',
    '--outer': '1',
    '--border-size': 'calc(var(--border, 2) * 1px)',
    '--spotlight-size': 'calc(var(--size, 200) * 1px)',
    '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
    backgroundImage: `radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.08)), transparent
    )`,
    backgroundColor: 'var(--backdrop, transparent)',
    backgroundSize:
      'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
    backgroundPosition: '50% 50%',
    border: 'var(--border-size) solid var(--backup-border)',
    position: 'relative',
    touchAction: 'none',
  };

  return (
    <div
      ref={cardRef}
      data-glow
      style={inlineStyles}
      className={cn(
        'edge-glow relative rounded-[18px] shadow-[0_1rem_2rem_-1rem_black]',
        className
      )}
    >
      <div data-glow></div>
      {children}
    </div>
  );
}
