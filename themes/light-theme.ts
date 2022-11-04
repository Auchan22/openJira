import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f4f1de',
    },
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#14213d',
    },
    error: {
      main: '#d00000',
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },
  },
});
