import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Header,
  MainContent,
  ProfileImageSection,
  ProfileImage,
  EditImageButton,
  InputSection,
  HorizontalGroup,
  NameField,
  MembershipNftField,
  EmailField,
  WalletAddressField,
  BioField,
  ExpertiseField,
  Label,
  Input,
  ButtonGroup,
  Button,
  MembershipNftInputWrapper,
  MembershipNftIcon,
  MembershipNftLink,
  SelectField,
  NoBorderInput,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
  InputIcon,
  BioInputIcon,
  BioInput,
} from './ProfileUpdate.style';
import { images } from '../../../../assets/dashboard/images';

// 타입 정의
interface ProfileData {
  name: string;
  email: string;
  walletAddress: string;
  bio: string;
  expertise: string;
  membershipNft: string;
  stayUpdated: boolean;
  profileImage?: File | null;
}

const ProfileUpdate: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: '',
    email: '',
    walletAddress: '',
    bio: '',
    expertise: 'marketer',
    membershipNft: '',
    stayUpdated: false,
    profileImage: null,
  });
  const [previewImage, setPreviewImage] = useState<string | undefined>(undefined);
  const walletAddress = '0x7447B0afa966225937dC1EB842afd40bebe1e03F'; // 메타마스크 주소

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const response = await axios.get(`/api/user/profile/${walletAddress}`); // URL 경로 수정
      setProfileData({
        ...response.data,
        walletAddress, // Ensure walletAddress is included in the profile data
      });
      if (response.data.profileImage) {
        setPreviewImage(response.data.profileImage);
      }
    } catch (error) {
      console.error('Error fetching profile data:', error);
      alert('Failed to fetch profile data.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

    if (target instanceof HTMLInputElement && target.type === 'file') {
      const files = target.files;
      if (files && files.length > 0) {
        const file = files[0];
        setProfileData((prevState) => {
          const newState = {
            ...prevState,
            profileImage: file,
          };

          const reader = new FileReader();
          reader.onloadend = () => {
            setPreviewImage(reader.result as string);
          };
          reader.readAsDataURL(file);

          console.log('Updated Profile Data:', newState);
          return newState;
        });
      }
    } else if (target instanceof HTMLInputElement && target.type === 'checkbox') {
      setProfileData((prevState) => {
        const newState = {
          ...prevState,
          [target.name]: target.checked,
        };

        console.log('Updated Profile Data:', newState);
        return newState;
      });
    } else {
      setProfileData((prevState) => {
        const newState = {
          ...prevState,
          [target.name]: target.value,
        };

        console.log('Updated Profile Data:', newState);
        return newState;
      });
    }
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append('name', profileData.name);
      formData.append('email', profileData.email);
      formData.append('bio', profileData.bio);
      formData.append('expertise', profileData.expertise);
      formData.append('membershipNft', profileData.membershipNft);
      formData.append('stayUpdated', profileData.stayUpdated ? 'Y' : 'N');
      if (profileData.profileImage) {
        formData.append('profileImage', profileData.profileImage);
      }

      const response = await axios.put(`/api/user/profile/${walletAddress}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('Profile updated successfully!');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  return (
    <Container>
      <Header>Edit Profile</Header>
      <MainContent>
        <ProfileImageSection>
          <ProfileImage src={previewImage || images.profileDefaultIcon} alt="Profile" />
          <EditImageButton>
            <input type="file" name="profileImage" onChange={handleInputChange} />
            Edit Image
          </EditImageButton>
        </ProfileImageSection>
        <InputSection>
          <HorizontalGroup>
            <NameField>
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={profileData.name}
                onChange={handleInputChange}
              />
              <InputIcon src={images.editIcon2} alt="Edit" />
            </NameField>
            <MembershipNftField>
              <Label>Membership NFT</Label>
              <MembershipNftInputWrapper>
                <MembershipNftIcon src={images.openSeaIcon} alt="OpenSea Icon" />
                <MembershipNftLink href="https://opensea.io/assets/nft" target="_blank" rel="noopener noreferrer">
                  View on OpenSea
                </MembershipNftLink>
                <NoBorderInput
                  type="text"
                  name="membershipNft"
                  value={profileData.membershipNft}
                  onChange={handleInputChange}
                />
              </MembershipNftInputWrapper>
            </MembershipNftField>
          </HorizontalGroup>
          <EmailField>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={profileData.email}
              onChange={handleInputChange}
            />
            <InputIcon src={images.editIcon2} alt="Edit" />
          </EmailField>
          <WalletAddressField>
            <Label>Wallet Address</Label>
            <Input
              type="text"
              name="walletAddress"
              placeholder="Enter your wallet address"
              value={walletAddress}
              readOnly
            />
          </WalletAddressField>
          <BioField>
            <Label>Bio</Label>
            <BioInput name="bio" value={profileData.bio} onChange={handleInputChange} />
            <BioInputIcon src={images.editIcon2} alt="Edit" />
          </BioField>
          <ExpertiseField>
            <Label>Expertise</Label>
            <SelectField name="expertise" value={profileData.expertise} onChange={handleInputChange}>
              <option value="marketer">Marketer</option>
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
            </SelectField>
          </ExpertiseField>
          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              name="stayUpdated"
              checked={profileData.stayUpdated}
              onChange={handleInputChange}
            />
            <CheckboxLabel>Stay up to date with Komm DAO</CheckboxLabel>
          </CheckboxContainer>
          <ButtonGroup>
            <Button className="cancel">Cancel</Button>
            <Button className="save" onClick={handleSave}>
              Save
            </Button>
          </ButtonGroup>
        </InputSection>
      </MainContent>
    </Container>
  );
};

export default ProfileUpdate;
