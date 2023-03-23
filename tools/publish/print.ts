import chalk from 'chalk';

// Global
export const print = console.log;

// Header
export const header = chalk.keyword('orange');
export const printHeader = (message: string) => print(header(message));

// Info
export const info = chalk.keyword('green');
export const printInfo = (message: string) => print(info(message));

// Error
export const error = chalk.keyword('red');
export const printError = (message: string) => print(error(message));

// Divider
export const divider = (length: number) => "-".repeat(length);
export const printDivider = (length: number) => print(divider(length));


// Remove Line
export function removeLinesInTerminal(lineToRemove: number) {
    for (let index = 0; index < lineToRemove; index++) {
        process.stdout.moveCursor(0, -1) // up one line
        process.stdout.clearLine(1) // from cursor to end
    }
}