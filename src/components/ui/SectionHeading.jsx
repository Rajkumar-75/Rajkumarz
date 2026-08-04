import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';
  return (
    <Reveal direction="up" className={`flex flex-col gap-3.5 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-300 font-mono text-[10px] uppercase tracking-[0.2em] font-semibold shadow-[0_0_15px_rgba(6,182,212,0.05)]">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
        {title}
      </h2>
      {description && <p className="text-slate-400 dark:text-slate-400 text-sm sm:text-base leading-relaxed">{description}</p>}
    </Reveal>
  );
}
