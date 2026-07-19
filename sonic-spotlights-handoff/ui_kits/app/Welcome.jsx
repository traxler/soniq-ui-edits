// Welcome [07] — Day-0 workspace. Honest near-empty state: the artist has brought no
// curators yet, so the hero is "Find curators for Dark Moon" (not "pitch to N"), the
// snapshot invites the first curators, and the Line-to-Soniq panel opens to Activity.
function Welcome({ onNavigate }) {
  const { Button, Card, Badge } = window.SonicSpotlightsDesignSystem_b87f31;
  const D = window.SoniqData;

  return (
    <div style={{ maxWidth: 640, display: "flex", flexDirection: "column", gap: 18 }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", color: "var(--purple-400)" }}>
        SONIQ PREPARED THIS WHILE YOU SIGNED UP
      </div>

      {/* Hero brief — purple left edge, the screen's one yellow action */}
      <Card accent="voice" padding="20px 22px">
        <div style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em", color: "#fff" }}>
          Find curators for {D.release.title}.
        </div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.55, margin: "10px 0 18px", maxWidth: 460 }}>
          Search or paste playlists — Soniq scores each for <strong style={{ color: "var(--text-primary)" }}>fit</strong> with your sound, then drafts the pitch in your voice. You send it from your own inbox.
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Button variant="primary" size="lg" onClick={() => onNavigate("Workspace")} iconRight={<span>→</span>}>Find your curators</Button>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--purple-400)", cursor: "pointer" }}>How fit scoring works ↗</span>
        </div>
      </Card>

      <div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", color: "var(--text-meta)", marginBottom: 10 }}>SNAPSHOT</div>
        <div style={{ display: "grid", gridTemplateColumns: "2.4fr 1fr", gap: 10 }}>
          <EmptyTile label="Bring your first curators to see fit scores here" />
          <EmptyTile glyph="—" label="plays · after first send" />
        </div>
      </div>

      <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--text-meta)", display: "flex", alignItems: "center", gap: 8 }}>
        <Badge tone="positive" dot>Trial active</Badge>
        no card on file · the plan moment arrives at your 4th draft
      </div>
    </div>
  );
}

function EmptyTile({ glyph = "—", label }) {
  return (
    <div style={{ border: "1px dashed var(--line)", borderRadius: "var(--r-md)", padding: "14px 14px", background: "transparent" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 18, color: "var(--text-meta)", lineHeight: 1 }}>{glyph}</div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "var(--text-meta)", marginTop: 7, lineHeight: 1.4 }}>{label}</div>
    </div>
  );
}

Object.assign(window, { Welcome });
