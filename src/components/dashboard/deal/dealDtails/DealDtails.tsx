import React from 'react';
import styled from 'styled-components';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  gap: 40px;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #875cff;
  font-weight: 700;
  margin-bottom: 20px;
`;

const DealImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const DealSummary = styled.div`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  overflow-y: auto;
  max-height: 200px; /* Adjust this height as needed */
  padding-right: 10px; /* To prevent text from being hidden under scrollbar */
`;

const ParticipationCard = styled.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  padding: 20px;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgressText = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #000;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background: #e0e0e0;
  border-radius: 5px;
  margin-top: 10px;
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
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
`;

const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const CountdownItem = styled.div`
  text-align: center;
  margin: 0 10px;
  font-size: 20px;
  font-weight: 700;
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

  &:hover {
    background-color: #774bcc;
  }
`;

const DealDetails: React.FC = () => {
  const { dealId } = useParams<{ dealId: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const deal = location.state?.deal;

  // Fallback data if the deal is not passed via state
  const fallbackDeal = {
    id: 1,
    title: 'Fallback Deal Title',
    description:
      'This is a fallback description for the deal. The description can be long, and when it is long enough, a scrollbar will appear.',
    amount: 4000000,
    percentage: 66,
    start_date: '2024-01-01',
    end_date: '2024-12-31',
    deal_image_url: 'https://via.placeholder.com/500',
  };

  const selectedDeal = deal || fallbackDeal;

  // Simulate countdown time
  const remainingTime = '14 Hours 0 Mins 20 Secs';

  return (
    <Container>
      <LeftSection>
        <BackButton onClick={() => navigate(-1)}>
          <span>&larr;</span> Back to Deal
        </BackButton>
        <DealImage src={selectedDeal.deal_image_url} alt="Deal" />
        <DealSummary>{selectedDeal.description}</DealSummary>
      </LeftSection>

      <RightSection>
        <ParticipationCard>
          <ProgressText>Progress {selectedDeal.percentage}%</ProgressText>
          <ProgressBar>
            <ProgressFill percentage={selectedDeal.percentage} />
          </ProgressBar>
          <DealInfoRow>
            <span>Seed Round</span>
            <span>Raising $4m at $50m</span>
          </DealInfoRow>
          <CountdownContainer>
            <CountdownItem>
              <div>ENDS IN</div>
              <div>{remainingTime}</div>
            </CountdownItem>
          </CountdownContainer>
          <ParticipateButton>Participate</ParticipateButton>
        </ParticipationCard>
      </RightSection>
    </Container>
  );
};

export default DealDetails;
