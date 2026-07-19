// Media [Campaigns/Media nav] — the reusable-asset library. This is where stems, bios,
// press shots, and cover art live, and where the Receipt's "↗ stems / bio" links point:
// media travels as LIBRARY LINKS, never email attachments (Rule, Receipt). Reference
// surface — zero yellow; the per-asset action is a purple "Copy link ↗".
function Media() {
  const { Card, Badge } = window.SonicSpotlightsDesignSystem_b87f31;

  const assets = [
    { name: "Dark Moon — WAV stems", kind: "WAV", meta: "5 tracks · 248 MB", used: "linked in 1 reply" },
    { name: "Dark Moon — master", kind: "WAV", meta: "1 file · 52 MB", used: "—" },
    { name: "One-line bio", kind: "TXT", meta: "edited 2d ago", used: "linked in 1 reply" },
    { name: "Long bio", kind: "TXT", meta: "edited 2d ago", used: "—" },
    { name: "Press shot — 2026", kind: "IMG", meta: "JPG · 3000×2000", used: "—" },
    { name: "Cover art — Dark Moon", kind: "IMG", meta: "JPG · 3000×3000", used: "—" },
  ];
  const kindColor = { WAV: "voice", TXT: "neutral", IMG: "neutral" };

  return (
    <div style={{ maxWidth: 660, display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 12 }}>
        <div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 19, fontWeight: 700, color: "#fff" }}>Media</div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-secondary)", marginTop: 4 }}>Reusable assets for your releases. They travel to curators as links — never email attachments.</div>
        </div>
        <span style={{ marginLeft: "auto", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--purple-400)", cursor: "pointer", whiteSpace: "nowrap" }}>＋ Upload</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {assets.map((a) => (
          <Card key={a.name} padding="13px 14px" style={{ boxShadow: "none" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 11 }}>
              <span style={{ width: 38, height: 38, flex: "none", borderRadius: "var(--r-md)", background: "var(--field-bg)", border: "1px solid var(--line-soft)", display: "grid", placeItems: "center", fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.04em", color: "var(--text-secondary)" }}>{a.kind}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: 13.5, fontWeight: 600, color: "#fff", lineHeight: 1.3 }}>{a.name}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--text-meta)", marginTop: 4 }}>{a.meta}</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12 }}>
              {a.used === "—"
                ? <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-meta)" }}>not yet linked</span>
                : <Badge variant="outline" tone="voice">{a.used}</Badge>}
              <span style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--purple-400)", cursor: "pointer" }}>Copy link ↗</span>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "var(--text-meta)", lineHeight: 1.55 }}>
        A link can't bounce the way a multi-track WAV attachment can — so stems and bios always go out as Media links, and you keep one source of truth.
      </div>
    </div>
  );
}

Object.assign(window, { Media });
