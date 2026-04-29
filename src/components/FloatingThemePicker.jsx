import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import ThemePicker from './ThemePicker.jsx';

export default function FloatingThemePicker() {
  const constraintsRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      <div
        ref={constraintsRef}
        className="pointer-events-none fixed inset-0 z-30"
        aria-hidden
      />
      {ready && (
        <motion.div
          drag
          dragMomentum={false}
          dragElastic={0.12}
          dragConstraints={constraintsRef}
          whileDrag={{ scale: 1.06, cursor: 'grabbing' }}
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-24 right-5 z-40 cursor-grab touch-none lg:bottom-8 lg:right-8"
          style={{ touchAction: 'none' }}
        >
          <ThemePicker />
        </motion.div>
      )}
    </>
  );
}
