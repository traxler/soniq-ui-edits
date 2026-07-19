// The Glance [18] — campaign home. The pipeline IS the page: four lifecycle states
// (queued → sent → replied → placed) render left-to-right. Sent→replied is artist-
// logged (one tap, paste optional). "Mark complete" is the artist's, and quiet — no
// yellow on this status surface. No "opened" state (no tracking pixels, ever).
function Glance({ onNavigate }) {
  const { Card, Badge } = window.SonicSpotlightsDesignSystem_b87f31;
  const D = window.SoniqData;
  const P = D.pipeline;
  const [replied, setReplied] = React.useState(false);

  const states = [
    { n: P.queued, label: "queued" },
    { n: P.sent, label: "sent" },
    { n: replied ? P.replied + 1 : P.replied, label: "replied · you log these" },
    { n: P.placed, label: "placed", positive: true },
  ];

  return (
    <div style={{ maxWidth: 640, display: "flex", flexDirection: "column", gap: 14 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontFamily: "var(--font-heading)", fontSize: 18, fontWeight: 650, color: "#fff", whiteSpace: "nowrap" }}>{D.release.title}</span>
        <Badge tone="positive" dot>In motion</Badge>
        <span style={{ marginLeft: "auto", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--purple-400)", cursor: "pointer" }} onClick={() => onNavigate && onNavigate("cadence")}>✓ Mark complete</span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--purple-400)", cursor: "pointer" }}>Campaign settings ⚙</span>
      </div>

      {/* Pipeline — four lifecycle states */}
      <div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", color: "var(--text-meta)", marginBottom: 9 }}>PIPELINE · FOUR LIFECYCLE STATES</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
          {states.map((s) => (
            <div key={s.label} style={{ background: "var(--field-bg)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-md)", padding: "11px 12px" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 17, fontWeight: 700, lineHeight: 1, color: s.positive ? "var(--positive)" : "#fff" }}>{s.n}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--text-meta)", marginTop: 6, lineHeight: 1.3 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mark replied affordance */}
      <Card padding="10px 13px" style={{ boxShadow: "none", display: "flex", alignItems: "center", gap: 11 }}>
        <span
          onClick={() => setReplied(true)}
          style={{ width: 15, height: 15, flex: "none", borderRadius: 4, border: `1.5px solid ${replied ? "var(--positive)" : "var(--purple-400)"}`, background: replied ? "var(--positive)" : "transparent", cursor: "pointer", display: "grid", placeItems: "center" }}
        >
          {replied && <span style={{ color: "#04130d", fontSize: 11, fontWeight: 700 }}>✓</span>}
        </span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-secondary)" }}>
          Tape Warm · sent 3d ago — {replied ? <span onClick={() => onNavigate && onNavigate("receipt")} style={{ color: "var(--positive)", cursor: "pointer" }}>reply logged · see receipt ↗</span> : <strong style={{ color: "var(--purple-400)", fontWeight: 600 }}>heard back? Mark replied</strong>}
        </span>
        <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-meta)", letterSpacing: "0.06em" }}>PASTE THE REPLY · OPTIONAL</span>
      </Card>

      <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--text-meta)", lineHeight: 1.55 }}>
        The pipeline is the page — every pitch advances left to right. Sent → replied is yours: one tap when a curator writes back. No tracking pixels in your mail — your deliverability stays yours.
      </div>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--purple-400)", cursor: "pointer" }} onClick={() => onNavigate && onNavigate("bounced")}>A pitch bounced? See the rollback ↗</span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--purple-400)", cursor: "pointer" }} onClick={() => onNavigate && onNavigate("plan")}>Draft more pitches ↗</span>
      </div>
    </div>
  );
}

Object.assign(window, { Glance });
