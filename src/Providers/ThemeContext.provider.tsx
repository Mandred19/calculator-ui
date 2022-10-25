import React, { createContext, FC, ReactElement, useEffect, useState } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContextState {
  currentTheme: Theme;
  setCurrentTheme: (theme: Theme) => void;
}

interface Props {
  children: ReactElement;
}

export const ThemeContext = createContext<ThemeContextState>({
  currentTheme: Theme.LIGHT,
  setCurrentTheme: (theme) => {
    console.warn('set Theme - ', theme);
  },
});

const ThemeContextProvider: FC<Props> = ({children}): ReactElement => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const setThemeHandler = (theme: Theme) => {
    const root = window.document.documentElement;
    root.classList.remove(theme === Theme.DARK ? 'light' : 'dark');
    root.classList.add(theme);

    localStorage.setItem('currentTheme', theme);
    setTheme(theme);
  };

  const themeContext: ThemeContextState = {
    currentTheme: theme,
    setCurrentTheme: setThemeHandler,
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem('currentTheme');

    if (!currentTheme) {
      localStorage.setItem('currentTheme', Theme.LIGHT);
    }

    setThemeHandler(currentTheme as Theme);
  }, []);

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
