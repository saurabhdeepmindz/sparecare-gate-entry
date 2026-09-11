One-line: the drill-down under a dashboard KPI tile; one table per workflow stage.

```jsx
<QueueTable caption="Pending Unloads"
  columns={[{key:'gen',label:'GEN',link:true,mono:true},{key:'date',label:'Date'},
            {key:'supplier',label:'Supplier'},{key:'value',label:'Value',align:'right'}]}
  rows={[{gen:'IC001234',date:'22-10-2023',supplier:'ABC',value:'100,000'}]} />
```

Each stage carries a different fourth column — Value for unload, No. of Boxes for checking, No. of Units for binning — because the three queues measure different things. Use the term "GEN": the FRD withdrew "Inward Code" in favour of Gate Entry Number.
