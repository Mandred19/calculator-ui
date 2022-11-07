import React, { FC, ReactElement, useState } from 'react';
import HistoryArea from './HistoryArea';
import InputArea from './InputArea';
import ControlsArea from './ControlsArea';
import { ControlsDecimalDot, ControlsNumbers, ControlsSigns } from './ControlsArea/types';

interface CalcState {
  sign: ControlsSigns;
  number: ControlsNumbers;
  expression: string;
  result: number;
}

const AppCalculator: FC = (): ReactElement => {
  const defaultCalcState: CalcState = {
    sign: '' as ControlsSigns,
    number: '' as ControlsNumbers,
    expression: '',
    result: 0,
  };

  const [calc, setCalc] = useState<CalcState>(defaultCalcState);

  const updateHistory = (): void => {
    // eslint-disable-next-line no-console
    console.log('updateHistory');
  };

  const handleButtonNumber = (buttonValue: ControlsNumbers): void => {
    setCalc({
      ...calc,
      number: buttonValue,
      expression: calc.expression + buttonValue,
    });
  };

  const handleButtonDecimalDot = (buttonValue: ControlsDecimalDot): void => {
    setCalc({
      ...calc,
      expression: calc.expression + buttonValue,
    });
  };

  const handleButtonSign = (buttonValue: ControlsSigns): void => {
    setCalc({
      ...calc,
      sign: buttonValue,
      expression: calc.expression + buttonValue,
    });
  };

  const handleBackspace = (): boolean => {
    if (calc.sign.length) {
      setCalc({
        ...calc,
        sign: defaultCalcState.sign,
      });
      return true;
    }

    if (calc.number.length) {
      setCalc({
        ...calc,
        number: defaultCalcState.number,
      });
      return true;
    }

    return false;
  };

  const handleResetAll = (): void => {
    setCalc(defaultCalcState);
  };

  return (
    <>
      <HistoryArea updateHistory={updateHistory}/>

      <InputArea expression={calc.expression}/>

      <ControlsArea
      handleResetAll={handleResetAll}
      handleBackspace={handleBackspace}
      handleButtonNumber={handleButtonNumber}
      handleButtonDecimalDot={handleButtonDecimalDot}
      handleButtonSign={handleButtonSign}/>
    </>
  );
};

export default AppCalculator;