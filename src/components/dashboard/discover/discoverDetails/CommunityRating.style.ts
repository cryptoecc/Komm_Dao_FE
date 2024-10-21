import styled from 'styled-components';

export const CommunityRatingContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: center;
  border: 7px solid #eeedfd;
  background: #fbfbff;

  padding: 20px;
  border-radius: 20px;
  min-height: 250px;
`;

export const RatingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-right: 20px;

  p {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    color: #404040;
  }
`;

export const RatingValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #404040;
  margin: 10px 0;
`;

export const StarRating = styled.div`
  display: flex;
  img {
    width: 35px;
    height: 35px;
    margin-right: 5px;
  }
`;

export const GraphSection = styled.div`
  margin-left: 20px;
  width: 200px;
  height: 100px;
`;
