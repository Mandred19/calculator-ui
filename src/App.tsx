import React, { FC, ReactElement } from 'react';
import AppHeader from './components/AppHeader';
import AppDisplayArea from './components/AppDisplayArea';
import AppInputArea from './components/AppInputArea';
import AppControlsArea from './components/AppControlsArea';
import { Container, Stack } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

type UseStyles = 'appWrapper';

const useStyles = makeStyles<void, UseStyles>()(() => ({
  appWrapper: {
    backgroundColor: '#eee',
  },
}));

const App: FC = (): ReactElement => {
  const style = { height: '100%', overflow: 'hidden' };
  const { classes } = useStyles();

  return (
    <Stack direction={'column'} className={classes.appWrapper} style={style}>
      <Container maxWidth={'xl'} style={style}>
        <AppHeader/>

        <AppDisplayArea/>

        <AppInputArea/>

        <AppControlsArea/>
      </Container>
    </Stack>
  );
};

export default App;
