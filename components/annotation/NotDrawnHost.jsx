import React from 'react';

/* Mount once per page. Any control whose destination the FRD names but does not describe
   dispatches 'sc:not-drawn' and this states the gap, with its requirement reference,
   instead of doing nothing. Silence reads as a broken prototype; this reads as a question. */
export function NotDrawnHost(){
  const [d,setD]=React.useState(null);
  React.useEffect(()=>{
    const h=e=>setD(e.detail||{});
    window.addEventListener('sc:not-drawn',h);
    return ()=>window.removeEventListener('sc:not-drawn',h);
  },[]);
  if(!d) return null;
  const close=()=>setD(null);
  return (
    <div onClick={close} role="dialog" aria-modal="true"
      style={{position:'fixed',inset:0,zIndex:90,background:'rgba(4,1,1,0.45)',display:'flex',alignItems:'center',justifyContent:'center',padding:'24px'}}>
      <div onClick={e=>e.stopPropagation()}
        style={{background:'var(--surface-card)',border:'1px solid var(--border-default)',borderRadius:'var(--radius-card)',boxShadow:'var(--shadow-overlay)',maxWidth:'520px',width:'100%',padding:'var(--pad-card)'}}>
        <div style={{fontFamily:'var(--font-mono)',fontSize:'var(--fs-micro)',fontWeight:'var(--fw-semibold)',letterSpacing:'0.07em',color:'var(--status-warn-fg)',marginBottom:'8px'}}>NOT DRAWN</div>
        <h2 style={{fontFamily:'var(--font-display)',fontWeight:'var(--fw-bold)',fontSize:'23px',color:'var(--text-heading)',marginBottom:'8px'}}>{d.title}</h2>
        <p style={{margin:0,font:'var(--type-caption)',color:'var(--text-secondary)',lineHeight:1.6}}>{d.body}</p>
        {d.ref&&<div style={{marginTop:'12px',display:'inline-block',fontFamily:'var(--font-mono)',fontSize:'var(--fs-micro)',fontWeight:'var(--fw-semibold)',color:'var(--sc-teal-deep)',background:'var(--surface-sunken)',border:'1px solid var(--border-field)',borderRadius:'var(--r-sharp)',padding:'3px 8px'}}>{d.ref}</div>}
        <div style={{display:'flex',justifyContent:'flex-end',marginTop:'var(--sp-3)',paddingTop:'var(--sp-2)',borderTop:'1px solid var(--border-soft)'}}>
          <button type="button" onClick={close}
            style={{fontFamily:'var(--font-body)',fontWeight:'var(--fw-semibold)',fontSize:'var(--fs-label)',padding:'10px 20px',borderRadius:'var(--r-sharp)',border:'none',background:'var(--action-primary)',color:'#fff',cursor:'pointer'}}>Close</button>
        </div>
      </div>
    </div>
  );
}
