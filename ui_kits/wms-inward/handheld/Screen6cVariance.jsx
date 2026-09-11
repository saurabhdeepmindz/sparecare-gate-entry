const {ScreenHeader,DetailRow,ActionBar,Button,Icon,InfoNote,QueueTable,Tag,ProgressBar}=window.SpareCareDesignSystem_556483;
const say=d=>window.dispatchEvent(new CustomEvent('sc:not-drawn',{detail:d}));

function Panel({title,action,children}){
  return (
    <div style={{background:'var(--surface-card)',border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',padding:'12px',marginBottom:'12px'}}>
      {(title||action)&&<div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'10px',marginBottom:'9px'}}>
        {title&&<span style={{font:'var(--type-label)',color:'var(--text-heading)'}}>{title}</span>}
        {action}
      </div>}
      {children}
    </div>
  );
}

function VarianceRow({label,doc,actual,last}){
  const v=actual-doc;
  const tone=v===0?'var(--status-ok)':v<0?'var(--status-error)':'var(--status-warn)';
  return (
    <tr style={{background:'var(--surface-card)'}}>
      <td style={{font:'var(--type-caption)',color:'var(--text-body)',padding:'8px',borderBottom:last?'none':'1px solid var(--border-soft)'}}>{label}</td>
      <td style={{font:'var(--type-data)',color:'var(--text-body)',textAlign:'right',padding:'8px',borderBottom:last?'none':'1px solid var(--border-soft)'}}>{doc}</td>
      <td style={{font:'var(--type-data)',color:'var(--text-body)',textAlign:'right',padding:'8px',borderBottom:last?'none':'1px solid var(--border-soft)'}}>{actual}</td>
      <td style={{font:'var(--type-data)',fontWeight:'var(--fw-semibold)',color:tone,textAlign:'right',padding:'8px',borderBottom:last?'none':'1px solid var(--border-soft)'}}>{v>0?'+'+v:v}</td>
    </tr>
  );
}

function Screen6cVariance({expectedBoxes=50,actualBoxes=48,expectedUnits=1240,quality=[],exceptions=2,onBack,onPrint,onConfirm}){
  const totalQuality=quality.reduce((s,q)=>s+q.count,0);
  const complete=actualBoxes>=expectedBoxes;
  return (
    <React.Fragment>
      <ScreenHeader title="Check Variance" onBack={onBack}/>
      <div style={{padding:'12px var(--handheld-safe) 16px'}}>
        <div style={{background:'var(--surface-card)',border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',padding:'4px 12px',marginBottom:'12px'}}>
          <DetailRow icon="file-text" label="Gate Entry Number" value="GEN-000845" mono/>
          <DetailRow icon="building-2" label="Supplier" value="ABC Supplies Pvt. Ltd." last/>
        </div>

        <div style={{marginBottom:'12px'}}>
          <InfoNote tone={complete?'info':'warn'}>
            {complete
              ? 'Unload complete. All expected boxes accounted for.'
              : 'Unload closed with '+(expectedBoxes-actualBoxes)+' boxes short of the expected count. The shortfall is recorded against this GEN.'}
          </InfoNote>
        </div>

        <Panel title="Quantity Variance">
          <table style={{width:'100%',borderCollapse:'collapse',tableLayout:'fixed'}}>
            <thead><tr>
              {['','As Per Document','Actual','Variance'].map((h,i)=>(
                <th key={i} style={{background:'var(--surface-inverse)',color:'var(--text-on-dark)',font:'var(--type-caption)',fontWeight:'var(--fw-semibold)',textAlign:i?'right':'left',padding:'7px 8px'}}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              <VarianceRow label="Boxes" doc={expectedBoxes} actual={actualBoxes}/>
              <VarianceRow label="Units (from document)" doc={expectedUnits} actual={expectedUnits} last/>
            </tbody>
          </table>
          <p style={{margin:'9px 0 0',font:'var(--type-caption)',color:'var(--sc-grey-500)',lineHeight:1.45}}>Units are taken from document data, not from physical counting. Unit-level verification happens at Consignment Check.</p>
        </Panel>

        <Panel title="Quality Variance">
          <QueueTable
            columns={[{key:'label',label:'Qualitative Aspect'},{key:'count',label:'No. of Boxes',align:'right'}]}
            rows={quality} minRows={0} style={{marginBottom:0}}/>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',paddingTop:'9px',marginTop:'2px',borderTop:'1.5px solid var(--border-field)'}}>
            <span style={{font:'var(--type-label)',color:'var(--text-body)'}}>Total</span>
            <span style={{fontFamily:'var(--font-mono)',fontWeight:'var(--fw-semibold)',fontSize:'var(--fs-body-sm)',color:'var(--sc-teal-deep)'}}>{totalQuality}</span>
          </div>
        </Panel>

        <Panel title="Unload Completion">
          <ProgressBar label="Boxes received" value={actualBoxes} total={expectedBoxes}/>
          <div style={{display:'flex',gap:'8px',flexWrap:'wrap',marginTop:'10px'}}>
            <Tag tone={complete?'ok':'low'}>{complete?'Unload complete':'Closed with shortfall'}</Tag>
            <Tag tone={exceptions?'out':'ok'} dot={false}>{exceptions} boxes marked as exceptions</Tag>
          </div>
          <p style={{margin:'9px 0 0',font:'var(--type-caption)',color:'var(--sc-grey-500)',lineHeight:1.45}}>Open delivery actions for the exception boxes have been enabled and handled.</p>
        </Panel>

        <Panel title="Document-wise Breakdown">
          <QueueTable
            columns={[{key:'doc',label:'Invoice',mono:true},{key:'expected',label:'Expected',align:'right'},{key:'received',label:'Received',align:'right'},{key:'variance',label:'Variance',align:'right'}]}
            rows={[
              {doc:'INV1001',expected:'18',received:'18',variance:'0'},
              {doc:'INV1002',expected:'20',received:'19',variance:'\u22121'},
              {doc:'INV1003',expected:'12',received:'11',variance:'\u22121'}
            ]} minRows={0} style={{marginBottom:0}}/>
        </Panel>
      </div>
      <ActionBar style={{position:'sticky',bottom:0}}>
        <Button variant="quiet" block iconLeft={<Icon name="printer" size={15}/>}
          onClick={onPrint||(()=>say({title:'Print Summary',body:'FR-006.17 requires a printable record of the unloading session covering quantity variance, document-wise breakdown, quality variance and the exception summary. The layout of that printed record, and whether it prints from the terminal or a dock printer, are not specified.',ref:'FR-006.17'}))}>Print Summary</Button>
        <Button variant="accent" block iconRight={<Icon name="chevron-right" size={15}/>}
          onClick={onConfirm||(()=>say({kind:'next',title:'Consignment Check',body:'With unloading closed, the consignment moves to Consignment Check, where cartons are opened and unit-level quantities are verified. FR-006.18 defers all unit counting to that stage because the transport vehicle cannot be held while every carton is opened. Screens 7a onward are in the next batch.',ref:'FR-006.18, \u00a712'}))}>Proceed to Check</Button>
      </ActionBar>
    </React.Fragment>
  );
}
Object.assign(window,{Screen6cVariance});
