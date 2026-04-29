import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';

export function PrimaryCTA({ href, children }) {
  return (
    <motion.a
      href={href}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.96 }}
      animate="rest"
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white"
      style={{
        background:
          'linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-glow)))',
        boxShadow:
          '0 0 0 1px rgb(var(--accent) / 0.4), 0 18px 50px -18px rgb(var(--accent) / 0.7)',
      }}
    >
      <motion.span
        variants={{
          rest: { x: '-120%', opacity: 0 },
          hover: { x: '120%', opacity: 1 },
        }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
      />

      <motion.span
        aria-hidden
        variants={{
          rest: { scale: 1, opacity: 0 },
          hover: { scale: 1.6, opacity: 0.6 },
        }}
        transition={{ duration: 0.6 }}
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{ boxShadow: '0 0 60px 8px rgb(var(--accent) / 0.6) inset' }}
      />

      <motion.span
        variants={{
          rest: { letterSpacing: '0em' },
          hover: { letterSpacing: '0.04em' },
        }}
        transition={{ duration: 0.35 }}
        className="relative"
      >
        {children}
      </motion.span>

      <motion.span
        variants={{
          rest: { x: 0, rotate: 0 },
          hover: { x: 4, rotate: -8 },
        }}
        transition={{ type: 'spring', stiffness: 320, damping: 18 }}
        className="relative grid h-6 w-6 place-items-center rounded-full bg-white/20"
      >
        <ArrowRight className="h-3.5 w-3.5" />
      </motion.span>
    </motion.a>
  );
}

export function GhostCTA({ href, children }) {
  return (
    <motion.a
      href={href}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.96 }}
      animate="rest"
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/85"
    >
      <motion.span
        aria-hidden
        variants={{
          rest: { scale: 0, opacity: 0 },
          hover: { scale: 1, opacity: 1 },
        }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle at center, rgb(var(--accent) / 0.35), transparent 70%)',
          transformOrigin: 'center',
        }}
      />

      <motion.span
        aria-hidden
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        className="pointer-events-none absolute -inset-px rounded-full"
        style={{
          background:
            'conic-gradient(from 0deg, rgb(var(--accent) / 0.6), rgb(var(--accent-glow) / 0.6), transparent 60%, rgb(var(--accent) / 0.6))',
          WebkitMask:
            'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: 1,
          animation: 'edge-spin 3.5s linear infinite',
        }}
      />

      <motion.span
        variants={{
          rest: { rotate: 0, scale: 1 },
          hover: { rotate: -12, scale: 1.12 },
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 16 }}
        className="relative"
      >
        <Mail className="h-4 w-4" />
      </motion.span>

      <motion.span
        variants={{
          rest: { y: 0 },
          hover: { y: -1 },
        }}
        transition={{ type: 'spring', stiffness: 320, damping: 18 }}
        className="relative"
      >
        {children}
      </motion.span>
    </motion.a>
  );
}
