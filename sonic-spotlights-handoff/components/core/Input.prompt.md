Text input on the void — sunken field, hairline border, purple focus ring. `status="inferred"` flags an AI-pre-filled value the artist should review.

```jsx
<Input label="Release title" placeholder="Untitled" />
<Input label="Pitch subject" status="inferred" helper="Soniq drafted this — edit freely." />
<Input label="Email" status="error" helper="Enter a valid address." />
<Input label="Search" size="lg" iconLeft={<span>⌕</span>} placeholder="Search curators…" />
```

Props: `label`, `helper`, `status` (error/success/inferred), `size` (md/lg), `iconLeft`, `disabled`. Passes `value`/`defaultValue`/`onChange` through to the input.
