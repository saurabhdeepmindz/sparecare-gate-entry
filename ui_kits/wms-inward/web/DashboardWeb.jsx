const {KpiTile,QueueTable,Button,Icon}=window.SpareCareDesignSystem_556483;

const BUCKETS=['Last 7 days','Last 15 days','Last 30 days','60 days and over'];

/* Synthetic consignments with an age in days, so the aging buckets filter real rows.
   FR-003.7 defines the buckets as last 7 / 15 / 30 days and 60 days and over — the first
   three are cumulative windows, the fourth is the overdue tail. The binning queue carries
   the backlog deliberately: FR-003.6 exists because a large warehouse accumulates
   un-binned consignments that a flat count never surfaces. */
const POOL={
  unload:[
    {days:0,  gen:'GEN-000851',date:'12-08-2026',supplier:'ABC Supplies Pvt. Ltd.',   age:'1 h 05 m', value:'1,25,000'},
    {days:0,  gen:'GEN-000850',date:'12-08-2026',supplier:'Sundaram Brake Linings',   age:'4 h 20 m', value:'3,42,600'},
    {days:2,  gen:'GEN-000846',date:'10-08-2026',supplier:'XYZ Auto Components',      age:'2 d 03 h', value:'87,400'},
    {days:6,  gen:'GEN-000839',date:'06-08-2026',supplier:'Rane Madras Ltd.',         age:'6 d 11 h', value:'12,34,500'},
    {days:11, gen:'GEN-000822',date:'01-08-2026',supplier:'Bansal Auto Spares',       age:'11 d',     value:'64,200'},
    {days:24, gen:'GEN-000778',date:'19-07-2026',supplier:'Lucas TVS',                age:'24 d',     value:'2,10,000'},
    {days:71, gen:'GEN-000612',date:'02-06-2026',supplier:'Minda Industries',         age:'71 d',     value:'45,900'}
  ],
  check:[
    {days:1,  gen:'GEN-000849',date:'11-08-2026',supplier:'ABC Supplies Pvt. Ltd.',   age:'1 d 02 h', boxes:'48'},
    {days:4,  gen:'GEN-000842',date:'08-08-2026',supplier:'Sundaram Brake Linings',   age:'4 d 07 h', boxes:'126'},
    {days:9,  gen:'GEN-000831',date:'03-08-2026',supplier:'Rane Madras Ltd.',         age:'9 d',      boxes:'22'},
    {days:13, gen:'GEN-000818',date:'30-07-2026',supplier:'XYZ Auto Components',      age:'13 d',     boxes:'64'},
    {days:27, gen:'GEN-000771',date:'16-07-2026',supplier:'Lucas TVS',                age:'27 d',     boxes:'9'},
    {days:63, gen:'GEN-000629',date:'10-06-2026',supplier:'Bansal Auto Spares',       age:'63 d',     boxes:'31'},
    {days:88, gen:'GEN-000544',date:'16-05-2026',supplier:'Minda Industries',         age:'88 d',     boxes:'7'}
  ],
  bin:[
    {days:3,  gen:'GEN-000844',date:'09-08-2026',supplier:'Sundaram Brake Linings',   age:'3 d 04 h', units:'1,240'},
    {days:12, gen:'GEN-000820',date:'31-07-2026',supplier:'Rane Madras Ltd.',         age:'12 d',     units:'318'},
    {days:19, gen:'GEN-000801',date:'24-07-2026',supplier:'ABC Supplies Pvt. Ltd.',   age:'19 d',     units:'2,905'},
    {days:29, gen:'GEN-000764',date:'14-07-2026',supplier:'Lucas TVS',                age:'29 d',     units:'76'},
    {days:66, gen:'GEN-000620',date:'07-06-2026',supplier:'Minda Industries',         age:'66 d',     units:'488'},
    {days:94, gen:'GEN-000521',date:'10-05-2026',supplier:'Bansal Auto Spares',       age:'94 d',     units:'1,102'},
    {days:120,gen:'GEN-000447',date:'14-04-2026',supplier:'XYZ Auto Components',      age:'120 d',    units:'233'}
  ]
};

const WINDOW={'Last 7 days':7,'Last 15 days':15,'Last 30 days':30};

