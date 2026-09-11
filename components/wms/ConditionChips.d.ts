import * as React from 'react';

/**
 * The box condition selector (FR-006.4). Multi-select — several conditions may apply to
 * one box. Each option carries a traffic-light tone; the brand palette does not override it.
 */
export interface ConditionOption { id: string; label: string; icon?: string; tone?: 'ok' | 'warn' | 'bad' }
export interface ConditionChipsProps extends React.HTMLAttributes<HTMLDivElement> {
  options: ConditionOption[];
  /** Ids of the selected conditions. */
  selected?: string[];
  onToggle?: (id: string) => void;
  columns?: number;
}
export declare function ConditionChips(props: ConditionChipsProps): JSX.Element;
