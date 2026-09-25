import FileGrid from "./FileGrid";
import type { FileItem } from "./FileGrid";

interface Props {
  onOpenFile: (f: FileItem) => void;
}

const PROJECTS = [
  {
    name: "Project Alpha",
    ext: "TXT",
    text: [
      "Project Alpha",
      "━".repeat(40),
      "",
      "Status      Live",
      "Stack       Next.js · PostgreSQL · WebSockets",
      "Repo        https://github.com",
      "",
      "DESCRIPTION",
      "─".repeat(40),
      "A fullstack web app with real-time features,",
      "built with Next.js and PostgreSQL.",
      "",
      "HIGHLIGHTS",
      "─".repeat(40),
      "  • Real-time updates via WebSockets",
      "  • Server-side rendering with Next.js",
      "  • PostgreSQL with connection pooling",
      "  • Deployed on Vercel + Supabase",
    ].join("\n"),
  },
  {
    name: "REST API Boilerplate",
    ext: "TXT",
    text: [
      "REST API Boilerplate",
      "━".repeat(40),
      "",
      "Status      Live",
      "Stack       Node.js · Express · JWT",
      "Repo        https://github.com",
      "",
      "DESCRIPTION",
      "─".repeat(40),
      "A production-ready Node.js REST API starter",
      "with auth, rate limiting, and docs.",
      "",
      "HIGHLIGHTS",
      "─".repeat(40),
      "  • JWT authentication & refresh tokens",
      "  • Rate limiting with Redis",
      "  • Auto-generated OpenAPI docs",
      "  • Docker-ready",
    ].join("\n"),
  },
  {
    name: "Dev Dashboard",
    ext: "TXT",
    text: [
      "Dev Dashboard",
      "━".repeat(40),
      "",
      "Status      In Progress",
      "Stack       React · TypeScript · Tailwind",
      "",
      "DESCRIPTION",
      "─".repeat(40),
      "A personal dashboard for tracking tasks,",
      "links, and notes.",
      "",
      "HIGHLIGHTS",
      "─".repeat(40),
      "  • Drag-and-drop task board",
      "  • Bookmark manager with tags",
      "  • Local-first, syncs to cloud",
    ].join("\n"),
  },
  {
    name: "CLI Toolkit",
    ext: "TXT",
    text: [
      "CLI Toolkit",
      "━".repeat(40),
      "",
      "Status      Archived",
      "Stack       Shell · Node.js",
      "Repo        https://github.com",
      "",
      "DESCRIPTION",
      "─".repeat(40),
      "A collection of shell scripts and CLI helpers",
      "for automating dev workflows.",
      "",
      "HIGHLIGHTS",
      "─".repeat(40),
      "  • Project scaffolding scripts",
      "  • Git workflow helpers",
      "  • Cross-platform (macOS / Linux)",
    ].join("\n"),
  },
];

export default function ProjectsContent({ onOpenFile }: Props) {
  return <FileGrid files={PROJECTS} label="projects" onOpenFile={onOpenFile} />;
}
