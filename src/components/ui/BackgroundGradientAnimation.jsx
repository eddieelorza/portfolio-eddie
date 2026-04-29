import { cn } from '../../lib/utils.js';

export default function BackgroundGradientAnimation({
  gradientBackgroundStart = 'rgb(8, 8, 18)',
  gradientBackgroundEnd = 'rgb(12, 8, 28)',
  firstColor = '124, 92, 255',
  secondColor = '91, 140, 255',
  thirdColor = '167, 139, 250',
  fourthColor = '236, 72, 153',
  fifthColor = '34, 211, 238',
  pointerColor = '140, 100, 255',
  size = '80%',
  blendingValue = 'screen',
  className,
  interactive = false,
  containerClassName,
  children,
}) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]',
        containerClassName
      )}
      style={{
        background: `linear-gradient(140deg, ${gradientBackgroundStart}, ${gradientBackgroundEnd})`,
        '--first-color': firstColor,
        '--second-color': secondColor,
        '--third-color': thirdColor,
        '--fourth-color': fourthColor,
        '--fifth-color': fifthColor,
        '--pointer-color': pointerColor,
        '--size': size,
        '--blending-value': blendingValue,
      }}
    >
      <div
        className={cn(
          'gradient-blobs absolute inset-0 h-full w-full',
          className
        )}
        style={{
          filter: 'blur(50px)',
          transform: 'translateZ(0)',
        }}
      >
        <div
          className="absolute h-[var(--size)] w-[var(--size)] animate-blob-first opacity-100 [mix-blend-mode:var(--blending-value)] [transform-origin:center_center]"
          style={{
            top: 'calc(50% - var(--size) / 2)',
            left: 'calc(50% - var(--size) / 2)',
            background: `radial-gradient(circle at center, rgba(var(--first-color), 0.85) 0%, rgba(var(--first-color), 0) 50%)`,
          }}
        />
        <div
          className="absolute h-[var(--size)] w-[var(--size)] animate-blob-second opacity-100 [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-400px)]"
          style={{
            top: 'calc(50% - var(--size) / 2)',
            left: 'calc(50% - var(--size) / 2)',
            background: `radial-gradient(circle at center, rgba(var(--second-color), 0.85) 0%, rgba(var(--second-color), 0) 50%)`,
          }}
        />
        <div
          className="absolute h-[var(--size)] w-[var(--size)] animate-blob-third opacity-100 [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%+400px)]"
          style={{
            top: 'calc(50% - var(--size) / 2 + 200px)',
            left: 'calc(50% - var(--size) / 2 - 500px)',
            background: `radial-gradient(circle at center, rgba(var(--third-color), 0.85) 0%, rgba(var(--third-color), 0) 50%)`,
          }}
        />
        <div
          className="absolute h-[var(--size)] w-[var(--size)] animate-blob-fourth opacity-70 [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-200px)]"
          style={{
            top: 'calc(50% - var(--size) / 2)',
            left: 'calc(50% - var(--size) / 2)',
            background: `radial-gradient(circle at center, rgba(var(--fourth-color), 0.85) 0%, rgba(var(--fourth-color), 0) 50%)`,
          }}
        />
        <div
          className="absolute h-[calc(var(--size)*1.4)] w-[calc(var(--size)*1.4)] animate-blob-fifth opacity-100 [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-800px)_calc(50%+200px)]"
          style={{
            top: 'calc(50% - var(--size))',
            left: 'calc(50% - var(--size))',
            background: `radial-gradient(circle at center, rgba(var(--fifth-color), 0.85) 0%, rgba(var(--fifth-color), 0) 50%)`,
          }}
        />
      </div>
      {children}
    </div>
  );
}
