'use client'

import { EXPERIENCE, EDUCATION, SKILLS_GROUPS } from './apps/resume/resumeData'
import { type TimelineItem } from './apps/resume/resumeData'

// ── Toolbar ───────────────────────────────────────────────────────────────────
function PdfToolbar() {
  return (
    <div
      style={{
        height: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 16px', background: '#323232', borderBottom: '1px solid rgba(0,0,0,0.3)',
        flexShrink: 0,
      }}
    >
      {/* Left: page info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Page</span>
        <div style={{ width: 32, height: 22, background: 'rgba(255,255,255,0.12)', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 12, color: 'white' }}>1</span>
        </div>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>of 1</span>
      </div>

      {/* Center: zoom */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <button style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 3, cursor: 'pointer', color: 'white' }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
          aria-label="Zoom out"
        >
          <svg width="10" height="2" viewBox="0 0 10 2" fill="currentColor"><rect width="10" height="2" rx="1"/></svg>
        </button>
        <div style={{ width: 48, height: 22, background: 'rgba(255,255,255,0.12)', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 12, color: 'white' }}>100%</span>
        </div>
        <button style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 3, cursor: 'pointer', color: 'white' }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
          aria-label="Zoom in"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><rect x="4" y="0" width="2" height="10" rx="1"/><rect x="0" y="4" width="10" height="2" rx="1"/></svg>
        </button>
      </div>

      {/* Right: download */}
      <button
        type="button"
        aria-label="Download PDF"
        style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '0 12px', height: 28, background: '#0078d4', border: 'none', borderRadius: 4, cursor: 'pointer', color: 'white', fontSize: 12, fontWeight: 500 }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#1084d8')}
        onMouseLeave={(e) => (e.currentTarget.style.background = '#0078d4')}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 1v7M3.5 5.5L6 8l2.5-2.5"/><path d="M1 10h10"/>
        </svg>
        Download
      </button>
    </div>
  )
}

// ── Resume document ───────────────────────────────────────────────────────────
function Divider({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
      <span style={{ fontSize: 10, fontWeight: 700, color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{label}</span>
      <div style={{ flex: 1, height: 1, background: '#ddd' }} />
    </div>
  )
}

function Entry({ item }: { item: TimelineItem }) {
  return (
    <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 4 }}>
        <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#0078d4', flexShrink: 0 }} />
        <div style={{ flex: 1, width: 1, background: '#e0e0e0', marginTop: 4 }} />
      </div>
      <div style={{ flex: 1, paddingBottom: 8 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#111', margin: 0 }}>{item.title}</p>
            <p style={{ fontSize: 11, color: '#0078d4', margin: '2px 0 0' }}>{item.org}</p>
          </div>
          <span style={{ fontSize: 11, color: '#888' }}>{item.period}</span>
        </div>
        <ul style={{ margin: '6px 0 0', padding: 0, listStyle: 'none' }}>
          {item.bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', gap: 8, fontSize: 11, color: '#444', lineHeight: 1.5, marginBottom: 2 }}>
              <span style={{ color: '#bbb', flexShrink: 0 }}>›</span>{b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ResumeDocument() {
  return (
    <div style={{ background: 'white', width: 680, minHeight: 960, padding: '48px 56px', boxShadow: '0 4px 24px rgba(0,0,0,0.3)', borderRadius: 2, color: '#111', fontFamily: 'Georgia, serif' }}>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0, color: '#111', fontFamily: 'Arial, sans-serif' }}>Bryan Mayodi</h1>
        <p style={{ fontSize: 13, color: '#0078d4', margin: '4px 0 0', fontFamily: 'Arial, sans-serif' }}>Fullstack Developer</p>
        <div style={{ height: 2, background: '#0078d4', width: 40, marginTop: 8, borderRadius: 1 }} />
      </div>

      {/* Experience */}
      <div style={{ marginBottom: 24 }}>
        <Divider label="Experience" />
        {EXPERIENCE.map((item) => <Entry key={item.title + item.org} item={item} />)}
      </div>

      {/* Education */}
      <div style={{ marginBottom: 24 }}>
        <Divider label="Education" />
        {EDUCATION.map((item) => <Entry key={item.title + item.org} item={item} />)}
      </div>

      {/* Skills */}
      <div>
        <Divider label="Skills" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {SKILLS_GROUPS.map((group) => (
            <div key={group.label}>
              <p style={{ fontSize: 10, fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px', fontFamily: 'Arial, sans-serif' }}>{group.label}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {group.items.map((skill) => (
                  <span key={skill} style={{ fontSize: 11, padding: '2px 8px', background: '#f0f4f8', border: '1px solid #dde3ea', borderRadius: 3, color: '#333', fontFamily: 'Arial, sans-serif' }}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Shell ─────────────────────────────────────────────────────────────────────
export default function PdfViewerShell() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      <PdfToolbar />
      {/* Grey viewer background */}
      <div style={{ flex: 1, overflowY: 'auto', background: '#404040', display: 'flex', justifyContent: 'center', padding: '32px 24px' }}>
        <ResumeDocument />
      </div>
    </div>
  )
}
