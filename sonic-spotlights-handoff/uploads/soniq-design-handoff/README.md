# Soniq — Design Handoff (v7.4)

This folder is the source of truth for building the Soniq UI. It was produced from a series of UX design sessions. **You (the implementing assistant) were not present for those sessions and have no memory of them — this folder carries the reasoning so you don't re-derive or accidentally undo deliberate decisions.** Read Section 2 (Cardinal Rules) before writing any UI code.

> **Versioning note:** this README's version tracks the deck's version — one number for the whole handoff. v7.1 added the four legal-UX surfaces (preview-terms notice, sign-in assent, auto-renewal consent, terms re-acceptance gate). **v7.2 adds the Settings → Privacy surface carrying the Soniq Improvement (AI-training) opt-out toggle, and corrects the terms re-acceptance screen's "what changed" copy to remove a now-stale "no-training commitment" line.** See the note in Section 1 (Recent changes) for the policy context. **v7.3 retunes the deck to the MVP send model (the "change of lens"): with no platform integration at launch, Soniq has no send capability — it drafts, and the artist sends from their own inbox by copy-paste / open-in-email. The trial gate moves off "first send" onto drafting (three free drafts; the fourth unlocks the campaign). Curator discovery is bring-your-own only at launch; "verified" and send-on-behalf are Phase 1. A closing Roadmap slide [26] traces BYOC → partner integration → owned catalog. Every send-capable surface (reviewer, the handoff, the failure state) was rewritten accordingly — see §5 and §9.** **v7.4 is a consistency-and-honesty pass on the launch (BYOC) surfaces: it removes the last "Soniq supplies the curators" language from acquisition and the workspace, makes the Try preview genuinely demonstrate fit-scoring on a curator the artist brings, gives the Day-0 surfaces an honest near-empty state instead of fabricated counts, locks the Workspace-vs-Campaigns IA, enforces Context parity across mobile/desktop, and removes the `Artifacts` nav item (its contents fold into Campaigns and Media). See the Changelog below and §5.**

---

## Changelog — v7.3 → v7.4

A targeted consistency pass; no token or visual-system changes. Each item is reflected in §2 (Rules), §4 (Components), §5 (Screens), and §7 (Anti-patterns).

1. **BYOC honesty on acquisition [02].** Land no longer says Soniq *finds* curators — the artist **searches or brings** them and Soniq **scores fit + drafts**. "~60s to your matches" → "~60s to your first fit score"; "Match curators by real fit" → "Bring or search curators → Soniq scores fit." The Try preview becomes genuinely two-step: **Step 1 your sound** (release link + optional vibe) → **Step 2 a curator to score** (paste/search), with a default-visible **"No curator yet? Try a sample →"** escape. The preview reward is **one scored card on the curator she brought** (e.g. *Slow-Core Quarterly · 89 fit · unverified*) — a live demo of the fit-scoring moat. CTA "See my matches" → "Score the fit."
2. **Hand-off [05] reflects the preview, not a supplied list.** The "saved to your workspace" card shows the real preview artifacts — *sound analyzed · first pitch drafted · memory started* — plus the scored-curator row **only if she brought her own** (a sampled score does **not** import; the row drops). "12 curator matches / 4 press fits" and "See your matches" are gone. CTA → **"Find your curators →"**; subline → "Your workspace is ready — let's build your list."
3. **Welcome [06]/[07] Day-0 honest state.** Hero shifts from "Pitch Dark Moon to 3 curators" to a first-entry **"Find curators for Dark Moon,"** graduating to "pitch your top fits" only after a list is scored. Snapshot's fabricated 12/4/1 → honest near-empty ("Bring your first curators to see fit scores here"). Desktop activity feed moves to **artist-action voice** ("You scored…/You added…"). CTA → "Find your curators →".
4. **"Find your curators →" is the standard** for the former supplied-matches CTA family — hand-off [05], both Welcomes [06/07], and the Line-to-Soniq panel [24]. The Try preview keeps its own flow CTAs (Next / Score the fit).
5. **Workspace-vs-Campaigns IA, locked.** **Workspace** = discovery & scoring (find curators, fit reasoning, the Day-0 dashboard). **Campaigns** = executing a release (set-up, pitches, handoff, replies/receipts, pipeline, bounce, cadence). The Reviewer [14] was the lone violator (sat under Workspace) and moves to **Campaigns**. URL keeps `/workspace/` as the app root; the breadcrumb carries the section.
6. **Context parity [22]/[23].** Rule: **"reflow, never reduce," correction first-class on both surfaces.** Mobile Context carries **all five** groups (Voice & Narrative, Audience, Sonic Signature, Press History, Curator History) — Sonic Signature and Press History were missing from the mobile composition.
7. **`Artifacts` removed from the nav.** Desktop sidebar → **Workspace · Campaigns · Media** (+ Settings where shown); mobile bottom nav → **Home · Campaigns · Ask**. Pitches/briefs already live under Campaigns; reusable **assets route to Media** so nothing is orphaned. *(This edits Cardinal Rule 3, which previously hard-coded the four-item rail.)*
8. **Label consistency.** Reasoning anatomy [21]: "89 **MATCH**" → "89 **FIT**" (the deck standardizes on *fit* for the score).
9. **QA.** Fix the scrambled footer page numbers on the hand-off cluster (the Terms re-acceptance page reads "04" but sits 6th in physical order).

**Parked / not in v7.4** (by product decision): pricing (Solo $19 / Momentum $39 stay placeholders); the 18+ age-gate placement; the Groover partner-API scope; mailto pre-fill limits. These are tracked but were intentionally not changed in this pass.

---

## 0. What's in this folder & how to use it

| File | What it is | How to use it |
|---|---|---|
| `README.md` | This build spec — components, screens, rules, acceptance criteria | **Read first.** Source of truth for *intent and behavior*. |
| `Sonic_Spotlights_UI_System.pdf` | The brand UI System — color, type, spacing, buttons, form inputs, accessibility | **Source of truth for the visual system.** When this and anything else disagree on a token or component style, this wins. |
| `tokens.css` / `tokens.json` | Machine-readable mirror of the UI System tokens | Wire into your styling layer (CSS vars, Tailwind config, theme object — whatever the stack uses). Don't hand-type hex values. |
| `wireframes-reference.html` · `wireframes-entry-reference.html` | The authored wireframe pages as HTML/CSS — **now in the reconciled UI System** (screens + entry surfaces) | Use for **layout, structure, flow, and class vocabulary.** These resolve fonts from `fonts.css` and logos from `assets/logo/`. Still wireframe scaffolding, not app architecture — see Section 8. |
| `fonts.css` | Plus Jakarta Sans + Figtree + JetBrains Mono webfonts | Self-contained webfonts for the HTML references. For the app, load the same families your way. |
| `Soniq_Combined_Wireframes_v7_4.pdf` | The deck (**26 pages**), fully in the reconciled UI System — **every page renders from the two HTML reference files** | **Visual / flow ground-truth.** Glance to see a screen's shape; don't treat its annotation columns as build instructions (see Section 8). |
| `assets/logo/` | The brand logo assets (dark lockup, light lockup, app icon) | Real assets to ship. Usage in §4 → *Logo & brand mark*. |

