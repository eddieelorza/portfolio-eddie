import { useCallback, useRef } from 'react';

/** Pixel movement before a pointer interaction is treated as a drag, not a click. */
export const DRAG_THRESHOLD = 5;

/**
 * Returns pointer handlers that distinguish a true click from a drag.
 * Designed to be spread on a Framer Motion `<motion.div drag>` — the
 * drag mechanics stay with Framer; this hook just gates the `onClick`
 * callback so it only fires when the pointer hardly moved.
 *
 * @param {object}   [options]
 * @param {function} [options.onClick]  Fires when pointer up with movement < DRAG_THRESHOLD.
 * @param {function} [options.onDragStart]  Fires once movement exceeds DRAG_THRESHOLD.
 * @returns {{ onPointerDown, onClick }}
 */
export default function useDraggable({ onClick, onDragStart } = {}) {
  const startRef = useRef(null);
  const draggedRef = useRef(false);

  const handlePointerDown = useCallback((event) => {
    startRef.current = { x: event.clientX, y: event.clientY };
    draggedRef.current = false;
  }, []);

  const handlePointerMove = useCallback(
    (event) => {
      if (!startRef.current || draggedRef.current) return;
      const dx = event.clientX - startRef.current.x;
      const dy = event.clientY - startRef.current.y;
      if (Math.hypot(dx, dy) > DRAG_THRESHOLD) {
        draggedRef.current = true;
        onDragStart?.(event);
      }
    },
    [onDragStart]
  );

  const handleClick = useCallback(
    (event) => {
      const start = startRef.current;
      startRef.current = null;
      if (draggedRef.current) {
        draggedRef.current = false;
        return;
      }
      if (start) {
        const dx = event.clientX - start.x;
        const dy = event.clientY - start.y;
        if (Math.hypot(dx, dy) > DRAG_THRESHOLD) return;
      }
      onClick?.(event);
    },
    [onClick]
  );

  return {
    onPointerDown: handlePointerDown,
    onPointerMove: handlePointerMove,
    onClick: handleClick,
  };
}
