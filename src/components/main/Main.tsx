// src/components/main/Main.tsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../style/GlobalStyle';
import { theme } from '../../style/theme';
import { Container } from '../../style/layout';
import { ContainerMain, Logo, Text, SubText } from './Main.style';

const Main: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container $size={1440}>
        <ContainerMain>
          <Logo src="/assets/images/Logo.png" alt="Logo" />
          <Text>KommDAO</Text>
          <SubText>The First Venture DAO in Korea</SubText>
        </ContainerMain>
      </Container>
    </ThemeProvider>
  );
};

export default Main;
