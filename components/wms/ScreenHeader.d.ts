import * as React from 'react';

/** Handheld screen title bar: back chevron, screen title in condensed display type, optional right-hand slot. */
export interface ScreenHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  back?: boolean;
  onBack?: () => void;
  /** Right-aligned slot — a help or scan-mode icon. */
  right?: React.ReactNode;
}
export declare function ScreenHeader(props: ScreenHeaderProps): JSX.Element;
