import styled from 'styled-components';

export const ParticipantListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const LeftSection = styled.div`
  flex: 1;
  padding: 10px;
  max-width: 50%; /* Ensures LeftSection does not exceed 50% of the total width */

  h3 {
    font-size: 18px;
    margin-bottom: 30px;
  }

  div {
    display: grid;
    grid-template-columns: repeat(7, 50px);
    gap: 10px;
    grid-auto-flow: row; /* Ensures items flow into the next row automatically */
    grid-auto-rows: minmax(50px, auto); /* Controls the row height */
    overflow-wrap: break-word; /* Allows breaking long words */
  }
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`;

export const ParticipantItem = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0; /* Ensure no extra margin is added */
  }
`;

export const RatingSection = styled.div`
  p {
    font-size: 20px;
    margin-bottom: 10px;

    span {
      font-weight: bold;
      color: #875cff;
    }
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px; /* Add space between stars and the text/button section */
`;

export const RatingContainer = styled.div`
  display: flex; /* Flexbox를 사용하여 별과 숫자를 가로로 정렬 */
  align-items: center; /* 별과 숫자를 수직 가운데 정렬 */
  margin-bottom: 10px; /* Increase margin to add space between stars and the text below */

  img {
    margin-top: 10px;
    width: 48px;
    height: 48px;
    margin-right: 10px; /* Increase space between each star */
    cursor: pointer;
  }
`;

export const ClaimXPButton = styled.button`
  background-color: #875cff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  margin-left: 20px; /* Add space between text and button */

  &:hover {
    background-color: #7a52e3;
  }
`;
