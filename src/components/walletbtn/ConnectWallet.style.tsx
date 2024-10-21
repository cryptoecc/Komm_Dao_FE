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
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: noraml;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 20px;

  /* width: 300px; */
  position: relative;
  /* top: 50px; */
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  color: #000;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 0px 20px 60px 0px;
  /* top: 150px; */
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

export const WalletOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* margin-top: 70px; */
`;

export const WalletOptionButton = styled.button`
  background: #f8f8fa;
  color: #000;
  border: none;
  width: 520px;
  height: 60px;
  padding: 10px;
  font-weight: 400;
  border-radius: 20px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 0 auto; */
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
  /* width: 500px; */
  gap: 10px;
`;

export const WalletIconWrapper = styled.div`
  position: absolute;
  right: 20px;
`;

export const WalletIcon = styled.img`
  width: 46px;
  height: 46px;
`;
