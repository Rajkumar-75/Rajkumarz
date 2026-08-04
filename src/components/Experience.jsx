import { motion } from 'framer-motion';
import { HiOutlineBriefcase, HiOutlineLocationMarker, HiOutlineCalendar } from 'react-icons/hi';
import { experience } from '../data/experience.js';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-8 py-10 space-y-10 border-b border-blue-900/40">
      <motion.div {...fadeUp(0)} className="space-y-3">
        <span className="section-label">Career</span>
        <h2 className="text-4xl md:text-5xl font-black text-white">Experience</h2>
      </motion.div>

      <div className="max-w-2xl space-y-0">
        {experience.map((item, i) => (
          <motion.div
            key={item.id}
            {...fadeUp(0.1 + i * 0.1)}
            className="relative pl-10"
          >
            {/* Timeline line */}
            {i < experience.length - 1 && (
              <div
                className="absolute left-[9px] top-10 bottom-0 w-px"
                style={{ background: 'linear-gradient(to bottom, rgba(37,99,235,0.5), transparent)' }}
              />
            )}

            {/* Dot */}
            <div
              className="absolute left-0 top-1.5 w-5 h-5 rounded-full flex items-center justify-center"
              style={{
                background: 'rgba(37,99,235,0.15)',
                border: '2px solid rgba(37,99,235,0.6)',
                boxShadow: '0 0 12px rgba(37,99,235,0.4)',
              }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: '#2563eb' }} />
            </div>

            {/* Card */}
            <div
              className="mb-10 p-6 rounded-2xl space-y-4"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
              }}
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  <p className="text-base font-semibold text-blue-400 mt-0.5">{item.company}</p>
                </div>
                <span
                  className="text-xs font-mono px-3 py-1.5 rounded-full shrink-0"
                  style={{
                    color: '#60a5fa',
                    background: 'rgba(37,99,235,0.1)',
                    border: '1px solid rgba(37,99,235,0.2)',
                  }}
                >
                  {item.type}
                </span>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'var(--text-3)' }}>
                <span className="flex items-center gap-1.5">
                  <HiOutlineCalendar className="w-4 h-4" />
                  {item.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <HiOutlineLocationMarker className="w-4 h-4" />
                  {item.location}
                </span>
              </div>

              {/* Points */}
              <ul className="space-y-2.5">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm" style={{ color: 'var(--text-2)' }}>
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ background: '#2563eb', boxShadow: '0 0 6px rgba(37,99,235,0.6)' }}
                    />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-lg"
                    style={{
                      color: 'var(--text-2)',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
