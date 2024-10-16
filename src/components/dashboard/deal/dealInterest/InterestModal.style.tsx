import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  width: 650px;
  height: 350px;
  background: white;
  padding: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  h2 {
    margin-top: 10px;
    margin-bottom: 30px;
    font-size: 28px;
    font-weight: 600;
    font-family: Inter;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: #000;
  }

  p:last-child {
    margin-bottom: 24px;
    font-size: 12px;
    color: #888;
  }
`;

export const DateText = styled.p`
  text-align: right;
  margin-top: 80px;
  margin-right: 10px;
  font-size: 12px;
  color: #888;
  margin-bottom: 8px; /* Smaller space between date and buttons */
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0; /* Remove margin to keep buttons close to date */

  button {
    margin-left: 8px; /* Adds space between buttons */
  }
`;

export const EditButton = styled.button`
  background: white;
  border: 1px solid black;
  border-radius: 20px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  cursor: pointer;

  &:hover {
    border-color: #888;
  }
`;

export const ConfirmButton = styled.button`
  background: var(--Purple-900, #7c4dff);
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: 700;
  padding: 14px 34px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #6e35b2;
  }
`;

export const SubMission = styled.div`
  p {
    font-size: 22px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
  }
`;

export const Redirect = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  gap: 10px;

  span {
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .spinner {
    display: inline-block;
    width: 24px;
    height: 8px; /* 가로로 긴 스피너 모양 */
    border: 3px solid rgba(0, 0, 255, 0.1);
    border-top: 3px solid #0000ff;
    border-radius: 10px; /* 둥근 모양 */
    animation: spin 1s linear infinite;
    margin-right: 8px; /* 텍스트와의 간격 */
  }
`;

const spinAnimation = `
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SpinIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  animation: spin 2s linear infinite; // 2초 동안 계속해서 회전
  ${spinAnimation}// 위에서 정의한 애니메이션 추가
`;
