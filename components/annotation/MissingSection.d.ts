import * as React from 'react';

/**
 * "What is deliberately missing" — states not drawn and detail not specified, plus one
 * most-important omission. A wireframe that tries to show everything shows nothing
 * clearly; this section names the gaps instead of hiding them.
 */
export interface MissingSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  intro?: string;
  /** Screen states not drawn — loading, offline, empty, degraded, error. */
  statesNotDrawn?: React.ReactNode[];
  /** Content and behaviour the source does not pin down. */
  detailNotSpecified?: React.ReactNode[];
  /** The single omission that matters most, rendered in an amber box. */
  mostImportant?: React.ReactNode;
}
export declare function MissingSection(props: MissingSectionProps): JSX.Element;
