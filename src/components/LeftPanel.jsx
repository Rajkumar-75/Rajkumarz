import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiSend } from 'react-icons/fi';
import { HiOutlineLocationMarker, HiBriefcase, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { SiLeetcode } from 'react-icons/si';
import { profile } from '../data/profile.js';

const SOCIALS = [
  { icon: FiGithub,   href: profile.github,               label: 'GitHub'   },
  { icon: FiLinkedin, href: profile.linkedin,              label: 'LinkedIn' },
  { icon: FiMail,     href: `mailto:${profile.email}`,    label: 'Email'    },
  { icon: SiLeetcode, href: profile.leetcode,              label: 'LeetCode' },
];

const INFO = [
  { icon: HiOutlineLocationMarker, text: profile.location   },
  { icon: HiBriefcase,             text: profile.experience  },
  { icon: HiOutlineMail,           text: profile.email       },
  { icon: HiOutlinePhone,          text: profile.phone       },
];

export default function LeftPanel() {
  return (
    /* Outer wrapper: full height, flex-center, padding */
    <div className="fixed top-0 left-0 h-screen flex items-center justify-center px-4 lg:px-6 z-20"
         style={{ width: '28%', maxWidth: '340px' }}>

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 80% at 30% 50%, rgba(37,99,235,0.07) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full overflow-hidden flex flex-col"
        style={{
          height: '96vh',
          borderRadius: '32px',
          backgroundImage: 'url(/left_panel_bg.png)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          border: 'none',
        }}
      >
        {/* Inner content (Strictly fixed, heavily compressed to fit inside neon border) */}
        <div className="flex-1 px-7 py-7 flex flex-col justify-between relative z-10 overflow-hidden">
          <div className="space-y-2">
            
            {/* Avatar */}
            <div className="flex justify-center">
              <div className="relative">
                <div
                  className="w-[120px] h-[120px] rounded-3xl overflow-hidden"
                  style={{
                    border: '2px solid #3b82f6',
                    boxShadow: '0 0 15px rgba(59,130,246,0.5)',
                  }}
                >
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Name + Role */}
            <div className="text-center">
              <h1 className="text-[22px] font-black tracking-tight leading-tight">
                <span className="text-blue-500">Raj</span> <span className="text-white">Kumar P</span>
              </h1>
              <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-blue-500 mt-0.5">
                <span className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                Web Developer
                <span className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              </div>
            </div>

            {/* Tagline */}
            <p className="text-center text-[9px] leading-snug px-1" style={{ color: '#d1d5db' }}>
              Building scalable, modern web applications
            </p>

            {/* Status */}
            <div className="flex justify-center pt-0.5">
              <div
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[8px] font-semibold uppercase tracking-wider"
                style={{ 
                  color: '#60a5fa', 
                  background: 'rgba(37,99,235,0.1)', 
                  border: '1px solid rgba(37,99,235,0.3)',
                  boxShadow: 'inset 0 0 10px rgba(37,99,235,0.1)'
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" style={{ boxShadow: '0 0 8px rgba(16,185,129,0.8)' }} />
                Available for Work
              </div>
            </div>

            {/* Info rows */}
            <div className="space-y-1.5 px-1 pt-1">
              {INFO.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-[10px]" style={{ color: '#d1d5db' }}>
                  <Icon className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="truncate">{text}</span>
                </div>
              ))}
            </div>

            {/* Buttons (Stacked) */}
            <div className="space-y-1.5 pt-1">
              <a 
                href={profile.resumeUrl} 
                download 
                className="flex items-center justify-center gap-1.5 w-full text-[11px] font-bold py-2 rounded-[10px] transition-all duration-300"
                style={{ background: '#1d4ed8', color: 'white', boxShadow: '0 4px 14px rgba(29,78,216,0.4)' }}
              >
                <FiDownload className="w-3.5 h-3.5" />
                Download Resume
              </a>
              <a 
                href={`mailto:${profile.email}`} 
                className="flex items-center justify-center gap-1.5 w-full text-[11px] font-bold py-2 rounded-[10px] transition-all duration-300"
                style={{ background: '#030712', color: 'white', border: '1px solid rgba(255,255,255,0.15)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#030712';
                }}
              >
                <FiSend className="w-3.5 h-3.5" />
                Hire Me
              </a>
            </div>

            <div className="space-y-1.5 pt-1">
              <p className="text-center text-[9px] text-gray-400">Connect with me</p>
              {/* Social links */}
              <div className="flex items-center justify-center gap-2">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0"
                    style={{ color: '#fff', background: 'transparent', border: '1px solid rgba(255,255,255,0.15)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(59,130,246,0.8)';
                      e.currentTarget.style.background = 'rgba(59,130,246,0.1)';
                      e.currentTarget.style.color = '#3b82f6';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#fff';
                    }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </motion.a>
                ))}
              </div>
            </div>

          </div>

          {/* Footer credit */}
          <div className="pt-2 mt-2 border-t border-blue-900/30">
            <p className="text-center text-[9px]" style={{ color: '#9ca3af' }}>
              © 2026 {profile.name}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
