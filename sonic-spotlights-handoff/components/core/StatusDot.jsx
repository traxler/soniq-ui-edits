import React from "react";

/**
 * StatusDot — tiny state indicator. `live` adds a calm emerald pulse.
 */
export function StatusDot({ tone = "neutral", live = false, pulse = false, size = 8, label, style }) {
  const animate = live || pulse;
  const tones = {
    neutral:  "var(--ink-faint)",
    positive: "var(--positive)",
    voice:    "var(--voice)",
    inferred: "var(--inferred)",
    danger:   "var(--danger)",
  };
  const color = tones[tone] || tones.neutral;
  const dot = (
    <span style={{ position: "relative", display: "inline-flex", width: size, height: size, flex: "none" }}>
      <span style={{ position: "absolute", inset: 0, borderRadius: "var(--radius-pill)", background: color }} />
      {animate && (
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "var(--radius-pill)",
            background: color,
            animation: "ss-pulse 1.8s var(--ease-out) infinite",
          }}
        >
          <style>{"@keyframes ss-pulse{0%{transform:scale(1);opacity:.6}70%{transform:scale(2.6);opacity:0}100%{opacity:0}}"}</style>
        </span>
      )}
    </span>
  );
  if (!label) return dot;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, ...style }}>
      {dot}
      <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-secondary)" }}>{label}</span>
    </span>
  );
}
