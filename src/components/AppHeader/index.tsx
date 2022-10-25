import React, { FC, ReactElement } from 'react';
import HeaderNavigation from './HeaderNavigation';
import ThemeToggleButton from './ThemeToggleButton';
import ChangeLanguage from './ChangeLanguage';

const AppHeader: FC = (): ReactElement => {
  return (
    <div className={'w-full flex'}>
      <HeaderNavigation/>

      <ChangeLanguage/>

      <ThemeToggleButton/>
    </div>
  );
};

export default AppHeader;