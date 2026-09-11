import * as React from 'react';

/** Pinned bottom action row on a handheld screen. Holds two buttons: a quiet cancel and an accent forward action. */
export interface ActionBarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
export declare function ActionBar(props: ActionBarProps): JSX.Element;
