One-line: the outer sheet for an annotated wireframe page, on the neutral grey documentation canvas.

```jsx
<WireframeSheet title="Inward — Gate Entry to Dashboard"
  subtitle="Screens 1 to 3 of the WMS Inward module."
  meta={[{label:'Module',value:'WMS / Inward'},{label:'FRD',value:'v0.11'}]}
  footer="Callout numbers key to the legend beneath each screen.">
  …
</WireframeSheet>
```

The grey canvas distinguishes documentation from product UI — product screens are white on chrome, wireframe sheets are white on `--anno-canvas`. Never apply `overflow:hidden` here; callout circles rely on it staying open.
