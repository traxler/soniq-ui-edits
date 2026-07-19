import React from "react";

/**
 * Checkbox — square, 4px radius. Checked = purple voice with a white check.
 */
export function Checkbox({ checked = false, onChange, disabled = false, label, id, style }) {
  const boxId = id || `ss-check-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <label
      htmlFor={boxId}
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
        id={boxId}
        type="button"
        role="checkbox"
        aria-checked={checked}
        onClick={() => { if (!disabled && onChange) onChange(!checked); }}
        disabled={disabled}
        style={{
          width: 20,
          height: 20,
          flex: "none",
          borderRadius: "var(--radius-xs)",
          border: checked ? "1px solid var(--voice)" : "1px solid var(--border-strong)",
          background: checked ? "var(--voice)" : "var(--bg-sunken)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: disabled ? "not-allowed" : "pointer",
          transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
          padding: 0,
        }}
        onFocus={(e) => { e.currentTarget.style.boxShadow = "var(--ring-focus)"; }}
        onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
      >
        {checked && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </button>
      {label && (
        <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-primary)" }}>{label}</span>
      )}
    </label>
  );
}
