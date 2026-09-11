const {Field,SelectInput,WorkflowChecklist,Button,Icon,InfoNote,Stepper,GenContextBar,Tag}=window.SpareCareDesignSystem_556483;

const PRODUCT_CATS=['Spare Parts','Lubricants','Accessories','Glass / Windscreen','Consumables','Others'];
const SUPPLIER_CATS=['OEM','Manufacturer','Local Vendor','Other'];

function ConsignmentWeb({state={},set=()=>{},steps=[],onToggle,onNext,onBack,onStepClick,genOptions=[],gen,shellProps={}}){
  const activeCount=steps.filter(s=>s.checked).length;
  return (
    <window.WebShell active={1} title="Enter Consignment Details"
      subtitle="Classify the consignment and confirm which downstream steps apply to it."
      actions={<Tag tone={activeCount===steps.length?'info':'low'} dot={false}>{activeCount} of {steps.length} steps active</Tag>}
      {...shellProps}>

      <div style={{maxWidth:'1000px'}}>
        <div style={{background:'var(--surface-card)',border:'1px solid var(--border-default)',padding:'var(--sp-3) var(--sp-4)',marginBottom:'var(--sp-3)'}}>
          <Stepper steps={window.SC_WEB_STEPS||['Gate Entry','Consignment Details']} current={1} onStepClick={onStepClick}/>
        </div>

        {(gen||state.gen)&&<div style={{marginBottom:'var(--sp-3)'}}>
          <GenContextBar gen={gen||state.gen} items={[
            {label:'Date & Time of Receipt',value:'12 Aug 2026, 09:40'},
            {label:'Supplier',value:state.supplier||'Not yet recorded'},
            {label:'Courier Type',value:state.courier||'Not yet recorded'}
          ]}/>
        </div>}

        <div style={{display:'grid',gridTemplateColumns:'1.15fr 0.85fr',gap:'var(--sp-3)',alignItems:'start'}}>
          <div style={{background:'var(--surface-card)',border:'1px solid var(--border-default)',padding:'var(--pad-card)'}}>
            <h2 style={{fontFamily:'var(--font-display)',fontWeight:'var(--fw-bold)',fontSize:'19px',color:'var(--text-heading)',marginBottom:'var(--sp-2)'}}>Consignment classification</h2>
            <Field label="Gate Entry Number" required hint="Selected from gate entries already created. Not typed in free text.">
              <SelectInput placeholder="Select GEN" options={genOptions} value={state.gen} onChange={e=>set('gen',e.target.value)}/>
            </Field>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0 var(--sp-3)'}}>
              <Field label="Product Category" hint="Selected manually; never derived from the supplier.">
                <SelectInput placeholder="Select Product Category" options={PRODUCT_CATS} value={state.productCat} onChange={e=>set('productCat',e.target.value)}/>
              </Field>
              <Field label="Supplier Category" hint="Derived from the supplier record where the supplier is known.">
                <SelectInput placeholder="Select Supplier Category" options={SUPPLIER_CATS} value={state.supplierCat} onChange={e=>set('supplierCat',e.target.value)}/>
              </Field>
              <Field label="Supplier"><SelectInput placeholder="Select Supplier" options={window.SC_SUPPLIERS||[]} value={state.supplier} onChange={e=>set('supplier',e.target.value)}/></Field>
              <Field label="Primary Document Type"><SelectInput placeholder="Select Primary Document Type" options={window.SC_DOCS||[]} value={state.doc} onChange={e=>set('doc',e.target.value)}/></Field>
              <Field label="Courier Type"><SelectInput placeholder="Select the Courier Type" options={window.SC_COURIER||[]} value={state.courier} onChange={e=>set('courier',e.target.value)}/></Field>
            </div>
          </div>

          <div>
            <div style={{background:'var(--surface-card)',border:'1px solid var(--border-default)',padding:'var(--pad-card-tight)'}}>
              <h2 style={{fontFamily:'var(--font-display)',fontWeight:'var(--fw-bold)',fontSize:'19px',color:'var(--text-heading)',marginBottom:'10px'}}>Workflow applicability</h2>
              <div style={{marginBottom:'var(--sp-2)'}}>
                <InfoNote>Defaults come from the administrator's rule for this supplier and product category. Override any step before the receipt process starts.</InfoNote>
              </div>
              <WorkflowChecklist steps={steps} onToggle={onToggle}/>
              <p style={{font:'var(--type-caption)',color:'var(--sc-grey-600)',margin:'10px 0 0',lineHeight:1.5}}>Unchecked steps are skipped entirely — the consignment proceeds to the next active step.</p>
            </div>
          </div>
        </div>

        <div style={{display:'flex',gap:'12px',justifyContent:'flex-end',marginTop:'var(--sp-3)'}}>
          <Button variant="secondary" size="md" onClick={onBack} iconLeft={<Icon name="chevron-left" size={15}/>}>Back to Gate Entry</Button>
          <Button variant="primary" size="md" onClick={onNext} iconRight={<Icon name="chevron-right" size={15}/>}>Start receipt process</Button>
        </div>
      </div>
    </window.WebShell>
  );
}
Object.assign(window,{ConsignmentWeb,SC_PRODUCT_CATS:PRODUCT_CATS,SC_SUPPLIER_CATS:SUPPLIER_CATS});
