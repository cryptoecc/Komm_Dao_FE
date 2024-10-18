import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import ContributionMain from 'src/components/dashboard/contribution/ContributionMain';
import ContributionCard from 'src/components/dashboard/contribution/ContributionCard'; // ContributionCard 임포트
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'src/components/dashboard/contribution/CustomSlider.css'; // 스타일 파일
import { images } from 'src/assets/contribution/images';
import dayjs from 'dayjs'; // 날짜 비교를 위한 dayjs 사용
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import axios from 'axios';
import { API_BASE_URL } from 'src/utils/utils';
import Wallet from 'src/components/walletbtn/WalletComponent';

dayjs.extend(customParseFormat);

const ContributionContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  max-width: 1920px;
`;

const ContributionHeader = styled.div`
  display: flex;
  justify-content: space-between; /* 양 끝으로 배치 */
  align-items: center; /* 수직 중앙 정렬 */
  margin-bottom: 20px;
  margin-right: 60px;
`;

const WalletWrap = styled.div`
  /* margin-right: 60px; */
`;

const ContributionTitle = styled.h1`
  color: #1a0737;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
`;

const ContributionTabs = styled.div`
  display: flex;
  justify-content: flex-start; // 왼쪽 정렬
  align-items: center;
  gap: 20px;
  margin: 30px 0; // 위, 아래에 여백 추가
  width: 100%; // 탭이 컨테이너의 전체 너비를 차지하도록 설정
`;

const TabButton = styled.button<{ $active: boolean }>`
  font-size: 20px;
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
  color: ${({ $active }) => ($active ? '#875cff' : '#ccc')};
  border: none;
  background: none;
  cursor: pointer;
  border-bottom: ${({ $active }) => ($active ? '2px solid #875cff' : 'none')};
  padding: 5px 10px;

  &:hover {
    color: #875cff;
  }
`;

const ContributionContent = styled.div`
  max-width: 1920px;
  min-width: 1080px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Contribution: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'Ongoing' | 'Finished'>('Ongoing');
  const [userData, setUserData] = useState<any>(null);
  const [contributionData, setContributionData] = useState<any[]>([]); // 기여 데이터 상태 추가
  const user = useSelector((state: RootState) => state.user);
  console.log(user);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user && user.wallet_addr) {
        // user와 wallet_addr이 있는지 확인
        try {
          const response = await axios.get(`${API_BASE_URL}/api/user/profile/${user.wallet_addr}`);
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
          setUserData({
            profileImage: 'default-profile.png',
            name: 'Default User',
            expertise: 'Unknown',
            points: 0,
            xp: 0,
            stats: {
              deal: 0,
              discover: 0,
              contribution: 0,
              governance: 0,
            },
          });
        }
      }
    };

    if (!userData) {
      fetchUserData();
    }
  }, [user, userData]); // user 값이 변경될 때마다 useEffect 실행
  useEffect(() => {
    // 백엔드 API를 통해 기여 데이터를 가져옴
    const fetchContributionData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/contribution/get-contribution`);
        setContributionData(response.data); // 가져온 데이터를 상태에 저장
      } catch (error) {
        console.error('Error fetching contribution data:', error);
      }
    };

    fetchContributionData();
  }, []); // 컴포넌트가 마운트될 때 데이터를 가져옴

  if (!user || !userData) {
    return <div>Loading...</div>; // user 또는 userData가 없을 때 로딩 처리
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const currentDate = dayjs();

  // 날짜 파싱 및 카드 필터링
  const ongoingCards = contributionData.filter((slide) => {
    if (!slide.start_date || !slide.end_date) return false; // 유효성 검사
    const endDate = dayjs(slide.end_date); // 종료 날짜 파싱
    return endDate.isAfter(currentDate); // 현재 날짜와 비교하여 Ongoing 필터링
  });

  const finishedCards = contributionData.filter((slide) => {
    if (!slide.start_date || !slide.end_date) return false; // 유효성 검사
    const endDate = dayjs(slide.end_date); // 종료 날짜 파싱
    return endDate.isBefore(currentDate); // 현재 날짜와 비교하여 Finished 필터링
  });

  console.log(contributionData);
  return (
    <ContributionContainer>
      <ContributionHeader>
        <ContributionTitle>Contribution</ContributionTitle>
        <WalletWrap>
          <Wallet
            address={userData.walletAddress}
            username={userData.name}
            profileImage={userData.profileImage}
            expertise={userData.expertise}
          />
        </WalletWrap>
      </ContributionHeader>

      <ContributionContent>
        <Slider {...settings}>
          {contributionData.map((slide) => (
            <ContributionMain
              key={slide.cont_id}
              logoUrl={slide.cont_logo}
              title={slide.pjt_name}
              kohortLabel={slide.cont_category}
              totalAvg={'300'}
              xp={slide.cont_xp}
              startDate={slide.start_date}
              endDate={slide.end_date}
              progress={slide.cur_participant}
              progressText={slide.progressText}
              desc={slide.cont_desc}
              imageUrl={slide.cont_banner}
              id={slide.cont_id}
              maxProgress={slide.max_participant}
              type={slide.cont_type}
            />
          ))}
        </Slider>
        <ContributionTabs>
          <TabButton $active={activeTab === 'Ongoing'} onClick={() => setActiveTab('Ongoing')}>
            Ongoing
          </TabButton>
          <TabButton $active={activeTab === 'Finished'} onClick={() => setActiveTab('Finished')}>
            Finished
          </TabButton>
        </ContributionTabs>
        <CardGrid>
          {activeTab === 'Ongoing'
            ? ongoingCards.map((card) => (
                <ContributionCard
                  key={card.cont_id}
                  id={card.cont_id} // id를 추가하여 넘김
                  title={card.pjt_name}
                  xp={card.cont_xp}
                  imageUrl={card.cont_banner}
                  logoUrl={card.cont_logo}
                  startDate={card.start_date}
                  endDate={card.end_date}
                  progress={card.cur_participant}
                  maxProgress={card.max_participant}
                  type={card.cont_type} // Kohort only 값을 넘김
                  desc={card.cont_desc}
                />
              ))
            : finishedCards.map((card) => (
                <ContributionCard
                  key={card.cont_id}
                  id={card.cont_id} // id를 추가하여 넘김
                  title={card.pjt_name}
                  xp={card.cont_xp}
                  imageUrl={card.cont_banner}
                  logoUrl={card.cont_logo}
                  startDate={card.start_date}
                  endDate={card.end_date}
                  progress={card.cur_participant}
                  maxProgress={card.max_participant}
                  type={card.cont_type} // Kohort only 값을 넘김
                  desc={card.cont_desc}
                />
              ))}
        </CardGrid>
      </ContributionContent>
    </ContributionContainer>
  );
};

export default Contribution;
