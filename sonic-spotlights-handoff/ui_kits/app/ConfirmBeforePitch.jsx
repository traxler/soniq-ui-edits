// Confirm-before-pitch checklist — the two-step approve (Rule 5). Three sections:
// This release · About you (from Context) · Who I'll pitch. Every item is pre-filled and
// individually correctable; items Soniq INFERRED carry an amber "I inferred this" flag
// (attention, not error). One yellow CTA. Footnote: nothing sends from here.
function ConfirmBeforePitch({ onNavigate }) {
  const { Card, Badge, Button, ReasoningNote } = window.SonicSpotlightsDesignSystem_b87f31;

  const Section = ({ kicker, children }) => (
    <div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", color: "var(--text-meta)", marginBottom: 8 }}>{kicker}</div>
      <Card padding="4px 0" style={{ boxShadow: "none", background: "transparent", border: "1px solid var(--line-soft)" }}>{children}</Card>
    </div>
  );
  const Row = ({ label, value, inferred, last }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 14px", borderBottom: last ? "none" : "1px solid var(--line-soft)" }}>
      <span style={{ width: 130, flex: "none", fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-meta)" }}>{label}</span>
      <span style={{ flex: 1, fontFamily: "var(--font-body)", fontSize: 13.5, color: "#fff" }}>{value}</span>
      {inferred && <Badge tone="inferred">I inferred this</Badge>}
      <span style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--purple-400)", cursor: "pointer", whiteSpace: "nowrap" }}>✎ correct</span>
    </div>
  );

  return (
    <div style={{ maxWidth: 640, display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <div style={{ fontFamily: "var(--font-heading)", fontSize: 19, fontWeight: 700, color: "#fff" }}>Confirm before I draft.</div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-secondary)", marginTop: 4 }}>Everything below is pre-filled — fix anything before I write. Inferred items are flagged.</div>
      </div>

      <Section kicker="THIS RELEASE">
        <Row label="Title" value="Dark Moon · single" />
        <Row label="Out" value="Jun 14" />
        <Row label="Sound" value="lo-fi · shoegaze · ~118 BPM" inferred last />
      </Section>

      <Section kicker="ABOUT YOU · FROM YOUR CONTEXT">
        <Row label="Voice" value="Warm, first-person; craft over hype." />
        <Row label="Angle" value="Lead with the live-to-tape detail." inferred last />
      </Section>

      <Section kicker="WHO I'LL PITCH">
        <Row label="Top fits" value="Slow-Core Quarterly · Tape Warm · Bedroom Pop Gems" />
        <Row label="Verification" value="All unverified — you'll send from your inbox" last />
      </Section>

      <ReasoningNote tone="inferred">Amber means I inferred it from your sound and Context — worth a glance, not an error. Nothing sends from this screen.</ReasoningNote>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Button variant="primary" size="lg" onClick={() => onNavigate("reviewer")} iconRight={<span>→</span>}>Looks right — draft 3 pitches</Button>
        <span onClick={() => onNavigate("discovery")} style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--purple-400)", cursor: "pointer" }}>Adjust targeting</span>
      </div>
    </div>
  );
}

Object.assign(window, { ConfirmBeforePitch });
