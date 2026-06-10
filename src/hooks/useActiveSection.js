import { useEffect, useMemo, useState } from 'react';

/**
 * Tracks which section is currently in view using IntersectionObserver.
 *
 *  - Handles lazily-mounted sections (React.lazy + Suspense): a
 *    MutationObserver retries the lookup until every requested id is
 *    in the DOM, so sections that arrive late still get observed.
 *  - Picks the highest visible intersection ratio as "active".
 *
 * @param {string[]} sectionIds            Stable array of DOM ids to observe.
 * @param {object}   [options]
 * @param {string}   [options.rootMargin]  IO rootMargin.
 * @param {number[]} [options.threshold]   IO thresholds.
 * @returns {string | null}                Id of the most-visible section.
 */
export default function useActiveSection(
  sectionIds,
  {
    rootMargin = '-35% 0px -35% 0px',
    threshold = [0, 0.1, 0.2, 0.4, 0.6, 0.8, 1],
  } = {}
) {
  const [active, setActive] = useState(null);

  // Serialise ids so the effect re-runs only when the actual set
  // changes — not when callers pass a fresh array literal each render.
  const idsKey = useMemo(() => sectionIds.join(','), [sectionIds]);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return undefined;
    }

    const ids = idsKey.split(',');
    const visibility = new Map();
    let intersectionObserver = null;
    let mutationObserver = null;
    let cancelled = false;

    function pickBest() {
      let bestId = null;
      let bestRatio = 0;
      for (const [id, ratio] of visibility) {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      }
      if (bestRatio > 0 && bestId) setActive(bestId);
    }

    function attach(sections) {
      intersectionObserver?.disconnect();
      if (sections.length === 0) return;
      intersectionObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            visibility.set(entry.target.id, entry.intersectionRatio);
          }
          pickBest();
        },
        { rootMargin, threshold }
      );
      sections.forEach((section) =>
        intersectionObserver.observe(section)
      );
    }

    function findSections() {
      return ids
        .map((id) => document.getElementById(id))
        .filter(Boolean);
    }

    // Initial pass — covers sections already in the DOM.
    let sections = findSections();
    attach(sections);

    // If any section is missing (Suspense still streaming), keep
    // watching the document until all expected ids exist, then
    // re-attach the IntersectionObserver with the complete set.
    if (sections.length < ids.length) {
      mutationObserver = new MutationObserver(() => {
        if (cancelled) return;
        const next = findSections();
        if (next.length > sections.length) {
          sections = next;
          attach(sections);
        }
        if (sections.length === ids.length) {
          mutationObserver.disconnect();
          mutationObserver = null;
        }
      });
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      cancelled = true;
      intersectionObserver?.disconnect();
      mutationObserver?.disconnect();
    };
  }, [idsKey, rootMargin, threshold]);

  return active;
}
