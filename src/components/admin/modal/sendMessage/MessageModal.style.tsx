import styled from 'styled-components';
import closeIcon from 'src/assets/modal/close.svg';

// 전체 모달 화면 오버레이
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

// 모달 컨테이너
export const ModalContainer = styled.div`
  padding: 25px;
  background: #fff;
  border-radius: 20px;
`;

// 모달 내용 구성
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
`;

// 모달 헤더 스타일
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  h2 {
    padding: 10px;
    font-size: 28px; /* 제목 크기 조정 */
    color: #1a0737; /* 제목 색상 */
    margin: 0;
    font-weight: 700;
  }
`;

// 모달 바디 스타일
export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  div {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 8px;
      font-size: 16px;
      font-weight: 300;
      font-family: Inter;
      color: #000;
    }

    input,
    textarea {
      padding: 12px;

      resize: none;
    }
  }
`;

// 모달 푸터 스타일
export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px; /* 버튼 간격 조정 */
`;

// 모달 닫기 버튼 스타일
export const CloseButton = styled.button`
  background: url(${closeIcon}) no-repeat center; /* 이미지 배경 설정 */
  background-size: 18px 18px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  border: 1px solid #000;
  padding: 14px 20px;
  align-items: center;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`;

// 메시지 보내기 버튼 스타일
export const SendButton = styled.button`
  background: var(--Purple-900, #7c4dff);
  padding: 14px 20px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  border-radius: 20px;
  cursor: pointer;
`;

export const Title = styled.input`
  width: 522px;
  height: 50px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);

  &::placeholder {
    font-size: 16px;
    font-family: Inter;
    font-weight: 300;
    color: #000;
  }
`;

export const TextArea = styled.textarea`
  width: 661px;
  height: 167px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  &::placeholder {
    font-size: 16px;
    font-family: Inter;
    font-weight: 300;
    color: #000;
  }
`;

export const Option = styled.input`
  width: 661px;
  height: 50px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);

  label {
    color: #000;

    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;
