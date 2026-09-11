const {ScreenHeader,DetailRow,ScanField,CounterStrip,ActionBar,Button,Icon,InfoNote,QueueTable}=window.SpareCareDesignSystem_556483;

function Panel({title,action,children,style}){
  return (
    <div style={{background:'var(--surface-card)',border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',padding:'12px',marginBottom:'12px',...style}}>
      {(title||action)&&<div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'10px',marginBottom:'9px'}}>
        {title&&<span style={{font:'var(--type-label)',color:'var(--text-heading)'}}>{title}</span>}
        {action}
      </div>}
      {children}
    </div>
  );
}

const say=(detail)=>window.dispatchEvent(new CustomEvent('sc:not-drawn',{detail}));

function Screen6dNoDoc({box='',setBox,onScan,onSubmit,rows=[],unloaded=18,expected=28,ok=14,notOk=4,onBoxTap,onSave,onVariance,onBack}){
  const remaining=Math.max(expected-unloaded,0);
  const variance=onVariance||(()=>say({kind:'next',title:'Check Variance \u2014 reduced mode',
    body:'FR-007.6 puts a Variance Summary (Box Number Wise) on this screen and a Check Variance action beneath it. In reduced mode there is no document to compare against, so the variance view carries only boxes unloaded against the expected box count from Receipt Details, plus the quality split. Whether that view is Screen 6c re-used with its document columns suppressed, or a screen of its own, is not stated.',
    ref:'FR-007.6 \u00b7 FR-006.27'}));
  const save=onSave||(()=>say({kind:'info',title:'Session saved',
    body:'FR-006.11 applies unchanged in reduced mode: every box processed, condition recorded, photograph captured and remark entered is persisted, and the operator resumes from the same state.',
    ref:'FR-006.11 \u00b7 FR-007.5'}));
  return (
    <React.Fragment>
      <ScreenHeader title="Unload Truck" onBack={onBack} right={<Icon name="refresh-cw" size={17} color="var(--sc-teal)"/>}/>
      <div style={{padding:'12px var(--handheld-safe) 16px'}}>
        <div style={{marginBottom:'12px'}}>
          <InfoNote tone="warn">Shipment document not available. Expected box list and ship-list comparison are suppressed for this GEN.</InfoNote>
        </div>

        <div style={{background:'var(--surface-card)',border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',padding:'4px 12px',marginBottom:'12px'}}>
          <DetailRow icon="file-text" label="Gate Entry Number" value="GEN-000851" mono/>
          <DetailRow icon="building-2" label="Supplier" value="ABC Supplies Pvt. Ltd." last/>
        </div>

        <Panel title="Scan / Enter Primary Box">
          <ScanField value={box} onChange={e=>setBox&&setBox(e.target.value)} onScan={onScan} placeholder="Scan primary box code"/>
          {onSubmit&&<div style={{display:'flex',gap:'8px',marginTop:'8px'}}>
            <Button variant="secondary" size="sm" block onClick={()=>onSubmit&&onSubmit('ok')}>Record as OK</Button>
            <Button variant="secondary" size="sm" block onClick={()=>onSubmit&&onSubmit('check')}>Record &amp; check condition</Button>
          </div>}
          <p style={{margin:'7px 0 0',font:'var(--type-caption)',color:'var(--sc-grey-500)',lineHeight:1.45}}>Scan each box as it is unloaded. Where the code is damaged or absent, key the part number printed on the carton instead.</p>
        </Panel>

        <div style={{font:'var(--type-label)',color:'var(--text-heading)',marginBottom:'8px'}}>Box Unloading <span style={{fontWeight:'var(--fw-regular)',color:'var(--sc-grey-500)'}}>(Box Number Wise)</span></div>
        <div style={{marginBottom:'12px'}}>
          <CounterStrip items={[
            {label:'Unloaded',value:unloaded},
            {label:'OK',value:ok,tone:'ok'},
            {label:'Not OK',value:notOk,tone:'bad'}
          ]}/>
        </div>

        <Panel>
          <QueueTable
            columns={[{key:'box',label:'Box No.',mono:true},{key:'quality',label:'Quality'},{key:'status',label:'Status',align:'center'}]}
            rows={rows} minRows={0} onRowClick={onBoxTap} style={{marginBottom:0}}/>
          <p style={{margin:'8px 0 0',font:'var(--type-caption)',color:'var(--sc-grey-500)'}}>Tap a box to update its condition.</p>
        </Panel>

        <Panel title="Variance Summary (Box Number Wise)">
          <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
            <div style={{flex:1}}>
              <div style={{font:'var(--type-caption)',color:'var(--sc-grey-500)'}}>Unloaded</div>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'21px',fontWeight:'var(--fw-semibold)',color:'var(--text-data)'}}>{unloaded}</div>
            </div>
            <div style={{width:'1px',alignSelf:'stretch',background:'var(--border-soft)'}}/>
            <div style={{flex:1}}>
              <div style={{font:'var(--type-caption)',color:'var(--sc-grey-500)'}}>Expected (Screen 4a)</div>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'21px',fontWeight:'var(--fw-semibold)',color:'var(--text-data)'}}>{expected}</div>
            </div>
            <div style={{width:'1px',alignSelf:'stretch',background:'var(--border-soft)'}}/>
            <div style={{flex:1}}>
              <div style={{font:'var(--type-caption)',color:'var(--sc-grey-500)'}}>Remaining</div>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'21px',fontWeight:'var(--fw-semibold)',color:remaining?'var(--status-warn-fg)':'var(--text-data)'}}>{remaining}</div>
            </div>
          </div>
          <p style={{margin:'9px 0 0',font:'var(--type-caption)',color:'var(--sc-grey-500)',lineHeight:1.45}}>Reconciled against No. of Boxes in GEN recorded at Receipt Details. The indicative count taken at the gate is not used.</p>
        </Panel>

        <InfoNote tone="info">Ordered against received is not reconciled here. With no document, the shortfall is established at Consignment Check once boxes are opened.</InfoNote>
      </div>
      <ActionBar style={{position:'sticky',bottom:0}}>
        <Button variant="quiet" block onClick={save} iconLeft={<Icon name="save" size={15}/>}>Save</Button>
        <Button variant="accent" block onClick={variance} iconLeft={<Icon name="scale" size={15}/>}>Check Variance</Button>
      </ActionBar>
    </React.Fragment>
  );
}
Object.assign(window,{Screen6dNoDoc});
