import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import theme from './theme';

// CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './font/melquip-embedded.css';
import GlobalStyles from './globalStyles.js';

// Components
import App from './components/App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// SW
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();