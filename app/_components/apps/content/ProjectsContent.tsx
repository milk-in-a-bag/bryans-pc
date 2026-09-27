import FileGrid from "./FileGrid";
import type { FileItem } from "./FileGrid";

interface Props {
  onOpenFile: (f: FileItem) => void;
}

const PROJECTS: FileItem[] = [
  {
    name: "M-Pesa Finance Tracker",
    text: [
      "M-Pesa Finance Tracker",
      "━".repeat(50),
      "",
      "Repo        github.com/milk-in-a-bag/finance-tracker",
      "Status      Live — deployed on Vercel",
      "Stack       Next.js · TypeScript · Prisma · PostgreSQL · PWA",
      "",
      "DESCRIPTION",
      "─".repeat(50),
      "A finance tracker that auto-captures M-Pesa transactions via SMS",
      "parsing, with rule-based categorization, a Next.js dashboard,",
      "and push notifications on new spend.",
      "",
      "HIGHLIGHTS",
      "─".repeat(50),
      "  • Parses M-Pesa SMS messages to extract transaction data automatically",
      "  • Rule-based categorization engine for expenses and income",
      "  • Real-time dashboard built with Next.js",
      "  • Push notifications on new spending activity",
      "  • Shipped as an installable, offline-capable PWA",
      "  • Custom service worker for offline support",
      "  • Deployed on Vercel with a Neon Postgres database",
    ].join("\n"),
  },
  {
    name: "Restaurant Engine",
    text: [
      "Restaurant Engine",
      "━".repeat(50),
      "",
      "Repo        github.com/milk-in-a-bag/restaurant-engine",
      "Status      In Progress",
      "Stack       Express · TypeScript · Supabase · Strapi · PostgreSQL",
      "",
      "DESCRIPTION",
      "─".repeat(50),
      "A WhatsApp-integrated, multi-tenant digital menu platform for",
      "Nairobi restaurants with a wa.me ordering flow, loyalty stamp",
      "mechanic, and tiered pricing model.",
      "",
      "HIGHLIGHTS",
      "─".repeat(50),
      "  • Multi-tenant architecture (restaurants, branches, customers)",
      "  • WhatsApp ordering flow via wa.me",
      "  • Loyalty stamp mechanic for repeat customers",
      "  • Tiered pricing model for different restaurant tiers",
      "  • Strapi CMS integrated with Cloudinary for menu media",
      "  • Designed full multi-tenant schema: restaurants, branches,",
      "    customers, loyalty, orders",
    ].join("\n"),
  },
];

export default function ProjectsContent({ onOpenFile }: Props) {
  return <FileGrid files={PROJECTS} label="projects" onOpenFile={onOpenFile} />;
}
