import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { images } from '../../../../assets/deal/images';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import axios from 'axios';
import {
  Container,
  LeftSection,
  RightSection,
  LogoImage,
  DealNameRow,
  DealNameText,
  BannerImage,
  IconWrapper,
  Icon,
  DealSummary,
  ParticipationCard,
  ProgressText,
  ProgressBar,
  ProgressFill,
  DealInfoRow,
  DealRoundText,
  DealRaisingText,
  CountdownContainer,
  CountdownText,
  CountdownBox,
  CountdownValue,
  CountdownLabel,
  ParticipateButton,
} from './DealDetails.style';

dayjs.extend(duration);

const DealDetails: React.FC = () => {
  const { dealId } = useParams<{ dealId: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [deal, setDeal] = useState(location.state?.deal || null); // location.state?.deal로 초기화

  useEffect(() => {
    const fetchDealData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/deals/${dealId}`);
        setDeal(response.data); // 최신 데이터를 상태로 업데이트
      } catch (error) {
        console.error('Error fetching deal data:', error);
      }
    };

    fetchDealData(); // 컴포넌트가 마운트될 때 데이터를 요청

    const intervalId = setInterval(fetchDealData, 5000); // 5초마다 데이터 새로 고침

    return () => clearInterval(intervalId); // 컴포넌트가 언마운트될 때 interval을 정리
  }, [dealId]);

  const fallbackDeal = {
    deal_id: 1,
    deal_name: 'Fallback Deal Title',
    deal_desc:
      'This is a fallback description for the deal. The description can be long, and when it is long enough, a scrollbar will appear.',
    final_amount: 4000000,
    percentage: 66,
    start_date: '2024-01-01',
    end_date: '2024-12-31',
    deal_image_url: 'https://via.placeholder.com/500',
    banner_image_url: 'https://via.placeholder.com/800x300', // 예시 배너 이미지 URL 추가
  };

  const selectedDeal = deal || fallbackDeal;

  const calculateRemainingTime = (endDate: string) => {
    const now = dayjs();
    const end = dayjs(endDate);
    const duration = dayjs.duration(end.diff(now));

    return {
      days: duration.days(),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  };

  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime(selectedDeal.end_date));
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime(selectedDeal.end_date));
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, [selectedDeal.end_date]);

  return (
    <Container>
      <LeftSection>
        <DealNameRow>
          <LogoImage src={selectedDeal.deal_image_url} alt="Deal Logo" />
          <DealNameText>{selectedDeal.deal_name}</DealNameText>
        </DealNameRow>
        <BannerImage src={selectedDeal.banner_image_url} alt="Banner Image" />
        <IconWrapper>
          <Icon src={images.twitter} alt="Twitter" />
          <Icon src={images.discord} alt="Discord" />
          <Icon src={images.language} alt="Language" />
        </IconWrapper>
        <DealSummary>{selectedDeal.deal_desc}</DealSummary>
      </LeftSection>

      <RightSection>
        <ParticipationCard>
          <ProgressText>Progress {selectedDeal.percentage}%</ProgressText>
          <ProgressBar>
            <ProgressFill percentage={selectedDeal.percentage} />
          </ProgressBar>
          <DealInfoRow>
            <DealRoundText>{selectedDeal.deal_round || 'Seed Round'}</DealRoundText>
            <DealRaisingText>Raising ${selectedDeal.final_amount.toLocaleString()}</DealRaisingText>
          </DealInfoRow>
          <CountdownText>ENDS IN</CountdownText>

          <CountdownContainer>
            <CountdownBox>
              <CountdownValue>{remainingTime.days}</CountdownValue>
              <CountdownLabel>Day</CountdownLabel>
            </CountdownBox>
            <CountdownBox>
              <CountdownValue>{remainingTime.hours}</CountdownValue>
              <CountdownLabel>Hours</CountdownLabel>
            </CountdownBox>
            <CountdownBox>
              <CountdownValue>{remainingTime.minutes}</CountdownValue>
              <CountdownLabel>Mins</CountdownLabel>
            </CountdownBox>
            <CountdownBox>
              <CountdownValue>{remainingTime.seconds}</CountdownValue>
              <CountdownLabel>Secs</CountdownLabel>
            </CountdownBox>
          </CountdownContainer>
        </ParticipationCard>
        <ParticipateButton
          onClick={() =>
            navigate(`/mainboard/deal/deal-details/${dealId}/interest`, {
              state: { deal: selectedDeal },
            })
          }
        >
          Participate
        </ParticipateButton>
      </RightSection>
    </Container>
  );
};

export default DealDetails;
