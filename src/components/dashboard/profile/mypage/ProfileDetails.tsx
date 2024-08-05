// src/pages/dashboard/ProfileDetails.tsx
import React from 'react';
import {
  Container,
  ProfileContainer,
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
import CardListsContainer from './card/CardListsContainer';
import { images } from '../../../../assets/dashboard/images';

const ProfileDetails: React.FC = () => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(PATH.PROFILE_UPDATE);
  };

  const handleCopy = () => {
    const textToCopy = 'Connected WalletAddress';
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <Container>
      <ProfileContainer>
        <ProfileImage src={images.profileDefaultIcon} alt="Profile" />
        <Info>
          <Name>Stella</Name>
          <Job>Marketer</Job>
          <Email>stella@google.com</Email>
        </Info>
      </ProfileContainer>
      <WalletAddressWrap>
        <WalletAddress>Wallet Address</WalletAddress>
        <WalletAddressContentsWrap>
          <WalletContents>0x1234...abcd</WalletContents>
          <CopyButton onClick={handleCopy}>
            <CopyIcon src={images.copyIcon} alt="Copy Icon" />
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
          <OpenSeaIcon src={images.openSeaIcon} alt="OpenSea Icon" />
          <OpenSeaLink href="https://opensea.io/assets/nft" target="_blank" rel="noopener noreferrer">
            View on OpenSea
          </OpenSeaLink>
        </MembershipNftWrapInner>
      </MembershipNftWrap>
      <EditButton onClick={handleEditClick}>
        <EditIcon src={images.editIcon} alt="Edit Icon" />
        Edit
      </EditButton>
      <CardListsContainer />
    </Container>
  );
};

export default ProfileDetails;
