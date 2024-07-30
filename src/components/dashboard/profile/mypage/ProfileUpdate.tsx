import React, { useState } from 'react';

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

// 타입 정의
interface ProfileData {
  name: string;
  email: string;
  walletAddress: string;
  bio: string;
  expertise: string;
  membershipNft: string;
  stayUpdated: boolean; // Added this field
}

const ProfileUpdate: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'Stella',
    email: 'stella@gmail.com',
    walletAddress: '0x1234567890abcdef',
    bio: 'I work as an online markerter and my job involves writing blokg articles. ',
    expertise: 'marketer', // Default value
    membershipNft: '', // Assuming you will add this data later
    stayUpdated: true, // Dummy value, default is checked
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    // 체크박스의 경우, checked 값을 사용
    setProfileData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <Container>
      <Header>Edit Profile</Header>
      <MainContent>
        <ProfileImageSection>
          <ProfileImage src="/assets/images/profile_default.png" alt="Profile" />
          <EditImageButton>Edit Image</EditImageButton>
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
              <InputIcon src="/assets/images/edit.png" alt="Edit" />
            </NameField>
            <MembershipNftField>
              <Label>Membership NFT</Label>
              <MembershipNftInputWrapper>
                <MembershipNftIcon src="/assets/images/openSea.png" alt="OpenSea Icon" />
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
            <InputIcon src="/assets/images/edit.png" alt="Edit" />
          </EmailField>
          <WalletAddressField>
            <Label>Wallet Address</Label>
            <Input
              type="text"
              name="walletAddress"
              placeholder="Enter your wallet address"
              value={profileData.walletAddress}
              onChange={handleInputChange}
            />
          </WalletAddressField>
          <BioField>
            <Label>Bio</Label>
            <BioInput name="bio" value={profileData.bio} onChange={handleInputChange} />
            <BioInputIcon src="/assets/images/edit.png" alt="Edit" />
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
            <Button className="save">Save</Button>
          </ButtonGroup>
        </InputSection>
      </MainContent>
    </Container>
  );
};

export default ProfileUpdate;
