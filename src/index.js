import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

import './font/stylesheet.css';
import './styles/index.css';
import './styles/reset.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>

  // </React.StrictMode>
);
