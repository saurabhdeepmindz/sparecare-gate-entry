import React from 'react';

export function SearchBar({placeholder='Search part name or number…',value,onChange,glyph='\u2315',maxWidth='420px',style,...rest}){
  return (
    <div style={{display:'flex',alignItems:'center',gap:'10px',border:'var(--border-field-width) solid var(--border-strong)',borderRadius:'var(--radius-button)',padding:'12px 16px',maxWidth,background:'var(--surface-card)',...style}} {...rest}>
      <span style={{color:'var(--sc-grey-500)',fontSize:'var(--fs-label)',lineHeight:1}}>{glyph}</span>
      <input value={value} onChange={onChange} placeholder={placeholder}
        style={{border:'none',outline:'none',fontFamily:'var(--font-body)',fontSize:'var(--fs-body-sm)',flex:1,background:'none',color:'var(--text-body)',minWidth:0}}/>
    </div>
  );
}
