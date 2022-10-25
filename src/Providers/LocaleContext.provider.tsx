import React, { createContext, FC, ReactElement, useEffect, useState } from 'react';
import i18n from 'i18next';

export enum Locale {
  EN_US = 'en-US',
  RU_RU = 'ru-RU',
}

interface LocaleContext {
  currentLocale: Locale;
  setCurrentLocale: (locale: Locale) => void;
}

export const LocaleContext = createContext<LocaleContext>({
  currentLocale: Locale.EN_US,
  setCurrentLocale: (locale) => {
    console.warn('set Locale - ', locale);
  },
});

interface Props {
  children: ReactElement;
}

const LocaleContextProvider: FC<Props> = ({children}): ReactElement => {
  const [locale, setLocale] = useState<Locale>(Locale.EN_US);

  const setLocaleHandler = async (locale: Locale) => {
    localStorage.setItem('currentLocale', locale);
    await i18n.changeLanguage(locale);
    setLocale(locale);
  };

  const localeContext: LocaleContext = {
    currentLocale: locale,
    setCurrentLocale: setLocaleHandler,
  };

  useEffect(() => {
    const currentLocale = localStorage.getItem('currentLocale');

    setLocaleHandler(currentLocale as Locale || Locale.EN_US);
  }, []);

  return (
    <LocaleContext.Provider value={localeContext}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleContextProvider;