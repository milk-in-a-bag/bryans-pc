"use client";

import { useRef } from "react";
import { APPS } from "./types";
import type { AppId } from "./types";
import { useDesktopWindows } from "./useDesktopWindows";
import Window from "./Window";
import DesktopIcon, { ThisPCIcon } from "./DesktopIcon";
import Taskbar from "./Taskbar";
import AboutApp from "./apps/AboutApp";
import ProjectsApp from "./apps/ProjectsApp";
import BlogApp from "./apps/BlogApp";
import ContactApp from "./apps/ContactApp";
import ResumeApp from "./apps/ResumeApp";
import RecycleBinApp from "./apps/RecycleBinApp";
import PicturesApp from "./apps/PicturesApp";
import MusicApp from "./apps/MusicApp";
import DocumentsApp from "./apps/DocumentsApp";

const APP_CONTENT: Record<AppId, React.ReactNode> = {
  about: <AboutApp />,
  projects: <ProjectsApp />,
  blog: <BlogApp />,
  contact: <ContactApp />,
  resume: <ResumeApp />,
  recycle: <RecycleBinApp />,
  pictures: <PicturesApp />,
  music: <MusicApp />,
  documents: <DocumentsApp />,
};

// Apps shown as desktop icons (public folder subfolders are accessed via Public icon)
const DESKTOP_APP_IDS: AppId[] = [
  "about",
  "projects",
  "blog",
  "contact",
  "resume",
  "recycle",
];

function StaticDesktopIcon({
  id,
  label,
  icon,
  onDoubleClick,
}: {
  id: string;
  label: string;
  icon: React.ReactNode;
  onDoubleClick?: () => void;
}) {
  const lastClick = useRef(0);
  return (
    <button
      onClick={() => {
        const now = Date.now();
        if (now - lastClick.current < 400 && onDoubleClick) {
          onDoubleClick();
          lastClick.current = 0;
        } else {
          lastClick.current = now;
        }
      }}
      className="group flex flex-col items-center gap-1.5 p-2 rounded-lg w-20 transition-colors duration-100 cursor-default select-none hover:bg-white/10 active:bg-white/20 focus:outline-none"
      aria-label={id}
    >
      <div className="flex items-center justify-center w-12 h-12 drop-shadow-lg">
        {icon}
      </div>
      <span className="text-[11px] font-medium text-center leading-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] max-w-full truncate w-full px-0.5">
        {label}
      </span>
    </button>
  );
}

function PublicFolderIcon() {
  return (
    <svg viewBox="0 0 48 48" width="44" height="44" fill="none">
      {/* Folder shape */}
      <path
        d="M4 12.25C4 8.8 6.8 6 10.25 6h6.46c1 0 1.95.4 2.66 1.1l3.38 3.38-5.15 5.15q-.37.37-.89.37H4zm0 6.25v16.25C4 38.2 6.8 41 10.25 41h27.5C41.2 41 44 38.2 44 34.75v-17.5C44 13.8 41.2 11 37.75 11H25.77l-6.4 6.4c-.7.7-1.66 1.1-2.66 1.1z"
        fill="#e8a838"
      />
      {/* Person icon overlay */}
      <circle cx="30" cy="23" r="4" fill="white" opacity="0.9" />
      <path d="M22 35c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="white" opacity="0.9" />
    </svg>
  );
}

export default function Desktop() {
  const {
    windows,
    activeWindowId,
    openApp,
    focusWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    moveWindow,
    resizeWindow,
    handleTaskbarClick,
  } = useDesktopWindows();
  const openAppIds = new Set(windows.map((w) => w.appId));

  return (
    <div className="relative w-full h-full overflow-hidden select-none">
      {/* Wallpaper */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, #0f3460 0%, #16213e 45%, #0a0a1a 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Desktop icons */}
      <div
        className="absolute top-6 left-6 flex flex-col flex-wrap gap-1"
        style={{ maxHeight: "calc(100vh - 80px)" }}
      >
        {APPS.filter((app) => DESKTOP_APP_IDS.includes(app.id)).map((app) => (
          <DesktopIcon
            key={app.id}
            app={app}
            isOpen={openAppIds.has(app.id)}
            onOpen={openApp}
          />
        ))}
        <StaticDesktopIcon
          id="thispc"
          label="This PC"
          icon={<ThisPCIcon />}
          onDoubleClick={() => openApp("projects")}
        />
        <StaticDesktopIcon
          id="public"
          label="Public"
          icon={<PublicFolderIcon />}
          onDoubleClick={() => openApp("pictures")}
        />
      </div>

      {/* Windows */}
      {windows.map((win) => (
        <Window
          key={win.id}
          window={win}
          isActive={win.id === activeWindowId}
          onFocus={focusWindow}
          onClose={closeWindow}
          onMinimize={minimizeWindow}
          onMaximize={maximizeWindow}
          onMove={moveWindow}
          onResize={resizeWindow}
        >
          {APP_CONTENT[win.appId]}
        </Window>
      ))}

      <Taskbar
        windows={windows}
        activeWindowId={activeWindowId}
        onTaskbarClick={handleTaskbarClick}
        onOpenApp={openApp}
      />
    </div>
  );
}
