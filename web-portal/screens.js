/* The screen manifest. Adding a screen later is one entry here plus one file in screens/. */
window.SC_PORTAL = {
  org: 'Deepmindz Innovations Pvt Ltd',
  client: 'SpareCare',
  title: 'WMS Inward Wireframes',
  subtitle: 'Gate Entry to Unloading',
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
        {idx:'05', id:'screen-6a', ref:'Screen 6a', name:'Box scanning & unload progress', fr:'FR-006', file:'screens/screen-6a-box-scanning.html', modes:true},
        {idx:'06', id:'screen-6b', ref:'Screen 6b', name:'Box condition assessment', fr:'FR-006', file:'screens/screen-6b-box-condition.html', modes:true}
      ]
    },
    {
      code: 'IN-D', name: 'REFERENCE',
      items: [
        {idx:'', id:'prototype', ref:'', name:'Click-through prototype', fr:'FR-001 \u2192 FR-003', file:'screens/prototype.html', modes:false},
        {idx:'', id:'open-issues', ref:'', name:'Open issues on these screens', fr:'\u00a744', file:'screens/open-issues.html', modes:false}
      ]
    }
  ]
};
