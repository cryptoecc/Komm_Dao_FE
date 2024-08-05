import React from 'react';
import KohortCardList from './KohortCardList'; // 기존 Kohort 카드 리스트 컴포넌트
import KommitteeCardList from './KommitteeCardList'; // 새로운 Committee 카드 리스트 컴포넌트
import styled from 'styled-components';

// 두 카드 리스트를 나란히 배치할 컨테이너
const Container = styled.div`
  display: flex;
  justify-content: space-between; // 두 리스트 간의 공간을 균등하게 배치
  align-items: flex-start; // 상단 정렬
  gap: 40px; // 카드 리스트 간의 간격
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column; // 모바일 화면에서는 수직으로 나열
    align-items: center; // 가운데 정렬
    gap: 10px; // 모바일 화면에서 카드 리스트 간의 간격 조정
  }
`;

const CardListsContainer: React.FC = () => {
  return (
    <Container>
      <KommitteeCardList />
      <KohortCardList />
    </Container>
  );
};

export default CardListsContainer;
