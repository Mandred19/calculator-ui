import React, { FC, ReactElement, useState } from 'react';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Theme } from '../../Providers/ThemeContext.provider';
import { useTranslation } from 'react-i18next';

const ThemeToggleButton: FC = (): ReactElement => {
  const { t } = useTranslation(['common']);
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const handleSetTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <IconButton
    onClick={handleSetTheme}
    aria-label={t('test', { ns: 'common' })}
    size={'large'}>
      {
        theme === Theme.LIGHT ? <LightModeIcon fontSize={'inherit'}/> : <DarkModeIcon fontSize={'inherit'}/>
      }
    </IconButton>
  );
};

export default ThemeToggleButton;