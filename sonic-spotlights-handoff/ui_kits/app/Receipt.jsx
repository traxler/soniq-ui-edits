// The Receipt [19] — a reply becomes proof. v7 artist-logged: the artist logged the reply
// (paste optional); Soniq classified intent (POSITIVE), surfaced the ask, and drafted a
// response for review. Provenance says the ARTIST logged it (never "Soniq detected/read").
// Stems travel as Media-library LINKS, never email attachments. One yellow: send the reply.
function Receipt({ onNavigate }) {
  const { Card, Badge, Button, ReasoningNote } = window.SonicSpotlightsDesignSystem_b87f31;

  return (
    <div style={{ maxWidth: 620, display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontFamily: "var(--font-heading)", fontSize: 18, fontWeight: 650, color: "#fff" }}>Tape Warm replied</span>
        <Badge tone="positive" dot>Positive</Badge>
        <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-meta)" }}>you logged this · 2h ago</span>
      </div>

      {/* The logged reply */}
      <div style={{ background: "var(--field-bg)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)", padding: "14px 16px" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.14em", color: "var(--faint)", marginBottom: 8 }}>THE REPLY · AS YOU PASTED IT</div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--text-secondary)", lineHeight: 1.6 }}>
          "Really into this — the tape warmth sits right with the list. Can you send WAV stems and a one-line bio? Hoping to slot it next week."
        </div>
      </div>

      {/* Soniq's read — purple voice */}
      <ReasoningNote tone="voice" citation="classified from the reply you logged · POSITIVE · ask: stems + bio">
        She's in, with one ask: WAV stems and a one-line bio for a slot next week. I drafted a reply below — review it before you send.
      </ReasoningNote>

      {/* Drafted response */}
      <div style={{ background: "var(--field-bg)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)", padding: "14px 16px", fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>
        {"Thanks Tape Warm — so glad it fits. Stems and bio are linked below from my Media library; grab whatever you need. Let me know if next week firms up.\n\n— Maya"}
      </div>

      {/* Media as LINKS, never attachments */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Badge variant="outline" tone="voice">↗ Dark Moon — WAV stems</Badge>
        <Badge variant="outline" tone="voice">↗ One-line bio</Badge>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "var(--text-meta)", alignSelf: "center" }}>Media-library links — never email attachments.</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 2 }}>
        <Button variant="primary" size="lg" iconLeft={<span>✓</span>}>Copy reply &amp; links</Button>
        <span onClick={() => onNavigate("glance")} style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--purple-400)", cursor: "pointer" }}>Back to pipeline</span>
        <span style={{ marginLeft: "auto", fontFamily: "var(--font-body)", fontSize: 11, color: "var(--text-meta)", maxWidth: 150, textAlign: "right", lineHeight: 1.4 }}>You send from your own inbox.</span>
      </div>
    </div>
  );
}

Object.assign(window, { Receipt });
