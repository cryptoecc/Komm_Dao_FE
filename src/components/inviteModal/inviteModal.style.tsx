import styled from 'styled-components';

// 모달 배경 스타일
export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// 모달 내용 스타일
export const ModalContent = styled.div`
  width: 700px;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1001;
`;

// 모달 헤더
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 30px 10px 0px 23px;
`;

export const ModalTitle = styled.h3`
  font-size: 26px;
  font-weight: 600;
  color: #000;
  font-family: Inter;
`;

// 닫기 버튼 스타일
export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #000;
`;

// 초대 모달 전체 레이아웃 스타일
export const InviteModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

// 초대 입력 폼 스타일
export const InviteForm = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
  width: 100%;
`;

// 입력 필드 스타일
export const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

export const FormLabel = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`;

// 입력 필드 스타일
export const NickInput = styled.input`
  width: 230px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  font-size: 14px;

  &::placeholder {
    color: #aaa;
  }
`;

export const EmailInput = styled.input`
  width: 330px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  font-size: 14px;

  &::placeholder {
    color: #aaa;
  }
`;

// 사람 추가 버튼 스타일
export const AddPersonButton = styled.button`
  background: none;
  border: none;
  color: #000;
  font-size: 17px;
  font-weight: 400;
  font-family: Inter;
  cursor: pointer;
  margin: 10px 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const AddIconWrapper = styled.div`
  margin-right: 5px; /* 아이콘과 텍스트 사이 간격 */
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    width: 16px;
    height: 16px;
    fill: #875cff;
  }
`;

// 초대 버튼 스타일
export const InviteButton = styled.button`
  border-radius: 20px;
  background: var(--Purple-900, #7c4dff);
  color: white;
  padding: 12px 24px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  margin-right: 38px;

  &:hover {
    background-color: #6e40cc;
  }
`;

// 삭제 버튼 스타일
export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 30px;
  img {
    width: 20px;
    height: 20px;
  }
`;

export const Label = styled.label`
  font-weight: 400;
  font-family: Inter;
  margin-bottom: 5px;
  font-size: 16px;
`;

// 라벨이 있는 Row 스타일
export const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;
