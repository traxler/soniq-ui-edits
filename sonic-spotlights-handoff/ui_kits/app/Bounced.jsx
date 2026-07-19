// Failure state B — sends paused / bounced [17]. The bounce lands in the artist's inbox,
// so the rollback is artist-logged: one tap returns the pitch to "ready to send" with the
// reason, never counted as sent. The rest of the pipeline is untouched. The live dot goes
// red while a bounce is unresolved (AppShell passes paused). One yellow: the fix.
function Bounced({ onNavigate }) {
  const { Button, Card, Badge, ConfidenceMeter } = window.SonicSpotlightsDesignSystem_b87f31;

  return (
    <div style={{ maxWidth: 640, display: "flex", flexDirection: "column", gap: 12 }}>
      {/* Red banner — impossible to miss, names the cause, one yellow */}
      <div style={{ background: "rgba(239,68,68,.07)", border: "1px solid rgba(239,68,68,.45)", borderRadius: "var(--r-lg)", padding: "12px 14px", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 600, color: "#fff" }}>Tape Warm bounced — you logged it, Soniq rolled it back.</div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-secondary)", marginTop: 3, lineHeight: 1.45 }}>The bounce landed in your inbox; one tap here returns the pitch to ready to send with the reason. Never counted as sent.</div>
        </div>
        <Button variant="primary" size="md" iconRight={<span>→</span>}>Fix address &amp; re-draft</Button>
      </div>

      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", color: "var(--text-meta)" }}>PIPELINE · ONE ROLLED BACK</div>

      {/* Bounced row */}
      <Card padding="12px 13px" style={{ boxShadow: "none", border: "1px solid rgba(239,68,68,.4)" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <ConfidenceMeter state="error" size={34} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 600, color: "#fff" }}>Tape Warm</span>
              <Badge variant="outline" tone="danger">Bounced</Badge>
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-secondary)", marginTop: 3, lineHeight: 1.45 }}>you logged the bounce · rolled back to <strong style={{ color: "var(--text-primary)" }}>ready to send</strong> with the reason — never counted as sent</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 5, flex: "none" }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--purple-400)", cursor: "pointer", whiteSpace: "nowrap" }}>Edit address</span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--purple-400)", cursor: "pointer", whiteSpace: "nowrap" }}>Remove</span>
          </div>
        </div>
      </Card>

      {/* Unaffected ready row */}
      <Card padding="12px 13px" style={{ boxShadow: "none" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <ConfidenceMeter state="nodata" size={34} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 600, color: "#fff" }}>Slow-Core Quarterly</span>
              <Badge variant="outline">Ready to send</Badge>
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-secondary)", marginTop: 3 }}>drafted &amp; approved · copy it whenever you're ready — unaffected by the bounce</div>
          </div>
        </div>
      </Card>

      <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "var(--text-meta)", lineHeight: 1.5 }}>
        Nothing silent, nothing automatic. A bounce only changes state when you log it — the rest of your pipeline is untouched.
      </div>
      <div>
        <Button variant="secondary" onClick={() => onNavigate("glance")}>Back to the pipeline</Button>
      </div>
    </div>
  );
}

Object.assign(window, { Bounced });
