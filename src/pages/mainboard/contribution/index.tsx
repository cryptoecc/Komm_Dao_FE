import React from 'react';
import ContributionMain from 'src/components/dashboard/contribution/ContributionMain';
import styled from 'styled-components';

const ContributionContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContributionTitle = styled.h1`
  color: #1a0737;
  font-size: 40px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  word-wrap: break-word;
  padding: 20px;
`;

const ContributionContent = styled.div`
  padding: 20px;
`;

const Contribution: React.FC = () => {
  return (
    <>
      <ContributionTitle>Contribution</ContributionTitle>

      <ContributionContainer>
        <ContributionContent>
          <ContributionMain />
        </ContributionContent>
      </ContributionContainer>
    </>
  );
};

export default Contribution;
