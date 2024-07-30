// pages/deal.tsx
import React from 'react';
import DealList from '../../../components/dashboard/deal/DealList';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  color: #1a0737;
  font-family: Inter, sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
`;

const DealPage: React.FC = () => {
  return (
    <PageContainer>
      <Title>Deals</Title>
      <DealList />
    </PageContainer>
  );
};

export default DealPage;
