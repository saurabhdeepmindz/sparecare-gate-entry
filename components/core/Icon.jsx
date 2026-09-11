import React from 'react';

/* Lucide is loaded from CDN and asked to replace the placeholder element in place,
   which keeps stroke colour bound to currentColor. See ICONOGRAPHY in readme.md —
   this is a flagged substitution for the icon set baked into the FRD artwork. */
export function Icon({name,size=18,strokeWidth=1.75,color='currentColor',style,...rest}){
  const host=React.useRef(null);
  React.useEffect(()=>{
    const el=host.current; if(!el) return;
    const draw=()=>{ if(window.lucide&&el){ el.innerHTML=''; const i=document.createElement('i');
      i.setAttribute('data-lucide',name); el.appendChild(i);
      window.lucide.createIcons({attrs:{width:size,height:size,'stroke-width':strokeWidth},nameAttr:'data-lucide',root:el}); } };
    if(window.lucide) draw();
    else { const id=setInterval(()=>{ if(window.lucide){ clearInterval(id); draw(); } },60); return ()=>clearInterval(id); }
  },[name,size,strokeWidth]);
  return <span ref={host} aria-hidden="true" style={{display:'inline-flex',width:size,height:size,color,flex:'0 0 auto',...style}} {...rest}/>;
}
