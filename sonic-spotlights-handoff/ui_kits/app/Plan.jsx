// The Plan moment [15] — conversion, priced at the 4th draft. The trial-value rail is
// the artist's OWN campaign (receipts, not marketing). One yellow (recommended plan);
// the other is a ghost. Auto-renewal is a separate, never-pre-checked consent.
// Rule 6 boundary: the Spotlights atmosphere returns here — the one workspace route.
function Plan({ onNavigate }) {
  const { Button, Badge } = window.SonicSpotlightsDesignSystem_b87f31;
  const [renew, setRenew] = React.useState(false);

  const built = [
    "12 playlists scored to Dark Moon",
    "3 pitches drafted free — yours to send",
    "1 brief · reasoning attached",
  ];

  return (
    <div style={{
      margin: "-20px -26px -40px", padding: "26px 30px 36px", minHeight: "100%",
      background: "radial-gradient(ellipse 60% 55% at 18% 0%, rgba(124,58,237,.20), transparent 70%), radial-gradient(ellipse 45% 45% at 86% 8%, rgba(250,204,21,.10), transparent 70%), var(--void)",
    }}>
      <div style={{ maxWidth: 760 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--purple-400)", marginBottom: 6 }}>YOU'VE USED YOUR 3 FREE DRAFTS</div>
        <div style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 700, letterSpacing: "-0.01em", color: "#fff", marginBottom: 18 }}>Pick a plan to draft the rest.</div>

        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr 1fr", gap: 12, alignItems: "stretch" }}>
          {/* Trial-value rail — her own campaign */}
          <div style={{ background: "rgba(16,16,25,.85)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-lg)", padding: "15px 16px" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.13em", color: "var(--text-meta)", marginBottom: 12 }}>YOUR TRIAL ALREADY BUILT</div>
            {built.map((b) => (
              <div key={b} style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--text-secondary)", lineHeight: 1.5, marginBottom: 9, display: "flex", gap: 7 }}>
                <span style={{ color: "var(--positive)", fontWeight: 700 }}>✓</span> {b}
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--line-soft)", marginTop: 6, paddingTop: 10, fontFamily: "var(--font-body)", fontSize: 11.5, color: "var(--text-meta)", lineHeight: 1.5 }}>All of it stays yours on any plan — or none.</div>
          </div>

          {/* Solo — ghost */}
          <PlanCard name="Solo" price="$19" blurb="Draft beyond your free 3 · one campaign in motion · artist-logged replies · Context & reasoning included.">
            <Button variant="ghost" style={{ width: "100%", justifyContent: "center" }}>Choose Solo</Button>
          </PlanCard>

          {/* Momentum — recommended, the one yellow */}
          <PlanCard name="Momentum" price="$39" recommended blurb="Unlimited campaigns · curator + press outreach · cadence planning that carries forward what worked.">
            <Button variant="primary" onClick={() => onNavigate("reviewer")} style={{ width: "100%", justifyContent: "center" }} iconRight={<span>→</span>}>Draft the full campaign</Button>
          </PlanCard>
        </div>

        {/* Auto-renewal consent — separate, unchecked */}
        <div style={{ marginTop: 13, background: "rgba(16,16,25,.85)", border: "1px solid var(--line-soft)", borderRadius: "var(--r-md)", padding: "11px 14px", display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span
            onClick={() => setRenew(!renew)}
            style={{ width: 15, height: 15, flex: "none", marginTop: 1, borderRadius: 4, border: `1.5px solid var(--purple-400)`, background: renew ? "var(--purple-500)" : "transparent", cursor: "pointer", display: "grid", placeItems: "center" }}
          >
            {renew && <span style={{ color: "#fff", fontSize: 10, fontWeight: 700 }}>✓</span>}
          </span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.55 }}>
            <strong style={{ color: "#fff" }}>Auto-renewal consent (required, never pre-checked):</strong> my plan renews monthly at the price shown until I cancel. I can cancel anytime in Settings — effective at the end of the paid period, no advance-notice deadline.
          </span>
        </div>
        <div style={{ marginTop: 10, fontFamily: "var(--font-body)", fontSize: 11.5, color: "var(--text-meta)", lineHeight: 1.5 }}>
          Card now, to draft beyond your free 3 — your 3 drafts, scores, and Context stay yours either way. Cancel anytime. · <span style={{ color: "var(--purple-400)", cursor: "pointer" }}>Terms</span> · <span style={{ color: "var(--purple-400)", cursor: "pointer" }}>Privacy</span>
        </div>
      </div>
    </div>
  );
}

function PlanCard({ name, price, blurb, recommended, children }) {
  const { Badge } = window.SonicSpotlightsDesignSystem_b87f31;
  return (
    <div style={{
      position: "relative", background: "var(--field-bg)",
      border: recommended ? "1.5px solid rgba(250,204,21,.45)" : "1px solid var(--line-soft)",
      borderRadius: "var(--r-lg)", padding: "14px 15px", display: "flex", flexDirection: "column",
    }}>
      {recommended && (
        <span style={{ position: "absolute", top: -9, right: 12, background: "var(--action)", color: "var(--action-ink)", fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.1em", padding: "3px 9px", borderRadius: "var(--radius-pill)", fontWeight: 700 }}>BUILT FOR YOUR CADENCE</span>
      )}
      <div style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 700, color: "#fff" }}>{name}</div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 18, color: "#fff", margin: "6px 0 9px" }}>{price}<span style={{ fontSize: 10, color: "var(--text-meta)" }}>/mo</span></div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--text-secondary)", lineHeight: 1.55, flex: 1, marginBottom: 14 }}>{blurb}</div>
      {children}
    </div>
  );
}

Object.assign(window, { Plan });
