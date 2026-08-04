import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineLightningBolt,
  HiOutlineBriefcase,
  HiOutlineCode,
  HiOutlineAcademicCap,
  HiOutlineMail,
} from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';
import { useTheme } from '../context/ThemeContext.jsx';

const NAV_ITEMS = [
  { id: 'home',         icon: HiOutlineHome },
  { id: 'about',        icon: HiOutlineUser },
  { id: 'skills',       icon: HiOutlineLightningBolt },
  { id: 'experience',   icon: HiOutlineBriefcase },
  { id: 'projects',     icon: HiOutlineCode },
  { id: 'certificates', icon: HiOutlineAcademicCap },
  { id: 'github',       icon: FiGithub },
  { id: 'contact',      icon: HiOutlineMail },
];

export default function RightNav({ activeSection }) {
  const [hovered, setHovered] = useState(null);
  const { theme, toggleTheme } = useTheme();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className="fixed right-8 z-[100]"
      style={{
        top: '50%',
        transform: 'translateY(-50%)',
      }}
    >
      <motion.nav
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        aria-label="Section Navigation"
        className="flex flex-col items-center"
        style={{
          width: '60px',
          height: 'fit-content',
          padding: '16px 0',
          borderRadius: '30px',
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(37, 99, 235, 0.2)',
          boxShadow: '0 0 20px rgba(37, 99, 235, 0.15)',
          transition: 'all 0.3s ease'
        }}
      >
      {/* Theme Toggle */}
      <div className="mb-4">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          onMouseEnter={() => setHovered('theme')}
          onMouseLeave={() => setHovered(null)}
          className="flex items-center justify-center transition-all duration-300"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '14px',
            background: 'transparent',
            color: hovered === 'theme' ? '#2563eb' : 'var(--text-3)',
            transform: hovered === 'theme' ? 'scale(1.08)' : 'scale(1)',
            boxShadow: hovered === 'theme' ? '0 0 15px rgba(37, 99, 235, 0.3)' : 'none'
          }}
        >
          {theme === 'dark'
            ? <HiOutlineSun  style={{ width: '22px', height: '22px' }} />
            : <HiOutlineMoon style={{ width: '22px', height: '22px' }} />
          }
        </button>
      </div>

      {/* Nav items */}
      <div className="flex flex-col gap-2">
        {NAV_ITEMS.map(({ id, icon: Icon }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              aria-label={`Go to ${id}`}
              aria-current={isActive ? 'page' : undefined}
              className="flex items-center justify-center transition-all duration-300"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                background: isActive ? '#ffffff' : 'transparent',
                color: isActive ? '#2563eb' : hovered === id ? '#2563eb' : 'var(--text-3)',
                transform: !isActive && hovered === id ? 'scale(1.08)' : 'scale(1)',
                boxShadow: isActive 
                  ? '0 0 20px rgba(37, 99, 235, 0.4)' 
                  : hovered === id 
                  ? '0 0 15px rgba(37, 99, 235, 0.3)' 
                  : 'none',
              }}
            >
              <Icon style={{ width: '22px', height: '22px' }} />
            </button>
          );
        })}
      </div>

      {/* Bottom Indicator (Three vertical dots) */}
      <div className="mt-5 flex flex-col gap-1.5 items-center justify-center" style={{ opacity: 0.4 }}>
        <div className="w-1 h-1 rounded-full bg-white"></div>
        <div className="w-1 h-1 rounded-full bg-white"></div>
        <div className="w-1 h-1 rounded-full bg-white"></div>
      </div>
      </motion.nav>
    </div>
  );
}
