"use client";

import { useState } from "react";
import type { AppId } from "./types";
import ExplorerSidebar from "./ExplorerSidebar";
import ProjectsContent from "./apps/content/ProjectsContent";
import BlogContent from "./apps/content/BlogContent";
import ContactContent from "./apps/content/ContactContent";
import NotepadShell, { RESUME_TEXT } from "./NotepadShell";
import DocumentViewerShell from "./DocumentViewerShell";

// Apps that skip Explorer chrome entirely and manage their own layout
const BARE_APPS = new Set<AppId>(["resume", "about"]);

function RecycleBinContent() {
  const colStyle: React.CSSProperties = {
    fontSize: 12,
    color: "rgba(255,255,255,0.55)",
    padding: "0 12px",
    height: 28,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        style={{
          display: "flex",
          background: "#1e1e1e",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          flexShrink: 0,
        }}
      >
        {[
          ["Name", 2],
          ["Original Location", 2],
          ["Date Deleted", 1],
          ["Size", 1],
          ["Item type", 1],
        ].map(([h, f]) => (
          <div
            key={String(h)}
            style={{
              ...colStyle,
              flex: Number(f),
              borderRight: "1px solid rgba(255,255,255,0.05)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLDivElement).style.background =
                "rgba(255,255,255,0.04)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLDivElement).style.background =
                "transparent")
            }
          >
            {h}
          </div>
        ))}
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
          This folder is empty.
        </span>
      </div>
      <div
        style={{
          height: 24,
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
          0 items
        </span>
      </div>
    </div>
  );
}

interface OpenFile {
  name: string;
  text: string;
}

function FileMenuBar({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <div
      style={{
        height: 28,
        display: "flex",
        alignItems: "center",
        padding: "0 4px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "#1e1e1e",
        flexShrink: 0,
      }}
    >
      <button
        onClick={onBack}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "rgba(255,255,255,0.6)",
          fontSize: 11,
          padding: "0 8px",
          height: 22,
          borderRadius: 3,
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M7.5 2L3 6l4.5 4" />
        </svg>
        Back
      </button>
      <div
        style={{
          width: 1,
          height: 14,
          background: "rgba(255,255,255,0.1)",
          margin: "0 4px",
        }}
      />
      {["File", "Edit", "View"].map((m) => (
        <button
          key={m}
          style={{
            padding: "0 10px",
            height: 24,
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 12,
            color: "rgba(255,255,255,0.8)",
            borderRadius: 3,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
        >
          {m}
        </button>
      ))}
      <span
        style={{ marginLeft: 8, fontSize: 12, color: "rgba(255,255,255,0.4)" }}
      >
        {title}
      </span>
    </div>
  );
}

function FileStatusBar({ charCount }: { charCount: number }) {
  return (
    <div
      style={{
        height: 22,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 12px",
        background: "#007acc",
        flexShrink: 0,
      }}
    >
      <span style={{ fontSize: 11, color: "white", opacity: 0.9 }}>
        Ln 1, Col 1
      </span>
      <div style={{ display: "flex", gap: 16 }}>
        {[`${charCount} characters`, "Plain text", "UTF-8"].map((s) => (
          <span key={s} style={{ fontSize: 11, color: "white", opacity: 0.85 }}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ExplorerShell({ appId }: { appId: AppId }) {
  const [activeId, setActiveId] = useState<AppId>(appId);
  const [openFile, setOpenFile] = useState<OpenFile | null>(null);

  const isBare = BARE_APPS.has(activeId);
  const isFullscreen = isBare || openFile !== null;

  const handleNavigate = (id: AppId) => {
    setOpenFile(null);
    setActiveId(id);
  };

  const renderContent = () => {
    // File open in notepad viewer
    if (openFile) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <FileMenuBar title={openFile.name} onBack={() => setOpenFile(null)} />
          <textarea
            readOnly
            wrap="off"
            defaultValue={openFile.text}
            spellCheck={false}
            style={{
              flex: 1,
              minHeight: 0,
              width: "100%",
              background: "#1e1e1e",
              color: "rgba(255,255,255,0.85)",
              fontFamily: "'Cascadia Code', Consolas, 'Courier New', monospace",
              fontSize: 13,
              lineHeight: 1.6,
              padding: "12px 16px",
              border: "none",
              outline: "none",
              resize: "none",
              whiteSpace: "pre",
              overflowX: "auto",
              overflowY: "auto",
              boxSizing: "border-box",
            }}
          />
          <FileStatusBar charCount={openFile.text.length} />
        </div>
      );
    }

    // Bare apps — full custom shell, no Explorer chrome
    if (activeId === "about") return <DocumentViewerShell />;
    if (activeId === "resume") return <NotepadShell text={RESUME_TEXT} />;

    // Explorer apps
    if (activeId === "projects")
      return <ProjectsContent onOpenFile={setOpenFile} />;
    if (activeId === "blog") return <BlogContent onOpenFile={setOpenFile} />;
    if (activeId === "recycle") return <RecycleBinContent />;
    return <ContactContent />;
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {!isFullscreen && (
        <ExplorerSidebar activeAppId={activeId} onNavigate={handleNavigate} />
      )}
      <div
        style={{
          flex: 1,
          overflow: "hidden",
          background: "#1e1e1e",
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        {isFullscreen ? (
          renderContent()
        ) : (
          <div style={{ flex: 1, overflowY: "auto" }}>{renderContent()}</div>
        )}
      </div>
    </div>
  );
}
