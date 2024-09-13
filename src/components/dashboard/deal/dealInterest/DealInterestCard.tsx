import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
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

// Define Deal interface
interface Deal {
  deal_id: number;
  deal_name: string;
  deal_desc: string;
  final_amount: number;
  end_date: string;
  deal_image_url: string;
  banner_image_url: string;
  deal_status: string;
  deal_round: string;
  create_date: string | null;
  min_interest: number;
  max_interest: number;
  total_interest: number; // Ensure total_interest is included
  current_interest: number;
}

// Define props interface
interface DealInterestCardProps {
  deal: Deal;
}

const DealInterestCard: React.FC<DealInterestCardProps> = ({ deal }) => {
  const { dealId } = useParams<{ dealId: string }>();
  const userId = useSelector((state: any) => state.user.user_id); // Get user ID from Redux store
  const [inputValue, setInputValue] = useState<string>('');
  const [isInterestModalOpen, setInterestModalOpen] = useState<boolean>(false);
  const [isInvalidModalOpen, setInvalidModalOpen] = useState<boolean>(false);

  // Log min and max interest when the component mounts
  useEffect(() => {
    console.log('Min Interest:', deal.min_interest);
    console.log('Max Interest:', deal.max_interest);
  }, [deal]);

  const handleMaxClick = () => {
    // Ensure that max_interest is a number
    const maxInterest = Number(deal.max_interest); // Convert to number

    // Set maxInterest as the input value
    setInputValue(maxInterest.toString());

    // Debugging log
    console.log('Selected Max Amount:', maxInterest);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log('Input Value Changed:', e.target.value);
  };

  const handleContinue = async () => {
    const inputAmount = parseFloat(inputValue);
    if (inputAmount < deal.min_interest || inputAmount > deal.max_interest) {
      setInvalidModalOpen(true);
      return;
    }

    try {
      await axios.put(`${API_BASE_URL}/api/deals/${dealId}/user/${userId}/interest`, {
        intAmount: inputAmount,
      });
      console.log('Interest Amount Updated:', inputAmount);
    } catch (error) {
      console.error('Error updating interest amount:', error);
    }
  };

  const openInterestModal = () => {
    const inputAmount = parseFloat(inputValue);
    if (inputAmount < deal.min_interest || inputAmount > deal.max_interest) {
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

  const isNumeric = !isNaN(Number(inputValue));

  return (
    <Container>
      <Title>SUBMIT YOUR INTEREST</Title>
      <InputContainer>
        <Input
          value={inputValue}
          onChange={handleInputChange}
          isNumeric={isNumeric}
          placeholder="0"
          type="number"
          min={deal.min_interest}
          max={deal.max_interest}
        />
        <USDTText>USDT</USDTText>
        <MaxButton onClick={handleMaxClick}>Max</MaxButton>
      </InputContainer>
      <Divider />
      <AllocationInfo>
        <div>
          <AllocationText>Min Interest</AllocationText>
          <AllocationValue>{deal.min_interest} USDT</AllocationValue>
        </div>
        <div>
          <AllocationText>Max Interest</AllocationText>
          <AllocationValue>{deal.max_interest} USDT</AllocationValue>
        </div>
      </AllocationInfo>
      <ContinueButton onClick={openInterestModal}>Continue</ContinueButton>

      {isInterestModalOpen && (
        <InterestModal
          amount={parseFloat(inputValue)}
          date={new Date().toLocaleString()}
          minInterest={deal.min_interest}
          maxInterest={deal.max_interest}
          onEdit={closeInterestModal}
          onConfirm={() => {
            handleContinue();
            closeInterestModal();
          }}
          onInvalid={closeInvalidModal} // Added onInvalid
        />
      )}
      {isInvalidModalOpen && (
        <InvalidModal
          message="The amount you entered is invalid."
          minAmount={deal.min_interest}
          maxAmount={deal.max_interest}
          onClose={closeInvalidModal}
        />
      )}
    </Container>
  );
};

export default DealInterestCard;
