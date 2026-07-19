// Sign-in [03] — one door, two keys. Utility surface → ZERO Laser Yellow; the purple
// primary is the deliberate visual lead (Rule 1, utility exception). SSO-first (Spotify
// on top). Assent line rides directly beside every continue path (v7.1 legal-UX).
function SignIn({ onNavigate }) {
  const { PhoneFrame, PhoneTop } = window;
  const [tab, setTab] = React.useState("signin");
  const sso = (dot, label) => (
    <div style={{ border: "1px solid var(--line)", borderRadius: 9, padding: 11, fontSize: 11.5, color: "#d4d4da", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer" }}>
      <span style={{ width: 13, height: 13, borderRadius: 3, background: dot, flex: "none" }} />{label}
    </div>
  );
  return (
    <PhoneFrame atmosphere>
      <PhoneTop left="← Soniq" onLeft={() => onNavigate("land")} right={<span style={{ color: "var(--faint)", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em" }}>ACCOUNT</span>} />
      <div style={{ display: "flex", background: "#101010", border: "1px solid var(--line)", borderRadius: 9, padding: 3, marginBottom: 20 }}>
        {[["signin", "Sign in"], ["create", "Create account"]].map(([id, label]) => (
          <div key={id} onClick={() => setTab(id)} style={{ flex: 1, textAlign: "center", fontSize: 11.5, padding: 8, borderRadius: 6, fontWeight: 500, cursor: "pointer", color: tab === id ? "#fff" : "var(--muted)", background: tab === id ? "var(--purple-600)" : "transparent" }}>{label}</div>
        ))}
      </div>
      <div style={{ fontFamily: "var(--font-heading)", fontSize: 18, fontWeight: 600, color: "#fff" }}>{tab === "signin" ? "Welcome back." : "Make your free account."}</div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--muted)", marginTop: 7 }}>{tab === "signin" ? "Pick up where your last release left off." : "No card. You pick a plan after your free drafts."}</div>

      <div style={{ marginTop: 18 }} />
      <div style={{ background: "var(--field-bg)", border: "1px solid var(--line)", borderRadius: 9, padding: 13, fontSize: 11.5, color: "var(--faint)", marginBottom: 11 }}>you@email.com</div>
      <div onClick={() => onNavigate("handoff")} style={{ background: "var(--purple-600)", color: "#fff", fontWeight: 600, fontSize: 12.5, textAlign: "center", padding: 12, borderRadius: 9, boxShadow: "0 0 20px rgba(124,58,237,.3)", cursor: "pointer" }}>Continue →</div>

      <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "16px 0", color: "var(--faint)", fontSize: 10 }}>
        <span style={{ flex: 1, height: 1, background: "var(--line-soft)" }} />or<span style={{ flex: 1, height: 1, background: "var(--line-soft)" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {sso("#1DB954", "Continue with Spotify")}
        {sso("#fff", "Continue with Apple")}
      </div>
      <div style={{ fontSize: 8, color: "#8a8a96", textAlign: "center", marginTop: 9, lineHeight: 1.5 }}>
        By continuing, you agree to the <u style={{ color: "var(--purple-400)" }}>Terms of Service</u> &amp; <u style={{ color: "var(--purple-400)" }}>Privacy Policy</u>
      </div>
      <div style={{ marginTop: "auto", borderTop: "1px solid var(--line-soft)", paddingTop: 11, fontSize: 10, color: "var(--faint)", lineHeight: 1.5 }}>
        New here? The <b style={{ color: "var(--purple-400)", fontWeight: 500 }}>Create account</b> tab opens the same door — free account, no card. You pick a plan <b style={{ color: "var(--purple-400)", fontWeight: 500 }}>after</b> your free drafts — never before.
      </div>
    </PhoneFrame>
  );
}

Object.assign(window, { SignIn });
