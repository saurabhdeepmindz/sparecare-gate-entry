const {ScreenHeader,Field,TextInput,SelectInput,DetailRow,Accordion,ActionBar,Button,Icon,InfoNote,Tag,QueueTable}=window.SpareCareDesignSystem_556483;

const DOCS=['GR / LR (Goods Receipt / Lorry Receipt)','Tax Invoice','Challan','Ship List','Delivery Challan'];

function Screen4aReceipt({state={},set=()=>{},invoices=[],openInvoice=true,onToggleInvoice,onAddNext,onNext,onBack}){
  const total=invoices.reduce((s,i)=>s+(i.amountValue||0),0);
  return (
    <React.Fragment>
      <ScreenHeader title="Receipt Details" onBack={onBack}/>
      <div style={{padding:'12px var(--handheld-safe) 16px'}}>
        <div style={{background:'var(--surface-card)',border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',padding:'4px 12px',marginBottom:'12px'}}>
          <DetailRow icon="file-text" label="Gate Entry Number" value="GEN-000845" mono/>
          <DetailRow icon="calendar-clock" label="GEN Date" value="12 Aug 2026" last/>
        </div>

        <Field label="Primary Document Type" required>
          <SelectInput placeholder="Select Primary Document Type" options={DOCS} value={state.docType} onChange={e=>set('docType',e.target.value)}/>
        </Field>
        <Field label="Document Number">
          <TextInput placeholder="LR / Invoice / GRN number" mono value={state.docNo||''} onChange={e=>set('docNo',e.target.value)}/>
        </Field>
        <Field label="Document Date">
          <TextInput placeholder="DD/MM/YYYY" value={state.docDate||''} onChange={e=>set('docDate',e.target.value)}/>
        </Field>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0 12px'}}>
          <Field label="No. of Boxes in GEN" required hint="Expected count for unloading.">
            <TextInput placeholder="0" value={state.boxes||''} onChange={e=>set('boxes',e.target.value)}/>
          </Field>
          <Field label="No. of Invoices in GEN">
            <TextInput placeholder="0" value={state.invCount||''} onChange={e=>set('invCount',e.target.value)}/>
          </Field>
        </div>

        <div style={{marginBottom:'12px'}}>
          <InfoNote>No. of Boxes in GEN is the figure unloading is reconciled against. The count taken at the gate is indicative only.</InfoNote>
        </div>

        <Accordion title="Capture Invoice Details" open={openInvoice} onToggle={onToggleInvoice}
          badge={invoices.length?<Tag tone="info" dot={false}>{invoices.length} added</Tag>:null} style={{marginBottom:'12px'}}>
          <Field label="Invoice Number">
            <TextInput placeholder="INV1004" mono value={state.invNo||''} onChange={e=>set('invNo',e.target.value)}/>
          </Field>
          <Field label="Invoice Date">
            <TextInput placeholder="DD/MM/YYYY" value={state.invDate||''} onChange={e=>set('invDate',e.target.value)}/>
          </Field>
          <Field label="Total Invoice Amount">
            <TextInput placeholder="0.00" value={state.invAmt||''} onChange={e=>set('invAmt',e.target.value)}/>
          </Field>
          <Button variant="secondary" size="md" block onClick={onAddNext} iconLeft={<Icon name="plus" size={15}/>}>Add Next</Button>
        </Accordion>

        <div style={{background:'var(--surface-card)',border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',padding:'12px'}}>
          <div style={{font:'var(--type-label)',color:'var(--text-heading)',marginBottom:'8px'}}>Details of the Invoices Added</div>
          <QueueTable
            columns={[{key:'no',label:'Invoice No.',mono:true},{key:'date',label:'Date'},{key:'amount',label:'Amount',align:'right'},{key:'received',label:'Recd.',align:'center'}]}
            rows={invoices} minRows={0} style={{marginBottom:0}}/>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',paddingTop:'9px',marginTop:'2px',borderTop:'1.5px solid var(--border-field)'}}>
            <span style={{font:'var(--type-label)',color:'var(--text-body)'}}>Total</span>
            <span style={{fontFamily:'var(--font-mono)',fontWeight:'var(--fw-semibold)',fontSize:'var(--fs-body-sm)',color:'var(--sc-teal-deep)'}}>{'\u20B9 '+total.toLocaleString('en-IN')}</span>
          </div>
          <p style={{margin:'8px 0 0',font:'var(--type-caption)',color:'var(--sc-grey-500)',lineHeight:1.45}}>The summary table renders once, here on the receipt record.</p>
        </div>
      </div>
      <ActionBar style={{position:'sticky',bottom:0}}>
        <Button variant="quiet" block onClick={onBack} iconLeft={<Icon name="save" size={15}/>}>Save</Button>
        <Button variant="accent" block onClick={onNext} iconRight={<Icon name="chevron-right" size={15}/>}>Next</Button>
      </ActionBar>
    </React.Fragment>
  );
}
Object.assign(window,{Screen4aReceipt});
