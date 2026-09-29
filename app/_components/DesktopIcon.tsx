"use client";

import { useRef, useCallback } from "react";
import type { AppConfig } from "./types";

function AboutIcon() {
  return (
    <svg viewBox="0 0 48 48" width="44" height="44" fill="#0078d4">
      <path d="M24 4a10 10 0 1 0 0 20 10 10 0 0 0 0-20M12.25 28A4.25 4.25 0 0 0 8 32.25V33c0 3.76 1.94 6.57 4.92 8.38C15.85 43.16 19.79 44 24 44s8.15-.84 11.08-2.62C38.06 39.57 40 36.76 40 33v-.75C40 29.9 38.1 28 35.75 28z" />
    </svg>
  );
}
function FolderIcon() {
  return (
    <svg viewBox="0 0 48 48" width="44" height="44" fill="#e8a838">
      <path d="M4 12.25C4 8.8 6.8 6 10.25 6h6.46c1 0 1.95.4 2.66 1.1l3.38 3.38-5.15 5.15q-.37.37-.89.37H4zm0 6.25v16.25C4 38.2 6.8 41 10.25 41h27.5C41.2 41 44 38.2 44 34.75v-17.5C44 13.8 41.2 11 37.75 11H25.77l-6.4 6.4c-.7.7-1.66 1.1-2.66 1.1z" />
    </svg>
  );
}
function ContactIcon() {
  return (
    <svg viewBox="0 0 48 48" width="44" height="44" fill="#0078d4">
      <path d="M4.02 13.75A6.25 6.25 0 0 1 10.25 8h27.5a6.25 6.25 0 0 1 6.24 5.83L24 24.35zM4 16.57v17.18C4 37.2 6.8 40 10.25 40h27.5C41.2 40 44 37.2 44 33.75v-17.1L24.58 26.87c-.36.2-.8.2-1.17 0z" />
    </svg>
  );
}
function ResumeIcon() {
  return (
    <svg viewBox="0 0 48 48" width="44" height="44">
      <path
        d="M24 4H12.25A4.25 4.25 0 0 0 8 8.25v31.5C8 42.1 9.9 44 12.25 44h23.5C38.1 44 40 42.1 40 39.75V20H28.25A4.25 4.25 0 0 1 24 15.75zm15.63 13.5q-.31-.71-.87-1.26l-11-11q-.56-.55-1.26-.87v11.38c0 .97.78 1.75 1.75 1.75z"
        fill="#c8c8c8"
      />
      <rect x="6" y="30" width="20" height="13" rx="2" fill="#d13438" />
      <text
        x="16"
        y="40.5"
        textAnchor="middle"
        fontSize="7"
        fontWeight="700"
        fill="white"
        fontFamily="Arial,sans-serif"
      >
        PDF
      </text>
    </svg>
  );
}

export function ThisPCIcon() {
  return (
    <svg viewBox="0 0 48 48" width="44" height="44" fill="#0078d4">
      <path d="M8 12.25C8 9.9 9.9 8 12.25 8h23.5C38.1 8 40 9.9 40 12.25v15.5C40 30.1 38.1 32 35.75 32h-23.5A4.25 4.25 0 0 1 8 27.75zM5.25 35.5a1.25 1.25 0 1 0 0 2.5h37.5a1.25 1.25 0 1 0 0-2.5z" />
    </svg>
  );
}
export function RecycleBinIcon() {
  return (
    <svg viewBox="0 0 48 48" width="44" height="44" fill="#0078d4">
      <path d="M20 10.5v.5h8v-.5a4 4 0 0 0-8 0m-2.5.5v-.5a6.5 6.5 0 1 1 13 0v.5h11.25a1.25 1.25 0 1 1 0 2.5h-2.92l-2 23.86A7.25 7.25 0 0 1 29.61 44H18.39a7.25 7.25 0 0 1-7.22-6.64l-2-23.86H6.25a1.25 1.25 0 1 1 0-2.5zm4 9.25a1.25 1.25 0 1 0-2.5 0v14.5a1.25 1.25 0 1 0 2.5 0zM27.75 19c-.69 0-1.25.56-1.25 1.25v14.5a1.25 1.25 0 1 0 2.5 0v-14.5c0-.69-.56-1.25-1.25-1.25" />
    </svg>
  );
}

const ICONS: Record<string, React.ReactNode> = {
  about: <AboutIcon />,
  projects: <FolderIcon />,
  blog: <FolderIcon />,
  contact: <ContactIcon />,
  resume: <ResumeIcon />,
  recycle: <RecycleBinIcon />,
};

