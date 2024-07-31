// components/mainboard/dashboard/DealList.tsx
import React from 'react';
import styled from 'styled-components';
import DealCard from './DealCard';

interface Deal {
  id: number;
  title: string;
  description: string;
  amount: number;
  percentage: number; // 게이지의 비율을 나타내는 새로운 필드 추가
}

const deals: Deal[] = [
  {
    id: 1,
    title: 'Deal 1',
    description: 'Description for deal 1',
    amount: 1000,
    percentage: 50,
  },
  {
    id: 2,
    title: 'Deal 2',
    description: 'Description for deal 2',
    amount: 2000,
    percentage: 60,
  },
  {
    id: 3,
    title: 'Deal 3',
    description: 'Description for deal 3',
    amount: 3000,
    percentage: 70,
  },
  {
    id: 4,
    title: 'Deal 4',
    description: 'Description for deal 4',
    amount: 4000,
    percentage: 80,
  },
  {
    id: 5,
    title: 'Deal 5',
    description: 'Description for deal 4',
    amount: 4000,
    percentage: 90,
  },
  {
    id: 6,
    title: 'Deal 6',
    description: 'Description for deal 4',
    amount: 4000,
    percentage: 100,
  },
  // Add more deals as needed
];

const DealListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px; /* Add gap between items */
  justify-content: center; /* 화면 중앙 정렬 */

  @media (max-width: 767px) {
    gap: 15px; /* 모바일 화면에서 카드들 사이의 간격을 줄임 */
  }
`;

const DealWrapper = styled.div`
  flex: 1 1 auto; /* 카드의 크기가 브라우저 크기에 맞게 자동 조정됨 */
  display: flex;
  justify-content: center;
  max-width: 500px; /* 카드 최대 너비 고정 */
  max-height: 400px; /* 카드 최대 높이 고정 */

  @media (max-width: 767px) {
    width: 90vw; /* 모바일 화면에서 카드 너비를 브라우저 너비의 90%로 설정 */
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 50vw; /* 태블릿 화면에서 카드 너비를 브라우저 너비의 50%로 설정 */
  }
`;

const DealList: React.FC = () => {
  return (
    <DealListContainer>
      {deals.map((deal) => (
        <DealWrapper key={deal.id}>
          <DealCard deal={deal} />
        </DealWrapper>
      ))}
    </DealListContainer>
  );
};

export default DealList;
