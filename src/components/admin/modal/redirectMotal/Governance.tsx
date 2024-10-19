import React from 'react';
import { CloseButton, ButtonGroup, ConfirmButton, Wrap } from './Governance.style';
import closeIcon from 'src/assets/modal/close.svg';

interface GovernanceModalProps {
  onClose: () => void;
}

const GovernanceModal: React.FC<GovernanceModalProps> = ({ onClose }) => {
  return (
    <div>
      {/* 닫기 버튼 */}
      <div>
        <CloseButton onClick={onClose}>
          <img src={closeIcon} alt="Close" style={{ width: '24px', height: '24px' }} />
        </CloseButton>
      </div>

      {/* 경고 메시지 */}
      <Wrap>
        <p style={{ fontSize: '36px', fontWeight: '600', fontFamily: 'Inter', width: '400px', lineHeight: '42px' }}>
          Governance Page Coming Soon!
        </p>
        <div style={{ lineHeight: '20px' }}>
          <p>This page will be available in a future update.</p>
          <p>Stay tuned for more features in our next release.</p>
        </div>

        <ButtonGroup>
          <ConfirmButton onClick={onClose}>OK</ConfirmButton>
        </ButtonGroup>
      </Wrap>

      {/* 버튼 그룹 */}
    </div>
  );
};

export default GovernanceModal;
