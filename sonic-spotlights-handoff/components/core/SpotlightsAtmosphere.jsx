import React from "react";

/**
 * SpotlightsAtmosphere — the brand's signature entry-surface treatment (Rule 6):
 * crossed purple + gold spotlight beams, soft light pools, a top vignette, and a fine
 * grain. Use ONLY on acquisition / boundary surfaces — Land, Try, Sign-in, Hand-off,
 * and /plan. The working app stays calm: never put this behind a workspace surface.
 *
 * Renders as an absolutely-positioned, non-interactive layer. Drop it as the first
 * child of a position:relative dark container; put content in a layer above it.
 */
export function SpotlightsAtmosphere({ intensity = 1, grain = true, style }) {
  const beam = (extra) => ({
    position: "absolute", top: -60, width: 230, height: 430, filter: "blur(2px)",
    transformOrigin: "top center", ...extra,
  });
  return (
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden", ...style }}>
      {/* top vignette */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 80% at 50% 0%, rgba(124,58,237,0.10), rgba(5,5,5,0) 55%)" }} />
      {/* purple beam */}
      <div style={beam({ left: -30, transform: "rotate(17deg)", background: `linear-gradient(180deg, rgba(124,58,237,${0.32 * intensity}), rgba(124,58,237,0) 72%)` })} />
      {/* gold beam */}
      <div style={beam({ right: -40, transform: "rotate(-15deg)", background: `linear-gradient(180deg, rgba(250,204,21,${0.20 * intensity}), rgba(250,204,21,0) 70%)` })} />
      {/* purple pool */}
      <div style={{ position: "absolute", width: 200, height: 120, left: 8, bottom: 60, borderRadius: "50%", filter: "blur(34px)", background: `rgba(124,58,237,${0.28 * intensity})` }} />
      {/* gold pool */}
      <div style={{ position: "absolute", width: 150, height: 90, right: 0, bottom: 120, borderRadius: "50%", filter: "blur(34px)", background: `rgba(250,204,21,${0.10 * intensity})` }} />
      {/* grain */}
      {grain && <div style={{ position: "absolute", inset: 0, opacity: 0.5, backgroundImage: "radial-gradient(rgba(255,255,255,0.05) .5px, transparent .5px)", backgroundSize: "3px 3px" }} />}
    </div>
  );
}
