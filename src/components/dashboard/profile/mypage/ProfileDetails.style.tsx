// src/components/dashboard/profile/mypage/ProfileDetails.style.tsx
import styled from 'styled-components';

export const Banner = styled.div`
  width: 100%;
  height: 200px; /* 배너 높이 */
  background: #e4daff;
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
  color: white;
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px; /* 배너와 컨텐츠 사이의 간격 */
`;

// 상위 20% 부분 스타일
export const Header = styled.div`
  width: 100%;
  height: 200px; /* 상위 20%의 높이 */
  background: #e4daff;
`;

// 하위 80% 부분 스타일
export const Content = styled.div`
  width: 100%;
  height: 80%; /* 하위 80%의 높이 */
  background: #f8f8fa; /* 하위 부분 배경색 */
  padding: 20px; /* 내부 여백 */
  display: flex;
  flex-direction: column;
  align-items: center; /* 모든 자식 요소를 중앙 정렬 */
  gap: 30px; /* 요소들 사이의 간격 증가 */
  position: relative; /* Edit 버튼을 절대 위치로 배치하기 위한 설정 */
`;

// 컨테이너 스타일
export const Container = styled.div`
  width: 70%;
  height: 100%;
  background: #f8f8fa;
  padding: 20px; /* 내부 여백 */
  position: relative; /* Edit 버튼을 절대 위치로 배치하기 위한 설정 */
  display: flex;
  flex-direction: column;
  align-items: center; /* 모든 자식 요소를 중앙 정렬 */
  gap: 30px; /* 요소들 사이의 간격 증가 */
`;

// 프로필 이미지 래퍼
export const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  margin-bottom: 20px; /* 프로필 이미지와 그 아래 요소들 사이의 간격 */
`;

// 프로필 이미지 스타일
export const ProfileImage = styled.img`
  width: 167px;
  height: 167px;
  flex-shrink: 0;
  border-radius: 100px;
  border: 5px solid #875cff;
  background: lightgray;
  background-size: cover;
  background-repeat: no-repeat;
`;

// 정보 래퍼
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 수직 중앙 정렬 */
  gap: 15px; /* 요소들 사이의 간격 증가 */
`;

// 정보 텍스트 스타일
export const Name = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 5px; /* 이름과 직업 사이의 간격 */
`;

export const Job = styled.div`
  color: #875cff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 5px; /* 직업과 이메일 사이의 간격 */
`;

export const Email = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
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
  background: #ffffff; /* 버튼 배경색 추가 */
  border-radius: 8px; /* 버튼 모서리 둥글게 하기 */
  cursor: pointer; /* 클릭 가능 표시 */
  padding: 0; /* 버튼 내부 여백 제거 */
`;

export const CopyIcon = styled.img`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
`;

// 바이오 래퍼 스타일
export const BioWrap = styled.div`
  width: 100%; /* 전체 너비 사용 */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 */
  gap: 10px; /* 요소들 사이의 간격 */
  padding: 0 10px; /* 좌우 여백 최소화 */
  margin-bottom: 10px; /* 아래쪽 여백 추가 */
`;

export const Bio = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 5px; /* 바이오 제목과 내용 사이의 간격 */
`;

export const BioContents = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

// NFT 멤버십 래퍼 스타일
export const MembershipNftWrap = styled.div`
  width: 100%; /* 전체 너비 사용 */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 */
  gap: 10px; /* 요소들 사이의 간격 */
  padding: 0 10px; /* 좌우 여백 최소화 */
  margin-bottom: 10px; /* 아래쪽 여백 추가 */
`;

export const MembershipNftWrapInner = styled.div`
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  gap: 10px; /* 아이콘과 링크 텍스트 사이의 간격 */
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
  width: 24px; /* 아이콘 크기 조정 */
  height: 24px; /* 아이콘 크기 조정 */
`;

export const OpenSeaLink = styled.a`
  color: #875cff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  display: flex; /* 플렉스 박스로 배치 */
  align-items: center; /* 수직 가운데 정렬 */
  gap: 10px; /* 아이콘과 텍스트 사이의 간격 */
`;

// Edit 버튼 스타일
export const EditButton = styled.button`
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: #000;
  position: absolute; /* 절대 위치로 배치 */
  top: 20px; /* 위쪽에서 20px 떨어진 위치 */
  right: 20px; /* 오른쪽에서 20px 떨어진 위치 */
  color: white;
  padding: 10px 20px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  display: flex; /* 플렉스 박스로 배치 */
  align-items: center; /* 수직 가운데 정렬 */
  gap: 8px; /* 아이콘과 텍스트 사이의 간격 */
  /* &:hover {
    background-color: #6e4dd3;
  } */
`;

export const EditIcon = styled.img`
  width: 20px; /* 아이콘 크기 조정 */
  height: 20px; /* 아이콘 크기 조정 */
  display: block; /* 이미지 블록으로 표시 */
`;
