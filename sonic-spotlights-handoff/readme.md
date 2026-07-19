# Sonic Spotlights — Design System

> The reconciled UI system for **Sonic Spotlights** (product name **Soniq**), an AI-powered
> music-marketing platform. Built to make **one decision obvious at a time**, on a calm dark workspace.

---

## 1. Product context

**Sonic Spotlights / Soniq** is an AI co-pilot for independent music promotion. The primary persona is the **Momentum Builder** — an artist who releases every 4–8 weeks and needs to reach the right curators and press without it becoming a second job. The spine, mirrored across mobile and desktop: **the first 90 seconds on a phone → the first session in the workspace → a campaign rolling out → a reasoning layer that earns trust.**

- **Find curators — search or bring-your-own (BYOC).** At launch there is **no verified network**: the artist searches a genre/vibe **or pastes a playlist link**, and Soniq scores each playlist for **fit** by analyzing it (its genres, audio profile, and which of its artists resemble the artist). The verified network arrives later via partner integration (e.g. Groover).
- **Fit ≠ Verified — two signals, never merged.** Every result shows a *fit* score (Soniq's analysis, works today) and a separate *verified / unverified* state. Never combine them into one badge.
- **Soniq drafts; the artist sends.** At launch Soniq has **no send capability** — it drafts the pitch in the artist's voice; the artist **copies it or opens it pre-filled in their own inbox** and sends it themselves. Replies are **artist-logged** (one tap, paste optional). No inbox scanning, no tracking pixels, no "opened" state — ever.
- **The plan moment is at the 4th draft.** Three drafts are free; the paywall gates *drafting the rest of the campaign*, not the matches, the scoring, or the send. Value before price.

The core discipline: **the human stays in control.** Soniq reasons, drafts, infers, and proposes — the artist confirms before anything leaves, owns the record (sends, replies, endings), and can correct any inferred fact (which writes back everywhere). The UI makes the single decision an artist is there to make unmistakable, and keeps everything else quiet.

### Sources provided
Authority order when sources disagree: **`Sonic_Spotlights_UI_System.pdf`** (visual system) → **`tokens.css` / `tokens.json`** (its machine mirror) → **`README.md` handoff** (intent / behavior / screens) → the **wireframes** (layout / flow).

- `uploads/Sonic_Spotlights_UI_System.pdf` — the **brand UI System**: color, type, spacing, buttons, inputs, accessibility. Source of truth for the visual system.
- `uploads/README.md` — the **Soniq Design Handoff v7.4**: cardinal rules, component inventory, all 26 screens with acceptance checks, anti-patterns. Source of truth for intent + behavior. (Fully reflected in this system.)
- `uploads/tokens.css` / `uploads/tokens.json` — machine-readable token mirror → reconciled into `tokens/`.
- `uploads/fonts.css` — webfont declarations for the three families.
- `uploads/Soniq_Combined_Wireframes_v7_4.pdf` — the 26-page deck (visual / flow ground-truth).
- `uploads/wireframes-reference.html` · `uploads/wireframes-entry-reference.html` — the authored wireframe pages (layout, structure, class vocabulary). The UI kit here is built from these, not from screenshots.
- `uploads/2026_SonicSpotlights_LOGOhorizontalgradientdark.png` → `assets/logo-horizontal-dark.png` (white wordmark, **dark** surfaces).
- `uploads/2026_SonicSpotlights_LOGOhorizontalgradientlight.png` → `assets/logo-horizontal-light.png` (slate wordmark, **light** surfaces only — never on Void Black).
- `uploads/sonicspotlightsappicon.png` → `assets/app-icon.png` (gradient mark; the mark-only glyph for tight spaces).
- Fonts: `Figtree.ttf`, `JetBrainsMono.ttf`, `PlusJakartaSans.ttf` → `assets/fonts/`.

No codebase or Figma was provided; the PDF + handoff + wireframes are authoritative and this system is their faithful, buildable implementation.

---

## 1b. Cardinal rules (load-bearing — do not undo)

From the handoff §2. These look like style choices but encode product decisions:

1. **One Laser Yellow action per screen.** Yellow marks the single most important decision; purple is flow / reasoning / secondary. **Utility/auth surfaces carry zero yellow** and use the purple secondary as their visual primary.
2. **Reference surfaces carry no yellow** (Context, reasoning drawer, settings) — they *show*, they don't *decide*.
3. **Context lives behind the artist avatar, not the sidebar.** The sidebar is exactly **Workspace · Campaigns · Media** — no Context, no Artifacts.
4. **One "Line to Soniq" panel, collapsed by default** — Activity + Ask tabs at the right edge. ⌘K (find/navigate) is separate.
5. **Two-step approve; nothing auto-sends.** The artist confirms sends, logs replies, and ends campaigns. Soniq proposes; the artist commits.
6. **"Spotlights" atmosphere on entry surfaces only** (landing, sign-in, hand-off, and `/plan`). The workspace stays calm.
7. **Provenance on every Context fact** — each shows its source and a correct affordance; corrections write back everywhere.

---

## 2. Content fundamentals (voice & tone)

How Sonic Spotlights writes.

- **Second person, artist-facing.** Copy speaks to *you* (the artist) about *your* release, *your* voice, *your* matches. Soniq is named in the third person as the assistant doing the work: "Soniq drafts the pitch… you review and confirm."
- **Calm, confident, decisive.** Short declaratives. Headlines like *"Built to make one decision obvious at a time."* and *"Collaborate. Create."* No hype, no exclamation marks.
- **Trust through transparency.** The product never hides that it's inferring. Copy surfaces *why*: "drafts the pitch from the curator's history and your voice." Inferred values get an explicit amber "I inferred this" flag — never silent.
- **Precision data reads like a machine, on purpose.** Scores, timestamps, and citations are terse, lower-case, dot-separated, in mono: `89 fit · cited 2 sources · cached 2h ago`. The deck standardizes on **fit** (not "match") for the score. This is the only place the voice goes clipped/technical.
- **Sentence case everywhere** for headings and buttons ("Find your curators", "Copy pitch", "Mark replied"). The only ALL-CAPS is small tracked eyebrow/section labels (e.g. `CORE PALETTE`, `SNAPSHOT`, `UNVERIFIED`).
- **Verbs that respect consent.** "Copy pitch", "Mark as sent", "Mark replied", "Mark complete" — the artist acts; Soniq proposes. Destructive copy is plain ("Delete campaign").
- **BYOC honesty.** Never say Soniq *finds / supplies* curators on launch surfaces — the artist **brings or searches**; Soniq **scores fit + drafts**. No fabricated counts on Day-0; the honest near-empty state instead.
- **No emoji in product chrome.** A single check glyph (✓) appears on confirm/success affordances; otherwise iconography is line icons, not emoji.

**Sample voice**
> Search or paste the playlists you have in mind — Soniq scores each for fit with your sound and drafts the pitch in your voice. You send it from your own inbox.

> 89 fit · unverified · cited 2 sources · computed from public tracks + your sonic scan

---

## 3. Visual foundations

**Overall vibe:** a calm, dark, focused studio. Most of the screen is Void Black and quiet neutrals;
color is spent deliberately. The brand's full-spectrum gradient lives in the logo and rare hero moments —
the working UI is restrained.

### Color
Dark-first. See `tokens/colors.css`.
- **Void Black `#050505`** is the canvas — the calm workspace. Cards sit on it as slightly lighter surfaces (`#16161c`, raised `#1c1c24`); **depth comes from surface lightening, not heavy shadows.**
- **Electric Purple `#8b5cf6`** is the brand *voice* — it carries flow, reasoning, links, and **secondary** actions, so it appears often. It's also the "Soniq is thinking" color (the focus ring).
- **Laser Yellow `#FACC15`** does the opposite job: **rare on purpose.** It marks the single most important action on a screen — **one per screen.** On reference surfaces that only show or explain, there is *no* yellow at all.
- **Emerald `#10b981 / #34d399`** — confirmed, positive, live status. **Red `#ef4444`** — destructive confirmations only. **Amber `#f5a623`** — the "I inferred this" flag, *never* a button fill.
- **The one-decision rule** is the heart of the system: purple everywhere, yellow once. The contrast is what makes the next step unmistakable.
- **Brand gradient** (logo / app icon): violet → blue → cyan → green → gold, ~120°. Use it for the mark and the occasional hero accent — not for UI fills or text.

### Type
See `tokens/typography.css`.
- **Plus Jakarta Sans** — headings. Geometric, confident, just-rounded corners for warmth. Display 64/800, H1 48/700, H2 32/700, H3 24/600.
- **Figtree** — body. Humanist, open, highly readable on dark. Large 18, Default 16, Small 14, all 400.
- **JetBrains Mono** — precision **only**. 12–13px. Confidence scores, timestamps, source citations — "the system being exact." Never prose or headings.
- Small all-caps tracked labels (`letter-spacing: 0.06em`) in Plus Jakarta act as eyebrows / section markers.

### Spacing & layout
8-point grid (`tokens/spacing.css`). Small steps (2–8px) bind elements inside a component; large steps (24–64px) separate sections and create breathing room. On mobile, drop one step (lg → md). Layouts are generous and uncrowded — the calm comes from whitespace.

### Shape, border, shadow
- **Radius:** 8px is the default (inputs, buttons). Cards 12px, large cards / modals 16px, pills/avatars full. Tags 4px.
- **Borders:** 1px hairlines at low opacity (`rgba(244,244,245,.10)`) define cards and inputs on the void.
- **Shadows:** soft and low — `0 4px 16px rgba(0,0,0,.45)` for cards, deeper for popovers. No long colored drop shadows. Glows are reserved (a faint yellow glow may emphasize the one action; a faint emerald ring for live status).

### Motion
Calm and decisive. Default ease `cubic-bezier(0.2,0.8,0.2,1)`, 120–320ms. Hovers and small state changes are fast (120ms); drawers/modals slower (320ms). No bounces, no infinite decorative loops. Reasoning/"thinking" states use the purple glow, not spinners-everywhere.

### Interaction states
- **Hover:** purple actions lighten toward `--purple-400`; the yellow action brightens slightly; ghost/neutral elements get a faint surface wash.
- **Press:** subtle (no large scale jumps); brightness/opacity shift.
- **Focus:** the **purple ring** — `0 0 0 3px rgba(139,92,246,.55)` (`--ring-focus`) — on *every* interactive control. Same purple that signals reasoning.
- **Disabled:** opacity 0.5, no pointer events.
- **Working…:** loading state on buttons (label swaps to a working state); the primary keeps its place so the decision doesn't move.

### Transparency & blur
Used sparingly: popovers/menus over content, and low-opacity color washes for soft status backgrounds (`--positive-soft`, `--inferred-soft`, `--voice-quiet`). No heavy glassmorphism.

### Imagery
Album art and curator/playlist artwork are the primary imagery, shown in rounded squares. The brand's own imagery skews dark with the spectrum gradient as the single saturated element.

---

## 4. Iconography

- **Line icons, consistent stroke.** The product uses a single, even-stroke line-icon family (~1.5–1.75px, currentColor). No icon binaries shipped with the brand assets; the UI kit uses **minimal inline SVGs** for the few glyphs it needs (the Ask chat-bubble, the reasoning bulb, the check) plus terse text/unicode affordances (`⌘K`, `→`, `↗`, `▾`). For production, standardize on **Lucide** (`https://unpkg.com/lucide@latest`) as the closest CDN match — **flagged as a substitution**; swap for the real set if/when provided.
- **Stroke, not fill.** Icons are stroked, ~1.5–1.75px, currentColor — they inherit the ink ramp (primary/muted/faint) or the voice purple for interactive ones.
- **The check (✓)** is the one glyph that recurs as a brand affordance — on success / mark-complete states (emerald).
- **No emoji** in product chrome. **No hand-drawn / decorative SVG illustration** — the gradient mark is the only ornament.
- **The mark:** an *S* monogram inside a radiating spotlight-burst, on the spectrum gradient (`assets/app-icon.png`). Use the **mark only** in the top bar and tight spaces; the full horizontal lockup where width allows (sign-in, hand-off, marketing). The mark is exempt from the one-yellow rule and keeps its full gradient — but its cyan/teal/green hues **must not** enter UI tokens, components, or actions.

---

## 5. Index — what's in this system

**Root**
- `styles.css` — global entry point (consumers link this one file). `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill manifest for downloadable use.

**`tokens/`** — CSS custom properties
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css`

**`assets/`**
- `logo-horizontal-dark.png` · `logo-horizontal-light.png` · `app-icon.png` · `fonts/*.ttf`

**`guidelines/`** — foundation specimen cards (Design System tab): colors, type, spacing, brand.

**`components/core/`** — reusable React primitives (`window.SonicSpotlightsDesignSystem_b87f31`):
Button · IconButton · Input · Select · Switch · Checkbox · Badge (soft + outline) · Tag · Card · Avatar · **ConfidenceMeter** (circular fit score) · **ReasoningNote** · **LineToSoniq** (the global panel) · **SpotlightsAtmosphere** (entry-surface treatment) · StatusDot.
Note: **no emerald button** (emerald is status only); `Button` variants are `primary | secondary | ghost | destructive`.

**`ui_kits/app/`** — Soniq app UI kit (v7.4 flow), interactive click-through composed from the core components:
- **Welcome** — Day-0 workspace, honest near-empty snapshot, panel open to Activity.
- **Discovery** — curator discovery (search + bring-your-own); circular fit scores + separate UNVERIFIED tags; one yellow "Draft pitches for top 3".
- **ReasoningDrawer** — the XAI surface (opens from "Why?"): Evidence · Assumptions · Risk · Sources, Memory link into Context; reference surface, zero yellow.
- **AnalysisFailed** — failure state A: a private/dead link fails loudly, no score/no guess, one yellow "Re-try analysis" + recovery paths.
- **ConfirmBeforePitch** — the two-step approve: This release · About you · Who I'll pitch; inferred items carry an amber flag; one yellow, nothing sends here.
- **Reviewer** — the handoff: drafted pitch + "How you send this"; Copy pitch / Open in email / Mark as sent (no send button).
- **Plan** — the plan moment (conversion at the 4th draft): atmosphere returns, trial-value rail, Solo (ghost) + Momentum (yellow), separate auto-renewal consent.
- **Glance** — campaign home; the four-state pipeline (queued → sent → replied → placed), artist-logged Mark replied, quiet Mark complete.
- **Bounced** — failure state B: artist-logged rollback, red banner + live dot, one rolled-back pitch, the rest untouched.
- **Receipt** — a reply becomes proof: artist-logged, intent classified (POSITIVE), drafted response, media as library links (never attachments).
- **Cadence** — end-of-campaign recap (placements · reply rate · time saved); the wind-down is *proposed*, not applied; quiet Mark complete.
- **Context** — the memory of record (reference surface, no yellow): five groups, provenance + correct affordance on every fact; reached from the artist avatar.
- **Media** — the reusable-asset library (the third nav destination): stems, bios, press shots, cover art; each with provenance + a purple "Copy link" — assets travel to curators as links, never attachments. Zero yellow.
- **Privacy** — Settings → Privacy: the Soniq Improvement opt-out (purple toggle, on by default), always-excluded data shown, separate ask-first testimonial toggle; zero yellow.
- **TermsGate** — terms re-acceptance: plain-language diff before legal text, purple primary, remind-later/export/cancel escapes; zero yellow.
- `AppShell` (Workspace · Campaigns · Media nav, ⌘K, settings gear → Privacy, avatar → Context, right-edge Line-to-Soniq) and `data.js` compose them in `index.html`.

**`ui_kits/mobile/`** — Soniq mobile entry flow (the first 90 seconds on a phone), interactive tap-through composed from the core components + the Spotlights atmosphere:
- **Land** — the first 30 seconds; one yellow CTA, mono scope/timing line, BYOC-honest copy.
- **Try** — step 2 of 2: score a curator she brings (paste / sample); real fit score pre-account; quiet preview-terms notice.
- **Sign-in** — one door, two keys (sign-in / create); utility surface → zero yellow, purple primary, SSO-first, adjacent assent line.
- **Hand-off** — "You're in": saved card mirrors the preview, laptop offered as a purple callout (never a competing button), one yellow.
- **MobileWorkspace** — Welcome dashboard; atmosphere stops here (calm), one hero brief carries the only yellow, honest Day-0 snapshot, docked Ask bar + bottom nav.
- **MobileContext** — Context parity on a phone: all five groups stacked (reflow, never reduce), every provenance line kept, correction a first-class full-tap pill; reached from the artist avatar, never the bottom nav.
- `PhoneFrame.jsx` (brand wireframe phone shell + status bar) composes them in `index.html`.
