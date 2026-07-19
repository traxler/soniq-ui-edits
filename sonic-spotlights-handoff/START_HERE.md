# START HERE — Soniq / Sonic Spotlights Production Handoff

You (the implementing assistant) are building the **production** Soniq app. This repository is
everything you need. Read this page, then work top-down through the reading order below.

> **Note on layout:** this is the live design-system project, shipped whole. The buildable system
> lives at the **root** (`styles.css`, `tokens/`, `components/`, `ui_kits/`, `assets/`); the
> authoritative product spec + brand live under **`uploads/soniq-design-handoff/`**. A few
> design-system-authoring files (`SKILL.md`, `_ds_manifest.json`, `_adherence.oxlintrc.json`,
> `guidelines/`) are tooling artifacts — harmless, ignore them.

---

## What this is

A **finished, reconciled design system** (buildable React + CSS tokens) plus the **authoritative
product spec and brand** it was built from. The design system is not a sketch — it already
implements every Cardinal Rule, component, and screen in the v7.4 spec. Build the app by
**composing the design system**, following the spec for intent and behavior.

## Authority order (when two sources disagree)

1. `uploads/soniq-design-handoff/Sonic_Spotlights_UI_System.pdf` — brand visual system (top authority)
2. `uploads/soniq-design-handoff/tokens.css` / `tokens.json` — the machine token mirror
3. `uploads/soniq-design-handoff/README.md` — the v7.4 build spec (intent, behavior, screens + acceptance checks)
4. The wireframe deck PDF (`Soniq_Combined_Wireframes_v7_4.pdf`) — flow ground-truth.

The **design system at the project root is the reconciled implementation of all four** — it is
your day-to-day source of truth for code. `RECONCILIATION.md` documents how it maps to the spec
and every conflict decision (the stale v7.1 wireframe **HTML** was intentionally dropped).

## Reading order

1. **This page.**
2. `DEVELOPER_HANDOFF.md` — the engineering on-ramp: how to wire tokens, the component table,
   the 8 cardinal rules, token quick-reference, icon substitution flag.
3. `RECONCILIATION.md` — how the DS maps to the spec; the token-vocabulary decisions.
4. `uploads/soniq-design-handoff/README.md` §2 (Cardinal Rules) → §4 (Components) → the specific
   §5 screen you're building → its acceptance checks. Check anything against §7 (Anti-patterns).
5. `readme.md` — the visual/voice guide for the design system itself.

## How to consume the design system

- **Tokens:** import `styles.css` once, globally. It `@import`s all of `tokens/*.css` and the
  three webfonts. Keep `tokens/` and `assets/` siblings so font paths resolve. Reference CSS
  variables — never hard-code hex. Both vocabularies resolve: the spec's bare names (`--yellow`,
  `--focus-ring`, `--font-display`) **and** the DS semantic names (`--action`, `--voice`, `--bg-app`).
- **Components:** real source is `components/core/*.jsx` + `*.d.ts` (typed prop contract) +
  `*.prompt.md` (usage do/don't). Copy these into your codebase. Plain React + inline styles
  reading CSS variables — no build dependency beyond React.
- **Reference implementations:** `ui_kits/app/` (15 desktop screens) and `ui_kits/mobile/`
  (6 entry screens) show the real composition, data shape (`data.js`), and copy for every screen.
  Open the matching kit file before building a production screen.
- **Compiled bundle:** `_ds_bundle.js` is **auto-generated** — it exists so the reference kits and
  specimen cards render (`window.SonicSpotlightsDesignSystem_b87f31.<Name>`). Don't hand-edit it;
  for production, import the `.jsx` source instead.

## Do NOT

- Edit `_ds_bundle.js`, `_ds_manifest.json`, or `_adherence.oxlintrc.json` (all generated).
- Hard-code hex/spacing — use the tokens.
- Re-derive or undo a Cardinal Rule (spec §2) — they encode product decisions, not taste. If one
  blocks you, flag it (spec §10) rather than silently reinterpreting.
- Reproduce the wireframes' browser chrome / annotation columns / mono-Inter type — that was deck
  scaffolding, not UI (spec §8). Build to the DS type system (Plus Jakarta + Figtree + a mono accent).

## Known open items (from the spec — verify, don't guess)

- **Pricing** (Solo $19 / Momentum $39) is placeholder; the *structure* (gate at the 4th draft,
  three free drafts) is the design decision.
- **Partner integration (Groover)** is Phase 1 — launch is bring-your-own-curator + copy-paste
  send. Keep the send/status layer behind an interface so the partner path slots in later.
- **Legal copy** (assent lines, renewal consent, re-acceptance gate) is draft pending counsel;
  layouts reserve room for an explicit sign-in checkbox if counsel escalates.
- **Icons:** no icon binaries ship with the brand. The kits use minimal inline SVG; standardize
  on **Lucide** as the closest match — a flagged substitution, swap if the brand provides a set.
- **Copy divergence to confirm:** the marketing hero "You Make the Music, We Handle the Noise."
  is Title Case; the system voice is otherwise sentence-case. Intentional hero treatment — confirm
  before propagating Title Case anywhere else.

---

## Map

```
START_HERE.md            ← you are here
DEVELOPER_HANDOFF.md     ← engineering on-ramp
RECONCILIATION.md        ← DS ↔ spec mapping + conflict decisions
readme.md                ← design-system visual/voice guide

styles.css               ← single global entry (import this)
tokens/                  ← CSS custom properties (colors, type, spacing, effects, fonts)
components/core/          ← React primitives: .jsx + .d.ts + .prompt.md (+ specimen cards)
ui_kits/app/ · mobile/   ← reference implementations of every screen
assets/                  ← logos (dark/light), app icon, the 3 webfonts
_ds_bundle.js            ← GENERATED (makes kits/cards render); don't edit
guidelines/              ← visual specimen cards (tooling; optional reference)

uploads/soniq-design-handoff/   ← AUTHORITATIVE spec + brand (outranks DS prose)
  README.md                       ← v7.4 build spec: rules, components, 26 screens, checks
  Sonic_Spotlights_UI_System.pdf  ← brand visual system (top authority)
  Soniq_Combined_Wireframes_v7_4.pdf  ← 26-page flow ground-truth
  tokens.css · tokens.json        ← machine token mirror
uploads/Soniq-Prototype.html      ← bundled mobile-Land prototype (a built artifact, for reference)
```
