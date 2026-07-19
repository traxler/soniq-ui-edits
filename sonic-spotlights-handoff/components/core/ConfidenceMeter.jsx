import React from "react";

/**
 * ConfidenceMeter — the brand's circular FIT score. A mono number inside a purple
 * ring: "the system being exact." Fit (Soniq's analysis) is ALWAYS a separate signal
 * from verification — never merge a fit number with a verified/unverified badge.
 *
 * States:
 *   scored  — purple ring + number (default)
 *   muted   — grey ring (lower-confidence / secondary)
 *   nodata  — dashed ring, shows "—" (nothing to analyze; never fabricate a number)
 *   error   — red ring, shows "!" (analysis failed)
 */
export function ConfidenceMeter({
  value = 0,
  label = "fit",
  showLabel = false,
  state = "scored",
  size = 44,
  style,
}) {
  const rings = {
    scored: { border: "2px solid var(--purple-500)", color: "var(--purple-400)", dashed: false },
    muted:  { border: "2px solid #888",               color: "#cfcfd4",          dashed: false },
    nodata: { border: "2px solid var(--line)",        color: "var(--faint)",     dashed: true  },
    error:  { border: "2px solid rgba(239,68,68,.6)", color: "var(--red-500)",   dashed: false },
  };
  const r = rings[state] || rings.scored;
  const glyph = state === "nodata" ? "—" : state === "error" ? "!" : value;
  const numSize = Math.round(size * 0.34);

  const circle = (
    <span
      role="img"
      aria-label={state === "scored" || state === "muted" ? `${value} ${label}` : state === "nodata" ? "no fit data" : "analysis failed"}
      style={{
        width: size,
        height: size,
        flex: "none",
        borderRadius: "var(--radius-pill)",
        border: r.border,
        borderStyle: r.dashed ? "dashed" : "solid",
        color: r.color,
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        fontSize: numSize,
        display: "inline-grid",
        placeItems: "center",
        lineHeight: 1,
      }}
    >
      {glyph}
    </span>
  );

  if (!showLabel) return style ? <span style={style}>{circle}</span> : circle;
  return (
    <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 6, ...style }}>
      {circle}
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-meta)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
        {label}
      </span>
    </span>
  );
}
