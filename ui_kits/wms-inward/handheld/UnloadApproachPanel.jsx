/* Configured Unload Approach panel, shared by Screens 6f and 6g.
   FR-007.7 — read-only at the point of unloading, tagged Set by Admin.
   FR-007.12 / .14 — three separately configurable options exist; the two not in force are
   named in a read-only footnote so the operator can see which regime applies and why. */
const {Tag,Icon}=window.SpareCareDesignSystem_556483;

const SC_APPROACHES=[
  {id:'sticker', label:'Print Box Stickers & Scan', icon:'tag', helper:'Use printed stickers to unload and track boxes.', ref:'FR-008.1'},
  {id:'counter', label:'Tap Counter Per Box', icon:'calculator', helper:'Press + after each box is unloaded.', ref:'FR-007.8'},
  {id:'total', label:'Plain Total Count Entry', icon:'hash', helper:'Record a single total with no per-box tracking.', ref:'FR-007.13'}
];

function UnloadApproachPanel({active='counter',children}){
  const current=SC_APPROACHES.find(a=>a.id===active)||SC_APPROACHES[1];
  const others=SC_APPROACHES.filter(a=>a.id!==current.id).map(a=>a.label).join(' \u00b7 ');
  return (
    <div style={{background:'var(--surface-card)',border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',padding:'12px',marginBottom:'12px'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'10px',marginBottom:'9px'}}>
        <span style={{font:'var(--type-label)',color:'var(--text-heading)'}}>Configured Unload Approach</span>
        <Tag tone="neutral" dot={false}>Set by Admin</Tag>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:children?'10px':'0'}}>
        <Icon name={current.icon} size={20} color="var(--sc-teal-deep)"/>
        <div style={{minWidth:0}}>
          <div style={{font:'var(--type-label)',color:'var(--text-body)'}}>{current.label}</div>
          <div style={{font:'var(--type-caption)',color:'var(--sc-grey-500)'}}>{current.helper}</div>
        </div>
      </div>
      {children}
      <p style={{margin:'10px 0 0',font:'var(--type-caption)',color:'var(--sc-grey-500)',lineHeight:1.45}}>Other configurations available to the admin: {others}. Not changeable at the point of unloading.</p>
    </div>
  );
}
Object.assign(window,{UnloadApproachPanel,SC_APPROACHES});