function inBucket(row,bucket){
  if(bucket==='60 days and over') return row.days>=60;
  const max=WINDOW[bucket];
  return max===undefined?true:row.days<=max;
}

function AgingFilter({value,onChange}){
  return (
    <div style={{display:'flex',alignItems:'center',gap:'8px',flexWrap:'wrap',marginBottom:'var(--sp-3)'}}>
      <span style={{font:'var(--type-caption)',color:'var(--sc-grey-600)',marginRight:'2px'}}>Aging</span>
      {BUCKETS.map(b=>(
        <button key={b} type="button" onClick={()=>onChange&&onChange(b)}
          style={{font:'var(--type-caption)',fontWeight:'var(--fw-semibold)',whiteSpace:'nowrap',padding:'6px 13px',borderRadius:'var(--r-pill)',cursor:'pointer',transition:'var(--transition-interactive)',
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
  const rows={
    unload:POOL.unload.filter(r=>inBucket(r,bucket)),
    check:POOL.check.filter(r=>inBucket(r,bucket)),
    bin:POOL.bin.filter(r=>inBucket(r,bucket))
  };
  const overdue=bucket==='60 days and over';
  const empty=t=>overdue?'Nothing outstanding 60 days or more at this stage.':'Nothing '+t+' within '+bucket.toLowerCase()+'.';
  return (
    <window.WebShell active={0} title="Inward Operations Dashboard"
      subtitle="Every consignment currently in the building, and how long it has been waiting."
      actions={<><Button variant="secondary" size="md" iconLeft={<Icon name="refresh-cw" size={15}/>}>Refresh</Button>
                 <Button variant="primary" size="md" onClick={onCreate} iconLeft={<Icon name="plus" size={15}/>}>Create Gate Entry</Button></>}
      {...shellProps}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:'var(--sp-2)',marginBottom:'var(--sp-3)'}}>
        <KpiTile label="Pending for Unload" value={rows.unload.length} unit="Trucks" active={queue==='unload'} onClick={()=>setQueue&&setQueue('unload')} style={{padding:'14px 12px'}}/>
        <KpiTile label="Pending for Checking" value={rows.check.length} unit="GENs" active={queue==='check'} onClick={()=>setQueue&&setQueue('check')} style={{padding:'14px 12px'}}/>
        <KpiTile label="Pending for Binning" value={rows.bin.length} unit="GENs" active={queue==='bin'} onClick={()=>setQueue&&setQueue('bin')} style={{padding:'14px 12px'}}/>
      </div>
      <AgingFilter value={bucket} onChange={setBucket}/>
      <Panel>
        <QueueTable caption="Pending Unloads"
          columns={[{key:'gen',label:'Gate Entry Number',link:true,mono:true},{key:'date',label:'Date'},{key:'supplier',label:'Supplier'},{key:'age',label:'Waiting',align:'right'},{key:'value',label:'Value',align:'right'}]}
          rows={rows.unload} minRows={Math.max(0,3-rows.unload.length)} onRowClick={onOpenRow} emptyLabel={empty('waiting to unload')} style={{marginBottom:0}}/>
      </Panel>
      <Panel>
        <QueueTable caption="Pending for Consignment Check"
          columns={[{key:'gen',label:'Gate Entry Number',link:true,mono:true},{key:'date',label:'Date'},{key:'supplier',label:'Supplier'},{key:'age',label:'Waiting',align:'right'},{key:'boxes',label:'No. of Boxes',align:'right'}]}
          rows={rows.check} minRows={Math.max(0,3-rows.check.length)} onRowClick={onOpenRow} emptyLabel={empty('awaiting consignment check')} style={{marginBottom:0}}/>
      </Panel>
      <Panel>
        <QueueTable caption="Pending for Binning"
          columns={[{key:'gen',label:'Gate Entry Number',link:true,mono:true},{key:'date',label:'Date'},{key:'supplier',label:'Supplier'},{key:'age',label:'Waiting',align:'right'},{key:'units',label:'No. of Units',align:'right'}]}
          rows={rows.bin} minRows={Math.max(0,3-rows.bin.length)} emptyLabel={empty('awaiting binning')} style={{marginBottom:0}}/>
      </Panel>
    </window.WebShell>
  );
}
Object.assign(window,{DashboardWeb,SC_AGING_BUCKETS:BUCKETS,SC_QUEUE_POOL:POOL});
