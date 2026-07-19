// Discovery [08] — Curator discovery, launch / bring-your-own model. One input (search
// OR paste a playlist link), scored cards with a circular FIT score + a SEPARATE
// unverified tag (fit ≠ verified, never merged). One yellow: "Draft pitches for top N".
function Discovery({ onNavigate }) {
  const { Button, Card, Badge, ConfidenceMeter } = window.SonicSpotlightsDesignSystem_b87f31;
  const D = window.SoniqData;

  return (
    <div style={{ maxWidth: 660, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <div style={{ fontFamily: "var(--font-heading)", fontSize: 18, fontWeight: 700, color: "#fff" }}>Where should {D.release.title} go?</div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-secondary)", marginTop: 4 }}>
          Search for a fit, or paste a playlist you already have in mind. Soniq scores any playlist by analyzing it.
        </div>
      </div>

      {/* Unified input */}
      <Card raised padding="12px 13px" style={{ boxShadow: "none" }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{ flex: 1, background: "var(--field-bg)", border: "1px solid var(--line)", borderRadius: "var(--r-md)", padding: "10px 12px", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-meta)" }}>
            ⌕ Search a genre or vibe — or paste a Spotify / Apple Music playlist link
          </span>
          <Button variant="secondary" size="md">Analyze fit</Button>
        </div>
        <div style={{ display: "flex", gap: 7, marginTop: 11, flexWrap: "wrap" }}>
          <Chip on>⌕ Search Soniq</Chip>
          <Chip on>🔗 Paste a link · bring your own</Chip>
          <Chip dashed>✦ Verified network — coming via partner integration</Chip>
        </div>
      </Card>

      <div style={{ display: "flex", alignItems: "center", marginTop: 2 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", color: "var(--text-meta)" }}>{D.curators.length} PLAYLISTS · SCORED BY FIT</span>
        <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-meta)" }}>Sort: fit ▾</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {D.curators.map((c) => (
          <Card key={c.id} accent={c.added ? "voice" : "none"} padding="12px 13px" style={{ boxShadow: "none" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <ConfidenceMeter value={c.fit} state={c.state} size={34} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 600, color: "#fff" }}>{c.name}</span>
                  {c.added && <Badge variant="outline" tone="voice">You added</Badge>}
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-secondary)", marginTop: 3 }}>{c.who}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 5, flex: "none" }}>
                <Badge variant="outline">Unverified</Badge>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--purple-400)", cursor: "pointer", whiteSpace: "nowrap" }} onClick={() => onNavigate("reasoning")}>Why? ↗</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 4 }}>
        <Button variant="primary" size="lg" onClick={() => onNavigate("confirm")} iconRight={<span>→</span>}>Draft pitches for top 3</Button>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--purple-400)", cursor: "pointer" }} onClick={() => onNavigate("analysisFailed")}>Add another link</span>
      </div>
    </div>
  );
}

function Chip({ children, on, dashed }) {
  return (
    <span style={{
      fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.02em",
      border: `1px ${dashed ? "dashed" : "solid"} ${on ? "rgba(124,58,237,.4)" : "var(--line-soft)"}`,
      borderRadius: "var(--radius-pill)", padding: "4px 10px",
      color: on ? "var(--purple-400)" : "var(--text-meta)",
      background: on ? "var(--voice-quiet)" : "transparent",
    }}>{children}</span>
  );
}

Object.assign(window, { Discovery });
