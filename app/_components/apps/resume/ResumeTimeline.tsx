import type { TimelineItem } from './resumeData'

export function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <h2 className="text-xs font-semibold text-white/40 uppercase tracking-widest shrink-0">{title}</h2>
        <div className="flex-1 h-px bg-white/10" />
      </div>
      {children}
    </section>
  )
}

export function TimelineEntry({ item }: { item: TimelineItem }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center pt-1">
        <div className="w-2 h-2 rounded-full bg-[#0078d4] shrink-0" />
        <div className="flex-1 w-px bg-white/10 mt-1" />
      </div>
      <div className="pb-4 flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <div>
            <p className="text-[14px] font-semibold text-white leading-tight">{item.title}</p>
            <p className="text-[12px] text-[#60cdff] mt-0.5">{item.org}</p>
          </div>
          <span className="text-[11px] text-white/35 shrink-0 mt-0.5">{item.period}</span>
        </div>
        <ul className="mt-2 flex flex-col gap-1">
          {item.bullets.map((b, i) => (
            <li key={`${b.slice(0, 20)}-${i}`} className="text-[12px] text-white/55 leading-relaxed flex gap-2">
              <span className="text-white/20 mt-1 shrink-0">›</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
