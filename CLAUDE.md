# SpareCare WMS Inward Wireframes — working context

This project is a **design system** (`_ds_manifest.json` at root). It also carries the
customer deliverable: an annotated wireframe portal for the SpareCare WMS Inward module.

## Who is who

- **SpareCare** — the client. Automobile spare-parts network (sparecare.in). Their brand
  identity is the visual source. The WMS is being built for their warehouses.
- **Deepmindz Innovations Pvt Ltd** — the preparer. Appears as the lockup in the portal's
  left menu. Named on every screen's metadata chips as "Prepared by".
- **Saurabh Kumar Verma** — the user. Authored the FRD. Works from
  `D:\SaurabhVerma\NewPresales\sparecare-warehouse\FRD-Wireframes\sparecare-design-system`.

## Sources of truth — read these before changing anything

| What | Where | Notes |
| --- | --- | --- |
| FRD v0.11, full text | `scraps/frd.txt` | 484k chars, 44 sections, FR-001 → FR-040, 82 open issues. Extracted from the docx. |
| FRD wireframe images | `scraps/frd-media/` | 51 images. `image8.jpg` is the Screens 1–3 composite and is the visual source for the handheld screens. |
| Brand identity | `scraps/brand-clean.html` | Six-colour palette, three fonts, spacing, gradients, voice, five component families. |
| Original uploads | `uploads/` | The brand HTML and the FRD docx as supplied. |

**The FRD's own wireframes are already teal** — they do not conflict with the SpareCare
brand. That was checked and settled early.

## Hard rules

1. **Never invent a field.** Every field, label, placeholder and column must trace to the
   FRD's Screen Field Reference tables or to a numbered FR requirement. Where something is
   added beyond the source artwork, it must be justified by a Session 07 amendment and
   stated in the annotations.
2. **Every annotation carries its FR reference.** `ref` is mandatory on every legend item —
   an `FR-xxx.y` where one exists, a `§n.n` section number otherwise. This traceability is
   the point of the deliverable; do not drop it when restyling.
3. **Terminology is locked by FR-036.** Use **Gate Entry Number (GEN)**. *Inward Code* is
   withdrawn. Say *consignment*, *primary carton*, *secondary carton*, *binning*.
4. **Signal colours stay standard.** Green / amber / red are traffic-light colours and sit
   outside the brand palette deliberately. Never re-map them to teal.
5. **No emoji. No hand-drawn SVG iconography.** Icons are Lucide from CDN, stroke 1.75 — a
   flagged substitution because the FRD's own icon set exists only as raster screenshots.
6. **Inline styles in components; tokens for every value.** No CSS-in-JS, no npm.
7. **Do not write** `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` — the
   compiler generates them at the end of each turn.

## The deliverable

`web-portal/` — a browsable catalogue. Left menu of screens, right pane showing the
wireframe. Per-screen toggle: **Wireframe** (default, clean) / **Annotated wireframe**
(numbered callouts + descriptions beneath). **Open Document** opens a screen full screen.
Deep-linkable via `index.html#screen-1`. Driven by the `web-portal/screens.js` manifest —
adding a screen is one manifest entry plus one file.

Pattern copied from the user's OCM wireframe portal, restyled in SpareCare colours.

## Structural decisions already agreed with the user

- **The dashboard is the landing screen**, not a step. FR-003 describes it as the view a
  supervisor keeps open all day. Work is launched from it.
- **Gate entry is a two-step task** — Screen 1 → Screen 2 — with a numbered-dot stepper,
  following §4.6 (admission at the gate, then detail capture at the dock).
- **The GEN is pinned in a context bar** once issued. FR-001.1 makes it the master
  reference for everything downstream.
- **Web first, handheld second.** Screens 1–3 are web-primary. From Screen 4a onward most
  screens are handheld, because FR-032.6 puts scanning and physical handling on the
  terminal.
- **Descriptions sit beneath the wireframe**, never in a side column. The user was explicit.
- **Callout circles must never be clipped.** Web screens put markers in the left/right
  gutters at `x = -1` / `x = 101`. Handheld screens place them on the content, because a
  scrolling device frame has no gutter.

## Conventions adopted from the user's OCM mobile wireframes

- Two callout types: **OPEN QUERY** (amber, carries an `OI-xxx` reference) and
  **OUR PROPOSAL — NOT STATED** (tinted, for decisions made where the FRD is silent).
- A **"What is deliberately missing"** section — *states not drawn* and *detail not
  specified* — plus one *most important omission* callout.
- A caption strip on the device frame reading **SCROLL INSIDE ↕** when markers fall below
  the fold.
- A footer disclaimer: illustrative, pre-approval, not a visual design.

## Device

Rugged handheld, **portrait, 412 × 880 dp** — the 6-inch Android class (Zebra TC53/TC58,
Honeywell CT45, Datalogic Memor 11). Not a tablet: the operator has one hand on the carton.
Not the 4.3-inch gun-form class (Zebra MC9400), because these screens carry tables.

## What the user cannot do, and what I cannot do

- I **cannot read the user's local `D:\` drive**, and cannot write to it. Files reach them
  only by download, or by them pulling from GitHub.
- My GitHub access is **read-only**. I can read the repo; I cannot commit to it.
- Local paths the user has referenced and I have never been able to open:
  `D:\SaurabhVerma\presales\ocm\`, `...\ocm\web-portal\`, `...\ocm\Mobile-wireframes\`,
  `OCM-WF-SC-AD-02-retailer-record-v2.html`. Ask for screenshots instead.

## Working agreement

The user reviews before building. The pattern every time: **state the understanding, list
the decisions, wait for an explicit go-ahead.** Do not start on a batch without it.
