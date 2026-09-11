import * as React from 'react';

/**
 * Numbered-dot stepper for a multi-step task on the web surface. Completed steps are
 * soft teal, the current step deep teal, pending steps a grey outline.
 */
export interface StepperProps extends React.HTMLAttributes<HTMLOListElement> {
  /** Step labels, or objects carrying a label. */
  steps: Array<string | { label: string }>;
  /** Zero-based index of the current step. */
  current?: number;
  /** Supply to make completed steps clickable for going back. Forward steps stay inert. */
  onStepClick?: (index: number) => void;
}
export declare function Stepper(props: StepperProps): JSX.Element;
