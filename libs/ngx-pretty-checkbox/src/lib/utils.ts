import { PrettyCheckboxColor } from './model';

export function getColorClassName(color: PrettyCheckboxColor, outline?: boolean) {
    if (!color) { return null; }
    return 'p-' + color + (outline ? '-o' : '');
}

export function strToBoolean(str: string | boolean = ''): boolean {
    if (typeof str === 'boolean') {
        return str;
    }

    const regex = /^\s*(true|1|on|enable)\s*$/i;
    return regex.test(str);
}
