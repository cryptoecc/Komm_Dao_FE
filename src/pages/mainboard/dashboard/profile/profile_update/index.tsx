import ProfileEdit from '../../../../../components/dashboard/profile/mypage/ProfileUpdate';
import styled from 'styled-components';

const ProfileUpdate: React.FC = () => {
  return (
    <ProfileContainer>
      <ProfileEdit />
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export default ProfileUpdate;
