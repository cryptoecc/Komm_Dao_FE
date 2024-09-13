import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import { images } from '../../../../assets/deal/images';
import defaultDealImg from 'src/assets/deal/MYX.png';
import defaultBannerImg from 'src/assets/deal/MYX_bannerr.png';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import axios from 'axios';
import { API_BASE_URL } from 'src/utils/utils';
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
  const user = useSelector((state: RootState) => state.user);
  const [deal, setDeal] = useState(location.state?.deal || null);

  if (!user || !user.user_id) {
    return <Navigate to="/" replace />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchDealData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/deals/${dealId}`);
        console.log(response.data);
        console.log(user);
        setDeal(response.data);
      } catch (error) {
        console.error('Error fetching deal data:', error);
      }
    };

    fetchDealData();

    const intervalId = setInterval(fetchDealData, 5000);

    return () => clearInterval(intervalId);
  }, [dealId]);

  const fallbackDeal = {
    deal_id: 1,
    deal_name: 'Fallback Deal Title',
    deal_desc:
      'This is a fallback description for the deal. The description can be long, and when it is long enough, a scrollbar will appear.',
    final_amount: 4000000,
    end_date: '2024-12-31',
    create_date: '2024-01-01',
    total_interest: 0, // 기본값 추가
    deal_image_url: 'https://via.placeholder.com/500',
    banner_image_url: 'https://via.placeholder.com/800x300',
  };

  const selectedDeal = deal || fallbackDeal;

  const calculateRemainingTime = (endDate: string) => {
    const now = dayjs();
    const end = dayjs(endDate);
    const duration = dayjs.duration(end.diff(now));

    return {
      days: Math.max(duration.days(), 0),
      hours: Math.max(duration.hours(), 0),
      minutes: Math.max(duration.minutes(), 0),
      seconds: Math.max(duration.seconds(), 0),
    };
  };

  const calculateProgress = (createDate: string, endDate: string) => {
    const now = dayjs();
    const start = dayjs(createDate);
    const end = dayjs(endDate);

    const totalDuration = end.diff(start);
    const elapsedDuration = now.diff(start);

    const progressPercentage = Math.min((elapsedDuration / totalDuration) * 100, 100);

    return progressPercentage.toFixed(2);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime(selectedDeal.end_date));
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [progressPercentage, setProgressPercentage] = useState(
    calculateProgress(selectedDeal.create_date, selectedDeal.end_date)
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime(selectedDeal.end_date));
      setProgressPercentage(calculateProgress(selectedDeal.create_date, selectedDeal.end_date));
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedDeal.end_date, selectedDeal.create_date]);

  return (
    <Container>
      <LeftSection>
        <DealNameRow>
          <LogoImage
            src={selectedDeal.deal_image_url ? `${API_BASE_URL}/${selectedDeal.deal_image_url}` : defaultDealImg}
            alt="Deal Logo"
          />
          <DealNameText>{selectedDeal.deal_name}</DealNameText>
        </DealNameRow>
        <BannerImage
          src={selectedDeal.banner_image_url ? `${API_BASE_URL}/${selectedDeal.banner_image_url}` : defaultBannerImg}
          alt="Banner Image"
        />
        <IconWrapper>
          <Icon src={images.twitter} alt="Twitter" />
          <Icon src={images.discord} alt="Discord" />
          <Icon src={images.language} alt="Language" />
        </IconWrapper>
        <DealSummary>{selectedDeal.deal_desc}</DealSummary>
      </LeftSection>

      <RightSection>
        <ParticipationCard>
          <ProgressText>Progress {progressPercentage}%</ProgressText>
          <ProgressBar>
            <ProgressFill percentage={parseFloat(progressPercentage)} />
          </ProgressBar>
          <DealInfoRow>
            <DealRoundText>{selectedDeal.deal_round || 'Seed Round'}</DealRoundText>
            <DealRaisingText>
              Raising ${selectedDeal.total_interest ? selectedDeal.total_interest.toLocaleString() : '0'}
            </DealRaisingText>
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
