import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import { images } from '../../../../assets/dashboard/images';
import { API_BASE_URL } from 'src/utils/utils';

interface ProfileData {
  name: string;
  email: string;
  walletAddress: string;
  bio: string;
  expertise: string;
  membershipNft: string;
  stayUpdated: boolean;
  profileImage?: string | null;
}

interface CardData {
  title: string;
  subtitle: string;
  id: number;
}

const ProfileDetails: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [cards, setCards] = useState<CardData[]>([
    { title: 'Kohort', subtitle: 'Nibiru Marketing', id: 0 },
    { title: 'Kommittee Programs', subtitle: 'KommDAO', id: 1 },
    { title: 'Event 1', subtitle: 'Details of event 1', id: 2 },
    { title: 'Event 2', subtitle: 'Details of event 2', id: 3 },
    { title: 'Event 3', subtitle: 'Details of event 3', id: 4 },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const persistedRoot = localStorage.getItem('persist:root');
        if (persistedRoot) {
          const parsedData = JSON.parse(persistedRoot);
          const walletAddress = JSON.parse(parsedData.wallet_addr);
          const response = await axios.get(`${API_BASE_URL}/api/user/profile/${walletAddress}`);
          setProfileData(response.data);
        } else {
          console.error('persist:root not found in localStorage');
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setProfileData({
          name: 'Stella',
          email: 'johndoe@example.com',
          walletAddress: '0x7447B0afa966225937dC1EB842afd40bebe1e03F',
          bio: 'This is a default bio.',
          expertise: 'Developer',
          membershipNft: 'https://opensea.io/collection/default',
          profileImage: null,
          stayUpdated: true,
        });
      }
    };

    fetchProfileData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [cards.length]);

  const handleEditClick = () => {
    navigate(PATH.PROFILE_UPDATE);
  };

  const handleCopy = () => {
    if (profileData) {
      navigator.clipboard.writeText(profileData.walletAddress);
    }
  };

  const shortenWalletAddress = (address: string) => {
    return `${address.slice(0, 7)}...${address.slice(-6)}`;
  };

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <ProfileContainer>
        <ProfileImage
          src={profileData.profileImage ? `${API_BASE_URL}/${profileData.profileImage}` : images.profileDefaultIcon}
          alt="Profile"
        />
        <Info>
          <Name>{profileData.name}</Name>
          <Job>{profileData.expertise}</Job>
          <Email>{profileData.email}</Email>
        </Info>
        <div style={{}}>
          <EditButton onClick={handleEditClick}>
            <EditIcon src={images.editIcon2} alt="Edit Icon" />
            Edit
          </EditButton>
        </div>
      </ProfileContainer>
      <WalletAddressWrap>
        <WalletAddress>Wallet Address</WalletAddress>
        <WalletAddressContentsWrap>
          <WalletContents>{profileData.walletAddress}</WalletContents>
          <CopyButton onClick={handleCopy}>
            <CopyIcon src={images.copyIcon} alt="Copy Icon" />
          </CopyButton>
        </WalletAddressContentsWrap>
      </WalletAddressWrap>
      <BioWrap>
        <Bio>Bio</Bio>
        <BioContents>{profileData.bio}</BioContents>
      </BioWrap>
      <MembershipNftWrap>
        <MembershipNftTitle>Membership NFT</MembershipNftTitle>
        <MembershipNftWrapInner>
          {/* <OpenSeaIcon src={images.openSeaIcon} alt="OpenSea Icon" /> */}
          <OpenSeaLink href={profileData.membershipNft} target="_blank" rel="noopener noreferrer">
            View on OpenSea
          </OpenSeaLink>
        </MembershipNftWrapInner>
      </MembershipNftWrap>
      {/* <EditButton onClick={handleEditClick}>
        <EditIcon src={images.editIcon2} alt="Edit Icon" />
        Edit
      </EditButton> */}
    </Container>
  );
};

export default ProfileDetails;
