import * as React from 'react';

/**
 * The green confirmation banner carrying the newly created Gate Entry Number (FR-001.8).
 * Green here is a signal colour, not a brand colour.
 * @startingPoint section="WMS" subtitle="Green Gate Entry Number confirmation banner" viewport="700x150"
 */
export interface GenBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The generated number. Rendered in mono — it is data that gets read aloud and typed back in. */
  gen: string;
  label?: string;
  message?: string;
  /** Secondary line, e.g. a print or share prompt. */
  footnote?: React.ReactNode;
}
export declare function GenBanner(props: GenBannerProps): JSX.Element;
