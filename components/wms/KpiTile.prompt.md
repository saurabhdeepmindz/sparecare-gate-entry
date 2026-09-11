One-line: one of the three pending-queue counts across the top of the inward dashboard.

```jsx
<KpiTile label="Pending for Unload" value={5} unit="Trucks" active onClick={select} />
```

Always name the unit — the source shows "5 Trucks" and "5 GENs", never a bare 5, because the three queues count different things. The numeral is condensed display type in soft teal.
