repo: saurabhdeepmindz/sparecare-gate-entry
branch: main

Deployed on Vercel as `sparecare-design-system` (sparecare-design-system.vercel.app).
Entry point: `/web-portal/`. Password-protected via `middleware.js` + the `SITE_PASSWORD`
environment variable.

## Last sync
date: 2026-09-11T12:24:42Z
commit: (not resolved — tree hash b8f10f155275)

### Updated in this project
- Set `trailingSlash: true` in `vercel.json` — with it false, Vercel stripped the slash from `/web-portal/` and same-folder scripts resolved one directory too high, so `screens.js` 404'd and the menu rendered empty.
- Added a root `index.html` that redirects to `/web-portal/`, so the bare domain works.
- Added a guard in `web-portal/index.html` that names the failed path instead of rendering blank.

### Not yet pushed by the user
- root `index.html`
- the `web-portal/index.html` diagnostic guard
- the corrected `vercel.json`

## Screen map
| Screen | Built from |
| --- | --- |
| Screen 1 — Gate Entry | `web-portal/screens/screen-1-gate-entry.html`, `ui_kits/wms-inward/web/GateEntryWeb.jsx`, `WebShell.jsx` |
| Screen 2 — Consignment Details | `web-portal/screens/screen-2-consignment-details.html`, `ui_kits/wms-inward/web/ConsignmentWeb.jsx` |
| Screen 3 — Inward Dashboard | `web-portal/screens/screen-3-inward-dashboard.html`, `ui_kits/wms-inward/web/DashboardWeb.jsx` |
| Click-through prototype | `web-portal/screens/prototype.html` |
| Open issues | `web-portal/screens/open-issues.html` |
| Handheld (secondary) | `ui_kits/wms-inward/index.html`, `Screen1GateEntry.jsx`, `Screen2ConsignmentDetails.jsx`, `Screen3Dashboard.jsx` |

Callout data: `ui_kits/wms-inward/web/webAnnotations.js` (web), `ui_kits/wms-inward/annotations.js` (handheld).
Menu manifest: `web-portal/screens.js`.
