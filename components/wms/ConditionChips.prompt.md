One-line: the six box-condition options from FR-006.4, multi-select, two per row on a handheld.

```jsx
<ConditionChips selected={sel} onToggle={toggle} options={[
  {id:'ok',label:'OK',icon:'circle-check',tone:'ok'},
  {id:'tampered',label:'Packing Tampered',icon:'triangle-alert',tone:'warn'},
  {id:'damaged',label:'Damaged',icon:'circle-x',tone:'bad'},
  {id:'scratch',label:'Visible Scratch',icon:'scan-line',tone:'warn'},
  {id:'nopack',label:'Without Packing',icon:'package-open',tone:'warn'},
  {id:'wrong',label:'Wrong Delivery',icon:'truck',tone:'bad'}
]} />
```

Do not reduce this to a single-select radio — FR-006.4 is explicit that multiple conditions may be selected for one box. Selecting anything other than OK makes the photograph mandatory (FR-006.5).
