import React from "react";

/**
 * Select — native dropdown styled to match Input. Same sunken field + purple focus.
 */
export function Select({ label, value, onChange, options = [], disabled = false, id, style, ...rest }) {
  const selectId = id || `ss-select-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, ...style }}>
      {label && (
        <label
          htmlFor={selectId}
          style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500, color: "var(--text-secondary)" }}
        >
          {label}
        </label>
      )}
      <div style={{ position: "relative" }}>
        <select
          id={selectId}
          value={value}
          onChange={onChange}
          disabled={disabled}
          style={{
            width: "100%",
            height: 44,
            padding: "0 36px 0 12px",
            fontFamily: "var(--font-body)",
            fontSize: 16,
            color: "var(--text-primary)",
            background: "var(--field-bg)",
            border: "1px solid var(--border-strong)",
            borderRadius: "var(--radius-sm)",
            outline: "none",
            appearance: "none",
            cursor: disabled ? "not-allowed" : "pointer",
            opacity: disabled ? 0.5 : 1,
            transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
          }}
          onFocus={(e) => { e.currentTarget.style.boxShadow = "var(--ring-focus)"; e.currentTarget.style.borderColor = "var(--voice)"; }}
          onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "var(--border-strong)"; }}
          {...rest}
        >
          {options.map((o) => {
            const opt = typeof o === "string" ? { value: o, label: o } : o;
            return <option key={opt.value} value={opt.value}>{opt.label}</option>;
          })}
        </select>
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            color: "var(--text-meta)",
            fontSize: 12,
          }}
        >
          ▾
        </span>
      </div>
    </div>
  );
}
