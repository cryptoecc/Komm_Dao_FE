import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #f3efff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 350px;
  /* margin: 10px; */
  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* 트랜지션 추가 */
  cursor: pointer;
  &:hover {
    background-color: #e0dcf9; /* hover 시 배경색을 약간 어둡게 변경 */
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15); /* 그림자를 더 깊게 변경 */
  }

  @media (min-width: 1600px) {
    width: 365px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 130px; /* 이미지 영역의 높이를 140px에서 130px로 줄임 */
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  padding: 10px; /* 패딩을 20px에서 15px로 줄임 */
  object-fit: contain;
  margin-top: 5px;
`;

export const CardContent = styled.div`
  padding: 12px; /* 전체 패딩을 16px에서 12px로 줄임 */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LogoAndTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px; /* 간격을 줄임 */
`;

export const Logo = styled.img`
  width: 40px; /* 로고 크기를 약간 줄임 */
  height: 40px;
`;

export const Title = styled.h3`
  font-size: 14px; /* 글자 크기를 약간 줄임 */
  font-weight: 600;
  color: #404040;
`;

export const StatusText = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #875cff;
  margin-bottom: 6px; /* 간격을 줄임 */
`;

export const XPText = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #404040;
  margin-bottom: 6px; /* 간격을 줄임 */
  margin-left: auto;
`;

export const DateRange = styled.span`
  font-size: 12px;
  color: #404040;
  margin-bottom: 8px; /* 간격을 줄임 */
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px; /* 높이를 줄임 */
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 8px;
  position: relative;
`;

export const ProgressBar = styled.div<{ $progress: number; $maxProgress: number }>`
  width: ${({ $progress, $maxProgress }) => ($progress / $maxProgress) * 100}%;
  height: 100%;
  background-color: #875cff;
  border-radius: 5px;
`;

export const ProgressText = styled.span`
  font-size: 12px;
  color: #404040;
  text-align: center;
  width: 100%;
  display: block;
`;
