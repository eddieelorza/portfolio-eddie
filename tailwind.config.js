/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      /**
       * Mode-aware colours. `ink` and `white` resolve through CSS variables
       * that `[data-mode]` in index.css swaps, so the ~260 existing
       * `text-white/70`, `border-white/10`, `bg-ink-950` usages follow the
       * light/dark toggle without being rewritten one by one.
       *
       * Read them by role, not by name:
       *   ink-950 → page canvas     ink-900 → card surface
       *   ink-800 → raised / inset  ink-700…500 → progressively stronger fills
       *   white   → foreground (ink on cream, white on dark)
       *
       * Anything that must stay literally white or black regardless of mode —
       * text sitting on an accent fill — uses `on-accent` instead.
       */
      colors: {
        white: 'rgb(var(--fg) / <alpha-value>)',
        ink: {
          950: 'rgb(var(--ink-950) / <alpha-value>)',
          900: 'rgb(var(--ink-900) / <alpha-value>)',
          800: 'rgb(var(--ink-800) / <alpha-value>)',
          700: 'rgb(var(--ink-700) / <alpha-value>)',
          600: 'rgb(var(--ink-600) / <alpha-value>)',
          500: 'rgb(var(--ink-500) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          soft: 'rgb(var(--accent-soft) / <alpha-value>)',
          glow: 'rgb(var(--accent-glow) / <alpha-value>)',
        },
        'on-accent': 'rgb(var(--on-accent) / <alpha-value>)',
        danger: 'rgb(var(--danger) / <alpha-value>)',
      },
      /**
       * Text only: `text-white/NN` compresses its transparency by
       * --text-alpha-k, so the opacity ladder keeps its contrast on cream.
       *
       * The same alpha loses far more contrast as ink-on-cream than as
       * white-on-black — `/45` measures 4.47:1 on the dark canvas but 2.78:1
       * on cream — so the ladder cannot be shared linearly between modes.
       * Effective alpha is `1 - (1 - a) * k`: identity when k = 1 (dark mode,
       * which renders exactly as before), and with k = 0.58 in light every
       * text alpha from /35 up clears 4.5:1 on the darkest light surface,
       * while staying strictly ordered so the hierarchy survives.
       *
       * Borders and fills keep the linear `colors.white` above on purpose —
       * compressing them would turn `border-white/10` into a 37% line.
       */
      textColor: {
        white: 'rgb(var(--fg) / calc(1 - (1 - <alpha-value>) * var(--text-alpha-k)))',
      },
      backgroundImage: {
        'radial-fade':
          'radial-gradient(ellipse at top, rgb(var(--accent) / 0.18), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgb(var(--accent) / 0.3), 0 10px 60px -20px rgb(var(--accent) / 0.55)',
        soft: '0 1px 0 rgb(var(--fg) / 0.05) inset, 0 10px 30px -15px rgb(var(--shadow) / 0.6)',
      },
      keyframes: {
        'hue-pan': {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '300% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        spin_slow: {
          to: { transform: 'rotate(360deg)' },
        },
        moveHorizontal: {
          '0%': { transform: 'translateX(-50%) translateY(-10%)' },
          '50%': { transform: 'translateX(50%) translateY(10%)' },
          '100%': { transform: 'translateX(-50%) translateY(-10%)' },
        },
        moveInCircle: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        moveVertical: {
          '0%': { transform: 'translateY(-50%)' },
          '50%': { transform: 'translateY(50%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'border-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'hue-pan': 'hue-pan 8s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'spin-slow': 'spin_slow 20s linear infinite',
        'blob-first': 'moveVertical 30s ease infinite',
        'blob-second': 'moveInCircle 20s reverse infinite',
        'blob-third': 'moveInCircle 40s linear infinite',
        'blob-fourth': 'moveHorizontal 40s ease infinite',
        'blob-fifth': 'moveInCircle 20s ease infinite',
        'border-spin': 'border-spin 4s linear infinite',
      },
    },
  },
  plugins: [],
};
