import React from 'react';

/* The page shell for a wireframe sheet: title block, a non-clipping screen row,
   and the legend area beneath. */
export function WireframeSheet({title,subtitle,meta=[],children,footer,width='1280px',style,...rest}){
  return (
    <div style={{background:'var(--anno-canvas)',minHeight:'100%',padding:'var(--sp-5) var(--sp-4)',...style}} {...rest}>
      <div style={{width:width,minWidth:width,margin:'0 auto'}}>
        <header style={{display:'flex',flexWrap:'wrap',alignItems:'flex-end',justifyContent:'space-between',gap:'var(--sp-3)',paddingBottom:'var(--sp-2)',borderBottom:'1px solid rgba(4,1,1,0.18)',marginBottom:'var(--sp-4)'}}>
          <div style={{minWidth:0}}>
            <h1 style={{font:'var(--type-section)',color:'var(--text-heading)',letterSpacing:'var(--ls-display)'}}>{title}</h1>
            {subtitle&&<p style={{margin:'6px 0 0',font:'var(--type-caption)',color:'var(--text-secondary)',maxWidth:'70ch'}}>{subtitle}</p>}
          </div>
          {meta.length>0&&<dl style={{display:'flex',gap:'var(--sp-3)',margin:0,flexWrap:'wrap'}}>
            {meta.map(m=>(<div key={m.label}>
              <dt style={{font:'var(--type-caption)',color:'var(--sc-grey-500)'}}>{m.label}</dt>
              <dd style={{margin:'2px 0 0',fontFamily:'var(--font-mono)',fontSize:'var(--fs-caption)',fontWeight:'var(--fw-semibold)',color:'var(--sc-teal-deep)'}}>{m.value}</dd>
            </div>))}
          </dl>}
        </header>
        {children}
        {footer&&<footer style={{marginTop:'var(--sp-4)',paddingTop:'var(--sp-2)',borderTop:'1px solid rgba(4,1,1,0.18)',font:'var(--type-caption)',color:'var(--sc-grey-600)'}}>{footer}</footer>}
      </div>
    </div>
  );
}
