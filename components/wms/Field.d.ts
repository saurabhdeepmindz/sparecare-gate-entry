import * as React from 'react';

/** Label-above-control wrapper for WMS form rows. Required fields carry a red asterisk. */
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  /** Appends the red asterisk. Only Name of the Person and Contact Number are mandatory at gate entry (FR-001.2). */
  required?: boolean;
  hint?: React.ReactNode;
  /** Control placed to the right of the input, outside its border — e.g. the camera button on Primary Document Type. */
  adjacent?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Field(props: FieldProps): JSX.Element;
