import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ContributionDetail from 'src/components/dashboard/contribution/contributionDetail/ContributionDetail';

const PageContainer = styled.div`
  padding: 40px 10px;
  /* height: 100%; */
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
  padding-left: 60px;
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
          <span>&larr;</span>Back to Contribution
        </BackLink>
      </BackButton>
      <ContributionDetail />
    </PageContainer>
  );
};

export default DealDtailsPage;
