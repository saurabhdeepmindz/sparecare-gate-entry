import React from 'react';

/* The WMS runs on rugged handheld terminals. This is the screen surface only —
   no device bezel, matching how the FRD artwork presents each screen. */
export function HandheldFrame({label,width='var(--handheld-width)',height,children,style,...rest}){
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'10px'}}>
      <div style={{width,height,background:'var(--surface-card)',border:'1px solid var(--border-soft)',display:'flex',flexDirection:'column',overflow:'hidden',...style}} {...rest}>
        {children}
      </div>
      {label&&<div style={{font:'var(--type-caption)',fontWeight:'var(--fw-semibold)',color:'var(--sc-grey-600)'}}>{label}</div>}
    </div>
  );
}
