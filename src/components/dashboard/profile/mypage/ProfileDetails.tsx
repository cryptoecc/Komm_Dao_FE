// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Container,
//   ProfileContainer,
//   ProfileImage,
//   Info,
//   Name,
//   Job,
//   Email,
//   WalletAddressWrap,
//   WalletAddressContentsWrap,
//   WalletAddress,
//   WalletContents,
//   CopyButton,
//   CopyIcon,
//   BioWrap,
//   Bio,
//   BioContents,
//   MembershipNftWrap,
//   MembershipNftWrapInner,
//   MembershipNftTitle,
//   OpenSeaIcon,
//   OpenSeaLink,
//   EditButton,
//   EditIcon,
//   CardContainer,
//   Card,
//   CardTitle,
//   CardSubtitle,
// } from './ProfileDetails.style';
// import { PATH } from 'src/constants/path';
// import { useNavigate } from 'react-router-dom';
// import { images } from '../../../../assets/dashboard/images';

// interface ProfileData {
//   name: string;
//   email: string;
//   walletAddress: string;
//   bio: string;
//   expertise: string;
//   membershipNft: string;
//   stayUpdated: boolean;
//   profileImage?: string | null;
// }

// interface CardData {
//   title: string;
//   subtitle: string;
//   id: number;
// }

// const ProfileDetails: React.FC = () => {
//   const walletAddress = '0x7447B0afa966225937dC1EB842afd40bebe1e03F';
//   const [profileData, setProfileData] = useState<ProfileData | null>(null);
//   const [cards, setCards] = useState<CardData[]>([
//     {
//       title: 'Kohort',
//       subtitle: 'Nibiru Marketing',
//       id: 0,
//     },
//     {
//       title: 'Kommittee Programs',
//       subtitle: 'KommDAO',
//       id: 1,
//     },
//     {
//       title: 'Event 1',
//       subtitle: 'Details of event 1',
//       id: 2,
//     },
//     {
//       title: 'Event 2',
//       subtitle: 'Details of event 2',
//       id: 3,
//     },
//     {
//       title: 'Event 3',
//       subtitle: 'Details of event 3',
//       id: 4,
//     },
//   ]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/api/user/profile/${walletAddress}`);
//         setProfileData(response.data);
//       } catch (error) {
//         console.error('Error fetching profile data:', error);
//         setProfileData({
//           name: 'Stella',
//           email: 'johndoe@example.com',
//           walletAddress: walletAddress,
//           bio: 'This is a default bio.',
//           expertise: 'Developer',
//           membershipNft: 'https://opensea.io/collection/default',
//           profileImage: null,
//           stayUpdated: true,
//         });
//       }
//     };

//     fetchProfileData();
//   }, [walletAddress]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [cards.length]);

//   const handleEditClick = () => {
//     navigate(PATH.PROFILE_UPDATE);
//   };

//   const handleCopy = () => {
//     if (profileData) {
//       navigator.clipboard.writeText(profileData.walletAddress);
//     }
//   };

//   if (!profileData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Container>
//       <ProfileContainer>
//         <ProfileImage
//           src={
//             profileData.profileImage ? `http://localhost:4000/${profileData.profileImage}` : images.profileDefaultIcon
//           }
//           alt="Profile"
//         />
//         <Info>
//           <Name>{profileData.name}</Name>
//           <Job>{profileData.expertise}</Job>
//           <Email>{profileData.email}</Email>
//         </Info>
//       </ProfileContainer>
//       <WalletAddressWrap>
//         <WalletAddress>Wallet Address</WalletAddress>
//         <WalletAddressContentsWrap>
//           <WalletContents>{profileData.walletAddress}</WalletContents>
//           <CopyButton onClick={handleCopy}>
//             <CopyIcon src={images.copyIcon} alt="Copy Icon" />
//           </CopyButton>
//         </WalletAddressContentsWrap>
//       </WalletAddressWrap>
//       <BioWrap>
//         <Bio>Bio</Bio>
//         <BioContents>{profileData.bio}</BioContents>
//       </BioWrap>
//       <MembershipNftWrap>
//         <MembershipNftTitle>Membership NFT</MembershipNftTitle>
//         <MembershipNftWrapInner>
//           <OpenSeaIcon src={images.openSeaIcon} alt="OpenSea Icon" />
//           <OpenSeaLink href={profileData.membershipNft} target="_blank" rel="noopener noreferrer">
//             View on OpenSea
//           </OpenSeaLink>
//         </MembershipNftWrapInner>
//       </MembershipNftWrap>
//       {/* <CardContainer>
//         {cards.map((card, index) => (
//           <Card key={card.id} index={(index - currentIndex + cards.length) % cards.length}>
//             <CardTitle>{card.title}</CardTitle>
//             <CardSubtitle>{card.subtitle}</CardSubtitle>
//           </Card>
//         ))}
//       </CardContainer> */}
//       <EditButton onClick={handleEditClick}>
//         <EditIcon src={images.editIcon} alt="Edit Icon" />
//         Edit
//       </EditButton>
//     </Container>
//   );
// };

// export default ProfileDetails;
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
  CardContainer,
  Card,
  CardTitle,
  CardSubtitle,
} from './ProfileDetails.style';
import { PATH } from 'src/constants/path';
import { useNavigate } from 'react-router-dom';
import { images } from '../../../../assets/dashboard/images';

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
        // Local Storage에서 저장된 데이터를 가져옵니다.
        const persistedRoot = localStorage.getItem('persist:root');
        if (persistedRoot) {
          const parsedData = JSON.parse(persistedRoot);
          const walletAddress = JSON.parse(parsedData.wallet_addr);

          // 가져온 지갑 주소를 이용해 사용자 정보를 백엔드에서 조회합니다.
          const response = await axios.get(`http://localhost:4000/api/user/profile/${walletAddress}`);
          setProfileData(response.data);
        } else {
          console.error('persist:root not found in localStorage');
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
        // 기본 데이터를 설정합니다.
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

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <ProfileContainer>
        <ProfileImage
          src={
            profileData.profileImage ? `http://localhost:4000/${profileData.profileImage}` : images.profileDefaultIcon
          }
          alt="Profile"
        />
        <Info>
          <Name>{profileData.name}</Name>
          <Job>{profileData.expertise}</Job>
          <Email>{profileData.email}</Email>
        </Info>
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
          <OpenSeaIcon src={images.openSeaIcon} alt="OpenSea Icon" />
          <OpenSeaLink href={profileData.membershipNft} target="_blank" rel="noopener noreferrer">
            View on OpenSea
          </OpenSeaLink>
        </MembershipNftWrapInner>
      </MembershipNftWrap>
      <EditButton onClick={handleEditClick}>
        <EditIcon src={images.editIcon} alt="Edit Icon" />
        Edit
      </EditButton>
    </Container>
  );
};

export default ProfileDetails;
