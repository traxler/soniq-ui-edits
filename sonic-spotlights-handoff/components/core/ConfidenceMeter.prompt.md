The circular FIT score — mono number in a purple ring. "The system being exact." Fit is always separate from verification — never merge the number with a verified/unverified badge.

```jsx
<ConfidenceMeter value={89} />                    // purple ring
<ConfidenceMeter value={68} state="muted" />      // grey ring
<ConfidenceMeter state="nodata" />                // dashed "—" (nothing to analyze)
<ConfidenceMeter state="error" />                 // red "!" (analysis failed)
<ConfidenceMeter value={89} showLabel label="fit" size={56} />
```

Never fabricate a number — use `state="nodata"` when there's nothing to score.
