"use client";

import { useRef } from "react";

export interface FileItem {
  name: string;
  text: string;
}

// Clean document icon — same style as Resume but no badge
function DocIcon() {
  return (
    <svg width="48" height="56" viewBox="0 0 48 56" fill="none">
      <rect x="4" y="2" width="36" height="46" rx="2" fill="#c8c8c8" />
      <path d="M32 2l8 8H32V2Z" fill="#a8a8a8" />
      <rect x="10" y="18" width="20" height="2" rx="1" fill="#888" />
      <rect x="10" y="24" width="24" height="2" rx="1" fill="#aaa" />
      <rect x="10" y="30" width="18" height="2" rx="1" fill="#aaa" />
      <rect x="10" y="36" width="22" height="2" rx="1" fill="#aaa" />
    </svg>
  );
}

function FileIcon({
  item,
  onOpen,
}: {
  item: FileItem;
  onOpen: (f: FileItem) => void;
}) {
  const lastClick = useRef(0);

  const handleClick = () => {
    const now = Date.now();
    if (now - lastClick.current < 400) {
      onOpen(item);
      lastClick.current = 0;
    } else {
      lastClick.current = now;
    }
  };

  return (
    <button
      onClick={handleClick}
      title="Double-click to open"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        padding: "12px 8px",
        width: 90,
        background: "none",
        border: "none",
        cursor: "pointer",
        borderRadius: 4,
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = "rgba(255,255,255,0.07)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
    >
      <DocIcon />
      <span
        style={{
          fontSize: 11,
          color: "rgba(255,255,255,0.8)",
          textAlign: "center",
          lineHeight: 1.3,
          wordBreak: "break-word",
          maxWidth: 80,
        }}
      >
        {item.name}
      </span>
    </button>
  );
}

interface FileGridProps {
  files: FileItem[];
  label: string;
  onOpenFile: (file: FileItem) => void;
}

export default function FileGrid({ files, label, onOpenFile }: FileGridProps) {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            alignContent: "flex-start",
          }}
        >
          {files.map((f) => (
            <FileIcon key={f.name} item={f} onOpen={onOpenFile} />
          ))}
        </div>
      </div>
      <div
        style={{
          height: 24,
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
          background: "#1a1a1a",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
          {files.length} {label}
        </span>
      </div>
    </div>
  );
}
