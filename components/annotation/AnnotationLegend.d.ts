import * as React from 'react';

/**
 * The numbered description list that sits beneath an annotated wireframe. Every entry
 * carries the FRD requirement or section it comes from, so a reader can trace any
 * callout back to the specification.
 * @startingPoint section="Wireframes" subtitle="Numbered annotation descriptions mapped to FR numbers" viewport="700x320"
 */
export interface AnnotationItem {
  n: number | string;
  /** Field or region name, matching the FRD screen field reference table. */
  label: string;
  /** Requirement or section reference, e.g. "FR-001.2" or "§4.3". Rendered as a mono chip. */
  ref?: string;
  /** Control type from the field reference table, e.g. "Dropdown", "Text input". */
  control?: string;
  description: string;
  /** open tints the number amber, marking an unresolved FRD open issue. */
  tone?: 'primary' | 'open';
}
export interface AnnotationLegendProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  items: AnnotationItem[];
  columns?: number;
}
export declare function AnnotationLegend(props: AnnotationLegendProps): JSX.Element;
