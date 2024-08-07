import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CharterContainer, Title, DocumentContent, AcceptButton, ErrorMessage } from './acceptCharter.style';

interface StepProps {
  onComplete: () => void;
}

const AcceptCharter: React.FC<StepProps> = ({ onComplete }) => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [error, setError] = useState('');

  const handleAccept = () => {
    onComplete();
  };

  return (
    // <CharterContainer>
    <div>
      <div style={{}}>
        <Title>Please review and accept this charter</Title>
      </div>

      <div
        style={{
          border: '8px solid #e8e8e8',
          borderRadius: '20px',
          width: '600px',
          height: '610px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <iframe
          src="/KommDAOCharter_V1.2.html"
          style={{
            width: '973px', // 원본 내용의 두 배 크기로 설정
            height: '1100px', // 원본 내용의 두 배 크기로 설정
            transform: 'scale(0.6)', // 스케일을 절반으로 줄임
            transformOrigin: '0 0', // 왼쪽 상단을 기준으로 스케일링
            border: 'none',
            overflow: 'auto',
            position: 'absolute',
            top: '0',
            left: '0',
          }}
          title="Charter Document"
        ></iframe>
      </div>
      <AcceptButton onClick={handleAccept}>Accept</AcceptButton>
    </div>
  );
};

export default AcceptCharter;
