import React from "react";

/**
 * Badge — small status marker. Two shapes:
 *   variant="soft" (default) — a filled pill (Figtree), for live/draft status.
 *   variant="outline"        — a mono, uppercase, hairline tag (UNVERIFIED, PRESS,
 *                              YOU ADDED, BOUNCED, DRAFT) — the deck's `.tag` style.
 * Tones map to the semantic palette. `dot` adds a leading status dot (soft only).
 */
export function Badge({ tone = "neutral", variant = "soft", children, dot = false, style, ...rest }) {
  const tones = {
    neutral:  { color: "var(--text-secondary)", bg: "var(--surface-raised)", bd: "var(--line-soft)" },
    voice:    { color: "var(--purple-400)", bg: "var(--voice-quiet)", bd: "rgba(124,58,237,.4)" },
    positive: { color: "var(--positive)", bg: "var(--positive-soft)", bd: "rgba(52,211,153,.4)" },
    inferred: { color: "var(--inferred)", bg: "var(--inferred-soft)", bd: "rgba(245,166,35,.5)" },
    danger:   { color: "var(--danger)", bg: "var(--danger-soft)", bd: "rgba(239,68,68,.5)" },
  };
  const t = tones[tone] || tones.neutral;

  if (variant === "outline") {
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
          height: 18,
          padding: "0 7px",
          fontFamily: "var(--font-mono)",
          fontSize: 9,
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: t.color,
          background: "transparent",
          border: `1px solid ${t.bd}`,
          borderRadius: "var(--radius-pill)",
          whiteSpace: "nowrap",
          ...style,
        }}
        {...rest}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: 22,
        padding: "0 9px",
        fontFamily: "var(--font-heading)",
        fontSize: 12,
        fontWeight: 600,
        lineHeight: 1,
        color: t.color,
        background: t.bg,
        border: `1px solid ${tone === "neutral" ? "var(--border)" : "transparent"}`,
        borderRadius: "var(--radius-pill)",
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: "var(--radius-pill)", background: t.color, flex: "none" }} />}
      {children}
    </span>
  );
}
