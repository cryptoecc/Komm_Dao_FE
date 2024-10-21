// src/components/common/MessageModal.tsx
import React from 'react';
import {
  ModalOverlay,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseButton,
  SendButton,
  CancelButton,
  Title,
  TextArea,
  Option,
} from './MessageModal.style';

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: () => void;
  title: string;
  content: string;
  channel: string;
  email: string[];
  setEmail: (value: string[]) => void;
  setTitle: (value: string) => void;
  setContent: (value: string) => void;
  setChannel: (value: string) => void;

  formLink?: string;
}

const MessageModal: React.FC<MessageModalProps> = ({
  isOpen,
  onClose,
  onSend,
  title,
  content,
  channel,
  setTitle,
  setContent,
  setChannel,
  email,
  setEmail,
  formLink = '(Optional) Also send to a discord channel:',
}) => {
  // 이메일 수정 핸들러
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emails = e.target.value.split(',').map((email) => email.trim()); // 콤마로 구분해서 배열로 변환
    setEmail(emails); // 이메일 배열 업데이트
  };

  if (!isOpen) return null;
  console.log(content);
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalContent>
          <ModalHeader>
            <h2>Send Messages</h2>
            <CloseButton onClick={onClose} />
          </ModalHeader>
          <ModalBody>
            <div>
              <Title type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            </div>
            <div>
              <TextArea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
            </div>
            <div>
              <label>{formLink}</label>
              <Option
                type="text"
                value={email.join(', ')} // 이메일 배열을 콤마로 구분해서 표시
                onChange={handleEmailChange} // 이메일 값이 변경되면 handleEmailChange 호출
                placeholder="Enter emails, separated by commas"
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <CancelButton onClick={onClose}>Cancel</CancelButton>
            <SendButton onClick={onSend}>Send</SendButton>
          </ModalFooter>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default MessageModal;
