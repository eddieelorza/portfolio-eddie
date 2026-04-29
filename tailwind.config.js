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
      colors: {
        ink: {
          950: '#06060a',
          900: '#0a0a10',
          800: '#101017',
          700: '#16161f',
          600: '#1f1f2b',
          500: '#2a2a38',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          soft: 'rgb(var(--accent-soft) / <alpha-value>)',
          glow: 'rgb(var(--accent-glow) / <alpha-value>)',
        },
      },
      backgroundImage: {
        'radial-fade':
          'radial-gradient(ellipse at top, rgb(var(--accent) / 0.18), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgb(var(--accent) / 0.3), 0 10px 60px -20px rgb(var(--accent) / 0.55)',
        soft: '0 1px 0 rgba(255,255,255,0.05) inset, 0 10px 30px -15px rgba(0,0,0,0.6)',
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
