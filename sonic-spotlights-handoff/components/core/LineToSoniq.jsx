import React from "react";

/**
 * LineToSoniq — the single global "talk to Soniq + see what it's doing" panel (Rule 4).
 * Collapsed by default: a thin right edge with a live dot, an Ask button, and a vertical
 * "ASK SONIQ" label. Expanded: an overlay panel with two tabs — Activity (the live feed)
 * and Ask (chat). ⌘K is a SEPARATE concern (find/navigate) — never folded in here.
 *
 * The live dot turns red while sends are paused/bounced.
 */
export function LineToSoniq({
  activity = [],
  defaultOpen = false,
  defaultTab = "activity",
  paused = false,
  style,
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const [tab, setTab] = React.useState(defaultTab);

  const dotColor = paused ? "var(--red-500)" : "var(--positive)";
  const dotGlow = paused ? "0 0 0 3px rgba(239,68,68,.18)" : "0 0 0 3px rgba(52,211,153,.18)";

  if (!open) {
    return (
      <aside
        style={{
          width: 44,
          flex: "none",
          borderLeft: "1px solid var(--border)",
          background: "#040406",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "16px 0",
          gap: 14,
          ...style,
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: "var(--radius-pill)", background: dotColor, boxShadow: dotGlow, flex: "none" }} />
        <button
          type="button"
          aria-label="Ask Soniq"
          onClick={() => setOpen(true)}
          style={{
            width: 30, height: 30, borderRadius: "var(--radius-sm)",
            background: "var(--voice-quiet)", border: "1px solid rgba(124,58,237,.45)",
            color: "var(--purple-400)", display: "grid", placeItems: "center", cursor: "pointer",
          }}
          onFocus={(e) => { e.currentTarget.style.boxShadow = "var(--ring-focus)"; }}
          onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 9 9 0 0 1-4-1L3 20l1.5-4.5a8.5 8.5 0 1 1 16.5-4z" />
          </svg>
        </button>
        <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.16em", color: "var(--text-meta)", marginTop: 4 }}>
          ASK SONIQ
        </span>
      </aside>
    );
  }

  return (
    <aside
      style={{
        width: 300,
        flex: "none",
        borderLeft: "1px solid var(--border)",
        background: "#08080d",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid var(--border)" }}>
        {["activity", "ask"].map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            style={{
              flex: 1, padding: "11px 0", background: "none", border: "none", cursor: "pointer",
              fontFamily: "var(--font-body)", fontSize: 12,
              color: tab === id ? "var(--text-primary)" : "var(--text-meta)",
              borderBottom: tab === id ? "2px solid var(--purple-500)" : "2px solid transparent",
              textTransform: "capitalize",
            }}
          >
            {id}
          </button>
        ))}
        <button
          type="button"
          aria-label="Collapse"
          onClick={() => setOpen(false)}
          style={{ width: 38, background: "none", border: "none", color: "var(--text-meta)", cursor: "pointer", fontSize: 16 }}
        >
          ×
        </button>
      </div>

      {tab === "activity" ? (
        <div style={{ padding: 14, display: "flex", flexDirection: "column", overflowY: "auto" }}>
          {activity.map((ev, i) => (
            <div key={i} style={{ position: "relative", padding: `0 0 14px 16px`, borderLeft: i === activity.length - 1 ? "1px solid transparent" : "1px solid var(--border)" }}>
              <span style={{ position: "absolute", left: -3.5, top: 3, width: 6, height: 6, borderRadius: "var(--radius-pill)", background: "var(--purple-500)" }} />
              <div style={{ fontSize: 12, color: "var(--text-primary)", lineHeight: 1.4 }}>{ev.h}</div>
              {ev.m && <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-meta)", marginTop: 3 }}>{ev.m}</div>}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 14, gap: 12 }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>
            Ask Soniq about a curator, a draft, or your campaign. Answers cite their sources.
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", background: "var(--field-bg)", border: "1px solid var(--line)", borderRadius: "var(--r-md)", padding: "9px 11px" }}>
            <span style={{ flex: 1, fontSize: 13, color: "var(--text-meta)" }}>Ask anything…</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--purple-400)" }}>↵</span>
          </div>
        </div>
      )}
    </aside>
  );
}
