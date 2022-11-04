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
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: '#3a015c',
        },
      },
    },
  },
});
