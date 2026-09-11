import * as React from 'react';

/** The Unloading WIP status counters (FR-006.7): Unloaded, Balance, OK, Not OK. */
export interface CounterItem { label: string; value: React.ReactNode; tone?: 'ok' | 'warn' | 'bad' | 'neutral' }
export interface CounterStripProps extends React.HTMLAttributes<HTMLDivElement> {
  items: CounterItem[];
}
export declare function CounterStrip(props: CounterStripProps): JSX.Element;
