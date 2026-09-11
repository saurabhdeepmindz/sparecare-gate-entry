import * as React from 'react';

/** Inline advisory strip inside a handheld screen — states a fact and what to do, never apologises. */
export interface InfoNoteProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'info' | 'warn' | 'error';
  /** Override the tone's default Lucide glyph. */
  icon?: string;
  children?: React.ReactNode;
}
export declare function InfoNote(props: InfoNoteProps): JSX.Element;
