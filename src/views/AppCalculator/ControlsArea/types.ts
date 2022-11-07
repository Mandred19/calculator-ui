import { ButtonProps } from '@mui/material/Button/Button';

export type BaseButtonsRow = Array<ButtonControl>;
export type BaseButtons = Array<BaseButtonsRow>;

export enum ControlsUtils {
  TOGGLE_MODE = 'TOGGLE_MODE',
  RESET_ALL = 'RESET_ALL',
  BACKSPACE = 'BACKSPACE',
}

export enum ControlsDecimalDot {
  DECIMAL_DOT = '.',
}

export enum ControlsNumbers {
  NULL = '0',
  ONE = '1',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SEVEN = '7',
  EIGHT = '8',
  NINE = '9',
}

export enum ControlsSigns {
  // Base mode
  EQUAL = '=',
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = '*',
  DIVIDE = '/',
  PERCENTAGE = '%',
  // Advanced mode
  EXPONENT = 'EXPONENT',
}

export interface ButtonControl extends ButtonProps {
  key: string;
  title: string;
  tooltipTitle: string;
  value: ControlsUtils | ControlsNumbers | ControlsDecimalDot | ControlsSigns,
}
