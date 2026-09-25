"use client";

import { EXPERIENCE, EDUCATION, SKILLS_GROUPS } from "./apps/resume/resumeData";

// ── Resume text ───────────────────────────────────────────────────────────────
function buildResumeText(): string {
  const lines: string[] = [];
  lines.push("Bryan Mayodi");
  lines.push("Fullstack Developer");
  lines.push("━".repeat(60));
  lines.push("");
  lines.push("EXPERIENCE");
  lines.push("─".repeat(60));
  for (const item of EXPERIENCE) {
    lines.push(`${item.title}  |  ${item.org}  |  ${item.period}`);
    for (const b of item.bullets) lines.push(`  • ${b}`);
    lines.push("");
  }
  lines.push("EDUCATION");
  lines.push("─".repeat(60));
  for (const item of EDUCATION) {
    lines.push(`${item.title}  |  ${item.org}  |  ${item.period}`);
    for (const b of item.bullets) lines.push(`  • ${b}`);
    lines.push("");
  }
  lines.push("SKILLS");
  lines.push("─".repeat(60));
  for (const group of SKILLS_GROUPS) {
    lines.push(`${group.label.padEnd(12)}  ${group.items.join("  ·  ")}`);
  }
  return lines.join("\n");
}

// ── About text ────────────────────────────────────────────────────────────────
function buildAboutText(): string {
  const lines: string[] = [];
  lines.push("Bryan Mayodi");
  lines.push("Fullstack Developer");
  lines.push("━".repeat(60));
  lines.push("");
  lines.push("ABOUT");
  lines.push("─".repeat(60));
  lines.push(
    "Hey, I'm Bryan — a fullstack developer who enjoys building clean,",
  );
  lines.push(
    "performant web applications from the ground up. I care about good",
  );
  lines.push("architecture, great UX, and code that's easy to reason about.");
  lines.push("");
  lines.push(
    "I work across the stack — designing APIs, building databases, and",
  );
  lines.push(
    "crafting interfaces that feel native. I'm always exploring new tools",
  );
  lines.push("and patterns to keep my work sharp.");
  lines.push("");
  lines.push("SKILLS");
  lines.push("─".repeat(60));
  const skills = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "REST APIs",
    "Git",
  ];
  lines.push(skills.join("  ·  "));
  lines.push("");
  lines.push("QUICK FACTS");
  lines.push("─".repeat(60));
  lines.push("Role          Fullstack Developer");
  lines.push("Focus         Web Applications");
  lines.push("Available     Open to opportunities");
  return lines.join("\n");
}

export const RESUME_TEXT = buildResumeText();
export const ABOUT_TEXT = buildAboutText();

// ── Shared shell ──────────────────────────────────────────────────────────────
function MenuBar() {
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
    </div>
  );
}

function StatusBar({ charCount }: { charCount: number }) {
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
      <div style={{ display: "flex", gap: 20 }}>
        {[
          `${charCount} characters`,
          "Plain text",
          "Windows (CRLF)",
          "UTF-8",
          "100%",
        ].map((s) => (
          <span key={s} style={{ fontSize: 11, color: "white", opacity: 0.85 }}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

interface NotepadShellProps {
  text: string;
}

export default function NotepadShell({ text }: NotepadShellProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        minHeight: 0,
        overflow: "hidden",
        background: "#1e1e1e",
      }}
    >
      <MenuBar />
      <textarea
        readOnly
        wrap="off"
        defaultValue={text}
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
          caretColor: "white",
          whiteSpace: "pre",
          overflowX: "scroll",
          overflowY: "auto",
          boxSizing: "border-box",
        }}
      />
      <StatusBar charCount={text.length} />
    </div>
  );
}
