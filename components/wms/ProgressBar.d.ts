import * as React from 'react';

/** Unload progress against the expected box count (FR-006.15). */
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  value?: number;
  /** The expected box count from No. of Boxes in GEN (FR-004.2) — the reconciliation baseline. */
  total?: number;
}
export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
