"use client";

import { useState } from "react";
import type { AppId, WindowState } from "./types";
import StartMenu from "./taskbar/StartMenu";
import TaskbarWindowButtons from "./taskbar/TaskbarWindowButtons";
import TaskbarTray from "./taskbar/TaskbarTray";

interface TaskbarProps {
  windows: WindowState[];
  activeWindowId: string | null;
  onTaskbarClick: (id: string) => void;
  onOpenApp: (appId: AppId) => void;
}

export default function Taskbar({
  windows,
  activeWindowId,
  onTaskbarClick,
  onOpenApp,
}: TaskbarProps) {
  const [startOpen, setStartOpen] = useState(false);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-12 z-[9999] flex items-center px-2 gap-1"
      style={{
        background: "rgba(28,28,28,0.92)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {startOpen && (
        <StartMenu onOpen={onOpenApp} onClose={() => setStartOpen(false)} />
      )}

      {/* Start button */}
      <button
        onClick={() => setStartOpen((v) => !v)}
        aria-label="Start menu"
        aria-expanded={startOpen}
        className={`w-10 h-10 flex items-center justify-center rounded transition-colors shrink-0 ${startOpen ? "bg-white/15" : "hover:bg-white/10 active:bg-white/20"}`}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect
            x="0"
            y="0"
            width="8"
            height="8"
            rx="1"
            fill="white"
            opacity={startOpen ? 1 : 0.85}
          />
          <rect
            x="10"
            y="0"
            width="8"
            height="8"
            rx="1"
            fill="white"
            opacity={startOpen ? 1 : 0.85}
          />
          <rect
            x="0"
            y="10"
            width="8"
            height="8"
            rx="1"
            fill="white"
            opacity={startOpen ? 1 : 0.85}
          />
          <rect
            x="10"
            y="10"
            width="8"
            height="8"
            rx="1"
            fill="white"
            opacity={startOpen ? 1 : 0.85}
          />
        </svg>
      </button>

      {/* Search pill */}
      <button
        onClick={() => setStartOpen(true)}
        className="flex items-center gap-2 h-8 px-3 rounded-md bg-white/[0.08] hover:bg-white/[0.11] transition-colors w-44 shrink-0"
        aria-label="Search"
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-white/40 shrink-0"
        >
          <circle cx="9" cy="9" r="6" />
          <path d="M15 15l3.5 3.5" />
        </svg>
        <span className="text-[12px] text-white/35">Search</span>
      </button>

      <div className="w-px h-5 bg-white/10 mx-1 shrink-0" />

      <TaskbarWindowButtons
        windows={windows}
        activeWindowId={activeWindowId}
        onTaskbarClick={onTaskbarClick}
      />
      <TaskbarTray />
    </div>
  );
}
