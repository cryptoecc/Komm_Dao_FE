// import React, { useState } from 'react';
// import {
//   ParticipantListContainer,
//   LeftSection,
//   RightSection,
//   ParticipantItem,
//   RatingSection,
//   RatingContainer,
//   ClaimXPButton,
//   BtnWrap,
// } from './DiscoverParticipantList.style';
// import { images } from 'src/assets/discover/images';
// import ClaimModal from './ClaimModal'; // Import the ClaimModal component

// interface ParticipantListProps {
//   participants: { id: number; user: string }[];
// }

// const DiscoverParticipantList: React.FC<ParticipantListProps> = ({ participants }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
//   const [points, setPoints] = useState(4); // Example points value, adjust as needed
//   const [rating, setRating] = useState<number>(0); // State for selected rating
//   const [hoverRating, setHoverRating] = useState<number>(0); // State for hover rating

//   const handleClaimXPClick = () => {
//     setIsModalOpen(true); // Open the modal when the button is clicked
//   };

//   const closeModal = () => {
//     setIsModalOpen(false); // Close the modal
//   };

//   // Function to handle star click (finalize rating)
//   const handleStarClick = (index: number) => {
//     setRating(index + 1); // Set the rating based on clicked star (index starts from 0)
//   };

//   // Function to handle star hover (preview rating)
//   const handleStarHover = (index: number) => {
//     setHoverRating(index + 1); // Set hover rating temporarily
//   };

//   // Function to reset hover rating when mouse leaves
//   const handleStarLeave = () => {
//     setHoverRating(0); // Reset hover rating
//   };

//   const displayRating = hoverRating || rating; // Show hover rating if available, otherwise show selected rating

//   return (
//     <ParticipantListContainer>
//       <LeftSection>
//         <h3>Participant List</h3>
//         <div>
//           {participants.map((participant) => (
//             <ParticipantItem key={participant.id}>
//               <img src={participant.user} alt={`Participant ${participant.id}`} />
//             </ParticipantItem>
//           ))}
//         </div>
//       </LeftSection>
//       <RightSection>
//         <RatingSection>
//           <p>Please rate using one of the 5 scores</p>
//           <RatingContainer>
//             {Array(5)
//               .fill(0)
//               .map((_, index) => (
//                 <img
//                   src={(hoverRating ? index < hoverRating : index < rating) ? images.checked_star : images.star2} // Show filled star if index is less than hoverRating or rating
//                   alt="Rating Star"
//                   key={index}
//                   onClick={() => handleStarClick(index)} // Finalize rating when clicked
//                   onMouseEnter={() => handleStarHover(index)} // Set temporary rating on hover
//                   onMouseLeave={handleStarLeave} // Reset hover rating when mouse leaves
//                   style={{ cursor: 'pointer' }} // Cursor changes to pointer when hovering over stars
//                 />
//               ))}
//             <div
//               style={{
//                 marginLeft: '20px',
//                 marginTop: '15px',
//                 fontWeight: 'bold',
//                 fontSize: '30px',
//                 color: '#210d5c',
//                 display: 'flex',
//                 alignItems: 'center',
//               }}
//             >
//               {displayRating}
//             </div>
//           </RatingContainer>
//           <BtnWrap>
//             <p>
//               Each rating earns you <span>10 XP!</span>
//             </p>
//             <ClaimXPButton onClick={handleClaimXPClick}>Claim XP</ClaimXPButton>
//           </BtnWrap>
//         </RatingSection>
//       </RightSection>
//       <ClaimModal isOpen={isModalOpen} onClose={closeModal} points={points} />
//     </ParticipantListContainer>
//   );
// };

// export default DiscoverParticipantList;
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
import checkedStar from 'src/assets/discover/checkedStar.svg';

interface ParticipantListProps {
  participants: { id: number; user: string }[];
}

const DiscoverParticipantList: React.FC<ParticipantListProps> = ({ participants }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [points, setPoints] = useState<number>(4); // Points for ClaimModal
  const [rating, setRating] = useState<number>(0); // State for selected rating
  const [hoverRating, setHoverRating] = useState<number>(0); // State for hover rating

  // Function to handle Claim XP button click
  const handleClaimXPClick = () => {
    setPoints(rating); // Set the selected rating as points
    setIsModalOpen(true); // Open the modal when the button is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  // Function to handle star click (finalize rating)
  const handleStarClick = (index: number) => {
    setRating(index + 1); // Set the rating based on clicked star (index starts from 0)
  };

  // Function to handle star hover (preview rating)
  const handleStarHover = (index: number) => {
    setHoverRating(index + 1); // Set hover rating temporarily
  };

  // Function to reset hover rating when mouse leaves
  const handleStarLeave = () => {
    setHoverRating(0); // Reset hover rating
  };

  const displayRating = hoverRating || rating; // Show hover rating if available, otherwise show selected rating

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
                <img
                  src={(hoverRating ? index < hoverRating : index < rating) ? checkedStar : images.star2} // Show filled star if index is less than hoverRating or rating
                  alt="Rating Star"
                  key={index}
                  onClick={() => handleStarClick(index)} // Finalize rating when clicked
                  onMouseEnter={() => handleStarHover(index)} // Set temporary rating on hover
                  onMouseLeave={handleStarLeave} // Reset hover rating when mouse leaves
                  style={{ cursor: 'pointer' }} // Cursor changes to pointer when hovering over stars
                />
              ))}
            <div
              style={{
                marginLeft: '20px',
                marginTop: '15px',
                fontWeight: 'bold',
                fontSize: '30px',
                color: '#210d5c',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {displayRating}
            </div>
          </RatingContainer>
          <BtnWrap>
            <p>
              Each rating earns you <span>10 XP!</span>
            </p>
            <ClaimXPButton onClick={handleClaimXPClick}>Claim XP</ClaimXPButton>
          </BtnWrap>
        </RatingSection>
      </RightSection>
      <ClaimModal isOpen={isModalOpen} onClose={closeModal} points={points} />
    </ParticipantListContainer>
  );
};

export default DiscoverParticipantList;
