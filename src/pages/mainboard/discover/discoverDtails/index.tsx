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
  margin-bottom: 20px;
`;

const BackLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #875cff;
  font-weight: 700;

  span {
    margin-right: 10px;
  }
`;

const DiscoverDetails: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const projectData = location.state;
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [rating, setRating] = useState<number>(0);
  const [percentile, setPercentile] = useState<number>(0);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const pjtId = projectData.pjt_id;
        const response = await axios.get(`${API_BASE_URL}/api/project/${pjtId}/details`);
        const projectDetails = response.data;

        // rating 값을 설정
        setRating(projectDetails.project.avg_rating || 0);

        // 백엔드에서 받은 percentile 값을 처리
        const parsedPercentile = projectDetails.project.percentile
          ? parseFloat(projectDetails.project.percentile) // "20.00"을 20으로 변환
          : 0; // 값이 없을 경우 기본값 0 설정

        setPercentile(parsedPercentile);

        // 참가자 목록 설정
        setParticipants(
          projectDetails.participants.map((participant: any, index: number) => ({
            id: index + 1,
            user: participant.user_image_link || images.user,
          }))
        );
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    fetchProjectData();
  }, [projectData]);

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
