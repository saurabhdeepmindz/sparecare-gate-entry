import * as React from 'react';

/** Fixed-width handheld screen surface with an optional caption beneath, as the FRD presents its screens. */
export interface HandheldFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Caption below the screen, e.g. "Screen 1". */
  label?: string;
  width?: string;
  height?: string;
  children?: React.ReactNode;
}
export declare function HandheldFrame(props: HandheldFrameProps): JSX.Element;
