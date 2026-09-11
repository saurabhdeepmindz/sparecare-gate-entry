/* Callout data for the web-surface wireframes, Screens 1-3.
   Every marker sits in the left or right gutter (x = -1 or 101) so no circle overlaps
   the content it annotates, and none is clipped. Every legend entry carries the FRD
   requirement or section it derives from; tone 'open' marks a recorded open issue. */
window.SC_WEB_ANNO = {
  'screen-1': {
    group: 'IN-A · Gate Entry & Consignment',
    eyebrow: 'IN-A',
    screenId: 'Screen 1',
    screenName: 'Gate Entry (Create GEN)',
    headline: 'Gate Entry — one number the load carries for life',
    intro: 'The first step in the inward process. It captures the little that can be known at the gate — who is driving, how to reach him, roughly what has arrived — and generates the Gate Entry Number that every subsequent activity on that consignment is recorded against. Only the driver\u2019s name and contact number are mandatory; everything else is dealer-configurable and can be completed at Consignment Details.',
    chips: ['Prepared by Deepmindz Innovations Pvt Ltd', 'Screen 1', 'FR-001', 'Surface Web + Handheld', 'FRD v0.11', 'Illustrative only'],
    sectionNote: 'The web surface, as specified by FR-032.5 — gate entry involves no scanning and is typically raised from a desk. The two-step stepper follows \u00a74.6, which splits gate entry into admission at the gate and consignment detail capture at the dock.',
    url: 'wms.sparecare.in/inward/gate-entry',
    markers: [
      {n:1,  x:-1,  y:5},
      {n:2,  x:101, y:5},
      {n:3,  x:-1,  y:16},
      {n:4,  x:101, y:26},
      {n:5,  x:-1,  y:36},
      {n:6,  x:101, y:44},
      {n:7,  x:-1,  y:52},
      {n:8,  x:101, y:60},
      {n:9,  x:-1,  y:68},
      {n:10, x:101, y:76},
      {n:11, x:-1,  y:84},
      {n:12, x:101, y:92},
      {n:13, x:-1,  y:97}
    ],
    items: [
      {n:1, label:'Inward module navigation', ref:'\u00a72.3', control:'Sidebar',
       description:'The five inward stages in the order a consignment passes through them. Only the steps active for a given consignment are reachable, as configured on Screen 2.'},
      {n:2, label:'Date & Time of Receipt', ref:'FR-001.9, .10', control:'System-generated display',
       description:'Picked up automatically at the moment the gate entry is created. Mandatory and not configurable \u2014 distinct in kind from the dealer-configurable mandatory fields, which is why it is shown as a read-only value in the page header rather than as an input that could be left blank.'},
      {n:3, label:'Two-stage stepper', ref:'\u00a74.6, FR-002.14', control:'Stepper',
       description:'Gate entry has two parts: the vehicle is admitted against minimal detail at the gate, then the document, invoices and full box detail are recorded at the unloading dock by the storekeeper. Different places, different people, different amounts of time.',
       proposal:'\u00a74.6 records the two stages but does not ask for them to be shown as a stepper. Drawing them as one two-step task is ours \u2014 and OI-073 leaves open whether the process list should show them as distinct sub-stages at all.'},
      {n:4, label:'Mandatory-field advisory', ref:'FR-001.2, .6', control:'Info note',
       description:'Two mandatory fields only. Nothing entered here becomes permanently locked before Screen 2 \u2014 anything not captured at the gate is editable and completable there.'},
      {n:5, label:'Name of the Person', ref:'FR-001.16', control:'Text input',
       description:'Mandatory. The name of the truck driver only. Gate personnel are a separate role and are not recorded in this field.'},
      {n:6, label:'Contact Number', ref:'FR-001.17, .18', control:'Text input',
       description:'Mandatory. The truck driver\u2019s number, with no linkage to the supplier record \u2014 drivers change from delivery to delivery. Supplier arrival notification derives instead from the supplier selected below, using the contact details held against that supplier in the master.'},
      {n:7, label:'Courier Type', ref:'FR-001.20', control:'Dropdown',
       description:'Five values per the BRD: Transport, Courier, Own Vehicle, Individual (External Person), Individual (Internal Person). Configurable from master data so a new courier firm can be added the same afternoon. The value previously recorded as Self-foot is withdrawn as an error.'},
      {n:8, label:'Nature of Inward Transaction', ref:'FR-001.11, FR-030.1', control:'Dropdown',
       description:'Six values: purchase, branch transfer in, sales return, workshop or in-house return, job work return, third party purchase. The reason a consignment is entering determines who owns the goods, whether a payment is due, and what it is reconciled against \u2014 so it is chosen at the gate, not later.'},
      {n:9, label:'Where From / For Whom', ref:'\u00a74.3, FR-001.19', control:'Dropdowns',
       description:'Both optional. Supplier is selected from the pre-configured master and may be completed at Screen 2 if unknown at the gate. Where a department or individual is named, that party is notified on arrival.'},
      {n:10, label:'Primary Document Type', ref:'FR-001.5', control:'Dropdown + Camera',
       description:'Optional at the gate. Acceptable types: GRN, Tax Invoice, Challan, Ship List, Delivery Challan, others as configured. The camera captures a document photograph and sits outside the field border so it reads as a secondary affordance.'},
      {n:11, label:'No. of Boxes', ref:'FR-001.21', control:'Number input', tone:'open',
       description:'Indicative only. At the gate this is a glance at the back of a truck, not a verified figure, and it must not serve as the value unloading is reconciled against \u2014 that baseline is the expected box count recorded at Receipt Details (Screen 4a).',
       query:{text:'Precedence between the three box counts is unstated: indicative here, expected at Receipt Details, and extracted from the ship list. Where two or three are present and disagree, which governs reconciliation is undecided.', ref:'OI-066', blocking:true}},
      {n:12, label:'Create Gate Entry', ref:'FR-001.1, FR-001.14', control:'Button', tone:'open',
       description:'Generates the GEN, which becomes the master reference key for all subsequent inward steps and the reference against which the business pays the vendor.',
       query:{text:'The generation logic is not yet defined \u2014 format, sequence, and whether the number is unique per business unit or across the business. The number shown here is an illustrative format only.', ref:'OI-048', blocking:true}},
      {n:13, label:'Gate Entry Number confirmation', ref:'FR-001.8', control:'Banner',
       description:'Displayed prominently on creation and printable or shareable as a reference. Green is a signal colour here, not a brand colour.',
       proposal:'Pinning the GEN to a context bar above the form, so it stays visible for the rest of the task, is ours. FR-001.1 makes it the master reference for everything downstream; the FRD does not say where it should live on screen.'}
    ],
    missing: {
      intro: 'A wireframe that tries to show everything shows nothing clearly. These are the things that would be added once the questions above are answered.',
      statesNotDrawn: [
        'Empty \u2014 the form before anything is entered',
        'Validation failure \u2014 mandatory fields left blank',
        'Configured down \u2014 the same screen where the admin has hidden optional fields',
        'Offline \u2014 a gate hut with no signal',
        'Duplicate \u2014 the same vehicle raised twice in one morning'
      ],
      detailNotSpecified: [
        'Which fields the dealer admin can hide, and where that is configured',
        'Whether the GEN slip prints from the browser or a gate printer',
        'What the internal arrival notification contains and who receives it',
        'Whether supplier notification fires on creation or on receipt confirmation',
        'Date and time format, and whether the timezone is per-location'
      ],
      mostImportant: 'The handheld layout of this screen is not drawn here. FR-032.2 requires gate entry on both surfaces, and a guard with a queue of trucks behind him is the more likely user than someone at a desk. If the web arrangement here is agreed, the handheld one follows from it \u2014 but the reverse is not true, and the handheld version is the one that decides how few fields the gate can realistically capture.'
    },
    footer: 'Prepared by Deepmindz Innovations Pvt Ltd for SpareCare \u00b7 WMS Inward \u00b7 Screen 1 \u00b7 Companion to FRD v0.11 \u00b7 Confidential. Illustrative and pre-approval \u2014 not agreed scope, and not a visual design.'
  },

  'screen-2': {
    group: 'IN-A · Gate Entry & Consignment',
    eyebrow: 'IN-A',
    screenId: 'Screen 2',
    screenName: 'Consignment Details & Workflow Configuration',
    headline: 'Consignment Details — the instruction travels with the load',
    intro: 'Accessed at the unloading dock after the gate entry exists. It classifies the consignment, completes anything not captured at the gate, and confirms which downstream steps apply. Setting this up front matters because the person unloading at six in the morning is usually not the person who knows why the load was ordered \u2014 marking it at the start means the instruction travels with the load instead of living in somebody\u2019s head.',
    chips: ['Prepared by Deepmindz Innovations Pvt Ltd', 'Screen 2', 'FR-002', 'Surface Web + Handheld', 'FRD v0.11', 'Illustrative only'],
    sectionNote: 'Classification on the left, workflow applicability on the right \u2014 the two are separate decisions, and the workflow block is the one a supervisor overrides. The Gate Entry Number stays pinned above both.',
    annotationsIntro: 'Eleven decisions. One carries an open question, and one is a layout reading we have made on your behalf.',
    url: 'wms.sparecare.in/inward/consignment-details',
    markers: [
      {n:1,  x:-1,  y:6},
      {n:2,  x:101, y:6},
      {n:3,  x:-1,  y:17},
      {n:4,  x:101, y:28},
      {n:5,  x:-1,  y:38},
      {n:6,  x:101, y:46},
      {n:7,  x:-1,  y:55},
      {n:8,  x:101, y:63},
      {n:9,  x:-1,  y:72},
      {n:10, x:101, y:81},
      {n:11, x:-1,  y:90}
    ],
    items: [
      {n:1, label:'Step 2 of 2', ref:'\u00a74.6', control:'Stepper',
       description:'The second of the two gate entry stages. Completed steps remain clickable for going back; forward steps do not, because the data to reach them does not yet exist.'},
      {n:2, label:'Active step count', ref:'FR-002.5', control:'Tag',
       description:'A running count of how many of the four downstream steps remain active for this consignment, so an override is visible without reading the checklist.'},
      {n:3, label:'Gate Entry Number context bar', ref:'FR-001.1', control:'Pinned bar',
       description:'Every subsequent activity on the consignment is conducted by reference to the GEN, so it stays on screen with the receipt date and time, supplier and carrier alongside it.'},
      {n:4, label:'Gate Entry Number', ref:'FR-002.16, .17', control:'Dropdown',
       description:'Selected from a dropdown of gate entries already created \u2014 never entered as free text, which would invite transcription errors and could attach a consignment to a number that does not exist. A GEN created on Screen 1 becomes selectable immediately. FR-002.15 separately permits entry of a number raised manually at a gate not on this system.'},
      {n:5, label:'Product Category', ref:'FR-002.12, .2', control:'Multi-select',
       description:'Selected manually and never derived from the supplier, because a single supplier may deliver products spanning several categories in the same consignment. Drives the workflow applicability rules and filters the supplier list.'},
      {n:6, label:'Supplier Category', ref:'FR-002.11', control:'Dropdown (derivable)',
       description:'Fills itself once the supplier is known, since each supplier is tagged to a supplier category during supplier creation. Values: OEM / Manufacturer / Local Vendor / Other. The asymmetry with product category is deliberate and worth preserving in the design.'},
      {n:7, label:'Primary Document Type', ref:'FR-002.8', control:'Dropdown', tone:'open',
       description:'Options are driven by the product and supplier category selections, reflecting variability in documentation formats across OEM brands.',
       query:{text:'The full list of OEM-specific document types \u2014 ship list variants and GRN formats \u2014 is still to be compiled for brand-level configuration mapping.', ref:'OI-002'}},
      {n:8, label:'Workflow defaults advisory', ref:'FR-002.3, .9', control:'Info note',
       description:'The administrator selects the factors on which default workflows are defined \u2014 supplier category, nature of the products, consignment carrier \u2014 and defines a default workflow for each combination.'},
      {n:9, label:'Workflow Applicability Confirmation', ref:'FR-002.4, .10', control:'Checkboxes, pre-checked',
       description:'Four steps arrive pre-checked from the administrator\u2019s rule, and the receiving user may override any of them for this consignment before the receipt process begins. Unload Truck may be unchecked for a single-box VOR order; Check Secondary Boxes for a branch transfer; Binning where goods are issued direct to the workshop.'},
      {n:10, label:'Skip behaviour', ref:'FR-002.5', control:'Explanatory text',
       description:'Only checked steps are activated. Unchecked steps are skipped and the consignment proceeds to the next active step \u2014 which is also what the dashboard reflects.'},
      {n:11, label:'Start receipt process', ref:'FR-002.10, .14', control:'Button',
       description:'The override window closes here. Beyond this point the workflow for the consignment is fixed and the receipt process runs against it.',
       proposal:'Splitting the screen into classification on the left and workflow on the right is ours. The FRD lists the fields in one sequence; separating the two makes visible that the workflow block is the part a supervisor actually changes.'}
    ],
    missing: {
      intro: 'What a build would still need to be told.',
      statesNotDrawn: [
        'Empty \u2014 before a gate entry is selected',
        'Supplier chosen \u2014 the moment supplier category fills itself',
        'A workflow step unchecked, and what the dashboard then shows',
        'Multiple product categories selected at once',
        'Reopened after the receipt process has started, with the overrides locked'
      ],
      detailNotSpecified: [
        'Whether an admin can add a fifth workflow step',
        'What the multi-select control looks like with six categories chosen',
        'Whether an override is logged against the user who made it',
        'Who the consignment routes to when several recipients match',
        'Whether unchecking Binning requires a reason'
      ],
      mostImportant: 'The administrator screen that defines these workflow defaults is not drawn anywhere. FR-002.9 gives the admin the factors \u2014 supplier category, nature of products, consignment carrier \u2014 and a default workflow per combination. That is a configuration matrix of real size, and every override on this screen is a departure from it. Without seeing the matrix, nobody can judge whether the defaults will be right often enough for the override to stay rare.'
    },
    footer: 'Prepared by Deepmindz Innovations Pvt Ltd for SpareCare \u00b7 WMS Inward \u00b7 Screen 2 \u00b7 Companion to FRD v0.11 \u00b7 Confidential. Illustrative and pre-approval \u2014 not agreed scope, and not a visual design.'
  },

  'screen-3': {
    group: 'IN-B · Operations',
    eyebrow: 'IN-B',
    screenId: 'Screen 3',
    screenName: 'Inward Operations Dashboard',
    headline: 'Inward Dashboard — the stage is cheap, the time is the point',
    intro: 'One screen showing every load currently in the building and the stage each has reached, with how long it has been sitting there. The stage on its own is not worth much; almost any system can show a status. What makes this screen worth having is the time. A load at waiting-to-unload is normal. A load that has been at waiting-to-unload for six hours is a problem, and it stays invisible unless the screen puts the number in front of you.',
    chips: ['Prepared by Deepmindz Innovations Pvt Ltd', 'Screen 3', 'FR-003', 'Surface Web', 'FRD v0.11', 'Illustrative only'],
    sectionNote: 'Treated as the landing screen rather than a step, because FR-003 describes it as the view a supervisor keeps open through the day and a manager checks to find where work is piling up. The three queues are stacked full width so all of them are visible at once.',
    annotationsIntro: 'Nine decisions. One carries an open question, and three are readings of the FRD we have made on your behalf.',
    url: 'wms.sparecare.in/inward/dashboard',
    markers: [
      {n:1,  x:-1,  y:6},
      {n:2,  x:101, y:6},
      {n:3,  x:-1,  y:17},
      {n:4,  x:101, y:27},
      {n:5,  x:-1,  y:37},
      {n:6,  x:101, y:47},
      {n:7,  x:-1,  y:60},
      {n:8,  x:101, y:74},
      {n:9,  x:-1,  y:88}
    ],
    items: [
      {n:1, label:'Landing screen', ref:'FR-003.9', control:'Navigation',
       description:'Each user sees the number of consignments pending at their own stage.',
       proposal:'Treating the dashboard as the landing screen rather than the third step of gate entry is ours. FR-003 describes it as the view a supervisor keeps open through the day, which is not the behaviour of a step in a wizard.'},
      {n:2, label:'Create Gate Entry', ref:'FR-001.1', control:'Primary action',
       description:'Work is launched from the dashboard. The gate entry task opens as a two-step flow and returns here on completion.'},
      {n:3, label:'Pending queue tiles', ref:'FR-003.1, .2', control:'KPI tiles',
       description:'Three real-time queues: Pending for Unload (trucks awaiting unloading), Pending for Checking (GENs awaiting consignment check) and Pending for Binning (GENs awaiting bin assignment). Each names its unit \u2014 Trucks or GENs \u2014 rather than showing a bare number, because the three queues count different things.'},
      {n:4, label:'Aging buckets', ref:'FR-003.6, .7, .8', control:'Filter row',
       description:'Last 7 days, last 15 days, last 30 days, and 60 days and over. A filter over the existing pending queues rather than a new queue, so the operator can move from what is pending to what is pending and overdue. The tile counts move with the filter \u2014 they are counts of the filtered queue, not of everything.',
       proposal:'FR-003.7 names the four buckets but does not say how they behave. We have read the first three as cumulative windows \u2014 last 7 days includes the last 2 \u2014 and the fourth as the overdue tail, everything 60 days or older. Read the other way, each bucket would be an exclusive band and the counts would not add up the same. Worth confirming.'},
      {n:5, label:'Waiting column', ref:'FR-003.6', control:'Elapsed time',
       description:'Time at the current stage, shown per row. A load at waiting-to-unload is normal; a load six hours into it is a problem, and it stays invisible without the number.',
       proposal:'FR-003.6 requires aging as a filter. Also showing elapsed time per row is ours \u2014 a bucket tells you a load is old, a column tells you which one.'},
      {n:6, label:'Gate Entry Number', ref:'FR-003.3, FR-036', control:'Link',
       description:'Clickable to drill into consignment detail. The term Inward Code is withdrawn throughout in favour of Gate Entry Number (GEN); OI-059 records the wireframe boards still to be relabelled.'},
      {n:7, label:'Pending for Consignment Check', ref:'FR-003.3', control:'Drill-down table',
       description:'Gate Entry Number, Date, Supplier, Waiting, No. of Boxes. The box count is known by this stage, so it replaces value as the stage metric.'},
      {n:8, label:'Pending for Binning', ref:'FR-003.3', control:'Drill-down table',
       description:'Gate Entry Number, Date, Supplier, Waiting, No. of Units.',
       proposal:'Showing the empty queue with a plain sentence rather than a blank panel is ours. An empty binning queue is information \u2014 it means the floor is clear, not that the screen failed to load.'},
      {n:9, label:'Active steps only', ref:'FR-003.4, .5', control:'Behaviour',
       description:'The dashboard reflects only the workflow steps active for each consignment as configured on Screen 2, and updates as consignments are processed through each stage.',
       query:{text:'The refresh strategy is unconfirmed \u2014 whether manual refresh is acceptable long-term, or whether a push-update mechanism should be planned.', ref:'OI-011'}}
    ],
    missing: {
      intro: 'What this board does not answer.',
      statesNotDrawn: [
        'Empty \u2014 nothing pending at any stage',
        'Loaded \u2014 forty consignments, where the tables need paging',
        'An aging bucket selected, and what falls out of each queue',
        'A row overdue past 60 days, and how it is marked',
        'Permissions \u2014 the same screen for a user who owns one stage only'
      ],
      detailNotSpecified: [
        'Whether the queues can be sorted, and by what',
        'Whether Value is invoice value or an estimate before invoices are keyed',
        'Where a GEN link drills to \u2014 the consignment record or its current stage',
        'How many rows before paging, and whether paging is per queue',
        'Whether the aging filter persists between sessions'
      ],
      mostImportant: 'The workflow stepper showing where a consignment has reached, and how long it sat at each stage, is not drawn. OI-041 records it as desirable rather than mandatory and defers it to a later release. But the ageing figures on this screen only say a load is late \u2014 they do not say where it got stuck. Without the per-stage history the supervisor still has to ask three people, which is the problem the dashboard exists to remove.'
    },
    footer: 'Prepared by Deepmindz Innovations Pvt Ltd for SpareCare \u00b7 WMS Inward \u00b7 Screen 3 \u00b7 Companion to FRD v0.11 \u00b7 Confidential. Illustrative and pre-approval \u2014 not agreed scope, and not a visual design.'
  }
};
