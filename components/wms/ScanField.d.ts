import * as React from 'react';

/** Box-number entry: a mono input with the device reader beside it. Manual keying is the documented fallback (FR-006.2). */
export interface ScanFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onScan?: () => void;
  disabled?: boolean;
}
export declare function ScanField(props: ScanFieldProps): JSX.Element;
