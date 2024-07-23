import React from 'react';
import styled from 'styled-components';
import ConnectWallet from '../../../components/walletbtn/ConnectWallet';

const GovernanceContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white10};
  position: relative; /* For absolute positioning of ConnectWallet */
`;

const GovernanceTitle = styled.h1`
  color: #1a0737;
  font-family: Inter, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px; /* Adjust margin as needed */
`;

const GovernanceContent = styled.div`
  /* Add your styles here */
`;

const ConnectWalletWrapper = styled.div`
  position: absolute; /* Positioning to place it at the top right */
  top: 20px; /* Adjust top position */
  right: 20px; /* Adjust right position */
`;

const Governance: React.FC = () => {
  return (
    <GovernanceContainer>
      <GovernanceTitle>Governance</GovernanceTitle>
      <ConnectWalletWrapper>
        <ConnectWallet />
      </ConnectWalletWrapper>
      <GovernanceContent>{/* Add your content here */}</GovernanceContent>
    </GovernanceContainer>
  );
};

export default Governance;
