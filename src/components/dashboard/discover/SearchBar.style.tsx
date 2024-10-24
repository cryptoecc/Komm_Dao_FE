import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  width: 450px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 0 10px;

  @media (max-width: 768px) {
    width: 100%; /* Adjust width for smaller screens */
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  /* align-items: center; */
  padding-left: 10px; /* Add padding to the left of the input text */
`;

export const SearchIcon = styled.img`
  padding-top: 3px;
  width: 30px;
  height: 30px;
  /* align-items: center; */
  cursor: pointer;
`;

export const CalendarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #875cff;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #774bcc;
  }

  img {
    margin-right: 8px; /* Space between the icon and text */
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;

    img {
      width: 18px;
      height: 18px;
    }
  }
`;
