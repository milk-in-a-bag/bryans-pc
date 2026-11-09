import Image from "next/image";

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
    <Image
      src="/icons/desktop.png"
      width={15}
      height={15}
      alt="Desktop"
      style={{ imageRendering: "auto" }}
    />
  );
}

export function DownloadIcon() {
  return (
    <Image
      src="/icons/downloads.png"
      width={15}
      height={15}
      alt="Downloads"
      style={{ objectFit: "contain" }}
    />
  );
}

export function DocumentsIcon() {
  return (
    <Image
      src="/icons/documents.png"
      width={15}
      height={15}
      alt="Documents"
      style={{ objectFit: "contain" }}
    />
  );
}

export function FolderIcon({ color: _color }: { color?: string }) {
  return <Image src="/icons/folder.png" width={15} height={13} alt="Folder" />;
}

export function PinIcon() {
  return (
    <Image
      src="/icons/pin.png"
      width={10}
      height={10}
      alt="Pinned"
      style={{ objectFit: "contain", opacity: 0.6 }}
    />
  );
}

export function ThisPCIcon() {
  return (
    <Image
      src="/icons/pc.png"
      width={15}
      height={15}
      alt="This PC"
      style={{ objectFit: "contain" }}
    />
  );
}

export function DriveIcon() {
  return (
    <Image
      src="/icons/drive.png"
      width={15}
      height={15}
      alt="Local Disk"
      style={{ objectFit: "contain" }}
    />
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

export function PicturesIcon() {
  return (
    <Image
      src="/icons/pictures.png"
      width={15}
      height={15}
      alt="Pictures"
      style={{ objectFit: "contain" }}
    />
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