**Authority order when sources disagree:** `Sonic_Spotlights_UI_System.pdf` (visual system) → `tokens.css` / `tokens.json` (its machine mirror) → this `README.md` (intent / behavior / screens) → the wireframes (layout / flow). The wireframes show *what goes where*; the guide governs *how it's styled*.

**Reading order:** Cardinal Rules → the UI System guide + Tokens → Components → the specific Screen you're building → its **acceptance checks** (each screen in §5 ends with them). Check anything you're about to build against Section 7 (Anti-patterns).

---

## 1. Product in one paragraph

Soniq (product surface name: *Sonic Spotlights*) is an AI co-pilot for independent music promotion. The primary persona is **the Momentum Builder** — an artist who releases every 4–8 weeks and needs to reach the right curators and press without it becoming a second job. The product spine, mirrored across mobile and desktop, is: **the first 90 seconds on a phone → the first session in the workspace → a campaign rolling out → a reasoning layer that earns trust.** Soniq does the work *for* the artist but never *instead of* them: it proposes, the artist approves. **At launch, curator discovery is search + bring-your-own**, both scored by playlist analysis; the **verified network is the goal**, layered on later via partner integration (e.g. Groover). **At launch there is no send integration: Soniq drafts and the artist sends from their own inbox (copy-paste / open-in-email).** The free trial proves value (scoring, drafting); **the paid plan begins at the fourth draft — three drafts are free, and the gate is on the drafting, not the send** (§5 → *The plan moment*). See §5 → *Curator discovery* and the Roadmap [26].

