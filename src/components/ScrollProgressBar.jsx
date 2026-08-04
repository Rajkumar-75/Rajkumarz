import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });

  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: 'linear-gradient(90deg, #1d4ed8, #2563eb, #3b82f6)',
        boxShadow: '0 0 8px rgba(37,99,235,0.6)',
        transformOrigin: 'left',
        zIndex: 100,
      }}
    />
  );
}
