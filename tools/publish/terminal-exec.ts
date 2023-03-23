import { ExecSyncOptionsWithBufferEncoding } from "child_process";
import { execSync as nodeExecSync } from "child_process";
import { exit } from "process";
import { printError, print } from "./print";


export const OPTIONS: ExecSyncOptionsWithBufferEncoding = {
    stdio: 'pipe'
}

export function execSync(command: string, callbackOnFailed?: (e?: any) => void) {

    try {
        return nodeExecSync(command, OPTIONS).toString();

    } catch (e) {

        if (callbackOnFailed) {
            callbackOnFailed(e);
        }

        print('');
        printError(e.message);
        print(e.stdout.toString());
        exit(1);
    }
}