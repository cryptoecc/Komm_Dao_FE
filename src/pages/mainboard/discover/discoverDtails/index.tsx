import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DiscoverContainer = styled.div`
  padding: 20px;
`;

const DiscoverContent = styled.div``;

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
const DiscoverDetails: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const projectData = location.state; // Access the passed data

  console.log('Received project data:', projectData);
  return (
    <DiscoverContainer>
      <BackButton onClick={() => navigate(-1)}>
        <BackLink>
          <span>&larr;</span>Back to Discover
        </BackLink>
      </BackButton>
      <DiscoverContent>
        <h1>Project Details</h1>
        {projectData ? (
          <div>
            <h2>{projectData.project}</h2>
            <p>Category: {projectData.category}</p>
            <p>Description: {projectData.description}</p>
            <p>Grade: {projectData.grade}</p>
            {/* Display more project details as needed */}
          </div>
        ) : (
          <p>No project data found.</p>
        )}
      </DiscoverContent>
    </DiscoverContainer>
  );
};

export default DiscoverDetails;
