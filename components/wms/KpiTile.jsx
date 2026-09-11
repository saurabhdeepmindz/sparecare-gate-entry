import React from 'react';

export function KpiTile({label,value,unit,active=false,onClick,style,...rest}){
  return (
    <button onClick={onClick} type="button"
      style={{flex:'1 1 0',minWidth:0,textAlign:'center',background:'var(--surface-card)',border:active?'1.5px solid var(--sc-teal)':'1px solid var(--border-soft)',borderRadius:'var(--radius-tile)',padding:'10px 8px',cursor:onClick?'pointer':'default',boxShadow:'var(--shadow-card)',transition:'var(--transition-interactive)',...style}} {...rest}>
      <div style={{font:'var(--type-caption)',fontWeight:'var(--fw-semibold)',color:'var(--text-body)',lineHeight:1.25}}>{label}</div>
      <div style={{display:'flex',alignItems:'baseline',justifyContent:'center',gap:'5px',marginTop:'3px'}}>
        <span style={{fontFamily:'var(--font-display)',fontWeight:'var(--fw-bold)',fontSize:'24px',color:'var(--sc-teal)',lineHeight:1}}>{value}</span>
        {unit&&<span style={{font:'var(--type-caption)',color:'var(--sc-teal)'}}>{unit}</span>}
      </div>
    </button>
  );
}
