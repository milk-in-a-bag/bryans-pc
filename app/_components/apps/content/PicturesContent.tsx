'use client'

import { useState } from 'react'

// Bryan's photos from public folder
const PHOTOS = [
  { name: 'Professional Headshot', src: '/bryan-3.png' },
  { name: 'Work Fit',              src: '/bryan-1.jpg' },
  { name: 'Cap Selfie',            src: '/bryan-2.jpg' },
]

export default function PicturesContent() {
  const [selected, setSelected] = useState<string | null>(null)

  if (selected) {
    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#111' }}>
        {/* Back bar */}
        <div style={{ height: 32, display: 'flex', alignItems: 'center', padding: '0 12px', gap: 8, background: '#1e1e1e', borderBottom: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
          <button onClick={() => setSelected(null)}
            style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', fontSize: 11, padding: '0 8px', height: 22, borderRadius: 3 }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M7.5 2L3 6l4.5 4"/></svg>
            Back
          </button>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{PHOTOS.find(p => p.src === selected)?.name}</span>
        </div>
        {/* Full photo */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, overflow: 'hidden' }}>
          <img src={selected} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 4, boxShadow: '0 8px 32px rgba(0,0,0,0.6)' }} />
        </div>
      </div>
    )
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignContent: 'flex-start' }}>
          {PHOTOS.map((photo) => (
            <button
              key={photo.src}
              onClick={() => setSelected(photo.src)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: 8, background: 'none', border: 'none', cursor: 'pointer', borderRadius: 4, width: 120 }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
            >
              <div style={{ width: 104, height: 80, borderRadius: 3, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src={photo.src} alt={photo.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.75)', textAlign: 'center', lineHeight: 1.3, maxWidth: 104 }}>{photo.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div style={{ height: 24, display: 'flex', alignItems: 'center', padding: '0 12px', background: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{PHOTOS.length} items</span>
      </div>
    </div>
  )
}
