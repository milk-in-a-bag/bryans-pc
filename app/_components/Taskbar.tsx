"use client";

import { useState, useEffect } from "react";
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
  const [weather, setWeather] = useState<{
    temp: number | null;
    condition: string;
  } | null>(null);

  useEffect(() => {
    fetch("/api/weather")
      .then((r) => r.json())
      .then((d) => setWeather({ temp: d.temp, condition: d.condition }))
      .catch(() => setWeather({ temp: null, condition: "Unavailable" }));
  }, []);

  const condition = weather?.condition ?? "...";
  const temp = weather?.temp != null ? `${weather.temp}°F` : "—";

  // Pick icon based on condition
  const isRainy =
    condition.includes("Rain") ||
    condition.includes("Shower") ||
    condition.includes("Drizzle");
  const isCloudy = condition.includes("Cloud") || condition.includes("Fog");
  const isStormy = condition.includes("Thunder");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "0 12px",
        height: 40,
        borderRadius: 6,
        cursor: "default",
        flexShrink: 0,
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      {/* Weather icon */}
      {isStormy ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="1.8"
          strokeLinecap="round"
          style={{ flexShrink: 0 }}
        >
          <path d="M19 16.9A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
          <polyline points="13 11 9 17 15 17 11 23" stroke="#fbbf24" />
        </svg>
      ) : isRainy ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="1.8"
          strokeLinecap="round"
          style={{ flexShrink: 0 }}
        >
          <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
          <line x1="8" y1="19" x2="8" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <line x1="16" y1="19" x2="16" y2="21" />
        </svg>
      ) : isCloudy ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.8"
          strokeLinecap="round"
          style={{ flexShrink: 0 }}
        >
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.8"
          strokeLinecap="round"
          style={{ flexShrink: 0 }}
        >
          <circle cx="12" cy="12" r="4" fill="#fbbf24" />
          <path
            d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            stroke="#fbbf24"
          />
        </svg>
      )}

      <div
        style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          {temp}
        </span>
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>
          {condition}
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
      <TaskbarClock />
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
