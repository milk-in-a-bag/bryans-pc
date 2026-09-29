'use client'

import { useEffect, useState } from 'react'

export default function WeatherWidget() {
  const [weather, setWeather] = useState<{ temp: number | null; condition: string } | null>(null)

  useEffect(() => {
    fetch('/api/weather')
      .then((r) => r.json())
      .then((d) => setWeather({ temp: d.temp, condition: d.condition }))
      .catch(() => setWeather({ temp: null, condition: 'Unavailable' }))
  }, [])

  const condition = weather?.condition ?? '...'
  const temp = weather?.temp != null ? `${weather.temp}°F` : '—'
  const isRainy = condition.includes('Rain') || condition.includes('Shower') || condition.includes('Drizzle')
  const isCloudy = condition.includes('Cloud') || condition.includes('Fog')
  const isStormy = condition.includes('Thunder')

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 12px', height: 40, borderRadius: 6, cursor: 'default', flexShrink: 0 }}
      onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
    >
      {isStormy ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" style={{ flexShrink: 0 }}>
          <path d="M19 16.9A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/>
          <polyline points="13 11 9 17 15 17 11 23" stroke="#fbbf24"/>
        </svg>
      ) : isRainy ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" style={{ flexShrink: 0 }}>
          <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/>
          <line x1="8" y1="19" x2="8" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="16" y1="19" x2="16" y2="21"/>
        </svg>
      ) : isCloudy ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" style={{ flexShrink: 0 }}>
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" style={{ flexShrink: 0 }}>
          <circle cx="12" cy="12" r="4" fill="#fbbf24"/>
          <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#fbbf24"/>
        </svg>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>{temp}</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)' }}>{condition}</span>
      </div>
    </div>
  )
}