// ── Inline icon for window chrome (tab + breadcrumb) ─────────────────────────
export function AppIcon({
  appId,
  size = 14,
}: {
  appId: string;
  size?: number;
}) {
  const icons: Record<string, React.ReactNode> = {
    about: (
      <svg viewBox="0 0 48 48" width={size} height={size} fill="#0078d4">
        <path d="M24 4a10 10 0 1 0 0 20 10 10 0 0 0 0-20M12.25 28A4.25 4.25 0 0 0 8 32.25V33c0 3.76 1.94 6.57 4.92 8.38C15.85 43.16 19.79 44 24 44s8.15-.84 11.08-2.62C38.06 39.57 40 36.76 40 33v-.75C40 29.9 38.1 28 35.75 28z" />
      </svg>
    ),
    projects: (
      <svg viewBox="0 0 48 48" width={size} height={size} fill="#e8a838">
        <path d="M4 12.25C4 8.8 6.8 6 10.25 6h6.46c1 0 1.95.4 2.66 1.1l3.38 3.38-5.15 5.15q-.37.37-.89.37H4zm0 6.25v16.25C4 38.2 6.8 41 10.25 41h27.5C41.2 41 44 38.2 44 34.75v-17.5C44 13.8 41.2 11 37.75 11H25.77l-6.4 6.4c-.7.7-1.66 1.1-2.66 1.1z" />
      </svg>
    ),
    blog: (
      <svg viewBox="0 0 48 48" width={size} height={size} fill="#e8a838">
        <path d="M4 12.25C4 8.8 6.8 6 10.25 6h6.46c1 0 1.95.4 2.66 1.1l3.38 3.38-5.15 5.15q-.37.37-.89.37H4zm0 6.25v16.25C4 38.2 6.8 41 10.25 41h27.5C41.2 41 44 38.2 44 34.75v-17.5C44 13.8 41.2 11 37.75 11H25.77l-6.4 6.4c-.7.7-1.66 1.1-2.66 1.1z" />
      </svg>
    ),
    contact: (
      <svg viewBox="0 0 48 48" width={size} height={size} fill="#0078d4">
        <path d="M4.02 13.75A6.25 6.25 0 0 1 10.25 8h27.5a6.25 6.25 0 0 1 6.24 5.83L24 24.35zM4 16.57v17.18C4 37.2 6.8 40 10.25 40h27.5C41.2 40 44 37.2 44 33.75v-17.1L24.58 26.87c-.36.2-.8.2-1.17 0z" />
      </svg>
    ),
    resume: (
      <svg viewBox="0 0 48 48" width={size} height={size}>
        <path
          d="M24 4H12.25A4.25 4.25 0 0 0 8 8.25v31.5C8 42.1 9.9 44 12.25 44h23.5C38.1 44 40 42.1 40 39.75V20H28.25A4.25 4.25 0 0 1 24 15.75zm15.63 13.5q-.31-.71-.87-1.26l-11-11q-.56-.55-1.26-.87v11.38c0 .97.78 1.75 1.75 1.75z"
          fill="#c8c8c8"
        />
      </svg>
    ),
    recycle: (
      <svg viewBox="0 0 48 48" width={size} height={size} fill="#0078d4">
        <path d="M20 10.5v.5h8v-.5a4 4 0 0 0-8 0m-2.5.5v-.5a6.5 6.5 0 1 1 13 0v.5h11.25a1.25 1.25 0 1 1 0 2.5h-2.92l-2 23.86A7.25 7.25 0 0 1 29.61 44H18.39a7.25 7.25 0 0 1-7.22-6.64l-2-23.86H6.25a1.25 1.25 0 1 1 0-2.5zm4 9.25a1.25 1.25 0 1 0-2.5 0v14.5a1.25 1.25 0 1 0 2.5 0zM27.75 19c-.69 0-1.25.56-1.25 1.25v14.5a1.25 1.25 0 1 0 2.5 0v-14.5c0-.69-.56-1.25-1.25-1.25" />
      </svg>
    ),
  };
  return <>{icons[appId] ?? null}</>;
}

// ── Desktop icon component ────────────────────────────────────────────────────
interface DesktopIconProps {
  app: AppConfig;
  isOpen: boolean;
  onOpen: (appId: AppConfig["id"]) => void;
}

const SYSTEM_ICONS = new Set(["recycle"]);

export default function DesktopIcon({
  app,
  isOpen: _isOpen,
  onOpen,
}: DesktopIconProps) {
  const lastClickTime = useRef(0);

  const handleClick = useCallback(() => {
    const now = Date.now();
    if (now - lastClickTime.current < 400) {
      onOpen(app.id);
      lastClickTime.current = 0;
    } else {
      lastClickTime.current = now;
    }
  }, [app.id, onOpen]);

  return (
    <button
      onClick={handleClick}
      className="group flex flex-col items-center gap-1.5 p-2 rounded-lg w-20 transition-colors duration-100 cursor-default select-none hover:bg-white/10 active:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
      aria-label={`Open ${app.title}`}
    >
      <div className="flex items-center justify-center w-12 h-12 drop-shadow-lg relative">
        {ICONS[app.id] ?? (
          <span className="text-4xl leading-none">{app.icon}</span>
        )}
        {/* Shortcut arrow — not shown for system icons */}
        {!SYSTEM_ICONS.has(app.id) && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 16,
              height: 16,
              background: "#1a1a1a",
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="white"
              opacity="0.9"
            >
              <path d="M1 10V4.5h1.8V8.2H6.5V10H1ZM5 1h5v5L8.3 4.3 5.7 7 4 5.3l2.7-2.7L5 1Z" />
            </svg>
          </div>
        )}
      </div>
      <span className="text-[11px] font-medium text-center leading-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] max-w-full truncate w-full px-0.5">
        {app.title}
      </span>
    </button>
  );
}
