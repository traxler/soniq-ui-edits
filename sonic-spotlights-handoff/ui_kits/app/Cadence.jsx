// Cadence loop [20] — end-of-campaign recap that rolls into the next release. Recap
// stats (placements, reply rate, time saved), then a PROPOSED wind-down — rendered as a
// proposal, never applied; campaign state changes only on artist action (Rule, Cadence).
// Entry point #3 into Context ("update before next release"). Mark complete is quiet.
function Cadence({ onNavigate }) {
  const { Card, Badge, Button, ReasoningNote } = window.SonicSpotlightsDesignSystem_b87f31;

  const Stat = ({ n, label, positive }) => (
    <div style={{ background: "var(--field-bg)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-md)", padding: "13px 14px", flex: 1 }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 22, fontWeight: 700, lineHeight: 1, color: positive ? "var(--positive)" : "#fff" }}>{n}</div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "var(--text-meta)", marginTop: 7 }}>{label}</div>
    </div>
  );
  const Propose = ({ children }) => (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "9px 0" }}>
      <span style={{ width: 16, height: 16, flex: "none", marginTop: 1, borderRadius: 4, border: "1.5px solid var(--purple-400)", display: "grid", placeItems: "center", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--purple-400)" }}>›</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>{children}</span>
    </div>
  );

  return (
    <div style={{ maxWidth: 640, display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontFamily: "var(--font-heading)", fontSize: 19, fontWeight: 700, color: "#fff" }}>Dark Moon — the recap</span>
        <Badge tone="positive" dot>2 placed</Badge>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <Stat n="2" label="placements" positive />
        <Stat n="22%" label="reply rate · 8 contacted" />
        <Stat n="~6h" label="time saved vs. manual" />
      </div>

      {/* Proposed wind-down — proposal, not applied */}
      <div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", color: "var(--purple-400)", marginBottom: 4 }}>SONIQ PROPOSES · NOTHING APPLIED YET</div>
        <Card accent="voice" padding="6px 15px" style={{ boxShadow: "none" }}>
          <Propose>Carry <b style={{ color: "#fff" }}>Slow-Core Quarterly</b> forward — it placed, worth pitching again next release.</Propose>
          <Propose>Drop <b style={{ color: "#fff" }}>2 no-replies</b> from your default list; keep them as contacts.</Propose>
          <Propose>Update your Context with what worked before the next release.</Propose>
        </Card>
      </div>

      <ReasoningNote tone="voice" citation="proposed from this campaign's results">
        This is a proposal — I won't change anything until you say so. Apply what's useful and carry it into your next release.
      </ReasoningNote>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Button variant="secondary" onClick={() => onNavigate("context")} iconRight={<span>→</span>}>Apply &amp; update Context</Button>
        <span onClick={() => onNavigate("glance")} style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--purple-400)", cursor: "pointer" }}>✓ Mark campaign complete</span>
      </div>
    </div>
  );
}

Object.assign(window, { Cadence });
