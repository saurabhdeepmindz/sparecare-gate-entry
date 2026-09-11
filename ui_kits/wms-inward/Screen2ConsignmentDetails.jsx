const {ScreenHeader,Field,SelectInput,WorkflowChecklist,ActionBar,HandheldFrame,Button,Icon}=window.SpareCareDesignSystem_556483;

const PRODUCT_CATS=['Spare Parts','Lubricants','Accessories','Glass / Windscreen','Consumables','Others'];
const SUPPLIER_CATS=['OEM','Manufacturer','Local Vendor','Other'];

function Screen2ConsignmentDetails({state={},set=()=>{},steps,onToggle,onNext,onBack,genOptions=[],frameProps={}}){
  return (
    <HandheldFrame {...frameProps}>
      <ScreenHeader title="Enter Consignment Details" onBack={onBack}/>
      <div style={{padding:'14px var(--handheld-safe)',overflow:'auto',flex:1}}>
        <Field label="Gate Entry Number" required hint="Selected from gate entries already created.">
          <SelectInput placeholder="Select GEN" options={genOptions} value={state.gen} onChange={e=>set('gen',e.target.value)}/>
        </Field>
        <Field label="Product Category" hint="Selected manually; not derived from the supplier.">
          <SelectInput placeholder="Select Product Category" options={PRODUCT_CATS} value={state.productCat} onChange={e=>set('productCat',e.target.value)}/>
        </Field>
        <Field label="Supplier Category" hint="Derived from the supplier record where the supplier is known.">
          <SelectInput placeholder="Select Supplier Category" options={SUPPLIER_CATS} value={state.supplierCat} onChange={e=>set('supplierCat',e.target.value)}/>
        </Field>
        <Field label="Supplier">
          <SelectInput placeholder="Select Supplier" options={window.SC_SUPPLIERS||[]} value={state.supplier} onChange={e=>set('supplier',e.target.value)}/>
        </Field>
        <Field label="Primary Document Type">
          <SelectInput placeholder="Select Primary Document Type" options={window.SC_DOCS||[]} value={state.doc} onChange={e=>set('doc',e.target.value)}/>
        </Field>
        <Field label="Courier Type">
          <SelectInput placeholder="Select the Courier Type" options={window.SC_COURIER||[]} value={state.courier} onChange={e=>set('courier',e.target.value)}/>
        </Field>
        <div style={{marginTop:'var(--sp-3)'}}>
          <WorkflowChecklist steps={steps} onToggle={onToggle}/>
        </div>
      </div>
      <ActionBar>
        <Button variant="quiet" block onClick={onBack}>Back</Button>
        <Button variant="accent" block onClick={onNext} iconRight={<Icon name="chevron-right" size={16}/>}>Next</Button>
      </ActionBar>
    </HandheldFrame>
  );
}
Object.assign(window,{Screen2ConsignmentDetails,SC_PRODUCT_CATS:PRODUCT_CATS,SC_SUPPLIER_CATS:SUPPLIER_CATS});
