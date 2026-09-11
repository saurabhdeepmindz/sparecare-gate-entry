import React from 'react';
import {Icon} from '../core/Icon.jsx';

const announce=()=>window.dispatchEvent(new CustomEvent('sc:not-drawn',{detail:{
  title:'Document capture',
  body:'The camera interface is specified to exist but is not drawn. FR-001.5 requires document capture via camera or upload at gate entry, and FR-004 carries GRN and invoice photo uploads at Receipt Details \u2014 neither describes the capture screen, how many images may be attached, or what happens when a capture fails.',
  ref:'FR-001.5'
}}));

export function CameraButton({onClick,label='Capture document photo',size=44,style,...rest}){
  return (
    <button onClick={onClick||announce} aria-label={label}
      style={{width:size,height:size,flex:'0 0 auto',display:'inline-flex',alignItems:'center',justifyContent:'center',border:'none',background:'none',cursor:'pointer',color:'var(--sc-onyx)',padding:0,...style}} {...rest}>
      <Icon name="camera" size={26} strokeWidth={1.75}/>
    </button>
  );
}
