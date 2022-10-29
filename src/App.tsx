import React, { FC, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container, Stack } from '@mui/material';
import AppHeader from './components/AppHeader';
import Router from './Router';
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
    <BrowserRouter>
      <Stack direction={'column'} className={classes.appWrapper} style={style}>
        <Container maxWidth={'xl'} style={style}>
          <AppHeader/>

          <Router/>
        </Container>
      </Stack>
    </BrowserRouter>
  );
};

export default App;
