import React from 'react';
import { CloseButton, ButtonGroup, ConfirmButton, Wrap } from './Calender.style';
import closeIcon from 'src/assets/modal/close.svg';

interface CalenderModalProps {
  onClose: () => void;
}

const CalenderModal: React.FC<CalenderModalProps> = ({ onClose }) => {
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
        <h2 style={{ fontSize: '24px' }}>Access Restricted</h2>
        <div>You do not have access to the Calender page at this time.</div>
        <div>Please contact support if you believe this is an error.</div>
        <ButtonGroup>
          <ConfirmButton onClick={onClose}>Close</ConfirmButton>
        </ButtonGroup>
      </Wrap>

      {/* 버튼 그룹 */}
    </div>
  );
};

export default CalenderModal;
