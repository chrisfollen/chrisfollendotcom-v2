import { createTheme } from '@mui/material';

export const Theme = {
  palette: {
    black: 'rgb(10, 10, 10)',
    white: 'rgb(255, 255, 255)',
    red: '#E77777',
    grey: '#4E4E4E'
  },
  breakpoints: {
    sm: '600px',
    md: '905px'
  }
};

export const MuiTheme = createTheme(Theme);
