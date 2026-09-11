# Session memory — where things stand

Updated 12 Sep 2026. Read `CLAUDE.md` first for rules and context; this file is the state.

## Status

**Batch 1 complete. Batch 2 built, awaiting review.** Fifteen screens in the portal:
Screens 1, 2, 3 on web; 4a, 4b, 5A, 5b, 6a, 6b, 6c (Batch 1) and 6d, 6e, 6f, 6g, 6h
(Batch 2) on the rugged handheld. Plus the consolidated unloading view (§9.6) and a
branching end-to-end prototype covering all four unload routes.

## Built

| Thing | Path |
| --- | --- |
| Wireframe portal (the deliverable) | `web-portal/index.html` + `screens.js` + `boot.js` |
| Screen 1 — Gate Entry, web | `web-portal/screens/screen-1-gate-entry.html` |
| Screen 2 — Consignment Details, web | `web-portal/screens/screen-2-consignment-details.html` |
| Screen 3 — Inward Dashboard, web | `web-portal/screens/screen-3-inward-dashboard.html` |
| End-to-end prototype | `web-portal/screens/prototype.html` — seven shared steps then a route-dependent tail, switches from browser chrome to rugged frame at the desk-to-dock handover; hotspots toggle plus click-anywhere flash. The terminal is sized to the window (`deviceH`) so the pinned action bar is always reachable; the web frame is scaled to fit by `FitStage`. Both were unreachable before that. |
| Open issues page | `web-portal/screens/open-issues.html` |
| Web screen components | `ui_kits/wms-inward/web/` — `WebShell`, `GateEntryWeb`, `ConsignmentWeb`, `DashboardWeb` |
| Web callout data | `ui_kits/wms-inward/web/webAnnotations.js` |
| Handheld screens (7) | `web-portal/screens/` — `screen-4a-receipt-details`, `screen-4b-transporter-details`, `screen-5a-unload-initiation`, `screen-5b-transporter-check`, `screen-6a-box-scanning`, `screen-6b-box-condition`, `screen-6c-check-variance` |
| Consolidated unloading view | `web-portal/screens/consolidated-unloading-view.html` — 6a/6b/6c side by side, filled, per §9.6. No callouts of its own. |
| Handheld screen components | `ui_kits/wms-inward/handheld/` — `Screen4aReceipt`, `Screen4bTransporter`, `Screen5aUnloadInit`, `Screen5bTransporterCheck`, `Screen6aScan`, `Screen6bCondition`, `Screen6cVariance`, `handheldAnnotations.js` |
| Batch 2 screens (5), group IN-E | `web-portal/screens/` — `screen-6d-no-shipment-doc`, `screen-6e-box-condition-no-doc`, `screen-6f-counter-unload`, `screen-6g-print-stickers`, `screen-6h-box-condition-sticker` |
| Batch 2 components | `ui_kits/wms-inward/handheld/` — `Screen6dNoDoc`, `Screen6eCondition` (shared by 6e and 6h via a `variant` prop), `Screen6fCounter`, `Screen6gStickers`, `UnloadApproachPanel` (shared by 6f and 6g) |
| Batch 2 callout data | `ui_kits/wms-inward/handheld/handheldAnnotationsB2.js` — appends to `window.SC_HH_ANNO`; each page loads `handheldAnnotations.js` first, then this |
| Handheld sheet for Screens 1–3 (secondary) | `ui_kits/wms-inward/index.html` + three screen JSX + `annotations.js` |
| Foundations | `styles.css`, `tokens/` (8 files), 23 cards in `guidelines/` |
| Components | `components/core/` (6), `components/wms/` (20), `components/annotation/` (9) |
| Assets | `assets/logo-mark.png` (SpareCare), `assets/deepmindz-logo.png` |

Namespace for card HTML: `window.SpareCareDesignSystem_556483`.

## Next work — Batch 3, on approval

Consignment check and direct-to-bin: Screens **7a, 8a, 8b, 8c** (FR-009 → FR-011). §12 has
been read as far as FR-009.2 only; read §12–§14 in full first. **Settle OI-020 (the 8a vs
8A numbering collision) before starting** — Batch 3 is where the menu would first carry two
screens with the same name.

