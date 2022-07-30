import { createTheme } from '@mui/material';

export const Theme = {
  palette: {
    black: 'rgb(10, 10, 10)',
    white: 'rgb(255, 255, 255)',
    red: '#E77777',
    lightRed: '#E7777780',
    grey: '#4E4E4E',
    lightGrey: '#F1F1F1'
  },
  breakpoints: {
    sm: '500px',
    md: '905px'
  }
};

export const MuiTheme = createTheme(Theme);
