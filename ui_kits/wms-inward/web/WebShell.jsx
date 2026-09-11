const {Icon}=window.SpareCareDesignSystem_556483;

const NAV=[
  ['layout-dashboard','Inward Dashboard'],
  ['log-in','Gate Entry'],
  ['truck','Truck Unload'],
  ['package-search','Consignment Check'],
  ['grid-3x3','Binning'],
  ['file-check','Receipt Confirmation']
];

function WebShell({active=0,title,subtitle,actions,children,width=1240,height=820}){
  return (
    <div style={{width:width+'px',height:height+'px',display:'grid',gridTemplateColumns:'220px 1fr',background:'var(--surface-page)',overflow:'hidden',fontFamily:'var(--font-body)'}}>
      <aside style={{background:'var(--surface-inverse)',display:'flex',flexDirection:'column',paddingTop:'var(--sp-3)'}}>
        <div style={{display:'flex',alignItems:'center',gap:'9px',padding:'0 var(--sp-3) 6px'}}>
          <img src={(window.SC_ASSET_BASE||'../..')+'/assets/logo-mark.png'} alt="" style={{height:'26px',filter:'brightness(0) invert(1)'}}/>
          <span style={{fontFamily:'var(--font-display)',fontWeight:'var(--fw-bold)',fontSize:'18px',letterSpacing:'var(--ls-lock)',color:'#fff'}}>SpareCare</span>
        </div>
        <div style={{font:'var(--type-caption)',color:'rgba(255,255,255,0.6)',padding:'0 var(--sp-3) var(--sp-3)'}}>WMS · Inward</div>
        <nav style={{display:'flex',flexDirection:'column'}}>
          {NAV.map(([ic,l],i)=>(
            <a key={l} href="#" onClick={e=>e.preventDefault()}
              style={{display:'flex',alignItems:'center',gap:'10px',padding:'11px var(--sp-3)',font:'var(--type-ui)',textDecoration:'none',minHeight:'var(--hit-min)',
                color:i===active?'#fff':'rgba(255,255,255,0.7)',
                background:i===active?'rgba(255,255,255,0.12)':'transparent',
                borderLeft:'3px solid '+(i===active?'var(--sc-teal)':'transparent')}}>
              <Icon name={ic} size={16}/>{l}
            </a>
          ))}
        </nav>
        <div style={{marginTop:'auto',padding:'var(--sp-3)',borderTop:'1px solid rgba(255,255,255,0.14)',display:'flex',alignItems:'center',gap:'9px'}}>
          <span style={{width:'28px',height:'28px',borderRadius:'var(--r-round)',background:'var(--sc-teal)',color:'#fff',display:'inline-flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontWeight:'var(--fw-bold)',fontSize:'13px'}}>SV</span>
          <div style={{minWidth:0}}>
            <div style={{font:'var(--type-caption)',fontWeight:'var(--fw-semibold)',color:'#fff'}}>Warehouse Supervisor</div>
            <div style={{fontSize:'var(--fs-micro)',color:'rgba(255,255,255,0.6)'}}>Meerut · Main Store</div>
          </div>
        </div>
      </aside>
      <main style={{display:'flex',flexDirection:'column',overflow:'hidden'}}>
        <header style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:'var(--sp-3)',padding:'var(--sp-3) var(--sp-4) var(--sp-2)',borderBottom:'1px solid var(--border-default)',background:'var(--surface-card)',flex:'0 0 auto'}}>
          <div style={{minWidth:0}}>
            <h1 style={{fontFamily:'var(--font-display)',fontWeight:'var(--fw-bold)',fontSize:'28px',letterSpacing:'var(--ls-display)',color:'var(--text-heading)'}}>{title}</h1>
            {subtitle&&<p style={{margin:'3px 0 0',font:'var(--type-caption)',color:'var(--text-secondary)'}}>{subtitle}</p>}
          </div>
          {actions&&<div style={{display:'flex',gap:'10px',alignItems:'center',flex:'0 0 auto'}}>{actions}</div>}
        </header>
        <div style={{flex:1,overflow:'auto',padding:'var(--sp-3) var(--sp-4) var(--sp-4)'}}>{children}</div>
      </main>
    </div>
  );
}
Object.assign(window,{WebShell,SC_WEB_NAV:NAV});
