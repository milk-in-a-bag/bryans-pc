"use client";

const btnBase: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 6,
  height: 30,
  padding: "0 10px",
  borderRadius: 4,
  border: "none",
  cursor: "pointer",
  fontSize: 12,
  fontWeight: 400,
  color: "rgba(255,255,255,0.75)",
  background: "none",
  transition: "background 0.12s, color 0.12s",
  whiteSpace: "nowrap",
};

const iconStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.6)",
  display: "flex",
  flexShrink: 0,
};

const Chevron = () => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinecap="round"
    style={{ color: "rgba(255,255,255,0.35)", flexShrink: 0, marginTop: -1 }}
  >
    <path d="M1.5 3l2.5 2.5L6.5 3" />
  </svg>
);

function ToolbarBtn({
  icon,
  label,
  ariaLabel,
}: {
  icon: React.ReactNode;
  label?: string;
  ariaLabel?: string;
}) {
  return (
    <button
      aria-label={ariaLabel ?? label}
      style={btnBase}
      onMouseEnter={(e) => {
        const b = e.currentTarget;
        b.style.background = "rgba(255,255,255,0.1)";
        b.style.color = "white";
      }}
      onMouseLeave={(e) => {
        const b = e.currentTarget;
        b.style.background = "none";
        b.style.color = "rgba(255,255,255,0.75)";
      }}
    >
      <span style={iconStyle}>{icon}</span>
      {label && <span>{label}</span>}
      {label && <Chevron />}
    </button>
  );
}

const BUTTONS = [
  {
    label: "New",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      >
        <path d="M7 2v10M2 7h10" />
      </svg>
    ),
  },
  {
    label: "Sort",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      >
        <path d="M2 4h6M2 7h9M2 10h4" />
      </svg>
    ),
  },
  {
    label: "View",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      >
        <rect x="1" y="1" width="5" height="5" rx="0.5" />
        <rect x="8" y="1" width="5" height="5" rx="0.5" />
        <rect x="1" y="8" width="5" height="5" rx="0.5" />
        <rect x="8" y="8" width="5" height="5" rx="0.5" />
      </svg>
    ),
  },
];

export default function WindowToolbar() {
  return (
    <div
      style={{
        background: "#2b2b2b",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        height: 42,
        display: "flex",
        alignItems: "center",
        padding: "0 12px",
        gap: 4,
        flexShrink: 0,
      }}
    >
      {BUTTONS.map(({ label, icon }) => (
        <ToolbarBtn key={label} icon={icon} label={label} />
      ))}

      <div
        style={{
          width: 1,
          height: 18,
          background: "rgba(255,255,255,0.1)",
          margin: "0 4px",
          flexShrink: 0,
        }}
      />

      {/* ··· more */}
      <ToolbarBtn
        ariaLabel="More options"
        icon={
          <svg
            width="14"
            height="4"
            viewBox="0 0 14 4"
            fill="currentColor"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            <circle cx="2" cy="2" r="1.5" />
            <circle cx="7" cy="2" r="1.5" />
            <circle cx="12" cy="2" r="1.5" />
          </svg>
        }
      />

      <div style={{ flex: 1 }} />

      {/* Details */}
      <ToolbarBtn
        label="Details"
        icon={
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <rect x="0.5" y="0.5" width="8" height="12" />
            <path d="M10 2h2.5M10 5h2.5M10 8h2.5" />
          </svg>
        }
      />
    </div>
  );
}
