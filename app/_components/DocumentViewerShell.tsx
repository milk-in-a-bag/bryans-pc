"use client";

function Photo({
  side,
  src,
  width = 220,
  height = 165,
}: {
  side: "left" | "right";
  src: string;
  width?: number;
  height?: number;
}) {
  return (
    <img
      src={src}
      alt="Bryan Mayodi"
      style={{
        float: side,
        marginRight: side === "left" ? 18 : 0,
        marginLeft: side === "right" ? 18 : 0,
        marginBottom: 12,
        width,
        height,
        objectFit: "cover",
        borderRadius: 4,
        flexShrink: 0,
      }}
    />
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
      {/* Block 1 — professional headshot floated right */}
      <Photo side="right" src="/bryan-3.png" width={200} height={240} />
      <p style={p}>
        I&apos;m back at it — another update for anyone who somehow ended up on
        this page. I&apos;m Bryan Kerry Mayodi, a fullstack developer based in
        Nairobi, Kenya. I&apos;ve been writing code professionally since 2024,
        which sounds recent but feels like a decade because of how much has
        happened.
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

      {/* Block 2 — formal mirror selfie floated left */}
      <Photo side="left" src="/bryan-1.jpg" width={160} height={210} />
      <p style={p}>
        Before DigitalQatalyst, I interned at the{" "}
        <strong style={strong}>Senate of Kenya</strong> where I built an
        internal document portal for the Journals Office — yes, I have an ID
        badge and everything. I also interned at{" "}
        <strong style={strong}>Qalibrated Systems</strong> maintaining
        calibration management software, which is exactly as niche as it sounds.
        Both taught me that good software is invisible and bad software is
        everyone&apos;s problem.
      </p>
      <p style={p}>
        I graduated from{" "}
        <strong style={strong}>Multimedia University of Kenya</strong> in 2024
        with a B.Sc. in Software Engineering (Second Class Honours). My mum has
        a screenshot of the results. She sends it to people unprompted. I am at
        peace with this.
      </p>
      <Clearfix />

      {/* Block 3 — cap selfie floated right */}
      <Photo side="right" src="/bryan-2.jpg" width={185} height={195} />
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
        — a WhatsApp-integrated digital menu platform for Nairobi restaurants. I
        am very proud of the multi-tenant database schema. I have described this
        schema to people at social events. The jury is still out on whether they
        were interested or just polite.
      </p>
      <Clearfix />

      <p style={p}>
        My stack of choice is{" "}
        <strong style={strong}>Next.js + TypeScript + PostgreSQL</strong> for
        most things, with Django or Express on the backend depending on the
        project. I&apos;m looking for a role where I can{" "}
        <strong style={strong}>
          ship meaningful products and keep growing fast
        </strong>
        . If that sounds like somewhere you work, my email is{" "}
        <span style={link}>bryanmayodi@gmail.com</span>. I respond quickly. I
        consider this a competitive advantage.
      </p>

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
