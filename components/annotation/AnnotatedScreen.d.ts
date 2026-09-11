import * as React from 'react';
import { AnnotationMarkerProps } from './AnnotationMarker';

/**
 * A wireframe screen plus its numbered callout layer, captioned with the screen name
 * and its FRD reference.
 * @startingPoint section="Wireframes" subtitle="A screen with numbered callouts and an FRD reference caption" viewport="700x400"
 */
export interface AnnotatedScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  /** e.g. "Screen 1 — Create GEN". */
  screenLabel?: string;
  /** e.g. "FR-001". Rendered in mono beside the label. */
  screenRef?: string;
  /** Width of the clear gutter around the screen, in px. Must be at least half the marker size so edge markers are not clipped. */
  gutter?: number;
  markers?: AnnotationMarkerProps[];
  children?: React.ReactNode;
}
export declare function AnnotatedScreen(props: AnnotatedScreenProps): JSX.Element;
