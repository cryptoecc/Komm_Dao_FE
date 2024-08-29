import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { images } from '../../../../assets/deal/images';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import axios from 'axios';

dayjs.extend(duration);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-around;
  width: 90%;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5px;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 50%;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    padding: 5px;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    align-items: flex-start;
    padding: 5px;
  }
`;

const DealImage = styled.img`
  max-width: 450px;
  max-height: 200px;
  border-radius: 10px;
  border: 10px white solid;

  @media (max-width: 768px) {
    max-width: 80vh;
    max-height: 50vh;
    margin-bottom: 10px;
  }
`;

// const DealName = styled.h2`
//   font-size: 24px;
//   font-weight: 700;
//   color: #333;
//   margin-bottom: 10px;
// `;

const IconWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    justify-content: center;
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const DealSummary = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: black;
  line-height: 1.6;
  overflow-y: auto;
  max-width: 400px;
  min-height: 200px;
  margin-top: 20px;
  padding-right: 10px;
  word-wrap: break-word; /* 줄바꿈 기능 추가 */

  @media (max-width: 768px) {
    max-height: 200px;
    margin-top: 10px;
  }
`;

const ParticipationCard = styled.div`
  background: #ffffff;
  border: 7px solid #f9f9f9;
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 10px;
  }
`;

const ProgressText = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #000;
  align-self: flex-end;
  margin-bottom: 10px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background: #e0e0e0;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  position: relative;
`;

const ProgressFill = styled.div<{ percentage: number }>`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background: #875cff;
  border-radius: 5px;
  transition: width 0.3s ease;
`;

const DealInfoRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const DealRoundText = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const DealRaisingText = styled.div`
  color: black;
  font-size: 25px;
  font-family: Inter;
  font-weight: 400;
  word-wrap: break-word;
`;

const CountdownContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 20px;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-top: 10px;
  }
`;

const CountdownText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 30px;
  font-size: 20px;
  font-weight: 400;
  color: #a380f9;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const CountdownBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  margin: 0 5px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const CountdownValue = styled.div`
  font-size: 14px;
  font-weight: 600;
  background-color: #f8f8fa;
  color: #000;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CountdownLabel = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: black;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ParticipateButton = styled.button`
  margin-top: 20px;
  background-color: #875cff;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 18px;
  cursor: pointer;
  align-self: flex-end;

  @media (max-width: 768px) {
    align-self: flex-start;
    width: 100%;
    font-size: 16px;
    padding: 10px 20px;
  }

  &:hover {
    background-color: #774bcc;
  }
`;

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
  console.log(selectedDeal);
  return (
    <Container>
      <LeftSection>
        <DealImage src={selectedDeal.deal_image_url} alt="Deal" />
        {/* <DealImage
          src={selectedDeal.dealImage ? `http://localhost:4000/${selectedDeal.dealImage}` : images.deal}
          alt="Deal"
        /> */}
        <IconWrapper>
          <Icon src={images.language} alt="Language" />
          <Icon src={images.discord} alt="Discord" />
          <Icon src={images.twitter} alt="Twitter" />
        </IconWrapper>
        {/* <DealName>{selectedDeal.deal_name}</DealName> */}
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
              state: { deal: selectedDeal }, // 'state' 객체로 'deal' 데이터를 전달
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
