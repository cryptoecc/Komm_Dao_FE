import styled from 'styled-components';
import DealDetails from 'src/components/dashboard/deal/dealDtails/DealDtails';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #875cff;
  font-weight: 700;
  margin-bottom: 20px; /* Title 아래에 위치하도록 조정 */
`;

const DealDtailsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Title>Deals</Title>
      <BackButton onClick={() => navigate(-1)}>
        <span>&larr;</span> Back to Deal
      </BackButton>
      <DealDetails />
    </PageContainer>
  );
};

export default DealDtailsPage;
