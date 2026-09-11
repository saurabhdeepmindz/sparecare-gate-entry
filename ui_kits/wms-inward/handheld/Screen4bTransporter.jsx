const {ScreenHeader,Field,TextInput,SelectInput,DetailRow,Accordion,ActionBar,Button,Icon,InfoNote,QueueTable,Tag,CameraButton}=window.SpareCareDesignSystem_556483;

const TRANSPORTERS=['SpeedTrack Logistics','Gati Express','VRL Logistics','Own Vehicle'];
const say=d=>window.dispatchEvent(new CustomEvent('sc:not-drawn',{detail:d}));

function Upload({label,note,onPick}){
  return (
    <button type="button" onClick={onPick}
      style={{width:'100%',display:'flex',alignItems:'center',gap:'10px',padding:'12px',minHeight:'var(--hit-min)',borderRadius:'var(--radius-field)',border:'1px dashed var(--border-field)',background:'var(--surface-card)',cursor:'pointer',textAlign:'left'}}>
      <Icon name="upload" size={18} color="var(--sc-teal-deep)"/>
      <span style={{minWidth:0}}>
        <span style={{display:'block',font:'var(--type-label)',color:'var(--text-heading)'}}>{label}</span>
        <span style={{display:'block',font:'var(--type-caption)',color:'var(--sc-grey-500)'}}>{note}</span>
      </span>
    </button>
  );
}

function Screen4bTransporter({state={},set=()=>{},invoices=[],onReceive,openTransporter=true,onToggleTransporter,onNext,onBack}){
  const total=invoices.reduce((s,i)=>s+(i.amountValue||0),0);
  const pick=()=>say({title:'Document upload',body:'FR-004 carries GRN and invoice photo uploads at Receipt Details. The picker, how many images may be attached, and whether an upload can be replaced are not specified.',ref:'\u00a77.4'});
  return (
    <React.Fragment>
      <ScreenHeader title="Transporter Details" onBack={onBack}/>
      <div style={{padding:'12px var(--handheld-safe) 16px'}}>
        <div style={{background:'var(--surface-card)',border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',padding:'4px 12px',marginBottom:'12px'}}>
          <DetailRow icon="file-text" label="Gate Entry Number" value="GEN-000845" mono/>
          <DetailRow icon="receipt" label="Document Number" value="LR-77120" mono last/>
        </div>

        <div style={{marginBottom:'12px'}}>
          <InfoNote>Transporter details may be left blank here if the paperwork has not arrived. They can be completed at Truck Unload.</InfoNote>
        </div>

        <Accordion title="Capture Transporter Details" open={openTransporter} onToggle={onToggleTransporter} style={{marginBottom:'12px'}}>
          <Field label="Name of the Transporter">
            <SelectInput placeholder="Select or add transporter" options={TRANSPORTERS} value={state.transporter} onChange={e=>set('transporter',e.target.value)}/>
          </Field>
          <Field label="Vehicle Number as per GR Documents" hint="May differ from the vehicle that actually arrives.">
            <TextInput placeholder="KA01AB1234" mono value={state.vehicleGr||''} onChange={e=>set('vehicleGr',e.target.value)}/>
          </Field>
          <Field label="Name of the Driver">
            <TextInput placeholder="Enter driver name" value={state.driver||''} onChange={e=>set('driver',e.target.value)}/>
          </Field>
          <Field label="Contact Number (Driver)">
            <TextInput placeholder="98xxx xxxxx" value={state.driverPhone||''} onChange={e=>set('driverPhone',e.target.value)}/>
          </Field>
        </Accordion>

        <div style={{background:'var(--surface-card)',border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',padding:'12px',marginBottom:'12px'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'8px'}}>
            <span style={{font:'var(--type-label)',color:'var(--text-heading)'}}>Details of the Invoices Added</span>
            {invoices.length>0&&<Tag tone="info" dot={false}>{invoices.length}</Tag>}
          </div>
          <QueueTable
            columns={[{key:'no',label:'Invoice No.',mono:true},{key:'date',label:'Date'},{key:'amount',label:'Amount',align:'right'},{key:'received',label:'Recd.',align:'center'}]}
            rows={invoices} minRows={0} onRowClick={onReceive}
            emptyLabel="No invoices captured yet. They are keyed on the previous screen." style={{marginBottom:0}}/>
          {invoices.length>0&&<div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',paddingTop:'9px',marginTop:'2px',borderTop:'1.5px solid var(--border-field)'}}>
            <span style={{font:'var(--type-label)',color:'var(--text-body)'}}>Total</span>
            <span style={{fontFamily:'var(--font-mono)',fontWeight:'var(--fw-semibold)',fontSize:'var(--fs-body-sm)',color:'var(--sc-teal-deep)'}}>{'\u20B9 '+total.toLocaleString('en-IN')}</span>
          </div>}
          <p style={{margin:'8px 0 0',font:'var(--type-caption)',color:'var(--sc-grey-500)',lineHeight:1.45}}>Tap a row to mark an invoice received. One summary table only \u2014 it lives here, not on the entry screen.</p>
        </div>

        <div style={{display:'grid',gap:'8px'}}>
          <Upload label="Upload GRN Pic" note="Photograph of the goods receipt note" onPick={pick}/>
          <Upload label="Upload Invoice Pics" note="One or more invoice documents" onPick={pick}/>
        </div>
      </div>
      <ActionBar style={{position:'sticky',bottom:0}}>
        <Button variant="quiet" block onClick={onBack} iconLeft={<Icon name="chevron-left" size={15}/>}>Back</Button>
        <Button variant="accent" block onClick={onNext} iconRight={<Icon name="chevron-right" size={15}/>}>Next</Button>
      </ActionBar>
    </React.Fragment>
  );
}
Object.assign(window,{Screen4bTransporter});
