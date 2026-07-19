# Soniq — App UI Kit

A high-fidelity, interactive recreation of the **Soniq** artist app, composed from this
design system's core components. Dark-first, one Laser Yellow decision per screen.

## Run
Open `index.html`. It mounts a click-through app shell with five screens:

1. **Dashboard** (`Dashboard.jsx`) — "Your release dashboard": release hero with the one yellow action (*Review curator matches*), stat cards, top-3 match preview.
2. **Curator matches** (`CuratorMatches.jsx`) — ranked match list with mono confidence scores, genre tags, expandable reasoning notes, platform filters. Topbar yellow action drafts pitches.
3. **Pitch composer** (`PitchComposer.jsx`) — Soniq's editable draft + a context rail (curator, confidence, reasoning, inferred tone). The single yellow *Confirm send* lives in the composer footer; confirming shows the sent success state.
4. **Analytics** (`Analytics.jsx`) — reference surface (no yellow): lifetime totals, saves-by-campaign bars, campaign table.
5. **Context** (inline in `index.html`) — the "what Soniq remembers" memory page; explains only, no action.

## Flow to try
Dashboard → *Review curator matches* → expand a reasoning note → *Draft pitch* → edit the draft → *Confirm send* → *View analytics*.

## Architecture
- `AppShell.jsx` — sidebar nav + topbar chrome; takes `title`, `subtitle`, `action`, `children`.
- `data.js` — fake artist/curator/campaign data (`window.SoniqData`).
- Screens export themselves to `window`; `index.html` loads the `_ds_bundle.js`, Lucide icons (CDN), then the screen files, and renders `App`.
- Components come from `window.SonicSpotlightsDesignSystem_b87f31` (Button, Card, Input, Badge, Avatar, ConfidenceMeter, ReasoningNote, etc.) — not re-implemented here.

## Notes
- Icons: **Lucide** via CDN — a flagged substitution for the brand's line-icon set (no icon binaries were provided). Swap for the real set when available.
- Curator artwork uses Unsplash placeholders.
