import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { API_BASE_URL } from 'src/utils/utils';

const ModalContainer = styled.div`
  /* 모달 배경 스타일 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  /* 모달 콘텐츠 스타일 */
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  text-align: center;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:first-child {
    background-color: red;
    color: white;
  }

  &:last-child {
    background-color: #ccc;
    color: black;
  }
`;

interface ModalProps {
  dealId: number; // 삭제할 Deal의 ID
  onClose: () => void; // 모달 닫기
  onDeleteSuccess: () => void; // 삭제 성공 후 호출되는 콜백
}

const DeleteDealModal: React.FC<ModalProps> = ({ dealId, onClose, onDeleteSuccess }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`${API_BASE_URL}/api/deals/${dealId}`);
      console.log('Deal deleted successfully');
      onDeleteSuccess(); // 삭제 성공 후 호출
      onClose(); // 모달 닫기
    } catch (error) {
      console.error('Error deleting deal:', error);
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <h2>Are you sure you want to delete this deal?</h2>
        <p>This action cannot be undone.</p>
        <Button onClick={handleDelete}>Delete</Button>
        <Button onClick={onClose}>Cancel</Button>
      </ModalContent>
    </ModalContainer>
  );
};

export default DeleteDealModal;
