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
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import { API_BASE_URL } from 'src/utils/utils';

interface PortfolioData {
  update_date: string;
  participation: string;
  deal_name: string;
  user_value: number;
  deal_status: string;
}

const PortfolioCard: React.FC = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const userId = useSelector((state: RootState) => state.user.user_id); // 전역 상태에서 user_id를 가져옵니다.

  useEffect(() => {
    const fetchPortfolioData = async () => {
      if (userId) {
        try {
          // POST 요청을 통해 user_id를 백엔드로 전송
          const response = await axios.post(`${API_BASE_URL}/api/user/profile/get-user-interest`, { user_id: userId });
          console.log(response.data);
          setPortfolioData(response.data);
        } catch (error) {
          console.error('Error fetching portfolio data:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        console.error('User ID not found in Redux Store');
        setIsLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);
  console.log(portfolioData);
  return (
    <CardContainer>
      <Header>
        <HeaderItem>Date</HeaderItem>
        <HeaderItem>Participation</HeaderItem>
        <HeaderItem className="project">Project</HeaderItem>
        <HeaderItem className="amount">Amount</HeaderItem>
        <HeaderItem>Status</HeaderItem>
      </Header>
      <DataContainer>
        {isLoading ? (
          <NoDataMessage>Loading...</NoDataMessage>
        ) : portfolioData.length === 0 ? (
          <NoDataMessage>You are not currently participating in any projects.</NoDataMessage>
        ) : (
          portfolioData.map((item, index) => (
            <DataRow key={index}>
              <DataItem>{item.update_date}</DataItem>
              <DataItem>{item.participation}</DataItem>
              <DataItem className="dealname">{item.deal_name}</DataItem>
              <DataItem className="uservalue">{item.user_value}</DataItem>
              <DataItem>{item.deal_status}</DataItem>
            </DataRow>
          ))
        )}
      </DataContainer>
    </CardContainer>
  );
};

export default PortfolioCard;
