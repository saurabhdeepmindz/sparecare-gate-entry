One-line: the WMS dropdown — the default control for anything drawn from master data.

```jsx
<SelectInput placeholder="Select the Courier Type"
  options={['Transport','Courier','Own Vehicle','Individual (External Person)','Individual (Internal Person)']} />
```

Most WMS fields are dropdowns rather than text inputs on purpose: the values come from configurable master data. Gate Entry Number on Screen 2 is a dropdown specifically because FR-002.16 forbids free-text entry of it.
