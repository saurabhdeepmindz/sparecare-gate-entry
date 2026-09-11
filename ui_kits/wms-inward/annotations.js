/* Callout data for the Screens 1-3 wireframe sheet. Every entry carries the FRD
   requirement or section it derives from. Descriptions follow the FRD's own field
   reference wording; where the FRD records behaviour as undefined, tone is 'open'. */
window.SC_WMS_ANNO = {
  screen1: {
    label: 'Screen 1 — Create GEN',
    ref: 'FR-001',
    surface: 'Handheld + Web',
    markers: [
      {n:1,  x:101, y:2.5},
      {n:2,  x:-1,  y:11},
      {n:3,  x:-1,  y:20},
      {n:4,  x:-1,  y:28.5},
      {n:5,  x:101, y:37},
      {n:6,  x:101, y:45.5},
      {n:7,  x:-1,  y:54},
      {n:8,  x:101, y:62.5},
      {n:9,  x:-1,  y:71},
      {n:10, x:101, y:79.5},
      {n:11, x:24,  y:88.5},
      {n:12, x:-1,  y:99}
    ],
    items: [
      {n:1, label:'Create GEN', ref:'§4.1', control:'Screen header',
       description:'First step in the inward process. Captures minimum required information and generates the Gate Entry Number that is the master reference key for every subsequent inward step.'},
      {n:2, label:'Date & Time of Receipt', ref:'FR-001.9, .10', control:'System-generated display',
       description:'Picked up automatically at the moment the gate entry is created. Mandatory and not configurable — distinct from the dealer-configurable mandatory fields, so it is rendered read-only rather than as an input that can be left blank.'},
      {n:3, label:'Name of the Person', ref:'FR-001.16', control:'Text input',
       description:'Mandatory. The name of the truck driver only. Gate personnel are a separate role and are not recorded in this field.'},
      {n:4, label:'Contact Number', ref:'FR-001.17, .18', control:'Text input',
       description:'Mandatory. The truck driver\u2019s number, with no linkage to the supplier record. Supplier arrival notification derives from the supplier selected below, using the contact details held against that supplier in the master.'},
      {n:5, label:'Where From (Supplier Name)', ref:'§4.3', control:'Dropdown',
       description:'Optional. Selected from the pre-configured supplier master list. May be left blank here and completed at Screen 2 if unknown at the gate.'},
      {n:6, label:'For Whom (Department Name)', ref:'FR-001.19', control:'Dropdown',
       description:'Optional. Department or individual the consignment is intended for. Where populated, that party is notified on arrival.'},
      {n:7, label:'Nature of Inward Transaction', ref:'FR-001.11, FR-030.1', control:'Dropdown',
       description:'Six values: purchase, branch transfer in, sales return, workshop or in-house return, job work return, third party purchase. The reason the consignment is entering determines ownership, whether a payment is due, and what it is reconciled against.'},
      {n:8, label:'Primary Document Type', ref:'FR-001.5', control:'Dropdown + Camera',
       description:'Optional at the gate; may be completed at Screen 2. Acceptable types: GRN, Tax Invoice, Challan, Ship List, Delivery Challan, others as configured. The camera captures a document photograph and sits outside the field border.'},
      {n:9, label:'Courier Type', ref:'FR-001.20', control:'Dropdown',
       description:'Five values per the BRD: Transport, Courier, Own Vehicle, Individual (External Person), Individual (Internal Person). Configurable from master data. The previously recorded value Self-foot is withdrawn as an error.'},
      {n:10, label:'No. of Boxes', ref:'FR-001.21', control:'Number input', tone:'open',
       description:'Indicative only. A glance at the back of a truck, not a verified figure — it must not serve as the expected value against which unloading is reconciled. That baseline is the expected box count recorded at Receipt Details. OI-066: precedence between the three box counts is unstated.'},
      {n:11, label:'Cancel / Next', ref:'FR-001.6', control:'Buttons',
       description:'Next generates the GEN. Nothing entered on this screen becomes permanently locked — any field not captured here is editable and completable at Screen 2.'},
      {n:12, label:'Gate Entry Number', ref:'FR-001.8, .14', control:'System-generated banner', tone:'open',
       description:'Displayed prominently on creation and printable or shareable as a reference. OI-048: the generation logic is not yet defined — format, sequence, and whether the number is unique per business unit or across the business are to be confirmed.'}
    ]
  },
  screen2: {
    label: 'Screen 2 — Enter Consignment Details',
    ref: 'FR-002',
    surface: 'Handheld + Web',
    markers: [
      {n:1, x:101, y:2.5},
      {n:2, x:-1,  y:12},
      {n:3, x:101, y:22},
      {n:4, x:-1,  y:32},
      {n:5, x:101, y:42},
      {n:6, x:-1,  y:52},
      {n:7, x:101, y:61},
      {n:8, x:101, y:69},
      {n:9, x:-1,  y:82},
      {n:10,x:24,  y:98}
    ],
    items: [
      {n:1, label:'Enter Consignment Details', ref:'§5.1', control:'Screen header',
       description:'Accessed by the relevant department after gate entry. Captures consignment classification, completes anything not entered at Screen 1, and configures which downstream steps apply to this consignment.'},
      {n:2, label:'Gate Entry Number', ref:'FR-002.16, .17', control:'Dropdown',
       description:'Selected from a dropdown of gate entries already created — never entered as free text, which would invite transcription errors and could attach a consignment to a number that does not exist. A GEN created on Screen 1 becomes selectable immediately.'},
      {n:3, label:'Product Category', ref:'FR-002.12', control:'Multi-select',
       description:'Selected manually and never derived from the supplier, because a single supplier may deliver products spanning several categories in the same consignment. Drives workflow applicability rules and filters the supplier list.'},
      {n:4, label:'Supplier Category', ref:'FR-002.11', control:'Dropdown (derivable)',
       description:'Where the supplier is entered directly this field fills itself, since each supplier is tagged to a supplier category during supplier creation. Values: OEM / Manufacturer / Local Vendor / Other.'},
      {n:5, label:'Supplier', ref:'FR-002.2', control:'Dropdown',
       description:'Registered supplier from the master list, filtered by the selected supplier category.'},
      {n:6, label:'Primary Document Type', ref:'FR-002.8', control:'Dropdown', tone:'open',
       description:'Options are driven by the product and supplier category selections, reflecting variability in documentation formats across OEM brands. OI-002: the full list of OEM-specific document types is still to be compiled.'},
      {n:7, label:'Courier Type', ref:'§5.3', control:'Dropdown',
       description:'Completed here if it was not captured at Screen 1.'},
      {n:8, label:'Workflow Applicability Confirmation', ref:'FR-002.3, .9', control:'Section header',
       description:'The administrator selects the factors on which default workflows are defined — supplier category, nature of the products, consignment carrier — and defines a default workflow for each combination.'},
      {n:9, label:'Workflow steps', ref:'FR-002.4, .5, .10', control:'Checkboxes, pre-checked',
       description:'Defaults arrive pre-checked and the receiving user may override any of them for the current consignment, before the receipt process begins. Only checked steps are activated; unchecked steps are skipped and the consignment proceeds to the next active step.'},
      {n:10, label:'Next', ref:'FR-002.14', control:'Button',
       description:'Irrespective of the nature of the consignment, consignment detail entry is the first step on opening the inward flow.'}
    ]
  },
  screen3: {
    label: 'Screen 3 — Inward Operations Dashboard',
    ref: 'FR-003',
    surface: 'Web (supervisor)',
    markers: [
      {n:1, x:-1,  y:6},
      {n:2, x:101, y:16},
      {n:3, x:-1,  y:29},
      {n:4, x:101, y:38},
      {n:5, x:-1,  y:56},
      {n:6, x:-1,  y:80},
      {n:7, x:101, y:97}
    ],
    items: [
      {n:1, label:'Pending queue tiles', ref:'FR-003.1, .2', control:'KPI tiles',
       description:'Three real-time queues: Pending for Unload (trucks awaiting unloading), Pending for Checking (GENs awaiting consignment check) and Pending for Binning (GENs awaiting bin assignment). Each tile drills down to the individual records beneath.'},
      {n:2, label:'Aging buckets', ref:'FR-003.6, .7, .8', control:'Filter row',
       description:'Last 7 days, last 15 days, last 30 days, and 60 days and over. A filter over the existing queues rather than a new queue — the stage alone is not worth much; a load sitting at waiting-to-unload for six hours is the problem, and it stays invisible without the time dimension.'},
      {n:3, label:'Pending Unloads', ref:'FR-003.3', control:'Drill-down table',
       description:'Gate Entry Number, Date, Supplier, Value. Value is the relevant metric at this stage because nothing has been counted yet.'},
      {n:4, label:'Gate Entry Number', ref:'FR-003.3, FR-036', control:'Link',
       description:'Clickable to drill into consignment detail. The term Inward Code is withdrawn throughout in favour of Gate Entry Number (GEN); OI-059 records the wireframe boards still to be relabelled.'},
      {n:5, label:'Pending for Consignment Check', ref:'FR-003.3', control:'Drill-down table',
       description:'Gate Entry Number, Date, Supplier, No. of Boxes — the box count is now known, so it replaces value as the stage metric.'},
      {n:6, label:'Pending for Binning', ref:'FR-003.3', control:'Drill-down table',
       description:'Gate Entry Number, Date, Supplier, No. of Units. Blank rows are retained so the table holds its shape as the queue fills.'},
      {n:7, label:'Active steps only', ref:'FR-003.4, .5, .9', control:'Behaviour',
       description:'The dashboard reflects only the workflow steps active for each consignment as configured on Screen 2, updates in real time as consignments are processed, and shows each user the count pending at their own stage.'}
    ]
  }
};
