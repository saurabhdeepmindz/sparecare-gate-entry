# Session memory — where things stand

Updated 11 Sep 2026. Read `CLAUDE.md` first for rules and context; this file is the state.

## Status

**Batch 1 is complete.** Ten screens in the portal: Screens 1, 2, 3 on web; 4a, 4b, 5A, 5b,
6a, 6b, 6c on the rugged handheld. Plus the consolidated unloading view (§9.6) and a
ten-step end-to-end prototype. Awaiting customer approval before Batch 2.

## Built

| Thing | Path |
| --- | --- |
| Wireframe portal (the deliverable) | `web-portal/index.html` + `screens.js` + `boot.js` |
| Screen 1 — Gate Entry, web | `web-portal/screens/screen-1-gate-entry.html` |
| Screen 2 — Consignment Details, web | `web-portal/screens/screen-2-consignment-details.html` |
| Screen 3 — Inward Dashboard, web | `web-portal/screens/screen-3-inward-dashboard.html` |
| End-to-end prototype | `web-portal/screens/prototype.html` — six steps, switches from browser chrome to rugged frame at the desk-to-dock handover; hotspots toggle plus click-anywhere flash. The terminal is sized to the window (`deviceH`) so the pinned action bar is always reachable; the web frame is scaled to fit by `FitStage`. Both were unreachable before that. |
| Open issues page | `web-portal/screens/open-issues.html` |
| Web screen components | `ui_kits/wms-inward/web/` — `WebShell`, `GateEntryWeb`, `ConsignmentWeb`, `DashboardWeb` |
| Web callout data | `ui_kits/wms-inward/web/webAnnotations.js` |
| Handheld screens (7) | `web-portal/screens/` — `screen-4a-receipt-details`, `screen-4b-transporter-details`, `screen-5a-unload-initiation`, `screen-5b-transporter-check`, `screen-6a-box-scanning`, `screen-6b-box-condition`, `screen-6c-check-variance` |
| Consolidated unloading view | `web-portal/screens/consolidated-unloading-view.html` — 6a/6b/6c side by side, filled, per §9.6. No callouts of its own. |
| Handheld screen components | `ui_kits/wms-inward/handheld/` — `Screen4aReceipt`, `Screen4bTransporter`, `Screen5aUnloadInit`, `Screen5bTransporterCheck`, `Screen6aScan`, `Screen6bCondition`, `Screen6cVariance`, `handheldAnnotations.js` |
| Handheld sheet for Screens 1–3 (secondary) | `ui_kits/wms-inward/index.html` + three screen JSX + `annotations.js` |
| Foundations | `styles.css`, `tokens/` (8 files), 23 cards in `guidelines/` |
| Components | `components/core/` (6), `components/wms/` (20), `components/annotation/` (9) |
| Assets | `assets/logo-mark.png` (SpareCare), `assets/deepmindz-logo.png` |

Namespace for card HTML: `window.SpareCareDesignSystem_556483`.

## Next work — Batch 2, on approval

Unload exceptions: Screens **6d, 6e, 6f** (unloading without a shipment document, FR-007)
and **6g, 6h** (box sticker generation for non-scannable consignments, FR-008). Read FRD
§10 and §11 first — neither has been read. `scraps/frd-media/image20.jpg` is the 6D/6E/6F
composite and is the visual source.

FRD sections read so far: §2–§9 (Screens 1 to 6c) and §33, §35, §36, §44.

### Corrections applied in Batch 1, worth not undoing

- **FR-004.5 / §7.5** — there is ONE invoice summary table and it lives on Screen 4b.
  Screen 4a carries only a count-and-total strip.
- **FR-005.10 / FR-005.11 / OI-070** — Find GEN Using Other Details is an in-screen panel
  offering search criteria ONLY. The source board draws it as a separate screen carrying
  supplier and invoice fields; that is wrong and was redrawn.
- **FR-006.18** — unloading captures variance at primary box level only. Units on Screen 6c
  come from document data, never from counting.

### Controls whose destination the FRD does not specify

Do **not** leave them inert — a customer reads a dead button as a broken prototype. Fire
the `sc:not-drawn` event instead and `NotDrawnHost` (mounted once per page) states the gap
with its FR reference:

```js
window.dispatchEvent(new CustomEvent('sc:not-drawn',{detail:{title,body,ref}}))
```

`detail.kind`: omit for NOT DRAWN, `'next'` for a screen later in the flow not yet drawn,
`'info'` to confirm a behaviour the FRD does specify.

Already wired: the camera on Screens 1 and 4a (FR-001.5), ship list View and Replace on 6a
(FR-006.12, OI-030), View All on 6a and 6b (FR-006.14), Set Aside and Add Document on 6b
(FR-006.13, OI-013), Finish Unload on 6a → Screen 6c (kind 'next'), Save on 6a → FR-006.11
save-and-resume (kind 'info').

### Scanning is simulated, not inert

Screen 6a takes `onScan` (fills the field with the next box number) and `onSubmit(mode)`
— 'ok' appends a row and increments the counters, 'check' routes to Screen 6b and appends
on save with the chosen condition. Wired in both `prototype.html` and the standalone 6a
page. Counters, Balance and the progress bar are all live off that state.

