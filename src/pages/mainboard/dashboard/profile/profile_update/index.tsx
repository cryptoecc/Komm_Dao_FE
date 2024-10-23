import ProfileEdit from '../../../../../components/dashboard/profile/mypage/ProfileUpdate';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ProfileUpdate: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      {/* <BackButton onClick={() => navigate(-1)}>
        <BackLink>
          <span>&larr;</span>Back to Profile
        </BackLink>
      </BackButton> */}
      <ProfileContainer>
        <ProfileEdit />
      </ProfileContainer>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1920px;

  @media (min-width: 1600px) {
    margin-top: 90px;
    margin-left: 180px;
  }
`;

const ProfileContainer = styled.div`
  /* min-height: 100vh; */
  /* width: 100%; */
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #875cff;
  font-weight: 700;
  margin-top: 20px;
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

export default ProfileUpdate;
