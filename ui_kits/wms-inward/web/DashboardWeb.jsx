const {KpiTile,QueueTable,Button,Icon}=window.SpareCareDesignSystem_556483;

const BUCKETS=['Last 7 days','Last 15 days','Last 30 days','60 days and over'];

const ROWS={
  unload:[
    {gen:'GEN001234',date:'22-10-2023',supplier:'ABC Supplies Pvt. Ltd.',age:'4 h 20 m',value:'100,000'},
    {gen:'GEN001235',date:'11-11-2023',supplier:'XYZ Auto Components',age:'1 h 05 m',value:'12,345,679'}
  ],
  check:[
    {gen:'GEN001335',date:'01-11-2023',supplier:'XYZ Auto Components',age:'2 d 03 h',boxes:'48'}
  ],
  bin:[]
};

function AgingFilter({value,onChange}){
  return (
    <div style={{display:'flex',alignItems:'center',gap:'8px',flexWrap:'wrap',marginBottom:'var(--sp-3)'}}>
      <span style={{font:'var(--type-caption)',color:'var(--sc-grey-600)',marginRight:'2px'}}>Aging</span>
      {BUCKETS.map(b=>(
        <button key={b} type="button" onClick={()=>onChange&&onChange(b)}
          style={{font:'var(--type-caption)',fontWeight:'var(--fw-semibold)',padding:'6px 13px',borderRadius:'var(--r-pill)',cursor:'pointer',transition:'var(--transition-interactive)',
            border:'1px solid '+(value===b?'var(--sc-teal)':'var(--border-default)'),
            background:value===b?'var(--surface-sunken)':'var(--surface-card)',
            color:value===b?'var(--sc-teal-deep)':'var(--sc-grey-600)'}}>{b}</button>
      ))}
    </div>
  );
}

function Panel({children}){
  return <div style={{background:'var(--surface-card)',border:'1px solid var(--border-default)',padding:'var(--pad-card-tight)',marginBottom:'var(--sp-3)'}}>{children}</div>;
}

function DashboardWeb({queue='unload',setQueue,bucket='Last 7 days',setBucket,onCreate,onOpenRow,shellProps={}}){
  return (
    <window.WebShell active={0} title="Inward Operations Dashboard"
      subtitle="Every consignment currently in the building, and how long it has been waiting."
      actions={<><Button variant="secondary" size="md" iconLeft={<Icon name="refresh-cw" size={15}/>}>Refresh</Button>
                 <Button variant="primary" size="md" onClick={onCreate} iconLeft={<Icon name="plus" size={15}/>}>Create Gate Entry</Button></>}
      {...shellProps}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:'var(--sp-2)',marginBottom:'var(--sp-3)'}}>
        <KpiTile label="Pending for Unload" value={5} unit="Trucks" active={queue==='unload'} onClick={()=>setQueue&&setQueue('unload')} style={{padding:'14px 12px'}}/>
        <KpiTile label="Pending for Checking" value={5} unit="GENs" active={queue==='check'} onClick={()=>setQueue&&setQueue('check')} style={{padding:'14px 12px'}}/>
        <KpiTile label="Pending for Binning" value={5} unit="GENs" active={queue==='bin'} onClick={()=>setQueue&&setQueue('bin')} style={{padding:'14px 12px'}}/>
      </div>
      <AgingFilter value={bucket} onChange={setBucket}/>
      <Panel>
        <QueueTable caption="Pending Unloads"
          columns={[{key:'gen',label:'Gate Entry Number',link:true,mono:true},{key:'date',label:'Date'},{key:'supplier',label:'Supplier'},{key:'age',label:'Waiting',align:'right'},{key:'value',label:'Value',align:'right'}]}
          rows={ROWS.unload} minRows={3} onRowClick={onOpenRow} style={{marginBottom:0}}/>
      </Panel>
      <Panel>
        <QueueTable caption="Pending for Consignment Check"
          columns={[{key:'gen',label:'Gate Entry Number',link:true,mono:true},{key:'date',label:'Date'},{key:'supplier',label:'Supplier'},{key:'age',label:'Waiting',align:'right'},{key:'boxes',label:'No. of Boxes',align:'right'}]}
          rows={ROWS.check} minRows={3} onRowClick={onOpenRow} style={{marginBottom:0}}/>
      </Panel>
      <Panel>
        <QueueTable caption="Pending for Binning"
          columns={[{key:'gen',label:'Gate Entry Number',link:true,mono:true},{key:'date',label:'Date'},{key:'supplier',label:'Supplier'},{key:'age',label:'Waiting',align:'right'},{key:'units',label:'No. of Units',align:'right'}]}
          rows={ROWS.bin} minRows={3} emptyLabel="Nothing pending for binning at this location." style={{marginBottom:0}}/>
      </Panel>
    </window.WebShell>
  );
}
Object.assign(window,{DashboardWeb,SC_AGING_BUCKETS:BUCKETS});
