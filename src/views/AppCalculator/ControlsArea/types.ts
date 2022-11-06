import { ButtonProps } from '@mui/material/Button/Button';

export type BaseButtonsRow = Array<ButtonControl>;
export type BaseButtons = Array<BaseButtonsRow>;

export enum ControlsValues {
  // Base mode
  TOGGLE_MODE = 'TOGGLE_MODE',
  NULL = '0',
  DECIMAL_DOT = '.',
  EQUAL = '=',
  ONE = '1',
  TWO = '2',
  THREE = '3',
  ADD = '+',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SUBTRACT = '-',
  SEVEN = '7',
  EIGHT = '8',
  NINE = '9',
  MULTIPLY = '*',
  RESET_ALL = 'RESET_ALL',
  BACKSPACE = 'BACKSPACE',
  PERCENT = '%',
  DIVIDE = '/',
  // Advanced mode
  EXPONENT = 'EXPONENT',
}

export interface ButtonControl extends ButtonProps {
  key: string;
  title: string;
  tooltipTitle: string;
  value: ControlsValues,
}
