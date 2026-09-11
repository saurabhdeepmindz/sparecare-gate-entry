import React from 'react';

const base={fontFamily:'var(--font-body)',fontWeight:'var(--fw-semibold)',borderRadius:'var(--radius-button)',border:'1.5px solid transparent',cursor:'pointer',display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'8px',textDecoration:'none',transition:'var(--transition-interactive)',whiteSpace:'nowrap'};

const sizes={
  lg:{fontSize:'var(--fs-body-sm)',padding:'14px 26px',minHeight:'var(--hit-min)'},
  md:{fontSize:'var(--fs-label)',padding:'11px 20px',minHeight:'40px'},
  sm:{fontSize:'var(--fs-caption)',padding:'8px 14px',minHeight:'32px'}
};

const variants={
  primary:{background:'var(--action-primary)',color:'var(--text-on-dark)'},
  accent:{background:'var(--action-accent)',color:'var(--text-on-dark)'},
  secondary:{background:'transparent',borderColor:'var(--action-secondary-border)',color:'var(--sc-graphite)'},
  ghost:{background:'transparent',color:'var(--sc-teal-deep)',border:'none',paddingLeft:0,paddingRight:0},
  onyx:{background:'var(--surface-onyx)',color:'var(--text-on-dark)'},
  quiet:{background:'var(--sc-chrome)',color:'var(--sc-grey-600)',borderColor:'var(--sc-chrome)'}
};

export function Button({variant='primary',size='lg',disabled=false,block=false,as,href,iconLeft,iconRight,children,style,...rest}){
  const Tag=as||(href?'a':'button');
  const look=disabled?{background:'var(--action-disabled-bg)',color:'var(--action-disabled-fg)',borderColor:'transparent',cursor:'not-allowed'}:variants[variant]||variants.primary;
  return (
    <Tag href={href} disabled={Tag==='button'?disabled:undefined} aria-disabled={disabled||undefined}
      style={{...base,...sizes[size],...look,width:block?'100%':undefined,...style}} {...rest}>
      {iconLeft}{children}{iconRight}
    </Tag>
  );
}
