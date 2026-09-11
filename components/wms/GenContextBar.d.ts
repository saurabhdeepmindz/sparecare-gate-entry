import * as React from 'react';

/**
 * Pinned bar carrying the Gate Entry Number and the consignment's identifying details
 * once the GEN exists. FR-001.1 makes the GEN the master reference for every subsequent
 * inward step, so it stays on screen rather than scrolling away.
 */
export interface ContextItem { label: string; value: React.ReactNode }
export interface GenContextBarProps extends React.HTMLAttributes<HTMLDivElement> {
  gen: string;
  /** Supporting detail — date and time of receipt, supplier, driver, transaction nature. */
  items?: ContextItem[];
}
export declare function GenContextBar(props: GenContextBarProps): JSX.Element;
