// Reasoning drawer / anatomy [21] — the XAI surface. Opens from any "Why? ↗". Reference
// surface: ZERO yellow, every action purple (Rule 2). Header = FIT score + curator + ×.
// Two-column grid: Evidence + Assumptions (left), Risk + Sources (right). The Memory
// source link opens Context; challenging an assumption is a correction loop into Context.
function ReasoningDrawer({ onNavigate }) {
  const { Card, Badge, ConfidenceMeter, Button } = window.SonicSpotlightsDesignSystem_b87f31;

  const Quad = ({ kicker, children }) => (
    <div style={{ background: "var(--field-bg)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-md)", padding: "13px 14px" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.14em", color: "var(--purple-400)", marginBottom: 9 }}>{kicker}</div>
      {children}
    </div>
  );
  const Item = ({ children }) => (
    <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5, marginBottom: 8, display: "flex", gap: 8 }}>
      <span style={{ color: "var(--purple-400)", flex: "none" }}>·</span><span>{children}</span>
    </div>
  );

  return (
    <div style={{ maxWidth: 640, display: "flex", flexDirection: "column", gap: 14 }}>
      {/* Drawer header */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, paddingBottom: 14, borderBottom: "1px solid var(--border)" }}>
        <ConfidenceMeter value={89} state="scored" showLabel label="fit" size={48} />
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 18, fontWeight: 650, color: "#fff" }}>Slow-Core Quarterly</div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--text-secondary)", marginTop: 2 }}>Why this scored 89 — every claim is auditable.</div>
        </div>
        <Badge variant="outline">Unverified</Badge>
        <span onClick={() => onNavigate("discovery")} style={{ marginLeft: 6, width: 30, height: 30, display: "grid", placeItems: "center", borderRadius: "var(--r-md)", border: "1px solid var(--line)", color: "var(--text-meta)", cursor: "pointer", fontSize: 16 }}>×</span>
      </div>

      {/* Two-column grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <Quad kicker="EVIDENCE">
          <Item>Playlist averages <b style={{ color: "var(--text-primary)" }}>112 BPM</b> with a female-vocal lean — close to your sonic scan.</Item>
          <Item>3 of the last 20 adds resemble your sound by similarity read.</Item>
          <Item>Lots of negative space; reverb-forward, slow tempos.</Item>
        </Quad>
        <Quad kicker="RISK">
          <Item>Adds cadence is slow — ~2 new tracks / month.</Item>
          <Item>No public contact on the playlist page itself.</Item>
        </Quad>
        <Quad kicker="ASSUMPTIONS">
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>Curator still favors lo-fi (last verified from 90-day window).</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--purple-400)", cursor: "pointer", whiteSpace: "nowrap", flex: "none" }}>Challenge ↗</span>
            </div>
          </div>
        </Quad>
        <Quad kicker="SOURCES">
          <Item>Public playlist tracks · audio analysis</Item>
          <Item>Your sonic scan · Dark Moon</Item>
          <div style={{ marginTop: 4 }}>
            <span onClick={() => onNavigate("context")} style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--purple-400)", cursor: "pointer" }}>Memory · 2 files ↗</span>
          </div>
        </Quad>
      </div>

      {/* Purple actions — no yellow on a reference surface */}
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Button variant="secondary" onClick={() => onNavigate("confirm")}>Apply mitigation</Button>
        <span onClick={() => onNavigate("context")} style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--purple-400)", cursor: "pointer" }}>Challenge an assumption</span>
      </div>
    </div>
  );
}

Object.assign(window, { ReasoningDrawer });
