One-line: Screen 2's four downstream steps, pre-checked and overridable per consignment.

```jsx
<WorkflowChecklist steps={[
  {id:'unload',label:'Unload Truck & Check Primary Boxes',checked:true},
  {id:'secondary',label:'Check Secondary Boxes',checked:true},
  {id:'binning',label:'Binning',checked:true},
  {id:'receipt',label:'Receipt Confirmation',checked:true}
]} onToggle={toggle} />
```

Rows alternate white and chrome, and the header bar is solid onyx — the one place the brand's onyx appears in the WMS. Unchecked steps are skipped entirely; the consignment proceeds to the next active step.
