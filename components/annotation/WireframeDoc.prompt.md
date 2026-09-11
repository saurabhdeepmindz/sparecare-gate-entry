One-line: the page body for a single screen in the wireframe portal, switchable between clean and annotated.

```jsx
<WireframeDoc mode={view} eyebrow="IN-A" group="Gate Entry & Consignment"
  screenId="Screen 1" screenName="Gate Entry (Create GEN)"
  headline="Gate Entry — one number the load carries for life"
  intro="The first step in the inward process…"
  chips={['Prepared by Deepmindz Innovations Pvt Ltd','FR-001','Surface Web + Handheld','FRD v0.11']}
  markers={markers} items={items}>
  <BrowserChrome url="wms.sparecare.in/inward/gate-entry"><GateEntryWeb/></BrowserChrome>
</WireframeDoc>
```

Default mode is `wireframe` — the customer sees a clean working screen first, with the specification one click away. Keep the callout numbers and the legend entries in the same order; the legend is what makes the wireframe reviewable against the FRD.
