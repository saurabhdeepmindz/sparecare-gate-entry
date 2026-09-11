import React from 'react';

export function Stepper({steps=[],current=0,onStepClick,style,...rest}){
  return (
    <ol style={{display:'flex',alignItems:'flex-start',listStyle:'none',margin:0,padding:0,...style}} {...rest}>
      {steps.map((s,i)=>{
        const label=typeof s==='string'?s:s.label;
        const done=i<current, active=i===current;
        const reachable=!!onStepClick&&i<=current;
        return (
          <li key={label} style={{display:'flex',alignItems:'flex-start',flex:i===steps.length-1?'0 0 auto':'1 1 0',minWidth:0}}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'7px',flex:'0 0 auto'}}>
              <button type="button" onClick={reachable?()=>onStepClick(i):undefined} aria-current={active?'step':undefined}
                style={{width:'28px',height:'28px',borderRadius:'var(--r-round)',flex:'0 0 auto',cursor:reachable?'pointer':'default',
                  fontFamily:'var(--font-display)',fontWeight:'var(--fw-bold)',fontSize:'14px',lineHeight:1,
                  border:active||done?'none':'1.5px solid var(--border-strong)',
                  background:done?'var(--sc-teal)':active?'var(--action-primary)':'var(--surface-card)',
                  color:done||active?'var(--text-on-dark)':'var(--sc-grey-500)',
                  transition:'var(--transition-interactive)'}}>{i+1}</button>
              <span style={{font:'var(--type-caption)',fontWeight:active?'var(--fw-semibold)':'var(--fw-regular)',
                color:active?'var(--text-heading)':done?'var(--sc-teal-deep)':'var(--sc-grey-500)',textAlign:'center',maxWidth:'150px'}}>{label}</span>
            </div>
            {i<steps.length-1&&<span aria-hidden="true" style={{flex:'1 1 auto',height:'1.5px',background:done?'var(--sc-teal)':'var(--border-default)',margin:'13px 12px 0',minWidth:'24px'}}/>}
          </li>
        );
      })}
    </ol>
  );
}
