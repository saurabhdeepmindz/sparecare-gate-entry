import React from 'react';

export function MissingSection({intro,statesNotDrawn=[],detailNotSpecified=[],mostImportant,style,...rest}){
  const col=(title,items)=>(
    <div style={{background:'var(--surface-card)',border:'1px solid var(--border-default)',padding:'var(--pad-card-tight)'}}>
      <div style={{fontFamily:'var(--font-mono)',fontSize:'var(--fs-micro)',fontWeight:'var(--fw-semibold)',letterSpacing:'0.07em',color:'var(--sc-grey-500)',marginBottom:'10px'}}>{title}</div>
      <ul style={{margin:0,paddingLeft:'16px'}}>
        {items.map((it,i)=><li key={i} style={{font:'var(--type-caption)',color:'var(--text-secondary)',lineHeight:1.55,marginBottom:'7px'}}>{it}</li>)}
      </ul>
    </div>
  );
  return (
    <div style={style} {...rest}>
      {intro&&<p style={{font:'var(--type-caption)',color:'var(--text-secondary)',maxWidth:'78ch',margin:'0 0 var(--sp-2)',lineHeight:1.55}}>{intro}</p>}
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'var(--sp-2)'}}>
        {statesNotDrawn.length>0&&col('STATES NOT DRAWN HERE',statesNotDrawn)}
        {detailNotSpecified.length>0&&col('DETAIL NOT SPECIFIED HERE',detailNotSpecified)}
      </div>
      {mostImportant&&
        <div style={{background:'var(--status-warn-bg)',border:'1px solid rgba(226,150,60,0.45)',padding:'var(--pad-card-tight)',marginTop:'var(--sp-2)'}}>
          <div style={{fontFamily:'var(--font-mono)',fontSize:'var(--fs-micro)',fontWeight:'var(--fw-semibold)',letterSpacing:'0.07em',color:'var(--status-warn-fg)',marginBottom:'7px'}}>THE MOST IMPORTANT OMISSION</div>
          <p style={{margin:0,font:'var(--type-caption)',color:'var(--status-warn-fg)',lineHeight:1.6}}>{mostImportant}</p>
        </div>}
    </div>
  );
}
