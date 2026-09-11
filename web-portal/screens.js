/* The screen manifest. Adding a screen later is one entry here plus one file in screens/. */
window.SC_PORTAL = {
  org: 'Deepmindz Innovations Pvt Ltd',
  client: 'SpareCare',
  title: 'WMS Inward Wireframes',
  subtitle: 'Gate Entry to Unload Exceptions',
  version: 'v1',
  backLabel: '\u2190 Back to SpareCare overview',
  backHref: '#',
  groups: [
    {
      code: 'IN-A', name: 'GATE ENTRY & CONSIGNMENT',
      items: [
        {idx:'01', id:'screen-1', ref:'Screen 1', name:'Gate Entry (Create GEN)', fr:'FR-001', file:'screens/screen-1-gate-entry.html', modes:true},
        {idx:'02', id:'screen-2', ref:'Screen 2', name:'Consignment Details & Workflow', fr:'FR-002', file:'screens/screen-2-consignment-details.html', modes:true}
      ]
    },
    {
      code: 'IN-B', name: 'OPERATIONS',
      items: [
        {idx:'03', id:'screen-3', ref:'Screen 3', name:'Inward Operations Dashboard', fr:'FR-003', file:'screens/screen-3-inward-dashboard.html', modes:true}
      ]
    },
    {
      code: 'IN-C', name: 'RECEIPT & UNLOAD',
      items: [
        {idx:'04', id:'screen-4a', ref:'Screen 4a', name:'Receipt Details — invoice capture', fr:'FR-004', file:'screens/screen-4a-receipt-details.html', modes:true},
        {idx:'05', id:'screen-4b', ref:'Screen 4b', name:'Transporter details & invoice summary', fr:'FR-004', file:'screens/screen-4b-transporter-details.html', modes:true},
        {idx:'06', id:'screen-5a', ref:'Screen 5A', name:'Truck unload initiation & GEN selection', fr:'FR-005', file:'screens/screen-5a-unload-initiation.html', modes:true},
        {idx:'07', id:'screen-5b', ref:'Screen 5b', name:'Check transporter details', fr:'FR-005', file:'screens/screen-5b-transporter-check.html', modes:true},
        {idx:'08', id:'screen-6a', ref:'Screen 6a', name:'Box scanning & unload progress', fr:'FR-006', file:'screens/screen-6a-box-scanning.html', modes:true},
        {idx:'09', id:'screen-6b', ref:'Screen 6b', name:'Box condition assessment', fr:'FR-006', file:'screens/screen-6b-box-condition.html', modes:true},
        {idx:'10', id:'screen-6c', ref:'Screen 6c', name:'Check variance', fr:'FR-006', file:'screens/screen-6c-check-variance.html', modes:true}
      ]
    },
    {
      code: 'IN-D', name: 'UNLOAD EXCEPTIONS',
      items: [
        {idx:'11', id:'screen-6d', ref:'Screen 6d', name:'Unload without shipment document', fr:'FR-007', file:'screens/screen-6d-no-shipment-doc.html', modes:true},
        {idx:'12', id:'screen-6e', ref:'Screen 6e', name:'Box condition \u2014 no shipment document', fr:'FR-007', file:'screens/screen-6e-box-condition-no-doc.html', modes:true},
        {idx:'13', id:'screen-6f', ref:'Screen 6f', name:'Counter approach \u2014 boxes not scannable', fr:'FR-007', file:'screens/screen-6f-counter-unload.html', modes:true},
        {idx:'14', id:'screen-6g', ref:'Screen 6g', name:'Print box stickers', fr:'FR-008', file:'screens/screen-6g-print-stickers.html', modes:true},
        {idx:'15', id:'screen-6h', ref:'Screen 6h', name:'Box condition \u2014 printed sticker', fr:'FR-008', file:'screens/screen-6h-box-condition-sticker.html', modes:true}
      ]
    },
    {
      code: 'IN-E', name: 'REFERENCE',
      items: [
        {idx:'', id:'design-system-guide', ref:'', name:'SpareCare Design System guide', fr:'Brand v1', file:'screens/design-system-guide.html', modes:false},
        {idx:'', id:'consolidated', ref:'', name:'Consolidated unloading view', fr:'\u00a79.6', file:'screens/consolidated-unloading-view.html', modes:false},
        {idx:'', id:'prototype', ref:'', name:'End-to-end click-through prototype', fr:'FR-001 \u2192 FR-006', file:'screens/prototype.html', modes:false},
        {idx:'', id:'open-issues', ref:'', name:'Open issues on these screens', fr:'\u00a744', file:'screens/open-issues.html', modes:false}
      ]
    }
  ]
};
