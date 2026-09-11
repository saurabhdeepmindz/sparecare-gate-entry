import React from 'react';

export function WorkflowChecklist({title='Workflow Applicability Confirmation',steps=[],onToggle,style,...rest}){
  return (
    <div style={{border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',overflow:'hidden',...style}} {...rest}>
      <div style={{background:'var(--surface-onyx)',color:'var(--text-on-dark)',font:'var(--type-label)',padding:'10px 14px'}}>{title}</div>
      {steps.map((s,i)=>(
        <label key={s.id||i} style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'var(--sp-2)',padding:'11px 14px',background:i%2?'var(--sc-chrome)':'var(--surface-card)',cursor:s.locked?'not-allowed':'pointer',minHeight:'var(--hit-min)'}}>
          <span style={{font:'var(--type-ui)',color:'var(--text-body)'}}>{i+1}. {s.label}</span>
          <input type="checkbox" checked={!!s.checked} disabled={s.locked} onChange={()=>onToggle&&onToggle(s.id||i)}
            style={{width:'20px',height:'20px',accentColor:'var(--sc-teal)',flex:'0 0 auto',cursor:'inherit'}}/>
        </label>
      ))}
    </div>
  );
}
