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
import { API_BASE_URL } from 'src/utils/utils'; // API base URL 임포트
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

interface PointsData {
  date: string;
  participation: string;
  activity: string;
  xpEarned: number;
  transactionId: string;
}

const PointsHistory: React.FC = () => {
  const [pointsData, setPointsData] = useState<PointsData[]>([]); // pointsData 상태
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // 에러 메시지 상태
  const walletAddress = useSelector((state: RootState) => state.user.wallet_addr); // Redux에서 walletAddress 가져오기

  useEffect(() => {
    // 포인트 히스토리를 백엔드에서 직접 가져오는 함수
    const fetchPointHistory = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/user/profile/get-history/${walletAddress}`);

        if (response.data && Array.isArray(response.data)) {
          // 백엔드에서 받은 데이터를 적절하게 변환
          const formattedData = response.data.map((item: any) => ({
            date: item.date,
            participation: item.participation,
            activity: item.activity,
            xpEarned: item.xp_earned, // 백엔드 필드명과 맞춰 변환
            transactionId: item.transaction_id, // Sepolia에서 트랜잭션 조회 링크를 위해 원본 그대로 사용
          }));
          setPointsData(formattedData); // 변환된 데이터 설정
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        console.error('Error fetching points history:', error);
        setErrorMessage('Failed to fetch point history. Please try again later.');
      } finally {
        setIsLoading(false); // 로딩 종료
      }
    };

    if (walletAddress) {
      fetchPointHistory(); // 지갑 주소가 있을 때만 호출
    }
  }, [walletAddress]);

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
        ) : errorMessage ? (
          <NoDataMessage>{errorMessage}</NoDataMessage>
        ) : pointsData.length === 0 ? (
          <NoDataMessage>You have not yet earned any XP. Participate in activities to start earning!</NoDataMessage>
        ) : (
          pointsData.map((item, index) => (
            <DataRow key={index}>
              <DataItem>{new Date(item.date).toLocaleString()}</DataItem>
              <DataItem>{item.participation}</DataItem>
              <DataItem>{item.activity}</DataItem>
              <DataItem>{item.xpEarned}</DataItem>
              <DataItem>
                <a
                  href={`https://sepolia.etherscan.io/tx/${item.transactionId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'blue', textDecoration: 'underline' }}
                >
                  {item.transactionId.slice(0, 6)}...{item.transactionId.slice(-6)}
                </a>
              </DataItem>{' '}
              {/* 트랜잭션 ID를 Sepolia Etherscan 링크로 변환 */}
            </DataRow>
          ))
        )}
      </DataContainer>
    </CardContainer>
  );
};

export default PointsHistory;
