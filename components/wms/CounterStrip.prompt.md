One-line: the live unload counters across the top of the scanning screen.

```jsx
<CounterStrip items={[
  {label:'Unloaded',value:18},{label:'Balance',value:32},
  {label:'OK',value:14,tone:'ok'},{label:'Not OK',value:4,tone:'bad'}
]} />
```

FR-006.7 specifies a **manual** refresh rather than live auto-update, to avoid processing load — so pair this with a refresh control, not a polling timer.
