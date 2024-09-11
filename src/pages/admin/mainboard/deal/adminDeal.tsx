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
import { API_BASE_URL } from 'src/utils/utils';

interface Deal {
  deal_id: number;
  deal_name: string;
  deal_desc: string;
  deal_summary: string;
  total_interest: number;
  percentage: number;
  end_date: string;
  deal_logo_url: string;
  deal_banner_url: string;
  deal_status: string;
  deal_round: string;
}

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
    // 백엔드 API에서 deal 데이터 가져오기
    const fetchDeals = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/api/admin/deal-list`); // 실제 API 엔드포인트로 대체
        setDeals(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching deals:', err);
        setError('Failed to fetch deals');
        setLoading(false);
      }
    };

    fetchDeals();
  }, []);

  useEffect(() => {
    // 검색어로 필터링
    const filteredData = deals.filter((deal) =>
      Object.values(deal).some(
        (value) => typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredDeals(filteredData);
  }, [searchTerm, deals]);

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
          {filteredDeals.map((deal) => {
            const endDate = dayjs(deal.end_date);
            const status = currentDate.isBefore(endDate) ? 'Open' : 'Closed';

            return (
              <DealItem key={deal.deal_id}>
                <BannerContainer>
                  <BannerImage
                    src={deal.deal_banner_url ? `${API_BASE_URL}/${deal.deal_banner_url}` : defaultBannerImg}
                    alt="Banner Image"
                  />
                  <LogoImage
                    src={deal.deal_logo_url ? `${API_BASE_URL}/${deal.deal_logo_url}` : defaultDealIcon}
                    alt="Deal Logo"
                  />
                  <DealTitle>{deal.deal_name || 'No Deal Name'}</DealTitle>
                  <StatusBadge status={status}>{status === 'Open' ? 'Open' : 'Closed'}</StatusBadge>
                  <PercentageText>{deal.percentage || 0}%</PercentageText>
                </BannerContainer>

                <GaugeWrapper>
                  <Gauge percentage={deal.percentage || 0} />
                </GaugeWrapper>

                <DealDescription>{deal.deal_summary || 'No Summary Available'}</DealDescription>
              </DealItem>
            );
          })}
        </DealCardContainer>
      </Container>
      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="New Deal">
        <AddDeal onCancel={() => setIsAddModalOpen(false)} />
      </Modal>
    </PageWrapper>
  );
};

export default AdminDeal;
