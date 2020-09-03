import React from 'react';
import './App.css';
import Router from './containers/router';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { colors } from './assets'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: colors.primaryLight,
      main: colors.primary,
      dark: colors.primaryLight,
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
