import React, { useState } from 'react';
import {
  ParticipantListContainer,
  LeftSection,
  RightSection,
  ParticipantItem,
  RatingSection,
  RatingContainer,
  ClaimXPButton,
  BtnWrap,
} from './DiscoverParticipantList.style';
import { images } from 'src/assets/discover/images';
import ClaimModal from './ClaimModal'; // Import the ClaimModal component

interface ParticipantListProps {
  participants: { id: number; user: string }[]; // Use `user` instead of `avatar`
}

const DiscoverParticipantList: React.FC<ParticipantListProps> = ({ participants }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [points, setPoints] = useState(4); // Example points value, adjust as needed

  const handleClaimXPClick = () => {
    setIsModalOpen(true); // Open the modal when the button is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <ParticipantListContainer>
      <LeftSection>
        <h3>Participant List</h3>
        <div>
          {participants.map((participant) => (
            <ParticipantItem key={participant.id}>
              <img src={participant.user} alt={`Participant ${participant.id}`} />
            </ParticipantItem>
          ))}
        </div>
      </LeftSection>
      <RightSection>
        <RatingSection>
          <p>Please rate using one of the 5 scores</p>
          <RatingContainer>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <img src={images.star2} alt="Rating Star" key={index} />
              ))}
          </RatingContainer>
          <BtnWrap>
            <p>
              Each rating earns you <span>10 XP!</span>
            </p>
            <ClaimXPButton onClick={handleClaimXPClick}>Claim XP</ClaimXPButton>
          </BtnWrap>
        </RatingSection>
      </RightSection>
      <ClaimModal isOpen={isModalOpen} onClose={closeModal} points={points} /> {/* Include the ClaimModal component */}
    </ParticipantListContainer>
  );
};

export default DiscoverParticipantList;
