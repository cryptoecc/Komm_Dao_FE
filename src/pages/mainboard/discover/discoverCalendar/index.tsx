import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomCalendar from 'src/components/dashboard/discover/discoverCalendar/Calendar';

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
      date: '2024-08-03',
      company: 'Og Labs',
      description: 'Og Labs announced new airdrop events! Please find the details.....',
      color: '#7c4dff',
    },
    {
      date: '2024-08-05',
      company: 'MYX',
      description: 'MYX Labs is launching a new product. Don’t miss out!',
      color: '#ff6f61',
    },
    {
      date: '2024-08-07',
      company: 'Crypto Corp',
      description: 'Crypto Corp has reached a new partnership agreement.',
      color: '#4caf50',
    },
    {
      date: '2024-08-10',
      company: 'Tech Innovations',
      description: 'Tech Innovations is hosting a virtual conference on blockchain technology.',
      color: '#2196f3',
    },
    {
      date: '2024-08-12',
      company: 'DeFi Solutions',
      description: 'DeFi Solutions has released their Q2 earnings report.',
      color: '#fbc02d',
    },
    {
      date: '2024-08-15',
      company: 'Og Labs',
      description: 'Og Labs is holding a live AMA session. Join us to ask your questions!',
      color: '#7c4dff',
    },
    {
      date: '2024-08-18',
      company: 'MYX',
      description: 'MYX Labs is announcing a new strategic partnership.',
      color: '#ff6f61',
    },
    {
      date: '2024-08-20',
      company: 'Blockchain Hub',
      description: 'Blockchain Hub is organizing a global summit.',
      color: '#ff9800',
    },
    {
      date: '2024-08-23',
      company: 'Fintech World',
      description: 'Fintech World is releasing their new mobile app.',
      color: '#9c27b0',
    },
    {
      date: '2024-08-25',
      company: 'Og Labs',
      description: 'Og Labs is celebrating their 5th anniversary with a special event.',
      color: '#7c4dff',
    },
    {
      date: '2024-08-28',
      company: 'Green Energy Tech',
      description: 'Green Energy Tech is unveiling their latest sustainable product.',
      color: '#4caf50',
    },
    {
      date: '2024-08-30',
      company: 'MYX',
      description: 'MYX Labs is hosting a webinar on decentralized finance.',
      color: '#ff6f61',
    },
  ];

  const navigate = useNavigate();

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
    </>
  );
};

export default DiscoverCalendar;
