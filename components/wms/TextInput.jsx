import React from 'react';

const shell={width:'100%',border:'1px solid var(--border-field)',borderRadius:'var(--radius-field)',padding:'12px 14px',minHeight:'var(--hit-min)',fontFamily:'var(--font-body)',fontSize:'var(--fs-body-sm)',color:'var(--text-body)',background:'var(--surface-card)',outline:'none',transition:'var(--transition-interactive)'};

export function TextInput({readOnly=false,mono=false,style,...rest}){
  return <input readOnly={readOnly}
    style={{...shell,fontFamily:mono?'var(--font-mono)':'var(--font-body)',background:readOnly?'var(--surface-sunken)':'var(--surface-card)',color:readOnly?'var(--text-data)':'var(--text-body)',...style}} {...rest}/>;
}
