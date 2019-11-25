import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './globalStyles.js';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const theme = {
  preload: [
    'https://fonts.googleapis.com/css?family=Odibee+Sans|Roboto+Mono&display=swap',
  ],
  colors: {
    black: '#000',
    white: '#fff',
    lightgray: '#eee',
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