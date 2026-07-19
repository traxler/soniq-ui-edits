// Reviewer / Handoff [16] — the launch send path. Soniq drafts; the artist copies or
// opens in their own email and sends it themselves (no send button — Soniq has no
// mailbox, Rule 5). One yellow: "Copy pitch". Filed under Campaigns.
function Reviewer({ onNavigate }) {
  const { Button, Card, Badge, ConfidenceMeter } = window.SonicSpotlightsDesignSystem_b87f31;
  const D = window.SoniqData;
  const p = D.pitch;
  const [copied, setCopied] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  return (
    <div style={{ maxWidth: 620, display: "flex", flexDirection: "column", gap: 12 }}>
      {/* Curator + draft tag */}
      <Card padding="12px 13px" style={{ boxShadow: "none" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <ConfidenceMeter value={p.fit} state="scored" size={34} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 600, color: "#fff" }}>{p.curator}</span>
              <Badge variant="outline">Draft</Badge>
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-secondary)", marginTop: 3 }}>{p.contact} · drafted from her playlist + your voice</div>
          </div>
          <Badge variant="outline">Unverified</Badge>
        </div>
      </Card>

      {/* Draft body */}
      <div style={{ background: "var(--field-bg)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)", padding: "14px 16px", fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>
        {p.body}
      </div>

      {/* How you send this */}
      <Card accent="voice" raised padding="13px 15px" style={{ boxShadow: "none" }}>
        <div style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 6 }}>How you send this</div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--text-secondary)", lineHeight: 1.55 }}>
          <strong style={{ color: "var(--text-primary)" }}>Copy the pitch</strong>, or open it pre-filled in your own email — to / subject / body ready. You hit send. <strong style={{ color: "var(--text-primary)" }}>Soniq has no mailbox and never sends for you.</strong> When the curator writes back, log the reply with one tap.
        </div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "var(--text-meta)", marginTop: 7, lineHeight: 1.55 }}>
          No tracking pixels in your mail — your deliverability stays yours.
        </div>
      </Card>

      {/* The send handoff — one yellow */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 2 }}>
        <Button variant="primary" size="lg" onClick={() => setCopied(true)} iconLeft={<span>{copied ? "✓" : ""}</span>}>
          {copied ? "Copied" : "Copy pitch"}
        </Button>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--purple-400)", cursor: "pointer" }}>Open in email ↗</span>
        <span
          onClick={() => setSent(true)}
          style={{ fontFamily: "var(--font-body)", fontSize: 13, color: sent ? "var(--positive)" : "var(--purple-400)", cursor: "pointer" }}
        >
          {sent ? "✓ Marked as sent" : "Mark as sent"}
        </span>
        <span style={{ marginLeft: "auto", fontFamily: "var(--font-body)", fontSize: 11, color: "var(--text-meta)", maxWidth: 150, textAlign: "right", lineHeight: 1.4 }}>
          You're always the sender.
        </span>
      </div>

      {sent && (
        <div style={{ marginTop: 4, display: "flex", gap: 12, alignItems: "center" }}>
          <Button variant="secondary" onClick={() => onNavigate("glance")}>See the pipeline →</Button>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--purple-400)", cursor: "pointer" }} onClick={() => onNavigate("plan")}>Draft the rest of the campaign →</span>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { Reviewer });
