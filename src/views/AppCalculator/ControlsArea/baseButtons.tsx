import React from 'react';
import LoopIcon from '@mui/icons-material/Loop';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { BaseButtons, BaseButtonsRow, ControlsValues } from './types';

export const rowBaseFirst: BaseButtonsRow = [
  {
    key: 'toggle controls mode',
    title: '',
    tooltipTitle: 'test Toggle controls mode',
    startIcon: <LoopIcon/>,
    value: ControlsValues.TOGGLE_MODE,
  },
  {
    key: '0',
    title: '0',
    tooltipTitle: '0',
    value: ControlsValues.NULL,
  },
  {
    key: 'decimal dot',
    title: '.',
    tooltipTitle: 'test Decimal dot',
    value: ControlsValues.DECIMAL_DOT,
  },
  {
    key: 'equal',
    title: '=',
    tooltipTitle: 'test Equal',
    value: ControlsValues.EQUAL,
  },
];

export const rowBaseSecond: BaseButtonsRow = [
  {
    key: '1',
    title: '1',
    tooltipTitle: '1',
    value: ControlsValues.ONE,
  },
  {
    key: '2',
    title: '2',
    tooltipTitle: '2',
    value: ControlsValues.TWO,
  },
  {
    key: '3',
    title: '3',
    tooltipTitle: '3',
    value: ControlsValues.THREE,
  },
  {
    key: 'add',
    title: '',
    tooltipTitle: 'test Add',
    startIcon: <AddIcon/>,
    value: ControlsValues.ADD,
  },
];
export const rowBaseThird: BaseButtonsRow = [
  {
    key: '4',
    title: '4',
    tooltipTitle: '4',
    value: ControlsValues.FOUR,
  },
  {
    key: '5',
    title: '5',
    tooltipTitle: '5',
    value: ControlsValues.FIVE,
  },
  {
    key: '6',
    title: '6',
    tooltipTitle: '6',
    value: ControlsValues.SIX,
  },
  {
    key: 'subtract',
    title: '',
    tooltipTitle: 'test Subtract',
    startIcon: <RemoveIcon/>,
    value: ControlsValues.SUBTRACT,
  },
];
export const rowBaseFourth: BaseButtonsRow = [
  {
    key: '7',
    title: '7',
    tooltipTitle: '7',
    value: ControlsValues.SEVEN,
  },
  {
    key: '8',
    title: '8',
    tooltipTitle: '8',
    value: ControlsValues.EIGHT,
  },
  {
    key: '9',
    title: '9',
    tooltipTitle: '9',
    value: ControlsValues.NINE,
  },
  {
    key: 'multiply',
    title: '',
    tooltipTitle: 'test Multiply',
    startIcon: <CloseIcon/>,
    value: ControlsValues.MULTIPLY,
  },
];
export const rowBaseFifth: BaseButtonsRow = [
  {
    key: 'reset all',
    title: 'AC',
    tooltipTitle: 'test Reset all',
    value: ControlsValues.RESET_ALL,
  },
  {
    key: 'backspace',
    title: '',
    tooltipTitle: 'test Delete last symbol',
    startIcon: <BackspaceOutlinedIcon/>,
    value: ControlsValues.BACKSPACE,
  },
  {
    key: 'percent',
    title: '%',
    tooltipTitle: 'test Percent',
    value: ControlsValues.PERCENT,
  },
  {
    key: 'divide',
    title: '/',
    tooltipTitle: 'test Divide',
    value: ControlsValues.DIVIDE,
  },
];

export const baseButtons: BaseButtons = [
  rowBaseFifth,
  rowBaseFourth,
  rowBaseThird,
  rowBaseSecond,
  rowBaseFirst,
];
