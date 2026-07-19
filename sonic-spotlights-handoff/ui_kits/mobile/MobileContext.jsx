// Mobile Context [23] — the memory of record on a phone. PARITY RULE: reflow, never
// reduce — all FIVE groups carry (Voice & Narrative, Audience, Sonic Signature, Press
// History, Curator History), every provenance line stays, and correction is first-class
// (a full-tap-target pill, not a tiny link). Reached from the artist menu, NEVER the
// bottom nav (Rule 3). Reference surface — zero yellow.
function MobileContext({ onNavigate }) {
  const { PhoneFrame } = window;
  const { Badge } = window.SonicSpotlightsDesignSystem_b87f31;

  const groups = [
    { k: "Voice & Narrative", v: "Warm, first-person. Craft over hype; live-to-tape.", src: "from bio + edits" },
    { k: "Audience", v: "25–34, weekend-active listeners.", src: "you corrected · 2d ago", corrected: true },
    { k: "Sonic Signature", v: "~118 BPM · lo-fi · negative space.", src: "Soniq sonic scans" },
    { k: "Press History", v: "No Echo (2025) · Quiet Hour zine.", src: "confirmed placements" },
    { k: "Curator History", v: "Noa Vasquez placed Dark Moon · 8 contacted · 22% reply.", src: "built from your campaigns" },
  ];

  return (
    <PhoneFrame>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span onClick={() => onNavigate && onNavigate("workspace")} style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 15, color: "#fff", cursor: "pointer" }}>← Context</span>
        <span style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--purple-600)", color: "#fff", fontSize: 9, fontWeight: 700, display: "grid", placeItems: "center", fontFamily: "var(--font-mono)" }}>MR</span>
      </div>

      {/* Posture line */}
      <div style={{ display: "flex", alignItems: "center", gap: 7, fontFamily: "var(--font-mono)", fontSize: 8.5, letterSpacing: "0.1em", color: "var(--positive)", marginBottom: 12 }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--positive)", flex: "none" }} />
        NEVER SHOWN TO CURATORS · SHAPES TARGETING &amp; TONE
      </div>

      {/* All five groups — stacked, scrollable, each with provenance + correct pill */}
      <div style={{ display: "flex", flexDirection: "column", gap: 9, overflowY: "auto", paddingRight: 2 }}>
        {groups.map((g) => (
          <div key={g.k} style={{ background: "#141414", border: "1px solid var(--line-soft)", borderRadius: 11, padding: "11px 12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.13em", textTransform: "uppercase", color: "var(--purple-400)" }}>{g.k}</span>
              {g.corrected && <Badge variant="outline" tone="voice">✓ corrected</Badge>}
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "#e4e4e8", lineHeight: 1.45 }}>{g.v}</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 9 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, color: "var(--text-meta)" }}>{g.src}</span>
              {/* correction is first-class on mobile — a full tap target, not a tiny link */}
              <span style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "var(--purple-400)", border: "1px solid rgba(124,58,237,.4)", borderRadius: "var(--radius-pill)", padding: "5px 11px", cursor: "pointer" }}>✎ correct</span>
            </div>
          </div>
        ))}
      </div>
    </PhoneFrame>
  );
}

Object.assign(window, { MobileContext });
