'use client'

import { useEffect, useState } from 'react'

export default function TaskbarClock() {
  const [time, setTime] = useState<Date | null>(null)

  useEffect(() => {
    setTime(new Date())
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!time) return <div className="w-14 h-8" />

  const timeStr = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const dateStr = time.toLocaleDateString([], { month: 'numeric', day: 'numeric', year: '2-digit' })

  return (
    <div className="flex flex-col items-end justify-center text-white/90 px-3 py-1 rounded hover:bg-white/10 transition-colors cursor-default select-none">
      <span className="text-[12px] font-medium leading-tight">{timeStr}</span>
      <span className="text-[11px] leading-tight text-white/60">{dateStr}</span>
    </div>
  )
}
