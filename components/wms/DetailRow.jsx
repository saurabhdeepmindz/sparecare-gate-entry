import React from 'react';
import {Icon} from '../core/Icon.jsx';

export function DetailRow({icon,label,value,mono=false,last=false,style,...rest}){
  return (
    <div style={{display:'flex',alignItems:'center',gap:'10px',padding:'9px 0',borderBottom:last?'none':'1px solid var(--border-soft)',...style}} {...rest}>
      {icon&&<Icon name={icon} size={16} color="var(--sc-teal)"/>}
      <span style={{font:'var(--type-caption)',color:'var(--sc-grey-600)',flex:1,minWidth:0}}>{label}</span>
      <span style={{fontFamily:mono?'var(--font-mono)':'var(--font-body)',fontSize:'var(--fs-caption)',fontWeight:'var(--fw-semibold)',color:mono?'var(--text-data)':'var(--text-body)',textAlign:'right'}}>{value}</span>
    </div>
  );
}
