One-line: the amber open-question box and the tinted our-proposal box that sit inside annotation entries.

```jsx
<CalloutBox kind="query" ref_="OI-048" blocking>
  The Gate Entry Number generation logic is not yet defined.
</CalloutBox>
<CalloutBox kind="proposal">
  The FRD describes the dashboard as a queue list. Treating it as the landing screen is ours.
</CalloutBox>
```

Use `query` only where the FRD genuinely records the behaviour as undecided — cite the `OI-xxx`. Use `proposal` wherever a design decision was made that the specification does not state, so the client can overturn it knowingly.
