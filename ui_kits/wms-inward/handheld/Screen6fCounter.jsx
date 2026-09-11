const {ScreenHeader,DetailRow,ActionBar,Button,Icon,InfoNote,QueueTable}=window.SpareCareDesignSystem_556483;

const say=(detail)=>window.dispatchEvent(new CustomEvent('sc:not-drawn',{detail}));

function Screen6fCounter({count=18,expected=28,onIncrement,rows=[],onAddNotOk,onRowTap,onSave,onFinish,onBack}){
  const remaining=Math.max(expected-count,0);
  const add=onAddNotOk||(()=>say({kind:'flow',title:'Add Not OK Box',
    body:'FR-007.9 raises an exception against a temporary box reference without scanning. The system issues the next sequential reference and opens the standard condition flow \u2014 Condition, Open Delivery, Photo, Remarks \u2014 which is Screen 6e. The format of the temporary reference under the counter approach is not stated; the artwork shows BOX-001 here and BX-nnnn on the sticker approach.',
    ref:'FR-007.9 \u00b7 OI-081'}));
  const finish=onFinish||(()=>say({kind:'next',title:'Finish Unload',
    body:'FR-007.11 commits the session. Every box counted and every exception raised is carried forward to Consignment Check as the received population for this GEN. Under the counter approach the counted boxes have no individual identity, so what Consignment Check receives is a total plus a short list of exception references.',
    ref:'FR-007.11 \u00b7 FR-007.10'}));
  const save=onSave||(()=>say({kind:'info',title:'Session saved',body:'FR-006.11 persists the running count and every exception raised, and allows the operator to resume from the same state.',ref:'FR-006.11'}));
  return (
    <React.Fragment>
      <ScreenHeader title="Unload Truck" onBack={onBack} right={<Icon name="refresh-cw" size={17} color="var(--sc-teal)"/>}/>
      <div style={{padding:'12px var(--handheld-safe) 16px'}}>
        <div style={{marginBottom:'12px'}}>
          <InfoNote tone="warn">No shipment details and boxes are not scannable.</InfoNote>
        </div>

        <div style={{background:'var(--surface-card)',border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',padding:'4px 12px',marginBottom:'12px'}}>
          <DetailRow icon="file-text" label="Gate Entry Number" value="GEN-000853" mono/>
          <DetailRow icon="building-2" label="Supplier" value="ABC Supplies Pvt. Ltd." last/>
        </div>

        <window.UnloadApproachPanel active="counter">
          <div style={{display:'flex',alignItems:'stretch',gap:'12px',background:'var(--surface-sunken,var(--anno-canvas))',border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',padding:'12px'}}>
            <div style={{flex:1,minWidth:0,display:'flex',flexDirection:'column',justifyContent:'center',background:'var(--surface-card)',border:'1px solid var(--border-field)',borderRadius:'var(--radius-field)',padding:'10px 14px'}}>
              <div style={{font:'var(--type-caption)',color:'var(--sc-grey-500)'}}>Boxes unloaded</div>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'38px',lineHeight:1.05,fontWeight:'var(--fw-semibold)',color:'var(--text-data)'}}>{count}</div>
            </div>
            <button type="button" onClick={onIncrement} aria-label="Increment box count"
              style={{flex:'0 0 76px',minHeight:'76px',border:'1px solid var(--sc-teal)',borderRadius:'var(--radius-field)',background:'var(--surface-card)',color:'var(--sc-teal-deep)',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Icon name="plus" size={30} color="var(--sc-teal-deep)"/>
            </button>
          </div>
          <div style={{display:'flex',justifyContent:'space-between',gap:'10px',marginTop:'9px',font:'var(--type-caption)',color:'var(--sc-grey-500)'}}>
            <span>Expected (Screen 4a) <strong style={{fontFamily:'var(--font-mono)',color:'var(--text-data)'}}>{expected}</strong></span>
            <span>Remaining <strong style={{fontFamily:'var(--font-mono)',color:'var(--text-data)'}}>{remaining}</strong></span>
          </div>
        </window.UnloadApproachPanel>

        <div style={{background:'var(--surface-card)',border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',padding:'12px',marginBottom:'12px'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'10px',marginBottom:'9px'}}>
            <span style={{font:'var(--type-label)',color:'var(--text-heading)'}}>Box Quality Update</span>
            <Button variant="secondary" size="sm" onClick={add} iconLeft={<Icon name="plus" size={14}/>}>Add Not OK Box</Button>
          </div>
          <QueueTable
            columns={[{key:'box',label:'Box Ref. (Temporary)',mono:true},{key:'quality',label:'Quality'},{key:'status',label:'Status',align:'center'}]}
            rows={rows} minRows={0} onRowClick={onRowTap} style={{marginBottom:0}}/>
          <p style={{margin:'8px 0 0',font:'var(--type-caption)',color:'var(--sc-grey-500)',lineHeight:1.45}}>References are issued by the system so an exception can be tracked on a box the supplier never identified.</p>
        </div>

        <InfoNote tone="info">Each exception opens the same condition flow with Condition, Open Delivery, Photo and Remarks.</InfoNote>
      </div>
      <ActionBar style={{position:'sticky',bottom:0}}>
        <Button variant="quiet" block onClick={save} iconLeft={<Icon name="save" size={15}/>}>Save</Button>
        <Button variant="accent" block onClick={finish} iconLeft={<Icon name="circle-check" size={15}/>}>Finish Unload</Button>
      </ActionBar>
    </React.Fragment>
  );
}
Object.assign(window,{Screen6fCounter});
