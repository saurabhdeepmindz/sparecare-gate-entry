import React from 'react';

const tones={
  ok:{background:'var(--status-ok-bg)',color:'var(--status-ok)',dot:'var(--status-ok)'},
  low:{background:'var(--status-warn-bg)',color:'var(--status-warn-fg)',dot:'var(--status-warn)'},
  out:{background:'var(--status-error-bg)',color:'var(--status-error)',dot:'var(--status-error)'},
  neutral:{background:'var(--sc-paper-dim)',color:'var(--sc-grey-600)',dot:'var(--sc-graphite)'},
  info:{background:'var(--sc-teal-tint)',color:'var(--sc-teal-deep)',dot:'var(--sc-teal)'}
};

export function Tag({tone='ok',dot=true,children,style,...rest}){
  const t=tones[tone]||tones.ok;
  return (
    <span style={{display:'inline-flex',alignItems:'center',gap:'7px',fontFamily:'var(--font-body)',fontSize:'var(--fs-caption)',fontWeight:'var(--fw-semibold)',padding:dot?'6px 12px 6px 10px':'6px 12px',borderRadius:'var(--radius-tag)',background:t.background,color:t.color,...style}} {...rest}>
      {dot&&<span style={{width:'7px',height:'7px',borderRadius:'var(--r-round)',background:t.dot,flex:'0 0 auto'}}/>}
      {children}
    </span>
  );
}
