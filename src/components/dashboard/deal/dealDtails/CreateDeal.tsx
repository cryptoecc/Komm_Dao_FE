import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { API_BASE_URL } from 'src/utils/utils';

const ModalContainer = styled.div`
  /* 스타일 설정 */
`;

const ModalContent = styled.div`
  /* 스타일 설정 */
`;

const InputField = styled.input`
  /* 스타일 설정 */
`;

const FileInput = styled.input`
  /* 스타일 설정 */
`;

interface ModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

const CreateDealModal: React.FC<ModalProps> = ({ onClose, onConfirm }) => {
  const [formData, setFormData] = useState({
    pjt_id: '',
    deal_name: '',
    deal_round: '',
    deal_summary: '',
    deal_desc: '',
    deal_status: 'RAISING',
    current_interest: 0,
    total_interest: 0,
    final_amount: 0,
    start_date: '',
    end_date: '',
    min_allocation: 0,
    max_allocation: 0,
  });
  const [dealImage, setDealImage] = useState<File | null>(null); // 이미지 파일을 관리하는 상태

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDealImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        const value = formData[key as keyof typeof formData];
        formDataToSend.append(key, value.toString()); // 숫자 값을 문자열로 변환
      }
      if (dealImage) {
        formDataToSend.append('deal_image', dealImage);
      }

      const response = await axios.post(`${API_BASE_URL}/api/deals`, formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Deal created:', response.data);
      onConfirm();
      onClose(); // 모달 닫기
    } catch (error) {
      console.error('Error creating deal:', error);
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <h2>Create New Deal</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            name="pjt_id"
            value={formData.pjt_id}
            onChange={handleInputChange}
            placeholder="Project ID"
            required
          />
          <InputField
            name="deal_name"
            value={formData.deal_name}
            onChange={handleInputChange}
            placeholder="Deal Name"
            required
          />
          <InputField
            name="deal_round"
            value={formData.deal_round}
            onChange={handleInputChange}
            placeholder="Deal Round"
            required
          />
          <FileInput type="file" accept="image/*" onChange={handleImageChange} placeholder="Upload Image" required />
          <InputField
            name="deal_summary"
            value={formData.deal_summary}
            onChange={handleInputChange}
            placeholder="Deal Summary"
          />
          <InputField
            name="deal_desc"
            value={formData.deal_desc}
            onChange={handleInputChange}
            placeholder="Deal Description"
          />
          <InputField
            name="current_interest"
            value={formData.current_interest}
            onChange={handleInputChange}
            placeholder="Current Interest"
            required
            type="number"
          />
          <InputField
            name="total_interest"
            value={formData.total_interest}
            onChange={handleInputChange}
            placeholder="Total Interest"
            required
            type="number"
          />
          <InputField
            name="final_amount"
            value={formData.final_amount}
            onChange={handleInputChange}
            placeholder="Final Amount"
            required
            type="number"
          />
          <InputField
            name="start_date"
            value={formData.start_date}
            onChange={handleInputChange}
            placeholder="Start Date"
            required
            type="date"
          />
          <InputField
            name="end_date"
            value={formData.end_date}
            onChange={handleInputChange}
            placeholder="End Date"
            required
            type="date"
          />
          <InputField
            name="min_allocation"
            value={formData.min_allocation}
            onChange={handleInputChange}
            placeholder="Min Interest"
            required
            type="number"
          />
          <InputField
            name="max_allocation"
            value={formData.max_allocation}
            onChange={handleInputChange}
            placeholder="Max Interest"
            required
            type="number"
          />
          <button type="submit">Create Deal</button>
        </form>
        <button onClick={onClose}>Close</button>
      </ModalContent>
    </ModalContainer>
  );
};

export default CreateDealModal;
