One-line: frames a web-surface wireframe so it reads as a browser view, not a component.

```jsx
<BrowserChrome url="wms.sparecare.in/inward/gate-entry">
  <GateEntryWeb …/>
</BrowserChrome>
```

Web wireframes get this frame; handheld wireframes get `HandheldFrame` instead. Kept intentionally plain — no tab strip, no toolbar icons — so it frames without competing.