> **Recent changes (v7.2) — AI training / "Soniq Improvement":** A policy decision was made to use member content and usage data to train and improve Soniq's own AI models ("Soniq Improvement"), **on by default for all users (free and paid alike), with a genuine opt-out** in **Settings → Privacy** (new screen [25]). The opt-out is **prospective only** (it stops future use; it does not retroactively pull content already used for training). Two categories are **always excluded regardless of the toggle**, because they're contractual obligations rather than user choices: (a) streaming-platform metadata (e.g. Spotify), and (b) the third-party foundation-model providers Soniq calls (who are contractually barred from training on Soniq's traffic). This **reverses** an earlier "we never train on your content" stance — so any older copy asserting that (in marketing, onboarding, or earlier wireframes) is now **stale and must not ship**; the terms re-acceptance screen [04] has already been corrected. The binding language lives in **Privacy Policy §3** and **Terms of Service §4.3** (both v0.3). Beta testers are covered separately by the Beta Tester NDA for the beta period.

---

## 2. Cardinal Rules (do not undo these)

These encode decisions that look like style choices but are load-bearing. Each says *what the rule is*, *why*, and *what it means in code*.

1. **One Laser Yellow CTA per screen.** Yellow (`--yellow`) marks the single most important decision on a screen — never two. Purple (`--purple-500`) is for flow, reasoning, and secondary actions. *Why:* the product's whole promise is reducing decision load; two yellow buttons reintroduce the choice paralysis it removes. *In code:* a screen has at most one `variant="primary"` (yellow) action; everything else is `secondary` (purple/text). **Utility-surface exception (v7, codified):** pure account/utility surfaces — sign-in / create account, and auth-adjacent screens — carry **zero yellow and use the purple secondary as their visual primary.** Yellow is reserved for decisions about *the music*, not the account. This is the one sanctioned "purple primary."

2. **Reference surfaces carry no yellow.** Any surface whose job is to *show* rather than *decide* (the Context/memory page, the reasoning drawer) has zero Laser Yellow. *Why:* yellow means "act here"; on a read/audit surface there is no single action to take. *In code:* no primary button on these screens; corrections and links are purple.

3. **Context lives behind the artist identity, not in the task sidebar.** The left sidebar is exactly **Workspace · Campaigns · Media** — *no Context item, and (v7.4) no Artifacts item.* Context (the "memory of record") is reached from the **artist avatar/menu** (desktop) or a sheet from the avatar (mobile). *Why:* memory is *infrastructure*, not a task the artist does; putting it in the task rail framed it as a chore and caused it to appear in two places. *In code:* one canonical artist-scoped Context store; entry points are the avatar menu plus three contextual links (reasoning drawer "Memory", campaign setup "confirm before I pitch", cadence recap "update before next release"). **Nav IA (v7.4):** the two task sections split cleanly — **Workspace = discovery & scoring** (find curators, fit reasoning, the Day-0 dashboard); **Campaigns = executing a release** (set-up, pitches, the handoff, replies/receipts, the pipeline, bounce, cadence). A pitch is campaign execution and lives under **Campaigns**. **Artifacts removed (v7.4):** Soniq-generated outputs (drafted pitches/briefs) live under Campaigns; reusable assets live under **Media** — so the standalone Artifacts bucket was redundant. Mobile bottom nav is therefore **Home · Campaigns · Ask**.

4. **One "Line to Soniq" panel — collapsed by default.** Chat and the live activity feed are a **single collapsible right-edge panel with two tabs: Activity and Ask.** The old standalone "SONIQ · LIVE" rail is retired — it is now the **Activity** tab. ⌘K (find/navigate) is **separate** from this panel (converse/ask). *Why:* one consistent place to talk to Soniq and see what it's doing, without a permanently-open rail crowding the workspace. *In code:* global app-shell component; collapsed state = thin edge (live dot + Ask button); expanded = overlay that preserves scroll position. **Exception:** on the Day-0 Welcome screen the panel **opens to Activity by default**, to show prepared work ("the room was never empty"). Mobile: a docked Ask bar that opens a bottom sheet with the same two tabs. **Failure signal (v7):** the live dot turns **red while sends are paused** (§6).

5. **Two-step approve; nothing auto-sends — and the artist owns the record.** Soniq drafts pitches, classifies replies, and proposes next steps, but the artist confirms before anything leaves. *Why:* trust + the artist's voice. *In code:* every outbound action (send pitch, send reply, etc.) requires an explicit confirm step; no background sending. **v7 extension:** the same ownership applies to *incoming* events and *endings* — **replies are logged by the artist** (one tap, paste optional; Soniq never scans her inbox or embeds tracking pixels), and a campaign ends when she says so (**"Mark complete"**) or accepts Soniq's wind-down proposal. Soniq proposes; the artist commits — on sends, on replies, on endings.

6. **"Spotlights" atmosphere on entry surfaces only.** The purple/yellow light beams and pools on Void Black (see `--beam-*` / `--pool-*` tokens) belong to acquisition/entry surfaces (landing, sign-in, hand-off). The **workspace deliberately drops the atmosphere and stays calm.** *Why:* spectacle to draw you in; quiet to get work done. *In code:* atmosphere layer is opt-in per surface, off by default in the app. **Boundary case (v7):** **The plan moment** (`/plan`) is acquisition's last page — the one workspace route where the atmosphere returns, deliberately and subtly (§5).

7. **Provenance on every Context fact.** Each fact in Context shows where it came from ("from your bio", "you corrected 2d ago", "from sonic scans"), and corrections write back everywhere they're used. *Why:* the surface is only trustworthy if it's auditable. *In code:* every Context field carries a `source` and a `correct` affordance; a correction updates the canonical store and shows a "you corrected this" confirmation.

---

## 3. Design tokens

Authoritative values live in `Sonic_Spotlights_UI_System.pdf`; `tokens.css` / `tokens.json` are the machine-readable mirror. Summary of intent:

- **Surfaces (dark-first):** Void Black `#050505` is the canvas; cards/raised surfaces step up through `#16161c` / `#1c1c24`. A light theme exists for acquisition surfaces only.
- **Electric Purple** (`--purple-500 #8b5cf6`, `-400 #a78bfa` on dark, `-600 #7c3aed` hover) = the brand voice: links, reasoning, and **secondary** actions. It appears often.
- **Laser Yellow `#FACC15`** = the **single primary action** per screen (Rule 1; utility exception noted there). Text on yellow uses `--yellow-ink #1c1605` for AA contrast.
- **Emerald `#34d399 / #10b981`** = confirmed / positive / live. **Status only — never a button** (v7; see §4 Buttons). **Red `#ef4444`** = destructive confirmations and **error states** (a failed analysis, a bounced send) — never a recovery action. **Amber `#f5a623`** = an "I inferred this" flag — *never* a button.
- Text on dark: `--ink #f4f4f5` / `--muted #a2a2ac` / `--faint #6b6b76`.
- **Type:** **Plus Jakarta Sans** for headings (`--font-display`), **Figtree** for body and UI copy (`--font-sans`), and a **single JetBrains Mono accent** (`--font-mono`) reserved for machine-precision moments only — confidence scores, timestamps, source citations. Scale: Display 64/800 · H1 48/700 · H2 32/700 · H3 24/600 · H4 20/600 · Body 16 · Small 14 · Caption 12.
- **Spacing:** 8-pt grid, tokens `--sp-3xs` (2) … `--sp-4xl` (64). **Radius:** `--r-md` 8px (buttons + inputs), `--r-lg` 12px (cards). **Focus:** `--focus-ring` = a purple 3px ring on every interactive control.

---

## 4. Component inventory

Each component lists its anatomy and states. Build these as reusable components; screens compose them.

### App shell (desktop)
- **Top bar:** the Sonic Spotlights **mark** (the app-icon glyph) at left — *not* a text wordmark · ⌘K search field · artist avatar (initials, e.g. "MR"). The avatar opens the **artist menu** (where Context, account/billing, sign-out live).
- **Left sidebar:** plain text labels (no icons). Items: **Workspace · Campaigns · Media.** (v7.4: `Artifacts` removed — see Rule 3.) Active item marked by a thin **purple left-bar** (2.5px) + slightly brighter text. No "Context" item (Rule 3).
- **Main content region.**
- **Right edge:** the **Line to Soniq** panel (see below).
- **Breadcrumb** at the top of main carries campaign context (e.g. `Workspace › Dark Moon › Curator matches`).

### Logo & brand mark
Assets live in `assets/logo/`. The mark is a gradient "spotlight burst" square (purple → cyan → teal → amber) around an *S* monogram — literally the Spotlights idea as a glyph.
- **`…LOGOhorizontalgradientdark.png`** — horizontal lockup with a **white wordmark. Use on dark surfaces** (the app on Void Black, dark headers). 2400×841, ~2.85:1.
- **`…LOGOhorizontalgradientlight.png`** — horizontal lockup with a **dark-slate wordmark. Use on light surfaces only** (light/acquisition theme, marketing, email). Same ratio. **Never put this one on Void Black — the wordmark disappears.**
- **`sonicspotlightsappicon.png`** — 1:1 gradient tile (504×504). Home-screen icon, favicon, PWA icon, and the source for the **mark-only glyph** used in tight spaces.
- **Sizing:** use the **mark only** in the top bar and other tight spots; use the full lockup where width allows (sign-in, hand-off, marketing, empty states). Sensible defaults to confirm against brand: clear space ≥ ~¼ of the mark's height around the lockup; min lockup width ~120px; min mark ~24px. Don't recolor, rotate, stretch, or add effects to the mark.
- **The gradient is identity, not UI.** The mark is exempt from the one-yellow-action rule and keeps its full gradient — but its hues (especially the cyan/teal/green that aren't in the UI palette) **must not enter UI tokens, components, or actions** (see Anti-patterns).

### Line to Soniq panel (global) — Rule 4
- **Collapsed (default):** a thin right edge containing a **live dot** (green, glows when Soniq is working; **red while sends are paused**), an **Ask** button (chat-bubble icon), and a vertical "ASK SONIQ" label.
- **Expanded:** overlays from the right (narrower than full width), preserves the page behind it. Header has two tabs + a close (×):
  - **Activity** tab = the live feed (events: "Drafted your first brief", "Scored 12 matches", timestamps + confidence). This replaced the old standalone LIVE rail.
  - **Ask** tab = chat with Soniq; responses can cite sources ("CITES 3 SOURCES ↗").
- **Mobile:** a docked Ask bar at the bottom that opens a bottom sheet with the same two tabs.
- **Default state is contextual:** collapsed everywhere *except* the Day-0 Welcome, which opens to Activity.

### Sidebar nav item
- States: default (faint), hover, active (purple left-bar + ink text).

### Cards
- **Curator match card:** circular **confidence score** (e.g. 89) with a purple ring, name + outlet, one-line rationale, and a **"Why? ↗"** link that opens the reasoning drawer. Optional tags: `PRESS`, `YOU ADDED`, and the **verification state** (`UNVERIFIED` until partner integration; fit and verification render as *separate* signals — never merged).
- **Hero brief card:** purple left-border, kicker, headline (the recommended action), supporting line with a metric, and the screen's single yellow CTA + a purple secondary link.
- **Snapshot stats:** small tiles (number + label); use a **dashed empty tile** for not-yet-available data (e.g. "— plays · after first send") — never a deflating zero.
- **Reply / receipt card (artist-logged, v7):** the **artist logs the reply** ("Mark replied" — one tap from the pipeline; pasting the reply text is optional). Soniq then classifies intent (tag, e.g. `POSITIVE` in emerald), shows the logged reply, and drafts a response for review. **No inbox scanning, no tracking pixels — ever.**
- **Pipeline state row (v7):** a pitch row that hasn't been marked yet carries a quiet **"heard back? Mark replied"** checkbox affordance with a "paste the reply · optional" hint.

### Buttons — the hierarchy carries the one-decision rule
Build one `Button` component with `variant` and `size`. Font: Plus Jakarta Sans 600; radius `--r-md` (8px).
- **Primary** = Laser Yellow fill, `--yellow-ink` text, subtle glow (`0 2px 12px rgba(250,204,21,.22)`). **One per screen** (Rule 1). On utility/auth surfaces there is **no yellow**; the purple secondary is the visual primary (Rule 1 exception).
- **Secondary** = transparent, `--purple-400` text, `1.5px` `--purple-500` border; on hover fills purple with white text. This is the everyday supporting action.
- **Ghost** = transparent, `--muted` text, `--line` border; for cancel / tertiary.
- **Destructive** = Red fill (`--red-600`); reserved for irreversible confirmations only.
- **There is no emerald button.** (v7: the previously-specced "Confirm" emerald variant is **deleted** — it never appeared in the deck, and a second "approval" color would dilute Rule 1. Approvals/sends are the screen's yellow primary; **emerald is a status color only** — confirmed / placed / live.)
- **Sizes:** sm 36px · md 44px · lg 52px · xl 60px. **md and up meet the 44px touch target;** sm is for dense toolbars only.
- **States:** normal · hover (brighten + lift shadow) · disabled (`opacity .42`, no pointer) · loading (spinner; keep the label or show "Working…"). Expose ARIA state for disabled/loading.

### Form inputs
Build one `Input` component with `size` and `state`.
- **Base:** background `#101019`, `1px --line` border, radius `--r-md` (8px), Figtree 16px, `--ink` text, `--faint` placeholder. Label above (Figtree 14, `--ink`); helper text below (caption, `--faint`).
- **Focus:** border `--purple-500` + `--focus-ring` (purple 3px ring), `outline:none`.
- **Error:** border `--red-600`, helper text in `--red`. **Success:** border `--emerald-600`, helper text in `--emerald`.
- **Disabled:** `opacity .5`, no pointer events.
- **Sizes:** small (14px, tighter padding — settings/inline edits), default (16px), large (18px — key fields, search).
- **Special:** password (visibility toggle + optional "Forgot password?" link), search (leading icon), select/dropdown (custom chevron, `appearance:none`).

### Other actions
- **Correct affordance** (Context / reasoning): purple text "✎ correct"; on mobile it's a bordered pill with a full tap target.
- **Mark replied** (pipeline rows): checkbox + label; tapping opens a lightweight log sheet (optional paste field → "Log reply"). Logging moves the pitch to *replied* and opens the Receipt flow.
- **Mark complete** (campaign header + cadence recap): quiet purple link/control; confirms once ("End this campaign? Your recap and placements are kept."), then sets the campaign to complete.

### Reasoning drawer (XAI) — reference surface, no yellow
- Opens from any "Why?" link. Header: match score + curator name + close (×).
- **Two-column grid:** left = **Evidence** + **Assumptions**; right = **Risk** + **Sources**.
- Sources include a **"Memory · N files ↗"** link that opens the artist's **Context**.
- Actions are purple: "Challenge an assumption", "Apply mitigation". Challenging an assumption is a correction loop that writes back to Context.

### Context surface (memory of record) — reference surface, no yellow — Rule 2, 3, 7
- Posture line: `● NEVER SHOWN TO CURATORS · SHAPES TARGETING & TONE` (green dot).
- Grouped facts: **Voice & Narrative, Audience, Sonic Signature, Press History, Curator History.** Each shows the value, a **provenance line**, and a **correct** affordance.
- The "Audience" group shows a "✓ you corrected this" chip when edited.
- Desktop = grid; mobile = single stacked column (**reflow, never reduce** — keep **all five** groups and every provenance line; **correction is first-class on both surfaces**, since Context is the memory of record and edits happen opportunistically on mobile). *(v7.4: the mobile composition was missing Sonic Signature and Press History — both must be present.)*

### Confirm-before-pitch checklist
- Sections: **This release · About you (from your Context) · Who I'll pitch.**
- Each item is pre-filled and individually correctable. Items Soniq inferred carry an **amber "I inferred this"** flag (attention, not error).
- Single yellow CTA: "Looks right — draft N pitches →"; secondary "Adjust targeting". Footnote: nothing sends from here.

### Mobile patterns
- **Bottom nav:** Home · Campaigns · **Ask** (Ask opens the Line-to-Soniq sheet). **No Artifacts tab (v7.4); no Context tab (Rule 3).**
- Phone reflow: stack sections vertically; keep tap targets ≥ ~44px; keep provenance/metadata, don't strip it.

---

## 5. Screens

Routes use the pattern `sonicspotlights.app/workspace/{campaign}/...` (this `/workspace/` is the **app root**, not the Workspace nav section — the breadcrumb carries the section; v7.4). **Deck page numbers in brackets are the physical pages of `Soniq_Combined_Wireframes_v7_4.pdf`** (renumbered in v7 — older screen IDs like "11d" survive only in the HTML comments). Build the components above; these specs say how each screen composes them. Each screen ends with its acceptance checks.

### Acquisition — Land & Try [02], Sign-in [03]
Entry surfaces; **Spotlights atmosphere on.** Land sets time-to-value ("**~60s to your first fit score · one link**") under the CTA. **Launch-true / BYOC copy (v7.4):** Land sells that the artist **searches or brings** the curators and **Soniq scores fit + drafts** — it does **not** claim Soniq *finds* or *supplies* curators, and makes no verified-network or curator-count claim. Body reads to the effect of "Search or bring the playlist curators and press you have in mind — Soniq scores each for fit with your sound and drafts the pitch in your voice. You send it from your own inbox." The "How it works" step 02 reads "Bring or search curators → Soniq scores fit." **The Try preview is genuinely two-step (v7.4):** **Step 1 · your sound** (release link + optional one-line vibe; CTA "Next →") → **Step 2 · a curator to score** (paste a Spotify/Apple playlist link or search; CTA "Score the fit →"), with a **default-visible "No curator yet? Try a sample →"** affordance on Step 2. The preview reward is **a single scored card on the curator she brought** (e.g. *Slow-Core Quarterly · 89 fit · UNVERIFIED*) — the fit-scoring moat demonstrated before account creation. There is no "See my matches" / "See your curator matches" copy. Sign-in is one screen with two paths (sign in / create account); per the Rule 1 utility exception it is **purple-primary with zero yellow**. Account creation ≠ paid membership; the plan decision is deferred to the fourth draft. **Legal-UX (v7.1):** the gateless Try preview carries a quiet, conspicuous notice adjacent to the CTA ("By continuing you agree to the Terms & Privacy Policy") — notice for preview use, binding clickwrap at account creation. On sign-in, the agreement line sits directly adjacent to every continue path (email + SSO); creating an account logs a **versioned acceptance** (terms version + timestamp).
- ✅ Land copy makes no verified-network or curator-count claim, and never says Soniq *finds/supplies* curators — the artist brings or searches; Soniq scores.
- ✅ One yellow CTA on Land; **Try uses purple-flow CTAs** (Next / Score the fit); **zero yellow on sign-in** (purple primary); legal links are purple.
- ✅ Atmosphere layer present on all three surfaces.
- ✅ Try is two-step (sound → curator); the "Try a sample" affordance is visible by default; the preview returns one scored, **unverified** card (fit only).
- ✅ Preview-terms notice adjacent to the Try CTA; assent line adjacent to all sign-in actions; account creation records terms version + timestamp.
- ✅ No pre-checked boxes anywhere in acquisition.

### Terms re-acceptance gate [04] (v7.1, new) — route `/terms-update`
Shown once per terms version to returning users, after sign-in and before the workspace, **only for material changes** (ToS §20). A plain-language change log comes before the legal text, with links to the full document and a version compare. Primary action is **purple** ("I agree — continue") — a utility surface, zero yellow (Rule 1 exception). "Remind me later" works until the effective date; declining surfaces export and cancel paths. Acceptance is logged with version + timestamp; prior versions stay archived. **v7.2 copy correction:** the illustrative "nothing else changed" line previously cited a "no-training commitment" as untouched; that claim is no longer accurate (see §1 Recent changes) and has been replaced with "Ownership and approve-before-send are untouched." When this screen is used to announce the *actual* training-policy change, write that diff line truthfully — do not reintroduce any "we don't train on your content" phrasing.
- ✅ Appears only for material changes, once per version; silence/continued use is never treated as acceptance.
- ✅ Plain-language diff precedes legal text; full terms + compare reachable in one tap.
- ✅ Zero yellow; purple primary; escapes (remind-later until effective date, export, cancel) present.
- ✅ Versioned acceptance recorded; prior versions archived.
- ✅ No stale "no-training" / "we never train on your content" copy anywhere on this surface.

### Mobile hand-off [05]
The bridge from phone to workspace — one decision, one offer; carries the **preview's real work** forward, not a supplied list. **Saved-to-workspace card (v7.4)** shows the honest preview artifacts: *✓ Your sound — analyzed · ✓ First pitch — drafted in your voice · ● Memory — started learning your voice*, **plus a scored-curator row only if she brought her own curator** in the preview — a **sampled score does not import** (the row drops, zero curators saved). No "12 curator matches / 4 press fits." Single yellow CTA: **"Find your curators →"** (into discovery [08]); subline "Your workspace is ready — let's build your list." "Trial active · no card on file" stays true here: the card is requested at the fourth draft, not at hand-off.
- ✅ Exactly one decision (primary CTA) + one optional offer (laptop link); CTA is "Find your curators →", not "See your matches".
- ✅ Card reflects only what the preview produced; a sampled curator is **not** persisted.
- ✅ No fabricated counts; no payment ask on this surface.

### Welcome — mobile [06] & desktop [07]
Shows work Soniq prepared during signup. Regions: prepared-work label, **hero brief** (the recommended action), **snapshot** stats, and the **Line-to-Soniq panel opened to Activity** (Day-0 exception, Rule 4). **Day-0 honest state (v7.4):** at first entry the artist has brought no curators yet, so the hero reads **"Find curators for Dark Moon"** (not "Pitch Dark Moon to 3 curators") and the single yellow CTA is **"Find your curators →"** — the "pitch your top N" hero only appears *after* a list has been scored. The snapshot shows an honest near-empty state ("Bring your first curators to see fit scores here") rather than a fabricated 12/4/1. The desktop **activity feed uses artist-action voice** — "You scored 12 playlists," "You added 4 press contacts," "You searched public playlists · 9 sources" — never "Soniq found/scored a list for you." Desktop = same content as mobile with the nav and panel in the gutters.
- ✅ Day-0 panel open to Activity; collapsed everywhere else.
- ✅ First-entry hero is "find curators," not "pitch to N"; CTA is "Find your curators →".
- ✅ Snapshot is an honest empty/near-empty state — no fabricated counts, no deflating zeros.
- ✅ Feed copy is artist-action and claims only playlist analysis, not a network or a supplied list.

### Curator discovery — launch model [08–10]
**The primary way users reach curators at launch**, since the verified network depends on a partner integration that may not ship day one. One unified input: *search a genre/vibe, or paste a playlist link* — bring-your-own is the same front door, not a side path [08]. The model:
- **Fit ≠ Verified — two signals, never merged.** Every result shows a *fit* score (Soniq's analysis) and a *verified/unverified* state (whether Soniq can vouch for and reach the contact). Fit works today; verification arrives with partner integration.
- **Fit is computed from the playlist itself** — its genres, audio profile, and which of its artists resemble the user — so any playlist (searched or pasted) gets a real score with no network. The reasoning drawer [09] shows that basis (reference surface — no yellow).
- **The honest blank [10]:** a contact with nothing to analyze (a bare email or blog) gets *no score* and a "no fit data" note — never a fabricated number — but Soniq still drafts the pitch.
- ✅ Fit score and verification state are separate UI elements; no combined score/badge exists anywhere.
- ✅ A pasted playlist and a searched playlist render in the same ranked list with the same card anatomy.
- ✅ An unanalyzable contact shows "—" + `NO FIT DATA`; the draft path stays available.
- ✅ One yellow per state (Draft pitches → / Draft a pitch anyway →).

### Failure state — analysis failed [11] (v7, new)
A pasted link that can't be analyzed (private playlist, dead link) fails **loudly, specifically, and recoverably**: the reason is named, and the three paths forward are on screen — **Re-try analysis →** (yellow), *Paste a different link*, *Keep as no-fit contact*. The error inherits the honest blank: no score, no guess. See §6 for the general failure principles.
- ✅ Error names its cause; never a bare "something went wrong."
- ✅ No fit score is shown or implied for the failed item.
- ✅ Red marks the error state only; recovery actions are yellow/purple.
- ✅ The contact persists in the list regardless of outcome.

### Curator matches — verified, post-integration [12]
The verified-network version of discovery: ranked **curator match cards** (confidence-sorted) with filter chips (All / Curator / Press). **This page ships with the partner integration — it is not the launch default;** at launch, Curator discovery (above) is the hero. Single yellow CTA: "Draft pitches for top N →". Right edge = collapsed Line-to-Soniq.
- ✅ Gated behind partner integration availability; launch builds route discovery [08] instead.
- ✅ Lock pattern absent — the trial unlocked everything.

### Confirm before I pitch [13]
The checklist component above. The cheapest place to catch a wrong assumption before pitches go out. Entry point #2 into Context (corrections write back).
- ✅ Every item individually correctable; inferred items carry the amber flag.
- ✅ Footnote states nothing sends from here; no send action exists on this screen.

### Reviewer flow [14]
The artist reviews a Soniq-drafted pitch (curator card + draft text), then **copies it or opens it pre-filled in their own email** and sends it themselves; Soniq has no mailbox and cannot send (Rule 5). Single yellow CTA: "Copy pitch"; secondary "Open in email ↗", "Edit draft", and "Mark as sent" at the copy moment. **IA (v7.4):** a pitch is campaign execution — this screen sits under **Campaigns** (nav highlight + breadcrumb "Campaigns › {campaign} › Pitches › {curator}"), not Workspace. *(It was the one screen still filed under Workspace; corrected.)*
- ✅ Filed under **Campaigns** — nav highlight and breadcrumb both read Campaigns, consistent with the handoff [16].
- ✅ No send action exists on the screen; the artist copies and sends. "Mark as sent" records the only signal Soniq can know.
- ✅ Draft is editable before confirm.

### The plan moment [15] (v7, new) — route `/plan`
**The conversion surface. The gate sits at the fourth draft, not at the matches or the send:** the trial proves value first (playlists scored, three pitches drafted, brief ready), and payment is asked exactly when the artist wants to draft the rest of the campaign — a copy button can't be gated, but the drafting can. Layout: a **trial-value rail** (literally what Soniq already built for this campaign — receipts, not feature marketing) beside **two plan cards**; the recommended plan carries the screen's single yellow CTA ("Draft the full campaign →"), the other plan is a ghost. Honest exits in the footer: cancel anytime; drafts, scores, and Context persist. **Atmosphere returns here** — the one workspace route that earns it (Rule 6 boundary). **Legal-UX (v7.1):** auto-renewal consent is a **separate, never pre-checked checkbox** adjacent to the purchase, stating price, renewal cadence, and the cancel promise (anytime, in-app, effective end of period, no advance-notice deadline) — buying and agreeing-to-renew are two affirmative acts (ROSCA-grade). Terms & Privacy links sit in the footer. *Plan names/prices in the wireframe are illustrative.*
- ✅ Reachable only after the three free drafts are used; never blocks viewing matches, scoring, or the three free drafts.
- ✅ Trial-value rail reflects the user's actual campaign objects, not generic marketing.
- ✅ One yellow (recommended plan); second plan is ghost; no countdown/pressure mechanics.
- ✅ Auto-renewal consent is its own unchecked affirmative act, adjacent to the purchase, disclosing price + cadence + cancellation before any charge.
- ✅ Decline path keeps all trial work intact and visible.

### The handoff [16]
**The launch send path. Soniq has no mailbox of its own:** the artist **copies the pitch or opens it pre-filled in their own email client** (to / subject / body ready) and hits send. The "How you send this" block explains it. **Artist-logged tracking:** the artist marks a pitch sent at the copy moment, and logs replies one tap later; Soniq classifies and drafts the response. **No tracking pixels, no open-tracking, no inbox scanning** — "opened" is not a state. A self-chosen contact can't burn anyone's network. Verified contacts (Phase 1) send via the partner with native status — same screen, stronger guarantees. Approve-before-send is structural here (there is no send to gate). Single yellow: "Copy pitch"; secondary "Open in email ↗", "Mark as sent".
- ✅ Send requires explicit approval; sender identity (the artist's address) is visible pre-send.
- ✅ No open-tracking copy, mechanism, or state anywhere in the flow.
- ✅ The unverified tag is visible on the pitch at the moment of approval.

### Failure state — sends paused / bounced [17] (v7, new)
The campaign when a contact bounces. Because the artist sends from their own inbox, **the bounce lands in their inbox, not Soniq's** — so the rollback is **artist-logged**: one tap returns the pitch to **ready to send** with the reason, the screen's one yellow being "Fix address & re-draft →". A rolled-back pitch is never counted as sent; the rest of the pipeline is untouched (there is no send queue to pause, because Soniq never held the sending). The live dot goes red while a bounce is unresolved. See §6.
- ✅ Paused state is impossible to miss (banner + red live dot) and names the cause.
- ✅ Bounced pitches appear as ready-to-send-with-reason, never as sent; the bounce is artist-logged.
- ✅ Queue contents survive disconnect/reconnect byte-for-byte; no re-approval prompt.
- ✅ No automatic background retry of bounced sends.

### The Glance [18]
Campaign home. The **pipeline is the page**: **four lifecycle states (ready to send → sent → replied → placed)** render left-to-right; **sent and replied are both artist-logged** (the artist marks a pitch sent at the copy moment, and logs replies after). Movement, not a to-do list. **v7:** "opened" is retired (it required tracking pixels in the artist's own mail — a deliverability risk Soniq won't take). **Replied is artist-logged:** unmarked sent rows carry the "heard back? Mark replied" affordance. Campaign header carries the quiet **"Mark complete"** control (Rule 5 extension).
- ✅ Exactly four pipeline states; no "opened" anywhere (UI, copy, data model).
- ✅ Sent rows expose Mark replied; logging advances the row and opens the Receipt.
- ✅ Mark complete is present, quiet (not yellow), and confirms once.

### The Receipt [19]
A reply becomes proof. **v7 — artist-logged:** the artist logged the reply (paste optional); Soniq classified intent (`POSITIVE`), surfaced the ask, and drafted a response for review. **Stems travel as a Media-library link, never an attachment** (multi-track WAVs bounce; a link can't). Single yellow CTA: "Send reply + stems link →".
- ✅ Provenance line states the artist logged the reply (never "Soniq detected/read").
- ✅ Drafted response is editable; sending it is an explicit approve (Rule 5).
- ✅ Stems/media attach as Media-library links only — no file attachments.

### Cadence loop [20]
End-of-campaign recap (placements, reply rate, time saved) that rolls into the next release. Entry point #3 into Context ("update before next release"). **v7:** the wind-down is a **proposal** — the status reads `WRAPPING · PROPOSED`, and the artist can accept it, ignore it, or **Mark complete now** at any time. Endings are hers too. Single yellow CTA: "Plan the next release →".
- ✅ Wind-down renders as proposed, not applied; campaign state changes only on artist action.
- ✅ Mark complete available here and on the Glance; both routes converge on the same confirm.

### Reasoning anatomy / drawer [21]
The reasoning drawer component above. Reference surface — no yellow. Every claim auditable; "Memory" source link opens Context. **Label (v7.4):** the score header reads "89 **FIT**" (not "89 MATCH") — the deck standardizes on *fit* for the score.
- ✅ Zero yellow; all actions purple.
- ✅ Score label reads "FIT," not "MATCH."
- ✅ Source counts are real (never "0 sources" on grounded output); Memory link opens Context.

### Artist Context — desktop [22] & mobile [23]
The Context surface component above. Reached from the artist menu. No yellow; provenance everywhere; corrections write back. **Parity (v7.4): reflow, never reduce** — mobile carries **all five** groups (Voice & Narrative, Audience, Sonic Signature, Press History, Curator History), and **correction is first-class on both** surfaces.
- ✅ Not reachable from the task sidebar or mobile bottom nav (Rule 3).
- ✅ Mobile shows all five groups (Sonic Signature + Press History included), each with provenance + a correct affordance.

### Line to Soniq [24]
Spec/reference page for the panel itself — collapsed and expanded states, and the mobile sheet.
- ✅ One panel, two tabs; ⌘K remains separate.
- ✅ Collapsed by default outside Day-0; red dot in paused-sends state.

### Settings → Privacy [25] (v7.2, new) — route `/settings/privacy`
The home of the **Soniq Improvement** (AI-training) opt-out. A **reference/settings surface — zero yellow** (Rule 2): the toggle itself is **brand purple** in its default **ON** state. Anatomy: (1) the primary "Help improve Soniq" toggle row — plain-language description, an `● ON` status tag, the purple toggle, and a forward-only-scope footnote ("turning this off stops new content going forward; it doesn't pull back anything already used"); (2) an **"Always excluded — not a setting you manage"** pair of cards (streaming-platform data; outside AI providers) with emerald check marks, signaling these are contractual exclusions independent of the toggle; (3) an **ask-first** marketing/testimonial row (separate consent, never bundled into the training toggle). Copy must match Privacy Policy §3 / ToS §4.3 exactly on the three points that carry legal weight: **on-by-default, available to all plans, prospective-only**. *Why default-on but never hidden:* the policy is opt-out, but for this audience a genuinely reachable, plain-language opt-out is itself the trust signal — so the toggle is one tap, in a predictable place, with no dark-pattern friction.
- ✅ Toggle is **on by default**, reachable in one tap, available identically on every plan (never a paid-only privacy feature).
- ✅ Forward-only scope stated plainly; no implication that opting out erases prior training.
- ✅ Platform data and third-party providers shown as **always excluded**, visibly *not* governed by the toggle.
- ✅ Marketing/testimonial use is a **separate** ask-first affordance, not folded into the training toggle.
- ✅ Zero Laser Yellow (reference surface, Rule 2); toggle and links are purple.
- ✅ No "we don't train on your content" copy; language matches Privacy Policy §3 / ToS §4.3 (v0.3).

---

## 6. Failure & degraded states (v7, new)

Trust is won where things go wrong. Two wireframes carry the pattern — **analysis failed [11]** and **sends paused / bounced [17]** — and these principles generalize to any failure you build:

1. **Fail loudly, never silently.** A broken channel or failed job is a visible banner/state with the cause named — never a background retry loop or a quietly-stale screen.
2. **Failure inherits honesty.** The no-fabrication rules don't bend under error: no guessed fit scores, no optimistic pipeline states. A bounce is not "sent." If Soniq doesn't know, the UI says so.
3. **Work is never lost.** Drafts and approvals persist; failed analyses keep the contact on the list; a logged bounce rolls one pitch back to *ready to send* without disturbing the others. Nothing is auto-sent and nothing silently retries — at launch Soniq holds no send queue, because the artist is the sender.
4. **Every failure ships its exits.** The fix (retry, reconnect, replace) is on the failure surface itself — the single most useful recovery action is the screen's one yellow; alternates are purple/ghost.
5. **Red marks the error, never the action.** Error chrome (borders, tags, the paused live dot) uses red; recovery buttons follow the normal hierarchy.
6. **No silent retries on outbound mail.** Sends only resume on the artist's reconnect/instruction — automatic resends from a flaky channel are exactly how deliverability and relationships burn.

---

## 7. Anti-patterns (what NOT to build)

- ❌ A second yellow button on any screen. (Rule 1)
- ❌ Laser Yellow anywhere on sign-in / auth / account-utility surfaces — those are purple-primary. (Rule 1, utility exception)
- ❌ A "Context" item in the left sidebar or a "Context" tab in the mobile bottom nav. (Rule 3)
- ❌ A permanently-open right rail / a separate "LIVE" feed alongside the chat. It's one panel, collapsed by default. (Rule 4)
- ❌ Any Laser Yellow on the Context page or the reasoning drawer. (Rule 2)
- ❌ Auto-sending pitches or replies without a confirm step. (Rule 5)
- ❌ **Tracking pixels, open-tracking, or inbox scanning in the artist's email — and no "opened" pipeline state.** Replies are artist-logged. (Rule 5, §5 Glance)
- ❌ **An emerald button.** Emerald is status (confirmed/placed/live), never an action — there is no "Confirm" variant. (§4 Buttons)
- ❌ **Gating matches, scoring, reasoning, or the first three drafts behind the paywall.** The plan moment sits at the fourth draft — value before price. (§5 Plan moment)
- ❌ **Sending stems or media as email attachments.** Media travels as Media-library links. (§5 Receipt)
- ❌ Auto-completing or auto-archiving a campaign off a heuristic. Soniq proposes the wind-down; the artist commits. (§5 Cadence)
- ❌ Spotlights beams/pools inside the workspace — `/plan` is the single sanctioned exception. (Rule 6)
- ❌ Dropping provenance lines **or whole groups** from mobile Context to save space — reflow, never reduce; all five groups carry, and correction stays first-class on mobile. (Rule 7, §4 Context, §5 [22/23])
- ❌ An **`Artifacts`** item in the desktop sidebar or mobile bottom nav (removed v7.4) — drafted pitches/briefs live under Campaigns, reusable assets under Media. (Rule 3)
- ❌ Filing a **pitch (or any campaign-execution screen) under Workspace** — Workspace is discovery & scoring; Campaigns is execution. (Rule 3, §5 [14])
- ❌ Building the fake browser chrome or the annotation columns from the wireframes — those are deck scaffolding, not UI. (Section 8)
- ❌ Reproducing the wireframes' pervasive monospace / Inter type. Type is **Plus Jakarta Sans + Figtree** per the UI System; mono is a narrow precision accent only. (Section 8)
- ❌ Pulling the logo's gradient hues (cyan / teal / green) into UI tokens, components, or actions. The gradient stays inside the mark; the UI palette is purple + yellow + functional only. (§4 Logo)
- ❌ Placing the light (slate-wordmark) lockup on a dark surface. ("Soniq" as a text wordmark in-app is legitimate — it's the app's name; the company lockup belongs on entry/marketing/legal surfaces.) (§4 Logo)
- ❌ Merging *fit* and *verified* into a single score or badge — they're two independent signals (fit = Soniq's analysis; verified = partner integration). (§5 Curator discovery)
- ❌ Showing a fabricated fit score for a contact with nothing to analyze — use the honest blank ("no fit data"). (§5 Curator discovery)
- ❌ **"Soniq supplies/finds the curators" language on any launch (BYOC) surface** — "See your matches," "Review curator matches," "12 curator matches," "curator matches in ~60s." The artist **brings or searches**; Soniq **scores**. The supplied-list framing is correct **only** on the post-integration page [12]. (v7.4, §5 [02/05/06/07/24])
- ❌ **Fabricated Day-0 counts** (e.g. "12 curator matches / 4 press fits") on first entry, before the artist has brought anything — use the honest near-empty state. (v7.4, §5 [05/06/07])
- ❌ **Importing a *sampled* preview curator** into the real workspace as if the artist chose it — a sampled score is illustrative and is not persisted. (v7.4, §5 [02/05])
- ❌ Folding ⌘K into the Line-to-Soniq panel — they're separate (find/navigate vs converse). (Rule 4)
- ❌ **Browsewrap** — treating browsing, pasting a link, or continued use as binding assent. Binding obligations require an affirmative act adjacent to a conspicuous terms link. (§5 Acquisition, Re-acceptance gate)
- ❌ **Pre-checked consent boxes** — auto-renewal and any legal consent must be an unchecked, separate affirmative act. (§5 Plan moment)
- ❌ **Silence as acceptance of material terms changes** — material changes go through the re-acceptance gate; never apply them on "continued use." (§5 Re-acceptance gate)
- ❌ Yellow on any legal/assent element — legal links and consent controls are purple; assent rides existing CTAs and never competes with the music decision. (Rule 1)

---

## 8. Accessibility (carried from the UI System)

Full detail in the guide; the essentials to build to:
- **Contrast — WCAG 2.1 AA:** body text ≥ 4.5:1, large text / UI ≥ 3:1, in both themes. The yellow primary uses `--yellow-ink` for AA on the fill; purple secondary text is verified on Void Black.
- **Touch targets:** interactive controls ≥ 44×44px (md button and up). Small / icon controls only in dense, pointer-first contexts.
- **Focus & keyboard:** visible focus on every control (the purple `--focus-ring`); full Tab order; Enter/Space activate buttons; the Line-to-Soniq panel is keyboard-reachable and dismissible.
- **Screen readers:** loading and disabled states expose ARIA state; the amber "inferred" flag, confidence scores, and **pipeline/error states** carry text equivalents — never color alone.

---

## 9. Caveats & open questions — verify before relying

- **Every deck page renders from the HTML references.** The deck is a **26-page** deck (acquisition → workspace → curator discovery + failure → campaign + conversion → reasoning → Context → **Roadmap**), all generated from `wireframes-entry-reference.html` + `wireframes-reference.html`. The Roadmap slide [26] traces BYOC → partner integration → owned catalog. The older narrative/divider/strategy/back-matter pages from the v5 deck are still **not carried over**; the Roadmap covers the strategic "where this goes" need, so recreating the rest is lower priority — recreate on request.
- **⚠ Companion-sync (v7.4 build note).** The `wireframes-*.html` companions in the source folder were last regenerated at **v7.1 (25 pages)** and the prior README at v7.3; the **render source that produced the v7.3 PDF was not retained in the project folder.** This README is the authoritative v7.4 spec. The two HTML references and the combined PDF must be **re-synced to v7.4** as part of this build (apply every Changelog item above); until then, treat any "matches"-language or four-item nav in the HTML as **stale**, superseded by this README.
- **`wireframes-reference.html` is wireframe scaffolding, not app architecture.** Each "page" is a 1056×816 deck slide that includes (a) a fake **browser frame** drawn around the product, and (b) a right-hand **annotation column** ("What this screen does", numbered notes). Those exist to explain the design to humans. **The real app is only the content *inside* the frame; the annotations are not UI.** Use the HTML for structure, layout, and class names — not as the component tree.
- **Several slides crop the screen to its decision region** (Curator matches, Reviewer, Glance, Receipt, Cadence, Anatomy carry a "cropped slide" note). The empty space below the frame is the slide, not the screen — full compositions live in the HTML. Body copy on rebuilt pages (curator names, scores, sample text) is faithful to intent but **spot-check before treating as canonical.**
- **The MVP does not depend on Groover.** Launch is **bring-your-own-curator + copy-paste send** — Soniq drafts, the artist sends from their own inbox, and tracking is artist-logged. Partner integration (e.g. Groover) is **Phase 1**: it adds verified discovery, send-on-behalf, and automatic status/receipts. Whether the partner API supports **submit-on-behalf (OAuth)** and **webhook status push** is still being verified, but **nothing at launch is blocked on it.** Keep the send/status layer behind an interface so the partner path can slot in later without reworking the surfaces.
- **Legal copy is draft, pending counsel.** The legal-UX surfaces (preview notice, assent lines, renewal consent, the re-acceptance gate and its sample change-log) implement ToS DRAFT v0.2 §§"How you accept," 6, 20 — final wording ships only after attorney review. Counsel may escalate sign-in assent to an explicit checkbox; the layouts reserve room for it.
- **Copy is illustrative — including pricing.** Example artist ("Maya Reyes / thresholds"), campaign ("Dark Moon"), curators, and metrics are sample data. **The plan moment's plan names and prices (Solo $19 / Momentum $39) are placeholders pending a pricing decision** — the screen's *structure* (gate at the fourth draft, three free drafts, value rail, one yellow) is the design decision; the numbers are not.
- **The launch positioning sentence drops "verified."** v7 acquisition copy reads "pitches your music to playlist curators and press" — *verified* returns with partner integration. If the locked positioning sentence should keep "verified" even at launch, flag it; the copy change is one line in each of two files.
- **Naming — RESOLVED (June 2026).** The company is **Sonic Spotlights LLC** (sonicspotlights.com); **"Soniq"** is the app name and AI persona (soniq.rocks), registered as a Colorado DBA. In-product chrome may therefore use the "Soniq" text wordmark legitimately (the mobile Land wireframe already does); the SONIC SPOTLIGHTS lockup is company branding for entry, marketing, and legal surfaces. Keep billing descriptors recognizable (legal review item).
- **Possible logo asset gaps (optional).** The set covers dark, light, and icon. If needed later: a single-color/mono version (for monochrome or busy-photo contexts) and a standalone transparent mark (burst + monogram without the tile). Not blockers.

---

## 10. Questions for the design side

If something here is ambiguous for implementation, flag it back rather than guessing — especially anything that would touch one of the Cardinal Rules. The rules are the parts most worth a quick confirmation over a silent reinterpretation.
