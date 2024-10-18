import React from 'react';
import { CloseButton, ModalContainer, ModalContent, ButtonGroup, ConfirmButton } from './Governance.style';
import closeIcon from 'src/assets/modal/close.svg';

interface GovernanceModalProps {
  onClose: () => void;
}

const GovernanceModal: React.FC<GovernanceModalProps> = ({ onClose }) => {
  return (
    <div>
      {/* 닫기 버튼 */}
      <CloseButton onClick={onClose}>
        <img src={closeIcon} alt="Close" style={{ width: '24px', height: '24px' }} />
      </CloseButton>

      {/* 경고 메시지 */}
      <div>
        <h2>Access Restricted</h2>
        <p>You do not have access to the Governance page at this time.</p>
        <p>Please contact support if you believe this is an error.</p>
      </div>

      {/* 버튼 그룹 */}
      <ButtonGroup>
        <ConfirmButton onClick={onClose}>Close</ConfirmButton>
      </ButtonGroup>
    </div>
  );
};

export default GovernanceModal;
