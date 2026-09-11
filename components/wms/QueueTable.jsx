import React from 'react';

export function QueueTable({caption,columns=[],rows=[],minRows=5,onRowClick,emptyLabel,style,...rest}){
  const pad=Math.max(0,minRows-rows.length);
  return (
    <div style={{marginBottom:'var(--sp-3)',...style}} {...rest}>
      {caption&&<div style={{font:'var(--type-label)',color:'var(--text-body)',marginBottom:'6px'}}>{caption}</div>}
      <table style={{width:'100%',borderCollapse:'collapse',tableLayout:'fixed'}}>
        <thead>
          <tr>{columns.map(c=>(
            <th key={c.key} style={{background:'var(--surface-inverse)',color:'var(--text-on-dark)',font:'var(--type-caption)',fontWeight:'var(--fw-semibold)',textAlign:c.align||'left',padding:'7px 8px',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{c.label}</th>
          ))}</tr>
        </thead>
        <tbody>
          {rows.map((r,i)=>(
            <tr key={r.gen||i} onClick={onRowClick?()=>onRowClick(r):undefined}
              style={{background:i%2?'var(--surface-row-alt)':'var(--surface-card)',cursor:onRowClick?'pointer':'default'}}>
              {columns.map(c=>(
                <td key={c.key} style={{font:c.mono?'var(--type-data)':'var(--type-caption)',color:c.link?'var(--sc-teal-deep)':'var(--text-body)',textDecoration:c.link?'underline':'none',textAlign:c.align||'left',padding:'7px 8px',borderBottom:'1px solid var(--border-soft)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{r[c.key]}</td>
              ))}
            </tr>
          ))}
          {Array.from({length:pad}).map((_,i)=>(
            <tr key={'pad'+i} style={{background:(rows.length+i)%2?'var(--surface-row-alt)':'var(--surface-card)'}}>
              {columns.map(c=><td key={c.key} style={{padding:'7px 8px',borderBottom:'1px solid var(--border-soft)',height:'28px'}}>&nbsp;</td>)}
            </tr>
          ))}
        </tbody>
      </table>
      {rows.length===0&&emptyLabel&&<div style={{font:'var(--type-caption)',color:'var(--sc-grey-500)',marginTop:'6px'}}>{emptyLabel}</div>}
    </div>
  );
}
