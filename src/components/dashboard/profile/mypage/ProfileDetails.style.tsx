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
  align-items: left;
  margin-left: 0;
  gap: 10px;

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
  line-height: 1.5;
  width: 100%; /* 부모 요소의 너비를 따름 */
  max-width: 100%; /* 최대 너비를 설정 */
  word-wrap: break-word; /* 긴 단어를 줄 바꿈 */
  overflow-wrap: break-word; /* 단어가 넘칠 경우 줄 바꿈 */
  word-break: break-word; /* 긴 단어를 강제로 줄 바꿈 */
  white-space: normal; /* 텍스트를 일반적인 줄 바꿈 방식으로 설정 */
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
  height: 58px;
  padding: 17px 26px;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #000;
  color: white;
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background: var(--Purple-900, #7c4dff);
  position: absolute; /* 절대 위치로 설정 */
  top: -100px; /* 상단에서 20px 위치 */
  right: -100px; /* 우측에서 20px 위치 */
  &:hover {
    background: #d1d1e9;
    color: var(--Purple-900, #7c4dff);
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

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

export const CardContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

export const Card = styled.div<{ index: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s, opacity 0.5s;
  transform: ${(props) => `rotate(${props.index * 10}deg)`};
  opacity: ${(props) => (props.index === 0 ? 1 : 0)};
  z-index: ${(props) => 5 - props.index};
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  color: #000;
`;

export const CardSubtitle = styled.p`
  margin: 0;
  font-size: 18px;
  color: #875cff;
`;
