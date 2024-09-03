import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DealList from '../../../components/dashboard/deal/DealList';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1440px;
  width: 1200px;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
  justify-content: flex-start;
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
    navigate(`/mainboard/deal/${deal.deal_id}`, { state: { deal } });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <TitleContainer>
        <Title>Deals</Title>
      </TitleContainer>
      <PageContainer>
        <DealList deals={deals} onDealClick={handleDealClick} />
      </PageContainer>
    </>
  );
};

export default DealPage;
