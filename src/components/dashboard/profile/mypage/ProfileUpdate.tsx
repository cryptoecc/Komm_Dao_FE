import React from 'react';
import {
  Container,
  Header,
  MainContent,
  ProfileImageSection,
  ProfileImage,
  EditImageButton,
  InputSection,
  HorizontalGroup,
  InputField,
  Label,
  Input,
  ButtonGroup,
  Button,
  MembershipNftInputWrapper,
  MembershipNftIcon,
  MembershipNftLink,
} from './ProfileUpdate.style';

const ProfileUpdate: React.FC = () => {
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
            <InputField>
              <Label>Name</Label>
              <Input type="text" placeholder="Enter your name" />
            </InputField>
            <InputField>
              <Label>Membership NFT</Label>
              <MembershipNftInputWrapper>
                <MembershipNftIcon src="/assets/images/openSea.png" alt="OpenSea Icon" />
                <MembershipNftLink href="https://opensea.io/assets/nft" target="_blank" rel="noopener noreferrer">
                  View on OpenSea
                </MembershipNftLink>
                <Input type="text" />
              </MembershipNftInputWrapper>
            </InputField>
          </HorizontalGroup>
          <InputField>
            <Label>Email</Label>
            <Input type="email" placeholder="Enter your email" />
          </InputField>
          <InputField>
            <Label>Wallet Address</Label>
            <Input type="text" placeholder="Enter your wallet address" />
          </InputField>
          <InputField>
            <Label>Bio</Label>
            <Input type="text" placeholder="Enter a short bio" />
          </InputField>
          <InputField>
            <Label>Role</Label>
            <select>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="viewer">Viewer</option>
            </select>
          </InputField>
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
