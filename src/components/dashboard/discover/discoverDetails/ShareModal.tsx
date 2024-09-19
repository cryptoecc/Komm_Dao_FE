import React from 'react';
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  SocialIconContainer,
  SocialIconWrapper,
  SocialIconLabel,
  ShareLinkContainer,
  ShareButtonIcon,
  CloseIcon,
  SocialIconWithLabel,
  StyledInput,
} from './ShareModal.style';
import { images } from 'src/assets/discover/images';
// import { toast } from 'react-toastify';
interface ShareModalProps {
  link: string;
  onClose: () => void;
  onCopyLink: () => void; // Add this line
}

const ShareModal: React.FC<ShareModalProps> = ({ link, onClose, onCopyLink }) => {
  const handleCopyClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(link)
        .then(() => {
          onCopyLink();
          // toast.success('Link copied to clipboard!'); // 성공 메시지
        })
        .catch((err) => {
          console.error('Failed to copy: ', err);
          // toast.error('Failed to copy link.'); // 오류 메시지
        });
    } else {
      console.error('Clipboard API not supported.');
      // toast.error('Clipboard API not supported.'); // 오류 메시지
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <CloseIcon src={images.closeIcon} alt="Close" onClick={onClose} />
        <ModalTitle>Share this</ModalTitle>
        <SocialIconContainer>
          <SocialIconWithLabel>
            <SocialIconWrapper bgColor="#f2f2f2">
              <img src={images.x} alt="Twitter" />
            </SocialIconWrapper>
            <SocialIconLabel color="#000">X</SocialIconLabel>
          </SocialIconWithLabel>

          <SocialIconWithLabel>
            <SocialIconWrapper bgColor="#eaf4ff">
              <img src={images.t} alt="Telegram" />
            </SocialIconWrapper>
            <SocialIconLabel color="#1e88e5">Telegram</SocialIconLabel>
          </SocialIconWithLabel>

          <SocialIconWithLabel>
            <SocialIconWrapper bgColor="#fff4d6">
              <img src={images.k} alt="Kakao Talk" />
            </SocialIconWrapper>
            <SocialIconLabel color="#ffca28">Kakao Talk</SocialIconLabel>
          </SocialIconWithLabel>

          <SocialIconWithLabel>
            <SocialIconWrapper bgColor="#f3f4ff">
              <img src={images.d} alt="Discord" />
            </SocialIconWrapper>
            <SocialIconLabel color="#7289da">Discord</SocialIconLabel>
          </SocialIconWithLabel>
        </SocialIconContainer>
        <ShareLinkContainer>
          <StyledInput type="text" value={link} readOnly />
          <ShareButtonIcon src={images.copyLinkIcon} alt="Copy Link" onClick={handleCopyClick} />
        </ShareLinkContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default ShareModal;
