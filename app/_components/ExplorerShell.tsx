"use client";

import { useState } from "react";
import type { AppId } from "./types";
import ExplorerSidebar from "./ExplorerSidebar";
import AboutContent from "./apps/content/AboutContent";
import ProjectsContent from "./apps/content/ProjectsContent";
import BlogContent from "./apps/content/BlogContent";
import ContactContent from "./apps/content/ContactContent";
import NotepadShell from "./NotepadShell";
const CONTENT: Record<AppId, React.ReactNode> = {
  about: <AboutContent />,
  projects: <ProjectsContent />,
  blog: <BlogContent />,
  contact: <ContactContent />,
  resume: <NotepadShell />,
};

interface ExplorerShellProps {
  appId: AppId;
}

export default function ExplorerShell({ appId }: ExplorerShellProps) {
  const [activeId, setActiveId] = useState<AppId>(appId);

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {activeId !== "resume" && (
        <ExplorerSidebar activeAppId={activeId} onNavigate={setActiveId} />
      )}
      <div
        style={{
          flex: 1,
          overflow: "hidden",
          background: "#1e1e1e",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {activeId === "resume" ? (
          CONTENT[activeId]
        ) : (
          <div style={{ flex: 1, overflowY: "auto" }}>{CONTENT[activeId]}</div>
        )}
      </div>
    </div>
  );
}
