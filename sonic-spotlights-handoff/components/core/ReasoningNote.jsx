import React from "react";

/**
 * ReasoningNote — surfaces Soniq's "why." `tone="voice"` (purple) explains a match or
 * inference; `tone="inferred"` (amber) flags a value Soniq guessed. Optional mono
 * `citation`. Transparency is the brand's trust mechanism: never hide an inference.
 */
export function ReasoningNote({ children, citation, tone = "voice", title, style }) {
  const isInferred = tone === "inferred";
  const accent = isInferred ? "var(--inferred)" : "var(--voice)";
  const bg = isInferred ? "var(--inferred-soft)" : "var(--voice-quiet)";
  const heading = title || (isInferred ? "Soniq inferred this" : "Why Soniq picked this");

  const icon = isInferred ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><line x1="12" y1="8" x2="12" y2="13" /><line x1="12" y1="16.5" x2="12" y2="16.5" />
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0-4 10.5c.5.5 1 1.2 1 2V18h6v-2.5c0-.8.5-1.5 1-2A6 6 0 0 0 12 3Z" /><line x1="9" y1="21" x2="15" y2="21" />
    </svg>
  );

  return (
    <div style={{ display: "flex", gap: 10, padding: "12px 14px", background: bg, border: "1px solid transparent", borderRadius: "var(--radius-sm)", ...style }}>
      <span aria-hidden="true" style={{ color: accent, flex: "none", marginTop: 1, display: "inline-flex" }}>{icon}</span>
      <div style={{ display: "flex", flexDirection: "column", gap: 5, minWidth: 0 }}>
        <span style={{ fontFamily: "var(--font-heading)", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: accent }}>
          {heading}
        </span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.5, color: "var(--text-primary)" }}>
          {children}
        </span>
        {citation && (
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-meta)", letterSpacing: "0.01em" }}>
            {citation}
          </span>
        )}
      </div>
    </div>
  );
}
