import React from "react";

/**
 * IconButton — square, icon-only control. Ghost by default; `voice` tints purple.
 * Pass a Lucide (or any) SVG/node as children.
 */
export function IconButton({ variant = "ghost", size = "md", disabled = false, label, onClick, children, style, ...rest }) {
  const sizes = { sm: 30, md: 38, lg: 46 };
  const dim = sizes[size] || sizes.md;
  const variants = {
    ghost: { background: "transparent", color: "var(--text-secondary)", border: "1px solid var(--border)" },
    voice: { background: "var(--voice-quiet)", color: "var(--voice)", border: "1px solid transparent" },
    solid: { background: "var(--surface-raised)", color: "var(--text-primary)", border: "1px solid var(--border)" },
  };
  const v = variants[variant] || variants.ghost;
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      style={{
        width: dim,
        height: dim,
        flex: "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "var(--radius-sm)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)",
        ...v,
        ...style,
      }}
      onMouseEnter={(e) => { if (!disabled && variant === "ghost") { e.currentTarget.style.background = "var(--surface-raised)"; e.currentTarget.style.color = "var(--text-primary)"; } }}
      onMouseLeave={(e) => { if (variant === "ghost") { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--text-secondary)"; } }}
      onFocus={(e) => { e.currentTarget.style.boxShadow = "var(--ring-focus)"; }}
      onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
      {...rest}
    >
      {children}
    </button>
  );
}
