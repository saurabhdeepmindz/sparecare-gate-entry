import * as React from 'react';

/** Collapsible section — Capture Invoice Details, Capture Transporter Details, Update Box Condition. */
export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  open?: boolean;
  onToggle?: () => void;
  /** Right-aligned slot before the chevron — a count tag, for instance. */
  badge?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Accordion(props: AccordionProps): JSX.Element;
