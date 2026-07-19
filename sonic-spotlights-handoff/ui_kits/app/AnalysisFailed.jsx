// Failure state A — Analysis failed [11]. A pasted link that can't be analyzed (private
// playlist, dead link) fails loudly, specifically, recoverably. No score, no guess
// (inherits the honest blank). Red marks the error; recovery actions are yellow/purple.
function AnalysisFailed({ onNavigate }) {
  const { Button, Card, Badge, ConfidenceMeter } = window.SonicSpotlightsDesignSystem_b87f31;

  return (
    <div style={{ maxWidth: 640, display: "flex", flexDirection: "column", gap: 12 }}>
      {/* Input — the failed link, red border */}
      <Card raised padding="12px 13px" style={{ boxShadow: "none" }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{ flex: 1, background: "var(--field-bg)", border: "1px solid var(--red-500)", borderRadius: "var(--r-md)", padding: "10px 12px", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-secondary)" }}>
            🔗 open.spotify.com/playlist/4xK9…
          </span>
          <Button variant="secondary" size="md">Analyze fit</Button>
        </div>
      </Card>

      {/* Error card — no score */}
      <Card accent="none" padding="12px 13px" style={{ boxShadow: "none", border: "1px solid rgba(239,68,68,.4)" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <ConfidenceMeter state="error" size={34} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 600, color: "#fff" }}>Couldn't analyze this playlist</span>
              <Badge variant="outline" tone="danger">Analysis failed</Badge>
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-secondary)", marginTop: 3 }}>the link resolves to a private playlist — Soniq can only read public tracks</div>
          </div>
        </div>
      </Card>

      {/* Honest explanation — purple-left card */}
      <Card accent="voice" padding="11px 14px" style={{ boxShadow: "none" }}>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.55 }}>
          <strong style={{ color: "#fff" }}>I couldn't read this one.</strong> The playlist is private, so there's nothing to analyze yet — no score, and I won't guess at one. Make it public (or paste another link) and I'll score it in seconds. Or keep it as a contact with no fit data and I'll still draft the pitch.
        </div>
      </Card>

      {/* Recovery — one yellow + alternates */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Button variant="primary" size="lg" iconRight={<span>→</span>}>Re-try analysis</Button>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--purple-400)", cursor: "pointer" }} onClick={() => onNavigate("discovery")}>Paste a different link</span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--purple-400)", cursor: "pointer" }} onClick={() => onNavigate("reviewer")}>Keep as no-fit contact</span>
      </div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "var(--text-meta)" }}>
        Nothing was added or lost — the contact stays on your list either way.
      </div>
    </div>
  );
}

Object.assign(window, { AnalysisFailed });
