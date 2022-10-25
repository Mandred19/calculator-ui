import React, { FC, ReactElement } from 'react';
import { Theme, ThemeContext } from '../../Providers/ThemeContext.provider';

const ThemeToggleButton: FC = (): ReactElement => {
  return (
    <ThemeContext.Consumer>
      {
        ({currentTheme, setCurrentTheme}) => {
          const toggleTheme = () => {
            currentTheme === Theme.LIGHT ? setCurrentTheme(Theme.DARK) : setCurrentTheme(Theme.LIGHT);
          };

          return <button onClick={toggleTheme}>Toggle theme - {currentTheme}</button>;
        }
      }
    </ThemeContext.Consumer>
  );
};

export default ThemeToggleButton;