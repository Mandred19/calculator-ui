import React, { FC, ReactElement } from 'react';
import AppDisplayArea from './DisplayArea';
import AppInputArea from './InputArea';
import AppControlsArea from './ControlsArea';

const AppCalculator: FC = (): ReactElement => {
  return (
    <>
      <AppDisplayArea/>

      <AppInputArea/>

      <AppControlsArea/>
    </>
  );
};

export default AppCalculator;