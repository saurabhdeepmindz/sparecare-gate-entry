One-line: boxes unloaded against boxes expected, with the percentage.

```jsx
<ProgressBar label="Unload progress" value={18} total={50} />
```

`total` must be *No. of Boxes in GEN* from Receipt Details, not the indicative gate-entry count — FR-001.21 rules the gate figure out as a reconciliation baseline.
