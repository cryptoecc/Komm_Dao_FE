import styled from 'styled-components';

export const DiscoverDetailContainer = styled.div`
  padding: 10px;
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px; /* Add space below the header */
`;

export const ProjectNameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjectName = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 5px; /* Adjust margin as needed */
  margin-right: 10px; /* Space between project name and share icon */
`;

export const ShareIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-left: 15px;
`;

export const AddWatchlistLink = styled.a`
  font-size: 20px;
  color: #875cff;
  font-weight: 700;
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px; /* Add spacing below the icons */

  img {
    margin-right: 15px;
    width: 35px; /* Adjusted size for consistency */
    height: 35px;
  }

  img:last-child {
    margin-right: 0; /* Remove margin from the last icon */
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.6; /* Adjust line height for better readability */
  margin-top: 0; /* Ensure there's no margin above the description */
  height: 110px; /* Set the basic height */
  overflow-y: auto; /* Add a vertical scrollbar if content exceeds height */
  padding-right: 10px; /* Add padding to avoid overlap with the scrollbar */
`;
