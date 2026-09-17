import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Palette, X } from "lucide-react";
import { cn } from "../../lib/utils.js";

export default function FlowerMenu({
  items,
  togglerSize = 36,
  animationDuration = 450,
  ariaLabel = "Flower menu",
  openLabel = "Open menu",
  closeLabel = "Close menu",
  onOpenChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  // Shift applied to the whole ring so no petal lands off-screen.
  const [shift, setShift] = useState({ x: 0, y: 0 });

  // Escape closes the petals from anywhere inside the menu.
  const onKeyDown = (event) => {
    if (event.key === "Escape" && isOpen) {
      event.stopPropagation();
      setIsOpen(false);
    }
  };

  useEffect(() => {
    onOpenChange?.(isOpen);
  }, [isOpen, onOpenChange]);
  const itemCount = items.length;
  const itemSize = togglerSize * 1.1;
  // Petals sit on a circle; with more options the circumference has to fit
  // them all without touching, so the radius grows past the base distance.
  const radius = Math.max(
    togglerSize + 18,
    (itemCount * (itemSize + 8)) / (2 * Math.PI),
  );

  /*
   * The dock lives in a corner (and can be dragged into any other), so a full
   * ring around the toggler can spill past the viewport — with eight options
   * the bottom petal sat below the fold. On open, nudge the ring's centre just
   * enough to keep every petal inside, with an 8px margin. Measured
   * synchronously so the first frame of the fan-out is already in place.
   */
  useLayoutEffect(() => {
    if (!isOpen || !navRef.current) {
      setShift({ x: 0, y: 0 });
      return;
    }
    const rect = navRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const extent = radius + itemSize / 2 + 8;
    const fit = (c, max) =>
      c + extent > max ? max - extent - c : c - extent < 0 ? extent - c : 0;
    setShift({
      x: fit(cx, window.innerWidth),
      y: fit(cy, window.innerHeight),
    });
  }, [isOpen, radius, itemSize]);

  return (
    <nav
      ref={navRef}
      className="relative"
      style={{
        width: togglerSize,
        height: togglerSize,
        zIndex: isOpen ? 60 : "auto",
      }}
      aria-label={ariaLabel}
      onKeyDown={onKeyDown}
    >
      {/*
       * Closed petals are collapsed onto the toggler at opacity 0, but they
       * were still in the Tab order — four invisible stops. `inert` removes
       * them from focus and the accessibility tree until the menu opens.
       */}
      <ul
        inert={isOpen ? undefined : ""}
        className="absolute left-1/2 top-1/2 m-0 list-none p-0 transition-transform"
        style={{
          width: 0,
          height: 0,
          transform: `translate(${shift.x}px, ${shift.y}px)`,
          transitionDuration: `${animationDuration}ms`,
        }}
      >
        {items.map((item, index) => {
          const angle = -90 + (360 / itemCount) * index;
          const transform = isOpen
            ? `translate(-50%, -50%) rotate(${angle}deg) translateX(${radius}px) rotate(${-angle}deg)`
            : `translate(-50%, -50%) rotate(${angle}deg) translateX(0px) rotate(${-angle}deg)`;
          return (
            <li
              key={index}
              className="absolute left-0 top-0 transition-all"
              style={{
                width: itemSize,
                height: itemSize,
                transform,
                transitionDuration: `${animationDuration}ms`,
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                opacity: isOpen ? 1 : 0,
                pointerEvents: isOpen ? "auto" : "none",
              }}
            >
              {item.render({ close: () => setIsOpen(false) })}
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-label={isOpen ? closeLabel : openLabel}
        className={cn(
          "relative grid place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/85 transition hover:border-white/30 hover:bg-white/[0.1]",
          isOpen && "border-white/30 bg-white/[0.12] text-white",
        )}
        style={{
          width: togglerSize,
          height: togglerSize,
          transitionDuration: `${animationDuration}ms`,
        }}
      >
        <span
          className="grid place-items-center transition-transform"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transitionDuration: `${animationDuration}ms`,
          }}
        >
          {isOpen ? (
            <X aria-hidden className="h-4 w-4" />
          ) : (
            <Palette aria-hidden className="h-4 w-4" />
          )}
        </span>
      </button>
    </nav>
  );
}
