import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';

import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
