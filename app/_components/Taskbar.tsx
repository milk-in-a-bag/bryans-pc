"use client";

import { useState } from "react";
import type { AppId, WindowState } from "./types";
import { APPS } from "./types";
import StartMenu from "./taskbar/StartMenu";
import TaskbarClock from "./taskbar/TaskbarClock";

interface TaskbarProps {
  windows: WindowState[];
  activeWindowId: string | null;
  onTaskbarClick: (id: string) => void;
  onOpenApp: (appId: AppId) => void;
}

// ── Win11-style colored Windows logo ─────────────────────────────────────────
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

// ── Weather widget ────────────────────────────────────────────────────────────
function WeatherWidget() {
  return (
    <div
      className="flex items-center gap-2 px-3 h-10 shrink-0 cursor-default select-none"
      style={{ borderRadius: 6 }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      {/* Sun icon */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        style={{ color: "#fbbf24", flexShrink: 0 }}
      >
        <circle cx="12" cy="12" r="4" fill="#fbbf24" stroke="none" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
      <div className="flex flex-col leading-tight">
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          80°F
        </span>
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>
          Sunny
        </span>
      </div>
    </div>
  );
}

// ── System tray ───────────────────────────────────────────────────────────────
function SystemTray() {
  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: 0, flexShrink: 0 }}
    >
      {/* Chevron */}
      <button
        style={{
          width: 24,
          height: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "rgba(255,255,255,0.5)",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
        aria-label="Show hidden icons"
      >
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        >
          <path d="M1.5 5.5l2.5-3 2.5 3" />
        </svg>
      </button>

      {/* Network + Volume + Battery pill */}
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "0 8px",
          height: 36,
          background: "none",
          border: "none",
          cursor: "pointer",
          borderRadius: 4,
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
        aria-label="Network, sound, battery"
      >
        {/* Wifi */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M1.5 8.5C5.25 4.75 10.35 2.5 12 2.5s6.75 2.25 10.5 6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M5 12c1.9-1.9 4.3-3 7-3s5.1 1.1 7 3"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.65"
          />
          <path
            d="M8.5 15.5c.9-.9 2.2-1.5 3.5-1.5s2.6.6 3.5 1.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.8"
          />
          <circle cx="12" cy="19" r="1.5" fill="white" opacity="0.95" />
        </svg>
        {/* Volume */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M11 5L6 9H2v6h4l5 4V5z" fill="white" opacity="0.8" />
          <path
            d="M15.5 8.5c1.2 1.2 2 2.8 2 4.5s-.8 3.3-2 4.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>
        {/* Battery */}
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
          <rect
            x="0.5"
            y="0.5"
            width="13"
            height="10"
            rx="1.5"
            stroke="white"
            strokeOpacity="0.7"
            strokeWidth="1"
          />
          <rect
            x="14"
            y="3.5"
            width="1.5"
            height="4"
            rx="0.75"
            fill="white"
            fillOpacity="0.5"
          />
          <rect
            x="2"
            y="2"
            width="8"
            height="7"
            rx="0.5"
            fill="white"
            fillOpacity="0.85"
          />
        </svg>
      </button>

      {/* Clock */}
      <TaskbarClock />

      {/* Notification bell */}
      <button
        style={{
          width: 32,
          height: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "rgba(255,255,255,0.6)",
          borderRadius: 4,
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
        aria-label="Notifications"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      </button>
    </div>
  );
}

// ── Pinned app icons ──────────────────────────────────────────────────────────
// Clicking an open app focuses/toggles it; clicking a closed one opens it.
function PinnedApps({
  openAppIds,
  windows,
  activeWindowId,
  onOpen,
  onTaskbarClick,
}: {
  openAppIds: Set<AppId>;
  windows: WindowState[];
  activeWindowId: string | null;
  onOpen: (id: AppId) => void;
  onTaskbarClick: (id: string) => void;
}) {
  return (
    <>
      {APPS.map((app) => {
        const win = windows.find((w) => w.appId === app.id);
        const isOpen = !!win;
        const isActive = !!win && win.id === activeWindowId && !win.isMinimized;

        const handleClick = () => {
          if (win) {
            onTaskbarClick(win.id); // focus or toggle-minimize
          } else {
            onOpen(app.id);
          }
        };

        return (
          <button
            key={app.id}
            onClick={handleClick}
            title={app.title}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: 6,
              flexShrink: 0,
              background: isActive ? "rgba(255,255,255,0.12)" : "none",
              border: "none",
              cursor: "pointer",
              fontSize: 20,
            }}
            onMouseEnter={(e) => {
              if (!isActive)
                (e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = isActive
                ? "rgba(255,255,255,0.12)"
                : "none";
            }}
          >
            {app.icon}
            {isOpen && (
              <span
                style={{
                  position: "absolute",
                  bottom: 2,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: isActive ? 16 : 4,
                  height: 3,
                  borderRadius: 2,
                  background: isActive ? "#60cdff" : "rgba(255,255,255,0.5)",
                  transition: "width 0.15s",
                }}
              />
            )}
          </button>
        );
      })}
    </>
  );
}

// ── Taskbar ───────────────────────────────────────────────────────────────────
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

      {/* Far left — weather */}
      <WeatherWidget />

      {/* Center group — start + search + pinned + open windows */}
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

        {/* Separator */}
        <div
          style={{
            width: 1,
            height: 20,
            background: "rgba(255,255,255,0.1)",
            margin: "0 4px",
            flexShrink: 0,
          }}
        />

        {/* Pinned app icons */}
        <PinnedApps
          openAppIds={new Set(windows.map((w) => w.appId))}
          windows={windows}
          activeWindowId={activeWindowId}
          onOpen={onOpenApp}
          onTaskbarClick={onTaskbarClick}
        />
      </div>

      {/* Far right — system tray */}
      <SystemTray />
    </div>
  );
}
