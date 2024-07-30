// components/mainboard/dashboard/DealCard.tsx
import React from 'react';
import {
  DealItem,
  DealTitle,
  DealDescription,
  DealAmount,
  GaugeWrapper,
  IconWrapper,
  PercentageLabel,
} from './DealList.style';
import dealIcon from '../../../assets/deal/Deal.png'; // 이미지 경로를 import

interface Deal {
  id: number;
  title: string;
  description: string;
  amount: number;
  percentage: number; // 게이지의 비율을 나타내는 새로운 필드 추가
}

const DealCard: React.FC<{ deal: Deal }> = ({ deal }) => {
  return (
    <DealItem>
      <IconWrapper>
        <img src={dealIcon} alt="Deal Icon" />
      </IconWrapper>
      <GaugeWrapper>
        <PercentageLabel>{deal.percentage}%</PercentageLabel>
      </GaugeWrapper>
      <DealTitle>{deal.title}</DealTitle>
      <DealDescription>{deal.description}</DealDescription>
      <DealAmount>${deal.amount}</DealAmount>
    </DealItem>
  );
};

export default DealCard;
