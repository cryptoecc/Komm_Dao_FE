import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';
import defaultDealIcon from 'src/assets/deal/MYX.png';
import defaultBannerImg from 'src/assets/deal/MYX_bannerr.png';
import TopBar from 'src/components/admin/topbar/Topbar';
import Modal from 'src/components/admin/modal/Modal';
import AddDeal from 'src/components/admin/modal/addDeal/AddDeal';
import editIcon from 'src/assets/admin/edituser.svg';
import deleteIcon from 'src/assets/admin/delete.svg';
import EditDeal from 'src/components/admin/modal/editDeal/EditDeal';
import ConfirmDeleteModal from 'src/components/admin/modal/deleteModal/DeleteModal';

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
  IconContainer,
  EditIcon,
  DeleteIcon,
  Popup,
} from './adminDeal.style';
import { API_BASE_URL } from 'src/utils/utils';

interface Deal {
  pjt_id: number;
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

  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState<boolean>(false); // 삭제 확인 모달 상태
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  const [filteredDeals, setFilteredDeals] = useState<any[]>([]);
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);
  const [dealToDelete, setDealToDelete] = useState<number | null>(null); // 삭제할 dealId 저장

  const [fetchTrigger, setFetchTrigger] = useState(false); // 딜 목록을 다시 가져오는 상태 트리거
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDeals = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/api/admin/deal-list`);
      setDeals(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching deals:', err);
      setError('Failed to fetch deals');
      setLoading(false);
    }
  };

  // fetchTrigger가 변경될 때마다 딜 목록을 다시 가져옴
  useEffect(() => {
    fetchDeals();
  }, [fetchTrigger]); // fetchTrigger가 변경될 때 딜 목록을 다시 가져오기

  const handleEdit = (deal: Deal) => {
    setSelectedDeal(deal); // 수정할 deal 정보를 설정
    setIsEditModalOpen(true); // 편집 모달 열기
  };

  const handleDelete = (dealId: number) => {
    console.log('Deleting deal:', dealId);
    // 삭제 확인 모달을 띄우거나 삭제 API 요청
    setDealToDelete(dealId); // 삭제할 dealId 설정
    setIsConfirmDeleteOpen(true); // 삭제 모달 열기
  };

  const confirmDelete = () => {
    if (dealToDelete !== null) {
      axios
        .delete(`${API_BASE_URL}/api/admin/deals/${dealToDelete}`)
        .then(() => {
          alert('Deal deleted successfully');
          setDeals(deals.filter((deal) => deal.deal_id !== dealToDelete));
          setIsConfirmDeleteOpen(false); // 삭제 후 모달 닫기
        })
        .catch((err) => {
          console.error('Failed to delete deal', err);
          alert('Failed to delete deal');
          setIsConfirmDeleteOpen(false); // 에러 발생 시에도 모달 닫기
        });
    }
  };

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

  const addNewDeal = (newDeal: any) => {
    setDeals((prevDeals) => [...prevDeals, newDeal]);
  };

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
                  <IconContainer>
                    <EditIcon src={editIcon} alt="Edit Deal" onClick={() => handleEdit(deal)} />
                    <DeleteIcon src={deleteIcon} alt="Delete Deal" onClick={() => handleDelete(deal.deal_id)} />
                  </IconContainer>
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
        <AddDeal onCancel={() => setIsAddModalOpen(false)} onDealCreated={() => setFetchTrigger((prev) => !prev)} />
      </Modal>

      {/* Edit 모달 */}
      {selectedDeal && (
        <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} title="Edit Deal">
          <EditDeal deal={selectedDeal} onCancel={() => setIsEditModalOpen(false)} />
        </Modal>
      )}
      {/* 삭제 확인 모달 */}
      <ConfirmDeleteModal
        isOpen={isConfirmDeleteOpen}
        onClose={() => setIsConfirmDeleteOpen(false)}
        onConfirm={confirmDelete}
      />
    </PageWrapper>
  );
};

export default AdminDeal;
