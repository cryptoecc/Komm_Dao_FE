import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';
import defaultDealIcon from 'src/assets/deal/MYX.png';
import defaultBannerImg from 'src/assets/deal/MYX_bannerr.png';
import TopBar from 'src/components/admin/topbar/Topbar';
import Modal from 'src/components/admin/modal/Modal';
import AddDeal from 'src/components/admin/modal/addDeal/AddDeal';
import {
  DealCardContainer,
  DealItem,
  DealTitle,
  StatusBadge,
  GaugeWrapper,
  Gauge,
  DealDescription,
  PercentageText,
  BannerContainer,
  BannerImage,
  LogoImage,
  Title,
  PageWrapper,
  Container,
  Popup,
} from './adminDeal.style';

interface Deal {
  deal_id: number;
  deal_name: string;
  deal_desc: string;
  final_amount: number;
  percentage: number;
  start_date: string;
  end_date: string;
  deal_image_url: string;
  banner_image_url: string;
}

const fakeDeals: Deal[] = [
  {
    deal_id: 1,
    deal_name: 'Amazing Deal 1',
    deal_desc: 'This is a great deal for early bird investors.',
    final_amount: 1000000,
    percentage: 75,
    start_date: '2023-09-01',
    end_date: '2023-12-01',
    deal_image_url: '',
    banner_image_url: '',
  },
  {
    deal_id: 2,
    deal_name: 'Exclusive Offer 2',
    deal_desc: 'Exclusive offer for premium users.',
    final_amount: 2000000,
    percentage: 60,
    start_date: '2023-08-01',
    end_date: '2023-11-01',
    deal_image_url: '',
    banner_image_url: '',
  },
  {
    deal_id: 3,
    deal_name: 'Limited Time Deal 3',
    deal_desc: 'Limited time offer, don’t miss out!',
    final_amount: 500000,
    percentage: 90,
    start_date: '2023-07-15',
    end_date: '2023-10-15',
    deal_image_url: '',
    banner_image_url: '',
  },
  {
    deal_id: 4,
    deal_name: 'Limited Time Deal 3',
    deal_desc: 'Limited time offer, don’t miss out!',
    final_amount: 500000,
    percentage: 90,
    start_date: '2023-07-15',
    end_date: '2023-10-15',
    deal_image_url: '',
    banner_image_url: '',
  },
  {
    deal_id: 5,
    deal_name: 'Limited Time Deal 3',
    deal_desc: 'Limited time offer, don’t miss out!',
    final_amount: 500000,
    percentage: 90,
    start_date: '2023-07-15',
    end_date: '2023-10-15',
    deal_image_url: '',
    banner_image_url: '',
  },
  {
    deal_id: 6,
    deal_name: 'Limited Time Deal 3',
    deal_desc: 'Limited time offer, don’t miss out!',
    final_amount: 500000,
    percentage: 90,
    start_date: '2023-07-15',
    end_date: '2023-10-15',
    deal_image_url: '',
    banner_image_url: '',
  },
];

const AdminDeal: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [deals, setDeals] = useState<any[]>([]); // Kohorts 데이터를 담을 상태

  // 모달
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  const [filteredDeals, setFilteredDeals] = useState<any[]>([]);
  const [deal, setDeal] = useState<Deal | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 검색어로 필터링
    const filteredData = deals.filter((deal) =>
      Object.values(deal).some(
        (value) => typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredDeals(filteredData);
  }, [searchTerm, deals]);

  //   useEffect(() => {
  //     // 거래 데이터를 API로부터 가져옴
  //     const fetchDeal = async () => {
  //       try {
  //         const response = await axios.get(`/api/admin/deal/`); // 거래 ID에 따라 데이터를 가져옴
  //         setDeal(response.data);
  //         setLoading(false);
  //       } catch (error) {
  //         setError('Failed to fetch deal data');
  //         setLoading(false);
  //       }
  //     };

  //     fetchDeal();
  //   }, []);

  //   if (loading) return <div>Loading...</div>;
  //   if (error) return <div>{error}</div>;
  //   if (!deal) return <div>No deal found</div>;

  const currentDate = dayjs();
  //   const endDate = dayjs(deal.end_date);
  //   const status = currentDate.isBefore(endDate) ? 'Open' : 'Closed';

  return (
    <PageWrapper>
      <Title>Deal Mgmt {'>'} Deal Room</Title>
      <TopBar
        onSearchChange={setSearchTerm} // 검색어가 변경될 때 필터링
        onEditClick={() => console.log('Edit Clicked')} // 편집 버튼 클릭 시 동작 추가 가능
        showToggle={false}
        onAddClick={() => setIsAddModalOpen(true)}
      />
      <Container>
        <DealCardContainer>
          {fakeDeals.map((deal) => {
            const endDate = dayjs(deal.end_date);
            const status = currentDate.isBefore(endDate) ? 'Open' : 'Closed';

            return (
              <DealItem key={deal.deal_id}>
                <BannerContainer>
                  <BannerImage src={deal.banner_image_url || defaultBannerImg} alt="Banner Image" />
                  <LogoImage src={deal.deal_image_url || defaultDealIcon} alt="Deal Logo" />
                  <DealTitle>{deal.deal_name || 'No Deal Name'}</DealTitle>
                  <StatusBadge status={status}>{status === 'Open' ? 'Open' : 'Closed'}</StatusBadge>
                  <PercentageText>{deal.percentage || 0}%</PercentageText>
                </BannerContainer>

                <GaugeWrapper>
                  <Gauge percentage={deal.percentage || 0} />
                </GaugeWrapper>

                <DealDescription>{deal.deal_desc || 'No Description Available'}</DealDescription>
              </DealItem>
            );
          })}
        </DealCardContainer>
      </Container>
      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="New Contribution">
        <AddDeal />
      </Modal>
    </PageWrapper>
  );
};

export default AdminDeal;
