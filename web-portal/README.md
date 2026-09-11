# WMS Inward wireframe portal

The customer-facing deliverable. A browsable catalogue: screen list on the left, the wireframe on the right, and a per-screen toggle between a clean wireframe and the annotated version.

## Structure

```
web-portal/
  index.html                                  shell — menu, right pane, Open Document, footer
  screens.js                                  the screen manifest that drives the menu
  screens/screen-1-gate-entry.html            complete standalone documents
  screens/screen-2-consignment-details.html
  screens/screen-3-inward-dashboard.html
  screens/prototype.html
  screens/open-issues.html
```

Every file under `screens/` is a complete document on its own. The shell embeds it in an iframe; **Open Document** opens that same file full screen in a new tab. So each is independently shareable.

## The two views

Each screen page reads `?view=` from its URL:

- **`?view=wireframe`** — the default. The screen alone, working, with nothing on top of it.
- **`?view=annotated`** — the same screen with numbered callouts, plus the headline, intro, metadata chips and the numbered descriptions beneath.

The toggle lives in the right pane header and its choice sticks as you move between screens.

## Deep links

The shell uses hash routing, so a single screen can be sent directly:

```
index.html#screen-1
index.html#screen-3
index.html#open-issues
```

## Adding a screen

1. Add one entry to the relevant group in `screens.js`.
2. Copy an existing file in `screens/` and point it at a new screen component.
3. Add the callout data to `ui_kits/wms-inward/web/webAnnotations.js`.

Nothing else changes — the menu, the counter and the previous/next navigation all read from the manifest. The later FRD screens slot into the existing groups: Receipt Details (4a–4b), Truck Unload (5A–6h), Consignment Check (7a–8c), Direct Binning (8A–10H), Case 2 (11a–13D), Binning (12a–15), Exceptions (16A–17).

## Deploying

Static files, no build step. Point the host at the repository root — `styles.css`, `_ds_bundle.js`, `assets/` and `ui_kits/` all sit above `web-portal/` and are referenced by relative path, so the whole project deploys as one static site with `/web-portal/` as the entry point.

React, Babel and Lucide load from CDN, so the portal needs an internet connection. For a fully offline copy, ask for a bundled single-file export instead.
