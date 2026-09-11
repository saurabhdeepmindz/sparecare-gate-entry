import React from 'react';

export function ScreenHeader({title,onBack,back=true,right,style,...rest}){
  return (
    <div style={{display:'flex',alignItems:'center',gap:'10px',padding:'14px var(--handheld-safe)',borderBottom:'1px solid var(--border-soft)',background:'var(--surface-card)',flex:'0 0 auto',...style}} {...rest}>
      {back&&<button onClick={onBack} aria-label="Back" style={{border:'none',background:'none',padding:0,cursor:'pointer',color:'var(--text-heading)',fontSize:'20px',lineHeight:1,fontFamily:'var(--font-body)'}}>{'\u2039'}</button>}
      <h2 style={{font:'var(--type-screen-title)',color:'var(--text-heading)',letterSpacing:'var(--ls-display)',flex:1,minWidth:0}}>{title}</h2>
      {right}
    </div>
  );
}
