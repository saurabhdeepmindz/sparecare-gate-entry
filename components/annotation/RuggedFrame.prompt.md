One-line: the device frame every handheld WMS wireframe sits in.

```jsx
<RuggedFrame caption="Screen 6a · Box scanning">
  <ScreenHeader title="Unload Truck" />
  {/* … */}
</RuggedFrame>
```

Content scrolls inside the screen, so callout markers go **on the content**, not in a gutter — a scrolling frame has no gutter to put them in. Keep the caption's SCROLL INSIDE hint whenever markers fall below the fold.
