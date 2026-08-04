import { motion } from 'framer-motion';
import { HiOutlineExternalLink, HiOutlineAcademicCap } from 'react-icons/hi';
import { certifications } from '../data/certifications.js';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Certifications() {
  return (
    <section id="certificates" className="px-6 md:px-8 py-10 space-y-10 border-b border-blue-900/40">
      <motion.div {...fadeUp(0)} className="space-y-3">
        <span className="section-label">Credentials</span>
        <h2 className="text-4xl md:text-5xl font-black text-white">Certificates</h2>
      </motion.div>

      <div className="grid gap-4">
        {certifications.map((cert, i) => (
          <motion.a
            key={cert.id}
            {...fadeUp(0.08 * i)}
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 4 }}
            className="group relative flex items-center gap-6 p-6 rounded-2xl transition-all duration-300 overflow-hidden"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(37,99,235,0.4)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.4), 0 0 20px rgba(37,99,235,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(37,99,235,0.12)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Hover accent */}
            <div
              className="absolute top-0 left-0 bottom-0 w-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(37,99,235,0.7), transparent)' }}
            />

            {/* Icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
              style={{
                background: 'rgba(37,99,235,0.1)',
                border: '1px solid rgba(37,99,235,0.2)',
              }}
            >
              <HiOutlineAcademicCap className="w-6 h-6 text-blue-400" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-white group-hover:text-blue-300 transition-colors truncate">
                {cert.title}
              </h3>
              <p className="text-sm mt-0.5" style={{ color: 'var(--text-3)' }}>
                {cert.organization} &middot; {cert.date}
              </p>
            </div>

            {/* Arrow */}
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
              style={{
                color: '#3b82f6',
                background: 'rgba(37,99,235,0.1)',
                border: '1px solid rgba(37,99,235,0.2)',
              }}
            >
              <HiOutlineExternalLink className="w-4 h-4" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
