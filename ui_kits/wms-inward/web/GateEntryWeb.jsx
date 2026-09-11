const {Field,TextInput,SelectInput,CameraButton,GenBanner,Button,Icon,InfoNote,Stepper,GenContextBar}=window.SpareCareDesignSystem_556483;

const COURIER=['Transport','Courier','Own Vehicle','Individual (External Person)','Individual (Internal Person)'];
const DOCS=['GRN','Tax Invoice','Challan','Ship List','Delivery Challan'];
const NATURE=['Purchase','Branch transfer in','Sales return','Workshop / in-house return','Job work return','Third party purchase'];
const SUPPLIERS=['ABC Supplies Pvt. Ltd.','XYZ Auto Components','Bansal Auto Spares'];
const DEPTS=['Spares Store','Workshop','Body Shop','Accounts'];
const STEPS=['Gate Entry','Consignment Details'];

function GateEntryWeb({state={},set=()=>{},gen,onNext,onCancel,onStepClick,shellProps={}}){
  return (
    <window.WebShell active={1} title="Create Gate Entry"
      subtitle="Raise a Gate Entry Number for a consignment that has arrived at the premises."
      actions={<div style={{textAlign:'right'}}>
        <div style={{font:'var(--type-caption)',color:'var(--sc-grey-500)'}}>Date &amp; Time of Receipt</div>
        <div style={{fontFamily:'var(--font-mono)',fontSize:'var(--fs-body-sm)',fontWeight:'var(--fw-semibold)',color:'var(--sc-teal-deep)'}}>12 Aug 2026, 09:40</div>
      </div>}
      {...shellProps}>

      <div style={{maxWidth:'860px'}}>
        <div style={{background:'var(--surface-card)',border:'1px solid var(--border-default)',padding:'var(--sp-3) var(--sp-4)',marginBottom:'var(--sp-3)'}}>
          <Stepper steps={STEPS} current={0} onStepClick={onStepClick}/>
        </div>

        {gen&&<div style={{marginBottom:'var(--sp-3)'}}>
          <GenContextBar gen={gen} items={[
            {label:'Date & Time of Receipt',value:'12 Aug 2026, 09:40'},
            {label:'Supplier',value:state.supplier||'Not yet recorded'},
            {label:'Driver',value:(state.person||'—')+' · '+(state.contact||'—')}
          ]}/>
        </div>}

        <div style={{background:'var(--surface-card)',border:'1px solid var(--border-default)',padding:'var(--pad-card)'}}>
          <InfoNote>Only the driver's name and contact number are mandatory. Anything left blank here can be completed at Consignment Details.</InfoNote>

          <h2 style={{fontFamily:'var(--font-display)',fontWeight:'var(--fw-bold)',fontSize:'19px',color:'var(--text-heading)',margin:'var(--sp-3) 0 var(--sp-2)'}}>Who brought the consignment</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0 var(--sp-4)'}}>
            <Field label="Name of the person" required><TextInput placeholder="Enter Person's Name" value={state.person||''} onChange={e=>set('person',e.target.value)}/></Field>
            <Field label="Contact Number" required><TextInput placeholder="Enter the contact Number" value={state.contact||''} onChange={e=>set('contact',e.target.value)}/></Field>
            <Field label="Courier Type" required><SelectInput placeholder="Select the Courier Type" options={COURIER} value={state.courier} onChange={e=>set('courier',e.target.value)}/></Field>
            <Field label="Nature of Inward Transaction"><SelectInput placeholder="Select the Nature of Transaction" options={NATURE} value={state.nature} onChange={e=>set('nature',e.target.value)}/></Field>
          </div>

          <h2 style={{fontFamily:'var(--font-display)',fontWeight:'var(--fw-bold)',fontSize:'19px',color:'var(--text-heading)',margin:'var(--sp-3) 0 var(--sp-2)',paddingTop:'var(--sp-2)',borderTop:'1px solid var(--border-soft)'}}>Where it came from, and for whom</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0 var(--sp-4)'}}>
            <Field label="Where From"><SelectInput placeholder="Supplier Name" options={SUPPLIERS} value={state.supplier} onChange={e=>set('supplier',e.target.value)}/></Field>
            <Field label="For Whom"><SelectInput placeholder="Department Name" options={DEPTS} value={state.dept} onChange={e=>set('dept',e.target.value)}/></Field>
          </div>

          <h2 style={{fontFamily:'var(--font-display)',fontWeight:'var(--fw-bold)',fontSize:'19px',color:'var(--text-heading)',margin:'var(--sp-3) 0 var(--sp-2)',paddingTop:'var(--sp-2)',borderTop:'1px solid var(--border-soft)'}}>Document and quantity at the gate</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0 var(--sp-4)'}}>
            <Field label="Primary Document Type" required adjacent={<CameraButton/>}><SelectInput placeholder="Primary Document Type" options={DOCS} value={state.doc} onChange={e=>set('doc',e.target.value)}/></Field>
            <Field label="No. of Boxes" hint="Indicative only. Not the value unloading is reconciled against."><TextInput placeholder="Approximate count at gate" value={state.boxes||''} onChange={e=>set('boxes',e.target.value)}/></Field>
          </div>

          <div style={{display:'flex',gap:'12px',justifyContent:'flex-end',alignItems:'center',marginTop:'var(--sp-2)',paddingTop:'var(--sp-3)',borderTop:'1px solid var(--border-soft)'}}>
            <Button variant="secondary" size="md" onClick={onCancel}>Cancel</Button>
            <Button variant="primary" size="md" onClick={onNext} iconRight={<Icon name="chevron-right" size={15}/>}>{gen?'Continue to Consignment Details':'Create Gate Entry'}</Button>
          </div>
        </div>

        {gen&&<div style={{marginTop:'var(--sp-3)',maxWidth:'380px'}}>
          <GenBanner gen={gen} footnote="Print slip or share reference"/>
        </div>}
      </div>
    </window.WebShell>
  );
}
Object.assign(window,{GateEntryWeb,SC_COURIER:COURIER,SC_DOCS:DOCS,SC_NATURE:NATURE,SC_SUPPLIERS:SUPPLIERS,SC_DEPTS:DEPTS,SC_WEB_STEPS:STEPS});
