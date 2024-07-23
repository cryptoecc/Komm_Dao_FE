import styled from 'styled-components';

interface PageProps {
  $size?: number;
}

export const Container = styled.main<PageProps>`
  width: ${(props) => props.theme.sizes.fullWidth};
  height: ${(props) => props.theme.sizes.fullHeight};
  max-width: ${({ $size }) => ($size ? `${$size}px` : '100%')};
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  margin: 0 auto;
`;
