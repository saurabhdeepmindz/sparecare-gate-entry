const {ScreenHeader,Field,TextInput,SelectInput,DetailRow,ActionBar,Button,Icon,InfoNote,Tag,CounterStrip}=window.SpareCareDesignSystem_556483;

const RESULTS=[
  {gen:'GEN-000845',supplier:'ABC Supplies Pvt. Ltd.',date:'12-08-2026',doc:'LR-77120',pending:2},
  {gen:'GEN-000842',supplier:'Sundaram Brake Linings',date:'08-08-2026',doc:'LR-76988',pending:0},
  {gen:'GEN-000839',supplier:'Rane Madras Ltd.',date:'06-08-2026',doc:'INV-55021',pending:1}
];

function Screen5aUnloadInit({gen='GEN-000845',onPickGen,lookupOpen=false,onToggleLookup,docsSelected=2,rejected=false,onNext,onBack}){
  return (
    <React.Fragment>
      <ScreenHeader title="Unload Truck" onBack={onBack}/>
      <div style={{padding:'12px var(--handheld-safe) 16px'}}>
        <Field label="Gate Entry Number" required
          adjacent={gen?<button type="button" onClick={()=>onPickGen&&onPickGen('')} aria-label="Clear selection"
            style={{width:'var(--hit-min)',height:'var(--hit-min)',border:'none',background:'none',cursor:'pointer',color:'var(--sc-grey-500)',display:'inline-flex',alignItems:'center',justifyContent:'center'}}><Icon name="x" size={18}/></button>:null}>
          <TextInput placeholder="Enter or select GEN" mono value={gen} onChange={e=>onPickGen&&onPickGen(e.target.value)}/>
        </Field>

        <button type="button" onClick={onToggleLookup}
          style={{display:'inline-flex',alignItems:'center',gap:'7px',border:'none',background:'none',padding:'0 0 12px',cursor:'pointer',font:'var(--type-label)',color:'var(--sc-teal-deep)',textDecoration:'underline',textUnderlineOffset:'2px'}}>
          <Icon name="search" size={15}/>Find GEN Using Other Details
        </button>

        {lookupOpen&&
          <div style={{background:'var(--surface-card)',border:'1.5px solid var(--border-field)',borderRadius:'var(--radius-field)',padding:'12px',marginBottom:'12px'}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'9px'}}>
              <span style={{font:'var(--type-label)',color:'var(--text-heading)'}}>Find GEN Using Other Details</span>
              <button type="button" onClick={onToggleLookup} aria-label="Close lookup" style={{border:'none',background:'none',cursor:'pointer',color:'var(--sc-grey-500)',display:'inline-flex'}}><Icon name="x" size={17}/></button>
            </div>
            <div style={{marginBottom:'10px'}}><InfoNote>Search criteria only. Supplier and document data are captured at Receipt Details and fill themselves once a GEN is chosen.</InfoNote></div>
            <Field label="Supplier Name"><SelectInput placeholder="Any supplier" options={['ABC Supplies Pvt. Ltd.','Sundaram Brake Linings','Rane Madras Ltd.']}/></Field>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0 10px'}}>
              <Field label="Supplier Category"><SelectInput placeholder="Any" options={['OEM','Manufacturer','Local Vendor','Other']}/></Field>
              <Field label="Product Category"><SelectInput placeholder="Any" options={['Spare Parts','Lubricants','Accessories']}/></Field>
              <Field label="Document Number"><TextInput placeholder="LR / INV" mono/></Field>
              <Field label="Document Date"><TextInput placeholder="DD/MM/YYYY"/></Field>
            </div>
            <Field label="Status"><SelectInput placeholder="Any" options={['Pending unload','Partially unloaded','Unloaded']}/></Field>
            <div style={{font:'var(--type-label)',color:'var(--text-heading)',margin:'6px 0 8px'}}>Matching gate entries</div>
            {RESULTS.map(r=>(
              <label key={r.gen} style={{display:'flex',alignItems:'flex-start',gap:'10px',padding:'10px',minHeight:'var(--hit-min)',border:'1px solid '+(gen===r.gen?'var(--sc-teal)':'var(--border-soft)'),borderRadius:'var(--radius-field)',marginBottom:'7px',cursor:'pointer',background:gen===r.gen?'var(--surface-sunken)':'var(--surface-card)'}}>
                <input type="radio" name="genpick" checked={gen===r.gen} onChange={()=>{onPickGen&&onPickGen(r.gen);onToggleLookup&&onToggleLookup();}} style={{marginTop:'3px',accentColor:'var(--sc-teal)'}}/>
                <span style={{flex:1,minWidth:0}}>
                  <span style={{display:'flex',alignItems:'center',gap:'8px',flexWrap:'wrap'}}>
                    <b style={{fontFamily:'var(--font-mono)',fontSize:'var(--fs-caption)',color:'var(--text-data)'}}>{r.gen}</b>
                    {r.pending>0&&<Tag tone="low" dot={false}>{r.pending} pending docs</Tag>}
                  </span>
                  <span style={{display:'block',font:'var(--type-caption)',color:'var(--sc-grey-600)',marginTop:'2px'}}>{r.supplier} · {r.date} · {r.doc}</span>
                </span>
              </label>
            ))}
          </div>}

        {gen&&
          <div style={{background:'var(--surface-card)',border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',padding:'4px 12px',marginBottom:'12px'}}>
            <DetailRow label="GEN Date" value="12 Aug 2026"/>
            <DetailRow label="Supplier Category" value="OEM"/>
            <DetailRow label="Supplier" value="ABC Supplies Pvt. Ltd."/>
            <DetailRow label="Product Category" value="Spare Parts"/>
            <DetailRow label="Primary Document Type" value="GR / LR"/>
            <DetailRow label="Document Number" value="LR-77120" mono/>
            <DetailRow label="Document Date" value="12 Aug 2026" last/>
          </div>}

        <Field label="Select Documents to Unload" required hint="Choose the invoices being unloaded in this session.">
          <SelectInput placeholder={docsSelected+' of 3 invoices selected'} options={['INV1001','INV1002','INV1003']}/>
        </Field>

        {rejected&&<div style={{marginBottom:'12px'}}>
          <InfoNote tone="error">That document number is not eligible for this gate entry. Enter or select the correct document before unloading.</InfoNote>
        </div>}

        <CounterStrip items={[{label:'Expected Boxes',value:50},{label:'Expected Units',value:'1,240'}]} style={{marginBottom:'12px'}}/>
      </div>
      <ActionBar style={{position:'sticky',bottom:0}}>
        <Button variant="quiet" block onClick={onBack}>Cancel</Button>
        <Button variant="accent" block onClick={onNext} disabled={!gen} iconRight={<Icon name="chevron-right" size={15}/>}>Next</Button>
      </ActionBar>
    </React.Fragment>
  );
}
Object.assign(window,{Screen5aUnloadInit,SC_GEN_RESULTS:RESULTS});
