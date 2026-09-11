import * as React from 'react';

/** Page shell for an annotated wireframe sheet: title, metadata, screens, legend, footer. */
export interface SheetMeta { label: string; value: string }
export interface WireframeSheetProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  /** Corner metadata — module, FRD version, source section. */
  meta?: SheetMeta[];
  footer?: React.ReactNode;
  /** Fixed sheet width. The inner container takes this as both width and minWidth so the page scrolls horizontally rather than squeezing fixed-width screens off the edge. */
  width?: string;
  children?: React.ReactNode;
}
export declare function WireframeSheet(props: WireframeSheetProps): JSX.Element;
