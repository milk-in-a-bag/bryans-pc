"use client";

interface WindowNavBarProps {
  icon: string;
  title: string;
}

const Chevron = () => (
  <svg
    width="6"
    height="10"
    viewBox="0 0 6 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: "rgba(255,255,255,0.3)", flexShrink: 0 }}
  >
    <path d="M1 1.5l3.5 3.5L1 8.5" />
  </svg>
);

const ThisPCIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    style={{ color: "rgba(255,255,255,0.55)", flexShrink: 0 }}
  >
    <rect x="1" y="2" width="13" height="9" rx="1" />
    <path d="M5 13h5M7.5 11v2" />
  </svg>
);

export default function WindowNavBar({ icon, title }: WindowNavBarProps) {
  return (
    <div
      className="flex items-center shrink-0"
      style={{
        background: "#242424",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        height: 44,
        paddingLeft: 12,
        paddingRight: 12,
        gap: 2,
      }}
    >
      {/* Back — dimmed, no history */}
      <button
        aria-label="Back"
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
          color: "rgba(255,255,255,0.25)",
          background: "none",
          border: "none",
          cursor: "default",
        }}
      >
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 1.5L2 7l5 5.5" />
        </svg>
      </button>

      {/* Forward — dimmed */}
      <button
        aria-label="Forward"
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
          color: "rgba(255,255,255,0.25)",
          background: "none",
          border: "none",
          cursor: "default",
        }}
      >
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 1.5L7 7l-5 5.5" />
        </svg>
      </button>

      {/* Up */}
      <NavButton aria-label="Up">
        <svg
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1.5 7.5L7 2l5.5 5.5" />
        </svg>
      </NavButton>

      {/* Refresh */}
      <NavButton aria-label="Refresh">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M12 7a5 5 0 1 1-1.3-3.4" />
          <path d="M10 2.5l2 1.5-1.5 2" />
        </svg>
      </NavButton>

      {/* Separator */}
      <div
        style={{
          width: 1,
          height: 20,
          background: "rgba(255,255,255,0.1)",
          margin: "0 8px",
          flexShrink: 0,
        }}
      />

      {/* Breadcrumb pill */}
      <div
        style={{
          flex: 1,
          height: 30,
          borderRadius: 4,
          background: "rgba(255,255,255,0.09)",
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "0 12px",
          cursor: "default",
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.13)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.09)")
        }
      >
        <ThisPCIcon />
        <Chevron />
        <span style={{ fontSize: 14, lineHeight: 1 }}>{icon}</span>
        <Chevron />
        <span
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.85)",
            fontWeight: 500,
          }}
        >
          {title}
        </span>
        <Chevron />
      </div>

      {/* Search pill */}
      <div
        style={{
          width: 180,
          height: 30,
          borderRadius: 4,
          background: "rgba(255,255,255,0.09)",
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "0 12px",
          cursor: "default",
          transition: "background 0.15s",
          flexShrink: 0,
          marginLeft: 8,
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.13)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.09)")
        }
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0 }}
        >
          <circle cx="5.5" cy="5.5" r="4" />
          <path d="M9.5 9.5l2.5 2.5" />
        </svg>
        <span
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.4)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          Search {title}
        </span>
      </div>
    </div>
  );
}

// Small helper so Up/Refresh get hover state without Tailwind purge issues
function NavButton({
  children,
  "aria-label": label,
}: {
  children: React.ReactNode;
  "aria-label": string;
}) {
  return (
    <button
      aria-label={label}
      style={{
        width: 32,
        height: 32,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        color: "rgba(255,255,255,0.65)",
        background: "none",
        border: "none",
        cursor: "pointer",
        transition: "background 0.15s, color 0.15s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background =
          "rgba(255,255,255,0.1)";
        (e.currentTarget as HTMLButtonElement).style.color = "white";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "none";
        (e.currentTarget as HTMLButtonElement).style.color =
          "rgba(255,255,255,0.65)";
      }}
    >
      {children}
    </button>
  );
}
