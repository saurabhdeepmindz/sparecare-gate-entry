One-line: the wireframe wrapper — pair it with an AnnotationLegend directly beneath.

```jsx
<AnnotatedScreen screenLabel="Screen 1 — Create GEN" screenRef="FR-001"
  markers={[{n:1,x:50,y:4},{n:2,x:0,y:26}]}>
  <HandheldFrame>…</HandheldFrame>
</AnnotatedScreen>
```

The `gutter` (22px by default) is what keeps edge markers whole; do not set it below half the marker size, and do not put `overflow:hidden` on an ancestor of this component. Marker numbers must run in reading order and match the legend exactly.
