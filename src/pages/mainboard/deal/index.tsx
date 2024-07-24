// src/pages/mainboard/deal/index.tsx
import React from 'react';
import styled from 'styled-components';
import ConnectWallet from '../../../components/walletbtn/ConnectWallet';

const DealContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white1};
  position: relative; /* For absolute positioning of ConnectWallet */
`;

const DealTitle = styled.h1`
  color: #1a0737;
  font-family: Inter, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px; /* Adjust margin as needed */
`;

const DealContent = styled.div`
  /* Add your styles here */
`;

const ConnectWalletWrapper = styled.div`
  position: absolute; /* Positioning to place it at the top right */
  top: 20px; /* Adjust top position */
  right: 20px; /* Adjust right position */
`;

const Deal: React.FC = () => {
  return (
    <DealContainer>
      <DealTitle>Deal : XP 1,000p 이상 접근</DealTitle>
      <ConnectWalletWrapper>
        <ConnectWallet />
      </ConnectWalletWrapper>
      <DealContent>{/* Add your content here */}</DealContent>
    </DealContainer>
  );
};

export default Deal;
