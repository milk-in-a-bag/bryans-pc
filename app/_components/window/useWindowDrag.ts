'use client'

import { useRef, useEffect, useCallback } from 'react'
import type { WindowState } from '../types'

const MIN_WIDTH = 480
const MIN_HEIGHT = 320

interface UseWindowDragProps {
  win: WindowState
  onMove: (id: string, position: { x: number; y: number }) => void
  onResize: (id: string, size: { width: number; height: number }, position: { x: number; y: number }) => void
  onFocus: (id: string) => void
  onMaximize: (id: string) => void
}

export function useWindowDrag({ win, onMove, onResize, onFocus, onMaximize }: UseWindowDragProps) {
  // Mirror latest values into refs — lets us register listeners once without stale closures
  const winRef = useRef(win)
  winRef.current = win
  const onMoveRef = useRef(onMove)
  onMoveRef.current = onMove
  const onResizeRef = useRef(onResize)
  onResizeRef.current = onResize
  const onFocusRef = useRef(onFocus)
  onFocusRef.current = onFocus

  const dragState = useRef<{ active: boolean; startMouseX: number; startMouseY: number; startWinX: number; startWinY: number } | null>(null)
  const resizeState = useRef<{ active: boolean; edge: string; startMouseX: number; startMouseY: number; startWidth: number; startHeight: number; startX: number; startY: number } | null>(null)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (dragState.current?.active) {
        const dx = e.clientX - dragState.current.startMouseX
        const dy = e.clientY - dragState.current.startMouseY
        onMoveRef.current(winRef.current.id, {
          x: Math.max(0, dragState.current.startWinX + dx),
          y: Math.max(0, dragState.current.startWinY + dy),
        })
      }

      if (resizeState.current?.active) {
        const r = resizeState.current
        const dx = e.clientX - r.startMouseX
        const dy = e.clientY - r.startMouseY
        let w = r.startWidth, h = r.startHeight, x = r.startX, y = r.startY

        if (r.edge.includes('e')) w = Math.max(MIN_WIDTH, r.startWidth + dx)
        if (r.edge.includes('s')) h = Math.max(MIN_HEIGHT, r.startHeight + dy)
        if (r.edge.includes('w')) { w = Math.max(MIN_WIDTH, r.startWidth - dx); x = r.startX + (r.startWidth - w) }
        if (r.edge.includes('n')) { h = Math.max(MIN_HEIGHT, r.startHeight - dy); y = r.startY + (r.startHeight - h) }

        onResizeRef.current(winRef.current.id, { width: w, height: h }, { x, y })
      }
    }

    const onMouseUp = () => { dragState.current = null; resizeState.current = null }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, []) // empty deps — reads everything via refs

  const onTitleMouseDown = useCallback((e: React.MouseEvent) => {
    if (winRef.current.isMaximized) return
    if ((e.target as HTMLElement).closest('button')) return
    e.preventDefault()
    onFocusRef.current(winRef.current.id)
    dragState.current = {
      active: true,
      startMouseX: e.clientX, startMouseY: e.clientY,
      startWinX: winRef.current.position.x, startWinY: winRef.current.position.y,
    }
  }, [])

  const onResizeHandleMouseDown = useCallback((e: React.MouseEvent, edge: string) => {
    if (winRef.current.isMaximized) return
    e.preventDefault()
    e.stopPropagation()
    onFocusRef.current(winRef.current.id)
    resizeState.current = {
      active: true, edge,
      startMouseX: e.clientX, startMouseY: e.clientY,
      startWidth: winRef.current.size.width, startHeight: winRef.current.size.height,
      startX: winRef.current.position.x, startY: winRef.current.position.y,
    }
  }, [])

  const onTitleDoubleClick = useCallback(() => {
    onMaximize(winRef.current.id)
  }, [onMaximize])

  return { onTitleMouseDown, onResizeHandleMouseDown, onTitleDoubleClick }
}
