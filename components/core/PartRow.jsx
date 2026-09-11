import React from 'react';
import {Tag} from './Tag.jsx';

export function PartRow({name,fitment,partNumber,availability,tone='ok',statusLabel='In stock',last=false,style,...rest}){
  return (
    <div style={{display:'grid',gridTemplateColumns:'1fr auto auto auto',gap:'var(--sp-3)',alignItems:'center',padding:'14px 0',borderBottom:last?'none':'1px solid var(--border-default)',...style}} {...rest}>
      <div style={{minWidth:0}}>
        <div style={{fontFamily:'var(--font-body)',fontWeight:'var(--fw-semibold)',fontSize:'var(--fs-body-sm)',color:'var(--text-body)'}}>{name}</div>
        {fitment&&<div style={{fontSize:'var(--fs-caption-sm)',color:'var(--sc-grey-500)',marginTop:'2px'}}>{fitment}</div>}
      </div>
      <div style={{fontFamily:'var(--font-mono)',fontSize:'var(--fs-caption)',letterSpacing:'var(--ls-mono)',color:'var(--text-data)'}}>{partNumber}</div>
      <div style={{fontSize:'var(--fs-caption)',color:'var(--sc-grey-600)'}}>{availability}</div>
      <Tag tone={tone}>{statusLabel}</Tag>
    </div>
  );
}
