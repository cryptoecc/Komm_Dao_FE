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
  rating: number;
  percentile: number | string; // percentile이 문자열로 올 수 있음을 처리
}

const CommunityRating: React.FC<CommunityRatingProps> = ({ rating, percentile }) => {
  // percentile 값을 숫자로 변환하고 기본값을 0으로 설정
  const parsedPercentile =
    typeof percentile === 'string'
      ? parseFloat(percentile) // "20.00"을 20으로 변환
      : percentile || 0; // 값이 없으면 0을 사용

  return (
    <CommunityRatingContainer>
      <RatingSection>
        <p>Community Rating</p>
        <RatingValue>{rating ? rating.toFixed(1) : '0'}</RatingValue> {/* rating이 없을 경우 N/A 표시 */}
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
          value={parsedPercentile} // 변환된 percentile 사용
          text={`Top ${parsedPercentile}%`} // percentile 값 출력
          circleRatio={0.5}
          styles={buildStyles({
            rotation: 1 / 4 + 1 / 2,
            pathColor: '#6A5FEB',
            textColor: '#404040',
            trailColor: '#EEEDFD',
            textSize: '12px',
          })}
        />
      </GraphSection>
    </CommunityRatingContainer>
  );
};

export default CommunityRating;
