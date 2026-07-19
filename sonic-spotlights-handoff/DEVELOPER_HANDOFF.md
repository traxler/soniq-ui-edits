# Sonic Spotlights — Developer Handoff

For an engineer (and their AI coding assistant) building the **production** Soniq app.
This doc is the fast on-ramp; `readme.md` is the full design guide and remains the
authority on intent, voice, and behavior.

---

## 0. TL;DR for the coding assistant

You are consuming a finished design system. Treat these as ground truth and **do not
edit the generated files**:

- `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` — **auto-generated.** Never hand-edit; they regenerate from source.
- Source of truth = `styles.css` + `tokens/*.css` (design tokens) and each component's `.jsx` + `.d.ts` + `.prompt.md`.

The single most important product rule, encoded in the visuals:

> **One Laser-Yellow action per screen.** Electric Purple carries everything else
> interactive (links, reasoning, secondary actions). Reference / read-only / auth
> surfaces carry **zero** yellow. See §4.

---

## 1. What's in the box

```
styles.css            single entry point — link this, get every token + webfont
tokens/               CSS custom properties (the design tokens)
  ├─ fonts.css        @font-face for the 3 families
  ├─ colors.css       palette + semantic aliases + light theme
  ├─ typography.css   type scale
  ├─ spacing.css      8pt grid
  └─ effects.css      radius, border, shadow, motion, focus ring
assets/               logos (dark/light), app icon, *.ttf fonts
components/core/       reusable React primitives (15) — see §3
ui_kits/app/           full desktop app flow (15 screens) — reference implementation
ui_kits/mobile/        mobile entry flow (6 screens) — reference implementation
guidelines/            visual specimen cards (read-only reference)
readme.md              the full design guide (voice, foundations, screen-by-screen)
SKILL.md               agent-skill manifest
```

The `ui_kits/` are **working, composed reference implementations** of every screen.
When you build a production screen, open the matching kit file first — it shows the
real component composition, data shape (`ui_kits/app/data.js`), and copy.

---

## 2. Wiring it up (two integration paths)

### Path A — you already have a React build (recommended for production)
1. Import the tokens once, globally:
   ```js
   import "./sonic-spotlights/styles.css"; // adjust path to wherever you drop this folder
   ```
   That one file `@import`s all of `tokens/*.css`, so you get every CSS variable and
   the three webfonts. Fonts resolve relative to `tokens/fonts.css` → `../assets/fonts/*.ttf`,
   so keep `tokens/` and `assets/` siblings (the folder layout as-shipped).
2. Copy the components you need from `components/core/` into your codebase. They are
   plain React + inline styles reading CSS variables — no build-time dependency beyond
   React. The `.d.ts` next to each gives you the typed prop contract; the `.prompt.md`
   gives usage notes and do/don't.
3. Build screens by composing primitives the way `ui_kits/app/*.jsx` does.

### Path B — quick prototype / no build step
Open `ui_kits/app/index.html` or `ui_kits/mobile/index.html` directly — they load
React via CDN + Babel and mount the whole flow. Good for click-throughs, not production.

> **CSS variables, not hard-coded hex.** Every component references tokens
> (`var(--voice)`, `var(--action)`, …). Theme by overriding variables, never by
> editing component internals. A `[data-theme="light"]` scope already exists for
> marketing/acquisition surfaces (`tokens/colors.css`).

---

## 3. Components (`components/core/`)

Each component ships three files: `Name.jsx` (impl), `Name.d.ts` (typed props),
`Name.prompt.md` (usage). Read the `.d.ts` for the contract before using.

