export enum PrettyCheckBoxToggleType {
  On = 'on',
  Off = 'off'
}
export enum PrettyCheckboxStroke {
  // Accept Null
  Fill = 'fill',   // Square and Switch
  Thick = 'thick', // Square
  Slim = 'slim' // Switch
}

export enum PrettyCheckboxShape {
  // Accept Null
  Curve = 'curve',
  Round = 'round',
}


export enum PrettyCheckboxColor {
  Primary = 'primary',
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Danger = 'danger',
}

export enum PrettyCheckboxAnimation {
  Smooth = 'smooth',
  Jelly = 'jelly',
  Tada = 'tada',
  Rotate = 'rotate',
  Pulse = 'pulse',
}

export interface PrettyCheckBoxChange {
  checked: boolean;
  value: string;
  event: Event;
}

export interface PrettyRadioChange {
  checked: boolean;
  value: string;
  event: Event;
}
