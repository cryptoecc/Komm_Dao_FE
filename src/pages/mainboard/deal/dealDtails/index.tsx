import styled from 'styled-components';
import DealDetails from 'src/components/dashboard/deal/dealDtails/DealDtails';

const PageContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const DealDtailsPage: React.FC = () => {
  return (
    <PageContainer>
      <Title>Deals</Title>
      <DealDetails />
    </PageContainer>
  );
};

export default DealDtailsPage;
