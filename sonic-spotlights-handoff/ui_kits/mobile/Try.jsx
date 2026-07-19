// Try [02] — "show me, don't tell me." Step 2 of 2: sound captured, now score a curator
// she brings (paste a link, or one-tap sample). Real fit score before any account. The
// preview-terms notice sits quiet (8px) beside the CTA — notice here, clickwrap at signup.
function Try({ onNavigate }) {
  const { PhoneFrame, PhoneTop, CtaButton } = window;
  return (
    <PhoneFrame atmosphere>
      <PhoneTop left="← Soniq · try" onLeft={() => onNavigate("land")} right={<span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", color: "var(--faint)" }}>STEP 2 OF 2</span>} />
      <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)", fontSize: 8.5, letterSpacing: "0.06em", color: "var(--purple-400)", marginBottom: 9 }}>✓ YOUR SOUND · CAPTURED</div>
      <div style={{ fontFamily: "var(--font-heading)", fontSize: 19, fontWeight: 600, color: "#fff", letterSpacing: "-0.01em" }}>Now — a curator to score.</div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--muted)", marginTop: 7 }}>Bring one you have in mind. Still no sign-up.</div>

      <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", color: "var(--faint)", margin: "16px 0 7px" }}>PASTE A PLAYLIST · OR SEARCH</div>
      <div style={{ background: "var(--field-bg)", border: "1px solid var(--line)", borderRadius: 9, padding: 13, fontSize: 12, color: "var(--faint)" }}>🔗 Spotify / Apple Music playlist link</div>
      <div style={{ borderTop: "1px solid var(--line-soft)", margin: "11px 0" }} />
      <div style={{ fontSize: 11, color: "var(--purple-400)" }}>No curator yet? <b style={{ color: "#fff", fontWeight: 600, cursor: "pointer" }} onClick={() => onNavigate("handoff")}>Try a sample →</b></div>

      <CtaButton onClick={() => onNavigate("handoff")} style={{ marginTop: "auto" }}>Score the fit →</CtaButton>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, color: "var(--faint)", textAlign: "center", marginTop: 9 }}>Fit only — verification comes later. We never auto-pitch.</div>
      <div style={{ fontSize: 8, color: "#8a8a96", textAlign: "center", marginTop: 7, lineHeight: 1.5 }}>
        By continuing you agree to the <u style={{ color: "var(--purple-400)" }}>Terms</u> &amp; <u style={{ color: "var(--purple-400)" }}>Privacy Policy</u>
      </div>
    </PhoneFrame>
  );
}

Object.assign(window, { Try });
