import React from 'react';

export function Field({label,required=false,hint,children,adjacent,style,...rest}){
  return (
    <div style={{marginBottom:'var(--gap-field)',...style}} {...rest}>
      {label&&<label style={{display:'block',font:'var(--type-label)',color:'var(--text-body)',marginBottom:'6px'}}>
        {label}{required&&<span style={{color:'var(--status-error)'}}>*</span>}
      </label>}
      {adjacent
        ?<div style={{display:'flex',alignItems:'center',gap:'10px'}}><div style={{flex:1,minWidth:0}}>{children}</div>{adjacent}</div>
        :children}
      {hint&&<div style={{font:'var(--type-caption)',color:'var(--sc-grey-500)',marginTop:'5px'}}>{hint}</div>}
    </div>
  );
}