| Component | Purpose / notes |
|---|---|
| `Button` | variants: `primary` (the one yellow), `secondary` (outlined purple), `ghost`, `destructive`. **No emerald button.** sizes `sm/md/lg/xl`; `md`+ meet 44px touch target. `loading` swaps to a working state in place. |
| `IconButton` | square icon-only action; same variant logic. |
| `Input` / `Select` | form fields on the void; purple focus ring. |
| `Switch` / `Checkbox` | toggles; purple when on. |
| `Badge` | soft + outline; status/labeling. |
| `Tag` | 4px-radius small label (e.g. `UNVERIFIED`). |
| `Card` | surface container (12px radius; 16px for large/modal). |
| `Avatar` | artist avatar; **Context lives behind it**, not the sidebar. |
| `StatusDot` | pipeline / live status dot. |
| `ConfidenceMeter` | circular **fit** score (0–100). Fit ≠ Verified — render the verified state separately, never merged. |
| `ReasoningNote` | inline "why" / reasoning snippet (purple, reference tone). |
| `LineToSoniq` | the global right-edge panel (Activity + Ask tabs), collapsed by default. ⌘K is separate from this. |
| `SpotlightsAtmosphere` | the gradient/spotlight entry treatment. **Entry surfaces only** (landing, sign-in, hand-off, `/plan`) — the workspace stays calm. |

In compiled/bundle form these are exposed as
`window.SonicSpotlightsDesignSystem_b87f31.<Name>`, but for production you'll import
the `.jsx` source directly.

---

## 4. Cardinal rules (load-bearing — these encode product decisions, not taste)

1. **One Laser-Yellow action per screen.** Yellow = the single most important decision. Purple = flow / reasoning / secondary. Utility & auth surfaces carry **zero** yellow (purple secondary becomes their primary).
2. **Reference surfaces carry no yellow** (Context, reasoning drawer, settings, media) — they *show*, they don't *decide*.
3. **Fit ≠ Verified — two signals, never merged.** A *fit* score (Soniq's analysis) and *verified/unverified* state are always rendered separately.
4. **Soniq drafts; the artist sends.** No send capability — UI offers Copy / Open in email / Mark as sent. Never a "Send" button. Replies are artist-logged. No tracking, no "opened" state, ever.
5. **Two-step approve; nothing auto-sends.** The artist confirms sends, logs replies, ends campaigns.
6. **Context lives behind the artist avatar**, not the sidebar. Sidebar is exactly **Workspace · Campaigns · Media**.
7. **Provenance on every Context fact** — source + correct affordance; corrections write back everywhere. Inferred values get an explicit amber "I inferred this" flag (amber is never a button fill).
8. **Spotlights atmosphere on entry surfaces only.** The workspace is calm.

If a generated screen violates one of these, it's a bug — fix the screen, not the rule.

---

## 5. Tokens quick reference

Semantic aliases are what you should reference in product code (not the raw palette):

```
--bg-app        Void Black canvas (#050505)        --text-primary   primary ink (#f4f4f5)
--bg-surface    cards on void (#16161c)            --text-secondary muted ink
--bg-raised     popovers / raised (#1c1c24)        --text-meta      metadata ink
--voice         Electric Purple (#8b5cf6)          --action         Laser Yellow (#facc15)
--voice-hover   purple hover                       --action-ink     dark ink on yellow
--positive      emerald (status only)              --danger         red (destructive)
--inferred      amber (the "inferred" flag)        --focus-ring     purple 3px ring
--brand-gradient  full-spectrum mark gradient (logo / rare hero only — never UI fills/text)
```

**Type:** Plus Jakarta Sans (headings) · Figtree (body) · JetBrains Mono (precision —
scores/timestamps/citations only, 12–13px, never prose).
**Spacing:** 8pt grid. **Radius:** 8 default, 12 cards, 16 large/modal, 4 tags, full pills/avatars.
**Motion:** ease `cubic-bezier(0.2,0.8,0.2,1)`, 120–320ms, no bounces, no infinite loops.

---

## 6. Iconography substitution flag

No icon binaries ship with the brand. The kits use minimal inline SVGs. For production,
standardize on **Lucide** as the closest match — **this is a flagged substitution**;
swap for the real icon set if/when the brand provides one. Stroke ~1.5–1.75px,
`currentColor`. No emoji in product chrome; the check glyph (✓) is the one recurring
brand affordance (emerald).

---

## 7. Authority order when sources disagree

`Sonic_Spotlights_UI_System.pdf` (visual system) → `tokens/*.css` (machine mirror) →
`readme.md` handoff (intent / behavior / screens) → wireframes (layout / flow).

---

*Generated as a handoff companion to `readme.md`. Keep both with the source files when
you share the system.*
