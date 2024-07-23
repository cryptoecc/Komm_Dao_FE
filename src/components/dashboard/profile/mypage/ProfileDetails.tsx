// src/components/dashboard/profile/mypage/ProfileDetails.tsx
import React from 'react';
import {
  Container,
  Banner,
  ProfileImageWrapper,
  ProfileImage,
  Info,
  Name,
  Job,
  Email,
  WalletAddressWrap,
  WalletAddressContentsWrap,
  WalletAddress,
  WalletContents,
  CopyButton,
  CopyIcon,
  BioWrap,
  Bio,
  BioContents,
  MembershipNftWrap,
  MembershipNftWrapInner,
  MembershipNftTitle,
  OpenSeaIcon,
  OpenSeaLink,
  EditButton,
  EditIcon,
} from './ProfileDetails.style';
import { PATH } from 'src/constants/path';
import { useNavigate } from 'react-router-dom';

// 아이콘 이미지 경로 설정
const editIconPath = '/assets/images/edit_icon.png'; // 경로가 올바른지 확인
const profile_images = '/assets/images/profile_default.png'; // 경로가 올바른지 확인
const copyIconPath = '/assets/images/copy_icon.png'; // 경로가 올바른지 확인
const openSeaIconPath = '/assets/images/openSea.png'; // 경로가 올바른지 확인

const ProfileDetails: React.FC = () => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(PATH.PROFILE_UPDATE); // navigate 함수를 호출하여 페이지 이동
  };

  const handleCopy = () => {
    // 복사할 텍스트
    const textToCopy = 'Conneted WalletAddress';
    navigator.clipboard.writeText(textToCopy);
  };
  return (
    <>
      {/* <Banner /> */}
      <Container>
        <ProfileImageWrapper>
          <ProfileImage src={profile_images} alt="Profile" />
        </ProfileImageWrapper>

        <Info>
          <Name>Stella</Name>
          <Job>Marketer</Job>
          <Email>stella@google.com</Email>
        </Info>
        <WalletAddressWrap>
          <WalletAddress>Wallet Address</WalletAddress>
          <WalletAddressContentsWrap>
            <WalletContents>0x1234...abcd</WalletContents>
            <CopyButton onClick={handleCopy}>
              <CopyIcon src={copyIconPath} alt="Copy Icon" />
            </CopyButton>
          </WalletAddressContentsWrap>
        </WalletAddressWrap>
        <BioWrap>
          <Bio>Bio</Bio>
          <BioContents>A short bio about John Doe.</BioContents>
        </BioWrap>
        <MembershipNftWrap>
          <MembershipNftTitle>Membership NFT</MembershipNftTitle>

          <MembershipNftWrapInner>
            <OpenSeaIcon src={openSeaIconPath} alt="OpenSea Icon" />
            <OpenSeaLink href="https://opensea.io/assets/nft" target="_blank" rel="noopener noreferrer">
              View on OpenSea
            </OpenSeaLink>
          </MembershipNftWrapInner>
        </MembershipNftWrap>
        <EditButton onClick={handleEditClick}>
          <EditIcon src={editIconPath} alt="Edit Icon" />
          Edit
        </EditButton>
      </Container>
    </>
  );
};

export default ProfileDetails;
