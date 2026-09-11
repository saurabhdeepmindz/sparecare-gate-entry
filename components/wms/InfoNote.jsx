import React from 'react';
import {Icon} from '../core/Icon.jsx';

const tones={
  info:{bg:'var(--surface-sunken)',fg:'var(--sc-teal-deep)',icon:'info'},
  warn:{bg:'var(--status-warn-bg)',fg:'var(--status-warn-fg)',icon:'alert-triangle'},
  error:{bg:'var(--status-error-bg)',fg:'var(--status-error)',icon:'circle-alert'}
};

export function InfoNote({tone='info',icon,children,style,...rest}){
  const t=tones[tone]||tones.info;
  return (
    <div style={{display:'flex',gap:'10px',alignItems:'flex-start',background:t.bg,color:t.fg,borderRadius:'var(--radius-field)',padding:'10px 12px',font:'var(--type-caption)',...style}} {...rest}>
      <Icon name={icon||t.icon} size={16} strokeWidth={1.75} style={{marginTop:'1px'}}/>
      <div style={{flex:1,minWidth:0,lineHeight:1.45}}>{children}</div>
    </div>
  );
}
