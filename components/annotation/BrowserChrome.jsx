import React from 'react';

/* Minimal light browser chrome for presenting a web wireframe. Deliberately quiet —
   it frames the screen without competing with it. */
export function BrowserChrome({url,accent='var(--sc-teal-deep)',children,style,...rest}){
  return (
    <div style={{background:'var(--surface-card)',border:'1px solid var(--border-default)',borderRadius:'var(--radius-field)',overflow:'hidden',...style}} {...rest}>
      <div style={{display:'flex',alignItems:'center',gap:'12px',padding:'9px 14px',background:'var(--sc-chrome)',borderBottom:'1px solid var(--border-soft)'}}>
        <div style={{display:'flex',gap:'6px',flex:'0 0 auto'}}>
          {['#C1503F','#E2963C','#4C9A6A'].map(c=><span key={c} style={{width:'9px',height:'9px',borderRadius:'var(--r-round)',background:c,opacity:0.75}}/>)}
        </div>
        <div style={{flex:1,minWidth:0,background:'var(--surface-card)',border:'1px solid var(--border-soft)',borderRadius:'var(--r-pill)',padding:'5px 12px',fontFamily:'var(--font-mono)',fontSize:'var(--fs-caption-sm)',color:'var(--sc-grey-600)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{url}</div>
      </div>
      <div style={{height:'3px',background:accent}}/>
      <div>{children}</div>
    </div>
  );
}
