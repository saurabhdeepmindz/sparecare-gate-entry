# SpareCare Design System

SpareCare links automobile manufacturers and spare part stores on one shared stock ledger, so nobody orders what a neighbouring shelf already has. The public site (sparecare.in) reports 2,400+ stores on the network and 60K part numbers tracked, with live stock sync.

This design system serves two related surfaces:

1. **SpareCare network** — the marketing site and part-lookup product described in the brand identity document: part search, store cards, stock status, the shared ledger.
2. **SpareCare WMS (Ogys / Deepmindz)** — the warehouse management system built for dealer and OEM warehouses. Five modules: Receiving (Inward), Operational Excellence, Outward, Returns, and Data & Analytics. **Phase 1, and everything drawn here, is Module 1 — Receiving (Inward).** The entire WMS runs on rugged handheld terminals so staff scan and record at the point of physical activity, with a web surface for desk work.

## Sources given

| Source | What it provided |
| --- | --- |
| `uploads/sparecare_brand_identity (1).html` | Brand identity v1: six-colour palette, three-font type system, logo PNG, spacing scale, gradients, voice rules, five component families. Complete and authoritative for visual foundations. |
| `uploads/Sparecare_WMS_Inward_FRD-v11.docx` | Functional Requirements Document v0.11 (Draft, For Review). WMS Inward module. Prepared by Saurabh kumar verma from Requirements Discussion Sessions 01–07, 4 and 12 Aug 2026. 44 sections, FR-001 → FR-040, 82 open issues (OI-001 → OI-082), and **51 embedded images** including the Screens 1–3 wireframe composite. |
| `D:\SaurabhVerma\presales\ocm\web-portal\OCM-WF-SC-AD-02-retailer-record-v2.html` | **Not accessible.** A local Windows path; only uploaded files are readable here. This was to be the reference for the annotation convention — see Caveats. |

Extracted working copies live in `scraps/` (`frd.txt` is the full FRD as plain text; `frd-media/` holds all 51 images; `brand-clean.html` is the brand doc with base64 stripped).

### Ground truth for the WMS screens

The FRD's own images are not sketches — they are finished wireframes, and **they are already teal**, matching the SpareCare brand rather than conflicting with it. `scraps/frd-media/image8.jpg` is the Screens 1–3 composite and is the direct visual source for everything in `ui_kits/wms-inward/`. Every field, label, placeholder, column heading, button and colour in those screens was read off that artwork and cross-checked against the FRD's Screen Field Reference tables (§4.3, §5.3, §6.3), not invented.

---

## Content fundamentals

The brand document's rule is "talk like the counter, not the boardroom." The audience is store owners, parts managers and warehouse operators, not procurement executives.

**Person and address.** Second person for anything the reader owns or acts on — "Your Bay-04 stock hasn't synced since 6pm." Never first person plural about the product ("we've improved…"). System messages are impersonal and factual: "Shipment document not available."

**Casing.** Sentence case everywhere — headings, buttons, labels, table captions. No title case, no all-caps except the onyx section bar on Screen 2 ("Workflow Applicability Confirmation") and mono data strings ("PART # CP-4471-TD"). Field labels follow the FRD's own wording verbatim: "Name of the person", "Where From", "For Whom", "No. of Boxes in GEN".

**Specificity is the house style.** The brand document's own examples name real things — Bansal Auto Spares, Sadar Bazaar in Meerut, a clutch plate for a Tata Ace, part BP-2291-FR. The FRD does the same: driver Ramesh on vehicle MH-12-4456, GE-1042, 48 boxes of which two torn. Write examples this way. "3 stores near you already have this part" is correct; "multiple nearby locations have availability" is not.

**Numbers carry their unit.** The dashboard reads "5 Trucks" and "5 GENs", never a bare 5, because the three queues count different things. Stock tags read "In stock — 12 units", not "In stock".

**Errors state the fact and the next step, and never apologise or hedge.** The brand document lists "Apologise or hedge in error messages — just explain" under Don't. So: "Enter the driver's name and contact number to create a Gate Entry Number." Not "Sorry, we couldn't create that just yet."

**Banned register.** "Leverage real-time inventory intelligence." "Unlock synergies across your supply network." Any jargon a counter clerk wouldn't say out loud.

**No emoji.** Neither source uses a single one, in product UI or in prose. Do not introduce them.

