import * as React from 'react';

/**
 * Pill-shaped status tag. The only soft-cornered element in the system — soft corners
 * are reserved for telling a person something.
 * @startingPoint section="Core" subtitle="In stock, low stock, out of stock and neutral tags" viewport="700x150"
 */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** ok = green, low = amber, out = red. These three are traffic-light colours and sit outside the brand palette on purpose. neutral and info are non-signal. */
  tone?: 'ok' | 'low' | 'out' | 'neutral' | 'info';
  /** Show the leading 7px dot. Off for count-only tags. */
  dot?: boolean;
  children?: React.ReactNode;
}
export declare function Tag(props: TagProps): JSX.Element;
