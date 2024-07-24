import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  height: 100%;
  border-radius: 30px;
  background: rgba(227, 217, 255, 0.3);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Header = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const MainContent = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-start;
`;

export const ProfileImageSection = styled.div`
  display: inline-block;
  gap: 10px;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  border: 5px solid #875cff;
  background: lightgray;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const EditImageButton = styled.button`
  background-color: #875cff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #6e4dd3;
  }
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
`;

export const HorizontalGroup = styled.div`
  display: flex;
  gap: 20px;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: 100%; /* 입력 상자가 가능한 모든 공간을 차지하도록 설정 */
  padding-left: 20px; /* 아이콘과 링크 공간을 위해 왼쪽 여백 추가 */
`;

export const MembershipNftInputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative; /* 아이콘과 링크를 절대 위치로 배치하기 위한 설정 */
  width: 100%;
`;

export const MembershipNftIcon = styled.img`
  position: absolute;
  left: 10px; /* 아이콘의 왼쪽 위치 조정 */
  width: 24px;
  height: 24px;
`;

export const MembershipNftLink = styled.a`
  position: absolute;
  left: 40px; /* 링크의 왼쪽 위치 조정 */
  color: #875cff;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &.cancel {
    background-color: #ddd;
    color: black;
  }
  &.save {
    background-color: #875cff;
    color: white;
  }
  &.save:hover {
    background-color: #6e4dd3;
  }
  &.cancel:hover {
    background-color: #bbb;
  }
`;
