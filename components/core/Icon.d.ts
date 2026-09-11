import * as React from 'react';

/**
 * Thin wrapper around a Lucide glyph. Intentional addition — the FRD artwork's own
 * icon set was supplied only as raster screenshots, so Lucide stands in at the same
 * stroke weight until the real files arrive.
 */
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon name, e.g. "camera", "package", "building-2", "file-text". */
  name: string;
  size?: number;
  /** 1.75 matches the weight of the glyphs in the FRD wireframes. */
  strokeWidth?: number;
  color?: string;
}
export declare function Icon(props: IconProps): JSX.Element;
