import { useEffect, useRef } from 'react';
import { animate, useInView, useMotionValue, useTransform, motion } from 'motion/react';

function parseValue(value) {
  const str = String(value).trim();
  const match = str.match(/^([^0-9-]*?)(-?[\d.,]+)(.*)$/);
  if (!match) return { prefix: '', target: 0, suffix: str, decimals: 0 };
  const prefix = match[1] ?? '';
  const numericRaw = match[2].replace(/,/g, '');
  const target = parseFloat(numericRaw);
  const decimals = numericRaw.includes('.') ? numericRaw.split('.')[1].length : 0;
  const suffix = match[3] ?? '';
  return { prefix, target: isNaN(target) ? 0 : target, suffix, decimals };
}

export default function CountUp({
  value,
  duration = 1.8,
  delay = 0,
  className,
}) {
  const { prefix, target, suffix, decimals } = parseValue(value);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const count = useMotionValue(0);
  const display = useTransform(count, (latest) =>
    decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString()
  );

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [inView, target, duration, delay, count]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
