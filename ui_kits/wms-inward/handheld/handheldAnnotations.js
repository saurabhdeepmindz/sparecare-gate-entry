/* Callout data for the handheld-surface wireframes, Batch 1 showcase.
   Markers sit ON the content (a scrolling device frame has no gutter). In annotated mode
   the frame expands to full content height so every marker is visible and correctly placed.
   Coordinates are percentages of the framed area. */
window.SC_HH_ANNO = {
  'screen-4a': {
    group: 'IN-C · Receipt & Unload',
    eyebrow: 'IN-C',
    screenId: 'Screen 4a',
    screenName: 'Receipt Details — invoice capture',
    headline: 'Receipt Details — where the real numbers start',
    intro: 'At the gate the guard took a glance at the back of a truck. Here the storekeeper has the envelope open and the boxes in front of him. This is where the document, the invoices and the box count that everything downstream is checked against are actually recorded — and where the figure taken at the gate stops mattering.',
    chips: ['Prepared by Deepmindz Innovations Pvt Ltd', 'Screen 4a', 'FR-004', 'Surface Handheld + Web', 'FRD v0.11', 'Illustrative only'],
    sectionNote: 'Drawn for a rugged handheld in portrait, 412 \u00d7 880 dp \u2014 the 6-inch Android class (Zebra TC53/TC58, Honeywell CT45, Datalogic Memor 11). The full screen is shown here; the device crops at 880 dp and the operator scrolls.',
    caption: 'Screen 4a \u00b7 Receipt Details',
    annotationsIntro: 'Ten decisions, each traced to a requirement. Two carry an open question, and one is a reading of the FRD we have made on your behalf.',
    markers: [
      {n:1,  x:50,  y:6},
      {n:2,  x:12,  y:12},
      {n:3,  x:78,  y:20},
      {n:4,  x:14,  y:28},
      {n:5,  x:24,  y:37},
      {n:6,  x:74,  y:37},
      {n:7,  x:50,  y:44},
      {n:8,  x:20,  y:51},
      {n:9,  x:76,  y:66},
      {n:10, x:50,  y:83}
    ],
    items: [
      {n:1, label:'Receipt Details', ref:'\u00a77.1', control:'Screen header',
       description:'Reached at the unloading dock once the vehicle has been admitted. Captures the formal receipt document and invoice-level detail.'},
      {n:2, label:'GEN and GEN Date', ref:'\u00a77.3', control:'Read-only display',
       description:'Auto-populated from the gate entry created at Screen 1 and carried forward as the master reference for this consignment detail record. Neither is editable here.'},
      {n:3, label:'Primary Document Type', ref:'\u00a77.3', control:'Dropdown',
       description:'Pre-filled if captured at the gate; selected here if not. Acceptable types per OEM brand configuration: GR/LR (Goods Receipt / Lorry Receipt), Tax Invoice, Challan, Ship List and others.',
       query:{text:'The full list of OEM-specific document types \u2014 ship list variants and GRN formats \u2014 has not been compiled, so brand-level configuration mapping cannot be built.', ref:'OI-002'}},
      {n:4, label:'Document Number and Date', ref:'\u00a77.3', control:'Text input, date picker',
       description:'The reference number and date shown on the primary document accompanying the consignment \u2014 an LR number, invoice number or GRN number. Date format DD/MM/YYYY.'},
      {n:5, label:'No. of Boxes in GEN', ref:'FR-004.2, FR-001.21', control:'Numeric input', tone:'open',
       description:'The total physical boxes in this consignment, and the expected count against which actual unloading is tracked on Screen 6a. This is the reconciliation baseline \u2014 the indicative figure taken at the gate explicitly is not.',
       query:{text:'Precedence between the three box counts is unstated: indicative at gate entry, expected here, and extracted from the ship list. Where two or three are present and disagree, which governs reconciliation \u2014 and what is recorded against the others \u2014 is undecided.', ref:'OI-066', blocking:true}},
      {n:6, label:'No. of Invoices in GEN', ref:'\u00a77.3', control:'Numeric input',
       description:'Total invoices associated with this GEN. Each invoice may cover multiple boxes or product lines, so this is not a box count and the two need not agree.'},
      {n:7, label:'Baseline advisory', ref:'FR-001.21', control:'Info note',
       description:'Stated on the screen rather than left to training. The distinction between the gate figure and this one is the difference between reporting two missing boxes and reporting none.',
       proposal:'The FRD establishes the precedence but does not require it to be surfaced in the interface. Putting it in front of the storekeeper at the moment he types the number is ours.'},
      {n:8, label:'Capture Invoice Details', ref:'\u00a77.3', control:'Collapsible accordion',
       description:'Invoice Number, Invoice Date and Total Invoice Amount, with an Add Next control to capture multiple invoices in sequence. Collapsed by default, because the operator should see the whole task before opening one part of it.'},
      {n:9, label:'Details of the Invoices Added', ref:'FR-004.5, \u00a77.5', control:'Read-only summary table',
       description:'Auto-populated from each invoice keyed above. Columns: Invoice No., Date, Amount, Received. The Total row sums all invoice amounts.',
       proposal:'The walkthrough found this table described in two places and read as two tables. There is one. On the web surface the FRD puts it on the right-hand panel (Screen 4b); on a handheld there is no right-hand panel, so it renders once here beneath the entry it summarises.'},
      {n:10, label:'Save and Next', ref:'FR-004.5', control:'Pinned action bar',
       description:'Pressing Next without any invoice detail raises the confirmation "You have not added details of the invoices. Are you sure?" rather than blocking \u2014 invoices sometimes follow the goods.'}
    ],
    missing: {
      intro: 'A wireframe that tries to show everything shows nothing clearly. These are the things that would be added once the questions above are answered.',
      statesNotDrawn: [
        'Empty \u2014 the screen before any document type is chosen',
        'Validation failure \u2014 "Failed! Please Try Again", specified as a red toast',
        'Success \u2014 "Details Added Successfully", specified as a green toast',
        'The amber confirmation dialog when Next is pressed with no invoices',
        'Offline \u2014 what remains usable at a dock with no signal',
        'Resumed \u2014 the screen reopened mid-entry after a shift change'
      ],
      detailNotSpecified: [
        'Whether the GRN and invoice photo uploads belong here or only on Screen 4b',
        'Whether No. of Invoices in GEN is validated against the invoices actually added',
        'Currency formatting and whether amounts are inclusive of tax',
        'Whether a captured invoice can be edited or only deleted and re-keyed',
        'What happens when the document type changes after invoices are keyed'
      ],
      mostImportant: 'The web layout of this screen is not drawn here. The FRD describes 4a and 4b as the left and right panels of one board \u2014 entry on the left, transporter capture and the invoice summary on the right \u2014 which only works on a wide screen. On a handheld that split has to become a sequence, and this screen is the first half of it. Whether the handheld sequence is two screens or one long one is a decision the desk layout will settle.'
    },
    footer: 'Prepared by Deepmindz Innovations Pvt Ltd for SpareCare \u00b7 WMS Inward \u00b7 Screen 4a \u00b7 Companion to FRD v0.11 \u00b7 Confidential. Illustrative and pre-approval \u2014 not agreed scope, and not a visual design.'
  },

  'screen-6a': {
    group: 'IN-C · Receipt & Unload',
    eyebrow: 'IN-C',
    screenId: 'Screen 6a',
    screenName: 'Box scanning and unload progress',
    headline: 'Unload Truck — one scan per box, and a number you can trust',
    intro: 'The primary unloading execution screen, and the one an operator holds for an hour at a time with the other hand on a carton. Each scan creates a record against the GEN. Everything else on the screen exists to answer one question without the operator having to ask anyone: how many boxes are left.',
    chips: ['Prepared by Deepmindz Innovations Pvt Ltd', 'Screen 6a', 'FR-006', 'Surface Handheld', 'FRD v0.11', 'Illustrative only'],
    sectionNote: 'Rugged handheld, 412 \u00d7 880 dp. The scan field and the action bar are the two things reachable with a thumb; everything between them is read, not touched.',
    caption: 'Screen 6a \u00b7 Box scanning',
    annotationsIntro: 'Eleven decisions. Three carry an open question, and two are readings of the FRD we have made on your behalf.',
    markers: [
      {n:1,  x:50,  y:4},
      {n:2,  x:16,  y:10},
      {n:3,  x:78,  y:19},
      {n:4,  x:30,  y:29},
      {n:5,  x:88,  y:29},
      {n:6,  x:16,  y:40},
      {n:7,  x:68,  y:40},
      {n:8,  x:50,  y:49},
      {n:9,  x:50,  y:58},
      {n:10, x:20,  y:70},
      {n:11, x:50,  y:95}
    ],
    items: [
      {n:1, label:'Unload Truck', ref:'\u00a79.1', control:'Screen header',
       description:'Operated on handheld terminals only. FR-032.6 puts scanning, condition capture and physical handling on the terminal because the operator has his hands on the stock and cannot walk to a desk.'},
      {n:2, label:'GEN, Supplier, Document Number', ref:'\u00a79.3', control:'Read-only display',
       description:'Auto-filled from the GEN record, carried through from Screen 5A selection. Context the operator needs and cannot change.'},
      {n:3, label:'Shipment Details (Shiplist)', ref:'FR-006.12', control:'Panel with View and Replace',
       description:'Shows the file name and upload timestamp where a ship list has been uploaded against the GEN. Replace uploads a corrected or alternative list and re-evaluates the expected box manifest for the consignment.',
       query:{text:'A sample ship list is still to be shared so the structure of the uploaded data and the field mapping into the system can be defined.', ref:'OI-030'}},
      {n:4, label:'Scan / Enter Box No.', ref:'FR-006.1, FR-006.2', control:'Text input + scan trigger',
       description:'Each box is scanned as it is unloaded, creating a record in the tracker linked to the GEN. Scanning is by QR or barcode on the device; manual keyboard entry is a documented fallback for labels that will not decode. Delete Entry removes a mistaken scan.'},
      {n:5, label:'Device scan trigger', ref:'FR-032.6', control:'Hardware',
       description:'The physical trigger on the right edge of the terminal. The on-screen button mirrors it for one-handed use, but the hardware key is what an operator actually presses several hundred times a shift.',
       proposal:'The FRD does not specify the on-screen scan affordance. Drawing both is ours \u2014 a screen that offers no visible scan control is unusable on a device whose trigger has failed.'},
      {n:6, label:'Unloading WIP Status', ref:'FR-006.7', control:'Counter strip',
       description:'Unloaded (boxes scanned), Balance (expected minus scanned), OK, and Not OK. Balance is the number that matters: it is the expected count from No. of Boxes in GEN less what has come off the truck.'},
      {n:7, label:'Manual refresh', ref:'FR-006.7', control:'Header action', tone:'open',
       description:'The status bar refreshes on demand rather than live, deliberately, to avoid excessive processing load on the terminal.',
       query:{text:'Whether manual refresh is acceptable long-term, or whether a push-update mechanism should be planned, is unconfirmed.', ref:'OI-011'}},
      {n:8, label:'Unload Progress', ref:'FR-006.15', control:'Progress bar',
       description:'Boxes unloaded against total expected, with the completion percentage, updated as each box is scanned. The same information as the counters, in the form a supervisor reads from three metres away.'},
      {n:9, label:'Mismatch with Shiplist', ref:'FR-006.13', control:'Exception strip',
       description:'Raised where a scanned box is not on the uploaded ship list. The operator must choose before continuing: Set Aside, which segregates the box for return to the transporter and excludes it from the received count, or Add Document, which attaches supporting documentation justifying acceptance.',
       query:{text:'Box ownership cannot be verified where no ship list and no supplier code exist \u2014 a part consignment may carry boxes belonging to another consignee. The process for identifying and returning such a box is undefined.', ref:'OI-013', blocking:true}},
      {n:10, label:'Recent Box Entries', ref:'FR-006.14', control:'Log with View All',
       description:'The most recently processed boxes with box number, recorded quality, status indicator and timestamp. Tapping a row opens its condition record. View All opens the full session log.'},
      {n:11, label:'Save and Finish Unload', ref:'FR-006.10, FR-006.11', control:'Pinned action bar',
       description:'Save persists everything scanned, every condition, photograph and remark, and allows the operator to resume from the same state \u2014 unloads span shift changes and breaks. Finish Unload commits the session and flags any unscanned boxes as Balance.'}
    ],
    missing: {
      intro: 'These are the things a build would need that this board does not answer.',
      statesNotDrawn: [
        'Empty \u2014 the screen before the first box is scanned',
        'The box-number mismatch dialog itself ("Would you like to upload it?" with YES / NO)',
        'Mid-scan \u2014 the moment between trigger and decode',
        'Duplicate scan \u2014 the same box read twice',
        'Complete \u2014 balance at zero, before Finish is pressed',
        'Offline \u2014 what a dock with no signal still permits'
      ],
      detailNotSpecified: [
        'Whether the WIP counters refresh on save or only on the refresh control',
        'How many rows Recent Box Entries holds before View All is needed',
        'Whether Delete Entry is available after a box has been saved',
        'What Set Aside does to the progress bar and the Balance count',
        'Whether the ship list panel appears at all when no list was uploaded'
      ],
      mostImportant: 'Unit-level counting is not on this screen, and that is deliberate. FR-006.18 confines unloading to primary box level and defers opening cartons to Consignment Check, because the transport vehicle cannot be held while every carton is opened. Any expectation that a shortage inside a box is detected here is misplaced \u2014 it is detected two stages later, and by then the vehicle has gone.'
    },
    footer: 'Prepared by Deepmindz Innovations Pvt Ltd for SpareCare \u00b7 WMS Inward \u00b7 Screen 6a \u00b7 Companion to FRD v0.11 \u00b7 Confidential. Illustrative and pre-approval \u2014 not agreed scope, and not a visual design.'
  },

  'screen-6b': {
    group: 'IN-C · Receipt & Unload',
    eyebrow: 'IN-C',
    screenId: 'Screen 6b',
    screenName: 'Box condition assessment',
    headline: 'Update Box Condition — the evidence, taken while the truck is still there',
    intro: 'Opened by tapping a scanned box. A carton found wet the next morning is an argument with nobody to ask; a carton photographed at the dock with the driver standing beside it is a claim. Everything on this screen exists to make that record before the vehicle leaves.',
    chips: ['Prepared by Deepmindz Innovations Pvt Ltd', 'Screen 6b', 'FR-006', 'Surface Handheld', 'FRD v0.11', 'Illustrative only'],
    sectionNote: 'The condition options are the six named in FR-006.4 and are multi-select \u2014 a box can be both tampered and scratched.',
    caption: 'Screen 6b \u00b7 Box condition',
    annotationsIntro: 'Nine decisions. Two carry an open question, and two \u2014 including which screen number this is \u2014 are readings we have made on your behalf.',
    markers: [
      {n:1,  x:50,  y:4},
      {n:2,  x:20,  y:11},
      {n:3,  x:50,  y:21},
      {n:4,  x:24,  y:34},
      {n:5,  x:76,  y:42},
      {n:6,  x:50,  y:53},
      {n:7,  x:76,  y:64},
      {n:8,  x:20,  y:76},
      {n:9,  x:50,  y:96}
    ],
    items: [
      {n:1, label:'Update Box Condition', ref:'\u00a79.4, \u00a79.6', control:'Screen header', tone:'open',
       description:'Opened from a box row on Screen 6a.',
       query:{text:'The FRD is inconsistent about what Screen 6b is. The field reference at \u00a79.4 describes it as Check Unloading Status \u2014 a read-only box or part number search returning unloaded or not unloaded. The filled-state composite at \u00a79.6 describes the same number as the box condition screen, with open delivery, mandatory photo, the shiplist mismatch exception and Recent Box Entries. These are two different screens carrying one number.', ref:'\u00a79.4 vs \u00a79.6', blocking:true},
       proposal:'We have drawn the condition screen, because the source artwork and the filled-state composite both show it and because \u00a79.6 is the later description. The status search is a separate, simpler screen and needs its own number.'},
      {n:2, label:'Box identity', ref:'FR-006.1', control:'Header card',
       description:'The scanned box number in mono, its position in the session, and a live OK / Not OK tag that follows the conditions selected below.'},
      {n:3, label:'Mismatch with Shiplist', ref:'FR-006.13', control:'Exception with two actions',
       description:'Where the box is not on the uploaded ship list, one of two actions must be chosen before continuing. Set Aside segregates the box for return to the transporter and excludes it from the received count. Add Document attaches supporting documentation justifying acceptance into the consignment.'},
      {n:4, label:'Box Condition', ref:'FR-006.4', control:'Multi-select options',
       description:'Six options: OK, Packing Tampered, Damaged, Visible Scratch, Without Packing, Wrong Delivery. Multiple conditions may be selected for a single box \u2014 this is not a radio group. Green, amber and red are traffic-light colours and deliberately sit outside the brand palette.'},
      {n:5, label:'Mark for Open Delivery', ref:'FR-006.6', control:'Toggle',
       description:'Available for boxes assessed as damaged, tampered or wrong delivery. Marking a box initiates the formal inspection process in the presence of the transporter or driver.',
       proposal:'The FRD makes this an action. Drawing it as a toggle that pre-recommends itself when a damaging condition is selected is ours \u2014 an operator under time pressure at a dock will not reliably remember to press an extra button.'},
      {n:6, label:'Take Photo', ref:'FR-006.5', control:'Camera capture',
       description:'Mandatory wherever the recorded condition is anything other than OK \u2014 the box entry cannot be saved until the photograph is captured. Not required where the condition is OK.',
       query:{text:'Audio and video note capture is named as a planned enhancement; feasibility on handheld terminals is unconfirmed.', ref:'OI-008'}},
      {n:7, label:'Remarks', ref:'\u00a79.6', control:'Text area, 250 characters',
       description:'Optional free text alongside the photograph. Short by design: a dock is not where long-form notes get written.'},
      {n:8, label:'Recent Box Entries', ref:'FR-006.14', control:'Log',
       description:'Repeated here so the operator can see the run of recent boxes without returning to the scanning screen \u2014 useful when several boxes from the same pallet are damaged together.'},
      {n:9, label:'Save Condition', ref:'FR-006.5', control:'Pinned action bar',
       description:'Disabled until the photograph exists where a non-OK condition is selected. The block is the requirement, not a courtesy \u2014 an unphotographed damage record is not evidence.'}
    ],
    missing: {
      intro: 'What a build would still need to be told.',
      statesNotDrawn: [
        'OK selected \u2014 photo not required, open delivery not offered, Save enabled',
        'The camera view itself, and what happens if the capture fails',
        'Several conditions selected at once, and how the tag reads then',
        'The box already saved and reopened for correction',
        'Set Aside confirmed \u2014 what the box row then looks like on Screen 6a'
      ],
      detailNotSpecified: [
        'Whether more than one photograph can be attached to a box',
        'Whether Wrong Delivery routes differently from Damaged',
        'Who may overturn a condition after the session is closed',
        'Whether remarks are mandatory for any condition',
        'What Add Document accepts \u2014 photograph, file, or both'
      ],
      mostImportant: 'The insurance claim workflow is not drawn, and is not specified beyond the point of segregation. This screen produces the evidence \u2014 a condition, a photograph, a timestamp, a driver who was standing there. What happens to that evidence afterwards, who raises the claim against the supplier and how it is tracked, is undefined. The evidence is only worth capturing if something consumes it.'
    },
    footer: 'Prepared by Deepmindz Innovations Pvt Ltd for SpareCare \u00b7 WMS Inward \u00b7 Screen 6b \u00b7 Companion to FRD v0.11 \u00b7 Confidential. Illustrative and pre-approval \u2014 not agreed scope, and not a visual design.'
  }
};
