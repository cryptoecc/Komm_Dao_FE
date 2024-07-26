import React from 'react';
import { CardContainer, Header, HeaderItem, DataContainer, DataRow, DataItem } from './PortfolioCard.style';

interface PortfolioData {
  date: string;
  participation: string;
  project: string;
  category: string;
  amount: string;
}

const data: PortfolioData[] = [
  { date: '2024-07-01 15:30:45', participation: '100%', project: 'Project A', category: 'Category 1', amount: '$1000' },
  { date: '2024-07-01 15:30:45', participation: '75%', project: 'Project B', category: 'Category 2', amount: '$750' },
  { date: '2024-07-01 15:30:45', participation: '50%', project: 'Project C', category: 'Category 3', amount: '$500' },
  { date: '2024-07-01 15:30:45', participation: '25%', project: 'Project D', category: 'Category 4', amount: '$250' },
  { date: '2024-07-01 15:30:45', participation: '10%', project: 'Project E', category: 'Category 5', amount: '$100' },
  { date: '2024-07-01 15:30:45', participation: '5%', project: 'Project F', category: 'Category 6', amount: '$50' },
  { date: '2024-07-01 15:30:45', participation: '5%', project: 'Project F', category: 'Category 6', amount: '$50' },
  { date: '2024-07-01 15:30:45', participation: '5%', project: 'Project F', category: 'Category 6', amount: '$50' },
  { date: '2024-07-01 15:30:45', participation: '5%', project: 'Project F', category: 'Category 6', amount: '$50' },
];

const PortfolioCard: React.FC = () => {
  return (
    <CardContainer>
      <Header>
        <HeaderItem>Date</HeaderItem>
        <HeaderItem>Participation</HeaderItem>
        <HeaderItem>Project</HeaderItem>
        <HeaderItem>Category</HeaderItem>
        <HeaderItem>Amount</HeaderItem>
      </Header>
      <DataContainer>
        {data.map((item, index) => (
          <DataRow key={index}>
            <DataItem>{item.date}</DataItem>
            <DataItem>{item.participation}</DataItem>
            <DataItem>{item.project}</DataItem>
            <DataItem>{item.category}</DataItem>
            <DataItem>{item.amount}</DataItem>
          </DataRow>
        ))}
      </DataContainer>
    </CardContainer>
  );
};

export default PortfolioCard;
