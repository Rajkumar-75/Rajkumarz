import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress from 0 → 100 over 1.4s
    let start = null;
    const duration = 1400;
    const raf = requestAnimationFrame(function step(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.round(pct));
      if (pct < 100) {
        requestAnimationFrame(step);
      } else {
        setTimeout(() => setVisible(false), 300);
      }
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ background: '#030712' }}
        >
          {/* Ambient blue glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,99,235,0.12) 0%, transparent 70%)',
            }}
          />

          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-10"
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center relative"
              style={{
                background: 'rgba(11,17,32,0.95)',
                border: '1px solid rgba(37,99,235,0.4)',
                boxShadow: '0 0 30px rgba(37,99,235,0.2), 0 0 0 1px rgba(37,99,235,0.1)',
              }}
            >
              <span
                className="text-3xl font-black tracking-tighter"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #2563eb)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                RK
              </span>
              {/* Animated corner accent */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(37,99,235,0.2) 0%, transparent 40%)',
                }}
              />
            </div>

            {/* Rotating ring */}
            <motion.div
              className="absolute -inset-3 rounded-3xl"
              style={{
                border: '1px solid rgba(37,99,235,0.2)',
                borderTopColor: 'rgba(37,99,235,0.7)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-2xl font-black text-white tracking-tight">
              Raj<span style={{ color: '#2563eb' }}>.</span>Kumar
            </h1>
            <p className="text-xs font-mono mt-1" style={{ color: '#334155' }}>
              Full Stack Web Developer
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-48 space-y-2"
          >
            <div
              className="h-0.5 rounded-full overflow-hidden"
              style={{ background: 'rgba(37,99,235,0.15)' }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #1d4ed8, #3b82f6)',
                  boxShadow: '0 0 8px rgba(37,99,235,0.5)',
                }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p
              className="text-right text-xs font-mono"
              style={{ color: '#334155' }}
            >
              {progress}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
