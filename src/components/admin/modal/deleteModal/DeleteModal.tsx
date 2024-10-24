// ConfirmDeleteModal.tsx
import React from 'react';
import styled from 'styled-components';

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <ModalBackground>
      <ModalContainer>
        <ModalTitle>Are you sure you want to delete the deal?</ModalTitle>
        <ButtonGroup>
          <CancelButton onClick={onClose}>No</CancelButton>
          <ConfirmButton onClick={onConfirm}>Yes</ConfirmButton>
        </ButtonGroup>
      </ModalContainer>
    </ModalBackground>
  );
};

// 모달 스타일 정의
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  width: 757px;
  height: 245px;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
`;

const ModalTitle = styled.h2`
  color: #404040;
  margin-top: 30px;
  float: left;
  margin-left: 10px;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: end;
  margin-top: 120px;
`;

const CancelButton = styled.button`
  background-color: #fff;
  border: 1px solid #000;
  padding: 17px 26px;
  border-radius: 15px;
  width: 120px;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ConfirmButton = styled.button`
  width: 120px;
  background: #7c4dff;
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  padding: 17px 26px;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: #6a3fbf;
  }
`;

export default ConfirmDeleteModal;
