import React from 'react';
import {Icon} from '../core/Icon.jsx';

const TONE={ok:'var(--status-ok)',warn:'var(--status-warn)',bad:'var(--status-error)'};

export function ConditionChips({options=[],selected=[],onToggle,columns=2,style,...rest}){
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat('+columns+',minmax(0,1fr))',gap:'8px',...style}} {...rest}>
      {options.map(o=>{
        const on=selected.includes(o.id);
        const c=TONE[o.tone]||'var(--sc-teal)';
        return (
          <button key={o.id} type="button" onClick={()=>onToggle&&onToggle(o.id)} aria-pressed={on}
            style={{display:'flex',alignItems:'center',gap:'9px',textAlign:'left',padding:'10px 11px',minHeight:'var(--hit-min)',cursor:'pointer',borderRadius:'var(--radius-field)',transition:'var(--transition-interactive)',
              border:'1.5px solid '+(on?c:'var(--border-soft)'),
              background:on?'var(--surface-card)':'var(--surface-card)',
              boxShadow:on?'inset 0 0 0 1px '+c:'none',
              font:'var(--type-ui)',color:on?'var(--text-body)':'var(--sc-grey-600)',fontWeight:on?'var(--fw-semibold)':'var(--fw-medium)'}}>
            <Icon name={o.icon||'circle'} size={17} color={c}/>
            <span style={{minWidth:0}}>{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}
