One-line: renders one Lucide glyph at the brand's 1.75 stroke weight; requires the Lucide CDN script on the page.

```jsx
<Icon name="camera" size={20} color="var(--sc-teal-deep)" />
```

Add `<script src="https://unpkg.com/lucide@0.446.0/dist/umd/lucide.min.js"></script>` to the page. Default size 18. The glyph inherits `currentColor` unless `color` is set. **Substitution flag:** the icon set in the source FRD wireframes is not available as files; Lucide is the nearest match by stroke weight and should be swapped when the originals are supplied.
