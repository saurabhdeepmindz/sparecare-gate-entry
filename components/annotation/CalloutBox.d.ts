import * as React from 'react';

/**
 * A tinted box inside an annotation entry. Two kinds, and the distinction is the point:
 * 'query' marks something the FRD leaves undecided; 'proposal' marks a decision made on
 * the client's behalf where the FRD is silent.
 */
export interface CalloutBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  kind?: 'query' | 'proposal';
  /** Override the default heading text. */
  label?: string;
  /** Reference for the query, e.g. "OI-048". Rendered in mono beneath the text. */
  ref_?: string;
  /** Appends "· blocking" in red — use where the answer gates the build. */
  blocking?: boolean;
  children?: React.ReactNode;
}
export declare function CalloutBox(props: CalloutBoxProps): JSX.Element;
