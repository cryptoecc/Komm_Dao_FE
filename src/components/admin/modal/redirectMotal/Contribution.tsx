import React from 'react';
import { CloseButton, ButtonGroup, ConfirmButton, Wrap } from './Contribution.style';
import closeIcon from 'src/assets/modal/close.svg';

interface GovernanceModalProps {
  onClose: () => void;
}

const ContributionModal: React.FC<GovernanceModalProps> = ({ onClose }) => {
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
        <p style={{ fontSize: '25px', fontWeight: '700', width: '520px', lineHeight: '24px', marginTop: '20px' }}>
          CONFIDENTIAL - DO NOT SHARE
        </p>
        <div style={{ lineHeight: 'normal', fontSize: '18px', fontWeight: '400', marginTop: '50px' }}>
          <p>All deal information is highly confidential and must remain within the Komm DAO community.</p>
          <br />
          <p>
            Sharing, discussing, or contacting the company directly without permission is strictly prohibited and will
            result in immediate removal from the platform.
          </p>
        </div>

        <ButtonGroup>
          <ConfirmButton onClick={onClose}>I Agree</ConfirmButton>
        </ButtonGroup>
      </Wrap>

      {/* 버튼 그룹 */}
    </div>
  );
};

export default ContributionModal;
