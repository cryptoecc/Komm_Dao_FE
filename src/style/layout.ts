// src/style/layout.ts
import styled from 'styled-components';

interface PageProps {
  $size: number;
}

export const Container = styled.main<PageProps>`
  width: ${(props) => props.theme.sizes.maxWidth}px;
  height: ${(props) => props.theme.sizes.maxHeight}px;
  max-width: ${({ $size }) => `${$size}px`};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
