// Artist Context [22] — the memory of record. Reference surface: NO yellow (Rule 2).
// Reached from the artist identity, not the sidebar (Rule 3). Every fact carries
// provenance + a quiet purple correct affordance; corrections write back everywhere
// (Rule 7). All five groups present (reflow, never reduce).
function Context() {
  const { Card, Badge } = window.SonicSpotlightsDesignSystem_b87f31;

  const groups = [
    { k: "Voice & Narrative", v: "Warm, first-person. Craft over hype; live-to-tape.", src: "from bio + edits", action: "✎ correct" },
    { k: "Audience", v: "25–34, weekend-active listeners.", src: "you corrected · 2d ago", action: "✎ correct", corrected: true },
    { k: "Sonic Signature", v: "~118 BPM · lo-fi · negative space.", src: "soniq sonic scans", action: "re-scan ↻" },
    { k: "Press History", v: "No Echo (2025) · Quiet Hour zine.", src: "confirmed placements", action: "all · 4" },
  ];

  return (
    <div style={{ maxWidth: 660, display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 14 }}>
        <div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 18, fontWeight: 650, color: "#fff" }}>What Soniq knows about you</div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-secondary)", marginTop: 6, maxWidth: 440 }}>
            The memory behind every match and pitch. Correct anything — it updates everywhere.
          </div>
        </div>
        <Badge variant="outline" tone="positive" style={{ flex: "none", marginTop: 2 }}>● Never shown to curators</Badge>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {groups.map((g) => (
          <GroupCard key={g.k} {...g} />
        ))}
      </div>

      {/* Curator history — full width */}
      <GroupCard
        k="Curator History"
        full
        rich={<><strong style={{ color: "#fff" }}>Noa Vasquez</strong> placed Dark Moon · 8 contacted · 22% reply · 2 placements</>}
        src="built from your campaigns"
        action="view list ↗"
      />
    </div>
  );
}

function GroupCard({ k, v, rich, src, action, corrected, full }) {
  const { Card, Badge } = window.SonicSpotlightsDesignSystem_b87f31;
  return (
    <Card padding="13px 15px" style={{ boxShadow: "none", gridColumn: full ? "1 / -1" : "auto" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.13em", textTransform: "uppercase", color: "var(--purple-400)" }}>{k}</span>
        {corrected && <Badge variant="outline" tone="voice">✓ corrected</Badge>}
      </div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "#e4e4e8", lineHeight: 1.45 }}>{rich || v}</div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-meta)" }}>{src}</span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--purple-400)", cursor: "pointer" }}>{action}</span>
      </div>
    </Card>
  );
}

Object.assign(window, { Context });
