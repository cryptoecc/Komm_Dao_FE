// src/components/main/Main.style.tsx
import styled from 'styled-components';

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 화면 전체 높이 */
`;

export const Logo = styled.img`
  width: 200px; /* 로고 이미지 너비 */
  height: auto; /* 높이 자동 조정 */
  margin-bottom: 20px; /* 로고와 텍스트 사이 간격 */
`;

export const Text = styled.p`
  color: #1a0737;
  font-family: Inter;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SubText = styled.p`
  color: #1a0737;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
