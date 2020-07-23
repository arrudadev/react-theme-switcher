import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ThemeSwitcherProvider } from './context/ThemeSwitcher';

ReactDOM.render(
  <ThemeSwitcherProvider>
    <App />
  </ThemeSwitcherProvider>,
  document.getElementById('root'),
);
