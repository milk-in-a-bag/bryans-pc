export function HomeIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1.5 6.5L7.5 1.5l6 5" />
      <path d="M3 5.5V13h3.5v-3h2v3H12V5.5" />
    </svg>
  );
}

export function GalleryIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    >
      <rect x="1" y="1" width="13" height="13" rx="1" />
      <path d="M1 10l3.5-3.5 3 3 2-2 3.5 3.5" />
      <circle cx="10.5" cy="4.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DesktopIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    >
      <rect x="1" y="2" width="13" height="9" rx="1" />
      <path d="M5 13h5M7.5 11v2" />
    </svg>
  );
}

export function DownloadIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    >
      <path d="M7.5 1.5v8M4.5 7l3 3 3-3" />
      <path d="M2 11v2h11v-2" />
    </svg>
  );
}

export function DocumentsIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    >
      <path d="M3.5 1.5h5.5l3 3v9h-8.5v-12z" />
      <path d="M9 1.5V4.5h3" />
      <path d="M5.5 7h4M5.5 9.5h4M5.5 12h2.5" />
    </svg>
  );
}

export function FolderIcon({ color = "#e8a838" }: { color?: string }) {
  return (
    <svg width="15" height="13" viewBox="0 0 15 13" fill="none">
      <path
        d="M0.5 2.5C0.5 1.9 1 1.5 1.5 1.5H5.5L7 3H13.5C14 3 14.5 3.4 14.5 4V11C14.5 11.6 14 12 13.5 12H1.5C1 12 0.5 11.6 0.5 11V2.5Z"
        fill={color}
      />
    </svg>
  );
}

export function PinIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="currentColor"
      className="text-white/20"
    >
      <path d="M6.5 1L9 3.5 7 5.5 5.5 8 4 6.5 2 8.5 1.5 8 3.5 6 2 4.5 4 3l2-2z" />
    </svg>
  );
}

export function ThisPCIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    >
      <rect x="1" y="2" width="13" height="9" rx="1" />
      <path d="M5 13h5M7.5 11v2" />
      <path d="M4 5.5h7M4 7.5h5" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

export function DriveIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    >
      <rect x="1" y="5" width="13" height="6" rx="1" />
      <path d="M4 8h.01M6 8h.01" />
      <path d="M10.5 8h3" />
    </svg>
  );
}

export function NetworkIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    >
      <circle cx="7.5" cy="7.5" r="5.5" />
      <path d="M7.5 2c-2 2-3 3.5-3 5.5s1 3.5 3 5.5" />
      <path d="M7.5 2c2 2 3 3.5 3 5.5s-1 3.5-3 5.5" />
      <path d="M2 7.5h11" />
    </svg>
  );
}

export function PdfIcon() {
  return (
    <svg width="15" height="16" viewBox="0 0 15 16" fill="none">
      {/* Page body */}
      <path d="M2.5 1.5h7l3 3v10h-10v-13z" fill="#e84545" />
      {/* Folded corner */}
      <path d="M9.5 1.5v3h3" fill="none" stroke="#c23030" strokeWidth="0.5" />
      <path d="M9.5 1.5l3 3h-3v-3z" fill="#c23030" />
      {/* PDF text */}
      <text
        x="2.8"
        y="12"
        fontSize="4"
        fontWeight="700"
        fill="white"
        fontFamily="Arial,sans-serif"
      >
        PDF
      </text>
    </svg>
  );
}
