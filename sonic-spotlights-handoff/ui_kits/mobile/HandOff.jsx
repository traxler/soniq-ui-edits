// Hand-off [04] — one decision, one offer. After the preview: "You're in." The saved
// card reflects the PREVIEW (sound + the one curator she scored + first draft) — never a
// fabricated "12 matches." One yellow (Find your curators); the laptop is a purple
// informational callout, never a competing button. Mobile = reward, laptop = deep work.
function HandOff({ onNavigate }) {
  const { PhoneFrame, PhoneTop, CtaButton } = window;
  const { Badge } = window.SonicSpotlightsDesignSystem_b87f31;
  const li = (node) => (
    <div style={{ fontSize: 10.5, color: "#c2c2c8", marginBottom: 4, display: "flex", gap: 6, whiteSpace: "nowrap" }}>
      <span style={{ color: "var(--purple-400)" }}>✓</span><span>{node}</span>
    </div>
  );
  return (
    <PhoneFrame atmosphere time="9:43" battery="99%">
      <PhoneTop />
      <div style={{ textAlign: "center", marginBottom: 6 }}>
        <div style={{ width: 54, height: 54, borderRadius: "50%", border: "2px solid var(--purple-500)", display: "grid", placeItems: "center", margin: "2px auto 10px", color: "var(--purple-400)", fontSize: 22, boxShadow: "0 0 22px rgba(124,58,237,.4)" }}>✓</div>
        <div style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 600, color: "#fff" }}>You're in.</div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 10.5, color: "var(--muted)", marginTop: 5 }}>Trial active · no card on file</div>
      </div>

      <div style={{ background: "#141414", border: "1px solid var(--line-soft)", borderRadius: 12, padding: "13px 14px", marginTop: 4 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.16em", color: "var(--faint)", marginBottom: 6 }}>SAVED TO YOUR WORKSPACE</div>
        <div style={{ fontFamily: "var(--font-heading)", fontSize: 13, color: "#fff", fontWeight: 600, marginBottom: 8 }}>Dark Moon · single</div>
        {li("Your sound — analyzed")}
        {li(<>Slow-Core Quarterly — 89 fit · <span style={{ fontFamily: "var(--font-mono)", fontSize: 8.5, letterSpacing: "0.04em", color: "var(--faint)" }}>UNVERIFIED</span></>)}
        {li("Memory — started learning your voice")}
        <div style={{ fontSize: 10, color: "var(--faint)", marginTop: 9, display: "flex", alignItems: "center", gap: 7, whiteSpace: "nowrap" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--purple-500)", boxShadow: "0 0 8px var(--purple-500)" }} />Soniq drafted your first pitch · 14s ago
        </div>
      </div>

      <div style={{ marginTop: 13, background: "var(--voice-quiet)", border: "1px solid rgba(124,58,237,.35)", borderRadius: 11, padding: "12px 13px", display: "flex", gap: 11, alignItems: "flex-start" }}>
        <span style={{ flex: "none", width: 26, height: 18, border: "1.6px solid var(--purple-400)", borderRadius: "3px 3px 0 0", marginTop: 2, position: "relative" }}>
          <span style={{ position: "absolute", left: -5, right: -5, bottom: -4, height: 3, background: "var(--purple-400)", borderRadius: "0 0 3px 3px" }} />
        </span>
        <div style={{ fontSize: 10.5, color: "#cfcfd6", lineHeight: 1.45 }}>
          <b style={{ color: "#fff", fontWeight: 600 }}>The full workspace opens up on a laptop.</b> Link sent to maya@thresholds.band · <span style={{ color: "var(--purple-400)", cursor: "pointer" }}>Resend</span>
        </div>
      </div>

      <CtaButton onClick={() => onNavigate("workspace")} style={{ marginTop: 13 }}>Find your curators →</CtaButton>
      <div style={{ textAlign: "center", fontSize: 9.5, color: "var(--faint)", marginTop: 8 }}>Right here on your phone — let's build your list.</div>
    </PhoneFrame>
  );
}

Object.assign(window, { HandOff });
