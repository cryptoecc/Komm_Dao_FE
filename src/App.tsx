import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import { theme } from './style/theme';
import { Container } from './style/layout';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store/store';
import Router from './Router'; // Router 컴포넌트 import

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Container>
            <Router />
          </Container>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
