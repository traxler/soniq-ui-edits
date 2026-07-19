The signature Spotlights entry treatment (Rule 6) — crossed purple + gold beams, light pools, vignette, grain. **Entry / boundary surfaces only** (Land, Try, Sign-in, Hand-off, /plan); the working app stays calm.

```jsx
<div style={{ position: "relative", background: "var(--void)" }}>
  <SpotlightsAtmosphere />
  <div style={{ position: "relative", zIndex: 1 }}>…content…</div>
</div>
```

Renders an absolutely-positioned non-interactive layer; put content in a `zIndex:1` layer above it. `intensity` scales the glow.
