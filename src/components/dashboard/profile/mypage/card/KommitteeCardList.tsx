import React, { useState } from 'react';
import Card from './JoinCard';
import { CardContainerWrapper } from '../card/JoinCard.style';

const KommitteeCardList: React.FC = () => {
  const [cards, setCards] = useState([
    {
      title: 'Committee Member 1',
      content: 'Role or Description 1',
      isVisible: true,
      zIndex: 5,
      transform: 'rotate(0deg)',
      bgColor: '#E0F7FA',
      boxShadow: '0px 4px 20px 0px #B2DFDB',
    },
    {
      title: 'Committee Member 2',
      content: 'Role or Description 2',
      isVisible: true,
      zIndex: 4,
      transform: 'rotate(-5deg)',
      bgColor: '#E0F7FA',
      boxShadow: '0px 4px 20px 0px #B2DFDB',
    },
    {
      title: 'Committee Member 3',
      content: 'Role or Description 3',
      isVisible: true,
      zIndex: 3,
      transform: 'rotate(-10deg)',
      bgColor: '#E0F7FA',
      boxShadow: '0px 4px 20px 0px #B2DFDB',
    },
    {
      title: 'Committee Member 4',
      content: 'Role or Description 4',
      isVisible: true,
      zIndex: 2,
      transform: 'rotate(-15deg)',
      bgColor: '#E0F7FA',
      boxShadow: '0px 4px 20px 0px #B2DFDB',
    },
    {
      title: 'Committee Member 5',
      content: 'Role or Description 5',
      isVisible: true,
      zIndex: 1,
      transform: 'rotate(-20deg)',
      bgColor: '#E0F7FA',
      boxShadow: '0px 4px 20px 0px #B2DFDB',
    },
  ]);

  const handleCardClick = (index: number) => {
    const updatedCards = cards.map((card, i) => (i === index ? { ...card, isVisible: false } : card));

    if (updatedCards.every((card) => !card.isVisible)) {
      setCards(
        updatedCards.map((card, i) => ({
          ...card,
          isVisible: true,
          zIndex: 5 - i,
          transform: i === 0 ? 'rotate(0deg)' : `rotate(${i * -5}deg)`,
        }))
      );
    } else {
      const visibleCards = updatedCards.filter((card) => card.isVisible);
      const newCards = visibleCards.map((card, i) => ({
        ...card,
        transform: `rotate(${i * -5}deg)`,
      }));

      setCards(updatedCards.map((card) => (card.isVisible ? newCards.shift()! : card)));
    }
  };

  return (
    <CardContainerWrapper>
      {cards.map(
        (card, index) =>
          card.isVisible && (
            <Card
              key={index}
              title={card.title}
              content={card.content}
              isVisible={card.isVisible}
              onHide={() => handleCardClick(index)}
              zIndex={card.zIndex}
              transform={card.transform}
              bgColor={card.bgColor}
              boxShadow={card.boxShadow}
              additionalText={''}
            />
          )
      )}
    </CardContainerWrapper>
  );
};

export default KommitteeCardList;
