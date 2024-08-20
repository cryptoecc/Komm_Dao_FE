import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ShareModal from './ShareModal';
import {
  DiscoverDetailContainer,
  ProjectHeader,
  ProjectNameWrapper,
  ProjectName,
  ShareIcon,
  SocialIcons,
  Description,
  AddWatchlistLink,
} from './DiscoverDetail.style';
import { images } from 'src/assets/discover/images';

const DiscoverDetail = () => {
  const location = useLocation();
  const projectData = location.state;
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <DiscoverDetailContainer>
      <ProjectHeader>
        <ProjectNameWrapper>
          <ProjectName>{projectData.project}</ProjectName>
          <ShareIcon src={images.share} alt="Share" onClick={() => setIsShareModalOpen(true)} />
        </ProjectNameWrapper>
        <AddWatchlistLink href="">+ Add Watchlist</AddWatchlistLink>
      </ProjectHeader>

      <SocialIcons>
        <img src={images.language} alt="Language" />
        <img src={images.twitter} alt="Twitter" />
        <img src={images.discord} alt="Discord" />
      </SocialIcons>
      <Description>{projectData.description}</Description>

      {isShareModalOpen && <ShareModal link={window.location.href} onClose={() => setIsShareModalOpen(false)} />}
    </DiscoverDetailContainer>
  );
};

export default DiscoverDetail;
