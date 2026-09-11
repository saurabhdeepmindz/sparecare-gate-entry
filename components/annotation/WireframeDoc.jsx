import React from 'react';
import {AnnotatedScreen} from './AnnotatedScreen.jsx';
import {AnnotationLegend} from './AnnotationLegend.jsx';
import {MissingSection} from './MissingSection.jsx';

function Chip({children}){
  return <span style={{font:'var(--type-caption)',color:'var(--text-secondary)',border:'1px solid var(--border-default)',borderRadius:'var(--r-pill)',padding:'5px 12px',whiteSpace:'nowrap'}}>{children}</span>;
}

/* One screen as a complete document. In 'wireframe' mode only the screen renders;
   in 'annotated' mode the surrounding specification material and the numbered
   callouts and legend render with it. */
export function WireframeDoc({mode='wireframe',eyebrow,group,screenId,screenName,headline,intro,chips=[],sectionLabel='The wireframe',sectionNote,markers=[],items=[],legendColumns=2,gutter=26,annotationsIntro,missing,footer,onContent=false,children,style,...rest}){
  const annotated=mode==='annotated';
  return (
    <div style={{padding:'var(--sp-4)',background:'var(--anno-canvas)',minHeight:'100%',...style}} {...rest}>
      {annotated&&
        <header style={{marginBottom:'var(--sp-4)'}}>
          {(eyebrow||group)&&<div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'var(--sp-2)'}}>
            <span aria-hidden="true" style={{width:'26px',height:'2px',background:'var(--sc-teal)'}}/>
            <span style={{font:'var(--type-caption)',fontWeight:'var(--fw-semibold)',letterSpacing:'0.08em',textTransform:'uppercase',color:'var(--sc-teal-deep)'}}>{eyebrow}</span>
            {group&&<span style={{font:'var(--type-caption)',color:'var(--sc-grey-600)'}}>{group}</span>}
          </div>}
          <h1 style={{fontFamily:'var(--font-display)',fontWeight:'var(--fw-bold)',fontSize:'40px',lineHeight:1.08,letterSpacing:'var(--ls-display)',color:'var(--text-heading)',maxWidth:'30ch'}}>
            {screenId&&<span style={{fontFamily:'var(--font-mono)',fontSize:'26px',fontWeight:'var(--fw-semibold)',color:'var(--sc-teal)',marginRight:'12px'}}>{screenId}</span>}
            {headline||screenName}
          </h1>
          {intro&&<p style={{font:'var(--type-body)',color:'var(--text-secondary)',maxWidth:'78ch',marginTop:'var(--sp-2)',marginBottom:0}}>{intro}</p>}
          {chips.length>0&&<div style={{display:'flex',flexWrap:'wrap',gap:'8px',marginTop:'var(--sp-3)'}}>{chips.map((c,i)=><Chip key={i}>{c}</Chip>)}</div>}
          <div style={{height:'2px',background:'var(--sc-teal-deep)',marginTop:'var(--sp-3)'}}/>
        </header>}

      {annotated&&
        <div style={{display:'flex',alignItems:'baseline',gap:'12px',marginBottom:'10px'}}>
          <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--fs-caption)',fontWeight:'var(--fw-semibold)',color:'var(--sc-teal-deep)',border:'1px solid var(--border-field)',background:'var(--surface-sunken)',borderRadius:'var(--r-sharp)',padding:'3px 8px'}}>01</span>
          <h2 style={{fontFamily:'var(--font-display)',fontWeight:'var(--fw-bold)',fontSize:'24px',color:'var(--text-heading)'}}>{sectionLabel}</h2>
        </div>}
      {annotated&&sectionNote&&<p style={{font:'var(--type-caption)',color:'var(--text-secondary)',maxWidth:'78ch',margin:'0 0 var(--sp-3)'}}>{sectionNote}</p>}

      {annotated
        ?<AnnotatedScreen gutter={gutter} markers={markers} style={{alignItems:onContent?'center':'stretch'}}>{children}</AnnotatedScreen>
        :<div style={{display:'flex',justifyContent:onContent?'center':'stretch'}}>{children}</div>}

      {annotated&&items.length>0&&
        <div style={{marginTop:'var(--sp-4)'}}>
          <div style={{display:'flex',alignItems:'baseline',gap:'12px',marginBottom:'10px'}}>
            <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--fs-caption)',fontWeight:'var(--fw-semibold)',color:'var(--sc-teal-deep)',border:'1px solid var(--border-field)',background:'var(--surface-sunken)',borderRadius:'var(--r-sharp)',padding:'3px 8px'}}>02</span>
            <h2 style={{fontFamily:'var(--font-display)',fontWeight:'var(--fw-bold)',fontSize:'24px',color:'var(--text-heading)'}}>Annotations</h2>
          </div>
          {annotationsIntro&&<p style={{font:'var(--type-caption)',color:'var(--text-secondary)',maxWidth:'78ch',margin:'0 0 var(--sp-2)',lineHeight:1.55}}>{annotationsIntro}</p>}
          <AnnotationLegend title={null} items={items} columns={legendColumns}/>
        </div>}

      {annotated&&missing&&
        <div style={{marginTop:'var(--sp-4)'}}>
          <div style={{display:'flex',alignItems:'baseline',gap:'12px',marginBottom:'10px'}}>
            <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--fs-caption)',fontWeight:'var(--fw-semibold)',color:'var(--sc-teal-deep)',border:'1px solid var(--border-field)',background:'var(--surface-sunken)',borderRadius:'var(--r-sharp)',padding:'3px 8px'}}>03</span>
            <h2 style={{fontFamily:'var(--font-display)',fontWeight:'var(--fw-bold)',fontSize:'24px',color:'var(--text-heading)'}}>What is deliberately missing</h2>
          </div>
          <MissingSection {...missing}/>
        </div>}

      {annotated&&footer&&
        <footer style={{marginTop:'var(--sp-4)',paddingTop:'var(--sp-2)',borderTop:'1px solid rgba(4,1,1,0.18)',font:'var(--type-caption)',color:'var(--sc-grey-600)',lineHeight:1.55,maxWidth:'90ch'}}>{footer}</footer>}
    </div>
  );
}
