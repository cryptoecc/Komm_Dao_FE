// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import ShareModal from './ShareModal';
// import {
//   DiscoverDetailContainer,
//   ProjectHeader,
//   ProjectNameWrapper,
//   ProjectName,
//   ShareIcon,
//   SocialIcons,
//   Description,
//   AddWatchlistLink,
// } from './DiscoverDetail.style';
// import { images } from 'src/assets/discover/images';

// const DiscoverDetail = () => {
//   const location = useLocation();
//   const projectData = location.state;
//   const [isShareModalOpen, setIsShareModalOpen] = useState(false);

//   return (
//     <DiscoverDetailContainer>
//       <ProjectHeader>
//         <ProjectNameWrapper>
//           <ProjectName>{projectData.pjt_name}</ProjectName>
//           <ShareIcon src={images.share} alt="Share" onClick={() => setIsShareModalOpen(true)} />
//         </ProjectNameWrapper>
//         <AddWatchlistLink href="">+ Add Watchlist</AddWatchlistLink>
//       </ProjectHeader>
//       <SocialIcons>
//         <img src={images.language} alt="Language" />
//         <img src={images.twitter} alt="Twitter" />
//         <img src={images.discord} alt="Discord" />
//       </SocialIcons>
//       <Description>{projectData.pjt_summary}</Description>
//       {isShareModalOpen && <ShareModal link={window.location.href} onClose={() => setIsShareModalOpen(false)} />}
//     </DiscoverDetailContainer>
//   );
// };

// export default DiscoverDetail;
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ShareModal from './ShareModal';
import ConfirmationModal from './ConfirmationModal'; // Import the new ConfirmationModal component
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
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const handleCopyLink = () => {
    // Close ShareModal if it's open
    if (isShareModalOpen) {
      setIsShareModalOpen(false);
    }

    // Simulate link copying (you can replace this with actual copy logic)
    console.log('Link copied to clipboard!');

    // Open ConfirmationModal
    setIsConfirmationModalOpen(true);

    // Automatically close ConfirmationModal after 3 seconds
    setTimeout(() => {
      setIsConfirmationModalOpen(false);
    }, 3000);
  };

  return (
    <DiscoverDetailContainer>
      <ProjectHeader>
        <ProjectNameWrapper>
          <ProjectName>{projectData.pjt_name}</ProjectName>
          <ShareIcon src={images.share} alt="Share" onClick={() => setIsShareModalOpen(true)} />
        </ProjectNameWrapper>
        <AddWatchlistLink href="">+ Add Watchlist</AddWatchlistLink>
      </ProjectHeader>
      <SocialIcons>
        <img src={images.language} alt="Language" />
        <img src={images.twitter} alt="Twitter" />
        <img src={images.discord} alt="Discord" />
      </SocialIcons>
      <Description>{projectData.pjt_summary}</Description>
      {isShareModalOpen && (
        <ShareModal
          link={window.location.href}
          onClose={() => setIsShareModalOpen(false)}
          onCopyLink={handleCopyLink} // Pass the handleCopyLink function to ShareModal
        />
      )}
      {isConfirmationModalOpen && <ConfirmationModal />}
    </DiscoverDetailContainer>
  );
};

export default DiscoverDetail;
