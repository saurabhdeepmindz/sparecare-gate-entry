import React from 'react';

export function SelectInput({placeholder='Select',options=[],value,onChange,disabled=false,style,...rest}){
  const empty=value===undefined||value===''||value===null;
  return (
    <div style={{position:'relative',width:'100%'}}>
      <select value={value??''} onChange={onChange} disabled={disabled}
        style={{width:'100%',appearance:'none',WebkitAppearance:'none',border:'1px solid var(--border-field)',borderRadius:'var(--radius-field)',padding:'12px 40px 12px 14px',minHeight:'var(--hit-min)',fontFamily:'var(--font-body)',fontSize:'var(--fs-body-sm)',color:empty?'var(--sc-teal)':'var(--text-body)',background:disabled?'var(--surface-disabled)':'var(--surface-card)',outline:'none',cursor:disabled?'not-allowed':'pointer',...style}} {...rest}>
        <option value="">{placeholder}</option>
        {options.map(o=>{const v=typeof o==='string'?o:o.value;const l=typeof o==='string'?o:o.label;return <option key={v} value={v}>{l}</option>;})}
      </select>
      <span aria-hidden="true" style={{position:'absolute',right:'14px',top:'50%',transform:'translateY(-50%)',pointerEvents:'none',color:'var(--sc-teal)',fontSize:'12px',lineHeight:1}}>{'\u25BE'}</span>
    </div>
  );
}
