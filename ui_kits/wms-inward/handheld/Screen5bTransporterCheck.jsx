const {ScreenHeader,Field,TextInput,SelectInput,DetailRow,ActionBar,Button,Icon,InfoNote,CameraButton}=window.SpareCareDesignSystem_556483;
const say=d=>window.dispatchEvent(new CustomEvent('sc:not-drawn',{detail:d}));

function Screen5bTransporterCheck({state={},set=()=>{},plateCaptured=false,onCapturePlate,onNext,onBack}){
  return (
    <React.Fragment>
      <ScreenHeader title="Check Transporter Details" onBack={onBack}/>
      <div style={{padding:'12px var(--handheld-safe) 16px'}}>
        <div style={{background:'var(--surface-card)',border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',padding:'4px 12px',marginBottom:'12px'}}>
          <DetailRow icon="file-text" label="Gate Entry Number" value="GEN-000845" mono/>
          <DetailRow icon="building-2" label="Supplier" value="ABC Supplies Pvt. Ltd." last/>
        </div>

        <div style={{marginBottom:'12px'}}>
          <InfoNote>Pre-filled from Receipt Details. Everything here is editable \u2014 trucks get changed en route and the vehicle at the dock may not be the one on the paperwork.</InfoNote>
        </div>

        <Field label="Name of the Transporter">
          <SelectInput placeholder="Select transporter" options={['SpeedTrack Logistics','Gati Express','VRL Logistics','Own Vehicle']} value={state.transporter} onChange={e=>set('transporter',e.target.value)}/>
        </Field>
        <Field label="Name of the Driver">
          <TextInput placeholder="Enter driver name" value={state.driver||''} onChange={e=>set('driver',e.target.value)}/>
        </Field>
        <Field label="Driver Contact Number"
          adjacent={<button type="button" aria-label="Call driver"
            onClick={()=>say({title:'Call the driver',body:'The FRD places a phone control beside the driver number so the operator can call from the terminal. Whether the call is placed by the device dialler, a softphone or a masked number is not specified.',ref:'\u00a78.4'})}
            style={{width:'var(--hit-min)',height:'var(--hit-min)',display:'inline-flex',alignItems:'center',justifyContent:'center',border:'1px solid var(--border-field)',borderRadius:'var(--radius-field)',background:'var(--surface-card)',cursor:'pointer',color:'var(--sc-teal-deep)'}}><Icon name="phone" size={18}/></button>}>
          <TextInput placeholder="98xxx xxxxx" value={state.driverPhone||''} onChange={e=>set('driverPhone',e.target.value)}/>
        </Field>

        <div style={{background:'var(--surface-card)',border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',padding:'12px',marginBottom:'12px'}}>
          <Field label="Truck / Vehicle No. Reported" required
            hint="As physically observed at the gate. May differ from the GR document."
            adjacent={<CameraButton onClick={onCapturePlate} label="Photograph the number plate"/>}>
            <TextInput placeholder="KA01AB1234" mono value={state.vehicleActual||''} onChange={e=>set('vehicleActual',e.target.value)}/>
          </Field>
          <div style={{display:'flex',alignItems:'center',gap:'9px',padding:'9px 11px',borderRadius:'var(--radius-field)',background:plateCaptured?'var(--status-ok-bg)':'var(--surface-sunken)'}}>
            <Icon name={plateCaptured?'circle-check':'camera'} size={16} color={plateCaptured?'var(--status-ok)':'var(--sc-teal-deep)'}/>
            <span style={{font:'var(--type-caption)',color:plateCaptured?'var(--status-ok)':'var(--sc-teal-deep)',flex:1}}>
              {plateCaptured?'Number plate photographed \u2014 evidence of the vehicle actually present.':'Photograph the number plate as evidence of the vehicle actually present.'}
            </span>
          </div>
          {state.vehicleGr&&state.vehicleActual&&state.vehicleGr!==state.vehicleActual&&
            <div style={{marginTop:'10px'}}><InfoNote tone="warn">Reported vehicle differs from the GR document ({state.vehicleGr}). The truck was changed en route \u2014 both numbers are kept.</InfoNote></div>}
        </div>
      </div>
      <ActionBar style={{position:'sticky',bottom:0}}>
        <Button variant="quiet" block onClick={onBack}>Back</Button>
        <Button variant="accent" block onClick={onNext} iconRight={<Icon name="scan-line" size={15}/>}>Start Unloading</Button>
      </ActionBar>
    </React.Fragment>
  );
}
Object.assign(window,{Screen5bTransporterCheck});
