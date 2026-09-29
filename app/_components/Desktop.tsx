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

const APP_CONTENT: Record<AppId, React.ReactNode> = {
  about: <AboutApp />,
  projects: <ProjectsApp />,
  blog: <BlogApp />,
  contact: <ContactApp />,
  resume: <ResumeApp />,
  recycle: <RecycleBinApp />,
};

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
        {APPS.map((app) => (
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
