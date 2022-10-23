import React from 'react';
import classNames from 'classnames';
import { COLORS } from './constants/colors';

function App() {
  const {textThemeLight, textThemeDark, commonThemeLight, commonThemeDark} = COLORS;

  return (
    <div className={classNames(`w-full h-full overflow-hidden p-2 pb-0 text-${textThemeLight} dark:text-${textThemeDark} bg-${commonThemeLight} dark:bg-${commonThemeDark}`)}>
      app
    </div>
  );
}

export default App;
