import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  CardContainer,
  Header,
  HeaderItem,
  DataContainer,
  DataRow,
  DataItem,
  NoDataMessage,
} from './PointsHistory.style';
import { API_BASE_URL } from 'src/utils/utils';
interface PointsData {
  date: string;
  participation: string;
  activity: string;
  xpEarned: string;
  transactionId: string;
}

const PointsHistory: React.FC = () => {
  const [pointsData, setPointsData] = useState<PointsData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPointsData = async () => {
      const persistedRoot = localStorage.getItem('persist:root');
      if (persistedRoot) {
        try {
          const parsedData = JSON.parse(persistedRoot);
          const walletAddress = JSON.parse(parsedData.wallet_addr);

          const response = await axios.get<PointsData[]>(`${API_BASE_URL}/api/points-history/${walletAddress}`);
          setPointsData(response.data);
        } catch (error) {
          console.error('Error fetching points history:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        console.error('persist:root not found in localStorage');
        setIsLoading(false);
      }
    };

    fetchPointsData();
  }, []);

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
        {isLoading ? (
          <NoDataMessage>Loading...</NoDataMessage>
        ) : pointsData.length === 0 ? (
          <NoDataMessage />
        ) : (
          pointsData.map((item, index) => (
            <DataRow key={index}>
              <DataItem>{item.date}</DataItem>
              <DataItem>{item.participation}</DataItem>
              <DataItem>{item.activity}</DataItem>
              <DataItem>{item.xpEarned}</DataItem>
              <DataItem>{item.transactionId}</DataItem>
            </DataRow>
          ))
        )}
      </DataContainer>
    </CardContainer>
  );
};

export default PointsHistory;
