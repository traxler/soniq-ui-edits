Buttons for Sonic Spotlights — `primary` is the single Laser-Yellow action (one per screen; **none** on auth/utility or reference surfaces). `secondary` (outlined purple, fills on hover) is the everyday action. **There is no emerald button** — emerald is status only.

```jsx
<Button variant="primary" size="lg" onClick={find}>Find your curators →</Button>
<Button variant="secondary">Analyze fit</Button>
<Button variant="ghost">Choose Solo</Button>
<Button variant="destructive">Delete campaign</Button>
<Button variant="secondary" loading>Save</Button>
```

Variants: `primary` (yellow + subtle glow, max one/screen), `secondary` (transparent, 1.5px purple border, fills purple on hover), `ghost` (line border, muted), `destructive` (red-600 fill). Sizes `sm 36 · md 44 · lg 52 · xl 60`. `loading` → "Working…". Focus shows the purple ring.
