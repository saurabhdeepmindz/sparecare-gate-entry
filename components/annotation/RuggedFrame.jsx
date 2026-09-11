import React from 'react';

/* Rugged handheld terminal, portrait, 412x880 dp — the 6-inch Android class
   (Zebra TC53/TC58, Honeywell CT45, Datalogic Memor 11). Squared bezel, no notch,
   physical scan trigger on the right edge. Content scrolls inside the screen. */
export function RuggedFrame({caption,width=412,height=880,fit=false,scrollHint=true,statusTime='09:42',children,style,...rest}){
  return (
    <div style={{display:'inline-flex',flexDirection:'column',alignItems:'center',gap:'10px',...style}} {...rest}>
      {caption&&
        <div style={{display:'inline-flex',alignItems:'center',gap:'10px',whiteSpace:'nowrap',background:'var(--surface-card)',border:'1px solid var(--border-default)',borderRadius:'var(--r-pill)',padding:'6px 14px'}}>
          <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--fs-micro)',fontWeight:'var(--fw-semibold)',letterSpacing:'0.06em',color:'var(--sc-teal-deep)',textTransform:'uppercase'}}>{caption}</span>
          {scrollHint&&!fit&&<span style={{font:'var(--type-caption)',color:'var(--sc-grey-500)'}}>{'SCROLL INSIDE \u2195'}</span>}
          {!scrollHint&&!fit&&<span style={{font:'var(--type-caption)',color:'var(--sc-grey-500)'}}>{'412 \u00D7 ' + height + ' dp'}</span>}
          {fit&&<span style={{font:'var(--type-caption)',color:'var(--sc-grey-500)'}}>{'FULL SCREEN SHOWN \u2014 device crops at ' + height + 'dp'}</span>}
        </div>}
      <div style={{position:'relative',padding:'22px 18px',background:'#2B2E30',borderRadius:'18px',boxShadow:'var(--shadow-overlay)'}}>
        <div style={{position:'absolute',right:'-3px',top:'168px',width:'4px',height:'86px',borderRadius:'2px',background:'#f5a623'}} title="Scan trigger"/>
        <div style={{position:'absolute',left:'-3px',top:'150px',width:'4px',height:'52px',borderRadius:'2px',background:'#4A4E50'}}/>
        <div style={{position:'absolute',top:'8px',left:'50%',transform:'translateX(-50%)',width:'46px',height:'4px',borderRadius:'2px',background:'#4A4E50'}}/>
        <div style={{width:width+'px',height:fit?'auto':height+'px',minHeight:fit?height+'px':undefined,background:'var(--surface-page)',borderRadius:'4px',overflow:'hidden',display:'flex',flexDirection:'column'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'5px 14px',background:'var(--surface-inverse)',color:'rgba(255,255,255,0.92)',fontFamily:'var(--font-mono)',fontSize:'11px',flex:'0 0 auto'}}>
            <span>{statusTime}</span>
            <span style={{letterSpacing:'0.08em'}}>WMS · INWARD</span>
            <span>{'\u25AE\u25AE\u25AE 86%'}</span>
          </div>
          <div style={{flex:1,minHeight:0,overflowY:fit?'visible':'auto',overflowX:'hidden'}}>{children}</div>
        </div>
        <div style={{position:'absolute',bottom:'7px',left:'50%',transform:'translateX(-50%)',width:'84px',height:'3px',borderRadius:'2px',background:'#4A4E50'}}/>
      </div>
    </div>
  );
}
