import React from 'react';
import { DealCardContainer, ListWrap, DealText, Name, USDT, Date } from './DealCard.style';

const DealCard: React.FC = () => {
  return (
    <>
      <DealText>Deal</DealText>
      <DealCardContainer>
        <ListWrap>
          <Name>Name</Name>
          <USDT>USDT</USDT>
          <Date>Date</Date>
        </ListWrap>
      </DealCardContainer>
    </>
  );
};

export default DealCard;
