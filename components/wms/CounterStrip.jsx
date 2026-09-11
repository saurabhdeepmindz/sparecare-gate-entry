import React from 'react';

export function CounterStrip({items=[],style,...rest}){
  const TONE={ok:'var(--status-ok)',warn:'var(--status-warn)',bad:'var(--status-error)',neutral:'var(--sc-teal-deep)'};
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat('+items.length+',minmax(0,1fr))',border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',overflow:'hidden',background:'var(--surface-card)',...style}} {...rest}>
      {items.map((it,i)=>(
        <div key={it.label} style={{textAlign:'center',padding:'9px 6px',borderLeft:i?'1px solid var(--border-soft)':'none'}}>
          <div style={{font:'var(--type-caption)',color:'var(--sc-grey-600)'}}>{it.label}</div>
          <div style={{fontFamily:'var(--font-display)',fontWeight:'var(--fw-bold)',fontSize:'22px',lineHeight:1.15,color:TONE[it.tone]||TONE.neutral}}>{it.value}</div>
        </div>
      ))}
    </div>
  );
}
