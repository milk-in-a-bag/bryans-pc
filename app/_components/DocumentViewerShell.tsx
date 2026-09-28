"use client";

function Photo({
  side,
  color,
  caption,
  width = 220,
  height = 165,
}: {
  side: "left" | "right";
  color: string;
  caption: string;
  width?: number;
  height?: number;
}) {
  return (
    <div
      style={{
        float: side,
        marginRight: side === "left" ? 18 : 0,
        marginLeft: side === "right" ? 18 : 0,
        marginBottom: 12,
        width,
        height,
        background: color,
        borderRadius: 4,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Replace with: <img src="..." style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:4}} /> */}
      <span
        style={{
          fontSize: 11,
          color: "rgba(255,255,255,0.55)",
          textAlign: "center",
          padding: "0 12px",
          lineHeight: 1.4,
        }}
      >
        {caption}
      </span>
    </div>
  );
}

function Clearfix() {
  return <div style={{ clear: "both" }} />;
}

function Page() {
  const p: React.CSSProperties = {
    fontSize: 13.5,
    lineHeight: 1.8,
    color: "rgba(255,255,255,0.82)",
    fontFamily: "'Cascadia Code', Consolas, 'Courier New', monospace",
    margin: "0 0 16px",
  };
  const strong: React.CSSProperties = { color: "white", fontWeight: 700 };
  const link: React.CSSProperties = {
    color: "#60cdff",
    textDecoration: "underline",
  };

  return (
    <div style={{ padding: "28px 32px" }}>
      <Photo
        side="right"
        color="#1a3a5c"
        caption="📸 Me, looking like I know what I'm doing"
        width={230}
        height={170}
      />
      <p style={p}>
        I&apos;m back at it — another update for anyone who somehow ended up on
        this page. I&apos;m Bryan Kerry Mayodi, a fullstack developer based in
        Nairobi, Kenya, and this is my little corner of the internet where I
        pretend to be organised. I&apos;ve been writing code professionally
        since 2024, which sounds recent but feels like a decade because of how
        much has happened.
      </p>
      <p style={p}>
        Right now I&apos;m a{" "}
        <strong style={strong}>Full Stack Developer at DigitalQatalyst</strong>,
        building production web apps for enterprise clients using React,
        Next.js, TypeScript, and Supabase. I also get to play with Microsoft
        Dataverse and Power Pages which is either exciting or terrifying
        depending on the day and the deadline.
      </p>
      <Clearfix />

      <Photo
        side="left"
        color="#1a4a2e"
        caption="🏛️ Senate of Kenya internship. Yes, that Senate."
        width={220}
        height={160}
      />
      <p style={p}>
        Before DigitalQatalyst, I interned at the{" "}
        <strong style={strong}>Senate of Kenya</strong> where I built an
        internal document portal for the Journals Office. I also interned at{" "}
        <strong style={strong}>Qalibrated Systems</strong> where I maintained
        calibration management software — a sentence that sounds made up but is
        very real and very niche. Both experiences taught me that good software
        is invisible and bad software is everyone&apos;s problem.
      </p>
      <p style={p}>
        I graduated from{" "}
        <strong style={strong}>Multimedia University of Kenya</strong> in 2024
        with a B.Sc. in Software Engineering (Second Class Honours). My mum has
        a screenshot of the results. She sends it to people unprompted. I am at
        peace with this.
      </p>
      <Clearfix />

      <Photo
        side="right"
        color="#4a2d6b"
        caption="📱 M-Pesa Finance Tracker — it reads your SMS. On purpose."
        width={230}
        height={160}
      />
      <p style={p}>
        On the side, I&apos;ve been building things. My proudest project is the{" "}
        <strong style={strong}>M-Pesa Finance Tracker</strong> — a PWA that
        parses your M-Pesa SMS messages, categorizes your spending
        automatically, and gives you a dashboard. I built this because I
        genuinely did not know where my money was going. Now I do. This has not
        made me spend less money but at least I am informed.
      </p>
      <p style={p}>
        I&apos;m also building <strong style={strong}>Restaurant Engine</strong>{" "}
        — a WhatsApp-integrated digital menu platform for Nairobi restaurants.
        You order via wa.me, earn loyalty stamps, and get a nice experience. I
        am very proud of the multi-tenant schema. I have described this schema
        to people at social events. I cannot tell if they were interested or
        just polite.
      </p>
      <Clearfix />

      <Photo
        side="left"
        color="#5a3a1a"
        caption="☕ My actual work setup. There are more tabs than this."
        width={210}
        height={150}
      />
      <p style={p}>
        My stack of choice is{" "}
        <strong style={strong}>Next.js + TypeScript + PostgreSQL</strong> for
        most things, with Django or Express on the backend depending on the
        project. I use Tailwind CSS because life is short and I would rather
        argue about component architecture than class name conflicts. I also use
        Figma, which means I have opinions about spacing that nobody asked for.
      </p>
      <p style={p}>
        I&apos;m looking for a role where I can{" "}
        <strong style={strong}>
          ship meaningful products and keep growing fast
        </strong>
        . If that sounds like somewhere you work, my email is{" "}
        <span style={link}>bryanmayodi@gmail.com</span>. I respond quickly. I
        have been told this is unusual. I consider it a competitive advantage.
      </p>
      <Clearfix />

      <div
        style={{
          marginTop: 24,
          paddingTop: 16,
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <p
          style={{
            ...p,
            fontStyle: "italic",
            color: "rgba(255,255,255,0.45)",
            marginBottom: 4,
          }}
        >
          Thanks for reading. You made it to the bottom. 🙏
        </p>
        <p style={{ ...p, color: "rgba(255,255,255,0.6)", margin: 0 }}>
          — Bryan
        </p>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div
      style={{
        height: 22,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 12px",
        background: "#1a1a1a",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        flexShrink: 0,
      }}
    >
      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
        Edit Document
      </span>
      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
        758 words
      </span>
    </div>
  );
}

export default function DocumentViewerShell() {
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
      <div style={{ flex: 1, overflowY: "auto", background: "#1e1e1e" }}>
        <Page />
      </div>
      <StatusBar />
    </div>
  );
}
