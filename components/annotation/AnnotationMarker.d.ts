import * as React from 'react';

/** One numbered callout circle placed over a wireframe. Always render inside AnnotatedScreen. */
export interface AnnotationMarkerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The callout number. Must match its entry in the AnnotationLegend below the screen. */
  n: number | string;
  /** Horizontal position as a percentage of the annotated area (0–100), or any CSS length. */
  x: number | string;
  /** Vertical position as a percentage of the annotated area (0–100), or any CSS length. */
  y: number | string;
  size?: number;
  /** open renders amber, marking a field governed by an unresolved FRD open issue. */
  tone?: 'primary' | 'open';
  title?: string;
}
export declare function AnnotationMarker(props: AnnotationMarkerProps): JSX.Element;
