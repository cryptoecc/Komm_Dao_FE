import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DealList from '../../../components/dashboard/deal/DealList';
import { API_BASE_URL } from 'src/utils/utils';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store'; // RootState 경로는 프로젝트에 따라 조정 필요

const PageContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
`;

const Title = styled.h1`
  color: #1a0737;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
`;

const DealPage: React.FC = () => {
  const [deals, setDeals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user); // 사용자 정보 가져오기

  useEffect(() => {
    if (!user || !user.user_id) {
      // 사용자가 인증되지 않은 경우 로그인 페이지로 리다이렉트
      navigate('/'); // 로그인 페이지의 경로를 조정하세요
      return;
    }

    const fetchDeals = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/deals`);
        setDeals(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching deals:', error);
        setLoading(false);
      }
    };

    fetchDeals();
  }, [user, navigate]);

  const handleDealClick = (deal: any) => {
    navigate(`/mainboard/deal/${deal.deal_id}`, { state: { deal } });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PageContainer>
        <Title>Deal</Title>
        <DealList deals={deals} onDealClick={handleDealClick} />
      </PageContainer>
    </>
  );
};

export default DealPage;
