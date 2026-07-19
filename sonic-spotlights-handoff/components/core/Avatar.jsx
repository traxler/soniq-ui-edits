import React from "react";

/**
 * Avatar — rounded-square image for album art / curator artwork, or a circle for people.
 * Falls back to initials on a surface when no src.
 */
export function Avatar({ src, alt = "", name = "", size = 40, shape = "rounded", style, ...rest }) {
  const radius = shape === "circle" ? "var(--radius-pill)" : "var(--radius-sm)";
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <span
      style={{
        width: size,
        height: size,
        flex: "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: radius,
        overflow: "hidden",
        background: "var(--surface-raised)",
        border: "1px solid var(--border)",
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: size * 0.36,
        color: "var(--text-secondary)",
        ...style,
      }}
      {...rest}
    >
      {src ? (
        <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      ) : (
        initials || "♪"
      )}
    </span>
  );
}
