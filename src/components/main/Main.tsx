// src/components/main/Main.tsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../style/theme';
import { Container } from '../../style/layout';
import { ContainerMain, Logo, Text, SubText } from './Main.style';

const Main: React.FC = () => {
  return (
    <ContainerMain>
      <Logo src="/assets/images/Logo.png" alt="Logo" />
      <Text>KommDAO</Text>
      <SubText>The First Venture DAO in Korea</SubText>
    </ContainerMain>
  );
};

export default Main;
