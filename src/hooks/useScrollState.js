import { useEffect, useState } from 'react';

/**
 * Returns `true` once the window has scrolled past `threshold` pixels.
 * Throttled with requestAnimationFrame and uses a passive scroll listener
 * so the main thread stays responsive on long pages.
 *
 * @param {number} [threshold=80]  Pixels of scroll required to flip to true.
 */
export default function useScrollState(threshold = 80) {
  const [scrolled, setScrolled] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.scrollY > threshold;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    let rafId = null;

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY;
        const next = y > threshold;
        setScrolled((prev) => (prev === next ? prev : next));
        rafId = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [threshold]);

  return scrolled;
}
