import * as React from 'react';

/**
 * The workflow applicability block on Screen 2 (FR-002.3 to .5). Steps arrive pre-checked
 * from the admin's per-category defaults and the receiving user may override any of them.
 * @startingPoint section="WMS" subtitle="Workflow applicability confirmation with pre-checked overridable steps" viewport="700x220"
 */
export interface WorkflowStep { id?: string; label: string; checked?: boolean; locked?: boolean }
export interface WorkflowChecklistProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Black header bar label. Defaults to the wording used in the FRD artwork. */
  title?: string;
  steps: WorkflowStep[];
  onToggle?: (id: string | number) => void;
}
export declare function WorkflowChecklist(props: WorkflowChecklistProps): JSX.Element;
