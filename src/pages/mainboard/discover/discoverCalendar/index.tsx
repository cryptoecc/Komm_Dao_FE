import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomCalendar from 'src/components/dashboard/discover/discoverCalendar/Calendar';
import styled from 'styled-components';
import RedirectModal from 'src/components/admin/modal/common/RedirectModal';
import CalenderModal from 'src/components/admin/modal/redirectMotal/Calender';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow: visible;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #875cff;
  font-weight: 700;
  margin-top: 20px;
  margin-left: 20px;
`;

const BackLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #875cff;
  font-weight: 700;

  span {
    margin-right: 10px;
  }
`;
const DiscoverCalendar: React.FC = () => {
  const events = [
    {
      date: '2024-09-03',
      company: 'Og Labs',
      description: 'Og Labs announced new airdrop events! Please find the details.....',
      color: '#7c4dff',
      keyword: 'Airdrop',
    },
    {
      date: '2024-09-05',
      company: 'MYX',
      description: 'MYX Labs is launching a new product. Don’t miss out!',
      color: '#ff6f61',
      keyword: 'Launch',
    },
    {
      date: '2024-09-07',
      company: 'Crypto Corp',
      description: 'Crypto Corp has reached a new partnership agreement.',
      color: '#4caf50',
      keyword: 'Partnership',
    },
    {
      date: '2024-09-10',
      company: 'Tech Innovations',
      description: 'Tech Innovations is hosting a virtual conference on blockchain technology.',
      color: '#2196f3',
      keyword: 'Conference',
    },
    {
      date: '2024-09-12',
      company: 'DeFi Solutions',
      description: 'DeFi Solutions has released their Q2 earnings report.',
      color: '#fbc02d',
      keyword: 'Earnings',
    },
    {
      date: '2024-09-15',
      company: 'Og Labs',
      description: 'Og Labs is holding a live AMA session. Join us to ask your questions!',
      color: '#7c4dff',
      keyword: 'AMA',
    },
    {
      date: '2024-09-18',
      company: 'MYX',
      description: 'MYX Labs is announcing a new strategic partnership.',
      color: '#ff6f61',
      keyword: 'Partnership',
    },
    {
      date: '2024-09-20',
      company: 'Blockchain Hub',
      description: 'Blockchain Hub is organizing a global summit.',
      color: '#ff9800',
      keyword: 'Summit',
    },
    {
      date: '2024-09-23',
      company: 'Fintech World',
      description: 'Fintech World is releasing their new mobile app.',
      color: '#9c27b0',
      keyword: 'App Launch',
    },
    {
      date: '2024-09-25',
      company: 'Og Labs',
      description: 'Og Labs is celebrating their 5th anniversary with a special event.',
      color: '#7c4dff',
      keyword: 'Anniversary',
    },
    {
      date: '2024-09-28',
      company: 'Green Energy Tech',
      description: 'Green Energy Tech is unveiling their latest sustainable product.',
      color: '#4caf50',
      keyword: 'Product Launch',
    },
    {
      date: '2024-09-30',
      company: 'MYX',
      description: 'MYX Labs is hosting a webinar on decentralized finance.',
      color: '#ff6f61',
      keyword: 'Webinar',
    },
  ];

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 닫기
    navigate('/mainboard/dashboard');
  };

  // 페이지가 렌더링될 때 모달이 자동으로 열리도록 설정
  useEffect(() => {
    setIsModalOpen(true); // 페이지 진입 시 모달 열기
  }, []);

  return (
    <>
      <BackButton onClick={() => navigate(-1)}>
        <BackLink>
          <span>&larr;</span>Back to Discover
        </BackLink>
      </BackButton>
      <PageContainer>
        <CustomCalendar events={events} />
      </PageContainer>
      <RedirectModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <CalenderModal onClose={handleCloseModal} />
      </RedirectModal>
    </>
  );
};

export default DiscoverCalendar;
