import styled from 'styled-components';

interface CardWrapperProps {
  $isVisible: boolean;
  $bgColor: string;
  $boxShadow: string;
  $zIndex: number;
  $transform: string;
}
// export const CardContainerWrapper = styled.div`
//   position: absolute;
//   bottom: 20px;
//   right: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
//   gap: 10px;

//   @media (max-width: 768px) {
//     bottom: 10px;
//     right: 10px;
//   }
// `;

export const CardContainerWrapper = styled.div`
  position: relative; // 상대 위치로 설정하여 자식 카드의 절대 위치를 기준으로 함
  width: 250px; // 카드 리스트의 폭을 설정
  height: 250px; // 카드 리스트의 높이를 설정
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 200px; // 모바일 화면에서 카드 리스트의 폭을 줄임
    height: 200px; // 모바일 화면에서 카드 리스트의 높이를 줄임
  }
`;

// export const CardWrapper = styled.div<CardWrapperProps>`
//   width: 250px; /* 기본 크기: 뷰포트 너비의 50% */
//   height: 250px; /* 기본 크기: 뷰포트 너비의 50% (정사각형 유지) */
//   flex-direction: column; // 카드 리스트가 세로로 나열될 수 있도록
//   align-items: flex-start; // 카드 리스트가 왼쪽 정렬될 수 있도록
//   border-radius: 20px;
//   background: ${({ $bgColor }) => $bgColor};
//   box-shadow: ${({ $boxShadow }) => $boxShadow};
//   position: absolute;
//   transition: all 0.3s ease;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   &:hover {
//     cursor: pointer;
//   }

//   @media (max-width: 768px) {
//     width: 200px; // 모바일 화면에서 카드의 폭을 줄임
//     height: 200px; // 모바일 화면에서 카드의 높이를 줄임
//   }
// `;

export const CardWrapper = styled.div<CardWrapperProps>`
  position: absolute;
  width: 250px; /* 기본 크기: 뷰포트 너비의 50% */
  height: 250px; /* 기본 크기: 뷰포트 너비의 50% (정사각형 유지) */
  border-radius: 20px;
  background: ${({ $bgColor }) => $bgColor};
  box-shadow: ${({ $boxShadow }) => $boxShadow};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ $zIndex }) => $zIndex}; /* z-index 설정 */
  transform: ${({ $transform }) => $transform}; /* 회전 변환 설정 */

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 200px; // 모바일 화면에서 카드의 폭을 줄임
    height: 200px; // 모바일 화면에서 카드의 높이를 줄임
  }
`;

// export const CardContent = styled.div`
//   padding: 16px;
//   text-align: center;

//   .icon {
//     width: 24px;
//     height: 24px;
//     margin-bottom: 8px;
//   }

//   .text {
//     font-size: 16px;
//     margin: 8px 0;
//   }

//   .title {
//     font-weight: bold;
//   }

//   .content {
//     color: gray;
//   }

//   .additional-text {
//     font-size: 14px;
//     color: darkgray;
//   }
// `;

export const CardContent = styled.div`
  padding: 16px;
  text-align: center;

  .icon {
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }

  .text {
    font-size: 16px;
    margin: 8px 0;
  }

  .title {
    font-weight: bold;
  }

  .content {
    color: gray;
  }

  .additional-text {
    font-size: 14px;
    color: darkgray;
  }
`;
