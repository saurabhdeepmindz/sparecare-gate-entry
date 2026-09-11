import * as React from 'react';

/** Read-only label/value row carried forward from an earlier screen — GEN, supplier, document number. */
export interface DetailRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Lucide glyph name. */
  icon?: string;
  label: string;
  value: React.ReactNode;
  /** Use mono for codes and references. */
  mono?: boolean;
  last?: boolean;
}
export declare function DetailRow(props: DetailRowProps): JSX.Element;
