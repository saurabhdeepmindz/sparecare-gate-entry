# WMS Inward — Screens 1 to 3

High-fidelity recreation of the SpareCare WMS Inward module's first three screens, drawn from the wireframe artwork embedded in `Sparecare_WMS_Inward_FRD-v11.docx` (composite at `scraps/frd-media/image8.jpg`) and cross-checked field by field against the FRD's Screen Field Reference tables.

`index.html` has two modes, toggled in the header:

- **Annotated wireframes** — the deliverable. All three screens side by side, each with numbered callout circles and a legend beneath mapping every number to its FR requirement or FRD section. Amber callouts mark behaviour the FRD records as an open issue.
- **Click-through prototype** — the same screens, interactive. Type a driver name and contact number, tap Next to generate a GEN, move to Consignment Details, toggle the workflow steps, then land on the dashboard and switch queues and aging buckets. A fourth tab shows Gate Entry on the web surface.

## Screens

| File | Screen | FRD | Surface |
| --- | --- | --- | --- |
| `Screen1GateEntry.jsx` | Screen 1 — Create GEN | FR-001 | Handheld + Web |
| `Screen2ConsignmentDetails.jsx` | Screen 2 — Enter Consignment Details | FR-002 | Handheld + Web |
| `Screen3Dashboard.jsx` | Screen 3 — Inward Operations Dashboard | FR-003 | Web (supervisor) |
| `GateEntryWeb.jsx` | Screen 1 on the web surface | FR-032.5 | Web |
| `annotations.js` | Callout data for all three screens | — | — |
| `open-issues.html` | The eight open issues touching these screens | §44 | — |

## Deviations from the source artwork, and why

Three fields appear here that are **not** in the artwork. All three are required by the Session 07 amendments recorded in the FRD, which post-date the wireframes:

- **Date & Time of Receipt** — FR-001.9/.10. Mandatory, system-captured, not configurable. Rendered read-only on a sunken tint precisely because §4.4 notes it must not look like an input that can be left blank.
- **Nature of Inward Transaction** — FR-001.11 with FR-030.1. Six values. The reason a consignment is entering determines ownership, whether a payment is due, and what it is reconciled against.
- **No. of Boxes** — FR-001.12 with FR-001.21. Carried with an explicit "indicative only" hint, since it must not be used as the reconciliation baseline.

Two labels were corrected against the artwork: the queue tables read **GEN** rather than "Inward Code" (FR-036, OI-059), and Courier Type carries the five BRD values with *Self-foot* removed (FR-001.20).

The **aging bucket filter** on Screen 3 is new — FR-003.6/.7 requires it and the artwork has no time dimension at all.

## Not covered

Screens 4a onward (FR-004 → FR-040): Receipt Details, Truck Unload, box scanning and condition, unloading without a shipment document, sticker generation, consignment check, direct binning Cases 1A–1D and 2A–2D, open delivery, binning cart and routes, location exceptions, and the administrator exception queue.
