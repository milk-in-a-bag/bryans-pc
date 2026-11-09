"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import type { AppConfig } from "./types";

function FolderImg({ size }: { size: number }) {
  return (
    <Image
      src="/icons/folder.png"
      width={size}
      height={size}
      alt="Folder"
      style={{ objectFit: "contain" }}
    />
  );
}

function AboutIcon() {
  return (
    <svg viewBox="0 0 48 48" width="44" height="44" fill="#0078d4">
      <path d="M24 4a10 10 0 1 0 0 20 10 10 0 0 0 0-20M12.25 28A4.25 4.25 0 0 0 8 32.25V33c0 3.76 1.94 6.57 4.92 8.38C15.85 43.16 19.79 44 24 44s8.15-.84 11.08-2.62C38.06 39.57 40 36.76 40 33v-.75C40 29.9 38.1 28 35.75 28z" />
    </svg>
  );
}
function ContactIcon() {
  return (
    <Image
      src="/icons/mail.png"
      width={44}
      height={44}
      alt="Mail"
      style={{ objectFit: "contain" }}
    />
  );
}
function ResumeIcon() {
  return (
    <Image
      src="/icons/notepad.png"
      width={44}
      height={44}
      alt="Notepad"
      style={{ objectFit: "contain" }}
    />
  );
}
export function ThisPCIcon() {
  return (
    <Image
      src="/icons/pc.png"
      width={44}
      height={44}
      alt="This PC"
      style={{ objectFit: "contain" }}
    />
  );
}

// Uses real Win11 icons — empty by default since bin is always empty here
export function RecycleBinIcon({ full = false }: { full?: boolean }) {
  return (
    <Image
      src={
        full ? "/icons/recycle-bin-full.png" : "/icons/recycle-bin-empty.png"
      }
      width={44}
      height={44}
      alt="Recycle Bin"
      style={{ objectFit: "contain" }}
    />
  );
}

const ICONS: Record<string, React.ReactNode> = {
  about: <AboutIcon />,
  projects: <FolderImg size={44} />,
  blog: <FolderImg size={44} />,
  contact: <ContactIcon />,
  resume: <ResumeIcon />,
  recycle: <RecycleBinIcon />,
  pictures: (
    <Image
      src="/icons/pictures.png"
      width={44}
      height={44}
      alt="Pictures"
      style={{ objectFit: "contain" }}
    />
  ),
  music: <FolderImg size={44} />,
  documents: (
    <Image
      src="/icons/documents.png"
      width={44}
      height={44}
      alt="Documents"
      style={{ objectFit: "contain" }}
    />
  ),
};

// ── Inline icon for window chrome (tab + breadcrumb) ─────────────────────────
export function AppIcon({
  appId,
  size = 14,
}: {
  appId: string;
  size?: number;
}) {
  const folderApps = new Set(["projects", "blog", "music"]);
  if (appId === "pictures") {
    return (
      <Image
        src="/icons/pictures.png"
        width={size}
        height={size}
        alt="Pictures"
        style={{ objectFit: "contain" }}
      />
    );
  }
  if (appId === "documents") {
    return (
      <Image
        src="/icons/documents.png"
        width={size}
        height={size}
        alt="Documents"
        style={{ objectFit: "contain" }}
      />
    );
  }
  if (folderApps.has(appId)) {
    return (
      <Image
        src="/icons/folder.png"
        width={size}
        height={size}
        alt="Folder"
        style={{ objectFit: "contain" }}
      />
    );
  }
  if (appId === "recycle") {
    return (
      <Image
        src="/icons/recycle-bin-empty.png"
        width={size}
        height={size}
        alt="Recycle Bin"
        style={{ objectFit: "contain" }}
      />
    );
  }

  const svgIcons: Record<string, React.ReactNode> = {
    about: (
      <svg viewBox="0 0 48 48" width={size} height={size} fill="#0078d4">
        <path d="M24 4a10 10 0 1 0 0 20 10 10 0 0 0 0-20M12.25 28A4.25 4.25 0 0 0 8 32.25V33c0 3.76 1.94 6.57 4.92 8.38C15.85 43.16 19.79 44 24 44s8.15-.84 11.08-2.62C38.06 39.57 40 36.76 40 33v-.75C40 29.9 38.1 28 35.75 28z" />
      </svg>
    ),
    contact: (
      <Image
        src="/icons/mail.png"
        width={size}
        height={size}
        alt="Mail"
        style={{ objectFit: "contain" }}
      />
    ),
    resume: (
      <Image
        src="/icons/notepad.png"
        width={size}
        height={size}
        alt="Notepad"
        style={{ objectFit: "contain" }}
      />
    ),
  };
  return <>{svgIcons[appId] ?? null}</>;
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
        {!SYSTEM_ICONS.has(app.id) && (
          <Image
            src="/icons/shortcut.png"
            width={16}
            height={16}
            alt=""
            style={{ position: "absolute", bottom: 0, left: 0 }}
          />
        )}
      </div>
      <span className="text-[11px] font-medium text-center leading-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] max-w-full truncate w-full px-0.5">
        {app.title}
      </span>
    </button>
  );
}
