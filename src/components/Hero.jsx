import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { profile } from '../data/profile.js';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const canvasRef = useRef(null);

  // Animated grid + aurora canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let frame;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let t = 0;
    const draw = () => {
      const { width: W, height: H } = canvas;
      ctx.clearRect(0, 0, W, H);

      // Grid
      ctx.strokeStyle = 'rgba(37,99,235,0.06)';
      ctx.lineWidth = 1;
      const gSize = 40;
      for (let x = 0; x < W; x += gSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += gSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Aurora blobs
      const aurora = (x, y, r, a) => {
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `rgba(37,99,235,${a})`);
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      };

      aurora(W * 0.3 + Math.sin(t * 0.3) * 40, H * 0.4 + Math.cos(t * 0.2) * 30, 220, 0.12);
      aurora(W * 0.7 + Math.cos(t * 0.25) * 50, H * 0.6 + Math.sin(t * 0.35) * 40, 180, 0.08);
      aurora(W * 0.5, H * 0.2 + Math.sin(t * 0.4) * 20, 150, 0.07);

      t += 0.008;
      frame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-[60vh] flex items-center overflow-hidden px-6 md:px-10 py-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: 'url(/hero_laptop_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.85,
        }}
        aria-hidden="true"
      />

      {/* Gradient overlay to ensure text readability */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: 'linear-gradient(to right, #030712 20%, rgba(3,7,18,0.7) 60%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        {/* Label */}
        <motion.div {...fadeUp(0)} className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)' }}>
          <span className="text-sm">👋</span>
          <span className="text-sm font-medium text-blue-200">Hello, I'm</span>
        </motion.div>

        {/* Heading */}
        <motion.div {...fadeUp(0.1)} className="space-y-2 mb-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight flex flex-wrap items-center gap-2 md:gap-4">
            <span style={{ color: '#2563eb' }}>Raj</span>
            <span className="text-white">Kumar P</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold" style={{ color: '#3b82f6' }}>
            Web Developer<span className="text-blue-500 animate-pulse"> |</span>
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p {...fadeUp(0.2)} className="text-base lg:text-lg leading-relaxed mb-6 max-w-lg" style={{ color: '#94a3b8' }}>
          I build scalable, performant and beautiful digital experiences with modern web technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            style={{ background: '#2563eb', color: 'white', boxShadow: '0 4px 14px rgba(37,99,235,0.4)' }}
          >
            View Projects
            <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <a
            href={profile.resumeUrl}
            download
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            style={{ background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            <FiDownload className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 flex items-center gap-3"
          style={{ color: '#475569' }}
        >
          <div
            className="w-6 h-10 rounded-full border flex items-start justify-center p-1.5"
            style={{ borderColor: 'rgba(37,99,235,0.3)' }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#2563eb' }}
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <span className="text-xs font-mono tracking-widest uppercase">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
