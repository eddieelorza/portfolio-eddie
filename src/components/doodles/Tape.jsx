import { cn } from "../../lib/utils.js";

/**
 * A strip of masking tape holding a sheet to the page. Torn ends come from the
 * clip-path; the tint follows the accent. The parent must be `relative` and
 * must not clip overflow (the tape sits half above its top edge).
 */
export default function Tape({ tilt = -3, className }) {
  return (
    <span
      aria-hidden
      className={cn("pointer-events-none absolute -top-3 left-1/2 h-6 w-20 bg-accent-glow/40", className)}
      style={{
        transform: `translateX(-50%) rotate(${tilt}deg)`,
        clipPath:
          "polygon(3% 0, 97% 4%, 100% 30%, 96% 55%, 100% 80%, 97% 100%, 2% 96%, 0 70%, 4% 45%, 0 18%)",
      }}
    />
  );
}
