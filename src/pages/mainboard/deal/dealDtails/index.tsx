import styled from 'styled-components';
import DealDetails from 'src/components/dashboard/deal/dealDtails/DealDtails';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  padding: 20px;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #875cff;
  font-weight: 700;
  margin-bottom: 20px; /* Title 아래에 위치하도록 조정 */
`;

const BackLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #875cff;
  font-weight: 700;

  span {
    margin-right: 10px; /* 아이콘과 텍스트 사이의 간격 */
  }
`;

const DealDtailsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <BackButton onClick={() => navigate(-1)}>
        <BackLink>
          <span>&larr;</span>Back to Deal
        </BackLink>
      </BackButton>
      <DealDetails />
    </PageContainer>
  );
};

export default DealDtailsPage;
