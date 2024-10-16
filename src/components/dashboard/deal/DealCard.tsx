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

// Deal 타입 정의
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

const DealCard: React.FC<{ deal: Deal }> = ({ deal }) => {
  // 현재 날짜와 종료 날짜 설정
  console.log(deal);
  const currentDate = dayjs();
  const endDate = dayjs(deal.end_date);
  const startDate = dayjs(deal.create_date); // 시작 날짜 설정

  // 상태 계산
  const status = currentDate.isBefore(endDate) ? 'Open' : 'Closed';

  // 진행 상황 계산 함수
  const calculateProgress = (startDate: dayjs.Dayjs, endDate: dayjs.Dayjs) => {
    const totalDuration = endDate.diff(startDate);
    const elapsedDuration = currentDate.diff(startDate);
    const progressPercentage = Math.min((elapsedDuration / totalDuration) * 100, 100);
    return progressPercentage.toFixed(2);
  };

  const progressPercentage = calculateProgress(startDate, endDate);

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
          <PercentageText>{progressPercentage}%</PercentageText> {/* 수정된 퍼센트 표시 */}
        </BannerContainer>

        <GaugeWrapper>
          <Gauge $percentage={parseFloat(progressPercentage)} />
        </GaugeWrapper>

        <DealDescription>{deal.summary || 'No Description Available'}</DealDescription>
      </DealItem>
    </DealCardContainer>
  );
};

export default DealCard;
