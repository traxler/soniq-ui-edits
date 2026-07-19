---
name: sonic-spotlights-design
description: Use this skill to generate well-branded interfaces and assets for Sonic Spotlights (Soniq), the AI music-marketing platform — for production or throwaway prototypes/mocks. Contains design guidelines, colors, type, fonts, assets, and a UI kit of reusable components.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Map
- `readme.md` — the full design guide: product context, voice & tone, visual foundations, iconography, index.
- `styles.css` — the single entry point. Link it and you get every token + webfont. It only `@import`s the `tokens/*.css` files.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`.
- `assets/` — `logo-horizontal-dark.png`, `logo-horizontal-light.png`, `app-icon.png`, and `fonts/*.ttf`.
- `components/core/` — reusable React primitives (`Button`, `Input`, `Select`, `Switch`, `Checkbox`, `Badge`, `Tag`, `Card`, `Avatar`, `IconButton`, `ConfidenceMeter`, `ReasoningNote`, `StatusDot`). Each has a `.prompt.md` with usage.
- `ui_kits/app/` — interactive Soniq app recreation (dashboard → curator matches → pitch composer → analytics).
- `guidelines/` — foundation specimen cards.

## The one rule to never break
**One yellow action per screen.** Electric Purple (`--voice`) carries everything interactive; Laser Yellow (`--action`, `variant="primary"`) marks the single most important decision — never more than once on a screen. Reference/read-only surfaces have no yellow at all. Dark canvas (Void Black) by default. Mono (JetBrains Mono) only for scores, timestamps, and citations. Always surface Soniq's reasoning and flag anything inferred — transparency is the brand.
