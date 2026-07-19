Native select styled to match Input — sunken field, purple focus, custom chevron.

```jsx
<Select label="Platform" value={p} onChange={e => setP(e.target.value)}
  options={["Spotify", "Apple Music", "SoundCloud"]} />
```

`options` accepts strings or `{value,label}` objects.
