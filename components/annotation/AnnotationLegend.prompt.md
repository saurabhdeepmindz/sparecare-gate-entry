One-line: the numbered legend under a wireframe; every callout number gets exactly one entry here.

```jsx
<AnnotationLegend title="Screen 1 — Create GEN" columns={2} items={[
  {n:1,label:'Name of the Person',ref:'FR-001.16',control:'Text input',
   description:'Mandatory. The truck driver only — gate personnel are a separate role and are not recorded here.'},
  {n:2,label:'Gate Entry Number',ref:'FR-001.14',control:'System-generated',tone:'open',
   description:'Generation logic is not yet defined and is recorded as an open item.'}
]} />
```

The `ref` chip is what makes the wireframe reviewable against the spec — always fill it, using the FR number where one exists and the section number otherwise. Quote the field reference table's own wording rather than paraphrasing it.
