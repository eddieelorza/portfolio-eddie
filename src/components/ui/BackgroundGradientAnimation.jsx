import { cn } from "../../lib/utils.js";

export default function BackgroundGradientAnimation({
  // Accent-driven: these used to be hardcoded violet/blue/lavender/pink/cyan,
  // so the contact panel stayed "AI purple" whatever accent was chosen.
  gradientBackgroundStart = "rgb(var(--ink-950))",
  gradientBackgroundEnd = "rgb(var(--ink-900))",
  firstColor = "var(--accent)",
  secondColor = "var(--accent-glow)",
  thirdColor = "var(--accent-soft)",
  fourthColor = "var(--accent)",
  fifthColor = "var(--accent-glow)",
  pointerColor = "var(--accent-soft)",
  size = "80%",
  blendingValue = "screen",
  className,
  interactive = false,
  containerClassName,
  children,
}) {
  return (
    <div
      data-effect="dark-only"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]",
        containerClassName,
      )}
      style={{
        background: `linear-gradient(140deg, ${gradientBackgroundStart}, ${gradientBackgroundEnd})`,
        "--first-color": firstColor,
        "--second-color": secondColor,
        "--third-color": thirdColor,
        "--fourth-color": fourthColor,
        "--fifth-color": fifthColor,
        "--pointer-color": pointerColor,
        "--size": size,
        "--blending-value": blendingValue,
      }}
    >
      <div
        className={cn(
          "gradient-blobs absolute inset-0 h-full w-full",
          className,
        )}
        style={{
          filter: "blur(50px)",
          transform: "translateZ(0)",
        }}
      >
        <div
          className="absolute h-[var(--size)] w-[var(--size)] animate-blob-first opacity-100 [mix-blend-mode:var(--blending-value)] [transform-origin:center_center]"
          style={{
            top: "calc(50% - var(--size) / 2)",
            left: "calc(50% - var(--size) / 2)",
            background: `radial-gradient(circle at center, rgb(var(--first-color) / 0.85) 0%, rgb(var(--first-color) / 0) 50%)`,
          }}
        />
        <div
          className="absolute h-[var(--size)] w-[var(--size)] animate-blob-second opacity-100 [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-400px)]"
          style={{
            top: "calc(50% - var(--size) / 2)",
            left: "calc(50% - var(--size) / 2)",
            background: `radial-gradient(circle at center, rgb(var(--second-color) / 0.85) 0%, rgb(var(--second-color) / 0) 50%)`,
          }}
        />
        <div
          className="absolute h-[var(--size)] w-[var(--size)] animate-blob-third opacity-100 [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%+400px)]"
          style={{
            top: "calc(50% - var(--size) / 2 + 200px)",
            left: "calc(50% - var(--size) / 2 - 500px)",
            background: `radial-gradient(circle at center, rgb(var(--third-color) / 0.85) 0%, rgb(var(--third-color) / 0) 50%)`,
          }}
        />
        <div
          className="absolute h-[var(--size)] w-[var(--size)] animate-blob-fourth opacity-70 [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-200px)]"
          style={{
            top: "calc(50% - var(--size) / 2)",
            left: "calc(50% - var(--size) / 2)",
            background: `radial-gradient(circle at center, rgb(var(--fourth-color) / 0.85) 0%, rgb(var(--fourth-color) / 0) 50%)`,
          }}
        />
        <div
          className="absolute h-[calc(var(--size)*1.4)] w-[calc(var(--size)*1.4)] animate-blob-fifth opacity-100 [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-800px)_calc(50%+200px)]"
          style={{
            top: "calc(50% - var(--size))",
            left: "calc(50% - var(--size))",
            background: `radial-gradient(circle at center, rgb(var(--fifth-color) / 0.85) 0%, rgb(var(--fifth-color) / 0) 50%)`,
          }}
        />
      </div>
      {children}
    </div>
  );
}
