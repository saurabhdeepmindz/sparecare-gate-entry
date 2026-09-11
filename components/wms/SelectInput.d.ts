import * as React from 'react';

/** WMS dropdown. Unselected placeholder text is soft teal, as in the FRD artwork. */
export interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string;
  options?: Array<string | { value: string; label: string }>;
  value?: string;
  disabled?: boolean;
}
export declare function SelectInput(props: SelectInputProps): JSX.Element;
