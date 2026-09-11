One-line: a status pill for stock state or box quality; the only rounded shape in the system.

```jsx
<Tag tone="ok">In stock — 12 units</Tag>
<Tag tone="low">Low stock — 2 units</Tag>
<Tag tone="out">Out of stock</Tag>
```

Tones `ok` / `low` / `out` are green / amber / red and must not be re-mapped to brand colours — the brand document keeps them standard so they read as a traffic light. `neutral` and `info` carry no signal. Always write the quantity into the label when one exists ("In stock — 12 units"), never the bare word.
