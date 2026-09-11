import React from 'react';

export function GenContextBar({gen,items=[],style,...rest}){
  return (
    <div style={{display:'flex',alignItems:'center',gap:'var(--sp-3)',flexWrap:'wrap',background:'var(--surface-sunken)',border:'1px solid var(--border-field)',borderRadius:'var(--radius-field)',padding:'10px 16px',...style}} {...rest}>
      <div style={{display:'flex',flexDirection:'column',gap:'1px',paddingRight:'var(--sp-3)',borderRight:'1px solid var(--border-field)'}}>
        <span style={{font:'var(--type-caption)',color:'var(--sc-grey-600)'}}>Gate Entry Number</span>
        <span style={{fontFamily:'var(--font-mono)',fontWeight:'var(--fw-semibold)',fontSize:'var(--fs-body-sm)',color:'var(--sc-teal-deep)',letterSpacing:'0.02em'}}>{gen}</span>
      </div>
      {items.map(it=>(
        <div key={it.label} style={{display:'flex',flexDirection:'column',gap:'1px',minWidth:0}}>
          <span style={{font:'var(--type-caption)',color:'var(--sc-grey-600)'}}>{it.label}</span>
          <span style={{font:'var(--type-ui)',color:'var(--text-body)'}}>{it.value}</span>
        </div>
      ))}
    </div>
  );
}
