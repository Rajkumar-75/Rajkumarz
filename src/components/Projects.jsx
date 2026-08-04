import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import { HiOutlineTag } from 'react-icons/hi';
import { projects } from '../data/projects.js';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="px-6 md:px-8 py-10 space-y-10 border-b border-blue-900/40">
      <motion.div {...fadeUp(0)} className="space-y-3">
        <span className="section-label">Portfolio</span>
        <h2 className="text-4xl md:text-5xl font-black text-white">Featured Projects</h2>
        <p className="text-base max-w-md" style={{ color: 'var(--text-2)' }}>
          A selection of full-stack, AI-powered, and IoT projects built from concept to deployment.
        </p>
      </motion.div>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} onOpen={() => setSelected(project)} />
        ))}
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.div
      {...fadeUp(0.08 * index)}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      onClick={onOpen}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(37,99,235,0.4)';
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(37,99,235,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(37,99,235,0.15)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.6), transparent)' }}
      />

      <div className="flex gap-6 p-7">
        {/* Image / Mockup */}
        <div
          className="shrink-0 w-40 h-28 rounded-xl overflow-hidden"
          style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid var(--border)' }}
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="112"><rect width="160" height="112" fill="%230b1120"/><text x="50%" y="54%" font-size="24" fill="%232563EB" text-anchor="middle" font-family="sans-serif">💻</text></svg>`;
            }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span
                className="text-xs font-mono font-semibold"
                style={{ color: '#3b82f6' }}
              >
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white mt-1 group-hover:text-blue-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-3)' }}>{project.tagline}</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed line-clamp-2" style={{ color: 'var(--text-2)' }}>
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 5).map((tech) => (
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
            {project.stack.length > 5 && (
              <span className="text-xs px-2.5 py-1 rounded-lg" style={{ color: '#475569', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                +{project.stack.length - 5}
              </span>
            )}
          </div>

          <div className="flex items-center gap-4 pt-1">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{ color: 'var(--text-3)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b'; }}
            >
              <FiGithub className="w-4 h-4" /> Code
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{ color: '#3b82f6' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#60a5fa'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#3b82f6'; }}
              >
                <FiExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(3,7,18,0.85)', backdropFilter: 'blur(12px)' }} />
      <motion.div
        initial={{ scale: 0.92, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.92, y: 20, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-lg rounded-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--panel-bg)',
          border: '1px solid rgba(37,99,235,0.3)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.7), 0 0 40px rgba(37,99,235,0.15)',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
          style={{
            color: 'var(--text-3)',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.4)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
        >
          <FiX className="w-4 h-4" />
        </button>

        <div className="aspect-[16/9] w-full overflow-hidden" style={{ background: 'rgba(37,99,235,0.05)' }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><rect width="640" height="360" fill="%230b1120"/><text x="50%" y="54%" font-size="48" fill="%232563EB" text-anchor="middle">💻</text></svg>`;
            }}
          />
        </div>

        <div className="p-7 space-y-4">
          <div>
            <span className="text-xs font-mono font-semibold text-blue-400">{project.category}</span>
            <h3 className="text-2xl font-black text-white mt-1">{project.title}</h3>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="text-xs px-2.5 py-1 rounded-lg" style={{ color: '#60a5fa', background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)' }}>
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3 pt-2">
            <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary flex-1 justify-center">
              <FiGithub className="w-4 h-4" /> View Code
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary flex-1 justify-center">
                <FiExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
