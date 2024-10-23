import ProfileDetails from '../../../../components/dashboard/profile/mypage/ProfileDetails';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ProfileMyPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      {/* <BackButton onClick={() => navigate(-1)}>
        <BackLink>
          <span>&larr;</span>Back to Dashboard
        </BackLink>
      </BackButton> */}
      <ProfileContainer>
        <ProfileDetails />
      </ProfileContainer>
    </Container>
  );
};

const Container = styled.div`
  /* background-color: #f9f8fe; */
  /* max-height: 23%; */
  padding: 20px; /* 여백 추가 (선택 사항) */

  @media (min-width: 1600px) {
    margin-top: 60px;
    /* margin-bottom: 70px; */
  }
`;

const ProfileContainer = styled.div`
  height: 100%;
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
  color: #875cff; /* 텍스트 색상 설정 */
  font-weight: 700;
  /* background-color: #f9f8fe; */
`;

const BackLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #875cff; /* 텍스트 색상 설정 */
  font-weight: 700;

  span {
    margin-right: 10px; /* 아이콘과 텍스트 사이의 간격 */
  }
`;

export default ProfileMyPage;
