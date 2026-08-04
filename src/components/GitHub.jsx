import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch } from 'react-icons/fi';
import { profile } from '../data/profile.js';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

// Mock GitHub contribution data (7 weeks x 7 days)
const generateContributions = () => {
  const weeks = [];
  for (let w = 0; w < 26; w++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      const level = Math.random();
      days.push(
        level < 0.4 ? 0 :
        level < 0.6 ? 1 :
        level < 0.78 ? 2 :
        level < 0.9 ? 3 : 4
      );
    }
    weeks.push(days);
  }
  return weeks;
};

const CONTRIB_LEVELS = [
  'rgba(37,99,235,0.05)',
  'rgba(37,99,235,0.25)',
  'rgba(37,99,235,0.5)',
  'rgba(37,99,235,0.75)',
  'rgba(37,99,235,1)',
];

const contributions = generateContributions();

const LANGUAGES = [
  { name: 'JavaScript', percent: 45, color: '#f7df1e' },
  { name: 'React/JSX',  percent: 30, color: '#61dafb' },
  { name: 'CSS/HTML',   percent: 15, color: '#e34f26' },
  { name: 'Python',     percent: 10, color: '#3776ab' },
];

const REPOS = [
  { name: 'ai-Personalized_Learning_Schedule_webapplication',      desc: 'AI-powered PDF study planner',   stars: 12, forks: 3,  lang: 'JavaScript' },
  { name: 'Training-institute-webapplication',    desc: 'Full-stack student portal',       stars: 8,  forks: 2,  lang: 'React' },
  { name: 'ioT-smart-Bicycle',     desc: 'IoT bicycle tracking system',     stars: 6,  forks: 1,  lang: 'JavaScript' },
];

export default function GitHub() {
  return (
    <section id="github" className="px-6 md:px-8 py-10 space-y-10 border-b border-blue-900/40">
      <motion.div {...fadeUp(0)} className="space-y-3">
        <span className="section-label">Open Source</span>
        <h2 className="text-4xl md:text-5xl font-black text-white">GitHub Activity</h2>
        <p className="text-base" style={{ color: 'var(--text-2)' }}>
          Consistent contributions and open-source projects.
        </p>
      </motion.div>

      {/* Contribution Graph */}
      <motion.div
        {...fadeUp(0.1)}
        className="p-6 rounded-2xl overflow-x-auto"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
        }}
      >
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm font-semibold" style={{ color: 'var(--text-2)' }}>
            Contribution Graph — Last 6 months
          </p>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <FiGithub className="w-3.5 h-3.5" />
            View Profile
          </a>
        </div>
        <div className="flex gap-1.5">
          {contributions.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1.5">
              {week.map((level, di) => (
                <motion.div
                  key={di}
                  className="w-3 h-3 rounded-sm contrib-cell"
                  style={{ background: CONTRIB_LEVELS[level] }}
                  whileHover={{ scale: 1.4 }}
                  title={`Level ${level}`}
                />
              ))}
            </div>
          ))}
        </div>
        {/* Legend */}
        <div className="flex items-center gap-2 mt-4 text-xs" style={{ color: '#475569' }}>
          <span>Less</span>
          {CONTRIB_LEVELS.map((c, i) => (
            <div key={i} className="w-3 h-3 rounded-sm" style={{ background: c }} />
          ))}
          <span>More</span>
        </div>
      </motion.div>

      {/* Stats + Languages Row */}
      <div className="grid grid-cols-2 gap-4">
        {/* Coding Stats */}
        <motion.div
          {...fadeUp(0.15)}
          className="p-6 rounded-2xl space-y-4"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <h3 className="font-bold text-white">Coding Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Public Repos', value: '12+' },
              { label: 'Total Commits', value: '400+' },
              { label: 'PRs Merged', value: '25+' },
              { label: 'Issues Closed', value: '30+' },
            ].map(({ label, value }) => (
              <div key={label} className="space-y-1">
                <p
                  className="text-2xl font-black"
                  style={{
                    background: 'linear-gradient(135deg, #60a5fa, #2563eb)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {value}
                </p>
                <p className="text-xs" style={{ color: 'var(--text-3)' }}>{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Languages */}
        <motion.div
          {...fadeUp(0.18)}
          className="p-6 rounded-2xl space-y-4"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <h3 className="font-bold text-white">Top Languages</h3>
          <div className="space-y-3">
            {LANGUAGES.map(({ name, percent, color }) => (
              <div key={name} className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span style={{ color: 'var(--text-2)' }}>{name}</span>
                  <span style={{ color: 'var(--text-3)' }}>{percent}%</span>
                </div>
                <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: color, width: 0 }}
                    whileInView={{ width: `${percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Repos */}
      <motion.div {...fadeUp(0.2)} className="grid gap-4">
        {REPOS.map((repo, i) => (
          <motion.a
            key={repo.name}
            href={`${profile.github}/${repo.name}`}
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 4 }}
            className="flex items-center justify-between p-5 rounded-xl transition-all duration-300 group"
            style={{
              background: 'var(--surface)',
              border: '1px solid rgba(37,99,235,0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(37,99,235,0.35)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(37,99,235,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(37,99,235,0.1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div className="flex items-center gap-4">
              <FiGithub className="w-5 h-5 shrink-0" style={{ color: '#3b82f6' }} />
              <div>
                <p className="font-semibold text-white text-sm group-hover:text-blue-300 transition-colors">{repo.name}</p>
                <p className="text-xs" style={{ color: 'var(--text-3)' }}>{repo.desc}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--text-3)' }}>
              <span className="flex items-center gap-1"><FiStar className="w-3.5 h-3.5" />{repo.stars}</span>
              <span className="flex items-center gap-1"><FiGitBranch className="w-3.5 h-3.5" />{repo.forks}</span>
              <span
                className="px-2 py-0.5 rounded-full text-xs"
                style={{ color: '#60a5fa', background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)' }}
              >
                {repo.lang}
              </span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
