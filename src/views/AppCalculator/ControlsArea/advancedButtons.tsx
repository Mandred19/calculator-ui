import React from 'react';
import { BaseButtons, BaseButtonsRow, ControlsValues } from './types';
import { rowBaseFifth, rowBaseFirst, rowBaseFourth, rowBaseSecond, rowBaseThird } from './baseButtons';

const rowAdvancedFirst: BaseButtonsRow = [
  rowBaseFirst[0],
  {
    key: 'exponent',
    title: 'e',
    tooltipTitle: 'test Exponent',
    value: ControlsValues.EXPONENT,
  },
  rowBaseFirst[1],
  rowBaseFirst[2],
  rowBaseFirst[3],
];
const rowAdvancedSecond: BaseButtonsRow = [
  ...rowBaseSecond,
];
const rowAdvancedThird: BaseButtonsRow = [
  ...rowBaseThird,
];
const rowAdvancedFourth: BaseButtonsRow = [
  ...rowBaseFourth,
];
const rowAdvancedFifth: BaseButtonsRow = [
  ...rowBaseFifth,
];
// const rowAdvancedSixth: BaseButtonsRow = [];
// const rowAdvancedSeventh: BaseButtonsRow = [];

export const advancedButtons: BaseButtons = [
  // rowAdvancedSeventh,
  // rowAdvancedSixth,
  rowAdvancedFifth,
  rowAdvancedFourth,
  rowAdvancedThird,
  rowAdvancedSecond,
  rowAdvancedFirst,
];
