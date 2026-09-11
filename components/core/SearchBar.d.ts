import * as React from 'react';

/** Part lookup field. Grey 1.5px outline, sharp corners, leading glyph outside the input. */
export interface SearchBarProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Leading glyph. Defaults to the unicode telephone-recorder-style magnifier ⌕ used in the brand document. */
  glyph?: React.ReactNode;
  maxWidth?: string;
}
export declare function SearchBar(props: SearchBarProps): JSX.Element;
