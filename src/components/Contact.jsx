import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiCopy, FiCheck } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';
import { profile } from '../data/profile.js';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const SOCIALS = [
  { icon: FiPhone,    label: 'Phone',    value: profile.phone,   href: `tel:${profile.phone.replace(/\s/g,'')}` },
  { icon: SiWhatsapp, label: 'WhatsApp', value: 'Chat with me',  href: `https://wa.me/${profile.phone.replace(/[^0-9]/g,'')}` },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'Connect',       href: profile.linkedin },
  { icon: FiGithub,   label: 'GitHub',   value: 'Follow',        href: profile.github },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="px-6 md:px-8 py-10 space-y-10">
      {/* Header */}
      <motion.div {...fadeUp(0)} className="space-y-3">
        <span className="section-label">Get In Touch</span>
        <h2 className="text-4xl md:text-5xl font-black text-white">Let's Work Together</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Main Email Block */}
        <motion.div
          {...fadeUp(0.1)}
          className="md:col-span-2 relative overflow-hidden group flex flex-col justify-between p-8 md:p-10 rounded-[32px] transition-all duration-500"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
          }}
        >
          {/* Background Glow */}
          <div
            className="absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-40"
            style={{ background: '#2563eb' }}
          />

          <div className="relative z-10 space-y-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.2)' }}
            >
              <FiMail className="w-6 h-6 text-blue-400" />
            </div>

            <div className="space-y-4">
              <p className="text-lg" style={{ color: 'var(--text-2)' }}>
                Have a project in mind or just want to say hi?
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-2xl md:text-3xl lg:text-4xl font-black text-white hover:text-blue-400 transition-colors truncate"
                  style={{ wordBreak: 'break-word' }}
                >
                  {profile.email}
                </a>
                
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all w-fit"
                  style={{
                    background: copied ? 'rgba(34,197,94,0.1)' : 'rgba(37,99,235,0.1)',
                    color: copied ? '#4ade80' : '#60a5fa',
                    border: `1px solid ${copied ? 'rgba(34,197,94,0.2)' : 'rgba(37,99,235,0.2)'}`
                  }}
                >
                  {copied ? <FiCheck className="w-4 h-4" /> : <FiCopy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        {SOCIALS.map(({ icon: Icon, label, value, href }, idx) => (
          <motion.a
            key={label}
            {...fadeUp(0.2 + idx * 0.05)}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="group flex items-center gap-5 p-6 rounded-[28px] transition-all duration-300"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(37,99,235,0.4)';
              e.currentTarget.style.boxShadow = '0 0 24px rgba(37,99,235,0.1)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}
            >
              <Icon className="w-5 h-5" style={{ color: 'var(--text-3)' }} />
            </div>
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text-4)' }}>
                {label}
              </p>
              <p className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors">
                {value}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <motion.p {...fadeUp(0.4)} className="text-center text-sm pt-8 pb-8" style={{ color: 'var(--text-4)' }}>
        © 2026 Raj Kumar. Crafted with React, Vite & Tailwind CSS.
      </motion.p>
    </section>
  );
}
