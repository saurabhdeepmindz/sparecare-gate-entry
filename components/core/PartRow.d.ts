import * as React from 'react';

/**
 * One line of a part-search result: description and fitment, part number in mono,
 * nearby availability, and a stock tag.
 * @startingPoint section="Core" subtitle="Part search result rows with fitment, mono part number and stock tag" viewport="700x200"
 */
export interface PartRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Plain-language part description, e.g. "Front brake pad set". */
  name: string;
  /** Vehicle fitment line, e.g. "Fits Maruti Swift 2018–22". */
  fitment?: string;
  /** Part number. Always rendered in IBM Plex Mono. */
  partNumber: string;
  /** Network availability sentence, e.g. "Held at 6 nearby stores". */
  availability?: string;
  tone?: 'ok' | 'low' | 'out';
  statusLabel?: string;
  /** Suppress the bottom rule on the final row of a list. */
  last?: boolean;
}
export declare function PartRow(props: PartRowProps): JSX.Element;
