import * as React from 'react';

/** A store on the network: name, locality with distance, and how many parts it matches. */
export interface StoreCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  /** Locality and distance, e.g. "Sadar Bazaar, Meerut · 2.4 km". */
  location?: string;
  /** e.g. "9 matching parts". */
  matchLabel?: string;
  tone?: 'ok' | 'low' | 'out' | 'neutral';
}
export declare function StoreCard(props: StoreCardProps): JSX.Element;
