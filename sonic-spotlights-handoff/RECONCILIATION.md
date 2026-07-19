# Reconciliation — Uploaded Handoff (v7.4) vs. Design System

What you uploaded (`uploads/soniq-design-handoff/` + `uploads/Soniq-Prototype.html`) reviewed
against this Design System. The DS is the primary guide; below is what matched, what was
**missing and has now been added**, and every conflict with the decision taken.

---

## Verdict

The DS already implements the v7.4 handoff faithfully — **all 7 Cardinal Rules, the full
component inventory, every screen with its acceptance checks, the voice, and the visual
foundations.** No rule or screen was missing. The real gaps were in the **token vocabulary**:
the engineer will wire `tokens.css`/`tokens.json` directly (the handoff ranks those *above*
prose), so any name they reference must resolve against this DS. Several didn't. **Fixed.** ✅

---

## 1. Authority order (whose call wins) — adopted as the handoff states it

`Sonic_Spotlights_UI_System.pdf` (visual system) → `tokens.css` / `tokens.json` (machine mirror)
→ `README.md` (intent / behavior / screens) → wireframes (layout / flow).

Consequence I acted on: **the machine token mirror outranks my own prose.** Where my DS and the
handoff's `tokens.css` named the same concept differently, I made the DS a **superset** that
exposes the handoff's exact names and values — rather than ask the engineer to rename their code.

---

## 2. Conflicts found, and the decision on each

| # | Conflict | Handoff (authoritative) | DS (before) | Decision | Status |
|---|---|---|---|---|---|
| 1 | **`--focus-ring` holds different things** | full box-shadow `0 0 0 3px rgba(139,92,246,.55)` — so `box-shadow: var(--focus-ring)` works | held only the *color*; the shadow lived in `--ring-focus` | **Handoff wins.** `--focus-ring` is now the full shadow; bare color moved to `--focus-ring-color`; `--ring-focus` kept as a back-compat alias (my components use it). | ✅ Fixed |
| 2 | **Bare status color names absent** | `--yellow`, `--emerald`, `--emerald-600`, `--red`, `--amber` | only numbered (`--yellow-400`, `--emerald-500`, `--red-500`, `--amber-500`) | **Add the bare aliases** at identical hex; keep the numbered scale for my own components. Both vocabularies resolve. | ✅ Fixed |
| 3 | **Emerald numbering differs** | `--emerald` = `#34d399`, `--emerald-600` = `#10b981` | `--emerald-400` = `#34d399`, `--emerald-500` = `#10b981` | Keep my scale **and** alias the handoff names to the same hex. No value change — only names added. | ✅ Fixed |
| 4 | **Font family variable names** | `--font-display` (headings), `--font-sans` (body) | `--font-heading`, `--font-body` | **Add `--font-display`/`--font-sans` as aliases.** Kept mine for internal components. | ✅ Fixed |

Net effect: **token count 135 → 143; zero value changes; nothing renamed away.** Code written
against either vocabulary now resolves. DS compiles clean.

---

## 3. Differences that are intentional — left as-is (no conflict)

- **Richer token layer.** My DS adds a semantic tier the handoff mirror doesn't: `--bg-app`,
  `--voice`/`--voice-hover`, `--action`/`--action-glow`, `--positive`/`--danger`/`--inferred`,
  `--text-primary/secondary/meta`, plus a `[data-theme="light"]` acquisition theme. These are a
  superset — they don't contradict the mirror, they sit on top of it. **Keep.** The engineer can
  reference either the raw mirror names or the semantic names.
- **Wireframe-local vars** (`--disp`, `--sans`, `--pbright`, `--ok`, `--purple-bright`) appear in
  `wireframes-*.html`. Those are **defined locally inside the wireframe files** and are deck
  scaffolding (README §8) — deliberately **not** promoted into the token system.
- **Spotlights `--beam-*` / `--pool-*`.** The README references these as if tokens; in this DS
  they live inside the `SpotlightsAtmosphere` component (the correct home — they're a single
  composed treatment, not reusable scalars). **No change needed.**

---

## 4. The uploaded files, mapped

| Uploaded | Relationship to the DS | Action |
|---|---|---|
| `README.md` (v7.4) | Same spec the DS already implements. | Reconciled — no drift found. |
| `tokens.css` / `tokens.json` | Machine mirror; **outranks prose.** | DS tokens made a superset of it. ✅ |
| `Sonic_Spotlights_UI_System.pdf` | Top visual authority. | Consistent with DS foundations. |
| `Soniq_Combined_Wireframes_v7_4.pdf` | Flow ground-truth (26 pages). | DS ui_kits cover the flow. |
| `wireframes-*.html` | **Stale — last synced v7.1 (25 pages).** README §9 flags this. | Treat as superseded; DS = the live build. |
| `fonts.css` + `fonts/*.ttf`, `assets/logo/*` | Real assets. | Already in DS `assets/` + `tokens/fonts.css`. |
| `Soniq-Prototype.html` | A bundled single-file prototype build (`.dc`). | Output artifact, not a source of truth — no token/rule input. |

> **One thing to tell your engineer:** the `wireframes-*.html` references in the folder are
> **v7.1 and stale** (the README itself flags this in §9). Any "matches"-language or four-item
> nav in them is superseded — build to the DS and the v7.4 README, not the wireframe HTML.

---

## 5. What changed in the DS this pass

- `tokens/colors.css` — added `--yellow`, `--emerald`, `--emerald-600`, `--red`, `--amber`;
  split `--focus-ring` into `--focus-ring-color` (color) + `--focus-ring` (full shadow, matches handoff).
- `tokens/effects.css` — `--ring-focus` now aliases `--focus-ring` (both are the full shadow).
- `tokens/typography.css` — added `--font-display`, `--font-sans` aliases.

No components, rules, screens, or hex values changed. The DS remains the single source of truth;
it now speaks the handoff's machine-token vocabulary natively.
