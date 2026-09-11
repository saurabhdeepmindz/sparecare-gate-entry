One-line: the part-lookup input; the brand's only search affordance.

```jsx
<SearchBar placeholder="Search part name or number…" />
```

The glyph sits outside the input, not inside a button. Keep the 1.5px grey outline — this field is deliberately quieter than a teal-bordered WMS form field, because search is not part of a mandatory flow. Pass `glyph={<Icon name="search" size={16}/>}` when a Lucide icon is preferred over the unicode ⌕.
