import React from "react";

/**
 * Switch — on/off toggle. On = Electric Purple (voice). Calm slide, no bounce.
 */
export function Switch({ checked = false, onChange, disabled = false, label, id, style }) {
  const switchId = id || `ss-switch-${Math.random().toString(36).slice(2, 8)}`;
  const toggle = () => { if (!disabled && onChange) onChange(!checked); };
  return (
    <label
      htmlFor={switchId}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        ...style,
      }}
    >
      <button
        id={switchId}
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={toggle}
        disabled={disabled}
        style={{
          width: 40,
          height: 24,
          flex: "none",
          borderRadius: "var(--radius-pill)",
          border: "none",
          padding: 2,
          background: checked ? "var(--voice)" : "var(--surface-raised)",
          boxShadow: checked ? "none" : "inset 0 0 0 1px var(--border-strong)",
          cursor: disabled ? "not-allowed" : "pointer",
          transition: "background var(--dur-base) var(--ease-out)",
          display: "inline-flex",
          alignItems: "center",
        }}
        onFocus={(e) => { e.currentTarget.style.boxShadow = "var(--ring-focus)"; }}
        onBlur={(e) => { e.currentTarget.style.boxShadow = checked ? "none" : "inset 0 0 0 1px var(--border-strong)"; }}
      >
        <span
          style={{
            width: 20,
            height: 20,
            borderRadius: "var(--radius-pill)",
            background: "#fff",
            transform: checked ? "translateX(16px)" : "translateX(0)",
            transition: "transform var(--dur-base) var(--ease-out)",
            boxShadow: "var(--shadow-sm)",
          }}
        />
      </button>
      {label && (
        <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-primary)" }}>{label}</span>
      )}
    </label>
  );
}
