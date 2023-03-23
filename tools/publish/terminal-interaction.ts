import inquirer from 'inquirer';

// Confirmation
export function terminalConfirm(message: string, defaultValue: boolean = true): Promise<boolean> {

    return inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'confirm',
                message: message,
                default: defaultValue
            }
        ])
        .then(result => result.confirm);
}

// List Selection

interface TerminalListSelectionOption<T> {
    text: string,
    value: T
}

export function terminalListSelection<T>(
    message: string,
    options: TerminalListSelectionOption<T>[]
): Promise<T> {

    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'version',
                message: message,
                choices: options.map(e => e.text)
            }
        ])
        .then(result =>
            (options.find(option => option.text == result.version) as TerminalListSelectionOption<T>).value
        );
}

// Input
export function terminalInput(
    message: string,
    validate: (terminalInput: string) => boolean | string
): Promise<string> {

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'version',
                message: message,
                validate: validate
            }
        ])
        .then(result => result.version);
}