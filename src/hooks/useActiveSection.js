import { useEffect, useMemo, useState } from 'react';

/**
 * Tracks which section the reader is in: the one crossing a reading line
 * placed `line` of the way down the viewport.
 *
 * This used to pick the section with the highest IntersectionObserver ratio.
 * A ratio is the share of the *section itself* that is visible, so near the
 * end of a tall section (Cómo trabajo, Proyectos) a short neighbour peeking
 * in scored higher and the nav jumped one item ahead. The reading line has
 * no such bias: exactly one section crosses it.
 *
 *  - Lazily-mounted sections (React.lazy + Suspense) need no retry logic:
 *    ids are looked up on every check, and a ResizeObserver on <body>
 *    re-checks when late sections change the page height.
 *  - At the very bottom the last section wins even if it is too short to
 *    reach the line.
 *  - Checks are coalesced to one per frame.
 *
 * @param {string[]} sectionIds       Stable array of DOM ids, in page order.
 * @param {object}   [options]
 * @param {number}   [options.line]   Reading line as a fraction of viewport height.
 * @returns {string | null}           Id of the current section.
 */
export default function useActiveSection(sectionIds, { line = 0.35 } = {}) {
  const [active, setActive] = useState(null);

  // Serialise ids so the effect re-runs only when the actual set
  // changes — not when callers pass a fresh array literal each render.
  const idsKey = useMemo(() => sectionIds.join(','), [sectionIds]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const ids = idsKey.split(',');
    let frame = 0;

    function check() {
      frame = 0;
      const sections = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean);
      if (sections.length === 0) return;

      const doc = document.documentElement;
      const atBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 2;
      if (atBottom) {
        setActive(sections[sections.length - 1].id);
        return;
      }

      const y = window.innerHeight * line;
      let current = null;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= y) current = section.id;
        else break;
      }
      setActive(current);
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(check);
    }

    check();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const resizeObserver =
      'ResizeObserver' in window ? new ResizeObserver(schedule) : null;
    resizeObserver?.observe(document.body);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      resizeObserver?.disconnect();
    };
  }, [idsKey, line]);

  return active;
}
