export interface TimelineItem {
  title: string;
  org: string;
  period: string;
  bullets: string[];
}

export const EXPERIENCE: TimelineItem[] = [
  {
    title: "Full Stack Developer",
    org: "DigitalQatalyst",
    period: "Aug 2025 – Sep 2026",
    bullets: [
      "Built and maintained full-stack web applications using React, Next.js, TypeScript, Express.js, and Supabase.",
      "Integrated Microsoft Dataverse CRM, Power Apps, and Power Pages to automate and streamline client business processes.",
      "Architected reusable component libraries and scalable API integrations, reducing development time across projects.",
      "Collaborated with cross-functional teams to translate product requirements into high-performance, production-ready systems.",
    ],
  },
  {
    title: "Software Engineering Intern",
    org: "Senate of Kenya",
    period: "Jan 2025 – Jul 2025",
    bullets: [
      "Designed and developed an internal web portal for the Senate Journals Office to manage and retrieve official documents digitally.",
      "Defined system architecture and user flows, producing technical blueprints adopted by the IT team for implementation.",
    ],
  },
  {
    title: "Software Engineering Intern",
    org: "Qalibrated Systems Limited",
    period: "May 2024 – Oct 2024",
    bullets: [
      "Enhanced and maintained a calibration management software platform used by enterprise clients.",
      "Collaborated with the dev team to build and test new features, improving overall application efficiency.",
      "Managed application deployment pipelines using Linux and command-line utilities.",
    ],
  },
];

export const EDUCATION: TimelineItem[] = [
  {
    title: "B.Sc. Software Engineering",
    org: "Multimedia University of Kenya",
    period: "2024",
    bullets: ["Second Class Honours"],
  },
  {
    title: "Kenya Certificate of Secondary Education",
    org: "The Nairobi School",
    period: "2019",
    bullets: ["Grade A-"],
  },
];

export const SKILLS_GROUPS = [
  { label: "Languages", items: ["JavaScript", "TypeScript", "Python", "SQL"] },
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Shadcn UI", "Figma"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "Django", "Django REST Framework"],
  },
  { label: "Databases", items: ["PostgreSQL", "Supabase", "Neon"] },
  { label: "Tools", items: ["Git", "GitHub", "WSL", "Claude Code"] },
];
