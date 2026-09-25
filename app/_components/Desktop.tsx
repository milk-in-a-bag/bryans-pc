"use client";

import { APPS } from "./types";
import type { AppId } from "./types";
import { useDesktopWindows } from "./useDesktopWindows";
import Window from "./Window";
import DesktopIcon from "./DesktopIcon";
import Taskbar from "./Taskbar";
import AboutApp from "./apps/AboutApp";
import ProjectsApp from "./apps/ProjectsApp";
import BlogApp from "./apps/BlogApp";
import ContactApp from "./apps/ContactApp";
import ResumeApp from "./apps/ResumeApp";

const APP_CONTENT: Record<AppId, React.ReactNode> = {
  about: <AboutApp />,
  projects: <ProjectsApp />,
  blog: <BlogApp />,
  contact: <ContactApp />,
  resume: <ResumeApp />,
};

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
    <div
      className="relative w-full h-full overflow-hidden select-none"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
        }
      }}
    >
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
      <div className="absolute top-6 left-6 flex flex-col gap-1">
        {APPS.map((app) => (
          <DesktopIcon
            key={app.id}
            app={app}
            isOpen={openAppIds.has(app.id)}
            onOpen={openApp}
          />
        ))}
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
