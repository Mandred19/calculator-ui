import React, { FC, ReactElement } from 'react';
import HeaderNavigation from './HeaderNavigation';
import ThemeToggleButton from './ThemeToggleButton';

const AppHeader: FC = (): ReactElement => {
  return (
    <div className={'w-full flex'}>
      <HeaderNavigation/>

      <ThemeToggleButton/>
    </div>
  );
};

export default AppHeader;