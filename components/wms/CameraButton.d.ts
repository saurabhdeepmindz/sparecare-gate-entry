import * as React from 'react';

/** Borderless camera affordance sitting beside a field, for document photo capture (FR-001.5). */
export interface CameraButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  size?: number;
}
export declare function CameraButton(props: CameraButtonProps): JSX.Element;
