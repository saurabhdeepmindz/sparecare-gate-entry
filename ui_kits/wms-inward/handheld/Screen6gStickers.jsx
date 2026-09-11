const {ScreenHeader,DetailRow,TextInput,ActionBar,Button,Icon,InfoNote}=window.SpareCareDesignSystem_556483;

const say=(detail)=>window.dispatchEvent(new CustomEvent('sc:not-drawn',{detail}));

/* Wireframe stand-ins. The sticker carries a QR and a linear barcode per FR-008.4; neither
   symbology is drawn to spec here — these are placeholders for a real label template. */
function QrBlock({seed='',size=46}){
  const n=7,cells=[];
  for(let i=0;i<n*n;i++){
    const r=Math.floor(i/n),c=i%n;
    const finder=(r<3&&c<3)||(r<3&&c>n-4)||(r>n-4&&c<3);
    const h=(seed.charCodeAt(i%seed.length)||0)+i*37;
    cells.push(<span key={i} style={{background:finder?((r%2===1&&c%2===1)?'transparent':'var(--text-data)'):(h%2?'var(--text-data)':'transparent')}}/>);
  }
  return <div aria-hidden="true" style={{width:size+'px',height:size+'px',display:'grid',gridTemplateColumns:'repeat(7,1fr)',gridTemplateRows:'repeat(7,1fr)',gap:'1px',flex:'0 0 auto'}}>{cells}</div>;
}

function BarcodeBlock({seed='',height=22}){
  const bars=[];
  for(let i=0;i<26;i++){
    const h=(seed.charCodeAt(i%seed.length)||0)+i*13;
    bars.push(<span key={i} style={{width:(h%3?1:2)+'px',background:h%4?'var(--text-data)':'transparent'}}/>);
  }
  return <div aria-hidden="true" style={{display:'flex',gap:'1px',height:height+'px',alignItems:'stretch'}}>{bars}</div>;
}

function StickerTile({ref_}){
  return (
    <div style={{border:'1px dashed var(--border-field)',borderRadius:'var(--radius-field)',background:'var(--surface-card)',padding:'9px',display:'flex',flexDirection:'column',gap:'7px',alignItems:'center'}}>
      <div style={{fontFamily:'var(--font-mono)',fontWeight:'var(--fw-semibold)',fontSize:'var(--fs-body-sm)',color:'var(--text-data)'}}>{ref_}</div>
      <QrBlock seed={ref_}/>
      <BarcodeBlock seed={ref_}/>
    </div>
  );
}

function Screen6gStickers({total=20,setTotal,refs=[],onGenerate,onPrint,onBack}){
  const print=onPrint||(()=>say({kind:'next',title:'Print '+total+' Stickers',
    body:'FR-008.5 sends the full set to the connected label printer in a single action. Which printer, how it is paired with the handheld, and what happens when the print fails part-way through a roll are not specified. The operator then pastes one sticker per box and scans it back \u2014 Screen 6h.',
    ref:'FR-008.5 \u00b7 FR-008.6'}));
  const generate=onGenerate||(()=>say({kind:'info',title:'Generate references',
    body:'FR-008.3 issues a unique temporary reference per box in the format BX-nnnn, sequential within the GEN. Whether a reference can be re-issued after a misprint, and whether the sequence resets per GEN or runs per warehouse, is not stated.',
    ref:'FR-008.3'}));
  return (
    <React.Fragment>
      <ScreenHeader title="Print Box Stickers" onBack={onBack}/>
      <div style={{padding:'12px var(--handheld-safe) 16px'}}>
        <div style={{marginBottom:'12px'}}>
          <InfoNote tone="warn">No shipment details and boxes are not scannable.</InfoNote>
        </div>

        <div style={{background:'var(--surface-card)',border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',padding:'4px 12px',marginBottom:'12px'}}>
          <DetailRow icon="file-text" label="Gate Entry Number" value="GEN-000857" mono/>
          <DetailRow icon="building-2" label="Supplier" value="Ratan Auto Parts" last/>
        </div>

        <window.UnloadApproachPanel active="sticker"/>

        <div style={{background:'var(--surface-card)',border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',padding:'12px',marginBottom:'12px'}}>
          <div style={{font:'var(--type-label)',color:'var(--text-heading)',marginBottom:'8px'}}>Total Boxes to Print</div>
          <div style={{display:'flex',gap:'8px',alignItems:'center'}}>
            <TextInput type="number" mono value={total} onChange={e=>setTotal&&setTotal(Math.max(0,Math.min(99,Number(e.target.value)||0)))} style={{flex:1}}/>
            <Button variant="secondary" onClick={generate} iconLeft={<Icon name="refresh-cw" size={15}/>}>Generate</Button>
          </div>
          <p style={{margin:'7px 0 0',font:'var(--type-caption)',color:'var(--sc-grey-500)',lineHeight:1.45}}>Defaults to the box count recorded at gate entry. Editable, because the number on the truck is often not the number on the paper.</p>
        </div>

        <div style={{background:'var(--surface-card)',border:'1px solid var(--border-soft)',borderRadius:'var(--radius-field)',padding:'12px',marginBottom:'12px'}}>
          <div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between',marginBottom:'9px'}}>
            <span style={{font:'var(--type-label)',color:'var(--text-heading)'}}>Sticker Preview</span>
            <span style={{font:'var(--type-caption)',color:'var(--sc-grey-500)'}}>{refs.length} of {total}</span>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:'8px'}}>
            {refs.slice(0,9).map(r=><StickerTile key={r} ref_={r}/>)}
          </div>
          <p style={{margin:'9px 0 0',font:'var(--type-caption)',color:'var(--sc-grey-500)',lineHeight:1.45}}>Print and paste one sticker on each unloaded box. Each sticker carries the reference as text, a QR code and a linear barcode.</p>
        </div>

        <InfoNote tone="warn">Box ownership is unverified. With no ship list and no supplier code, the system cannot establish that a box on this vehicle belongs to this dealer. Ownership is confirmed at Consignment Check.</InfoNote>
      </div>
      <ActionBar style={{position:'sticky',bottom:0}}>
        <Button variant="quiet" block onClick={onBack}>Back</Button>
        <Button variant="accent" block onClick={print} iconLeft={<Icon name="printer" size={15}/>}>Print {total} Stickers</Button>
      </ActionBar>
    </React.Fragment>
  );
}
Object.assign(window,{Screen6gStickers});
