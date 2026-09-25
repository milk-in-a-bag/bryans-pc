"use client";

interface WindowTitleBarProps {
  icon: string;
  title: string;
  isActive: boolean;
  isMaximized: boolean;
  onMouseDown: (e: React.MouseEvent) => void;
  onDoubleClick: () => void;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
}

const captionIconColor = (active: boolean) =>
  active ? "rgba(255,255,255,0.82)" : "rgba(255,255,255,0.35)";

export default function WindowTitleBar({
  icon,
  title,
  isActive,
  isMaximized,
  onMouseDown,
  onDoubleClick,
  onClose,
  onMinimize,
  onMaximize,
}: WindowTitleBarProps) {
  const ic = captionIconColor(isActive);

  return (
    <div
      style={{
        background: "#1a1a1a",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        height: 36,
        display: "flex",
        alignItems: "flex-end",
        paddingLeft: 8,
        flexShrink: 0,
      }}
      onMouseDown={onMouseDown}
      onDoubleClick={onDoubleClick}
    >
      {/* Tab */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "0 12px",
          height: 30,
          borderRadius: "6px 6px 0 0",
          background: isActive ? "#2b2b2b" : "transparent",
          maxWidth: 240,
          minWidth: 0,
        }}
      >
        <span
          style={{
            fontSize: 15,
            lineHeight: 1,
            flexShrink: 0,
            opacity: isActive ? 1 : 0.5,
          }}
        >
          {icon}
        </span>
        <span
          style={{
            fontSize: 13,
            fontWeight: 500,
            color: isActive ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            lineHeight: 1,
          }}
        >
          {title}
        </span>
        <button
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label={`Close ${title}`}
          style={{
            width: 18,
            height: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            marginLeft: 2,
            flexShrink: 0,
            opacity: isActive ? 0.7 : 0.4,
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "white",
          }}
          onMouseEnter={(e) => {
            const b = e.currentTarget as HTMLButtonElement;
            b.style.background = "rgba(255,255,255,0.15)";
            b.style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            const b = e.currentTarget as HTMLButtonElement;
            b.style.background = "none";
            b.style.opacity = isActive ? "0.7" : "0.4";
          }}
        >
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          >
            <path d="M1 1l7 7M8 1l-7 7" />
          </svg>
        </button>
      </div>

      {/* Spacer — draggable area */}
      <div style={{ flex: 1, height: "100%" }} />

      {/* Caption buttons */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignSelf: "flex-start",
          height: 32,
          flexShrink: 0,
        }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Minimize */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onMinimize();
          }}
          aria-label="Minimize"
          style={{
            width: 46,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background = isActive
              ? "rgba(255,255,255,0.09)"
              : "rgba(255,255,255,0.05)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background = "none")
          }
        >
          <svg width="10" height="1" viewBox="0 0 10 1">
            <rect width="10" height="1" fill={ic} />
          </svg>
        </button>
        {/* Maximize/Restore */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onMaximize();
          }}
          aria-label={isMaximized ? "Restore" : "Maximize"}
          style={{
            width: 46,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background = isActive
              ? "rgba(255,255,255,0.09)"
              : "rgba(255,255,255,0.05)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background = "none")
          }
        >
          {isMaximized ? (
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              stroke={ic}
              strokeWidth="1"
            >
              <rect x="2.5" y="0.5" width="8" height="8" />
              <path d="M0.5 2.5v8h8" />
            </svg>
          ) : (
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              stroke={ic}
              strokeWidth="1"
            >
              <rect x="0.5" y="0.5" width="9" height="9" />
            </svg>
          )}
        </button>
        {/* Close */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close"
          style={{
            width: 46,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background =
              "#c42b1c")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background = "none")
          }
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            stroke={ic}
            strokeWidth="1.2"
            strokeLinecap="square"
          >
            <path d="M0.5 0.5l9 9M9.5 0.5l-9 9" />
          </svg>
        </button>
      </div>
    </div>
  );
}
