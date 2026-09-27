"use client";

export const RESUME_TEXT = [
  "Bryan Kerry Mayodi",
  "Nairobi, Kenya  ·  bryanmayodi@gmail.com  ·  +254 115 622 928",
  "━".repeat(65),
  "",
  "PROFILE",
  "─".repeat(65),
  "Fullstack web developer with hands-on experience building production-grade",
  "applications using Next.js, TypeScript, Express.js and Django. Comfortable",
  "across the stack, from designing clean, responsive UIs to architecting",
  "RESTful APIs and managing databases. I enjoy building client-facing and",
  "internal tools, with experience in enterprise software contexts. Looking for",
  "a role where I can ship meaningful products and keep growing fast.",
  "",
  "LINKS",
  "─".repeat(65),
  "LinkedIn    linkedin.com/in/bryanmayodi",
  "Portfolio   bryans-pc.vercel.app",
  "",
  "EMPLOYMENT HISTORY",
  "─".repeat(65),
  "Aug 2025 – Sep 2026   Full Stack Developer, DigitalQatalyst · Nairobi",
  "  • Built and maintained full-stack web applications using React, Next.js,",
  "    TypeScript, Express.js, and Supabase.",
  "  • Integrated Microsoft Dataverse CRM, Power Apps, and Power Pages to",
  "    automate and streamline client business processes.",
  "  • Architected reusable component libraries and scalable API integrations,",
  "    reducing development time across projects.",
  "  • Collaborated with cross-functional teams to translate product requirements",
  "    into high-performance, production-ready systems.",
  "",
  "Jan 2025 – Jul 2025   Software Engineering Intern, Senate of Kenya · Nairobi",
  "  • Designed and developed an internal web portal for the Senate Journals",
  "    Office to manage and retrieve official documents digitally.",
  "  • Defined system architecture and user flows, producing technical blueprints",
  "    adopted by the IT team for implementation.",
  "",
  "May 2024 – Oct 2024   Software Engineering Intern, Qalibrated Systems · Nairobi",
  "  • Enhanced and maintained a calibration management software platform used",
  "    by enterprise clients.",
  "  • Collaborated with the dev team to build and test new features, improving",
  "    overall application efficiency.",
  "  • Managed application deployment pipelines using Linux and CLI utilities.",
  "",
  "PROJECTS",
  "─".repeat(65),
  "M-Pesa Finance Tracker                    github.com/milk-in-a-bag/finance-tracker",
  "Stack: Next.js · TypeScript · Prisma · PostgreSQL · PWA",
  "  • Built a finance tracker that auto-captures M-Pesa transactions via SMS",
  "    parsing, with rule-based categorization and a Next.js dashboard.",
  "  • Shipped as an installable, offline-capable PWA with a custom service",
  "    worker, deployed on Vercel with a Neon Postgres database.",
  "",
  "Restaurant Engine                         github.com/milk-in-a-bag/restaurant-engine",
  "Stack: Express · TypeScript · Supabase · Strapi · PostgreSQL",
  "  • Building a WhatsApp-integrated, multi-tenant digital menu platform for",
  "    Nairobi restaurants with a wa.me ordering flow and loyalty stamp mechanic.",
  "  • Designed the multi-tenant schema (restaurants, branches, customers,",
  "    loyalty, orders) and integrated a Strapi CMS with Cloudinary.",
  "",
  "AREAS OF EXPERTISE",
  "─".repeat(65),
  "Languages     JavaScript, TypeScript, Python, SQL",
  "Frontend      React.js, Next.js, Tailwind CSS, Shadcn UI, Figma",
  "Backend       Node.js, Express.js, Django, Django REST Framework",
  "Databases     PostgreSQL, Supabase, Neon",
  "Tools         Git, GitHub, Windows Subsystem for Linux, Claude Code",
  "",
  "EDUCATION",
  "─".repeat(65),
  "2024   Bachelor of Science in Software Engineering",
  "       Multimedia University of Kenya · Second Class Honours",
  "",
  "2019   Kenya Certificate of Secondary Education",
  "       The Nairobi School, Nairobi · Grade A-",
  "",
  "REFERENCES",
  "─".repeat(65),
  "Stephanie Njunge   Dev Lead, DigitalQatalyst",
  "                   wnjunge19@gmail.com · +254 700 702 332",
  "",
  "Sammy Moruri       Full Stack Developer, Galaxyl Tech",
  "                   morurisammy5@gmail.com · +254 112 686783",
  "",
  "Yusuf Duale        Clerk Assistant, Senate of Kenya",
  "                   dualeyussuf@gmail.com · +254 797 515600",
  "",
  "Zephaniah Adar     Lead Software Engineer, CAMEA",
  "                   adarzeph@gmail.com · +254 701 411321",
].join("\n");

export const ABOUT_TEXT = [
  "Bryan Kerry Mayodi",
  "Nairobi, Kenya  ·  bryanmayodi@gmail.com  ·  +254 115 622 928",
  "━".repeat(65),
  "",
  "PROFILE",
  "─".repeat(65),
  "Fullstack web developer with hands-on experience building production-grade",
  "applications using Next.js, TypeScript, Express.js and Django. Comfortable",
  "across the stack, from designing clean, responsive UIs to architecting",
  "RESTful APIs and managing databases. I enjoy building client-facing and",
  "internal tools, with experience in enterprise software contexts. Looking for",
  "a role where I can ship meaningful products and keep growing fast.",
  "",
  "LINKS",
  "─".repeat(65),
  "LinkedIn    linkedin.com/in/bryanmayodi",
  "Portfolio   bryans-pc.vercel.app",
  "",
  "SKILLS",
  "─".repeat(65),
  "Languages     JavaScript, TypeScript, Python, SQL",
  "Frontend      React.js, Next.js, Tailwind CSS, Shadcn UI, Figma",
  "Backend       Node.js, Express.js, Django, Django REST Framework",
  "Databases     PostgreSQL, Supabase, Neon",
  "Tools         Git, GitHub, Windows Subsystem for Linux, Claude Code",
  "",
  "EDUCATION",
  "─".repeat(65),
  "2024   Bachelor of Science in Software Engineering",
  "       Multimedia University of Kenya · Second Class Honours",
  "",
  "2019   Kenya Certificate of Secondary Education",
  "       The Nairobi School, Nairobi · Grade A-",
  "",
  "QUICK FACTS",
  "─".repeat(65),
  "Role          Full Stack Developer",
  "Location      Nairobi, Kenya",
  "Available     Open to opportunities",
  "Email         bryanmayodi@gmail.com",
  "Phone         +254 115 622 928",
].join("\n");

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

export default function NotepadShell({ text }: { text: string }) {
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
