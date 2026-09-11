import React from 'react';
import {Tag} from './Tag.jsx';

export function StoreCard({name,location,matchLabel,tone='ok',style,...rest}){
  return (
    <div style={{border:'1px solid var(--border-default)',borderRadius:'var(--radius-card)',padding:'var(--pad-card-tight)',background:'var(--surface-card)',display:'flex',justifyContent:'space-between',alignItems:'center',gap:'var(--sp-2)',...style}} {...rest}>
      <div style={{minWidth:0}}>
        <b style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-ui)',fontWeight:'var(--fw-semibold)',display:'block',color:'var(--text-body)'}}>{name}</b>
        {location&&<div style={{fontSize:'var(--fs-caption-sm)',color:'var(--sc-grey-500)'}}>{location}</div>}
      </div>
      {matchLabel&&<Tag tone={tone}>{matchLabel}</Tag>}
    </div>
  );
}
