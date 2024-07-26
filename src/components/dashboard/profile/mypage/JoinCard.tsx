import React from 'react';
import { CardWrapper } from './ProfileDetails.style';

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <CardWrapper>
      <h3>{title}</h3>
      <p>{content}</p>
    </CardWrapper>
  );
};

export default Card;
