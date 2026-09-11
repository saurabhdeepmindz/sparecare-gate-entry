One-line: the 390px handheld surface every WMS screen sits inside.

```jsx
<HandheldFrame label="Screen 1" height="720px">
  <ScreenHeader title="Create GEN" />
  {/* … */}
</HandheldFrame>
```

No device bezel by design — the FRD presents bare screens with a caption underneath. Set `height` when screens must align in a row; leave it off to let content size the frame.
