// src/components/main/Main.style.tsx
import styled from 'styled-components';

export const ContainerMain = styled.div`
  display: flex;
  /* width: 100%; */
  /* height: 100%; */
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 80px;
  justify-content: center;
  height: 55vh;
`;

export const Logo = styled.img`
  width: 320px;
  height: 320px;
  flex-shrink: 0;
  /* margin-bottom: 20px; 로고와 텍스트 사이 간격 */
`;

export const Text = styled.p`
  color: #1a0737;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SubText = styled.p`
  color: #1a0737;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
