import React from "react";

/**
 * Tag — genre / removable chip. 4px radius. Optional onRemove shows an × affordance.
 */
export function Tag({ children, onRemove, active = false, onClick, style, ...rest }) {
  return (
    <span
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: 26,
        padding: "0 10px",
        fontFamily: "var(--font-body)",
        fontSize: 13,
        fontWeight: 500,
        color: active ? "var(--text-on-purple)" : "var(--text-secondary)",
        background: active ? "var(--voice)" : "var(--surface-raised)",
        border: `1px solid ${active ? "transparent" : "var(--border)"}`,
        borderRadius: "var(--radius-xs)",
        cursor: onClick ? "pointer" : "default",
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          aria-label="Remove"
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 14,
            height: 14,
            padding: 0,
            border: "none",
            background: "transparent",
            color: "inherit",
            opacity: 0.6,
            cursor: "pointer",
            fontSize: 14,
            lineHeight: 1,
          }}
        >
          ×
        </button>
      )}
    </span>
  );
}
