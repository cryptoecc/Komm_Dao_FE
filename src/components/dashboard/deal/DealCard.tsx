import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs'; // 날짜 비교를 위해 dayjs 라이브러리 사용
import dealIcon from '../../../assets/deal/Deal.png';

const DealItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #ffffff;
  border: 7px solid #f9f9f9;
  border-radius: 30px;
  padding: 20px;
  /* width: 100%; */
  width: 512px;
  position: relative;

  &:hover {
    border-image: linear-gradient(
        to right bottom,
        #ffdede 0%,
        #6100ff 53.5%,
        #00d7f7 58.61%,
        #4dff30 64.5%,
        #ffe03e 75.5%,
        #ff8730 85.5%,
        #ff0000 100%
      )
      1;
  }
`;

const DealHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  justify-content: space-between; /* 아이콘과 상태 배지 사이의 간격 확보 */
`;

const DealTitle = styled.h3`
  padding: 5px;
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0;
`;

const DealDescription = styled.p`
  font-size: 16px;
  height: 100px;
  color: #555;
  margin: 10px 0;
  max-height: 100px; /* 최대 높이를 100px로 설정 */
  overflow-y: auto; /* 내용이 넘칠 경우 스크롤바를 표시 */
  white-space: pre-wrap; /* 텍스트 줄바꿈을 허용 */
  word-wrap: break-word; /* 길이가 긴 단어를 자동으로 줄바꿈 */
  padding: 5px;
`;

// const DealAmount = styled.div`
//   font-size: 20px;
//   font-weight: 700;
//   margin: 10px 0;
// `;

const GaugeWrapper = styled.div`
  width: 100%;
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 0;
  position: relative;
  display: flex;
  justify-content: flex-end;
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
  margin-right: 10px;
`;

const StatusBadge = styled.div<{ status: 'ongoing' | 'finished' }>`
  background-color: ${(props) => (props.status === 'ongoing' ? '#875cff' : '#cccccc')};
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
`;

const PercentageText = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #000;
  margin-top: 5px;
  margin-left: auto;
`;

interface Deal {
  id: number;
  title: string;
  description: string;
  amount: number;
  percentage: number;
  start_date: string;
  end_date: string;
  deal_image_url: string;
}

const DealCard: React.FC<{ deal: Deal }> = ({ deal }) => {
  const currentDate = dayjs();
  const startDate = dayjs(deal.start_date);
  const endDate = dayjs(deal.end_date);

  const status = currentDate.isBefore(endDate) ? 'ongoing' : 'finished';

  return (
    <DealItem>
      <DealHeader>
        <IconWrapper>
          <img src={deal.deal_image_url || dealIcon} alt="Deal Icon" />
        </IconWrapper>
        <StatusBadge status={status}>{status === 'ongoing' ? 'Ongoing' : 'Finished'}</StatusBadge>
      </DealHeader>
      <PercentageText>{deal.percentage}%</PercentageText>
      <GaugeWrapper>
        <Gauge percentage={deal.percentage} />
        <PercentageLabel>{deal.percentage}%</PercentageLabel>
      </GaugeWrapper>
      <DealTitle>{deal.title}</DealTitle>
      <DealDescription>{deal.description}</DealDescription>
      {/* <DealAmount>${deal.amount}</DealAmount> */}
    </DealItem>
  );
};

export default DealCard;
