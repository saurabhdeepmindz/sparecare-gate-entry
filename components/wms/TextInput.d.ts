import * as React from 'react';

/** WMS text input: 1px teal-line border, 6px corner, 44px minimum height for gloved use. */
export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** System-populated values (date and time of receipt, FR-001.9) render read-only on a sunken teal tint. */
  readOnly?: boolean;
  /** Use mono for scanned codes and part numbers. */
  mono?: boolean;
}
export declare function TextInput(props: TextInputProps): JSX.Element;
