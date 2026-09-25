export default function AboutContent() {
  return (
    <div className="p-8 text-white/90 font-sans">
      <div className="max-w-lg flex flex-col gap-6">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0078d4] to-[#60cdff] flex items-center justify-center text-3xl font-bold text-white shrink-0 select-none">
            BM
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-white">Bryan Mayodi</h1>
            <p className="text-[#60cdff] text-sm mt-0.5">Fullstack Developer</p>
          </div>
        </div>

        <div className="h-px bg-white/10" />

        <div className="flex flex-col gap-3 text-sm leading-relaxed text-white/75">
          <p>
            Hey, I&apos;m Bryan — a fullstack developer who enjoys building clean,
            performant web applications from the ground up. I care about good
            architecture, great UX, and code that&apos;s easy to reason about.
          </p>
          <p>
            I work across the stack — designing APIs, building databases, and
            crafting interfaces that feel native. I&apos;m always exploring new tools
            and patterns to keep my work sharp.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'REST APIs', 'Git'].map((skill) => (
              <span key={skill} className="px-3 py-1 rounded-full text-xs bg-white/10 text-white/80 border border-white/10">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">Quick Facts</h2>
          <div className="flex flex-col gap-2">
            {[
              { label: 'Role',      value: 'Fullstack Developer' },
              { label: 'Focus',     value: 'Web Applications' },
              { label: 'Available', value: 'Open to opportunities' },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center gap-3 text-sm">
                <span className="text-white/40 w-20 shrink-0">{label}</span>
                <span className="text-white/80">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
