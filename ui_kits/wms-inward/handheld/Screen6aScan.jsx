const {ScreenHeader,DetailRow,ScanField,CounterStrip,ProgressBar,ActionBar,Button,Icon,InfoNote,QueueTable,Tag}=window.SpareCareDesignSystem_556483;

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

function Screen6aScan({box='',setBox,onScan,rows=[],unloaded=18,expected=50,ok=14,notOk=4,onBoxTap,onFinish,onSave,onBack}){
  return (
    <React.Fragment>
      <ScreenHeader title="Unload Truck" onBack={onBack} right={<Icon name="refresh-cw" size={17} color="var(--sc-teal)"/>}/>
      <div style={{padding:'12px var(--handheld-safe) 16px'}}>
        <div style={{background:'var(--surface-card)',border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',padding:'4px 12px',marginBottom:'12px'}}>
          <DetailRow icon="file-text" label="Gate Entry Number" value="GEN-000845" mono/>
          <DetailRow icon="building-2" label="Supplier" value="ABC Supplies Pvt. Ltd."/>
          <DetailRow icon="receipt" label="Document Number" value="LR-77120" mono last/>
        </div>

        <Panel title="Shipment Details (Shiplist)"
          action={<div style={{display:'flex',gap:'7px'}}>
            <Button variant="ghost" size="sm" onClick={()=>window.dispatchEvent(new CustomEvent('sc:not-drawn',{detail:{title:'Ship list viewer',body:'FR-006.12 requires a View action that opens the uploaded ship list, but the viewer itself is not specified \\u2014 neither its columns nor whether it is readable on a handheld. OI-030 records that a sample ship list is still to be shared so the structure of the uploaded data can be defined.',ref:'FR-006.12 · OI-030'}}))}>View</Button>
            <Button variant="secondary" size="sm" onClick={()=>window.dispatchEvent(new CustomEvent('sc:not-drawn',{detail:{title:'Replace ship list',body:'FR-006.12 allows a corrected or alternative ship list to be uploaded, and states that replacing it re-evaluates the expected box manifest. What happens to boxes already scanned against the previous manifest is not specified.',ref:'FR-006.12'}}))}>Replace</Button>
          </div>}>
          <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <Icon name="file-spreadsheet" size={20} color="var(--sc-teal-deep)"/>
            <div style={{minWidth:0}}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'var(--fs-caption)',color:'var(--text-data)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>shiplist_GEN000845.xlsx</div>
              <div style={{font:'var(--type-caption)',color:'var(--sc-grey-500)'}}>Uploaded 12 Aug 2026, 09:31</div>
            </div>
          </div>
        </Panel>

        <Panel title="Scan / Enter Box No.">
          <ScanField value={box} onChange={e=>setBox&&setBox(e.target.value)} onScan={onScan} placeholder="Scan box barcode"/>
          <p style={{margin:'7px 0 0',font:'var(--type-caption)',color:'var(--sc-grey-500)',lineHeight:1.45}}>Scan each box as it comes off the truck. Type the number if the label will not read.</p>
        </Panel>

        <div style={{marginBottom:'12px'}}>
          <CounterStrip items={[
            {label:'Unloaded',value:unloaded},
            {label:'Balance',value:expected-unloaded,tone:'warn'},
            {label:'OK',value:ok,tone:'ok'},
            {label:'Not OK',value:notOk,tone:'bad'}
          ]}/>
        </div>

        <Panel><ProgressBar label="Unload progress" value={unloaded} total={expected}/></Panel>

        <div style={{marginBottom:'12px'}}>
          <InfoNote tone="warn">BX-00019 is not on the uploaded ship list. Set it aside, or add a document to justify accepting it.</InfoNote>
        </div>

        <Panel title="Recent Box Entries" action={<Button variant="ghost" size="sm" onClick={()=>window.dispatchEvent(new CustomEvent('sc:not-drawn',{detail:{title:'Full session log',body:'FR-006.14 names a View All action opening the full log for the session. The log screen is not drawn \\u2014 its columns, filters and whether an entry can be corrected from it are unspecified.',ref:'FR-006.14'}}))}>View All</Button>}>
          <QueueTable
            columns={[{key:'box',label:'Box No.',mono:true},{key:'quality',label:'Quality'},{key:'status',label:'Status',align:'center'},{key:'time',label:'Time',align:'right'}]}
            rows={rows} minRows={0} onRowClick={onBoxTap} style={{marginBottom:0}}/>
          <p style={{margin:'8px 0 0',font:'var(--type-caption)',color:'var(--sc-grey-500)'}}>Tap a box to update its condition.</p>
        </Panel>
      </div>
      <ActionBar style={{position:'sticky',bottom:0}}>
        <Button variant="quiet" block onClick={onSave} iconLeft={<Icon name="save" size={15}/>}>Save</Button>
        <Button variant="accent" block onClick={onFinish} iconLeft={<Icon name="circle-check" size={15}/>}>Finish Unload</Button>
      </ActionBar>
    </React.Fragment>
  );
}
Object.assign(window,{Screen6aScan});
