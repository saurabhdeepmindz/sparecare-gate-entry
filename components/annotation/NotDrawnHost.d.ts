import * as React from 'react';

/**
 * Mount once per wireframe or prototype page. Listens for the `sc:not-drawn` custom event
 * and explains why a control leads nowhere, citing the requirement that names it. Used for
 * destinations the FRD refers to but never specifies — the camera view, the ship list
 * viewer, the full entry log.
 *
 * `detail.kind` sets the eyebrow: omit for NOT DRAWN, `'next'` for a screen later in the
 * flow that has not been drawn yet, `'info'` to confirm a behaviour the FRD does specify.
 *
 * Fire it with:
 * `window.dispatchEvent(new CustomEvent('sc:not-drawn',{detail:{title,body,ref}}))`
 */
export interface NotDrawnHostProps {}
export declare function NotDrawnHost(props: NotDrawnHostProps): JSX.Element | null;
