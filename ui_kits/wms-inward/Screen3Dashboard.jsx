const {ScreenHeader,KpiTile,QueueTable,HandheldFrame,Icon}=window.SpareCareDesignSystem_556483;

const BUCKETS=['Last 7 days','Last 15 days','Last 30 days','60 days and over'];

const UNLOAD=[{gen:'GEN001234',date:'22-10-2023',supplier:'ABC',value:'100,000'},{gen:'GEN001235',date:'11-11-2023',supplier:'XYZ',value:'12,345,679'}];
const CHECK=[{gen:'GEN001335',date:'01-11-2023',supplier:'XYZ',boxes:'345,679'}];
const BIN=[];

function AgingFilter({value,onChange}){
  return (
    <div style={{display:'flex',gap:'6px',flexWrap:'wrap',marginBottom:'var(--sp-2)'}}>
      {BUCKETS.map(b=>(
        <button key={b} onClick={()=>onChange&&onChange(b)}
          style={{font:'var(--type-caption)',fontWeight:'var(--fw-semibold)',padding:'6px 11px',borderRadius:'var(--r-pill)',cursor:'pointer',transition:'var(--transition-interactive)',
            border:'1px solid '+(value===b?'var(--sc-teal)':'var(--border-default)'),
            background:value===b?'var(--surface-sunken)':'var(--surface-card)',
            color:value===b?'var(--sc-teal-deep)':'var(--sc-grey-600)'}}>{b}</button>
      ))}
    </div>
  );
}

function Screen3Dashboard({queue,setQueue,bucket,setBucket,onOpenRow,frameProps={}}){
  return (
    <HandheldFrame {...frameProps}>
      <ScreenHeader title="Inward Dashboard" back={false} right={<Icon name="refresh-cw" size={16} color="var(--sc-teal)"/>}/>
      <div style={{padding:'12px var(--handheld-safe)',overflow:'auto',flex:1,background:'var(--surface-card)'}}>
        <div style={{display:'flex',gap:'8px',marginBottom:'var(--sp-2)'}}>
          <KpiTile label="Pending for Unload" value={5} unit="Trucks" active={queue==='unload'} onClick={()=>setQueue&&setQueue('unload')}/>
          <KpiTile label="Pending for Checking" value={5} unit="GENs" active={queue==='check'} onClick={()=>setQueue&&setQueue('check')}/>
          <KpiTile label="Pending for Binning" value={5} unit="GENs" active={queue==='bin'} onClick={()=>setQueue&&setQueue('bin')}/>
        </div>
        <AgingFilter value={bucket} onChange={setBucket}/>
        <QueueTable caption="Pending Unloads"
          columns={[{key:'gen',label:'GEN',link:true,mono:true},{key:'date',label:'Date'},{key:'supplier',label:'Supplier'},{key:'value',label:'Value',align:'right'}]}
          rows={UNLOAD} minRows={4} onRowClick={onOpenRow}/>
        <QueueTable caption="Pending for Consignment Check"
          columns={[{key:'gen',label:'GEN',link:true,mono:true},{key:'date',label:'Date'},{key:'supplier',label:'Supplier'},{key:'boxes',label:'No. of Boxes',align:'right'}]}
          rows={CHECK} minRows={4} onRowClick={onOpenRow}/>
        <QueueTable caption="Pending for Binning"
          columns={[{key:'gen',label:'GEN',link:true,mono:true},{key:'date',label:'Date'},{key:'supplier',label:'Supplier'},{key:'units',label:'No. of Units',align:'right'}]}
          rows={BIN} minRows={4}/>
      </div>
    </HandheldFrame>
  );
}
Object.assign(window,{Screen3Dashboard,AgingFilter,SC_BUCKETS:BUCKETS});
