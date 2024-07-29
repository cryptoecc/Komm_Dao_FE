import React, { useEffect, useState } from 'react';
import Card from './JoinCard';
import { CardContainerWrapper } from '../card/JoinCard.style';

interface CardData {
  title: string;
  content: string;
  additionalText: string;
  isVisible: boolean;
  zIndex: number;
  transform: string;
  bgColor: string;
  boxShadow: string;
}

const fetchCardData = async (): Promise<CardData[]> => {
  return [
    {
      title: 'Card 1',
      content: 'Content 1',
      additionalText: 'Additional 1',
      isVisible: true,
      zIndex: 5,
      transform: 'rotate(0deg)',
      bgColor: '#F9F8FE',
      boxShadow: '0px 4px 20px 0px #DBCDFF',
    },
    {
      title: 'Card 2',
      content: 'Content 2',
      additionalText: 'Additional 2',
      isVisible: true,
      zIndex: 4,
      transform: 'rotate(-5deg)',
      bgColor: '#FFEFEF',
      boxShadow: '0px 4px 20px 0px #DBCDFF',
    },
    {
      title: 'Card 3',
      content: 'Content 3',
      additionalText: 'Additional 3',
      isVisible: true,
      zIndex: 3,
      transform: 'rotate(-10deg)',
      bgColor: '#FFEFD4',
      boxShadow: '0px 4px 20px 0px #DBCDFF',
    },
    {
      title: 'Card 4',
      content: 'Content 4',
      additionalText: 'Additional 4',
      isVisible: true,
      zIndex: 2,
      transform: 'rotate(-15deg)',
      bgColor: '#FCFFD4',
      boxShadow: '0px 4px 20px 0px #DBCDFF',
    },
    {
      title: 'Card 5',
      content: 'Content 5',
      additionalText: 'Additional 5',
      isVisible: true,
      zIndex: 1,
      transform: 'rotate(-20deg)',
      bgColor: '#DFFFDF',
      boxShadow: '0px 4px 20px 0px #DBCDFF',
    },
  ];
};

const KohortCardList: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    const loadCardData = async () => {
      const initialCards = await fetchCardData();
      setCards(initialCards);
    };

    loadCardData();
  }, []);

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
              additionalText={card.additionalText}
              isVisible={card.isVisible}
              onHide={() => handleCardClick(index)}
              zIndex={card.zIndex}
              transform={card.transform}
              bgColor={card.bgColor}
              boxShadow={card.boxShadow}
            />
          )
      )}
    </CardContainerWrapper>
  );
};

export default KohortCardList;
