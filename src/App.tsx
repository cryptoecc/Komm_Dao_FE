import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import { theme } from './style/theme';
import { Container } from './style/layout';
import Router from './Router'; // Router 컴포넌트 import

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Router />
      </Container>
    </ThemeProvider>
  );
};

export default App;
