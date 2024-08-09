import React from 'react';
import styled from 'styled-components';

const DealItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const DealTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin: 10px 0;
`;

const DealDescription = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #555;
  margin: 10px 0;
`;

const DealAmount = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 10px 0;
`;

const GaugeWrapper = styled.div`
  width: 100%;
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 0;
  position: relative;
`;

const Gauge = styled.div<{ percentage: number }>`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background: #875cff;
  transition: width 0.3s ease;
`;

const PercentageLabel = styled.div`
  position: absolute;
  right: 0;
  top: -25px;
  font-size: 14px;
  color: #875cff;
  font-weight: 700;
`;

const IconWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

interface Deal {
  id: number;
  title: string;
  description: string;
  amount: number;
  percentage: number;
}

const DealCard: React.FC<{ deal: Deal }> = ({ deal }) => {
  return (
    <DealItem>
      <IconWrapper>
        <img src="/path/to/dealIcon.png" alt="Deal Icon" />
      </IconWrapper>
      <GaugeWrapper>
        <Gauge percentage={deal.percentage} />
        <PercentageLabel>{deal.percentage}%</PercentageLabel>
      </GaugeWrapper>
      <DealTitle>{deal.title}</DealTitle>
      <DealDescription>{deal.description}</DealDescription>
      <DealAmount>${deal.amount}</DealAmount>
    </DealItem>
  );
};

export default DealCard;
