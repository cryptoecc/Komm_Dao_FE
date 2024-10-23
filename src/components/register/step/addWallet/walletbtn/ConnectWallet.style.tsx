import styled from 'styled-components';

export const WalletDiv = styled.div`
  display: inline-flex;
  /* display: flex; */
  /* justify-content: end; */
  height: 58px;
  padding: 17px 26px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--Purple-900, #7c4dff);
  /* float: right; */
  /* margin-bottom: 150px; */
  /* margin-left: 1300px; */
`;

export const WalletBtn = styled.button`
  color: #fff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: noraml;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  background: #fff;
  /* padding: 40px; */
  padding: 0px 60px;
  border-radius: 20px;
  margin-top: 50px;
  /* width: 300px; */
  position: relative;
  /* top: 50px; */
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  color: #404040
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-family: Inter;
  padding: 0px 256px 60px 0px;
  /* top: 150px; */
`;

export const CloseButton = styled.button`
  width: 25px;
  height: 25px;
  float: right;
  background: none;
  border: none;
  cursor: pointer;
`;

export const WalletOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* margin-top: 70px; */
`;

export const WalletOptionButton = styled.button`
  background: #f8f8fa;
  color: #404040
  border: none;
  width: 500px;
  height: 60px;
  padding: 10px;
  font-weight: 400;
  border-radius: 20px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
  position: relative;

  &:hover {
    background: #e0e0e0;
  }
`;

export const WalletOptionButtonContent = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 10px;
`;

export const WalletIconWrapper = styled.div`
  position: absolute;
  right: 20px;
`;

export const WalletIcon = styled.img`
  width: 39px;
  height: 39px;
`;
