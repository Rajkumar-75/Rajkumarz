import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../data/skills.js';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const activeCategory = skillCategories.find((c) => c.id === active);

  return (
    <section id="skills" className="px-6 md:px-8 py-10 space-y-10 border-b border-blue-900/40">
      {/* Header */}
      <motion.div {...fadeUp(0)} className="space-y-3">
        <span className="section-label">My Expertise</span>
        <h2 className="text-5xl font-black text-white">Tech Stack</h2>
        <p className="text-base max-w-md" style={{ color: 'var(--text-2)' }}>
          Technologies I use to bring ideas to life — from pixel-perfect UIs to scalable backends.
        </p>
      </motion.div>

      {/* Category Tabs */}
      <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-2">
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className="relative px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
            style={{
              color: active === cat.id ? '#fff' : '#64748b',
              background: active === cat.id ? '#2563eb' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${active === cat.id ? 'transparent' : 'rgba(255,255,255,0.08)'}`,
              boxShadow: active === cat.id ? '0 0 20px rgba(37,99,235,0.35)' : 'none',
            }}
          >
            {active === cat.id && (
              <motion.div
                layoutId="active-skill-tab"
                className="absolute inset-0 rounded-xl"
                style={{ background: '#2563eb', zIndex: -1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {activeCategory.skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function SkillCard({ skill, index }) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative flex flex-col items-center gap-4 p-6 rounded-2xl cursor-default transition-all duration-300"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(37,99,235,0.4)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.4), 0 0 20px rgba(37,99,235,0.15)';
        e.currentTarget.style.background = 'rgba(15,22,42,0.95)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(37,99,235,0.12)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.background = 'rgba(11,17,32,0.9)';
      }}
    >
      {/* Hover top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.5), transparent)' }}
      />

      {/* Icon wrapper */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300"
        style={{
          background: 'rgba(37,99,235,0.08)',
          border: '1px solid var(--border)',
        }}
      >
        <Icon
          className="w-7 h-7 transition-all duration-300 group-hover:scale-110"
          style={{ color: skill.color }}
        />
      </div>

      {/* Name */}
      <span className="text-sm font-semibold text-center text-white group-hover:text-blue-300 transition-colors duration-300">
        {skill.name}
      </span>
    </motion.div>
  );
}
