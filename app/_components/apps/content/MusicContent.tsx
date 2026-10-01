'use client'

import { useState } from 'react'

interface Track {
  title: string
  artist: string
  duration: string
  genre: string
}

const TRACKS: Track[] = [
  { title: 'HUMBLE.',             artist: 'Kendrick Lamar',   duration: '2:57', genre: 'Hip-Hop' },
  { title: 'Essence',             artist: 'Wizkid ft. Tems',  duration: '4:08', genre: 'Afrobeats' },
  { title: 'Love Nwantiti',       artist: 'CKay',             duration: '2:24', genre: 'Afropop' },
  { title: 'Blinding Lights',     artist: 'The Weeknd',       duration: '3:20', genre: 'Pop' },
  { title: 'Jerusalema',          artist: 'Master KG',        duration: '6:01', genre: 'Afro House' },
  { title: 'Joeboy - Alcohol',    artist: 'Joeboy',           duration: '3:28', genre: 'Afrobeats' },
  { title: 'Burna Boy - Last Last', artist: 'Burna Boy',      duration: '3:55', genre: 'Afrofusion' },
  { title: 'Rema - Calm Down',    artist: 'Rema',             duration: '3:39', genre: 'Afropop' },
]

export default function MusicContent() {
  const [playing, setPlaying] = useState<string | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '12px 16px 8px', gap: 8, flexShrink: 0 }}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#60cdff"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6Z"/></svg>
        <span style={{ fontSize: 14, fontWeight: 600, color: 'white' }}>Music Library</span>
      </div>

      {/* Column headers */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 16px', height: 28, borderBottom: '1px solid rgba(255,255,255,0.07)', flexShrink: 0 }}>
        {[['#', 32], ['Title', 1], ['Artist', 160], ['Genre', 120], ['Duration', 60]].map(([label, flex]) => (
          <div key={String(label)} style={{ flex: typeof flex === 'number' && flex > 1 ? flex : undefined, width: typeof flex === 'number' && flex <= 120 ? flex : undefined, fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            {label}
          </div>
        ))}
      </div>

      {/* Track list */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {TRACKS.map((track, i) => {
          const isPlaying = playing === track.title
          const isHovered = hovered === track.title
          return (
            <div
              key={track.title}
              onMouseEnter={() => setHovered(track.title)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setPlaying(isPlaying ? null : track.title)}
              style={{ display: 'flex', alignItems: 'center', padding: '0 16px', height: 40, cursor: 'pointer', background: isPlaying ? 'rgba(96,205,255,0.08)' : isHovered ? 'rgba(255,255,255,0.05)' : 'transparent', borderBottom: '1px solid rgba(255,255,255,0.03)' }}
            >
              {/* # / play icon */}
              <div style={{ width: 32, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                {isPlaying ? (
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="#60cdff"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                ) : isHovered ? (
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M8 5v14l11-7z"/></svg>
                ) : (
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{i + 1}</span>
                )}
              </div>
              {/* Title */}
              <div style={{ flex: 1, fontSize: 13, color: isPlaying ? '#60cdff' : 'rgba(255,255,255,0.85)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{track.title}</div>
              {/* Artist */}
              <div style={{ width: 160, fontSize: 12, color: 'rgba(255,255,255,0.5)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{track.artist}</div>
              {/* Genre */}
              <div style={{ width: 120, fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{track.genre}</div>
              {/* Duration */}
              <div style={{ width: 60, fontSize: 12, color: 'rgba(255,255,255,0.4)', textAlign: 'right' }}>{track.duration}</div>
            </div>
          )
        })}
      </div>

      {/* Now playing bar */}
      <div style={{ height: 36, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', background: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
        {playing ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#60cdff"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6Z"/></svg>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>Now playing: <span style={{ color: '#60cdff' }}>{playing}</span></span>
            </div>
            <button onClick={() => setPlaying(null)} style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', background: 'none', border: 'none', cursor: 'pointer' }}>Stop</button>
          </>
        ) : (
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{TRACKS.length} songs · Click a track to play</span>
        )}
      </div>
    </div>
  )
}
