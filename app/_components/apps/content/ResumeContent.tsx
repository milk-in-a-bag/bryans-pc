import { EXPERIENCE, EDUCATION, SKILLS_GROUPS } from '../resume/resumeData'
import { ResumeSection, TimelineEntry } from '../resume/ResumeTimeline'

export default function ResumeContent() {
  return (
    <div className="p-6 font-sans">
      <div className="max-w-xl flex flex-col gap-7">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold text-white">Bryan Mayodi</h1>
            <p className="text-sm text-[#60cdff] mt-0.5">Fullstack Developer</p>
          </div>
          <button type="button" aria-label="Download resume PDF (coming soon)" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0078d4] hover:bg-[#1084d8] transition-colors text-sm font-medium text-white">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6.5 1v8M3 6.5l3.5 3.5 3.5-3.5"/><path d="M1 11h11"/>
            </svg>
            Download PDF
          </button>
        </div>

        <ResumeSection title="Experience">
          {EXPERIENCE.map((item) => <TimelineEntry key={item.title + item.org} item={item} />)}
        </ResumeSection>
        <ResumeSection title="Education">
          {EDUCATION.map((item) => <TimelineEntry key={item.title + item.org} item={item} />)}
        </ResumeSection>
        <ResumeSection title="Skills">
          <div className="grid grid-cols-2 gap-4">
            {SKILLS_GROUPS.map((group) => (
              <div key={group.label}>
                <p className="text-[11px] font-semibold text-white/35 mb-2">{group.label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-white/65 border border-white/[0.08]">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ResumeSection>
      </div>
    </div>
  )
}
