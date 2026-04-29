import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils.js';

const letterVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.92 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.045,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: (i) => ({
    opacity: 0,
    y: -18,
    scale: 0.92,
    transition: { delay: i * 0.02, duration: 0.3, ease: 'easeInOut' },
  }),
};

export default function TextRotator({
  words,
  interval = 3500,
  className = '',
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % words.length);
    }, interval);
    return () => clearInterval(t);
  }, [words.length, interval]);

  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b));

  const colorFor = (i, total) => {
    const hueStart = (index * 35) % 360;
    const hue = hueStart + (i / total) * 70;
    return `hsl(${hue}, 85%, 65%)`;
  };

  return (
    <span
      className={cn(
        'relative inline-block align-bottom whitespace-nowrap',
        className
      )}
    >
      <span className="invisible" aria-hidden>
        {longest}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="absolute inset-0 flex flex-row items-center justify-start whitespace-nowrap"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {words[index].split('').map((letter, i, arr) => (
            <motion.span
              key={`${index}-${i}`}
              custom={i}
              variants={letterVariants}
              style={{
                color: colorFor(i, arr.length),
                display: 'inline-block',
                textShadow: '0 0 24px rgba(140,120,255,0.18)',
                fontWeight: 'inherit',
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
