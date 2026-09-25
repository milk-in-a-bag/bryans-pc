interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  status: "live" | "wip" | "archived";
}

const PROJECTS: Project[] = [
  {
    title: "Project Alpha",
    description:
      "A fullstack web app with real-time features, built with Next.js and PostgreSQL.",
    tags: ["Next.js", "PostgreSQL", "WebSockets"],
    url: "#",
    status: "live",
  },
  {
    title: "REST API Boilerplate",
    description:
      "A production-ready Node.js REST API starter with auth, rate limiting, and docs.",
    tags: ["Node.js", "Express", "JWT"],
    url: "#",
    status: "live",
  },
  {
    title: "Dev Dashboard",
    description:
      "A personal dashboard for tracking tasks, links, and notes. Work in progress.",
    tags: ["React", "TypeScript", "Tailwind"],
    status: "wip",
  },
  {
    title: "CLI Toolkit",
    description:
      "A collection of shell scripts and CLI helpers for automating dev workflows.",
    tags: ["Shell", "Node.js"],
    url: "#",
    status: "archived",
  },
];

const STATUS_STYLES: Record<Project["status"], string> = {
  live: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  wip: "bg-amber-500/20  text-amber-400  border-amber-500/30",
  archived: "bg-white/10      text-white/40   border-white/10",
};

const STATUS_LABELS: Record<Project["status"], string> = {
  live: "Live",
  wip: "In Progress",
  archived: "Archived",
};

export default function ProjectsContent() {
  return (
    <div className="p-6 text-white/90 font-sans">
      <div className="max-w-3xl flex flex-col gap-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-xl font-semibold text-white">Projects</h1>
          <span className="text-xs text-white/40">
            {PROJECTS.length} projects
          </span>
        </div>

        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="rounded-xl border border-white/10 bg-white/5 p-5 flex flex-col gap-3 hover:bg-white/[0.07] transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-[15px] font-semibold text-white leading-tight">
                {project.title}
              </h2>
              <span
                className={`shrink-0 text-[11px] font-medium px-2 py-0.5 rounded-full border ${STATUS_STYLES[project.status]}`}
              >
                {STATUS_LABELS[project.status]}
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              {project.description}
            </p>
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.url && project.url !== "#" && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-[#60cdff] hover:text-white transition-colors flex items-center gap-1"
                >
                  View
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M1.5 8.5l7-7M3.5 1.5h6v6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}

        <p className="text-xs text-white/30 text-center pt-2">
          More on{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#60cdff] hover:text-white transition-colors"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
