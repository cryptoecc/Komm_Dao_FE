import ProfileDetails from '../../../../components/dashboard/profile/mypage/ProfileDetails';
import styled from 'styled-components';

const ProfileMyPage: React.FC = () => {
  return (
    <ProfileContainer>
      <ProfileDetails />
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export default ProfileMyPage;
