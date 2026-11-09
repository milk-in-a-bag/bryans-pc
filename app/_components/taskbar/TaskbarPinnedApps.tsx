"use client";

import Image from "next/image";
import type { AppId, WindowState } from "../types";

interface Props {
  openAppIds: Set<AppId>;
  windows: WindowState[];
  activeWindowId: string | null;
  onOpen: (id: AppId) => void;
  onTaskbarClick: (id: string) => void;
}

export default function TaskbarPinnedApps({
  windows,
  activeWindowId,
  onOpen,
  onTaskbarClick,
}: Props) {
  const explorerAppId: AppId = "projects";
  const win = windows.find((w) => w.appId === explorerAppId);
  const isActive = !!win && win.id === activeWindowId && !win.isMinimized;

  const handleClick = () => {
    if (win) onTaskbarClick(win.id);
    else onOpen(explorerAppId);
  };

  return (
    <button
      onClick={handleClick}
      title="File Explorer"
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
      <Image
        src="/icons/file-explorer.png"
        width={24}
        height={24}
        alt="File Explorer"
        style={{ objectFit: "contain" }}
      />
      {win && (
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
}
