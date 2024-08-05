// import styled from 'styled-components';

// interface PageProps {
//   $size?: number;
// }

// export const Container = styled.main<PageProps>`
//   width: ${(props) => props.theme.sizes.fullWidth};
//   height: ${(props) => props.theme.sizes.fullHeight};
//   max-width: ${({ $size }) => ($size ? `${$size}px` : '100%')};
//   display: flex;
//   flex-direction: column;
//   /* justify-content: center; */
//   margin: 0 auto;
// `;

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
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: ${({ $size }) => ($size ? `${$size * 0.8}px` : '100%')};
  }

  @media (max-width: 992px) {
    max-width: ${({ $size }) => ($size ? `${$size * 0.6}px` : '100%')};
    padding: 0 20px; /* 양쪽에 패딩 추가 */
  }

  @media (max-width: 768px) {
    max-width: ${({ $size }) => ($size ? `${$size * 0.8}px` : '100%')};
    padding: 0 10px; /* 양쪽에 패딩 추가 */
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 0 5px; /* 양쪽에 패딩 추가 */
  }
`;
