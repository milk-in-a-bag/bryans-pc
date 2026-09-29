"use client";

import { useState } from "react";
import type { AppId, WindowState } from "./types";
import StartMenu from "./taskbar/StartMenu";
import WeatherWidget from "./taskbar/WeatherWidget";
import TaskbarSystemTray from "./taskbar/TaskbarSystemTray";
import TaskbarPinnedApps from "./taskbar/TaskbarPinnedApps";

interface TaskbarProps {
  windows: WindowState[];
  activeWindowId: string | null;
  onTaskbarClick: (id: string) => void;
  onOpenApp: (appId: AppId) => void;
}

function WindowsLogo({ active }: { active: boolean }) {
  const o = active ? 1 : 0.9;
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M0 2.2L6.5 1.3V7.5H0V2.2Z" fill={`rgba(0,188,242,${o})`} />
      <path d="M7.3 1.2L16 0V7.5H7.3V1.2Z" fill={`rgba(0,188,242,${o})`} />
      <path d="M0 8.5H6.5V14.7L0 13.8V8.5Z" fill={`rgba(0,188,242,${o})`} />
      <path d="M7.3 8.5H16V16L7.3 14.8V8.5Z" fill={`rgba(0,188,242,${o})`} />
    </svg>
  );
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
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 48,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        background: "rgba(20,20,20,0.94)",
        backdropFilter: "blur(20px) saturate(180%)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "0 4px",
      }}
    >
      {startOpen && (
        <StartMenu onOpen={onOpenApp} onClose={() => setStartOpen(false)} />
      )}

      <WeatherWidget />

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {/* Start button */}
        <button
          onClick={() => setStartOpen((v) => !v)}
          aria-label="Start menu"
          aria-expanded={startOpen}
          style={{
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 6,
            background: startOpen ? "rgba(255,255,255,0.12)" : "none",
            border: "none",
            cursor: "pointer",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            if (!startOpen)
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(255,255,255,0.09)";
          }}
          onMouseLeave={(e) => {
            if (!startOpen)
              (e.currentTarget as HTMLButtonElement).style.background = "none";
          }}
        >
          <WindowsLogo active={startOpen} />
        </button>

        {/* Search pill */}
        <button
          onClick={() => setStartOpen(true)}
          aria-label="Search"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            height: 34,
            width: 200,
            padding: "0 12px",
            borderRadius: 6,
            background: "rgba(255,255,255,0.08)",
            border: "none",
            cursor: "pointer",
            flexShrink: 0,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.12)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
          }
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ color: "rgba(255,255,255,0.45)", flexShrink: 0 }}
          >
            <circle cx="9" cy="9" r="6" />
            <path d="M15 15l3.5 3.5" />
          </svg>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
            Search
          </span>
        </button>

        <div
          style={{
            width: 1,
            height: 20,
            background: "rgba(255,255,255,0.1)",
            margin: "0 4px",
            flexShrink: 0,
          }}
        />

        <TaskbarPinnedApps
          openAppIds={new Set(windows.map((w) => w.appId))}
          windows={windows}
          activeWindowId={activeWindowId}
          onOpen={onOpenApp}
          onTaskbarClick={onTaskbarClick}
        />
      </div>

      <TaskbarSystemTray />
    </div>
  );
}
