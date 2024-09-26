import styled from 'styled-components';

export const CommunityRatingContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: center;
  background-color: #f9f8fe;
  padding: 20px;
  border-radius: 30px;
  min-height: 220px;
`;

export const RatingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-right: 20px;

  p {
    margin: 0;
    font-size: 22px;
    font-weight: 500;
    color: #000;
  }
`;

export const RatingValue = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #000;
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
