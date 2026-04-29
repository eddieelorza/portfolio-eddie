import { useState } from 'react';
import { Palette, X } from 'lucide-react';
import { cn } from '../../lib/utils.js';

export default function FlowerMenu({
  items,
  togglerSize = 36,
  animationDuration = 450,
  ariaLabel = 'Flower menu',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const itemCount = items.length;
  const itemSize = togglerSize * 1.1;
  const radius = togglerSize + 18;

  return (
    <nav
      className="relative"
      style={{
        width: togglerSize,
        height: togglerSize,
        zIndex: isOpen ? 60 : 'auto',
      }}
      aria-label={ariaLabel}
    >
      <ul
        className="absolute left-1/2 top-1/2 m-0 list-none p-0"
        style={{ width: 0, height: 0 }}
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
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                opacity: isOpen ? 1 : 0,
                pointerEvents: isOpen ? 'auto' : 'none',
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
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className={cn(
          'relative grid place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/85 transition hover:border-white/30 hover:bg-white/[0.1]',
          isOpen && 'border-white/30 bg-white/[0.12] text-white'
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
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transitionDuration: `${animationDuration}ms`,
          }}
        >
          {isOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Palette className="h-4 w-4" />
          )}
        </span>
      </button>
    </nav>
  );
}
