import React from "react";

/**
 * Card — the surface primitive. Sits on the void as a lighter surface with a 1px
 * hairline and soft shadow. `raised` lightens further; `interactive` adds hover lift;
 * `accent="voice"` adds a purple left edge to mark the active / reasoning item.
 */
export function Card({ raised = false, interactive = false, accent = "none", padding = "var(--sp-lg)", children, onClick, style, ...rest }) {
  const accentBorder = accent === "voice" ? "var(--voice)" : accent === "positive" ? "var(--positive)" : null;
  return (
    <div
      onClick={onClick}
      style={{
        position: "relative",
        background: raised ? "var(--bg-raised)" : "var(--bg-surface)",
        border: "1px solid var(--border)",
        borderLeft: accentBorder ? `3px solid ${accentBorder}` : "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-md)",
        padding,
        cursor: interactive ? "pointer" : "default",
        transition: "transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
        ...style,
      }}
      onMouseEnter={(e) => { if (interactive) { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.borderColor = "var(--border-strong)"; } }}
      onMouseLeave={(e) => { if (interactive) { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "var(--border)"; } }}
      {...rest}
    >
      {children}
    </div>
  );
}
