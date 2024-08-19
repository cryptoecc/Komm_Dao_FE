import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DealCard from './DealCard';
import { images } from '../../../assets/deal/images';

interface Deal {
  deal_id: number;
  deal_name: string;
  deal_desc: string;
  final_amount: number;
  percentage: number;
  deal_image_url: string;
  start_date: string;
  end_date: string;
}

interface DealListProps {
  deals: Deal[];
  onDealClick: (deal: Deal) => void; // Accept onDealClick as a prop
}

const DealListContainer = styled.div`
  display: flex;
  margin-left: 50px;
  padding: 10px;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: flex-start;

  @media (max-width: 767px) {
    gap: 15px;
  }
`;

const DealWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  max-width: 500px;

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
    deal_desc: 'This is a description for Sample Deal 1.',
    final_amount: 100000,
    percentage: 50,
    deal_image_url: `${images.deal}`,
    start_date: '2024-08-01',
    end_date: '2024-08-31',
  },
  {
    deal_id: 2,
    deal_name: 'Sample Deal 2',
    deal_desc: 'This is a description for Sample Deal 2.',
    final_amount: 200000,
    percentage: 75,
    deal_image_url: `${images.labs}`,
    start_date: '2024-09-01',
    end_date: '2024-09-30',
  },
  {
    deal_id: 3,
    deal_name: 'Sample Deal 3',
    deal_desc: 'This is a description for Sample Deal 3.',
    final_amount: 300000,
    percentage: 90,
    deal_image_url: `${images.delegate}`,
    start_date: '2024-10-01',
    end_date: '2024-10-31',
  },
  {
    deal_id: 4,
    deal_name: 'Sample Deal 4',
    deal_desc: 'This is a description for Sample Deal 3.',
    final_amount: 300000,
    percentage: 90,
    deal_image_url: `${images.exocore}`,
    start_date: '2024-10-01',
    end_date: '2024-10-31',
  },
];

const DealList: React.FC<DealListProps> = ({ deals, onDealClick }) => {
  const [dealData, setDealData] = useState<Deal[]>(deals);

  useEffect(() => {
    // 가짜 데이터를 설정
    if (dealData.length === 0) {
      setDealData(fakeDeals);
    }
  }, [dealData]);
  // return (
  //   <DealListContainer>
  //     {deals.map((deal) => (
  //       <DealWrapper key={deal.deal_id} onClick={() => onDealClick(deal)}>
  //         <DealCard deal={deal} />
  //       </DealWrapper>
  //     ))}
  //   </DealListContainer>
  // );
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