**Terminology is locked by FR-036.** Use **Gate Entry Number (GEN)**. The term *Inward Code* is withdrawn throughout — OI-059 records that some wireframe boards still carry the old label and are to be corrected. Say *consignment*, not shipment. *Primary carton* and *secondary carton*. *Binning*, not put-away, in the WMS.

**The FRD's own colour convention**, worth knowing when reading it: blue italic text is analyst-generated interpretation of screenshots, not verbatim requirement; dark teal marks the plain-language "Layman Description" subsections added in v0.11. Blue italic warrants line-by-line review — §4.5 records two field descriptions that were wrong precisely because they were inferred.

---

## Visual foundations

**Colour.** Six colours, six jobs, and each only comes out for its own job. Soft Teal `#5A9FA3` is the brand's colour — anything to notice or click. Deep Teal `#3B616C` is the serious version: headlines, the primary button, dark panels, table header rows. Stone Grey `#99959B` carries body text and outline buttons. Cloud Grey `#E5E5E6` is the page ground and the dividing lines. Ink Black `#040101` is reading text. Onyx `#030000` is for large dark surfaces only and never for text.

Green `#4C9A6A`, amber `#E2963C` and red `#C1503F` sit **deliberately outside** that palette. Everyone already reads them as a traffic light, so they stay standard regardless of branding — the GEN confirmation banner is green, box condition chips run green/amber/red. Do not re-map them to teal.

**Type.** Three faces, each with a job. Barlow Semi Condensed 700 for display — headlines and large numerals only, with the proportions of a number plate or dashboard gauge. Inter 400/500/600 for all reading text and interface labels. IBM Plex Mono 500/600 only where the content is genuinely data: part numbers, gate entry numbers, box references, bin locations, counts in a table. Letter-spacing is −0.01em on display, +0.01em on mono. The full scale is in `guidelines/type-scale.html`.

**Spacing.** An 8px base, kept honest — 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128, the same way parts inventory is counted in whole units, not fractions. 4px and 2px sub-steps exist only inside dense controls and data rows. Card padding 32px, 16px between fields, 24px between field groups. Handheld screens are 390px wide with a 16px safe area and a 44px minimum target, because the operator may be wearing gloves.

**Backgrounds.** Flat colour throughout. Cloud Grey behind the marketing page, white cards on top, a pale teal tint `#EAF3F3` for read-only fields and info strips, a pale mint `#F2F8F7` for alternate table rows. **No photography, no illustration, no texture, no repeating pattern** — neither source contains a single photograph or drawn illustration, and nothing here should introduce one. The only non-flat surfaces in the brand are the three sanctioned gradients.

**Gradients.** Three, fixed, for depth and never decoration, always moving from teal toward its darker or lighter neighbour and never rainbowed. Deep Teal → Soft Teal for a hero or dark panel. Stone Grey → Cloud Grey for brushed-metal surfaces and quiet dividers. Deep Teal → Onyx once per screen at most, for a single moment of real weight — never on a small button.

**Corner radii.** Two, and the split is meaningful: sharp near-square 2px for data and structure (buttons, cards, tables, the marketing site), soft pill 20px only where a person is being told something (status tags). The WMS handheld screens use a slightly softer 6px on inputs, tiles and banners — measured off the FRD artwork, not rounded to a grid. 14px exists as a token and is essentially unused.

**Borders and shadow.** Structure is drawn with 1px lines, not lifted with shadow. `rgba(4,1,1,0.14)` for card edges, rules and table cells; 1.5px `#A8C9CB` teal line on every WMS input; 1.5px Stone Grey on the search bar and outline button. The brand has **no decorative shadow at all** — the only two in the system are a 1px hairline under KPI tiles and a raised shadow on annotation markers, which are documentation furniture rather than product UI.

**Cards** are therefore white, 1px bordered, 2px cornered, unlifted. Not rounded-and-floating, and never with a coloured left border.

**Transparency and blur** appear in exactly one place: a sticky header, at `rgba(…,0.92–0.94)` with an 8px backdrop blur, as the brand site's nav does it. Nowhere else — no frosted cards, no translucent overlays, no protection gradients. Text over a tinted surface is full-opacity ink, never alpha-muted.

**Hover** darkens a filled button (`#3B616C` → `#0A2C2F`) and swaps an outline button's grey for deep teal. **Press** is a 0.99 scale and nothing more. **Focus** is a 2px Soft Teal ring at 2px offset. **Disabled** is Cloud Grey fill on grey text — never a faded teal. See `guidelines/states.html`.

