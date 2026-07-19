// Terms re-acceptance gate [04] — shown once per terms version to returning users, after
// sign-in and before the workspace, ONLY for material changes. Plain-language change log
// comes BEFORE the legal text. Utility surface: ZERO yellow, purple primary ("I agree —
// continue"). Escapes present: remind-me-later (until effective date), export, cancel.
// Silence is never acceptance. No stale "we don't train on your content" copy.
function TermsGate({ onNavigate }) {
  const { Card, Badge, Button } = window.SonicSpotlightsDesignSystem_b87f31;

  const Diff = ({ kind, children }) => {
    const tone = kind === "new" ? "inferred" : "voice";
    const label = kind === "new" ? "WHAT'S CHANGING" : "UNCHANGED";
    return (
      <div style={{ display: "flex", gap: 11, alignItems: "flex-start", padding: "10px 0", borderBottom: "1px solid var(--line-soft)" }}>
        <span style={{ flex: "none", marginTop: 1 }}><Badge variant="outline" tone={tone}>{label}</Badge></span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.55 }}>{children}</span>
      </div>
    );
  };

  return (
    <div style={{
      margin: "-20px -26px -40px", padding: "26px 30px 36px", minHeight: "100%",
      background: "radial-gradient(ellipse 55% 50% at 20% 0%, rgba(124,58,237,.16), transparent 70%), var(--void)",
    }}>
      <div style={{ maxWidth: 600, display: "flex", flexDirection: "column", gap: 16 }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", color: "var(--purple-400)", marginBottom: 8 }}>BEFORE YOU CONTINUE · TERMS v0.3</div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 700, letterSpacing: "-0.01em", color: "#fff" }}>We've updated our terms.</div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--text-secondary)", marginTop: 8, lineHeight: 1.55 }}>
            Here's the plain-language version first. The full document is one tap away — read it before you agree.
          </div>
        </div>

        {/* Plain-language diff BEFORE the legal text */}
        <Card padding="4px 16px" style={{ boxShadow: "none" }}>
          <Diff kind="new">
            <b style={{ color: "#fff" }}>Soniq Improvement:</b> we now use your content and usage to improve Soniq's own AI models — on by default, opt out anytime in Settings → Privacy. Forward-only.
          </Diff>
          <Diff kind="same">
            <b style={{ color: "#fff" }}>Ownership and approve-before-send are untouched.</b> Your work stays yours; nothing sends without you.
          </Diff>
          <div style={{ paddingTop: 11 }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--purple-400)", cursor: "pointer", marginRight: 16 }}>Read full terms ↗</span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--purple-400)", cursor: "pointer" }}>Compare versions ↗</span>
          </div>
        </Card>

        <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "var(--text-meta)", lineHeight: 1.55 }}>
          We log your agreement with the version and a timestamp. Continued use is never treated as acceptance — this is an explicit step.
        </div>

        {/* Zero yellow — purple primary; escapes present */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Button variant="secondary" size="lg" onClick={() => onNavigate("welcome")} iconRight={<span>→</span>}>I agree — continue</Button>
          <span onClick={() => onNavigate("welcome")} style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--purple-400)", cursor: "pointer" }}>Remind me later</span>
        </div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "var(--text-meta)", display: "flex", gap: 14 }}>
          <span style={{ color: "var(--purple-400)", cursor: "pointer" }}>Export my data</span>
          <span style={{ color: "var(--purple-400)", cursor: "pointer" }}>Cancel my account</span>
          <span>Remind-me-later works until the effective date.</span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { TermsGate });
