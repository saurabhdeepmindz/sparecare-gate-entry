import React from 'react';

/* A numbered callout. Rendered inside AnnotatedScreen's padded gutter, which has no
   clipping ancestor, so a marker sitting on the screen edge is never cut off. */
export function AnnotationMarker({n,x,y,size=26,tone='primary',title,style,...rest}){
  const fill=tone==='open'?'var(--status-warn)':'var(--anno-marker-bg)';
  return (
    <span title={title} style={{position:'absolute',left:typeof x==='number'?x+'%':x,top:typeof y==='number'?y+'%':y,transform:'translate(-50%,-50%)',width:size,height:size,borderRadius:'var(--r-round)',background:fill,color:'var(--anno-marker-fg)',border:'2.5px solid var(--anno-marker-ring)',boxShadow:'var(--shadow-raised)',display:'inline-flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontWeight:'var(--fw-bold)',fontSize:size*0.54+'px',lineHeight:1,zIndex:5,pointerEvents:'auto',...style}} {...rest}>{n}</span>
  );
}
