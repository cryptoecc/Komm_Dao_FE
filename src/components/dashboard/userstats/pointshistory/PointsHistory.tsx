import React from 'react';
import { CardContainer, Header, HeaderItem, DataContainer, DataRow, DataItem } from './PointsHistory.style';

interface PointsData {
  date: string;
  participation: string;
  activity: string;
  xpEarned: string;
  transactionId: string;
}

const data: PointsData[] = [
  { date: '2024-07-01', participation: '100%', activity: 'Activity A', xpEarned: '1000 XP', transactionId: 'TX12345' },
  { date: '2024-07-02', participation: '75%', activity: 'Activity B', xpEarned: '750 XP', transactionId: 'TX12346' },
  { date: '2024-07-03', participation: '50%', activity: 'Activity C', xpEarned: '500 XP', transactionId: 'TX12347' },
  { date: '2024-07-04', participation: '25%', activity: 'Activity D', xpEarned: '250 XP', transactionId: 'TX12348' },
  { date: '2024-07-05', participation: '10%', activity: 'Activity E', xpEarned: '100 XP', transactionId: 'TX12349' },
  { date: '2024-07-06', participation: '5%', activity: 'Activity F', xpEarned: '50 XP', transactionId: 'TX12350' },
];

const PointsHistory: React.FC = () => {
  return (
    <CardContainer>
      <Header>
        <HeaderItem>Date</HeaderItem>
        <HeaderItem>Participation</HeaderItem>
        <HeaderItem>Activity</HeaderItem>
        <HeaderItem>XP Earned</HeaderItem>
        <HeaderItem>Transaction ID</HeaderItem>
      </Header>
      <DataContainer>
        {data.map((item, index) => (
          <DataRow key={index}>
            <DataItem>{item.date}</DataItem>
            <DataItem>{item.participation}</DataItem>
            <DataItem>{item.activity}</DataItem>
            <DataItem>{item.xpEarned}</DataItem>
            <DataItem>{item.transactionId}</DataItem>
          </DataRow>
        ))}
      </DataContainer>
    </CardContainer>
  );
};

export default PointsHistory;
