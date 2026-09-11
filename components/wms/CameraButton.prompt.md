One-line: the camera glyph beside Primary Document Type; no border, no fill.

```jsx
<Field label="Primary Document Type" required adjacent={<CameraButton onClick={openCamera} />}>
  <SelectInput placeholder="Primary Document Type" options={docTypes} />
</Field>
```

Kept unboxed in the source artwork so it reads as a secondary affordance next to the dropdown rather than a second primary action.
