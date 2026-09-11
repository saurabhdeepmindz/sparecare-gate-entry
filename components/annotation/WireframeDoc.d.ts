import * as React from 'react';
import { AnnotationMarkerProps } from './AnnotationMarker';
import { AnnotationItem } from './AnnotationLegend';

/**
 * One screen presented as a complete, standalone document. The mode switch is the whole
 * point: 'wireframe' shows the screen alone, 'annotated' surrounds it with the
 * specification material, numbered callouts and the legend beneath.
 */
export interface WireframeDocProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 'wireframe' renders only the screen. 'annotated' adds headline, chips, callouts and legend. */
  mode?: 'wireframe' | 'annotated';
  /** Group code, e.g. "IN-A". */
  eyebrow?: string;
  /** Group name, e.g. "GATE ENTRY & CONSIGNMENT". */
  group?: string;
  /** FRD screen reference, e.g. "Screen 1". Rendered in mono ahead of the headline. */
  screenId?: string;
  screenName?: string;
  /** Display headline. Falls back to screenName. */
  headline?: string;
  intro?: string;
  /** Metadata chips — preparer, FR reference, surface, FRD version. */
  chips?: React.ReactNode[];
  sectionLabel?: string;
  sectionNote?: string;
  markers?: AnnotationMarkerProps[];
  items?: AnnotationItem[];
  legendColumns?: number;
  gutter?: number;
  children?: React.ReactNode;
}
export declare function WireframeDoc(props: WireframeDocProps): JSX.Element;
