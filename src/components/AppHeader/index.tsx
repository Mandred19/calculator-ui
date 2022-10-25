import React, { FC, ReactElement } from 'react';
import HeaderNavigation from './HeaderNavigation';
import ThemeToggleButton from './ThemeToggleButton';
import SetLocale from './SetLocale';
import { Stack } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles<void>()(() => ({

}));

const AppHeader: FC = (): ReactElement => {
  const { theme } = useStyles();

  return (
    <Stack
    direction={'row'}
    spacing={4}
    alignItems={'end'}
    justifyContent={'space-between'}
    paddingTop={theme.spacing(2)}
    paddingBottom={theme.spacing(2)}>
      <HeaderNavigation/>

      <Stack direction={'row'} spacing={4} justifyContent={'space-between'}>
        <ThemeToggleButton/>

        <SetLocale/>
      </Stack>
    </Stack>
  );
};

export default AppHeader;