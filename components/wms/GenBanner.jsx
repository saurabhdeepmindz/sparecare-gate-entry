import React from 'react';

export function GenBanner({gen,label='Gate Entry Number',message='Created Successfully !',footnote,style,...rest}){
  return (
    <div style={{background:'var(--status-success-banner)',color:'var(--text-on-dark)',padding:'14px var(--sp-2)',textAlign:'center',borderRadius:'var(--radius-field)',...style}} {...rest}>
      <div style={{font:'var(--type-label)',opacity:0.92}}>{label}</div>
      <div style={{fontFamily:'var(--font-mono)',fontWeight:'var(--fw-semibold)',fontSize:'28px',letterSpacing:'0.06em',margin:'2px 0 4px'}}>{gen}</div>
      <div style={{font:'var(--type-caption)',fontWeight:'var(--fw-semibold)'}}>{message}</div>
      {footnote&&<div style={{font:'var(--type-caption)',opacity:0.9,marginTop:'4px'}}>{footnote}</div>}
    </div>
  );
}
