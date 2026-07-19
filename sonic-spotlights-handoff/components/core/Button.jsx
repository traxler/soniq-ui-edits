import React from "react";

/**
 * Button — Sonic Spotlights
 *
 * The one-decision rule lives here. `primary` is the single Laser-Yellow action —
 * at most ONE per screen, and NONE on utility/auth or reference surfaces. `secondary`
 * (outlined Electric Purple) is the everyday action and appears freely. `ghost` is the
 * quiet tertiary; `destructive` (red fill) is for irreversible confirmations only.
 *
 * There is NO emerald button — emerald is a status color, never an action.
 */
export function Button({
  variant = "secondary",
  size = "md",
  loading = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  onClick,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: { height: 36, padding: "0 13px", fontSize: 13, gap: 6 },
    md: { height: 44, padding: "0 18px", fontSize: 14, gap: 8 },
    lg: { height: 52, padding: "0 24px", fontSize: 16, gap: 10 },
    xl: { height: 60, padding: "0 30px", fontSize: 17, gap: 11 },
  };
  const s = sizes[size] || sizes.md;

  const [hover, setHover] = React.useState(false);

  const base = {
    primary:     { background: "var(--action)", color: "var(--action-ink)", border: "1px solid transparent", fontWeight: 700, boxShadow: "var(--action-glow)" },
    secondary:   { background: "transparent", color: "var(--purple-400)", border: "1.5px solid var(--purple-500)", fontWeight: 600 },
    ghost:       { background: "transparent", color: "var(--text-secondary)", border: "1px solid var(--line)", fontWeight: 600 },
    destructive: { background: "var(--red-600)", color: "#fff", border: "1px solid transparent", fontWeight: 600 },
  };
  const hov = {
    primary:     { filter: "brightness(1.06)" },
    secondary:   { background: "var(--purple-500)", color: "#fff" },
    ghost:       { background: "var(--border-faint)", color: "var(--text-primary)" },
    destructive: { filter: "brightness(1.08)" },
  };
  const v = base[variant] || base.secondary;
  const isDisabled = disabled || loading;
  const hoverStyle = !isDisabled && hover ? hov[variant] : null;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      data-variant={variant}
      aria-busy={loading || undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: s.gap,
        height: s.height,
        padding: s.padding,
        fontSize: s.fontSize,
        fontFamily: "var(--font-heading)",
        lineHeight: 1,
        letterSpacing: "-0.005em",
        borderRadius: "var(--r-md)",
        cursor: isDisabled ? "not-allowed" : "pointer",
        opacity: isDisabled ? 0.42 : 1,
        transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out)",
        whiteSpace: "nowrap",
        ...v,
        ...hoverStyle,
        ...style,
      }}
      onFocus={(e) => { e.currentTarget.style.boxShadow = "var(--ring-focus)"; }}
      onBlur={(e) => { e.currentTarget.style.boxShadow = variant === "primary" ? "var(--action-glow)" : "none"; }}
      {...rest}
    >
      {loading ? (
        <span style={{ display: "inline-flex", alignItems: "center", gap: s.gap }}>
          <Spinner />
          <span>Working…</span>
        </span>
      ) : (
        <>
          {iconLeft}
          {children}
          {iconRight}
        </>
      )}
    </button>
  );
}

function Spinner() {
  return (
    <span
      style={{
        width: 14,
        height: 14,
        borderRadius: "var(--radius-pill)",
        border: "2px solid currentColor",
        borderTopColor: "transparent",
        display: "inline-block",
        animation: "ss-spin 0.7s linear infinite",
      }}
    >
      <style>{"@keyframes ss-spin{to{transform:rotate(360deg)}}"}</style>
    </span>
  );
}
