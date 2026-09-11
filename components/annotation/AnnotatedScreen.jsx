import React from 'react';
import {AnnotationMarker} from './AnnotationMarker.jsx';

/* Wraps a screen in a gutter wide enough for a marker to straddle the screen edge.
   Nothing in this component clips, so callout circles are never cut by a boundary. */
export function AnnotatedScreen({screenLabel,screenRef,gutter=22,markers=[],children,style,...rest}){
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'10px',...style}} {...rest}>
      <div style={{position:'relative',padding:gutter,overflow:'visible'}}>
        <div style={{position:'relative',overflow:'visible'}}>{children}</div>
        <div style={{position:'absolute',inset:gutter,overflow:'visible',pointerEvents:'none'}}>
          {markers.map(m=><AnnotationMarker key={m.n} {...m}/>)}
        </div>
      </div>
      {(screenLabel||screenRef)&&
        <div style={{display:'flex',alignItems:'baseline',gap:'8px',justifyContent:'center'}}>
          {screenLabel&&<span style={{font:'var(--type-label)',color:'var(--text-heading)'}}>{screenLabel}</span>}
          {screenRef&&<span style={{fontFamily:'var(--font-mono)',fontSize:'var(--fs-caption-sm)',color:'var(--sc-grey-500)'}}>{screenRef}</span>}
        </div>}
    </div>
  );
}
