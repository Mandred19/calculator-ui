import React, { FC, ReactElement } from 'react';
import classNames from 'classnames';
import AppHeader from './components/AppHeader';
import AppDisplayArea from './components/AppDisplayArea';
import AppInputArea from './components/AppInputArea';
import AppControlsArea from './components/AppControlsArea';

const App: FC = (): ReactElement => {
  return (
    <div className={classNames(`
    text-dark
    dark:text-light
    bg-light
    dark:bg-dark
    w-full
    h-full`)}>
      <div className={classNames(`
      md:container
      md:mx-auto
      md:p-4
      p-2
      h-full
      overflow-hidden`)}>
        <AppHeader/>

        <AppDisplayArea/>

        <AppInputArea/>

        <AppControlsArea/>
      </div>
    </div>
  );
};

export default App;
