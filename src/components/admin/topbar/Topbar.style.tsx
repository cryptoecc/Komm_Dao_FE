import styled from 'styled-components';

export const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-left: 110px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  width: 350px;
  background: var(--Light-Light, #f8f9fa);
  margin-right: 10px;

  &::placeholder {
    color: var(--Dark-Secondary, #9fa2ab);
    font-weight: 400;
    font-feature-settings: 'clig' off, 'liga' off;
    /* Base/Body */
    font-family: Poppins;
    font-size: 14px;
    line-height: 22px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: flex-end;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const SendMessageButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: var(--Purple-900, #7c4dff);
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-left: 20px;

  img {
    margin-right: 10px;
  }
`;
