// Land [01] — the first 30 seconds. Spotlights atmosphere; one Laser-Yellow CTA; the
// mono line answers scope ("one link") + reward timing ("~60s") in purple. BYOC-honest:
// the artist brings/searches; Soniq scores fit + drafts. No "Soniq finds curators."
function Land({ onNavigate }) {
  const { PhoneFrame, PhoneTop } = window;
  const tick = (t) => (
    <div style={{ fontSize: 11, color: "#c7c7cd", display: "flex", gap: 7 }}>
      <span style={{ color: "var(--purple-400)" }}>✓</span><span>{t}</span>
    </div>
  );
  return (
    <PhoneFrame atmosphere>
      <PhoneTop right={<span onClick={() => onNavigate("signin")} style={{ fontSize: 12, color: "var(--purple-400)", cursor: "pointer" }}>Sign in</span>} />
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--faint)", marginBottom: 10 }}>FOR RELEASING ARTISTS</div>
      <div style={{ fontFamily: "var(--font-heading)", fontSize: 21, fontWeight: 600, color: "#fff", lineHeight: 1.16, letterSpacing: "-0.01em" }}>
        Your next release, pitched to people who actually listen.
      </div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, lineHeight: 1.5, color: "var(--muted)", marginTop: 10 }}>
        Search or bring the playlist curators and press you have in mind — Soniq scores each for fit with your sound and drafts the pitch in your voice. You send it from your own inbox.
      </div>
      <CtaButton onClick={() => onNavigate("try")} style={{ marginTop: 16 }}>Try with your release →</CtaButton>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--faint)", textAlign: "center", marginTop: 9 }}>
        <b style={{ color: "var(--purple-400)", fontWeight: 500 }}>~60s</b> to your first fit score · one link
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 7, marginTop: 14 }}>
        {tick("No card. You're always the sender.")}
        {tick("Built for 4–8wk release cadence")}
      </div>
      <div style={{ marginTop: "auto", borderTop: "1px solid var(--line-soft)", paddingTop: 11 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.16em", color: "var(--faint)", marginBottom: 7 }}>HOW IT WORKS</div>
        {["Drop your music", "Bring or search curators → Soniq scores fit", "Copy & send from your inbox"].map((s, i) => (
          <div key={i} style={{ fontSize: 10.5, color: "#bcbcc2", marginBottom: 4 }}>
            <span style={{ fontFamily: "var(--font-mono)", color: "var(--purple-400)", marginRight: 6 }}>{String(i + 1).padStart(2, "0")}</span>{s}
          </div>
        ))}
      </div>
    </PhoneFrame>
  );
}

// Shared full-width yellow CTA (the one decision on entry surfaces).
function CtaButton({ children, onClick, style }) {
  return (
    <div onClick={onClick} style={{
      background: "var(--action)", color: "var(--action-ink)", fontFamily: "var(--font-heading)",
      fontWeight: 700, fontSize: 13.5, textAlign: "center", padding: 13, borderRadius: 9,
      boxShadow: "var(--action-glow)", cursor: "pointer", ...style,
    }}>{children}</div>
  );
}

Object.assign(window, { Land, CtaButton });
