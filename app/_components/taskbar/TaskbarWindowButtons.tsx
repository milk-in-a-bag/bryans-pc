'use client'

import type { WindowState } from '../types'

interface Props {
  windows: WindowState[]
  activeWindowId: string | null
  onTaskbarClick: (id: string) => void
}

export default function TaskbarWindowButtons({ windows, activeWindowId, onTaskbarClick }: Props) {
  return (
    <div className="flex items-center gap-1 flex-1 overflow-x-auto">
      {windows.map((win) => {
        const isActive = win.id === activeWindowId && !win.isMinimized
        return (
          <button
            key={win.id}
            onClick={() => onTaskbarClick(win.id)}
            title={win.title}
            className={`relative flex items-center gap-2 px-3 h-9 rounded shrink-0 text-[12px] font-medium transition-colors duration-100 select-none max-w-40 ${isActive ? 'bg-white/15 text-white' : 'bg-white/5 text-white/65 hover:bg-white/10 hover:text-white'}`}
          >
            <span className="text-sm leading-none shrink-0">{win.icon}</span>
            <span className="truncate hidden sm:block">{win.title}</span>
            <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-150 ${isActive ? 'w-4 bg-[#60cdff]' : 'w-2 bg-white/30'}`} />
          </button>
        )
      })}
    </div>
  )
}
