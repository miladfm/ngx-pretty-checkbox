export type PrintProcessStepId = string | number;

export enum PrintProcessStepState {
    Default,
    Pending,
    Done,
    Error
}

export interface PrintProcessStep {
    id: PrintProcessStepId;
    state: PrintProcessStepState,
    text: string
}

export interface PrintProcessConfig {
    autoPrint: boolean;
    header?: string;
    dividerSize?: number; // Default is length of header.
    dividerPadding: number;
}

export const DEFAULT_CONFIG: PrintProcessConfig = {
    autoPrint: true,
    dividerPadding: 1
}