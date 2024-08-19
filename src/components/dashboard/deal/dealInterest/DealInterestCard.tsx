import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Container,
  Title,
  InputContainer,
  Input,
  USDTText,
  MaxButton,
  Divider,
  AllocationInfo,
  AllocationText,
  AllocationValue,
  ContinueButton,
} from './DealInterestCard.style';
import Modal from './InterestModal'; // 모달 컴포넌트 추가

interface Deal {
  deal_id: number;
  min_allocation: number;
  max_allocation: number;
  current_interest: number;
  total_interest: number;
}

const DealInterestCard: React.FC<{ deal: Deal }> = ({ deal }) => {
  const navigate = useNavigate();
  const { dealId } = useParams<{ dealId: string }>();
  const [inputValue, setInputValue] = useState<string>('');
  const [isModalOpen, setModalOpen] = useState<boolean>(false); // 모달 상태 관리
  const userId = 5;

  const handleMaxClick = () => {
    const maxPossibleAmount = Math.min(deal.max_allocation, deal.total_interest - deal.current_interest);
    setInputValue(maxPossibleAmount.toString());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleContinue = async () => {
    try {
      await axios.put(`http://localhost:4000/api/deals/${dealId}/user/${userId}/interest`, {
        intAmount: parseFloat(inputValue),
      });
      //   navigate('/next-page');
    } catch (error) {
      console.error('Error updating interest amount:', error);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const fetchUserDealInterest = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/deals/${dealId}/user/${userId}/interest`);
        console.log('User deal interest data:', response.data); // 응답 데이터가 잘 들어오는지 확인
      } catch (error) {
        console.error('Error fetching user deal interest:', error);
      }
    };

    fetchUserDealInterest();
  }, [dealId, userId]);
  const isNumeric = !isNaN(Number(inputValue));
  return (
    <Container>
      <Title>SUBMIT YOUR INTEREST</Title>
      <InputContainer>
        <Input
          type="text" // type="number" 대신 type="text" 사용
          value={inputValue}
          onChange={handleInputChange}
          isNumeric={isNumeric} // isNumeric 속성 전달
          placeholder="0"
        />
        <USDTText>USDT</USDTText>
        <MaxButton onClick={handleMaxClick}>Max</MaxButton>
      </InputContainer>
      <Divider />
      <AllocationInfo>
        <div>
          <AllocationText>Minimum Allocation</AllocationText>
          <AllocationValue>{deal.min_allocation} USDT</AllocationValue>
        </div>
        <div>
          <AllocationText>Maximum Allocation</AllocationText>
          <AllocationValue>{deal.max_allocation} USDT</AllocationValue>
        </div>
      </AllocationInfo>
      <ContinueButton onClick={openModal}>Continue</ContinueButton>

      {/* 모달 추가 */}
      {isModalOpen && (
        <Modal onClose={closeModal} onConfirm={handleContinue}>
          Are you sure you want to submit this interest?
        </Modal>
      )}
    </Container>
  );
};

export default DealInterestCard;
