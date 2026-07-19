// AppShell — desktop chrome for the Soniq app (dark-first).
// Top bar (mark + name + ⌘K + avatar) · left sidebar (Workspace · Campaigns · Media) ·
// main region · the Line-to-Soniq panel at the right edge. Context lives behind the
// avatar menu, NOT in the sidebar (Rule 3). No Artifacts item (v7.4).
function AppShell({ active, onNavigate, crumb, panelOpen, panelTab, paused, children }) {
  const { LineToSoniq } = window.SonicSpotlightsDesignSystem_b87f31;
  const D = window.SoniqData;
  const nav = ["Workspace", "Campaigns", "Media"];

  return (
    <div style={{ display: "flex", height: "100%", minHeight: 0, background: "var(--bg-app)", color: "var(--text-primary)" }}>
      {/* Sidebar */}
      <aside style={{ width: 210, flex: "none", borderRight: "1px solid var(--border)", display: "flex", flexDirection: "column", background: "#0a0a10" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "14px 16px", borderBottom: "1px solid var(--border)" }}>
          <img src="../../assets/app-icon.png" alt="" style={{ width: 22, height: 22, borderRadius: 6 }} />
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14, letterSpacing: "-0.01em" }}>Sonic Spotlights</span>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", padding: "12px 0" }}>
          {nav.map((label) => {
            const on = active === label;
            return (
              <button
                key={label}
                onClick={() => onNavigate(label)}
                style={{
                  position: "relative", textAlign: "left", width: "100%", border: "none", cursor: "pointer",
                  padding: "9px 16px", background: "transparent",
                  color: on ? "var(--text-primary)" : "var(--text-meta)",
                  fontFamily: "var(--font-body)", fontSize: 13.5, fontWeight: on ? 550 : 400,
                }}
              >
                {on && <span style={{ position: "absolute", left: 0, top: 6, bottom: 6, width: 2.5, borderRadius: "0 2px 2px 0", background: "var(--purple-500)" }} />}
                {label}
              </button>
            );
          })}
        </nav>
        <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 9, padding: "12px 16px", borderTop: "1px solid var(--border)", cursor: "pointer" }} onClick={() => onNavigate("context")} title="Open Context (memory of record)">
          <span style={{ width: 28, height: 28, borderRadius: "var(--radius-pill)", background: "#3a2f5e", display: "grid", placeItems: "center", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--purple-400)", fontWeight: 600, flex: "none", border: active === "__context" ? "1px solid rgba(124,58,237,.5)" : "none" }}>{D.artist.initials}</span>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-primary)" }}>{D.artist.name}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--purple-400)" }}>{D.artist.handle} · Context ↗</div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <header style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 18px", borderBottom: "1px solid var(--border)", background: "#0a0a10" }}>
          <span style={{ flex: 1, background: "var(--field-bg)", border: "1px solid var(--line)", borderRadius: "var(--r-md)", color: "var(--text-meta)", fontFamily: "var(--font-body)", fontSize: 12.5, padding: "7px 11px", maxWidth: 280 }}>⌘K  Search anything</span>
          <span onClick={() => onNavigate("privacy")} title="Settings · Privacy" style={{ marginLeft: "auto", width: 30, height: 30, display: "grid", placeItems: "center", borderRadius: "var(--r-md)", border: "1px solid var(--border)", color: active === "__privacy" ? "var(--purple-400)" : "var(--text-meta)", cursor: "pointer", fontSize: 15 }}>⚙</span>
          <span style={{ width: 28, height: 28, borderRadius: "var(--radius-pill)", background: "#3a2f5e", display: "grid", placeItems: "center", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--purple-400)", fontWeight: 600 }}>{D.artist.initials}</span>
        </header>
        <div style={{ flex: 1, display: "flex", minHeight: 0 }}>
          <div style={{ flex: 1, overflowY: "auto", padding: "20px 26px 40px", minWidth: 0 }}>
            {crumb && <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-meta)", letterSpacing: "0.03em", marginBottom: 16 }}>{crumb}</div>}
            {children}
          </div>
          <LineToSoniq activity={D.activity} defaultOpen={panelOpen} defaultTab={panelTab || "activity"} paused={paused} />
        </div>
      </main>
    </div>
  );
}

Object.assign(window, { AppShell });
