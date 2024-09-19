import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DiscoverDetail from 'src/components/dashboard/discover/discoverDetails/DiscoverDetail';
import DiscoverParticipantList from 'src/components/dashboard/discover/discoverDetails/DiscoverParticipantList';
import CommunityRating from 'src/components/dashboard/discover/discoverDetails/CommunityRating';
import styled from 'styled-components';
import { images } from 'src/assets/discover/images';

interface Participant {
  id: number;
  user: string;
}

const DiscoverContainer = styled.div`
  padding: 20px;
  max-width: 1440px;
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
  const projectData = location.state;

  const participants: Participant[] = projectData?.participants?.map((participant: Participant, index: number) => ({
    id: participant.id ?? index + 1,
    user: participant.user || images.user, // Use images.user as the default image
  })) || [
    { id: 1, user: images.profile },
    { id: 2, user: images.profile },
    { id: 3, user: images.profile },
    { id: 4, user: images.profile },
    { id: 5, user: images.profile },
    { id: 6, user: images.profile },
    { id: 7, user: images.profile },
    { id: 8, user: images.profile },
    { id: 9, user: images.profile },
    { id: 10, user: images.profile },
    { id: 11, user: images.profile },
    { id: 12, user: images.profile },
    { id: 13, user: images.profile },
    // Add more participants as needed
  ];

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
