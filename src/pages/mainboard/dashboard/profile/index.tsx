import ProfileDetails from '../../../../components/dashboard/profile/mypage/ProfileDetails';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ProfileMyPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <BackButton onClick={() => navigate(-1)}>
        <BackLink>
          <span>&larr;</span>Back to Dashboard
        </BackLink>
      </BackButton>
      <ProfileContainer>
        <ProfileDetails />
      </ProfileContainer>
    </>
  );
};

const ProfileContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 30px;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #875cff;
  font-weight: 700;
  margin-top: 20px; /* Title 아래에 위치하도록 조정 */
  margin-left: 20px;
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

export default ProfileMyPage;
