import React from 'react';
import {Icon} from '../core/Icon.jsx';

export function Accordion({title,open=false,onToggle,badge,children,style,...rest}){
  return (
    <div style={{border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',overflow:'hidden',background:'var(--surface-card)',...style}} {...rest}>
      <button type="button" onClick={onToggle} aria-expanded={open}
        style={{width:'100%',display:'flex',alignItems:'center',gap:'10px',padding:'12px 14px',minHeight:'var(--hit-min)',border:'none',background:open?'var(--surface-sunken)':'var(--surface-card)',cursor:'pointer',textAlign:'left',transition:'var(--transition-interactive)'}}>
        <span style={{font:'var(--type-label)',color:'var(--text-heading)',flex:1,minWidth:0}}>{title}</span>
        {badge}
        <Icon name={open?'chevron-up':'chevron-down'} size={17} color="var(--sc-teal)"/>
      </button>
      {open&&<div style={{padding:'12px 14px',borderTop:'1px solid var(--border-soft)'}}>{children}</div>}
    </div>
  );
}
