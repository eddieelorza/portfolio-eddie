import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'motion/react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils.js';

export default function VerticalCarousel({
  items,
  renderItem,
  className,
  slideHeight = 'auto',
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: 'y',
    loop: false,
    align: 'start',
    skipSnaps: false,
  });
  const [selected, setSelected] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={cn('relative grid gap-6 md:grid-cols-[64px_1fr]', className)}>
      <div className="hidden flex-col items-center gap-3 md:flex">
        <button
          aria-label="Previous"
          disabled={!canPrev}
          onClick={() => emblaApi?.scrollPrev()}
          className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-white/30 hover:text-white disabled:opacity-30"
        >
          <ChevronUp className="h-4 w-4" />
        </button>

        <div className="flex flex-1 flex-col items-center gap-2 py-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
              className="group relative h-10 w-1 overflow-hidden rounded-full bg-white/10"
            >
              {selected === i && (
                <motion.span
                  layoutId="vcarousel-indicator"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'linear-gradient(to bottom, rgb(var(--accent)), rgb(var(--accent-glow)))',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <button
          aria-label="Next"
          disabled={!canNext}
          onClick={() => emblaApi?.scrollNext()}
          className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-white/30 hover:text-white disabled:opacity-30"
        >
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      <div
        className="overflow-hidden rounded-3xl"
        ref={emblaRef}
        style={{ height: slideHeight }}
      >
        <div className="flex h-full flex-col">
          {items.map((item, i) => (
            <div key={i} className="min-h-0 shrink-0 grow-0 basis-full pb-4">
              {renderItem(item, i, selected === i)}
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-full flex items-center justify-center gap-3 md:hidden">
        <button
          disabled={!canPrev}
          onClick={() => emblaApi?.scrollPrev()}
          className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 disabled:opacity-30"
        >
          <ChevronUp className="h-4 w-4" />
        </button>
        <span className="text-xs text-white/50">
          {selected + 1} / {items.length}
        </span>
        <button
          disabled={!canNext}
          onClick={() => emblaApi?.scrollNext()}
          className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 disabled:opacity-30"
        >
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
