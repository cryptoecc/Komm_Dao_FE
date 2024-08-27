import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DealList from '../../../components/dashboard/deal/DealList'; // DealList를 가져옵니다.

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers content horizontally */
  padding: 20px;
  width: 1440px;
  max-width: 1440px; /* Ensures the container doesn’t exceed this width */
  margin: 0 auto; /* Centers the container on the page */
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start; /* Aligns the title to the left */
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const DealPage: React.FC = () => {
  const [deals, setDeals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/deals');
        setDeals(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching deals:', error);
        setLoading(false);
      }
    };

    fetchDeals();
  }, []);

  const handleDealClick = (deal: any) => {
    console.log(deal);

    navigate(`/mainboard/deal/${deal.deal_id}`, { state: { deal } });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <PageContainer>
      <TitleContainer>
        <Title>Deals</Title>
      </TitleContainer>
      <DealList deals={deals} onDealClick={handleDealClick} />
    </PageContainer>
  );
};

export default DealPage;
