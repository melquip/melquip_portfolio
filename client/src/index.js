import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './globalStyles.js';

import { BrowserRouter as Router } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const theme = {
  preload: [
    'https://fonts.googleapis.com/css?family=Odibee+Sans|Roboto+Mono&display=swap',
  ],
  colors: {
    black: 'rgba(17, 17, 17, 1)',
    white: '#fff',
    lightgray: '#eee',
    orange: 'rgba(239, 148, 108, 1)',
    lightorange: 'rgba(239, 148, 108, .5)',
    purple: 'rgba(75, 78, 109, 1)',
    blue: 'rgba(38, 84, 124, 1)',
    midblue: 'rgba(38, 84, 124, .8)',
    lightblue: 'rgba(38, 84, 124, .25)',
    red: 'rgba(239, 71, 111, 1)',
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
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);