import { motion } from 'framer-motion';
import { 
  HiOutlineUser, 
  HiOutlineAcademicCap, 
  HiOutlineBriefcase, 
  HiOutlineCode,
  HiOutlineClock
} from 'react-icons/hi';
import { FiBox, FiUsers, FiTarget, FiSmile } from 'react-icons/fi';
import { profile } from '../data/profile.js';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const ABOUT_CARDS = [
  {
    icon: HiOutlineUser,
    title: 'Who I Am',
    text: 'Passionate developer who loves building real-world solutions.'
  },
  {
    icon: HiOutlineAcademicCap,
    title: 'Education',
    text: 'BE CSE Final Year at Mahendra Engineering College.'
  },
  {
    icon: HiOutlineBriefcase,
    title: 'Experience',
    text: '10 Months of hands-on experience in web development.'
  },
  {
    icon: FiTarget,
    title: 'Career Goal',
    text: 'To build impactful products and grow as a full stack expert.'
  },
  {
    icon: FiSmile,
    title: 'Fun Fact',
    text: 'I love bike rides, music & exploring new technologies.'
  }
];

const STATS = [
  { icon: FiBox, value: '15+', label: 'Projects Completed' },
  { icon: FiUsers, value: '10+', label: 'Months  Experience' },
  { icon: HiOutlineCode, value: '10+', label: 'Technologies' },
  { icon: HiOutlineClock, value: '1000+', label: 'Hours Coding' }
];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-8 py-10 space-y-8 border-b border-blue-900/40">
      {/* Header */}
      <motion.div {...fadeUp(0)} className="flex items-center gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">About Me</h2>
      </motion.div>

      {/* 5-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {ABOUT_CARDS.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div 
              key={card.title}
              {...fadeUp(0.1 + idx * 0.05)}
              className="flex flex-col p-5 rounded-2xl transition-all duration-300 group"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(37,99,235,0.4)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(37,99,235,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Icon className="w-6 h-6 text-blue-400 mb-4 transition-transform group-hover:scale-110" />
              <h3 className="font-semibold text-white text-[15px] mb-2">{card.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-2)' }}>
                {card.text}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Stats Bar */}
      <motion.div 
        {...fadeUp(0.35)}
        className="flex flex-col md:flex-row items-center justify-between p-5 rounded-2xl gap-6"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
        }}
      >
        {STATS.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="flex items-center gap-3 w-full justify-center md:justify-start">
              <Icon className="w-6 h-6" style={{ color: '#60a5fa' }} />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-none">{stat.value}</span>
                <span className="text-xs font-medium" style={{ color: 'var(--text-3)' }}>{stat.label}</span>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
