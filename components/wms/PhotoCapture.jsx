import React from 'react';
import {Icon} from '../core/Icon.jsx';

export function PhotoCapture({label='Take Photo',required=false,captured=false,onCapture,style,...rest}){
  return (
    <div style={style} {...rest}>
      <div style={{display:'flex',alignItems:'baseline',gap:'7px',marginBottom:'7px'}}>
        <span style={{font:'var(--type-label)',color:'var(--text-body)'}}>{label}</span>
        {required&&<span style={{font:'var(--type-caption)',color:'var(--status-error)',fontWeight:'var(--fw-semibold)'}}>(Mandatory)</span>}
      </div>
      <div style={{display:'flex',gap:'10px'}}>
        <div style={{position:'relative',flex:'1 1 0',minWidth:0,height:'78px',borderRadius:'var(--radius-field)',background:captured?'var(--sc-graphite)':'var(--surface-sunken)',border:'1px solid var(--border-field)',display:'flex',alignItems:'center',justifyContent:'center'}}>
          {captured
            ?<span style={{position:'absolute',bottom:'6px',right:'6px',width:'20px',height:'20px',borderRadius:'var(--r-round)',background:'var(--status-ok)',color:'#fff',display:'inline-flex',alignItems:'center',justifyContent:'center'}}><Icon name="check" size={12}/></span>
            :<span style={{font:'var(--type-caption)',color:'var(--sc-grey-500)'}}>No photo yet</span>}
        </div>
        <button type="button" onClick={onCapture}
          style={{flex:'1 1 0',minWidth:0,height:'78px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'5px',borderRadius:'var(--radius-field)',border:'1px dashed var(--border-field)',background:'var(--surface-card)',cursor:'pointer',color:'var(--sc-teal-deep)'}}>
          <Icon name="camera" size={20}/>
          <span style={{font:'var(--type-caption)'}}>{captured?'Retake / Change':'Capture'}</span>
        </button>
      </div>
    </div>
  );
}
