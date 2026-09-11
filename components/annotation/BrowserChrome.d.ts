import * as React from 'react';

/** Light browser frame around a web wireframe: traffic lights, a URL pill, and an accent rule. */
export interface BrowserChromeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The URL shown in the address pill, e.g. "wms.sparecare.in/inward/gate-entry". */
  url: string;
  /** Colour of the rule beneath the chrome. Deep teal by default. */
  accent?: string;
  children?: React.ReactNode;
}
export declare function BrowserChrome(props: BrowserChromeProps): JSX.Element;
