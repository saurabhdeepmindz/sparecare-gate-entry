One-line: a single numbered circle over a wireframe; the number keys into the legend beneath.

```jsx
<AnnotationMarker n={3} x={6} y={41} />
<AnnotationMarker n={7} x={94} y={22} tone="open" />
```

Coordinates are percentages of the annotated area, which is wider than the screen itself — so `x={0}` or `x={100}` puts a marker half-on the screen edge without any part of the circle being clipped. Use `tone="open"` for fields whose behaviour is still an open issue in the FRD.