### Annotation pattern now in force

Every screen page is a `WireframeDoc` with: eyebrow, screen id, headline, intro, metadata
chips, "01 The wireframe", "02 Annotations", "03 What is deliberately missing", footer
disclaimer. Legend entries may carry `query` (amber OPEN QUERY box with an `OI-xxx` ref and
optional `blocking`) and `proposal` (tinted OUR PROPOSAL — NOT STATED box). `ref` remains
mandatory on every entry.

**All markers go in the gutters — web AND handheld — at `x: -1` / `x: 101`, alternating
sides in reading order with `y` set to the row they name.** On-content placement was tried
for handheld and withdrawn: markers landed on the very labels they annotated (the ship list
filename, the Quality Variance row labels, the Document-wise Breakdown heading). Gutter
placement makes the collision structurally impossible. There is ~48px of clear space each
side of the handheld frame (30px `AnnotatedScreen` gutter + 18px `RuggedFrame` bezel),
which comfortably holds a 26px circle.

In annotated mode `RuggedFrame` takes `fit` so it expands to full content height and every
marker is visible without scrolling.

The lead sentence above the annotations is **derived** in `WireframeDoc` from
`items.filter(i=>i.query)` and `items.filter(i=>i.proposal)` — never written by hand. Five
screens once carried hand-written counts that disagreed with their own lists.

`WireframeDoc` strips a leading copy of `eyebrow` from `group`, so the data can keep
carrying `group:'IN-C · Receipt & Unload'` while the header renders the code once.

## Two FRD corrections to apply in Batch 1

- **OI-070** — Screen 5A's Select GEN is drawn in the source as a separate panel carrying
  supplier, receipt date and invoice fields. FR-005.10/.11 require a **search panel or
  overlay offering search criteria only**. Draw the corrected version, flag it amber.
- **FR-004.2** — Screen 4a carries *No. of Boxes in GEN*, the real reconciliation baseline
  behind OI-066. Annotate the link back to Screen 1's indicative count.

## Blocker to raise before Batch 4

**OI-020 — screen numbering collision.** Session 04 re-presented the direct-to-bin family
as Screens 8A–8D having introduced it as 8a–8c, and added 9a/9b alongside 9A/9B/9C for the
same Case 1B flow. A single convention must be agreed or the menu carries two different
screens called 8a and 8A.

## Remaining batches after Batch 1

2. Unload exceptions — 6d, 6e, 6f, 6g, 6h (FR-007, FR-008)
3. Consignment check & direct-to-bin — 7a, 8a, 8b, 8c (FR-009 → FR-011)
4. Direct binning Case 1 — 8A–8D, 9a/9b/9A/9B/9C, 10A–10D, 10E–10H (FR-012 → FR-015) · 17 screens, split it
5. Multi-SKU & Case 2 — 11a–11c, 11A–11C, 2B/2C steps, 13A–13D (FR-019 → FR-024)
6. Open delivery — FR-018, FR-025
7. Binning — 12a, 12b, 13a, 13b, 14a, 14b, 15 (FR-026, FR-027)
8. Exceptions & administration — 16A–16F, Screen 17 (FR-037, FR-038)

Available early if more *web* material is wanted: **Screen 17** (administrator exception
queue) and **Ship List capture** (FR-033) are both desk activities.

## Deployment

Repo `saurabhdeepmindz/sparecare-gate-entry`, branch `main`. Vercel project
`sparecare-design-system` → sparecare-design-system.vercel.app, entry `/web-portal/`.
Password-protected via `middleware.js` + the `SITE_PASSWORD` env var.

**Live bug, fix pending on the user's side:** their `vercel.json` has
`"trailingSlash": false`, which makes Vercel strip the slash from `/web-portal/` so
same-folder scripts resolve one directory too high and `screens.js` 404s — the menu renders
empty. This project's copy is already corrected to `true`; the user has to push it.

Also not yet pushed by the user: the root `index.html` redirect, and the diagnostic guard in
`web-portal/index.html`. Their repo has `scraps/` and `uploads/` committed (60 files) —
suggested for `.gitignore`.

## Open with the user

- Handheld showcase (4a, 6a, 6b): **built**, awaiting review.
- Retrofit of Screens 1–3: **done**.
- Customer approval of Screens 1–3: **not yet given**.
- Prototype: user chose **one end-to-end flow only**. Separate web-only and handheld-only
  modes were discussed and deferred — add them as modes of the same file if asked, never as
  separate files (they would drift).

### Raised in the Screen 6b annotations, needs an answer

**The FRD contradicts itself about Screen 6b.** §9.4's field reference calls it *Check
Unloading Status* — a read-only box or part search returning unloaded / not unloaded.
§9.6's filled-state composite calls the same number the *box condition* screen, with open
delivery, mandatory photo, the shiplist mismatch exception and Recent Box Entries. Two
different screens, one number. We drew the condition screen and flagged it blocking; the
status search still needs its own number.
