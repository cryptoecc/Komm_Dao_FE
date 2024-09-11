import React from 'react';
import dayjs from 'dayjs';
import defaultDealIcon from '../../../assets/deal/MYX.png';
import defaultBannerImg from 'src/assets/deal/DELEGATE_banner.png';
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
import { API_BASE_URL } from 'src/utils/utils';

interface Deal {
  deal_id: number;
  deal_name: string;
  description: string;
  summary: string;
  final_amount: number;
  percentage: number;
  end_date: string;
  deal_logo_url: string;
  deal_banner_url: string;
}

const DealCard: React.FC<{ deal: Deal }> = ({ deal }) => {
  const currentDate = dayjs();
  const endDate = dayjs(deal.end_date);
  console.log(endDate);
  const status = currentDate.isBefore(endDate) ? 'Open' : 'Closed';
  console.log(deal);
  return (
    <DealCardContainer>
      <DealItem>
        <BannerContainer>
          <BannerImage
            src={deal.deal_banner_url ? `${API_BASE_URL}/${deal.deal_banner_url}` : defaultBannerImg}
            alt="Banner Image"
          />
          <LogoImage
            src={deal.deal_logo_url ? `${API_BASE_URL}/${deal.deal_logo_url}` : defaultDealIcon}
            alt="Deal Logo"
          />
          <DealTitle>{deal.deal_name || 'No Deal Name'}</DealTitle>
          <StatusBadge $status={status}>{status === 'Open' ? 'Open' : 'Closed'}</StatusBadge>
          <PercentageText>{deal.percentage || 0}%</PercentageText>
        </BannerContainer>

        <GaugeWrapper>
          <Gauge $percentage={deal.percentage || 0} />
        </GaugeWrapper>

        <DealDescription>{deal.summary || 'No Description Available'}</DealDescription>
      </DealItem>
    </DealCardContainer>
  );
};

export default DealCard;
