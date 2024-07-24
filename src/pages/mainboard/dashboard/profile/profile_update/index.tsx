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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export default ProfileUpdate;
