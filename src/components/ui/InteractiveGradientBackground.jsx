import { useEffect, useRef } from 'react';

export default function InteractiveGradientBackground({
  className = '',
  intensity = 1,
  interactive = true,
  initialOffset = { x: 0, y: 0 },
  opacity = 0.55,
}) {
  const ref = useRef(null);
  const rafRef = useRef(null);
  const pendingRef = useRef(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    host.style.setProperty('--posX', String(initialOffset.x ?? 0));
    host.style.setProperty('--posY', String(initialOffset.y ?? 0));

    if (!interactive) return;

    const schedule = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const ev = pendingRef.current;
        if (!ev) return;
        const rect = host.getBoundingClientRect();
        const px =
          ('clientX' in ev ? ev.clientX : 0) - rect.left - rect.width / 2;
        const py =
          ('clientY' in ev ? ev.clientY : 0) - rect.top - rect.height / 2;
        const reduced = window.matchMedia?.(
          '(prefers-reduced-motion: reduce)'
        ).matches;
        const k = reduced ? 0.1 : intensity;
        host.style.setProperty('--posX', String(px * k));
        host.style.setProperty('--posY', String(py * k));
      });
    };

    const onPointer = (e) => {
      pendingRef.current = e;
      schedule();
    };
    const onTouch = (e) => {
      if (!e.touches.length) return;
      pendingRef.current = e.touches[0];
      schedule();
    };
    const reset = () => {
      host.style.setProperty('--posX', '0');
      host.style.setProperty('--posY', '0');
    };

    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });
    host.addEventListener('pointerleave', reset);

    return () => {
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('touchmove', onTouch);
      host.removeEventListener('pointerleave', reset);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [interactive, intensity, initialOffset.x, initialOffset.y]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        contain: 'layout paint',
        transform: 'translateZ(0)',
        '--posX': '0',
        '--posY': '0',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity,
          background: `
            linear-gradient(115deg, rgb(15 30 20), rgb(0 0 0)),
            radial-gradient(90% 100% at calc(50% + var(--posX)*1px) calc(0% + var(--posY)*1px), rgb(80 80 100), rgb(10 0 25)),
            radial-gradient(100% 100% at calc(80% - var(--posX)*1px) calc(0% - var(--posY)*1px), rgb(100 120 0), rgb(15 0 0)),
            radial-gradient(150% 210% at calc(100% + var(--posX)*1px) calc(0% + var(--posY)*1px), rgb(10 80 60), rgb(0 5 120)),
            radial-gradient(100% 100% at calc(100% - var(--posX)*1px) calc(30% - var(--posY)*1px), rgb(120 35 0), rgb(0 100 140)),
            linear-gradient(60deg, rgb(100 0 0), rgb(60 40 150))
          `,
          backgroundBlendMode:
            'overlay, overlay, difference, difference, difference, normal',
          transition: 'opacity 0.5s ease',
          willChange: 'background-position',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at center, rgba(6,6,10,0.35), rgba(6,6,10,0.85) 70%, rgba(6,6,10,0.95))',
        }}
      />
    </div>
  );
}
