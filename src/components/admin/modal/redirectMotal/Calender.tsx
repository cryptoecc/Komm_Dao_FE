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
        <p style={{ fontSize: '32px', fontWeight: '700', fontFamily: 'Inter', width: '520px', lineHeight: '42px' }}>
          Calender Page Coming Soon!
        </p>
        <div style={{ lineHeight: 'normal', fontSize: '20px', fontWeight: '400', fontFamily: 'Inter' }}>
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

export default CalenderModal;
