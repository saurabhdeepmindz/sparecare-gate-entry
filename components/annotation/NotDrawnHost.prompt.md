One-line: turns a dead control into an honest statement of what the specification does not cover.

```jsx
// once per page
<NotDrawnHost />

// on any control whose destination is unspecified
onClick={()=>window.dispatchEvent(new CustomEvent('sc:not-drawn',{detail:{
  title:'Document capture',
  body:'FR-001.5 requires a camera capture interface at gate entry but does not describe the capture screen itself.',
  ref:'FR-001.5'
}}))}
```

Use this rather than leaving a control inert. A customer clicking a dead button concludes the prototype is broken; the same click against this concludes there is a decision still to make.
