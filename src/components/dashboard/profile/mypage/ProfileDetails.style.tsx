import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  padding: 20px; /* 내부 여백 */
  display: flex;
  flex-direction: column;
  align-items: center; /* 모바일 화면에서 중앙 정렬 */
  gap: 30px; /* 요소들 사이의 간격 증가 */
  position: relative; /* Edit 버튼을 절대 위치로 배치하기 위한 설정 */

  @media (max-width: 768px) {
    width: 100%; /* 모바일 화면에서 전체 너비 사용 */
    padding: 10px; /* 모바일 화면에서 내부 여백 조정 */
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column; /* 모바일 화면에서 세로 정렬 */
  align-items: center; /* 프로필 이미지와 정보를 중앙 정렬 */
  gap: 20px; /* 프로필 이미지와 정보 사이의 간격 */
  width: 100%; /* 모바일 화면에서 전체 너비 사용 */

  @media (min-width: 769px) {
    flex-direction: row; /* 큰 화면에서는 가로 정렬 */
    align-items: center; /* 프로필 이미지와 정보 사이의 정렬 */
    justify-content: flex-start; /* 왼쪽 정렬 */
  }
`;

export const ProfileImage = styled.img`
  width: 167px;
  height: 167px;
  border-radius: 50%;
  border: 5px solid #875cff;
  background: lightgray;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    width: 120px; /* 모바일 화면에서 프로필 이미지 크기 조정 */
    height: 120px; /* 모바일 화면에서 프로필 이미지 크기 조정 */
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 모바일 화면에서 중앙 정렬 */
  margin-left: 0; /* 모바일 화면에서는 마진 제거 */
  gap: 10px; /* 요소들 사이의 간격 */

  @media (min-width: 769px) {
    margin-left: 10px; /* 큰 화면에서는 마진 추가 */
  }
`;

export const Name = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 24px; /* 모바일 화면에서 폰트 크기 조정 */
  }
`;

export const Job = styled.div`
  color: #875cff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 18px; /* 모바일 화면에서 폰트 크기 조정 */
  }
`;

export const Email = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 18px; /* 모바일 화면에서 폰트 크기 조정 */
  }
`;

export const Content = styled.div`
  width: 100%;
  background: #f8f8fa;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    padding: 10px; /* 모바일 화면에서 내부 여백 조정 */
  }
`;

// 나머지 정보 래퍼
export const WalletAddressWrap = styled.div`
  width: 100%; /* 전체 너비 사용 */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 */
  gap: 10px; /* 요소들 사이의 간격 */
  padding: 0 10px; /* 좌우 여백 최소화 */
  margin-bottom: 10px; /* 아래쪽 여백 추가 */
`;

export const WalletAddressContentsWrap = styled.div`
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  gap: 10px; /* 버튼과 내용 사이의 간격 */
`;

export const WalletAddress = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const WalletContents = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CopyButton = styled.button`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  background: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  padding: 0;
`;

export const CopyIcon = styled.img`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
`;

export const BioWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 0 10px;
  margin-bottom: 10px;
`;

export const Bio = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 5px;
`;

export const BioContents = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const MembershipNftWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 0 10px;
  margin-bottom: 10px;
`;

export const MembershipNftWrapInner = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const MembershipNftTitle = styled.h3`
  color: rgba(0, 0, 0, 0.5);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const OpenSeaIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const OpenSeaLink = styled.a`
  color: #875cff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const EditButton = styled.button`
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: #000;
  color: white;
  padding: 10px 20px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: 20px; /* 상단에서 20px 위치 */
  right: 20px; /* 우측에서 20px 위치 */

  @media (max-width: 768px) {
    position: fixed; /* 모바일 화면에서 고정 위치로 변경 */
    top: 20px; /* 상단에서 20px 위치 */
    right: 20px; /* 우측에서 20px 위치 */
  }
`;

export const EditIcon = styled.img`
  width: 20px;
  height: 20px;
  display: block;
`;

export const CardWrapper = styled.div`
  width: 100%; /* 기본 너비는 100% */
  max-width: 300px; /* 카드의 최대 너비 설정 */
  background-color: #fff; /* 카드 배경 색상 */
  border: 1px solid #ddd; /* 카드 테두리 색상 */
  border-radius: 8px; /* 카드 모서리 둥글게 */
  padding: 16px; /* 카드 내부 여백 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 카드 그림자 */
  display: flex;
  flex-direction: column;
  align-items: center; /* 카드 내용 중앙 정렬 */
  gap: 8px; /* 카드 내용 사이의 간격 */

  @media (max-width: 768px) {
    max-width: 70%; /* 모바일 화면에서 카드의 최대 너비를 70%로 조정 */
  }
`;

export const CardContainerWrapper = styled.div`
  display: flex;
  align-items: flex-end; /* 우측 정렬 */
  bottom: 20px; /* 하단에서 20px 위치 */
  right: 20px; /* 우측에서 20px 위치 */
  gap: 10px; /* 카드 사이의 간격 */

  @media (max-width: 768px) {
    bottom: 10px; /* 하단에서 10px 위치 */
    right: 10px; /* 우측에서 10px 위치 */
    gap: 5px; /* 모바일 화면에서 카드 사이의 간격 줄이기 */
  }
`;
