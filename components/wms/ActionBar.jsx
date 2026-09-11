import React from 'react';

export function ActionBar({children,style,...rest}){
  return (
    <div style={{display:'flex',gap:'var(--sp-2)',padding:'var(--sp-2)',borderTop:'1px solid var(--border-soft)',background:'var(--surface-card)',flex:'0 0 auto',...style}} {...rest}>
      {children}
    </div>
  );
}
