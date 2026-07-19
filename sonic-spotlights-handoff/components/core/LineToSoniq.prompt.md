The single global panel to talk to Soniq and watch it work (Rule 4). Collapsed = thin right edge (live dot + Ask). Expanded = Activity feed + Ask chat. ⌘K stays separate. Live dot goes red when `paused`.

```jsx
<LineToSoniq
  activity={[
    { h: "Drafted your first pitch", m: "14s ago · from your preview" },
    { h: "Analyzed your sound", m: "lo-fi · shoegaze" },
  ]}
  defaultOpen   // Day-0 Welcome only
/>
```
