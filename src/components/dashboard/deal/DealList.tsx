import React from 'react';
import styled from 'styled-components';
import DealCard from './DealCard';

interface Deal {
  id: number;
  title: string;
  description: string;
  amount: number;
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
  flex-wrap: wrap; /* 화면 크기에 따라 카드가 줄을 바꿈 */
  gap: 40px;
  justify-content: flex-start; /* 카드들을 왼쪽 정렬 */

  @media (max-width: 767px) {
    gap: 15px;
  }
`;

const DealWrapper = styled.div`
  flex: 1 1 auto; /* 카드가 가능한 공간만큼 확장될 수 있도록 설정 */
  display: flex;
  justify-content: center;
  max-width: 500px; /* 카드의 최대 너비를 500px로 제한 */

  @media (max-width: 767px) {
    width: 90vw; /* 모바일 화면에서 카드 너비를 뷰포트 너비의 90%로 설정 */
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 70vw; /* 태블릿 화면에서 카드 너비를 뷰포트 너비의 70%로 설정 */
  }
`;

const DealList: React.FC<DealListProps> = ({ deals, onDealClick }) => {
  return (
    <DealListContainer>
      {deals.map((deal) => (
        <DealWrapper key={deal.id} onClick={() => onDealClick(deal)}>
          <DealCard deal={deal} />
        </DealWrapper>
      ))}
    </DealListContainer>
  );
};

export default DealList;
