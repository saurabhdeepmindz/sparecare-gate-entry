const {ScreenHeader,ConditionChips,PhotoCapture,ActionBar,Button,Icon,InfoNote,QueueTable,Tag}=window.SpareCareDesignSystem_556483;

const OPTIONS=[
  {id:'ok',label:'OK',icon:'circle-check',tone:'ok'},
  {id:'tampered',label:'Packing Tampered',icon:'triangle-alert',tone:'warn'},
  {id:'damaged',label:'Damaged',icon:'circle-x',tone:'bad'},
  {id:'scratch',label:'Visible Scratch',icon:'scan-line',tone:'warn'},
  {id:'nopack',label:'Without Packing',icon:'package-open',tone:'warn'},
  {id:'wrong',label:'Wrong Delivery',icon:'truck',tone:'bad'}
];

function Screen6bCondition({boxNo='BX-00012',selected=['damaged'],onToggle,openDelivery=true,setOpenDelivery,photo=true,onCapture,remarks='',setRemarks,recent=[],onSave,onCancel}){
  const notOk=selected.some(s=>s!=='ok');
  return (
    <React.Fragment>
      <ScreenHeader title="Update Box Condition" onBack={onCancel}/>
      <div style={{padding:'12px var(--handheld-safe) 16px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'11px',background:'var(--surface-card)',border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',padding:'11px 12px',marginBottom:'12px'}}>
          <Icon name="package" size={24} color="var(--sc-teal-deep)"/>
          <div style={{minWidth:0,flex:1}}>
            <div style={{fontFamily:'var(--font-mono)',fontWeight:'var(--fw-semibold)',fontSize:'17px',color:'var(--text-data)'}}>{boxNo}</div>
            <div style={{font:'var(--type-caption)',color:'var(--sc-grey-500)'}}>Scanned box · 18 of 50</div>
          </div>
          <Tag tone={notOk?'out':'ok'}>{notOk?'Not OK':'OK'}</Tag>
        </div>

        <div style={{marginBottom:'12px'}}>
          <InfoNote tone="warn">Mismatch with shiplist. Choose Set Aside to return the box, or Add Document to justify accepting it.</InfoNote>
          <div style={{display:'flex',gap:'8px',marginTop:'8px'}}>
            <Button variant="secondary" size="sm" block>Set Aside</Button>
            <Button variant="secondary" size="sm" block>Add Document</Button>
          </div>
        </div>

        <div style={{font:'var(--type-label)',color:'var(--text-heading)',marginBottom:'8px'}}>Box Condition</div>
        <ConditionChips options={OPTIONS} selected={selected} onToggle={onToggle} style={{marginBottom:'12px'}}/>

        <div style={{display:'flex',alignItems:'center',gap:'10px',background:'var(--surface-card)',border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',padding:'11px 12px',marginBottom:'12px'}}>
          <div style={{flex:1,minWidth:0}}>
            <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
              <span style={{font:'var(--type-label)',color:'var(--text-body)'}}>Mark for Open Delivery</span>
              {notOk&&<Tag tone="ok" dot={false}>Recommended</Tag>}
            </div>
            <div style={{font:'var(--type-caption)',color:'var(--sc-grey-500)',marginTop:'2px'}}>Inspection in the presence of the driver.</div>
          </div>
          <button type="button" role="switch" aria-checked={openDelivery} onClick={()=>setOpenDelivery&&setOpenDelivery(!openDelivery)}
            style={{width:'46px',height:'26px',borderRadius:'13px',border:'none',cursor:'pointer',flex:'0 0 auto',padding:'3px',display:'flex',justifyContent:openDelivery?'flex-end':'flex-start',background:openDelivery?'var(--status-ok)':'var(--sc-chrome)',transition:'var(--transition-interactive)'}}>
            <span style={{width:'20px',height:'20px',borderRadius:'var(--r-round)',background:'#fff',display:'block'}}/>
          </button>
        </div>

        <PhotoCapture required={notOk} captured={photo} onCapture={onCapture} style={{marginBottom:'12px'}}/>

        <div style={{marginBottom:'12px'}}>
          <div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between',marginBottom:'6px'}}>
            <span style={{font:'var(--type-label)',color:'var(--text-body)'}}>Remarks <span style={{fontWeight:'var(--fw-regular)',color:'var(--sc-grey-500)'}}>(Optional)</span></span>
            <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--fs-micro)',color:'var(--sc-grey-500)'}}>{remarks.length}/250</span>
          </div>
          <textarea value={remarks} onChange={e=>setRemarks&&setRemarks(e.target.value.slice(0,250))} rows={2}
            placeholder="Corner crushed and side dented."
            style={{width:'100%',border:'1px solid var(--border-field)',borderRadius:'var(--radius-field)',padding:'10px 12px',fontFamily:'var(--font-body)',fontSize:'var(--fs-body-sm)',color:'var(--text-body)',background:'var(--surface-card)',outline:'none',resize:'vertical'}}/>
        </div>

        <div style={{background:'var(--surface-card)',border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',padding:'12px'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'9px'}}>
            <span style={{font:'var(--type-label)',color:'var(--text-heading)'}}>Recent Box Entries</span>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <QueueTable
            columns={[{key:'box',label:'Box No.',mono:true},{key:'quality',label:'Quality'},{key:'status',label:'Status',align:'center'},{key:'time',label:'Time',align:'right'}]}
            rows={recent} minRows={0} style={{marginBottom:0}}/>
        </div>
      </div>
      <ActionBar style={{position:'sticky',bottom:0}}>
        <Button variant="quiet" block onClick={onCancel}>Cancel</Button>
        <Button variant="accent" block onClick={onSave} disabled={notOk&&!photo} iconLeft={<Icon name="circle-check" size={15}/>}>Save Condition</Button>
      </ActionBar>
    </React.Fragment>
  );
}
Object.assign(window,{Screen6bCondition,SC_CONDITION_OPTIONS:OPTIONS});
