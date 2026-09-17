import { useCallback, useRef } from "react";
import { cn } from "../../lib/utils.js";

const glowColorMap = {
  terracota: { base: 18, spread: 30 },
  azul: { base: 222, spread: 30 },
  bosque: { base: 138, spread: 30 },
  tinta: { base: 30, spread: 20 },
  solar: { base: 35, spread: 25 },
  selva: { base: 110, spread: 35 },
  aurora: { base: 230, spread: 60 },
  atardecer: { base: 350, spread: 40 },
  oceano: { base: 200, spread: 40 },
  galaxia: { base: 275, spread: 35 },
};

export default function GlowCard({
  children,
  className = "",
  glowColor = "terracota",
}) {
  const cardRef = useRef(null);
  const rafRef = useRef(null);
  const pendingRef = useRef(null);

  const apply = useCallback(() => {
    rafRef.current = null;
    const e = pendingRef.current;
    if (!e || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xp = rect.width ? x / rect.width : 0;
    const yp = rect.height ? y / rect.height : 0;
    cardRef.current.style.setProperty("--x", x.toFixed(2));
    cardRef.current.style.setProperty("--xp", xp.toFixed(2));
    cardRef.current.style.setProperty("--y", y.toFixed(2));
    cardRef.current.style.setProperty("--yp", yp.toFixed(2));
  }, []);

  const onPointerMove = useCallback(
    (e) => {
      /*
       * Mouse only. This effect is a hover spotlight — it has no meaning on
       * touch, where there is no cursor to follow. Tracking touch pointers
       * also forced `touch-action: none` on the card to keep the browser from
       * stealing the gesture, and since the cards cover more than the full
       * height of the Projects section, that turned the section into a scroll
       * trap: a thumb drag starting on a card did not scroll the page.
       */
      if (e.pointerType !== "mouse") return;
      pendingRef.current = e;
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(apply);
      }
    },
    [apply],
  );

  const { base, spread } = glowColorMap[glowColor] || glowColorMap.terracota;

  const inlineStyles = {
    "--base": base,
    "--spread": spread,
    "--radius": "18",
    "--border": "2",
    // Mode tokens (index.css): identical to the old values in dark, a lifted
    // warm surface in light instead of a grey wash with a black shadow.
    "--backdrop": "var(--card-bg)",
    "--backup-border": "var(--card-border)",
    "--size": "220",
    "--outer": "1",
    "--border-size": "calc(var(--border, 2) * 1px)",
    "--spotlight-size": "calc(var(--size, 200) * 1px)",
    "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
    backgroundImage: `radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--glow-lightness, 70) * 1%) / var(--glow-spot-opacity, 0.08)), transparent
    )`,
    backgroundColor: "var(--backdrop, transparent)",
    backgroundSize:
      "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
    backgroundPosition: "50% 50%",
    border: "var(--border-size) solid var(--backup-border)",
    position: "relative",
  };

  return (
    <div
      ref={cardRef}
      data-glow
      onPointerMove={onPointerMove}
      style={inlineStyles}
      className={cn(
        "edge-glow relative rounded-[18px] shadow-[var(--card-shadow)]",
        className,
      )}
    >
      <div data-glow></div>
      {children}
    </div>
  );
}
