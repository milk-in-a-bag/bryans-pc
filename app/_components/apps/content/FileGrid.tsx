"use client";

import { useRef } from "react";

export interface FileItem {
  name: string;
  ext?: string;
  text: string;
}

// ── Document icon ─────────────────────────────────────────────────────────────
function DocIcon({ ext = "TXT" }: { ext?: string }) {
  return (
    <svg width="48" height="56" viewBox="0 0 48 56" fill="none">
      <rect
        x="4"
        y="2"
        width="36"
        height="46"
        rx="2"
        fill="#2d2d2d"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
      />
      <path
        d="M32 2l8 8H32V2Z"
        fill="#3a3a3a"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
      />
      <rect
        x="10"
        y="18"
        width="20"
        height="1.5"
        rx="0.75"
        fill="rgba(255,255,255,0.25)"
      />
      <rect
        x="10"
        y="23"
        width="24"
        height="1.5"
        rx="0.75"
        fill="rgba(255,255,255,0.25)"
      />
      <rect
        x="10"
        y="28"
        width="18"
        height="1.5"
        rx="0.75"
        fill="rgba(255,255,255,0.25)"
      />
      <rect
        x="10"
        y="33"
        width="22"
        height="1.5"
        rx="0.75"
        fill="rgba(255,255,255,0.25)"
      />
      <rect x="8" y="38" width="22" height="8" rx="1" fill="#0078d4" />
      <text
        x="19"
        y="45"
        textAnchor="middle"
        fontSize="5.5"
        fontWeight="700"
        fill="white"
        fontFamily="Arial,sans-serif"
      >
        {ext}
      </text>
    </svg>
  );
}

// ── Single file icon ──────────────────────────────────────────────────────────
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
      <DocIcon ext={item.ext ?? "TXT"} />
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

// ── Grid ──────────────────────────────────────────────────────────────────────
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
