import * as React from 'react';

/**
 * Photo evidence capture for box condition (FR-006.5). Mandatory wherever the recorded
 * condition is anything other than OK — the box entry cannot be saved without it.
 */
export interface PhotoCaptureProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  /** Appends "(Mandatory)" in red. Drive this from whether a non-OK condition is selected. */
  required?: boolean;
  captured?: boolean;
  onCapture?: () => void;
}
export declare function PhotoCapture(props: PhotoCaptureProps): JSX.Element;
