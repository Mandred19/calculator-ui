import React from 'react';
import LoopIcon from '@mui/icons-material/Loop';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { BaseButtons, BaseButtonsRow, ControlsDecimalDot, ControlsNumbers, ControlsSigns, ControlsUtils } from './types';

export const rowBaseFirst: BaseButtonsRow = [
  {
    key: 'toggle controls mode',
    title: '',
    tooltipTitle: 'test Toggle controls mode',
    startIcon: <LoopIcon/>,
    value: ControlsUtils.TOGGLE_MODE,
  },
  {
    key: '0',
    title: '0',
    tooltipTitle: '',
    value: ControlsNumbers.NULL,
  },
  {
    key: 'decimal dot',
    title: '.',
    tooltipTitle: 'test Decimal dot',
    value: ControlsDecimalDot.DECIMAL_DOT,
  },
  {
    key: 'equal',
    title: '=',
    tooltipTitle: 'test Equal',
    value: ControlsSigns.EQUAL,
  },
];

export const rowBaseSecond: BaseButtonsRow = [
  {
    key: '1',
    title: '1',
    tooltipTitle: '',
    value: ControlsNumbers.ONE,
  },
  {
    key: '2',
    title: '2',
    tooltipTitle: '',
    value: ControlsNumbers.TWO,
  },
  {
    key: '3',
    title: '3',
    tooltipTitle: '',
    value: ControlsNumbers.THREE,
  },
  {
    key: 'add',
    title: '',
    tooltipTitle: 'test Add',
    startIcon: <AddIcon/>,
    value: ControlsSigns.ADD,
  },
];
export const rowBaseThird: BaseButtonsRow = [
  {
    key: '4',
    title: '4',
    tooltipTitle: '',
    value: ControlsNumbers.FOUR,
  },
  {
    key: '5',
    title: '5',
    tooltipTitle: '',
    value: ControlsNumbers.FIVE,
  },
  {
    key: '6',
    title: '6',
    tooltipTitle: '',
    value: ControlsNumbers.SIX,
  },
  {
    key: 'subtract',
    title: '',
    tooltipTitle: 'test Subtract',
    startIcon: <RemoveIcon/>,
    value: ControlsSigns.SUBTRACT,
  },
];
export const rowBaseFourth: BaseButtonsRow = [
  {
    key: '7',
    title: '7',
    tooltipTitle: '',
    value: ControlsNumbers.SEVEN,
  },
  {
    key: '8',
    title: '8',
    tooltipTitle: '',
    value: ControlsNumbers.EIGHT,
  },
  {
    key: '9',
    title: '9',
    tooltipTitle: '',
    value: ControlsNumbers.NINE,
  },
  {
    key: 'multiply',
    title: '',
    tooltipTitle: 'test Multiply',
    startIcon: <CloseIcon/>,
    value: ControlsSigns.MULTIPLY,
  },
];
export const rowBaseFifth: BaseButtonsRow = [
  {
    key: 'reset all',
    title: 'AC',
    tooltipTitle: 'test Reset all',
    value: ControlsUtils.RESET_ALL,
  },
  {
    key: 'backspace',
    title: '',
    tooltipTitle: 'test Delete last symbol',
    startIcon: <BackspaceOutlinedIcon/>,
    value: ControlsUtils.BACKSPACE,
  },
  {
    key: 'percentage',
    title: '%',
    tooltipTitle: 'test Percentage',
    value: ControlsSigns.PERCENTAGE,
  },
  {
    key: 'divide',
    title: '/',
    tooltipTitle: 'test Divide',
    value: ControlsSigns.DIVIDE,
  },
];

export const baseButtons: BaseButtons = [
  rowBaseFifth,
  rowBaseFourth,
  rowBaseThird,
  rowBaseSecond,
  rowBaseFirst,
];
