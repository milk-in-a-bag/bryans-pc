'use client'

import type { AppId, WindowState } from '../types'

interface Props {
  openAppIds: Set<AppId>
  windows: WindowState[]
  activeWindowId: string | null
  onOpen: (id: AppId) => void
  onTaskbarClick: (id: string) => void
}

export default function TaskbarPinnedApps({ windows, activeWindowId, onOpen, onTaskbarClick }: Props) {
  const explorerAppId: AppId = 'projects'
  const win = windows.find((w) => w.appId === explorerAppId)
  const isActive = !!win && win.id === activeWindowId && !win.isMinimized

  const handleClick = () => {
    if (win) onTaskbarClick(win.id)
    else onOpen(explorerAppId)
  }

  return (
    <button
      onClick={handleClick}
      title="File Explorer"
      style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 6, flexShrink: 0, background: isActive ? 'rgba(255,255,255,0.12)' : 'none', border: 'none', cursor: 'pointer' }}
      onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)' }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = isActive ? 'rgba(255,255,255,0.12)' : 'none' }}
    >
      <svg viewBox="0 0 48 48" width="24" height="24" fill="#e8a838">
        <path d="M4 12.25C4 8.8 6.8 6 10.25 6h6.46c1 0 1.95.4 2.66 1.1l3.38 3.38-5.15 5.15q-.37.37-.89.37H4zm0 6.25v16.25C4 38.2 6.8 41 10.25 41h27.5C41.2 41 44 38.2 44 34.75v-17.5C44 13.8 41.2 11 37.75 11H25.77l-6.4 6.4c-.7.7-1.66 1.1-2.66 1.1z"/>
      </svg>
      {win && (
        <span style={{ position: 'absolute', bottom: 2, left: '50%', transform: 'translateX(-50%)', width: isActive ? 16 : 4, height: 3, borderRadius: 2, background: isActive ? '#60cdff' : 'rgba(255,255,255,0.5)', transition: 'width 0.15s' }} />
      )}
    </button>
  )
}
