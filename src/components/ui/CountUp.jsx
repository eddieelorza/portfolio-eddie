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
  const inView = useInView(ref, { once: true, margin: '-40px' });

  // For tiny integer targets (0, 1) the count-up has no visible motion — it
  // would either jump-cut from "0" to "1" mid-animation or sit at "0" if the
  // observer is slow on mobile. Show the final value statically and let the
  // wrapper's entrance animation provide the motion feel.
  const skipCount = target <= 1 && decimals === 0;
  const count = useMotionValue(skipCount ? target : 0);
  const display = useTransform(count, (latest) =>
    decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString()
  );

  useEffect(() => {
    if (skipCount) return;
    if (!inView) return;
    const controls = animate(count, target, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [inView, target, duration, delay, count, skipCount]);

  if (skipCount) {
    return (
      <motion.span
        ref={ref}
        initial={{ opacity: 0, scale: 0.7, y: 8 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : undefined}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={className}
        style={{ display: 'inline-block' }}
      >
        {prefix}
        {target}
        {suffix}
      </motion.span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
