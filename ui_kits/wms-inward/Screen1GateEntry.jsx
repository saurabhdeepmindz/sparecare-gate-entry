const {ScreenHeader,Field,TextInput,SelectInput,CameraButton,GenBanner,ActionBar,HandheldFrame,InfoNote,Button,Icon}=window.SpareCareDesignSystem_556483;

const COURIER=['Transport','Courier','Own Vehicle','Individual (External Person)','Individual (Internal Person)'];
const DOCS=['GRN','Tax Invoice','Challan','Ship List','Delivery Challan'];
const NATURE=['Purchase','Branch transfer in','Sales return','Workshop / in-house return','Job work return','Third party purchase'];
const SUPPLIERS=['ABC Supplies Pvt. Ltd.','XYZ Auto Components','Bansal Auto Spares'];
const DEPTS=['Spares Store','Workshop','Body Shop','Accounts'];

function Screen1GateEntry({state={},set=()=>{},onNext,onCancel,gen,frameProps={}}){
  return (
    <HandheldFrame {...frameProps}>
      <ScreenHeader title="Create GEN" onBack={onCancel}/>
      <div style={{padding:'14px var(--handheld-safe)',overflow:'auto',flex:1}}>
        <Field label="Date & Time of Receipt" hint="Captured by the system. Not editable.">
          <TextInput readOnly value="12 Aug 2026, 09:40" mono/>
        </Field>
        <Field label="Name of the person" required>
          <TextInput placeholder="Enter Person's Name" value={state.person||''} onChange={e=>set('person',e.target.value)}/>
        </Field>
        <Field label="Contact Number" required>
          <TextInput placeholder="Enter the contact Number" value={state.contact||''} onChange={e=>set('contact',e.target.value)}/>
        </Field>
        <Field label="Where From">
          <SelectInput placeholder="Supplier Name" options={SUPPLIERS} value={state.supplier} onChange={e=>set('supplier',e.target.value)}/>
        </Field>
        <Field label="For Whom">
          <SelectInput placeholder="Department Name" options={DEPTS} value={state.dept} onChange={e=>set('dept',e.target.value)}/>
        </Field>
        <Field label="Nature of Inward Transaction">
          <SelectInput placeholder="Select the Nature of Transaction" options={NATURE} value={state.nature} onChange={e=>set('nature',e.target.value)}/>
        </Field>
        <Field label="Primary Document Type" required adjacent={<CameraButton/>}>
          <SelectInput placeholder="Primary Document Type" options={DOCS} value={state.doc} onChange={e=>set('doc',e.target.value)}/>
        </Field>
        <Field label="Courier Type" required>
          <SelectInput placeholder="Select the Courier Type" options={COURIER} value={state.courier} onChange={e=>set('courier',e.target.value)}/>
        </Field>
        <Field label="No. of Boxes" hint="Indicative only. Not the reconciliation baseline.">
          <TextInput placeholder="Approximate count at gate" value={state.boxes||''} onChange={e=>set('boxes',e.target.value)}/>
        </Field>
        {gen&&<div style={{marginTop:'var(--sp-1)'}}><GenBanner gen={gen} footnote="Print slip or share reference"/></div>}
      </div>
      <ActionBar>
        <Button variant="quiet" block onClick={onCancel}>Cancel</Button>
        <Button variant="accent" block onClick={onNext} iconRight={<Icon name="chevron-right" size={16}/>}>Next</Button>
      </ActionBar>
    </HandheldFrame>
  );
}
Object.assign(window,{Screen1GateEntry,SC_COURIER:COURIER,SC_DOCS:DOCS,SC_NATURE:NATURE,SC_SUPPLIERS:SUPPLIERS,SC_DEPTS:DEPTS});
