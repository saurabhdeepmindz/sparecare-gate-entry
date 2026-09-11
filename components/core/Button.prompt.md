One-line: the brand's only button; reach for `variant` rather than restyling it.

```jsx
<Button variant="primary">Talk to us</Button>
<Button variant="secondary">See how it works</Button>
<Button disabled>Syncing…</Button>
```

Variants: `primary` (deep teal, the page's main action), `accent` (soft teal — the handheld *Next*), `secondary` (grey outline), `ghost` (text only, no padding), `onyx` (solid black, rare), `quiet` (chrome fill, used for *Cancel* beside an accent Next). Sizes `lg` / `md` / `sm`. `block` fills the width for the handheld action bar. Disabled renders chrome-on-grey and is never teal.
