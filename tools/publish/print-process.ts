import { PrintProcessConfig, DEFAULT_CONFIG, PrintProcessStep, PrintProcessStepId, PrintProcessStepState } from "./print-process.model";
import { divider, print, printHeader, info, error, removeLinesInTerminal } from "./print";


/**
 * @example
 *   // BASIC
 *   const steps = new PrintProcess([
 *     { id: 1, state: PrintProcessStepState.Default, text: '...' },
 *     { id: 2, state: PrintProcessStepState.Default, text: '...' },
 *    ], {
 *      header: 'Test Header for Print states',
 *    });
 * 
 *   steps.updateState(1, PrintProcessStepState.Done);
 *   steps.updateState(2, PrintProcessStepState.Pending);
 * 
 * 
 *   // Advanced
 *   const steps = new PrintProcess([
 *     { id: 1, state: PrintProcessStepState.Default, text: '...' },
 *     { id: 2, state: PrintProcessStepState.Default, text: '...' },
 *    ], {
 *      header: 'Test Header for Print states',
 *      autoPrint: true,
 *      dividerPadding: 10,
 *      dividerSize: 10
 *    });
 * 
 *    steps.updateConfig({ header: 'Test Header for Print states (1/5)' })
 *    steps.updateState(1, PrintProcessStepState.Done);
 *    steps.updateState(2, PrintProcessStepState.Pending);
 */

export class PrintProcess {

    private isFirstPrint = true;
    private divider: string;

    private steps: PrintProcessStep[];
    private config: PrintProcessConfig = DEFAULT_CONFIG;


    constructor(steps: PrintProcessStep[], config: Partial<PrintProcessConfig> = {}) {

        this.steps = steps;
        this.updateConfig(config);
    }


    // ----- Public Methods -----

    public updateConfig(config: Partial<PrintProcessConfig>) {

        this.config = { ...this.config, ...config };

        // Header Config
        if (this.config.header) {

            // Divider with padding
            const dividerLength = this.config.dividerSize ?? this.config.header.length;
            this.divider = divider(dividerLength + (this.config.dividerPadding * 2));


            // Header with padding
            this.config.header = ' '.repeat(this.config.dividerPadding) + this.config.header;
        }
    }


    public updateState(stepId: PrintProcessStepId, state: PrintProcessStepState) {

        const step = this.steps.find(step => step.id === stepId);

        // Id don't not exist
        if (!step) {
            throw new Error(`stepId (${stepId}) not exist`);
        }

        // Update state
        step.state = state;

        // Print
        if (this.config.autoPrint) {
            this.print();
        }
    }


    public print() {

        // Remove old status
        if (!this.isFirstPrint) {
            const headerLines = this.config.header ? 2 : 0;
            removeLinesInTerminal(headerLines + this.steps.length);
        }

        this.isFirstPrint = false;


        // Print Header
        if (this.config.header) {
            printHeader(this.config.header);
            printHeader(this.divider);
        }

        // Print States
        this.steps.forEach(step => {
            print(this.getPrintState(step.state) + step.text);
        });

    }


    // ----- Private Methods -----

    private getPrintState(state: PrintProcessStepState) {
        switch (state) {
            case PrintProcessStepState.Default: return       `  [ ] `;
            case PrintProcessStepState.Pending: return       `➤ [ ] `;
            case PrintProcessStepState.Done:    return info (`  [✓] `);
            case PrintProcessStepState.Error:   return error(`  [✘] `);
        }
    }
}




/**
 * How to use it:
 */

// const steps = new PrintProcess([
//     { id: 1, state: PrintProcessStepState.Default, text: '...' },
//     { id: 2, state: PrintProcessStepState.Default, text: '...' },
// ], {
//     autoPrint: true,
//     header: 'Test Header for Print states',
//     dividerPadding: 10,
//     dividerSize: 10
// });


// steps.print();

// setTimeout(_ => {
//     steps.updateConfig({ header: 'Test Header for Print states (1/5)' })
//     steps.updateState(1, PrintProcessStepState.Pending);
// }, 1 * 1000);

// setTimeout(_ => {
//     steps.updateConfig({ header: 'Test Header for Print states (2/5)' })
//     steps.updateState(1, PrintProcessStepState.Done);
//     steps.updateState(2, PrintProcessStepState.Pending);
// }, 2 * 1000);

// setTimeout(_ => {
//     steps.updateConfig({ header: 'Test Header for Print states (3/5)' })
//     steps.updateState(2, PrintProcessStepState.Done);
//     steps.updateState(3, PrintProcessStepState.Pending);
// }, 3 * 1000);

// setTimeout(_ => {
//     steps.updateConfig({ header: 'Test Header for Print states (4/5)' })
//     steps.updateState(3, PrintProcessStepState.Error);
//     steps.updateState(4, PrintProcessStepState.Pending);
// }, 4 * 1000);

// setTimeout(_ => {
//     steps.updateConfig({ header: 'Test Header for Print states (5/5)' })
//     steps.updateState(4, PrintProcessStepState.Done);
//     steps.updateState(5, PrintProcessStepState.Pending);
// }, 5 * 1000);

// setTimeout(_ => {
//     steps.updateConfig({ header: 'Test Header for Print states Done' })
//     steps.updateState(5, PrintProcessStepState.Done);
// }, 6 * 1000);