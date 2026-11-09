"use client";

import { useState } from "react";
import Image from "next/image";
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
        background: "rgba(15,15,15,0.55)",
        backdropFilter: "blur(40px) saturate(200%) brightness(0.9)",
        WebkitBackdropFilter: "blur(40px) saturate(200%) brightness(0.9)",
        borderTop: "1px solid rgba(255,255,255,0.12)",
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
          <Image
            src="/icons/windows.png"
            width={22}
            height={22}
            alt="Start"
            draggable={false}
          />
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
            width: 220,
            padding: "0 14px",
            borderRadius: 20,
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
