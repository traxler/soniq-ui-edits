// Mobile Workspace / Welcome [05] — a dashboard, not a doormat. Atmosphere STOPS here
// (the working surface earns calm — Rule 6 boundary). One hero recommendation carries the
// only Laser Yellow; the snapshot is an honest Day-0 invite (no fabricated counts); a
// docked Ask bar + bottom nav. "Soniq prepared this while you signed up."
function MobileWorkspace({ onNavigate }) {
  const { PhoneFrame } = window;
  const navItem = (label, act) => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, fontFamily: "var(--font-mono)", fontSize: 7.5, color: act ? "var(--purple-400)" : "var(--faint)" }}>
      <span style={{ width: 15, height: 15, border: "1.4px solid currentColor", borderRadius: 3 }} />{label}
    </div>
  );
  return (
    <PhoneFrame time="9:44" battery="99%">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 11 }}>
        <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 15, color: "#fff" }}>Soniq</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)", border: "1px solid var(--line-soft)", borderRadius: 20, padding: "3px 10px" }}>Dark Moon ▾</span>
        <span onClick={() => onNavigate && onNavigate("context")} title="Open Context" style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--purple-600)", color: "#fff", fontSize: 9, fontWeight: 700, display: "grid", placeItems: "center", fontFamily: "var(--font-mono)", cursor: "pointer" }}>MR</span>
      </div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 8.5, letterSpacing: "0.14em", color: "var(--faint)", marginBottom: 9 }}>SONIQ PREPARED THIS WHILE YOU SIGNED UP</div>

      {/* Hero brief — the one yellow */}
      <div style={{ background: "#151515", border: "1px solid var(--line-soft)", borderLeft: "3px solid var(--purple-500)", borderRadius: 11, padding: "12px 13px" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 8.5, letterSpacing: "0.12em", color: "var(--purple-400)", marginBottom: 7 }}>▎START HERE · DARK MOON</div>
        <div style={{ fontFamily: "var(--font-heading)", fontSize: 15, color: "#fff", fontWeight: 600, lineHeight: 1.22, letterSpacing: "-0.01em" }}>Find curators for Dark Moon.</div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "var(--muted)", lineHeight: 1.5, marginTop: 7 }}>Search or paste playlists — Soniq scores each for fit with your sound, then drafts in your voice.</div>
        <div onClick={() => onNavigate && onNavigate("land")} style={{ marginTop: 10, background: "var(--action)", color: "var(--action-ink)", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 12, textAlign: "center", padding: 9, borderRadius: 8, cursor: "pointer", boxShadow: "var(--action-glow)" }}>Find your curators →</div>
        <div style={{ textAlign: "center", fontSize: 10, color: "var(--purple-400)", marginTop: 8 }}>How fit scoring works ↗</div>
      </div>

      {/* Snapshot — honest Day-0 */}
      <div style={{ marginTop: 10, background: "#121212", border: "1px solid var(--line-soft)", borderRadius: 11, padding: "10px 13px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 8.5, letterSpacing: "0.14em", color: "var(--faint)" }}>SNAPSHOT</span>
          <span style={{ fontSize: 11, color: "var(--purple-400)" }}>Full data ›</span>
        </div>
        <div style={{ border: "1px dashed var(--line)", borderRadius: 9, padding: 12, textAlign: "center", color: "var(--muted)", fontSize: 9, fontStyle: "italic", marginBottom: 6 }}>Bring your first curators to see fit scores here.</div>
        <div style={{ fontSize: 9, color: "var(--faint)", fontStyle: "italic" }}>Plays &amp; replies appear once your first pitch ships.</div>
      </div>

      {/* Chat dock + bottom nav */}
      <div style={{ marginTop: "auto" }}>
        <div style={{ background: "#161616", border: "1px solid var(--line)", borderRadius: 22, padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 10.5, color: "var(--faint)" }}>
          <span>Ask Soniq — "last 3 reviews of similar artists"</span>
          <span style={{ width: 20, height: 20, borderRadius: "50%", background: "var(--purple-600)", color: "#fff", display: "grid", placeItems: "center", fontSize: 10 }}>↑</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", borderTop: "1px solid var(--line-soft)", marginTop: 10, paddingTop: 9 }}>
          {navItem("Home", true)}{navItem("Campaigns")}{navItem("Ask")}
        </div>
      </div>
    </PhoneFrame>
  );
}

Object.assign(window, { MobileWorkspace });
