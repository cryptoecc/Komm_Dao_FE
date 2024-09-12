import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
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
import InterestModal from './InterestModal';
import InvalidModal from './InvalidModal';
import { API_BASE_URL } from 'src/utils/utils';

interface Deal {
  deal_id: number;
  min_allocation: number;
  max_allocation: number;
  current_interest: number;
  total_interest: number;
}

const DealInterestCard: React.FC<{ deal: Deal }> = ({ deal }) => {
  const { dealId } = useParams<{ dealId: string }>();
  const [inputValue, setInputValue] = useState<string>('');
  const [isInterestModalOpen, setInterestModalOpen] = useState<boolean>(false);
  const [isInvalidModalOpen, setInvalidModalOpen] = useState<boolean>(false);
  const userId = 5;

  const handleMaxClick = () => {
    const maxPossibleAmount = Math.min(deal.max_allocation, deal.total_interest - deal.current_interest);
    setInputValue(maxPossibleAmount.toString());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleContinue = async () => {
    if (parseFloat(inputValue) < deal.min_allocation || parseFloat(inputValue) > deal.max_allocation) {
      setInvalidModalOpen(true);
      return;
    }

    try {
      await axios.put(`${API_BASE_URL}/api/deals/${dealId}/user/${userId}/interest`, {
        intAmount: parseFloat(inputValue),
      });
      // You can navigate to the next page or show a success message here
    } catch (error) {
      console.error('Error updating interest amount:', error);
    }
  };

  const openInterestModal = () => {
    if (parseFloat(inputValue) < deal.min_allocation || parseFloat(inputValue) > deal.max_allocation) {
      setInvalidModalOpen(true);
    } else {
      setInterestModalOpen(true);
    }
  };

  const closeInterestModal = () => {
    setInterestModalOpen(false);
  };

  const closeInvalidModal = () => {
    setInvalidModalOpen(false);
  };

  useEffect(() => {
    const fetchUserDealInterest = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/deals/${dealId}/user/${userId}/interest`);
        console.log('User deal interest data:', response.data);
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
        <Input value={inputValue} onChange={handleInputChange} isNumeric={isNumeric} placeholder="0" />
        <USDTText>USDT</USDTText>
        <MaxButton onClick={handleMaxClick}>Max</MaxButton>
      </InputContainer>
      <Divider />
      <AllocationInfo>
        <div>
          <AllocationText>Min Interest</AllocationText>
          <AllocationValue>{deal.min_allocation} USDT</AllocationValue>
        </div>
        <div>
          <AllocationText>Max Interest</AllocationText>
          <AllocationValue>{deal.max_allocation} USDT</AllocationValue>
        </div>
      </AllocationInfo>
      <ContinueButton onClick={openInterestModal}>Continue</ContinueButton>

      {isInterestModalOpen && (
        <InterestModal
          amount={parseFloat(inputValue)}
          date={new Date().toLocaleString()}
          onEdit={closeInterestModal}
          onConfirm={() => {
            handleContinue();
            closeInterestModal();
          }}
        />
      )}
      {isInvalidModalOpen && (
        <InvalidModal
          message="The amount you entered is invalid."
          minAmount={deal.min_allocation}
          maxAmount={deal.max_allocation}
          onClose={closeInvalidModal}
        />
      )}
    </Container>
  );
};

export default DealInterestCard;
