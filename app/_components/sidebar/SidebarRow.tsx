"use client";

import { PinIcon } from "./SidebarIcons";

interface SidebarRowProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  pinned?: boolean;
  indent?: boolean;
  onClick?: () => void;
}

export function SidebarRow({
  icon,
  label,
  active,
  pinned,
  indent,
  onClick,
}: SidebarRowProps) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: 32,
        width: "calc(100% - 8px)",
        paddingLeft: indent ? 20 : 12,
        paddingRight: 8,
        marginLeft: 4,
        marginRight: 4,
        borderRadius: 6,
        border: "none",
        cursor: onClick ? "pointer" : "default",
        textAlign: "left",
        flexShrink: 0,
        background: active ? "rgba(255,255,255,0.1)" : "none",
        color: active ? "white" : "rgba(255,255,255,0.65)",
        transition: "background 0.12s, color 0.12s",
      }}
      onMouseEnter={(e) => {
        if (!active) {
          const b = e.currentTarget;
          b.style.background = "rgba(255,255,255,0.07)";
          b.style.color = "rgba(255,255,255,0.9)";
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          const b = e.currentTarget;
          b.style.background = "none";
          b.style.color = "rgba(255,255,255,0.65)";
        }
      }}
    >
      <span
        style={{
          flexShrink: 0,
          color: active ? "#60cdff" : "rgba(255,255,255,0.5)",
          display: "flex",
        }}
      >
        {icon}
      </span>
      <span
        style={{
          fontSize: 12,
          flex: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      {pinned && <PinIcon />}
    </button>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: "10px 16px 4px" }}>
      <span
        style={{
          fontSize: 10,
          fontWeight: 600,
          color: "rgba(255,255,255,0.3)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        {children}
      </span>
    </div>
  );
}

export function TreeSection({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          padding: "0 8px",
          height: 28,
        }}
      >
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="currentColor"
          style={{
            color: "rgba(255,255,255,0.25)",
            flexShrink: 0,
            transform: "rotate(90deg)",
          }}
        >
          <path d="M2 1.5l4 2.5-4 2.5V1.5z" />
        </svg>
        <span
          style={{
            color: "rgba(255,255,255,0.4)",
            flexShrink: 0,
            display: "flex",
          }}
        >
          {icon}
        </span>
        <span
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.45)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}
