/* Batch 2 — FR-007 and FR-008. Unload exceptions: no shipment document (6d, 6e, 6f) and
   box sticker generation for non-scannable consignments (6g, 6h).
   Markers sit in the 30px gutters, as Batch 1. */
Object.assign(window.SC_HH_ANNO, {

  'screen-6d': {
    group: 'IN-D · Unload Exceptions',
    eyebrow: 'IN-D',
    screenId: 'Screen 6d',
    screenName: 'Unload Truck — no shipment document',
    headline: 'Unloading with nothing to check against',
    intro: 'A significant share of consignments arrive with no ship list. The truck cannot wait for one. This is Screen 6a with the manifest removed: the expected box list and the ship-list comparison are suppressed, the boxes are still scanned one at a time, and the only expected figure left is the box count keyed at Receipt Details. Everything after identification — condition, open delivery, photograph, remarks — behaves exactly as it does with a document.',
    chips: ['Prepared by Deepmindz Innovations Pvt Ltd', 'Screen 6d', 'FR-007', 'Surface Handheld', 'FRD v0.11', 'Illustrative only'],
    sectionNote: 'Rugged handheld, 412 \u00d7 880 dp. Reduced mode is a state of the unloading screen, not a different screen \u2014 the operator reaches it because the GEN has no document, not because he chose it.',
    caption: 'Screen 6d \u00b7 Reduced-mode unloading',
    markers: [
      {n:1, x:-1, y:5},
      {n:2, x:101, y:15},
      {n:3, x:-1, y:23},
      {n:4, x:101, y:30},
      {n:5, x:-1, y:36},
      {n:6, x:101, y:47},
      {n:7, x:-1, y:58},
      {n:8, x:101, y:78},
      {n:9, x:-1, y:87},
      {n:10, x:101, y:95}
    ],
    items: [
      {n:1, label:'Unload Truck', ref:'\u00a710.1', control:'Screen header',
       description:'The same screen title as Screen 6a. The operator is doing the same job; only the reference data behind it has gone.'},
      {n:2, label:'Shipment document not available.', ref:'FR-007.1', control:'Persistent banner',
       description:'States why the expected-box controls are absent. Persistent rather than dismissible — an operator who scrolls past it and then finds no ship list panel would otherwise assume a fault.',
       proposal:'The FRD fixes the banner text but not what else is suppressed on screen. We have removed the Shipment Details (Shiplist) panel, the Mismatch with Shiplist exception strip and the Balance counter, and left the rest of Screen 6a intact.'},
      {n:3, label:'Gate Entry Number and Supplier', ref:'\u00a710.3', control:'Read-only display',
       description:'Carried forward from the gate entry record. The Document Number row present on Screen 6a is absent here, because there is no document.'},
      {n:4, label:'Scan / Enter Primary Box', ref:'FR-007.2', control:'Scan field + keyboard toggle',
       description:'The primary box code printed on the outer carton identifies each box. Where that code is illegible, damaged or absent, the system accepts manual entry of the part number printed on the carton as the alternative identifier.',
       query:{text:'A part number is not unique to a box — a consignment of twenty identical filters would produce twenty boxes carrying the same identifier. How the system distinguishes them, or whether it appends a sequence, is not stated.', ref:'OI-079', blocking:true}},
      {n:5, label:'Record as OK / Record & check condition', ref:'FR-007.4', control:'Button pair',
       description:'FR-007.4 requires every box to be assessed, not only the exceptions. A hundred sound cartons would otherwise mean a hundred trips through the condition screen.',
       proposal:'The two-button split is ours. The FRD states the assessment requirement and the condition set; it does not say how an operator records "OK" quickly. Without a fast path the mandatory assessment will be defeated in practice on the first busy morning.'},
      {n:6, label:'Box Unloading (Box Number Wise)', ref:'FR-007.6', control:'Summary tiles',
       description:'Unloaded, OK and Not OK, updated as each box is processed. Balance does not appear here as a fourth tile; it sits in the variance summary below, against the expected count.'},
      {n:7, label:'Box list — Box No. / Quality / Status', ref:'FR-007.3', control:'Scrollable table',
       description:'One row per box processed, showing the recorded quality and a status indicator. Tapping a row reopens Screen 6e so an earlier assessment can be corrected.'},
      {n:8, label:'Variance Summary (Box Number Wise)', ref:'FR-007.6, FR-007.15', control:'Summary strip',
       description:'Boxes unloaded against the expected count, with the remaining balance. This replaces the document-based variance available when a ship list exists.',
       proposal:'The source artwork reconciles against the gate entry count. Session 07 Part 3 corrected that: FR-007.15 makes the baseline the No. of Boxes in GEN recorded at Receipt Details on Screen 4a, because the gate figure is indicative. We have drawn the corrected version and labelled the column Expected (Screen 4a) so the source of the number is visible on the screen.'},
      {n:9, label:'Ordered against received is not reconciled here', ref:'FR-007.10', control:'Info note',
       description:'With no document there is nothing to compare the received quantity to. The shortfall is established at Consignment Check, once boxes are opened and contents counted.',
       query:{text:'Where the invoice arrives later in the day, as it commonly does, nothing in the FRD describes attaching it to a GEN already unloaded and running the comparison retrospectively. The layman description of \u00a710.1 assumes this happens; no requirement provides for it.', ref:'OI-080', blocking:true}},
      {n:10, label:'Save and Check Variance', ref:'\u00a710.3, FR-006.11', control:'Pinned action bar',
       description:'Save persists the session without closing it. Check Variance opens the variance view. Note that Finish Unload is not offered on this screen in the source artwork — it appears on Screen 6f — so the commit point for a scanned reduced-mode session is unstated.',
       query:{text:'Screen 6d ends at Check Variance and Screen 6f ends at Finish Unload. FR-007.11 gives Finish Unload the commit role for both. Where the scanned reduced-mode session is committed is undefined.', ref:'OI-081'}}
    ],
    missing: {
      intro: 'Drawn as one steady state. These are the things that would follow once the questions above are settled.',
      statesNotDrawn: [
        'Empty — the screen before the first box is scanned',
        'The keyboard fallback in use, with a part number keyed instead of a scan',
        'A duplicate scan of a box already recorded',
        'Unloaded exceeding the expected count',
        'The ship list arriving mid-session, and the screen leaving reduced mode',
        'Offline at the dock'
      ],
      detailNotSpecified: [
        'Whether a scanned box can be deleted from the list, as FR-006.2 allows with a document',
        'Whether the part-number fallback is recorded as such, or indistinguishable from a scan',
        'What the Check Variance view contains when there is no document to vary from',
        'Whether the expected count can be amended from this screen when the paperwork is wrong'
      ],
      mostImportant: 'Reduced mode is described as a suppression of controls, but it is also a suppression of assurance. With a ship list, an unexpected box is caught the moment it is scanned. Without one, every box scanned is accepted, and the first opportunity to notice that the vehicle carried goods for another consignee is at Consignment Check — by which time the truck has gone. OI-013 records the ownership gap; nothing in FR-007 closes it.'
    },
    footer: 'Prepared by Deepmindz Innovations Pvt Ltd for SpareCare \u00b7 WMS Inward \u00b7 Screen 6d \u00b7 Companion to FRD v0.11 \u00b7 Confidential. Illustrative and pre-approval \u2014 not agreed scope, and not a visual design.'
  },

  'screen-6e': {
    group: 'IN-D · Unload Exceptions',
    eyebrow: 'IN-D',
    screenId: 'Screen 6e',
    screenName: 'Update Box Condition — no shipment document',
    headline: 'The condition flow does not change when the paperwork is missing',
    intro: 'FR-007.5 is unusually firm: where a box is assessed as anything other than OK, the open delivery recommendation, mandatory photo capture, optional remarks and the Recent Box Entries log apply without modification. An exception raised in reduced mode is handled identically to one raised against a ship-list consignment. This screen is therefore Screen 6b with two differences — a notice instead of a mismatch strip, and an assessment required on every box rather than only on exceptions.',
    chips: ['Prepared by Deepmindz Innovations Pvt Ltd', 'Screen 6e', 'FR-007', 'Surface Handheld', 'FRD v0.11', 'Illustrative only'],
    sectionNote: 'Rugged handheld, 412 \u00d7 880 dp. Drawn in the Damaged state so the conditional controls — the open delivery recommendation and the mandatory photograph — are both visible.',
    caption: 'Screen 6e \u00b7 Condition, reduced mode',
    markers: [
      {n:1, x:-1, y:5},
      {n:2, x:101, y:21},
      {n:3, x:-1, y:29},
      {n:4, x:101, y:45},
      {n:5, x:-1, y:54},
      {n:6, x:101, y:68},
      {n:7, x:-1, y:82},
      {n:8, x:101, y:96}
    ],
    items: [
      {n:1, label:'Scanned box header', ref:'\u00a710.4', control:'Read-only display',
       description:'The scanned box number with a Scanned Box sub-label. Identifies which box the condition is being recorded against — the only thing on this screen that ties the assessment to a physical carton.'},
      {n:2, label:'Quality update is required for each box', ref:'FR-007.4', control:'Static notice',
       description:'With no manifest to validate against, the condition assessment is mandatory for every box rather than only for exceptions. The notice explains a rule the operator would otherwise experience as the screen refusing to close.'},
      {n:3, label:'Box Condition', ref:'FR-007.4, FR-006.4', control:'Radio group, six options',
       description:'OK, Packing Tampered, Damaged, Visible Scratch, Without Packing, Wrong Delivery. Single selection. The same set as FR-006.4, unchanged — deliberately, so that reporting across the two modes is comparable.'},
      {n:4, label:'Open Delivery', ref:'FR-007.5', control:'Toggle with Recommended tag',
       description:'Recommended automatically where the selected condition indicates damage or tampering, and the explanatory line names the condition that triggered it. The operator may override.',
       query:{text:'An override is permitted but nothing records who overrode the recommendation or why. Where a damaged box is later claimed against the supplier, the absence of an open delivery becomes the first question asked.', ref:'OI-082'}},
      {n:5, label:'Take Photo (Mandatory)', ref:'FR-006.28, FR-007.5', control:'Camera capture with thumbnail',
       description:'The control is labelled Mandatory without qualification, but FR-006.28 makes the rule conditional: the photograph is required where the recorded condition is anything other than OK, and the box entry cannot be saved until it is captured. Retake / Change replaces the image.',
       proposal:'We have drawn Save Condition as disabled until the photograph exists, rather than letting the operator press it and receive an error. The FRD states the rule but not the enforcement.'},
      {n:6, label:'Remarks (Optional)', ref:'\u00a710.4', control:'Multi-line text, 250 characters',
       description:'Free-text description of the observed condition, with a live character counter. Optional in every condition state.'},
      {n:7, label:'Recent Box Entries', ref:'FR-006.14, FR-007.5', control:'Scrollable log',
       description:'Recently processed boxes with box number, quality, status and timestamp. Carried into reduced mode unchanged. View All opens the full session log, which is not drawn.'},
      {n:8, label:'Cancel and Save Condition', ref:'\u00a710.4', control:'Pinned action bar',
       description:'Cancel discards the assessment for this box; Save Condition commits it and returns to Screen 6d.',
       query:{text:'Cancelling on a box that has already been scanned leaves a box in the unloaded list with no quality recorded, which FR-007.4 forbids. Whether Cancel also removes the scan is not stated.', ref:'OI-083'}}
    ],
    missing: {
      intro: 'One condition state is drawn. The rest of the matrix is not.',
      statesNotDrawn: [
        'OK selected — open delivery and photograph both collapsed away',
        'Wrong Delivery, where the box belongs to another consignee entirely',
        'Photograph not yet captured, with Save Condition disabled',
        'A box reopened from the list to correct an earlier assessment',
        'The camera view itself, and a failed capture'
      ],
      detailNotSpecified: [
        'Whether more than one photograph can be attached to a box',
        'Whether a saved condition can be changed after Finish Unload',
        'Whether remarks are visible downstream at Consignment Check',
        'Image resolution, storage and retention for claim evidence'
      ],
      mostImportant: 'Wrong Delivery is in the condition set, but in reduced mode it cannot be established. Deciding a box was wrongly delivered requires knowing what was expected, and there is no document. The operator can select it, and the system will record it, on the basis of nothing.'
    },
    footer: 'Prepared by Deepmindz Innovations Pvt Ltd for SpareCare \u00b7 WMS Inward \u00b7 Screen 6e \u00b7 Companion to FRD v0.11 \u00b7 Confidential. Illustrative and pre-approval \u2014 not agreed scope, and not a visual design.'
  },

  'screen-6f': {
    group: 'IN-D · Unload Exceptions',
    eyebrow: 'IN-D',
    screenId: 'Screen 6f',
    screenName: 'Unload Truck — counter approach',
    headline: 'When there is nothing to scan, count',
    intro: 'The second reduced-mode sub-scenario: no document, and boxes that carry no readable code. The operator increments a counter once per box and raises exceptions separately against references the system issues. It is the cheapest of the three configured approaches and the least traceable — a total, plus a short list of the boxes that were not right.',
    chips: ['Prepared by Deepmindz Innovations Pvt Ltd', 'Screen 6f', 'FR-007', 'Surface Handheld', 'FRD v0.11', 'Illustrative only'],
    sectionNote: 'Rugged handheld, 412 \u00d7 880 dp. The counter is sized for a gloved thumb on a moving dock; it is the only control the operator touches for most of the session.',
    caption: 'Screen 6f \u00b7 Counter approach',
    markers: [
      {n:1, x:-1, y:13},
      {n:2, x:101, y:22},
      {n:3, x:-1, y:31},
      {n:4, x:101, y:41},
      {n:5, x:-1, y:48},
      {n:6, x:101, y:54},
      {n:7, x:-1, y:60},
      {n:8, x:101, y:76},
      {n:9, x:-1, y:95}
    ],
    items: [
      {n:1, label:'No shipment details and boxes are not scannable.', ref:'FR-007.8, \u00a710.5', control:'Static banner',
       description:'Confirms the two conditions that together caused the counter approach to be applied. Both must hold: a missing document alone routes to Screen 6d, where boxes are still scanned.'},
      {n:2, label:'Gate Entry Number and Supplier', ref:'\u00a710.5', control:'Read-only display',
       description:'Consignment identification carried forward from the gate entry record.'},
      {n:3, label:'Configured Unload Approach', ref:'FR-007.7', control:'Read-only panel with Set by Admin tag',
       description:'The method configured for this scenario by the dealer admin. Not editable at the point of unloading — the operator sees which regime applies but cannot switch to another because it would be quicker.'},
      {n:4, label:'Use Counter', ref:'FR-007.8, FR-007.15', control:'Numeric display with increment control',
       description:'Incremented once per box unloaded, with the running count displayed large. This figure is the received box count for the session, reconcilable against the expected count recorded at Receipt Details.',
       query:{text:'There is no decrement. A double-tap, or a tap on a box that is then set aside, cannot be undone. With no per-box record there is also no way to identify which increment was wrong.', ref:'OI-085', blocking:true}},
      {n:5, label:'The two configurations not in force', ref:'FR-007.12, FR-007.14', control:'Read-only footnote',
       description:'Session 07 established three separately configurable options, not two: print and scan back stickers, tap counter per box, and plain total count entry.',
       proposal:'Naming the other two on screen is ours. FR-007.7 requires only that the configured approach be displayed. An operator who cannot see that alternatives exist has no way to tell a deliberate configuration from a system default, and no vocabulary to raise it with the admin.'},
      {n:6, label:'Plain total count entry is not drawn', ref:'FR-007.13', control:'Not drawn', tone:'open',
       description:'The third option records a single manual total with no per-box tracking, no scanning and no incrementing. It has no screen number in the FRD and no artwork.',
       query:{text:'FR-007.13 defines a third counting option that no screen in the document provides for. Either it is a variant of Screen 6f with the counter replaced by a numeric field and the Box Quality Update section removed, or it needs a screen of its own. A screen number must be allocated before it can be drawn.', ref:'OI-084', blocking:true}},
      {n:7, label:'Box Quality Update and Add Not OK Box', ref:'FR-007.9', control:'Table with action',
       description:'Raises an exception without scanning. The system issues a temporary box reference so the exception can be tracked even though the box carries no supplier identifier, and the remaining boxes continue to be counted in bulk.'},
      {n:8, label:'Each exception opens the same condition flow', ref:'FR-007.5, \u00a710.5', control:'Static helper note',
       description:'Condition, Open Delivery, Photo and Remarks are identical across all three unload approaches. The note is on the screen because the operator arriving here from a scanned consignment needs to know nothing else has changed.'},
      {n:9, label:'Save and Finish Unload', ref:'FR-007.11', control:'Pinned action bar',
       description:'Finish Unload commits the session. Every box counted and every exception raised is carried forward to Consignment Check as the received population for this GEN.'}
    ],
    missing: {
      intro: 'The steady state of a counting session. What is not here:',
      statesNotDrawn: [
        'Counter at zero, before unloading starts',
        'Count exceeding the expected figure from Receipt Details',
        'No exceptions raised — the Box Quality Update table empty',
        'The plain total count entry configuration (FR-007.13)',
        'The confirmation shown when Finish Unload is pressed with a remaining balance'
      ],
      detailNotSpecified: [
        'The format of the temporary box reference — the artwork shows BOX-001 here and BX-nnnn on the sticker approach',
        'Whether the counter can be corrected, and by whom',
        'Whether an exception box is included in the counter total or counted separately',
        'What Consignment Check receives when boxes have no individual identity'
      ],
      mostImportant: 'The counter produces a number nobody can audit. If the count is 48 and the invoice later says 50, there is no record of which boxes were counted, so the two missing boxes cannot be described, photographed or claimed — only asserted. That is the trade the configuration makes, and it should be made with the finance team in the room, not by the admin alone.'
    },
    footer: 'Prepared by Deepmindz Innovations Pvt Ltd for SpareCare \u00b7 WMS Inward \u00b7 Screen 6f \u00b7 Companion to FRD v0.11 \u00b7 Confidential. Illustrative and pre-approval \u2014 not agreed scope, and not a visual design.'
  },

  'screen-6g': {
    group: 'IN-D · Unload Exceptions',
    eyebrow: 'IN-D',
    screenId: 'Screen 6g',
    screenName: 'Print Box Stickers',
    headline: 'Giving a box an identity it did not arrive with',
    intro: 'The most constrained scenario: no shipment document and no scannable code on the carton. Counting alone gives a total but leaves no way to attach a condition, a photograph or a remark to a specific physical box. The system generates its own references, prints them, and the operator pastes one on each box as it comes off. From that point the boxes are scannable and the standard flow resumes.',
    chips: ['Prepared by Deepmindz Innovations Pvt Ltd', 'Screen 6g', 'FR-008', 'Surface Handheld', 'FRD v0.11', 'Illustrative only'],
    sectionNote: 'Rugged handheld, 412 \u00d7 880 dp, paired with a label printer at the bay. Whether that printer exists at every dock is the first question this approach raises.',
    caption: 'Screen 6g \u00b7 Print Box Stickers',
    markers: [
      {n:1, x:-1, y:12},
      {n:2, x:101, y:22},
      {n:3, x:-1, y:29},
      {n:4, x:101, y:37},
      {n:5, x:-1, y:52},
      {n:6, x:101, y:70},
      {n:7, x:-1, y:84},
      {n:8, x:101, y:95}
    ],
    items: [
      {n:1, label:'No shipment details and boxes are not scannable.', ref:'\u00a711.3', control:'Static banner',
       description:'The same two conditions that route to the counter approach. Which of the two the dealer gets is a configuration decision, not an operator one.'},
      {n:2, label:'Gate Entry Number and Supplier', ref:'\u00a711.3', control:'Read-only display',
       description:'Consignment identification carried forward from the gate entry record. The references generated below are sequential within this GEN.'},
      {n:3, label:'Print Box Stickers & Scan', ref:'FR-008.1', control:'Read-only panel with Set by Admin tag',
       description:'The sticker approach as configured by the dealer admin, with the helper text specified by FR-008.1: use printed stickers to unload and track boxes.'},
      {n:4, label:'Total Boxes to Print', ref:'FR-008.2', control:'Numeric field with generate control',
       description:'Defaults to the box count recorded at gate entry and remains editable, so a discrepancy discovered at the dock can be accommodated without going back.',
       query:{text:'FR-008.2 defaults this to the gate entry count, but FR-007.15 removed the gate entry count as a reconciliation baseline because it is indicative. Defaulting a printing quantity to a figure the document elsewhere disowns will produce the wrong number of stickers more often than not. Whether the default should instead be the Receipt Details count needs deciding.', ref:'OI-086', blocking:true}},
      {n:5, label:'Sticker Preview', ref:'FR-008.3, FR-008.4', control:'Preview grid',
       description:'Generated references in the format BX-nnnn, sequential within the GEN. Each sticker carries the reference as human-readable text, a QR code and a linear barcode, so it can be read by either scanner type in use at the dealership.',
       proposal:'The label layout is not specified. The tiles here are placeholders showing the three elements FR-008.4 requires, not a label template — physical size, material, adhesive and print resolution all need settling with whoever supplies the printer.'},
      {n:6, label:'Print and paste one sticker on each unloaded box.', ref:'FR-008.5', control:'Static helper note',
       description:'The operating instruction, shown beneath the preview. The whole approach depends on this step being done correctly and in order; nothing in the system can verify that it was.'},
      {n:7, label:'Box ownership is unverified', ref:'FR-008.9', control:'Info note',
       description:'With neither a ship list nor a supplier code, the system cannot establish that a given box belongs to this dealer rather than to another consignee sharing the vehicle. Ownership is confirmed at Consignment Check, when the box is opened and its contents identified.',
       query:{text:'The system will happily print a sticker for, and accept, a box belonging to someone else. FR-008.9 acknowledges this and defers it. What happens when Consignment Check finds a box that is not the dealer\u2019s — after a sticker has been pasted on it and a reference issued against this GEN — is not described.', ref:'OI-013', blocking:true}},
      {n:8, label:'Back and Print n Stickers', ref:'FR-008.5', control:'Pinned action bar',
       description:'The full set prints in a single action and the button label reflects the count entered. Back returns without printing.'}
    ],
    missing: {
      intro: 'What a printing screen has to handle, and what is not yet described.',
      statesNotDrawn: [
        'Before generation — the preview grid empty',
        'A large consignment, where the preview cannot show every sticker',
        'No printer paired, or the printer offline',
        'A print failing part-way through the roll',
        'Reprinting a single damaged or mispasted sticker'
      ],
      detailNotSpecified: [
        'Whether printing can happen at the bay or only from an office terminal',
        'Whether a generated reference can be voided, and what happens to the gap in the sequence',
        'Whether the count can be increased after printing when extra boxes appear',
        'The physical label specification — size, material, adhesive, print resolution'
      ],
      mostImportant: 'Nothing verifies that sticker BX-0006 went onto the sixth box rather than the ninth. The reference is meaningful only if the paste order is correct, and the paste is done by hand on a moving dock. Every downstream claim that names a box depends on an unverifiable manual step, which is worth stating plainly before the approach is configured for a warehouse.'
    },
    footer: 'Prepared by Deepmindz Innovations Pvt Ltd for SpareCare \u00b7 WMS Inward \u00b7 Screen 6g \u00b7 Companion to FRD v0.11 \u00b7 Confidential. Illustrative and pre-approval \u2014 not agreed scope, and not a visual design.'
  },

  'screen-6h': {
    group: 'IN-D · Unload Exceptions',
    eyebrow: 'IN-D',
    screenId: 'Screen 6h',
    screenName: 'Update Box Condition — printed sticker',
    headline: 'The sticker changes how a box is identified, never how it is handled',
    intro: 'FR-008.7 states it directly: condition assessment, the open delivery recommendation, mandatory photo capture, remarks and the Recent Box Entries log behave identically to FR-006 and FR-007. This screen is Screen 6e with one change — the reference in the header was issued by the system, not by the supplier, and the screen says so.',
    chips: ['Prepared by Deepmindz Innovations Pvt Ltd', 'Screen 6h', 'FR-008', 'Surface Handheld', 'FRD v0.11', 'Illustrative only'],
    sectionNote: 'Rugged handheld, 412 \u00d7 880 dp. Drawn in the Damaged state, matching Screen 6e, so the two can be compared directly.',
    caption: 'Screen 6h \u00b7 Condition, printed sticker',
    markers: [
      {n:1, x:-1, y:5},
      {n:2, x:101, y:9},
      {n:3, x:-1, y:21},
      {n:4, x:101, y:30},
      {n:5, x:-1, y:56},
      {n:6, x:101, y:82},
      {n:7, x:-1, y:96}
    ],
    items: [
      {n:1, label:'Printed Sticker Scanned', ref:'FR-008.6, \u00a711.4', control:'Read-only header',
       description:'The temporary box reference with a sub-label distinguishing it from a supplier-issued box number. The scan confirms the sticker was pasted and read back successfully — the moment the box acquires an identity.'},
      {n:2, label:'System-generated, not supplier-issued', ref:'FR-008.8', control:'Sub-label',
       description:'Each temporary reference is flagged as system-generated so that reconciliation, returns and any subsequent claim against the supplier do not treat it as a manifest reference. A supplier told "carton BX-0006 was crushed" will not recognise the number, and the claim has to describe the box some other way.',
       proposal:'Stating it on the condition screen is ours. FR-008.8 requires the flag in the data; it does not require it to be visible. The operator raising the exception is the person who will later be asked what the number means.'},
      {n:3, label:'Update quality before saving.', ref:'FR-008.6', control:'Static notice',
       description:'A condition assessment is required for every box under this approach, as it is under FR-007.4 — the sticker gives the box an identity, which is precisely what makes a per-box assessment possible.'},
      {n:4, label:'Box Condition', ref:'FR-008.7, FR-006.4', control:'Radio group, six options',
       description:'The same six conditions, unchanged: OK, Packing Tampered, Damaged, Visible Scratch, Without Packing, Wrong Delivery.'},
      {n:5, label:'Open Delivery, Photo, Remarks', ref:'FR-008.7', control:'Toggle, camera capture, text',
       description:'Identical to Screen 6e and Screen 6b. The recommendation fires on a damaging condition, the photograph is mandatory where the condition is other than OK, and remarks stay optional at 250 characters.'},
      {n:6, label:'Recent Box Entries', ref:'\u00a711.4', control:'Scrollable log',
       description:'Processed boxes with reference, quality, status and timestamp. Under this approach every entry carries a system-generated reference, so the log is a record of the identities the system created rather than of identities it read.'},
      {n:7, label:'Cancel and Save Condition', ref:'\u00a711.4', control:'Pinned action bar',
       description:'Cancel discards the assessment; Save Condition commits it and returns to scanning.'}
    ],
    missing: {
      intro: 'Only the Damaged state is drawn. What follows from the sticker approach specifically:',
      statesNotDrawn: [
        'A sticker scanned that was never generated for this GEN',
        'The same sticker scanned twice',
        'A box found with no sticker after unloading finished',
        'OK selected, with the conditional controls collapsed'
      ],
      detailNotSpecified: [
        'Whether a temporary reference persists beyond the inward process, onto the bin and into stock records',
        'Whether the reference appears on a claim document, and how it is explained to the supplier',
        'What links a temporary reference to the part it eventually turns out to contain',
        'Whether two consignments from the same supplier can reuse a reference'
      ],
      mostImportant: 'FR-008.9 says the reference lives for the rest of the box\u2019s life in the warehouse, but the FRD does not follow it past Consignment Check. If the reference stops there, the traceability the whole approach was built for ends at the point the box is opened — which is the point most inward disputes actually begin.'
    },
    footer: 'Prepared by Deepmindz Innovations Pvt Ltd for SpareCare \u00b7 WMS Inward \u00b7 Screen 6h \u00b7 Companion to FRD v0.11 \u00b7 Confidential. Illustrative and pre-approval \u2014 not agreed scope, and not a visual design.'
  }
});
