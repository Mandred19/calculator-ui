import { createTheme, Theme } from '@mui/material';
import { muiPalette } from './muiPalette';
import { muiStyles } from './muiStyles';

export const theme: Theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
  palette: {
    ...muiPalette,
    mode: 'light',
  },
  spacing: 8,
  components: {
    ...muiStyles,
  },
});
