import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  CommunityRatingContainer,
  RatingSection,
  RatingValue,
  StarRating,
  GraphSection,
} from './CommunityRating.style';
import { images } from 'src/assets/discover/images';

interface CommunityRatingProps {
  rating: number; // Now expecting a rating between 0 and 5, e.g., 4.8
  percentile: number; // The percentile value, e.g., 100
}

const CommunityRating: React.FC<CommunityRatingProps> = ({ rating, percentile }) => {
  return (
    <CommunityRatingContainer>
      <RatingSection>
        <p>Community Rating</p>
        <RatingValue>{rating.toFixed(1)}</RatingValue> {/* Display rating with one decimal place */}
        <StarRating>
          {[...Array(5)].map((_, index) => {
            const filled = index + 1 <= Math.floor(rating);
            const halfFilled = index + 1 > Math.floor(rating) && index < rating;
            return (
              <img
                key={index}
                src={filled || halfFilled ? images.checked_star : images.star}
                alt={filled ? 'Filled Star' : 'Empty Star'}
                style={{ opacity: halfFilled ? 0.5 : 1 }}
              />
            );
          })}
        </StarRating>
      </RatingSection>
      <GraphSection>
        <CircularProgressbar
          value={percentile}
          text={`Top ${percentile}%`}
          circleRatio={0.5} // Makes the progress bar a half-circle
          styles={buildStyles({
            rotation: 1 / 4 + 1 / 2, // Rotates the semi-circle so the flat part is at the bottom
            pathColor: '#875cff',
            textColor: '#000',
            trailColor: '#f0e4ff',
            textSize: '14px', // Set text size to 15px
          })}
        />
      </GraphSection>
    </CommunityRatingContainer>
  );
};

export default CommunityRating;
