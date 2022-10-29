import React, { FC, ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AppCalculator from './views/AppCalculator';
import AppConverter from './views/AppConverter';

export enum AppPathNames {
  CALCULATOR = 'calculator',
  CONVERTER = 'converter'
}

const Router: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path={AppPathNames.CALCULATOR} element={<AppCalculator />} />
      <Route path={AppPathNames.CONVERTER} element={<AppConverter />} />
      <Route path="*" element={<Navigate to={AppPathNames.CALCULATOR} replace={true} />} />
    </Routes>
  );
};

export default Router;