**Motion is restrained**: opacity and colour, 120ms for hover and focus, 180ms for a panel, 280ms for a screen transition, standard ease `cubic-bezier(.2,0,.2,1)`. No spring, no overshoot, no staggered entrance, no scale on entry. A warehouse operator on a handheld is mid-task, and animation that delays a confirmation costs scans.

**Layout.** Marketing: 1180px max width, 48px gutters, 96px section padding, sections separated by a 1px rule, sticky blurred nav. WMS handheld: 390px, a fixed title bar at the top and a fixed two-button action bar at the bottom, the middle scrolling. WMS web: 216px deep-teal sidebar with a 3px Soft Teal active marker, content area scrolling. Wireframe sheets sit on `#DCDCDE` so documentation is never mistaken for product.

**Imagery colour vibe.** There is none to describe — the sources contain no photography. If photography is ever introduced, the palette's cool desaturated teal-grey is the register to match; no warm filters, no grain.

---

## Iconography

**Line icons, single-weight, functional.** The brand identity document uses essentially no icons — one unicode magnifier `⌕` in the part-lookup field, and a small SVG node diagram in the hero (six teal dots joined to a deep-teal hub, representing connected stores; decorative, not an icon set).

The WMS wireframes in the FRD use a consistent duotone line set at a light stroke weight: camera, package/box, building (supplier), document, scan line, truck, circle-check, triangle-alert, circle-x, save, info, counter. Icons appear at roughly 16–26px, sit left of a label or beside a field, and are tinted deep teal or the relevant signal colour.

**Substitution flagged.** Those icons exist only as raster screenshots baked into the Word document — there is no vector, font, or sprite anywhere in the sources. **Lucide** (`unpkg.com/lucide@0.446.0`) is the closest CDN match by stroke weight and terminal shape, set to `stroke-width: 1.75`. It is loaded from CDN and wrapped by `components/core/Icon.jsx`, so swapping in the real files is a one-component change. See `guidelines/iconography.html` for the working set. **Please send the original icon files.**

**No emoji, ever.** Unicode is used as an icon in exactly one sanctioned place: `⌕` in `SearchBar`, and the `‹` back chevron in `ScreenHeader`, both taken from the sources. The brand mark is the only raster asset: `assets/logo-mark.png`, a gear opening into a cupped hand — the mechanical and the caretaking sides of the same business. Never separate the hand from the ring, and never redraw it.

---

## Index

**Root**
- `styles.css` — the global entry point; consumers link this one file. `@import` lines only.
- `readme.md` — this file.
- `SKILL.md` — Agent Skills front matter, for use in Claude Code.
- `thumbnail.html` — the homepage tile.

**`tokens/`** — `fonts.css` (Google Fonts import), `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css`.

**`assets/`** — `logo-mark.png` (the SpareCare gear-and-hand mark, extracted from the brand document and trimmed).

**`guidelines/`** — 23 specimen cards: brand palette, signal colours, semantic aliases, WMS surface tints, gradients; display / body / mono / scale / interface type; spacing scale, spacing in use, handheld metrics; radii, borders and elevation, interaction states, motion; logo lockup, clearspace, misuse; voice; iconography; annotation convention.

**Components**

`components/core/` — the brand's own five families, plus one intentional addition:
- `Button` — primary, accent, secondary, ghost, onyx, quiet; lg/md/sm; disabled
- `Tag` — stock and condition status pills; ok / low / out / neutral / info
- `SearchBar` — part lookup
- `PartRow` — part search result line
- `StoreCard` — a store on the network
- `Icon` — **intentional addition.** A Lucide wrapper, needed because the FRD artwork's glyph set was supplied only as raster. Without it every screen would hand-roll SVG.

`components/wms/` — read off the FRD wireframes:
- `HandheldFrame`, `ScreenHeader`, `ActionBar` — screen chrome
- `Field`, `TextInput`, `SelectInput`, `CameraButton` — form controls
- `GenBanner` — the green Gate Entry Number confirmation
- `WorkflowChecklist` — Screen 2's workflow applicability block
- `KpiTile`, `QueueTable` — dashboard queues
- `InfoNote` — inline advisory strip
- `Stepper` — numbered-dot step indicator for the web surface
- `GenContextBar` — the pinned Gate Entry Number bar carried through a task
- `ScanField` — box-number entry with the device reader beside it
- `ConditionChips` — the six multi-select box conditions from FR-006.4
- `PhotoCapture` — mandatory photo evidence tile
- `CounterStrip` — Unloaded / Balance / OK / Not OK counters
- `ProgressBar` — boxes unloaded against boxes expected
- `DetailRow` — carried-forward read-only label and value
- `Accordion` — the collapsible panels on Screens 4a, 4b and 6a

