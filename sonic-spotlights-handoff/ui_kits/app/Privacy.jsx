// Settings → Privacy [25] — home of the Soniq Improvement (AI-training) opt-out. A
// reference/settings surface: ZERO yellow (Rule 2); the toggle is brand PURPLE, ON by
// default, reachable in one tap, identical on every plan. Platform data + third-party
// providers are ALWAYS excluded (shown, not governed by the toggle). Marketing/testimonial
// use is a SEPARATE ask-first toggle (off). Scope is forward-only; no "we don't train" copy.
function Privacy({ onNavigate }) {
  const { Card, Badge, Switch } = window.SonicSpotlightsDesignSystem_b87f31;
  const [improve, setImprove] = React.useState(true);   // ON by default
  const [testimonial, setTestimonial] = React.useState(false); // ask-first, off

  const ToggleRow = ({ title, body, checked, onChange, badge }) => (
    <Card padding="14px 16px" style={{ boxShadow: "none" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 600, color: "#fff" }}>{title}</span>
            {badge}
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--text-secondary)", lineHeight: 1.55, marginTop: 6 }}>{body}</div>
        </div>
        <Switch checked={checked} onChange={onChange} />
      </div>
    </Card>
  );
  const Excluded = ({ label, sub }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px" }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.06em", color: "var(--text-meta)", border: "1px solid var(--line-soft)", borderRadius: "var(--radius-pill)", padding: "3px 8px", flex: "none" }}>ALWAYS EXCLUDED</span>
      <div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#e4e4e8" }}>{label}</div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "var(--text-meta)" }}>{sub}</div>
      </div>
    </div>
  );

  return (
    <div style={{ maxWidth: 620, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <div style={{ fontFamily: "var(--font-heading)", fontSize: 19, fontWeight: 700, color: "#fff" }}>Privacy &amp; Soniq Improvement</div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-secondary)", marginTop: 5, lineHeight: 1.55 }}>
          Soniq Improvement uses your content and usage to improve Soniq's models. It's on by default and the same on every plan — turn it off anytime. Opting out applies going forward.
        </div>
      </div>

      <ToggleRow
        title="Soniq Improvement"
        badge={improve ? <Badge tone="voice">On</Badge> : <Badge tone="neutral">Off</Badge>}
        body="When on, your drafts, edits, and usage help train Soniq's own models. Turning it off stops future use — it doesn't erase past training. Forward-only."
        checked={improve}
        onChange={setImprove}
      />

      {/* Always-excluded — shown, not governed by the toggle */}
      <div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", color: "var(--text-meta)", marginBottom: 8 }}>NOT GOVERNED BY THE TOGGLE</div>
        <Card padding="4px 0" style={{ boxShadow: "none" }}>
          <Excluded label="Streaming-platform data" sub="never used for training" />
          <div style={{ borderTop: "1px solid var(--line-soft)" }} />
          <Excluded label="Third-party AI providers" sub="contractually excluded from training on your content" />
        </Card>
      </div>

      <ToggleRow
        title="Marketing & testimonials"
        badge={<Badge tone="neutral">Ask first</Badge>}
        body="Separate from the above. We'll always ask before using your name, music, or results in marketing — never bundled into Soniq Improvement."
        checked={testimonial}
        onChange={setTestimonial}
      />

      <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "var(--text-meta)", lineHeight: 1.55, display: "flex", gap: 14, flexWrap: "wrap" }}>
        <span onClick={() => onNavigate("terms")} style={{ color: "var(--purple-400)", cursor: "pointer" }}>Review updated terms ↗</span>
        <span style={{ color: "var(--purple-400)", cursor: "pointer" }}>Privacy Policy §3 ↗</span>
        <span style={{ color: "var(--purple-400)", cursor: "pointer" }}>Export my data ↗</span>
      </div>
    </div>
  );
}

Object.assign(window, { Privacy });
