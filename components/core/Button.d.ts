import * as React from 'react';

/**
 * The single button primitive. Sharp 2px corners; no shadow, no scale on press.
 * @startingPoint section="Core" subtitle="Primary, accent, secondary, ghost, onyx and disabled buttons" viewport="700x150"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** primary = deep teal fill (the main action). accent = soft teal fill, used for Next on handheld screens. secondary = grey outline. ghost = text only. onyx = solid black, large dark surfaces only. quiet = chrome fill for Cancel. */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'onyx' | 'quiet';
  /** lg is the marketing/handheld default (14px/26px). md and sm are for dense data views. */
  size?: 'lg' | 'md' | 'sm';
  disabled?: boolean;
  /** Stretch to the container width — used in the handheld action bar. */
  block?: boolean;
  as?: keyof JSX.IntrinsicElements;
  href?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