`components/annotation/` — **intentional addition**, for the wireframe documentation this project exists to produce:
- `AnnotationMarker` — one numbered callout circle
- `AnnotatedScreen` — a screen plus its callout layer, in a gutter wide enough that no circle is ever clipped
- `AnnotationLegend` — the numbered description list, each entry carrying its FR reference
- `WireframeSheet` — the multi-screen sheet shell
- `WireframeDoc` — one screen as a complete document, switchable between clean and annotated
- `BrowserChrome` — light browser frame around a web-surface wireframe
- `RuggedFrame` — rugged handheld terminal frame, 412 × 880 dp
- `CalloutBox` — the amber OPEN QUERY and tinted OUR PROPOSAL boxes
- `MissingSection` — "What is deliberately missing"
- `NotDrawnHost` — states why a control leads nowhere, citing the requirement that names it

**Deliverable**

`web-portal/` — the customer-facing wireframe portal. Screen list on the left, wireframe on the right, a per-screen toggle between **Wireframe** and **Annotated wireframe**, and an **Open Document** button that opens any screen full screen. Deep-linkable (`index.html#screen-1`), driven by a `screens.js` manifest so later screens slot in with one entry plus one file. Static, Vercel-ready. See `web-portal/README.md`.

**UI kits**

`ui_kits/wms-inward/web/` — the web-surface screens the portal renders: `WebShell`, `DashboardWeb`, `GateEntryWeb`, `ConsignmentWeb`, and `webAnnotations.js` carrying every callout with its FR reference.

`ui_kits/wms-inward/handheld/` — the rugged-terminal screens: `Screen4aReceipt`, `Screen6aScan`, `Screen6bCondition`, and `handheldAnnotations.js`. Device target 412 × 880 dp, the 6-inch Android class (Zebra TC53/TC58, Honeywell CT45, Datalogic Memor 11).

`ui_kits/wms-inward/index.html` — the handheld surface, kept because the FRD artwork is the only source-verified drawing of these screens. Secondary to the web portal.

### Intentional additions

| Addition | Why |
| --- | --- |
| `Icon` | The FRD's icon set exists only as raster screenshots. A wrapper keeps the substitution in one place and makes the eventual swap trivial. |
| `annotation/*` | The requested deliverable is an annotated wireframe document. Nothing in either source provides callouts or a legend, and these are documentation furniture rather than product UI — which is why they sit on their own grey canvas. |
| `Stepper`, `GenContextBar` | The web surface spans a task across two screens, which the handheld artwork does not. FR-001.1 makes the GEN the master reference for everything downstream, so it is pinned rather than left to scroll away. |

Nothing else was added. There is no Toast, Avatar, Tabs, Modal, Breadcrumb or Accordion in this system, because neither source defines one.

## Caveats

- **The annotation reference file could not be read.** `D:\SaurabhVerma\presales\ocm\web-portal\OCM-WF-SC-AD-02-retailer-record-v2.html` is a local Windows path. The convention built here follows the description given — numbered circles on the screen, descriptions beneath, each mapped to a feature number, circles never clipped by a boundary — but it is not a copy of that file's convention. Upload it and the annotation components can be aligned to it exactly.
- **Fonts are loaded from Google Fonts**, as the brand document itself does. No licensed binaries were supplied, so there are no local `@font-face` rules.
- **Icons are Lucide, substituted.** See Iconography above.
- **The logo is raster only** (`assets/logo-mark.png`, 836×858, extracted from the brand document's embedded base64). No vector was supplied.
- **Screens 4a through 17 are not drawn.** The FRD names roughly 60 screens; this pass covers Screens 1–3 as scoped, pending approval. The remaining sets are FR-004 → FR-040.
- **Surface assignment is an open issue (OI-047).** Screens 1 and 2 are drawn for both handheld and web per FR-032.5; Screen 3 is treated as a desk activity. The FRD explicitly leaves this to be agreed before build.
- **The web portal shell is a design decision, not a recreation.** No existing SpareCare or OCM web portal was available to match, so the sidebar, page header and table conventions were designed from the brand foundations. Overturn freely.
- **The Deepmindz mark is 227px wide.** Fine at menu size; an SVG or larger PNG would be better for any larger use.
