import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs, SiExpress,
  SiMongodb, SiTailwindcss, SiBootstrap, SiGit, SiGithub,
  SiPython, SiPostman, SiVite, SiVercel,
} from 'react-icons/si';
import { FiCode } from 'react-icons/fi';

export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'HTML5',       icon: SiHtml5,       color: '#e34f26' },
      { name: 'CSS3',        icon: SiCss,          color: '#1572b6' },
      { name: 'JavaScript',  icon: SiJavascript,  color: '#f7df1e' },
      { name: 'React.js',    icon: SiReact,        color: '#61dafb' },
      { name: 'Tailwind CSS',icon: SiTailwindcss,  color: '#06b6d4' },
      { name: 'Bootstrap',   icon: SiBootstrap,    color: '#7952b3' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js',     icon: SiNodedotjs,   color: '#339933' },
      { name: 'Express.js',  icon: SiExpress,      color: '#ffffff' },
      { name: 'Python',      icon: SiPython,       color: '#3776ab' },
      { name: 'REST APIs',   icon: FiCode,         color: '#3b82f6' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    skills: [
      { name: 'MongoDB',     icon: SiMongodb,      color: '#47a248' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { name: 'Git',         icon: SiGit,          color: '#f05032' },
      { name: 'GitHub',      icon: SiGithub,       color: '#ffffff' },
      { name: 'Postman',     icon: SiPostman,      color: '#ff6c37' },
      { name: 'Vite',        icon: SiVite,         color: '#646cff' },
      { name: 'Vercel',      icon: SiVercel,       color: '#ffffff' },
    ],
  },
];
