import { useEffect, useRef } from 'react';

export default function MouseGlow() {
  const glowRef = useRef(null);
  const posRef = useRef({ x: -999, y: -999 });
  const rafRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const glow = glowRef.current;
    if (!glow) return;

    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      if (glow) {
        glow.style.left = `${posRef.current.x}px`;
        glow.style.top  = `${posRef.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        width: 500,
        height: 500,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 1,
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)',
        mixBlendMode: 'screen',
        willChange: 'left, top',
        transition: 'left 0.08s linear, top 0.08s linear',
      }}
    />
  );
}
