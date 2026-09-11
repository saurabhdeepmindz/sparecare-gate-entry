import * as React from 'react';

/**
 * A pending-queue drill-down table on the inward dashboard. Header row is deep teal;
 * body rows alternate white and a pale mint tint, and empty rows are kept visible so the
 * table holds its shape as a queue fills.
 * @startingPoint section="WMS" subtitle="Pending-queue drill-down table with deep teal header" viewport="700x240"
 */
export interface QueueColumn { key: string; label: string; align?: 'left' | 'right' | 'center'; mono?: boolean; link?: boolean }
export interface QueueTableProps extends React.HTMLAttributes<HTMLDivElement> {
  caption?: string;
  columns: QueueColumn[];
  rows: Array<Record<string, React.ReactNode>>;
  /** Blank rows are padded to this count, matching the fixed-height tables in the FRD artwork. */
  minRows?: number;
  onRowClick?: (row: Record<string, React.ReactNode>) => void;
  emptyLabel?: string;
}
export declare function QueueTable(props: QueueTableProps): JSX.Element;
