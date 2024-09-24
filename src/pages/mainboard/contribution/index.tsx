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
  margin-right: 60px;
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
  const user = useSelector((state: RootState) => state.user);
  console.log(user);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user && user.wallet_addr) {
        // user와 wallet_addr이 있는지 확인
        try {
          const walletAddress = user.wallet_addr;
          console.log(walletAddress);
          const response = await axios.get(`${API_BASE_URL}/api/user/profile/${walletAddress}`);
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

    fetchUserData();
  }, [user]); // user 값이 변경될 때마다 useEffect 실행

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
  const slidesData = [
    {
      pjt_id: 1,
      projectLogo: `${images.MYX}`,
      projectTitle: 'MYX Finance Research',
      kohortLabel: 'Kohort only',
      totalAvg: '',
      xpValue: '100 XP',
      dates: '24/08/08 ~ 24/09/27',
      progress: '50%',
      progressText: '5 / 10',
      bannerImage: `${images.MYX_banner}`,
    },
    {
      pjt_id: 2,
      projectLogo: `${images.NIBIRU}`,
      projectTitle: 'Nibiru Chain Marketing',
      kohortLabel: 'Kohort only',
      totalAvg: '',
      xpValue: '200 XP',
      dates: '24/08/08 ~ 24/09/27',
      progress: '47%',
      progressText: '14 / 30',
      bannerImage: `${images.NIBIRU_banner2}`,
    },
    {
      pjt_id: 3,
      projectLogo: `${images.Exocore}`,
      projectTitle: 'Exocore Marketing',
      kohortLabel: 'Kohort only',
      totalAvg: '',
      xpValue: '100 XP',
      dates: '24/08/08 ~ 24/09/27',
      progress: '71%',
      progressText: '10 / 14',
      bannerImage: `${images.Exocore_banner}`,
    },
    {
      pjt_id: 4,
      projectLogo: `${images.OG}`,
      projectTitle: 'Og Labs Research',
      kohortLabel: 'Kohort only',
      totalAvg: '',
      xpValue: '200 XP',
      dates: '24/08/08 ~ 24/09/27',
      progress: '100%',
      progressText: '10 / 10',
      bannerImage: `${images.OG_banner}`,
    },
    {
      pjt_id: 5,
      projectLogo: `${images.Airstack}`,
      projectTitle: 'Airstack Validator',
      kohortLabel: 'Kohort only',
      totalAvg: '',
      xpValue: '100 XP',
      dates: '24/08/08 ~ 24/09/09',
      progress: '40%',
      progressText: '6 / 15',
      bannerImage: `${images.Airstack_banner}`,
    },
    {
      pjt_id: 6,
      projectLogo: `${images.Airstack}`,
      projectTitle: 'Airstack Research',
      kohortLabel: '',
      totalAvg: '',
      xpValue: '200 XP',
      dates: '24/08/08 ~ 24/09/27',
      progress: '45%',
      progressText: '18 / 40',
      bannerImage: `${images.Airstack_banner2}`,
    },
  ];

  const currentDate = dayjs();

  // 날짜 파싱 및 카드 필터링
  const ongoingCards = slidesData.filter((slide) => {
    const endDate = dayjs(slide.dates.split(' ~ ')[1], 'YY/MM/DD'); // 종료 날짜 파싱
    return endDate.isAfter(currentDate); // 현재 날짜와 비교
  });

  const finishedCards = slidesData.filter((slide) => {
    const endDate = dayjs(slide.dates.split(' ~ ')[1], 'YY/MM/DD'); // 종료 날짜 파싱
    return endDate.isBefore(currentDate); // 현재 날짜와 비교
  });

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
          {slidesData.map((slide) => (
            <ContributionMain
              key={slide.pjt_id}
              projectLogo={slide.projectLogo}
              projectTitle={slide.projectTitle}
              kohortLabel={slide.kohortLabel}
              totalAvg={slide.totalAvg}
              xpValue={slide.xpValue}
              dates={slide.dates}
              progress={slide.progress}
              progressText={slide.progressText}
              bannerImage={slide.bannerImage}
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
                  key={card.pjt_id}
                  id={card.pjt_id} // id를 추가하여 넘김
                  title={card.projectTitle}
                  xp={parseInt(card.xpValue.split(' ')[0], 10)}
                  imageUrl={card.bannerImage}
                  logoUrl={card.projectLogo}
                  startDate={card.dates.split(' ~ ')[0]}
                  endDate={card.dates.split(' ~ ')[1]}
                  progress={parseInt(card.progressText.split(' / ')[0], 10)}
                  maxProgress={parseInt(card.progressText.split(' / ')[1], 10)}
                  statusText={card.kohortLabel} // Kohort only 값을 넘김
                />
              ))
            : finishedCards.map((card) => (
                <ContributionCard
                  key={card.pjt_id}
                  id={card.pjt_id} // id를 추가하여 넘김
                  title={card.projectTitle}
                  xp={parseInt(card.xpValue.split(' ')[0], 10)}
                  imageUrl={card.bannerImage}
                  logoUrl={card.projectLogo}
                  startDate={card.dates.split(' ~ ')[0]}
                  endDate={card.dates.split(' ~ ')[1]}
                  progress={parseInt(card.progressText.split(' / ')[0], 10)}
                  maxProgress={parseInt(card.progressText.split(' / ')[1], 10)}
                  statusText={card.kohortLabel} // Kohort only 값을 넘김
                />
              ))}
        </CardGrid>
      </ContributionContent>
    </ContributionContainer>
  );
};

export default Contribution;
