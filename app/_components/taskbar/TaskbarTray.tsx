'use client'

import TaskbarClock from './TaskbarClock'

export default function TaskbarTray() {
  return (
    <div className="flex items-center gap-1 shrink-0 ml-auto">
      <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/10 transition-colors cursor-default">
        {/* Wifi */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M1.5 8.5C5.25 4.75 10.35 2.5 12 2.5s6.75 2.25 10.5 6"  stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
          <path d="M5 12c1.9-1.9 4.3-3 7-3s5.1 1.1 7 3"                    stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.65"/>
          <path d="M8.5 15.5c.9-.9 2.2-1.5 3.5-1.5s2.6.6 3.5 1.5"         stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
          <circle cx="12" cy="19" r="1.5" fill="white" opacity="0.9"/>
        </svg>
        {/* Volume */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M11 5L6 9H2v6h4l5 4V5z" fill="white" opacity="0.65"/>
          <path d="M15.5 8.5c1.2 1.2 2 2.8 2 4.5s-.8 3.3-2 4.5" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.85"/>
        </svg>
      </div>
      <TaskbarClock />
    </div>
  )
}
