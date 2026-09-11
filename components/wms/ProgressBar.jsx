import React from 'react';

export function ProgressBar({label,value=0,total=0,style,...rest}){
  const pct=total?Math.round((value/total)*100):0;
  return (
    <div style={style} {...rest}>
      <div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between',gap:'10px',marginBottom:'6px'}}>
        {label&&<span style={{font:'var(--type-label)',color:'var(--text-body)'}}>{label}</span>}
        <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--fs-caption)',fontWeight:'var(--fw-semibold)',color:'var(--sc-teal-deep)'}}>{value} / {total} · {pct}%</span>
      </div>
      <div style={{height:'8px',borderRadius:'4px',background:'var(--sc-chrome)',overflow:'hidden'}}>
        <div style={{width:pct+'%',height:'100%',background:'var(--action-accent)',transition:'width var(--dur-base) var(--ease-standard)'}}/>
      </div>
    </div>
  );
}
