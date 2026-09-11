import React from 'react';

const kinds={
  query:{label:'OPEN QUERY',bg:'var(--status-warn-bg)',fg:'var(--status-warn-fg)',border:'rgba(226,150,60,0.45)'},
  proposal:{label:'OUR PROPOSAL \u2014 NOT STATED',bg:'var(--surface-sunken)',fg:'var(--sc-teal-deep)',border:'var(--border-field)'}
};

export function CalloutBox({kind='query',label,ref_,blocking=false,children,style,...rest}){
  const k=kinds[kind]||kinds.query;
  return (
    <div style={{background:k.bg,border:'1px solid '+k.border,borderRadius:'var(--r-sharp)',padding:'9px 11px',marginTop:'8px',...style}} {...rest}>
      <p style={{margin:0,font:'var(--type-caption)',color:k.fg,lineHeight:1.5}}>
        <b style={{fontFamily:'var(--font-mono)',fontSize:'var(--fs-micro)',fontWeight:'var(--fw-semibold)',letterSpacing:'0.05em',marginRight:'7px'}}>{label||k.label}</b>
        {children}
      </p>
      {ref_&&<div style={{marginTop:'5px',fontFamily:'var(--font-mono)',fontSize:'var(--fs-micro)',fontWeight:'var(--fw-semibold)',color:k.fg}}>
        {ref_}{blocking&&<span style={{color:'var(--status-error)'}}> · blocking</span>}
      </div>}
    </div>
  );
}
