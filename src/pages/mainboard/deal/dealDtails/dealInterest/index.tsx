import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import DealInterestCard from '../../../../../components/dashboard/deal/dealInterest/DealInterestCard';

const PageContainer = styled.div`
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #875cff;
  font-weight: 700;
  margin-bottom: 20px;
`;

const BackLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #875cff;
  font-weight: 700;

  span {
    margin-right: 10px; /* 아이콘과 텍스트 사이의 간격 */
  }
`;

const DealInterestPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const deal = location.state?.deal; // DealDetails에서 넘겨준 deal 데이터를 받아옵니다.

  return (
    <PageContainer>
      <BackButton onClick={() => navigate(-1)}>
        <BackLink>
          <span>&larr;</span>Back to Deal
        </BackLink>
      </BackButton>
      {deal ? <DealInterestCard deal={deal} /> : <div>No deal data available.</div>}
    </PageContainer>
  );
};

export default DealInterestPage;
