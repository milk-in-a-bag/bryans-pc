"use client";

import type { AppId } from "./types";
import {
  HomeIcon,
  GalleryIcon,
  DesktopIcon,
  DownloadIcon,
  DocumentsIcon,
  FolderIcon,
  ThisPCIcon,
  DriveIcon,
  NetworkIcon,
} from "./sidebar/SidebarIcons";
import { SidebarRow, SectionLabel, TreeSection } from "./sidebar/SidebarRow";

interface ExplorerSidebarProps {
  activeAppId: AppId;
  onNavigate: (appId: AppId) => void;
}

const NAV_APPS: { id: AppId; label: string; color: string }[] = [
  { id: "about", label: "About Me", color: "#60cdff" },
  { id: "projects", label: "Projects", color: "#e8a838" },
  { id: "blog", label: "Blog", color: "#e8a838" },
  { id: "contact", label: "Contact", color: "#60a060" },
  { id: "resume", label: "Resume", color: "#c0504d" },
];

export default function ExplorerSidebar({
  activeAppId,
  onNavigate,
}: ExplorerSidebarProps) {
  return (
    <div
      className="flex flex-col overflow-y-auto shrink-0 py-1"
      style={{
        width: 200,
        background: "#272727",
        borderRight: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <SidebarRow icon={<HomeIcon />} label="Home" />
      <SidebarRow icon={<GalleryIcon />} label="Gallery" />

      <SectionLabel>Quick access</SectionLabel>
      <SidebarRow icon={<DesktopIcon />} label="Desktop" pinned />
      <SidebarRow icon={<DownloadIcon />} label="Downloads" pinned />
      <SidebarRow icon={<DocumentsIcon />} label="Documents" pinned />

      <SectionLabel>Portfolio</SectionLabel>
      {NAV_APPS.map(({ id, label, color }) => (
        <SidebarRow
          key={id}
          icon={<FolderIcon color={color} />}
          label={label}
          active={activeAppId === id}
          pinned
          onClick={() => onNavigate(id)}
        />
      ))}

      <SectionLabel>This PC</SectionLabel>
      <TreeSection label="This PC" icon={<ThisPCIcon />}>
        <SidebarRow icon={<DriveIcon />} label="Local Disk (C:)" indent />
      </TreeSection>
      <SidebarRow icon={<NetworkIcon />} label="Network" />
    </div>
  );
}
