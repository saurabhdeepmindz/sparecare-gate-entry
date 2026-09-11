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
    markers: [
      {n:1, x:-1, y:6},
      {n:2, x:101, y:12},
      {n:3, x:-1, y:20},
      {n:4, x:101, y:28},
      {n:5, x:-1, y:37},
      {n:6, x:101, y:37},
      {n:7, x:-1, y:44},
      {n:8, x:101, y:51},
      {n:9, x:-1, y:66},
      {n:10, x:101, y:83}
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
      {n:9, label:'Running invoice count', ref:'FR-004.5, \u00a77.5', control:'Summary strip',
       description:'A count and running total only. The summary table itself renders on Screen 4b.',
       proposal:'The walkthrough found the table described in two places and read as two tables. There is one, and FR-004.5 was corrected to place it on Screen 4b. We have followed that and left only a confirmation strip here, so the operator keying invoices can see the count without the table appearing twice.'},
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
    markers: [
      {n:1, x:-1, y:4},
      {n:2, x:101, y:10},
      {n:3, x:-1, y:19},
      {n:4, x:101, y:29},
      {n:5, x:-1, y:29},
      {n:6, x:101, y:40},
      {n:7, x:-1, y:40},
      {n:8, x:101, y:49},
      {n:9, x:-1, y:58},
      {n:10, x:101, y:70},
      {n:11, x:-1, y:95}
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
    markers: [
      {n:1, x:-1, y:4},
      {n:2, x:101, y:11},
      {n:3, x:-1, y:21},
      {n:4, x:101, y:34},
      {n:5, x:-1, y:42},
      {n:6, x:101, y:53},
      {n:7, x:-1, y:64},
      {n:8, x:101, y:76},
      {n:9, x:-1, y:96}
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

/* ---- Batch 1, remainder: Screens 4b, 5A, 5b, 6c ---- */
Object.assign(window.SC_HH_ANNO, {
  'screen-4b': {
    group:'IN-C · Receipt & Unload', eyebrow:'IN-C', screenId:'Screen 4b',
    screenName:'Receipt Details — transporter and invoice summary',
    headline:'Transporter Details — the number to call when something is wrong',
    intro:'The second half of Receipt Details. It records who carried the consignment and holds the one invoice summary table, and it is the screen that matters weeks later when a damaged part turns up and somebody asks which vehicle brought it.',
    chips:['Prepared by Deepmindz Innovations Pvt Ltd','Screen 4b','FR-004','Surface Handheld + Web','FRD v0.11','Illustrative only'],
    sectionNote:'On the web surface the FRD draws 4a and 4b as the left and right panels of one board. A handheld has no right-hand panel, so the pair becomes a sequence.',
    caption:'Screen 4b · Transporter Details',
    markers: [{n:1, x:-1, y:5},{n:2, x:101, y:13},{n:3, x:-1, y:22},{n:4, x:101, y:33},{n:5, x:-1, y:44},{n:6, x:101, y:62},{n:7, x:-1, y:80},{n:8, x:101, y:95}],
    items:[
      {n:1,label:'Transporter Details',ref:'\u00a77.4',control:'Screen header',
       description:'Reached from Receipt Details. Captures logistics and vehicle identification, and carries the invoice summary.'},
      {n:2,label:'GEN and Document Number',ref:'\u00a77.3',control:'Read-only display',
       description:'Carried forward from the previous screen so the operator knows which consignment is being recorded against.'},
      {n:3,label:'Optional-by-design advisory',ref:'\u00a77.4',control:'Info note',
       description:'The whole transporter block can be left blank if the details are not available at this stage, and completed at Truck Unload instead.'},
      {n:4,label:'Capture Transporter Details',ref:'\u00a77.4',control:'Collapsible accordion',
       description:'Transporter name from the registered list, with pre-registered transporters auto-filling related fields. Vehicle number as per GR documents, driver name and driver contact.'},
      {n:5,label:'Vehicle Number as per GR Documents',ref:'\u00a77.4',control:'Text input',
       description:'The number stated on the goods receipt. It may differ from the vehicle that actually arrives if the truck was changed en route, which is why Screen 5b captures the observed number separately.'},
      {n:6,label:'Details of the Invoices Added',ref:'FR-004.5, \u00a77.5',control:'Read-only summary table',
       description:'Auto-populated from the invoices keyed on Screen 4a. Columns: Invoice No., Date, Amount, Received. The Received checkbox marks each invoice as confirmed received, and the Total row sums the amounts.',
       proposal:'The walkthrough found this table described in two places and read as two tables. There is one, and FR-004.5 was corrected to place it here. We have followed that and left only a one-line count on Screen 4a, rather than repeating the table.'},
      {n:7,label:'GRN and Invoice uploads',ref:'\u00a77.4',control:'Image upload', tone:'open',
       description:'Photographs of the goods receipt note and of one or more invoice documents.',
       query:{text:'The picker is not specified \u2014 how many images may be attached, whether an upload can be replaced, and what happens when a capture fails.',ref:'\u00a77.4'}},
      {n:8,label:'Validation states',ref:'\u00a77.4',control:'Toast and dialog',
       description:'Three states are specified: Details Added Successfully in green, Failed! Please Try Again in red, and an amber confirmation when Next is pressed with no invoice details.',
       proposal:'None of the three is drawn on this board. Pressing Next with no invoices should confirm rather than block \u2014 invoices sometimes follow the goods \u2014 but the wording and the recovery path are ours to propose.'}
    ],
    missing:{
      intro:'What a build would still need to be told.',
      statesNotDrawn:['The three validation states named in the field reference','A transporter not on the registered list','Received ticked on some invoices but not others','Offline \u2014 uploads queued rather than sent'],
      detailNotSpecified:['Whether a new transporter can be created here or only chosen','Who may untick a Received invoice once ticked','Whether the GR vehicle number is validated in any way','File size and format limits on the uploads'],
      mostImportant:'Nothing connects this record to the claim that eventually depends on it. The driver name, the phone number and the vehicle photograph exist precisely so that a damaged carton found the next morning can be traced to somebody. No screen in the specified set consumes that trail.'
    },
    footer:'Prepared by Deepmindz Innovations Pvt Ltd for SpareCare \u00b7 WMS Inward \u00b7 Screen 4b \u00b7 Companion to FRD v0.11 \u00b7 Confidential. Illustrative and pre-approval \u2014 not agreed scope, and not a visual design.'
  },

  'screen-5a': {
    group:'IN-C · Receipt & Unload', eyebrow:'IN-C', screenId:'Screen 5A',
    screenName:'Truck unload initiation and GEN selection',
    headline:'Unload Truck — find the right consignment before touching the truck',
    intro:'Nothing is unloaded until the system knows which consignment is being unloaded. The operator selects the gate entry, the consignment fills itself in, and the invoices being unloaded in this session are chosen. Getting this wrong puts the wrong goods against the wrong number, and that is difficult to unpick once the boxes are on the floor.',
    chips:['Prepared by Deepmindz Innovations Pvt Ltd','Screen 5A','FR-005','Surface Handheld','FRD v0.11','Illustrative only'],
    sectionNote:'Drawn per the Session 07 correction: the GEN lookup is a panel within this screen, not a screen of its own, and it offers search criteria only.',
    caption:'Screen 5A · Unload Truck',
    markers: [{n:1, x:-1, y:4},{n:2, x:101, y:10},{n:3, x:-1, y:17},{n:4, x:101, y:26},{n:5, x:-1, y:40},{n:6, x:101, y:54},{n:7, x:-1, y:70},{n:8, x:101, y:80},{n:9, x:-1, y:95}],
    items:[
      {n:1,label:'Unload Truck',ref:'\u00a78.1',control:'Screen header',
       description:'The first unloading screen. Identifies the correct consignment before unloading commences.'},
      {n:2,label:'Gate Entry Number',ref:'FR-005.1, FR-005.3',control:'Search dropdown with clear',
       description:'Enter or select the GEN. On selection the system auto-populates GEN Date, Supplier Category, Supplier, Product Category, Primary Document Type, Document Number, Document Date and the associated invoices. The clear control resets the selection.'},
      {n:3,label:'Find GEN Using Other Details',ref:'FR-005.10, FR-005.11, OI-070',control:'In-screen search panel',
       description:'Opens over this screen. Search criteria only \u2014 Supplier Name, Supplier Category, Product Category, Document Number, Document Date and Status.',
       proposal:'The source board draws this as a separate screen carrying supplier name, receipt date and invoice capture fields, none of which belongs to a search. We have redrawn it as an in-screen panel with criteria only, which is what FR-005.10 and FR-005.11 require. OI-070 records the board as still to be corrected.'},
      {n:4,label:'Matching gate entries',ref:'FR-005.2',control:'Radio-button list',
       description:'Each result shows the GEN code, supplier, date, document number and a Pending Docs count. The operator picks one and the panel closes with the consignment loaded.'},
      {n:5,label:'Auto-populated consignment',ref:'FR-005.3',control:'Read-only display',
       description:'Seven values fill themselves from the gate entry record. None is editable here \u2014 they were captured at Receipt Details, and this screen reads them rather than re-asking.'},
      {n:6,label:'Select Documents to Unload',ref:'FR-005.4',control:'Multi-select dropdown',
       description:'Specific invoices within the GEN may be unloaded in this session. A consignment does not have to arrive on one vehicle.'},
      {n:7,label:'Document eligibility check',ref:'FR-005.7, FR-005.8, FR-005.9',control:'Rejection message',
       description:'A document number that is not eligible for the selected gate entry is refused outright rather than accepted and reconciled later. The operator must enter or select the correct document before the unload can proceed.'},
      {n:8,label:'Expected Boxes and Units',ref:'FR-005.4',control:'Counter strip', tone:'open',
       description:'The expected counts for the selected invoices, which become the baseline for the unload.',
       query:{text:'Where several invoices are selected, whether the expected box count is the sum of the invoices or the No. of Boxes in GEN recorded at Receipt Details is unstated \u2014 the same precedence problem as OI-066, one stage later.',ref:'OI-066',blocking:true}},
      {n:9,label:'Next',ref:'FR-005.5',control:'Action bar',
       description:'Proceeds to the transporter check. Disabled until a gate entry is selected \u2014 there is nothing to unload against without one.'}
    ],
    missing:{
      intro:'What this board does not answer.',
      statesNotDrawn:['No GEN selected \u2014 the screen before anything is chosen','The search returning no results','A GEN already partially unloaded in an earlier session','The rejection dialog for an ineligible document'],
      detailNotSpecified:['Whether search results are limited to this warehouse or the whole business','What the Pending Docs count counts','Whether a GEN can be unloaded across two sessions and how the second one opens','Sort order of the search results'],
      mostImportant:'Partial unloading is implied but never specified. FR-005.4 lets the operator unload specific invoices in this session, which means a consignment can be half received \u2014 but no screen shows what the second session looks like, what it treats as expected, or how the two reconcile against one GEN.'
    },
    footer:'Prepared by Deepmindz Innovations Pvt Ltd for SpareCare \u00b7 WMS Inward \u00b7 Screen 5A \u00b7 Companion to FRD v0.11 \u00b7 Confidential. Illustrative and pre-approval \u2014 not agreed scope, and not a visual design.'
  },

  'screen-5b': {
    group:'IN-C · Receipt & Unload', eyebrow:'IN-C', screenId:'Screen 5b',
    screenName:'Check transporter details before scanning',
    headline:'Check Transporter Details — the vehicle that actually turned up',
    intro:'The last screen before scanning starts. Everything is pre-filled from Receipt Details and everything is editable, because the truck on the paperwork and the truck at the dock are not always the same truck. The number plate is photographed for the same reason.',
    chips:['Prepared by Deepmindz Innovations Pvt Ltd','Screen 5b','FR-005','Surface Handheld','FRD v0.11','Illustrative only'],
    sectionNote:'Short by design. An operator standing at a truck should confirm four things and start scanning.',
    caption:'Screen 5b · Transporter check',
    markers: [{n:1, x:-1, y:5},{n:2, x:101, y:14},{n:3, x:-1, y:24},{n:4, x:101, y:38},{n:5, x:-1, y:50},{n:6, x:101, y:66},{n:7, x:-1, y:78}],
    items:[
      {n:1,label:'Check Transporter Details',ref:'\u00a78.4',control:'Screen header',
       description:'The final step before box scanning begins.'},
      {n:2,label:'Consignment context',ref:'FR-005.3',control:'Read-only display',
       description:'GEN and supplier carried through from the selection made on Screen 5A.'},
      {n:3,label:'Everything is editable',ref:'FR-005.5',control:'Info note',
       description:'All fields are pre-filled from Screen 4b and all remain editable, to accommodate changes at the time of physical truck arrival.'},
      {n:4,label:'Transporter and driver',ref:'\u00a78.4',control:'Dropdown and text inputs',
       description:'Transporter name, driver name and driver contact number, each pre-filled if captured earlier.'},
      {n:5,label:'Call the driver',ref:'\u00a78.4',control:'Phone action', tone:'open',
       description:'A phone control beside the number so the operator can call from the terminal.',
       query:{text:'Whether the call is placed by the device dialler, a softphone, or a masked number that protects the driver\u2019s privacy is not specified.',ref:'\u00a78.4'}},
      {n:6,label:'Truck / Vehicle No. Reported',ref:'FR-005.6',control:'Text input + camera',
       description:'The registration number as physically observed at the gate during unloading. This may differ from the number in the GR documents if the truck was changed en route, and both are kept.'},
      {n:7,label:'Number plate photograph',ref:'FR-005.6',control:'Camera capture',
       description:'Evidence of the actual vehicle present during unloading.',
       proposal:'FR-005.6 supports the capture but does not require it. We have surfaced a mismatch warning when the reported number differs from the GR document, and made the photograph prominent rather than optional-looking, because a mismatch recorded without evidence is worth little in a claim.'}
    ],
    missing:{
      intro:'What a build would still need.',
      statesNotDrawn:['Nothing pre-filled \u2014 transporter never captured at Receipt Details','The camera view and a failed capture','Mismatch acknowledged and the unload proceeding anyway'],
      detailNotSpecified:['Whether a vehicle mismatch requires a reason or an approval','Whether the photograph is mandatory when the numbers differ','Format validation on the registration number','Who is notified when the vehicle differs from the document'],
      mostImportant:'A vehicle mismatch is drawn as a warning and nothing more. If the truck at the dock is not the truck on the paperwork, that is either routine or the beginning of a problem, and the specification does not say which \u2014 nor who decides.'
    },
    footer:'Prepared by Deepmindz Innovations Pvt Ltd for SpareCare \u00b7 WMS Inward \u00b7 Screen 5b \u00b7 Companion to FRD v0.11 \u00b7 Confidential. Illustrative and pre-approval \u2014 not agreed scope, and not a visual design.'
  },

  'screen-6c': {
    group:'IN-C · Receipt & Unload', eyebrow:'IN-C', screenId:'Screen 6c',
    screenName:'Check variance',
    headline:'Check Variance — what came off the truck against what should have',
    intro:'The close of the unloading session. Two boxes short of the document is a fact that has to exist somewhere before the vehicle leaves and the paperwork is filed. This screen is where it does, along with the condition of everything received and a printable record of both.',
    chips:['Prepared by Deepmindz Innovations Pvt Ltd','Screen 6c','FR-006','Surface Handheld + Web','FRD v0.11','Illustrative only'],
    sectionNote:'Specified for the handheld, but read by warehouse operations as much as by the operator who produced it \u2014 FR-032 notes that a report which only exists on a handheld is difficult to review.',
    caption:'Screen 6c · Check Variance',
    markers: [{n:1, x:-1, y:4},{n:2, x:101, y:13},{n:3, x:-1, y:26},{n:4, x:101, y:36},{n:5, x:-1, y:50},{n:6, x:101, y:64},{n:7, x:-1, y:80},{n:8, x:101, y:95}],
    items:[
      {n:1,label:'Check Variance',ref:'FR-006.9',control:'Screen header',
       description:'Reached from Finish Truck Unload, which commits the session and flags any unscanned boxes as Balance.'},
      {n:2,label:'Shortfall statement',ref:'FR-006.10',control:'Info note',
       description:'States plainly how many boxes the session closed short, and that the shortfall is recorded against this GEN.',
       proposal:'The FRD specifies the variance tables but not a plain statement above them. A storekeeper closing a truck at six in the morning should not have to read a table to learn there is a problem.'},
      {n:3,label:'Quantity Variance',ref:'FR-006.9',control:'Read-only comparison table',
       description:'As Per Document, Actual and Variance, at box level. A negative variance is red, a positive one amber, and zero green \u2014 traffic-light colours, outside the brand palette on purpose.'},
      {n:4,label:'Units are not counted here',ref:'FR-006.18',control:'Explanatory note',
       description:'Where a Units column appears it is derived from document data, not from physical counting. Unit-level verification and the resulting reconciliation happen at Consignment Check, because the transport vehicle cannot be held while every carton is opened.'},
      {n:5,label:'Quality Variance',ref:'FR-006.9',control:'Summary table',
       description:'Condition issues tabulated across all boxes in the consignment: Damage, Tampered Packaging, Scratch, Broken, Wrong Delivery, and a Total.'},
      {n:6,label:'Unload Completion and Exception Summary',ref:'FR-006.16',control:'Status block',
       description:'States whether the unload completed, how many boxes were marked as exceptions, and confirms that the associated open delivery actions have been enabled and handled.'},
      {n:7,label:'Document-wise breakdown',ref:'FR-006.17, \u00a79.6',control:'Summary table', tone:'open',
       description:'Expected, received and variance per invoice \u2014 named in the Print Summary contents and in the filled-state composite.',
       query:{text:'The FRD names a document-wise breakdown in the printed record but gives it no field reference, so its columns are inferred. Confirm what it should carry.',ref:'FR-006.17'}},
      {n:8,label:'Print Summary and Proceed',ref:'FR-006.17',control:'Action bar', tone:'open',
       description:'Print Summary produces a printable record covering quantity variance, the document-wise breakdown, quality variance and the exception summary. Proceed moves the consignment to Consignment Check.',
       query:{text:'Reconciliation of ordered quantity against quantity actually received is not captured during unloading. Confirm that the delta is established at Consignment Check when boxes are opened, and define where the shortfall is reported and to whom.',ref:'OI-012',blocking:true},
       proposal:'The layout of the printed record is not specified. We have assumed it mirrors this screen.'}
    ],
    missing:{
      intro:'What this board does not answer.',
      statesNotDrawn:['Zero variance \u2014 everything received, nothing flagged','A positive variance, where more boxes arrived than the document lists','No exceptions at all','The printed record itself','The same report on the web surface'],
      detailNotSpecified:['Who is notified of a shortfall, and when','Whether the variance can be disputed or amended after the session closes','Whether a shortfall blocks the consignment from proceeding','How a Set Aside box is represented in these counts'],
      mostImportant:'Nothing here raises a claim. The screen establishes that two boxes are missing and that four arrived damaged, and then the flow moves on to Consignment Check. OI-023 records that the insurance claim workflow is undefined beyond the point of segregation \u2014 which means the most valuable output of the whole unloading process currently has no consumer.'
    },
    footer:'Prepared by Deepmindz Innovations Pvt Ltd for SpareCare \u00b7 WMS Inward \u00b7 Screen 6c \u00b7 Companion to FRD v0.11 \u00b7 Confidential. Illustrative and pre-approval \u2014 not agreed scope, and not a visual design.'
  }
});
