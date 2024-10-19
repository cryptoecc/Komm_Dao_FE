import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DealCard from './DealCard';
import { images } from '../../../assets/deal/images';

interface Deal {
  deal_id: number;
  deal_name: string;
  description: string;
  summary: string;
  final_amount: number;
  percentage: number;
  end_date: string;
  create_date: string; // 시작 날짜 추가
  deal_logo_url: string;
  deal_banner_url: string;
}

interface DealListProps {
  deals: Deal[];
  onDealClick: (deal: Deal) => void; // Accept onDealClick as a prop
}

const DealListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* margin-left: 50px; */
  /* justify-content: center; */
  justify-content: flex-start;
  align-items: center;
  /* margin: 0 auto; */

  @media (max-width: 767px) {
    gap: 15px;
  }

  @media (min-width: 1440px) {
    gap: 15px;
    justify-content: center;
  }

  /* @media (max-width: 1777px) {
    gap: 15px;
  
  } */

  @media (min-width: 1920px) {
    gap: 15px;
    /* justify-content: center; */
  }
`;

const DealWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  max-width: 550px;

  @media (max-width: 767px) {
    width: 90vw;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 70vw;
  }
`;

const fakeDeals: Deal[] = [
  {
    deal_id: 1,
    deal_name: 'Sample Deal 1',
    description: '기업 소개 MYX Finance는...',
    summary: 'asdasdasdasd',
    final_amount: 100000,
    percentage: 50,
    end_date: '2024-08-31',
    create_date: '2024-01-01', // 시작 날짜 추가
    deal_logo_url: `${images.MYX}`,
    deal_banner_url: `${images.MYX_bannerr}`,
  },
  {
    deal_id: 2,
    deal_name: 'Sample Deal 2',
    description: 'This is a description for Sample Deal 2.',
    summary: 'asdasdasdasd',
    final_amount: 200000,
    percentage: 75,
    end_date: '2024-09-30',
    create_date: '2024-02-01', // 시작 날짜 추가
    deal_logo_url: `${images.OG}`,
    deal_banner_url: `${images.OG_banner}`,
  },
  // 추가 데이터...
];

const DealList: React.FC<DealListProps> = ({ deals = fakeDeals, onDealClick }) => {
  const [dealData, setDealData] = useState<Deal[]>(deals);
  console.log(deals);
  useEffect(() => {
    // 만약 deals가 비어있거나 undefined라면 fakeDeals로 설정
    if (!deals || deals.length === 0) {
      setDealData(fakeDeals);
    } else {
      setDealData(deals);
    }
  }, [deals]);

  return (
    <DealListContainer>
      {dealData.map((deal) => (
        <DealWrapper key={deal.deal_id} onClick={() => onDealClick(deal)}>
          <DealCard deal={deal} />
        </DealWrapper>
      ))}
    </DealListContainer>
  );
};
export default DealList;
