import React from 'react';

export function AnnotationLegend({title='Annotations',items=[],columns=1,style,...rest}){
  return (
    <div style={{background:'var(--anno-legend-bg)',border:'1px solid var(--border-default)',borderRadius:'var(--radius-card)',padding:'var(--pad-card-tight)',...style}} {...rest}>
      {title&&<div style={{font:'var(--type-label)',color:'var(--text-heading)',marginBottom:'var(--sp-2)',paddingBottom:'10px',borderBottom:'1px solid var(--border-soft)'}}>{title}</div>}
      <ol style={{margin:0,padding:0,listStyle:'none',display:'grid',gridTemplateColumns:'repeat('+columns+',minmax(0,1fr))',gap:'12px var(--sp-3)'}}>
        {items.map(it=>(
          <li key={it.n} style={{display:'grid',gridTemplateColumns:'22px 1fr',gap:'10px',alignItems:'start'}}>
            <span style={{width:'22px',height:'22px',borderRadius:'var(--r-round)',background:it.tone==='open'?'var(--status-warn)':'var(--anno-marker-bg)',color:'var(--anno-marker-fg)',display:'inline-flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontWeight:'var(--fw-bold)',fontSize:'12px',lineHeight:1,marginTop:'1px'}}>{it.n}</span>
            <div style={{minWidth:0}}>
              <div style={{display:'flex',flexWrap:'wrap',alignItems:'baseline',gap:'8px'}}>
                <span style={{font:'var(--type-label)',color:'var(--text-body)'}}>{it.label}</span>
                {it.ref&&<span style={{fontFamily:'var(--font-mono)',fontSize:'var(--fs-micro)',fontWeight:'var(--fw-semibold)',color:'var(--sc-teal-deep)',background:'var(--surface-sunken)',padding:'2px 6px',borderRadius:'var(--r-sharp)',whiteSpace:'nowrap'}}>{it.ref}</span>}
                {it.control&&<span style={{font:'var(--type-caption)',color:'var(--sc-grey-500)'}}>{it.control}</span>}
              </div>
              <p style={{margin:'3px 0 0',font:'var(--type-caption)',color:'var(--text-secondary)',lineHeight:1.5}}>{it.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
