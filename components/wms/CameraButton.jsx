import React from 'react';
import {Icon} from '../core/Icon.jsx';

export function CameraButton({onClick,label='Capture document photo',size=44,style,...rest}){
  return (
    <button onClick={onClick} aria-label={label}
      style={{width:size,height:size,flex:'0 0 auto',display:'inline-flex',alignItems:'center',justifyContent:'center',border:'none',background:'none',cursor:'pointer',color:'var(--sc-onyx)',padding:0,...style}} {...rest}>
      <Icon name="camera" size={26} strokeWidth={1.75}/>
    </button>
  );
}
