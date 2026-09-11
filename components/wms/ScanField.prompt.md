One-line: the scan-or-type box number field at the top of every unloading screen.

```jsx
<ScanField placeholder="Scan box barcode" value={box} onChange={e=>setBox(e.target.value)} onScan={scan} />
```

The input is mono because the value is a code, and the reader button is soft teal — it is the screen's most-used control. Keep manual entry enabled: FR-006.2 requires keyboard entry as a fallback where a label will not decode.
