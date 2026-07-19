// PhoneFrame — the brand's wireframe phone shell (matches the entry-deck vocabulary):
// dark rounded body, notch pill, 9:41 status bar. Content renders on the Void canvas;
// pass atmosphere to layer the Spotlights treatment behind it (entry surfaces only).
function PhoneFrame({ children, atmosphere = false, time = "9:41", battery = "100%", style }) {
  const { SpotlightsAtmosphere } = window.SonicSpotlightsDesignSystem_b87f31;
  return (
    <div style={{
      width: 300, height: 624, flex: "none", position: "relative",
      background: "var(--void)", borderRadius: 38, border: "1px solid #000",
      boxShadow: "0 0 0 10px #1c1c1c, 0 26px 50px rgba(0,0,0,.45)", overflow: "hidden",
      ...style,
    }}>
      <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", width: 92, height: 5, background: "#2a2a2a", borderRadius: 3, zIndex: 6 }} />
      {atmosphere && SpotlightsAtmosphere && <SpotlightsAtmosphere />}
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", zIndex: 4 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 20px 6px", fontFamily: "var(--font-mono)", fontSize: 11, color: "#cfcfd4" }}>
          <span>{time}</span>
          <span style={{ letterSpacing: 2 }}>●●●● {battery}</span>
        </div>
        <div style={{ position: "relative", flex: 1, minHeight: 0, padding: "8px 20px 18px", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// Shared top bar inside a phone screen.
function PhoneTop({ left = "Soniq", right, onLeft }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 15 }}>
      <span onClick={onLeft} style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 15, color: "#fff", letterSpacing: "-0.01em", cursor: onLeft ? "pointer" : "default" }}>{left}</span>
      {right}
    </div>
  );
}

Object.assign(window, { PhoneFrame, PhoneTop });
