import React from 'react';

import { DefaultTheme, ThemeProvider } from 'styled-components';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

import { useLocalStorageState } from '../utils/useLocalStorageState';

const ThemeSwitcherContext = React.createContext<any>({});

const ThemeSwitcherProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useLocalStorageState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <ThemeSwitcherContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeSwitcherContext.Provider>
  );
};

export { ThemeSwitcherContext, ThemeSwitcherProvider };
