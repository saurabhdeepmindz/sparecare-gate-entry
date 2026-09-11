One-line: wraps one WMS input with its label, asterisk and optional adjacent control.

```jsx
<Field label="Contact Number" required>
  <TextInput placeholder="Enter the contact Number" />
</Field>
<Field label="Primary Document Type" adjacent={<CameraButton />}>
  <SelectInput placeholder="Primary Document Type" options={docTypes} />
</Field>
```

The camera sits *outside* the input border in the source artwork — pass it as `adjacent`, not as a child.
