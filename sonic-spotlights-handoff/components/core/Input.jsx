import React from "react";

/**
 * Input — text field on the void. 8px radius, 1px hairline, purple focus ring.
 * `status` colors the border: error (red), success (emerald), inferred (amber, for
 * AI-pre-filled values the artist should review). Transparency is the brand's trust
 * mechanism — never hide that a value was inferred.
 */
export function Input({
  label,
  status,            // "error" | "success" | "inferred"
  helper,
  size = "md",
  iconLeft = null,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const inputId = id || `ss-input-${Math.random().toString(36).slice(2, 8)}`;
  const statusColor = {
    error: "var(--danger)",
    success: "var(--positive)",
    inferred: "var(--inferred)",
  }[status];
  const restBorder = statusColor || "var(--border-strong)";
  const dims = {
    sm: { height: 36, fontSize: 14 },
    md: { height: 44, fontSize: 16 },
    lg: { height: 52, fontSize: 18 },
  }[size] || { height: 44, fontSize: 16 };
  const height = dims.height;
  const fontSize = dims.fontSize;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, ...style }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: 8 }}
        >
          {label}
          {status === "inferred" && (
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--inferred)", background: "var(--inferred-soft)", padding: "2px 6px", borderRadius: "var(--radius-xs)" }}>
              Inferred
            </span>
          )}
        </label>
      )}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        {iconLeft && (
          <span style={{ position: "absolute", left: 12, color: "var(--text-meta)", display: "inline-flex" }}>{iconLeft}</span>
        )}
        <input
          id={inputId}
          disabled={disabled}
          style={{
            width: "100%",
            height,
            padding: iconLeft ? "0 12px 0 38px" : "0 12px",
            fontFamily: "var(--font-body)",
            fontSize,
            color: "var(--text-primary)",
            background: "var(--field-bg)",
            border: `1px solid ${restBorder}`,
            borderRadius: "var(--radius-sm)",
            outline: "none",
            opacity: disabled ? 0.5 : 1,
            transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
          }}
          onFocus={(e) => { e.currentTarget.style.boxShadow = "var(--ring-focus)"; if (!statusColor) e.currentTarget.style.borderColor = "var(--voice)"; }}
          onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = restBorder; }}
          {...rest}
        />
      </div>
      {helper && (
        <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: statusColor && status !== "inferred" ? statusColor : "var(--text-meta)" }}>
          {helper}
        </span>
      )}
    </div>
  );
}
