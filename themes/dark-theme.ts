import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#11001c',
    },
    primary: {
      main: '#fefae0',
    },
    secondary: {
      main: '#52b788',
    },
    error: {
      main: '#a4161a',
    },
  },
});
