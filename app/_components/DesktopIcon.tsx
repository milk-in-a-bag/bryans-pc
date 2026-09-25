"use client";

import { useRef, useCallback } from "react";
import type { AppConfig } from "./types";

interface DesktopIconProps {
  app: AppConfig;
  isOpen: boolean;
  onOpen: (appId: AppConfig["id"]) => void;
}

export default function DesktopIcon({ app, isOpen, onOpen }: DesktopIconProps) {
  const lastClickTime = useRef(0);

  // Double-click detection that works on both desktop and touch
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
      className={`
        group flex flex-col items-center gap-1.5 p-2 rounded-lg w-20
        transition-colors duration-100 cursor-default select-none
        hover:bg-white/10 active:bg-white/20
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50
      `}
      aria-label={`Open ${app.title}`}
    >
      {/* Icon */}
      <div className="relative flex items-center justify-center w-12 h-12">
        <span className="text-4xl leading-none drop-shadow-md">{app.icon}</span>
      </div>
      {/* Label */}
      <span
        className={`
          text-[11px] font-medium text-center leading-tight text-white
          drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] max-w-full truncate w-full
          px-0.5
        `}
      >
        {app.title}
      </span>
    </button>
  );
}
