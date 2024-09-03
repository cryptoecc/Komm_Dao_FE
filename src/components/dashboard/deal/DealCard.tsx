import React from 'react';
import dayjs from 'dayjs';
import defaultDealIcon from '../../../assets/deal/MYX.png';
import {
  DealCardContainer,
  DealItem,
  DealTitle,
  StatusBadge,
  GaugeWrapper,
  Gauge,
  DealDescription,
  PercentageText,
  BannerContainer,
  BannerImage,
  LogoImage,
} from './DealCard.style';

interface Deal {
  deal_id: number;
  deal_name: string;
  deal_desc: string;
  final_amount: number;
  percentage: number;
  start_date: string;
  end_date: string;
  deal_image_url: string;
  banner_image_url: string;
}

const DealCard: React.FC<{ deal: Deal }> = ({ deal }) => {
  const currentDate = dayjs();
  const endDate = dayjs(deal.end_date);
  const status = currentDate.isBefore(endDate) ? 'Open' : 'Closed';

  return (
    <DealCardContainer>
      <DealItem>
        <BannerContainer>
          <BannerImage src={deal.banner_image_url} alt="Banner Image" />
          <LogoImage src={deal.deal_image_url || defaultDealIcon} alt="Deal Logo" />
          <DealTitle>{deal.deal_name || 'No Deal Name'}</DealTitle>
          <StatusBadge status={status}>{status === 'Open' ? 'Open' : 'Closed'}</StatusBadge>
          <PercentageText>{deal.percentage || 0}%</PercentageText>
        </BannerContainer>

        <GaugeWrapper>
          <Gauge percentage={deal.percentage || 0} />
        </GaugeWrapper>

        <DealDescription>{deal.deal_desc || 'No Description Available'}</DealDescription>
      </DealItem>
    </DealCardContainer>
  );
};

export default DealCard;
