import * as React from 'react';

/** A pending-queue count tile on the inward dashboard (FR-003.2). Selecting one filters the queues below. */
export interface KpiTileProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Queue name, e.g. "Pending for Unload". */
  label: string;
  value: React.ReactNode;
  /** The thing being counted — "Trucks", "GENs". The FRD names the unit rather than leaving a bare number. */
  unit?: string;
  active?: boolean;
}
export declare function KpiTile(props: KpiTileProps): JSX.Element;
