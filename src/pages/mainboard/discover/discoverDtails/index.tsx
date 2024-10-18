import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DiscoverDetail from 'src/components/dashboard/discover/discoverDetails/DiscoverDetail';
import DiscoverParticipantList from 'src/components/dashboard/discover/discoverDetails/DiscoverParticipantList';
import CommunityRating from 'src/components/dashboard/discover/discoverDetails/CommunityRating';
import styled from 'styled-components';
import { images } from 'src/assets/discover/images';
import { API_BASE_URL } from 'src/utils/utils';
import axios from 'axios';

interface Participant {
  id: number;
  user: string;
}

const DiscoverContainer = styled.div`
  padding: 20px;
  max-width: 1920px;
`;

const DiscoverContent = styled.div`
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

const DiscoverDetails: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [participants, setParticipants] = useState<Participant[]>([]); // 참여자 데이터를 위한 상태
  const projectData = location.state;
  console.log(projectData);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        // projectData에서 pjt_id를 추출
        const pjtId = projectData.pjt_id;
        console.log(pjtId);

        if (pjtId) {
          // 백엔드로 pjt_id를 통해 참여자 데이터 요청
          const response = await axios.get(`${API_BASE_URL}/api/user/profile/${pjtId}/participants`);

          // 응답 데이터를 participants로 설정
          setParticipants(
            response.data.map((participant: any, index: number) => ({
              id: index + 1,
              user: participant.user_image_link || images.user, // user_image_link가 있으면 사용, 없으면 기본 이미지 사용
            }))
          );
        }
      } catch (error) {
        console.error('Error fetching participants:', error);
      }
    };

    fetchParticipants();
  }, [projectData]);

  console.log(participants);

  // Ensure rating and percentile have default values if not present
  const rating = projectData?.rating ?? 4.8; // Default to 0 if undefined
  const percentile = projectData?.percentile ?? 50; // Default to 100% if undefined

  return (
    <DiscoverContainer>
      <BackButton onClick={() => navigate(-1)}>
        <BackLink>
          <span>&larr;</span>Back to Discover
        </BackLink>
      </BackButton>
      <DiscoverContent>
        <DiscoverDetail />

        <CommunityRating rating={rating} percentile={percentile} />

        <DiscoverParticipantList participants={participants} />
      </DiscoverContent>
    </DiscoverContainer>
  );
};

export default DiscoverDetails;
