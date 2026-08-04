import { useRef } from 'react';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { useScrollSpy } from './hooks/useScrollSpy.js';
import LeftPanel      from './components/LeftPanel.jsx';
import RightNav       from './components/RightNav.jsx';
import MouseGlow      from './components/MouseGlow.jsx';
import ScrollProgressBar from './components/ScrollProgressBar.jsx';
import LoadingScreen  from './components/LoadingScreen.jsx';
import Hero           from './components/Hero.jsx';
import About          from './components/About.jsx';
import Skills         from './components/Skills.jsx';
import Experience     from './components/Experience.jsx';
import Projects       from './components/Projects.jsx';
import Certifications from './components/Certifications.jsx';
import GitHub         from './components/GitHub.jsx';
import Contact        from './components/Contact.jsx';

const SPY_IDS = ['home','about','skills','experience','projects','certificates','github','contact'];

function AppInner() {
  const activeSection = useScrollSpy(SPY_IDS);

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: 'var(--bg)' }}>
      {/* ── Global decorations ────────────────────── */}
      <ScrollProgressBar />
      <MouseGlow />

      {/* ── Fixed LEFT PANEL (35%) ────────────────── */}
      <div
        className="left-panel-width hidden lg:block"
        style={{ position: 'relative', flexShrink: 0 }}
      >
        <LeftPanel activeSection={activeSection} />
      </div>

      {/* ── Scrollable RIGHT PANEL (72%) ─────────── */}
      <div
        id="right-panel"
        className="flex-1 overflow-y-auto relative right-panel-bg lg:pr-[72px]"
        style={{ 
          height: '100vh',
          borderLeft: '1px solid rgba(37, 99, 235, 0.15)',
          background: 'transparent',
        }}
      >
        {/* Subtle grid texture over right side */}
        <div
          className="pointer-events-none fixed inset-y-0 right-0 w-full"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%232563eb' stroke-opacity='0.04' stroke-width='1'/%3E%3C/svg%3E\")",
            zIndex: 0,
          }}
          aria-hidden="true"
        />

        {/* Mobile menu (visible below lg) */}
        <MobileHeader activeSection={activeSection} />

        {/* Sections */}
        <main className="relative z-10 px-0 pb-20 lg:pb-0">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <GitHub />
          <Contact />
        </main>
      </div>

      {/* ── Floating Right Nav ────────────────────── */}
      <div className="hidden lg:block">
        <RightNav activeSection={activeSection} />
      </div>
    </div>
  );
}

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

/** Shown only on mobile/tablet where the left panel is hidden */
function MobileHeader({ activeSection }) {
  return (
    <header
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2"
      style={{
        background: 'rgba(3,7,18,0.95)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(37,99,235,0.15)',
        paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom, 0px))'
      }}
    >
      <span
        className="text-lg font-black tracking-tight shrink-0 mr-2"
        style={{
          background: 'linear-gradient(135deg, #60a5fa, #2563eb)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        RK.
      </span>
      <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar flex-1 justify-end" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {NAV_ITEMS.map(({ id, icon: Icon }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
              aria-label={`Go to ${id}`}
              className="flex items-center justify-center transition-all duration-300 shrink-0"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: isActive ? '#ffffff' : 'transparent',
                color: isActive ? '#2563eb' : 'var(--text-3)',
                boxShadow: isActive ? '0 0 20px rgba(37, 99, 235, 0.4)' : 'none',
              }}
            >
              <Icon style={{ width: '20px', height: '20px' }} />
            </button>
          );
        })}
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <AppInner />
    </ThemeProvider>
  );
}
