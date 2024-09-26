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
} from './PortfolioCard.style';
import { API_BASE_URL } from 'src/utils/utils';

interface PortfolioData {
  date: string;
  participation: string;
  project: string;
  category: string;
  amount: string;
}

const PortfolioCard: React.FC = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      const persistedRoot = localStorage.getItem('persist:root');
      if (persistedRoot) {
        try {
          const parsedData = JSON.parse(persistedRoot);
          const walletAddress = JSON.parse(parsedData.wallet_addr);

          const response = await axios.get<PortfolioData[]>(`${API_BASE_URL}/api/portfolio/${walletAddress}`);
          setPortfolioData(response.data);
        } catch (error) {
          console.error('Error fetching portfolio data:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        console.error('persist:root not found in localStorage');
        setIsLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

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
        {isLoading ? (
          <NoDataMessage>Loading...</NoDataMessage>
        ) : portfolioData.length === 0 ? (
          <NoDataMessage />
        ) : (
          portfolioData.map((item, index) => (
            <DataRow key={index}>
              <DataItem>{item.date}</DataItem>
              <DataItem>{item.participation}</DataItem>
              <DataItem>{item.project}</DataItem>
              <DataItem>{item.category}</DataItem>
              <DataItem>{item.amount}</DataItem>
            </DataRow>
          ))
        )}
      </DataContainer>
    </CardContainer>
  );
};

export default PortfolioCard;
