import * as React from 'react';

/**
 * Rugged handheld terminal frame, portrait 412x880 dp — the 6-inch Android class these
 * warehouses buy (Zebra TC53/TC58, Honeywell CT45, Datalogic Memor 11). Not a phone
 * (squared bezel, no notch, side scan trigger) and not a tablet (the operator has one
 * hand on the carton).
 */
export interface RuggedFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Strip above the device, e.g. "Screen 6a · Box scanning". */
  caption?: string;
  width?: number;
  height?: number;
  /** Appends "SCROLL INSIDE ↕" to the caption. Set false when the screen fits the fold. */
  scrollHint?: boolean;
  /** Expand the frame to the full content height instead of scrolling. Use in annotated mode so every callout is visible and correctly placed; the caption then states where the real device crops. */
  fit?: boolean;
  statusTime?: string;
  children?: React.ReactNode;
}
export declare function RuggedFrame(props: RuggedFrameProps): JSX.Element;
