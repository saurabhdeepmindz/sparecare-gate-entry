One-line: the photo evidence tile on the box condition screen.

```jsx
<PhotoCapture required={condition !== 'ok'} captured={hasPhoto} onCapture={openCamera} />
```

Show the thumbnail and the retake tile side by side, as the source artwork does. The "(Mandatory)" marker is conditional, not decorative — it appears exactly when FR-006.5 blocks the save.
