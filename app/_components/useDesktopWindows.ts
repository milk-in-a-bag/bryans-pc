'use client'

import { useState, useCallback, useRef } from 'react'
import type { WindowState, AppId } from './types'
import { APPS } from './types'

let zCounter = 100
const nextZ = () => ++zCounter

const OFFSET_BASE = { x: 120, y: 80 }
const OFFSET_STEP = 30

export function useDesktopWindows() {
  const [windows, setWindows] = useState<WindowState[]>([])
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null)
  const openCountRef = useRef<Partial<Record<AppId, number>>>({})

  const openApp = useCallback((appId: AppId) => {
    const app = APPS.find((a) => a.id === appId)!
    const existing = windows.find((w) => w.appId === appId)
    if (existing) {
      setWindows((prev) => prev.map((w) => w.id === existing.id ? { ...w, isMinimized: false, zIndex: nextZ() } : w))
      setActiveWindowId(existing.id)
      return
    }
    const count = openCountRef.current[appId] ?? 0
    openCountRef.current[appId] = count + 1
    const id = `${appId}-${Date.now()}`
    setWindows((prev) => [...prev, {
      id, appId, title: app.title, icon: app.icon,
      isMinimized: false, isMaximized: false,
      position: { x: OFFSET_BASE.x + count * OFFSET_STEP, y: OFFSET_BASE.y + count * OFFSET_STEP },
      size: app.defaultSize,
      zIndex: nextZ(),
    }])
    setActiveWindowId(id)
  }, [windows])

  const focusWindow = useCallback((id: string) => {
    setWindows((prev) => prev.map((w) => w.id === id ? { ...w, zIndex: nextZ() } : w))
    setActiveWindowId(id)
  }, [])

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id))
    setActiveWindowId((prev) => prev === id ? null : prev)
  }, [])

  const minimizeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.map((w) => w.id === id ? { ...w, isMinimized: true } : w))
    setActiveWindowId((prev) => prev === id ? null : prev)
  }, [])

  const maximizeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.map((w) => w.id === id ? { ...w, isMaximized: !w.isMaximized, zIndex: nextZ() } : w))
    setActiveWindowId(id)
  }, [])

  const moveWindow = useCallback((id: string, position: { x: number; y: number }) => {
    setWindows((prev) => prev.map((w) => w.id === id ? { ...w, position } : w))
  }, [])

  const resizeWindow = useCallback((id: string, size: { width: number; height: number }, position: { x: number; y: number }) => {
    setWindows((prev) => prev.map((w) => w.id === id ? { ...w, size, position } : w))
  }, [])

  const handleTaskbarClick = useCallback((id: string) => {
    const win = windows.find((w) => w.id === id)
    if (!win) return
    if (win.isMinimized) {
      setWindows((prev) => prev.map((w) => w.id === id ? { ...w, isMinimized: false, zIndex: nextZ() } : w))
      setActiveWindowId(id)
    } else if (activeWindowId === id) {
      minimizeWindow(id)
    } else {
      focusWindow(id)
    }
  }, [windows, activeWindowId, minimizeWindow, focusWindow])

  return { windows, activeWindowId, openApp, focusWindow, closeWindow, minimizeWindow, maximizeWindow, moveWindow, resizeWindow, handleTaskbarClick }
}
