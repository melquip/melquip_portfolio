import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './globalStyles.js';

const theme = {
  preload: [
    'https://fonts.googleapis.com/css?family=Odibee+Sans|Roboto+Mono&display=swap',
  ],
  colors: {
    black: '#000',
    white: '#fff',

  },
  fonts: {
    primary: '"Roboto Mono", monotype, sans-serif',
    secondary: '"Odibee Sans", "Roboto Mono", cursive, sans-serif'
  },
  tinyBreakpoint: '360px',
  mobileBreakpoint: '480px',
  tabletBreakpoint: '640px',
  desktopBreakpoint: '1024px',
  largerBreakpoint: '1366px',
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>, 
  document.getElementById('root')
);