import React from 'react';
import {Icon} from '../core/Icon.jsx';

export function ScanField({placeholder='Scan box barcode',value,onChange,onScan,disabled=false,style,...rest}){
  return (
    <div style={{display:'flex',alignItems:'stretch',gap:'8px',...style}} {...rest}>
      <input value={value} onChange={onChange} placeholder={placeholder} disabled={disabled}
        style={{flex:1,minWidth:0,border:'1px solid var(--border-field)',borderRadius:'var(--radius-field)',padding:'12px 14px',minHeight:'var(--hit-min)',fontFamily:'var(--font-mono)',fontSize:'var(--fs-body-sm)',letterSpacing:'var(--ls-mono)',color:'var(--text-body)',background:'var(--surface-card)',outline:'none'}}/>
      <button type="button" onClick={onScan} aria-label="Scan with device reader"
        style={{flex:'0 0 auto',width:'var(--hit-min)',minHeight:'var(--hit-min)',display:'inline-flex',alignItems:'center',justifyContent:'center',border:'1px solid var(--action-accent)',borderRadius:'var(--radius-field)',background:'var(--action-accent)',color:'var(--text-on-dark)',cursor:'pointer'}}>
        <Icon name="scan-line" size={20}/>
      </button>
    </div>
  );
}