Also outstanding, not Batch 3:
- **Done 12 Sep.** The prototype now branches. `HEAD` holds the seven shared steps (Screens
  3, 1, 2, 4a, 4b, 5A, 5b); `TAILS` holds one tail per route — shiplist (6a/6b/6c), nodoc
  (6d/6e), counter (6f/6e), sticker (6g/6h). `ROUTES` drives a selector bar above the rail,
  framed as the dealer-admin configuration per FR-007.7, not an operator control. The tail
  always starts at index 7, so every existing `setI(7)` still works. Changing route clamps
  the index back to 7.
- `web-portal/screens/open-issues.html` still reads "Open issues on Screens 1 to 3". It was
  not updated for Batch 1 (4a–6c) and is not updated for Batch 2. It needs one consolidated
  pass covering OI-079 → OI-086 (new in Batch 2) plus the Batch 1 items.

FRD sections read so far: §2–§11 (Screens 1 to 6h), the head of §12, and §33, §35, §36, §44.

### Batch 2 — decisions and corrections, worth not undoing

- **FR-007.15 applied over the artwork.** `image20.jpg` reconciles Screen 6d against the
  gate entry box count. Session 07 Part 3 corrected that: the baseline is No. of Boxes in
  GEN from Receipt Details (FR-004.2). The variance strip is labelled **Expected (Screen
  4a)** so the source of the number is visible on the screen.
- **Terminology.** The artwork's "GEN / Inward Code" is drawn as **Gate Entry Number** per
  FR-036 / OI-059, as in Batch 1.
- **One component for 6e and 6h.** FR-007.5 and FR-008.7 both state the condition flow is
  identical across approaches, so `Screen6eCondition` takes `variant="scanned"|"sticker"`.
  Only the identification header and the standing notice differ.
- **Record as OK / Record & check condition** on 6d is ours. FR-007.4 makes assessment
  mandatory on every box; without a fast path the rule gets defeated on the first busy
  morning. Flagged as a proposal.
- **The two unused configurations are named on 6f and 6g.** FR-007.7 requires only the
  configured approach to be shown. Naming the other two read-only is ours, so an operator
  can tell a deliberate configuration from a default. Flagged as a proposal.
- **FR-007.13 (plain total count entry) is deliberately not drawn.** It has no screen
  number and no artwork; inventing one would breach the no-invented-screens rule. It is a
  blocking OPEN QUERY on 6f instead (OI-084).
- **QR and barcode on the sticker tiles are wireframe placeholders**, not label templates.
  Said so in the annotation.

### New open issues raised in Batch 2

| ID | Screen | Issue |
| --- | --- | --- |
| OI-079 | 6d | A part number is not unique to a box; twenty identical filters give twenty boxes with the same fallback identifier. **Blocking.** |
| OI-080 | 6d | Nothing provides for attaching the invoice to an already-unloaded GEN and running the comparison retrospectively, though §10.1's layman description assumes it. **Blocking.** |
| OI-081 | 6d, 6f | 6d ends at Check Variance, 6f at Finish Unload. FR-007.11 gives Finish Unload the commit role for both. Where a scanned reduced-mode session commits is undefined. Also: temporary reference format differs between the two (BOX-001 vs BX-nnnn). |
| OI-082 | 6e | Open Delivery override is permitted but nothing records who overrode it or why. |
| OI-083 | 6e | Cancelling on an already-scanned box leaves it in the list with no quality recorded, which FR-007.4 forbids. |
| OI-084 | 6f | FR-007.13 defines a third counting option no screen provides for. A screen number must be allocated. **Blocking.** |
| OI-085 | 6f | The counter has no decrement and no per-box record, so a mis-tap cannot be undone or identified. **Blocking.** |
| OI-086 | 6g | FR-008.2 defaults Total Boxes to Print to the gate entry count, which FR-007.15 disowns as indicative. **Blocking.** |
| OI-013 | 6g | Re-raised. The system prints a sticker for, and accepts, a box that may belong to another consignee. FR-008.9 acknowledges and defers this. **Blocking.** |

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
