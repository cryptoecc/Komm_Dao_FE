import styled from 'styled-components';

export const ParticipantListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 20px; */
`;

export const LeftSection = styled.div`
  flex: 1;
  padding: 10px;
  padding-bottom: 40px;
  max-width: 50%; /* Ensures LeftSection does not exceed 50% of the total width */

  p {
    font-size: 16px;
    margin-bottom: 25px;
    color: #404040;
    font-weight: 500;
  }

  div {
    display: grid;
    grid-template-columns: repeat(7, 25px);
    gap: 10px;
    grid-auto-flow: row; /* Ensures items flow into the next row automatically */
    grid-auto-rows: minmax(25px, auto); /* Controls the row height */
    overflow-wrap: break-word; /* Allows breaking long words */
  }
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`;

export const ParticipantItem = styled.div`
  img {
    width: 25px;
    height: 25px;
    margin: 0; /* Ensure no extra margin is added */
  }
`;

export const RatingSection = styled.div`
  width: 100%;
  margin-top: 60px;
  p {
    font-size: 16px;
    margin-bottom: 10px;

    span {
      font-weight: 700;
      color: #6a5feb;
    }
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  width: 100%;
  /* vertical-align: center; */
  justify-content: space-between;
  /* align-items: center; */
  margin-top: 20px; /* Add space between stars and the text/button section */
`;

export const RatingContainer = styled.div`
  display: flex; /* Flexbox를 사용하여 별과 숫자를 가로로 정렬 */
  align-items: center; /* 별과 숫자를 수직 가운데 정렬 */
  margin-bottom: 10px; /* Increase margin to add space between stars and the text below */

  img {
    margin-top: 10px;
    width: 35px;
    height: 35px;
    margin-right: 10px; /* Increase space between each star */
    cursor: pointer;
  }
`;

export const Xp = styled.p`
  font-size: 14px;
`;

export const ClaimXPButton = styled.button<{ disabled: boolean }>`
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#6A5FEB')};
  color: white;
  padding: 8px 24px;
  width: 120px;
  border: none;
  border-radius: 20px;
  /* margin-bottom: 30px; */
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#7a52e3')};
  }
`;

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const LoadingSpinner = styled.div`
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 5px solid #fff;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 20px;

  /* width: 300px; */
  position: relative;
  /* top: 50px; */
`;

export const CloseButton = styled.button`
  width: 25px;
  height: 25px;
  font-weight: 700;
  float: right;
  background: none;
  border: none;
  cursor: pointer;
`;
