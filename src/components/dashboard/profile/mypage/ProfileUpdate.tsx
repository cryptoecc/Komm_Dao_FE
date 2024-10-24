import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select, { components, OptionProps, InputProps, GroupBase } from 'react-select';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
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
  NoBorderInput,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
  InputIcon,
  BioInputIcon,
  BioInput,
  NameInput,
  Checkbox2,
  CustomCheckbox,
} from './ProfileUpdate.style';
import ArrowDown from 'src/assets/register/arrow_drop_down.svg';
import ArrowUp from 'src/assets/register/arrow_drop_up.svg';
import { images } from '../../../../assets/dashboard/images';
import { API_BASE_URL } from 'src/utils/utils';
import Modal from 'src/components/admin/modal/common/Modal';
import AddEmail from 'src/components/register/step/addEmail/addEmail';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

interface ProfileData {
  name: string;
  email: string;
  walletAddress: string;
  bio: string;
  expertise: string;
  membershipNft: string;
  stayUpdated: boolean;
  profileImage?: string | File | null;
}

interface OptionType {
  value: string;
  label: string;
}

const expertiseOptions: OptionType[] = [
  { value: 'Investor', label: 'Investor' },
  { value: 'Researcher', label: 'Researcher' },
  { value: 'Developer', label: 'Developer' },
  { value: 'Marketer', label: 'Marketer' },
  { value: 'Designer', label: 'Designer' },
  { value: 'Lawyer', label: 'Law & Accounting' },
  { value: 'Headhunter', label: 'Headhunter' },
];

const customStyles = (isFocused: boolean) => ({
  control: (provided: any, state: any) => ({
    ...provided,
    width: '100%',
    height: '60px',
    borderRadius: state.menuIsOpen ? '20px 20px 0 0' : '20px',
    border: '1px solid #858585',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: 'normal',
    color: '#404040',
    boxShadow: 'none',
    borderColor: state.menuIsOpen ? '#8E63FF' : 'rgba(0, 0, 0, 0.5)',
    '&:hover': {
      borderColor: 'rgba(0, 0, 0, 0.5)',
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    width: '100%',
    padding: '5px',
    borderRadius: '0 0 10px 10px',
    border: '1px solid #858585',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 'normal',
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: '0px',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 'normal',
    color: '#404040',
    '&:hover': {
      backgroundColor: 'rgba(142, 99, 255, 0.1)',
    },
  }),
  singleValue: (provided: any) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: 'normal',
    color: '#404040',
  }),
  indicatorSeparator: (provided: any) => ({
    display: 'none',
  }),
  dropdownIndicator: (provided: any, state: any) => ({
    ...provided,
    color: '#fff',
    background: `url(${state.selectProps.menuIsOpen ? ArrowUp : ArrowDown}) no-repeat center`,
    width: '24px',
    height: '24px',
    pointerEvents: 'none',
  }),
});

const CustomOption = (props: OptionProps<any>) => (
  <components.Option {...props}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: props.isSelected ? '#8E63FF' : '#E0E0E0',
          marginRight: '20px',
        }}
      />
      {props.label}
    </div>
  </components.Option>
);

const CustomInput = (props: InputProps<any, false, GroupBase<any>>) => <components.Input {...props} isHidden />;

const ProfileUpdate: React.FC = () => {
  const navigate = useNavigate(); // useNavigate 추가
  const user = useSelector((state: RootState) => state.user);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: '',
    email: '',
    walletAddress: '',
    bio: '',
    expertise: 'Marketer',
    membershipNft: '',
    stayUpdated: false,
    profileImage: null,
  });
  const [previewImage, setPreviewImage] = useState<string | undefined>(undefined);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  useEffect(() => {
    const persistedRoot = localStorage.getItem('persist:root');
    if (persistedRoot) {
      try {
        const parsedData = JSON.parse(persistedRoot);
        const walletAddress = JSON.parse(parsedData.wallet_addr);
        const email = parsedData?.email_addr || '';
        setProfileData((prevState) => ({
          ...prevState,
          walletAddress,
          email,
        }));
        fetchProfileData(walletAddress);
      } catch (error) {
        console.error('Error parsing persisted root data:', error);
      }
    } else {
      console.error('persist:root not found in localStorage');
    }
  }, []);

  const fetchProfileData = async (address: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/user/profile/${address}`);
      setProfileData({
        ...response.data,
        walletAddress: address,
      });
      if (response.data.profileImage) {
        setPreviewImage(`${API_BASE_URL}/${response.data.profileImage}`);
      }
    } catch (error) {
      console.error('Error fetching profile data:', error);

      setProfileData({
        name: 'Default Name',
        email: 'default@example.com',
        walletAddress: address,
        bio: 'This is a default bio.',
        expertise: 'Marketer',
        membershipNft: '',
        stayUpdated: true,
        profileImage: null,
      });
      setPreviewImage(images.profileDefaultIcon);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

    if (target instanceof HTMLInputElement && target.type === 'file') {
      const files = target.files;
      if (files && files.length > 0) {
        const file = files[0];
        setProfileData((prevState) => ({
          ...prevState,
          profileImage: file,
        }));

        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImage(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    } else if (target instanceof HTMLInputElement && target.type === 'checkbox') {
      setProfileData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setProfileData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handleSave = async () => {
    if (!profileData.walletAddress) {
      alert('Wallet address is missing.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', profileData.name);
      formData.append('email', user.email_addr);
      formData.append('bio', profileData.bio);
      formData.append('expertise', profileData.expertise);
      formData.append('membershipNft', profileData.membershipNft);
      formData.append('stayUpdated', profileData.stayUpdated ? 'Y' : 'N');
      if (profileData.profileImage instanceof File) {
        formData.append('profileImage', profileData.profileImage);
      }

      const response = await axios.put(`${API_BASE_URL}/api/user/profile/${profileData.walletAddress}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('Profile updated successfully!');
        if (response.data.profileImage) {
          setPreviewImage(`${API_BASE_URL}/${response.data.profileImage}`);
        }
        navigate(-1); // 프로필이 성공적으로 업데이트되면 이전 페이지로 이동
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  const handleCancel = () => {
    navigate(-1); // 'Cancel' 버튼 클릭 시 이전 페이지로 이동
  };

  const handleEmailClick = () => {
    setIsEmailModalOpen(true);
  };

  const handleCloseEmailModal = () => {
    setIsEmailModalOpen(false);
  };

  const updateEmail = (newEmail: string) => {
    setProfileData((prevState) => ({
      ...prevState,
      email: newEmail,
    }));
  };

  return (
    <Container>
      <Header>Edit Profile</Header>
      <MainContent>
        <ProfileImageSection>
          <ProfileImage src={previewImage || images.profileDefaultIcon} alt="Profile" />
          <EditImageButton>
            <input type="file" name="profileImage" onChange={handleInputChange} />
            <img src={images.edit_black} alt="Edit" />
          </EditImageButton>
        </ProfileImageSection>
        <InputSection>
          <HorizontalGroup>
            <NameField>
              <Label>Name</Label>
              <NameInput
                type="text"
                name="name"
                placeholder="Enter your name"
                value={profileData.name}
                onChange={handleInputChange}
              />
              <InputIcon src={images.edit_black} alt="Edit" />
            </NameField>
            {/* <MembershipNftField>
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
            </MembershipNftField> */}
          </HorizontalGroup>
          <EmailField>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={user.email_addr}
              onClick={handleEmailClick}
              readOnly
            />
            <InputIcon src={images.edit_black} alt="Edit" />
          </EmailField>
          <Modal isOpen={isEmailModalOpen} onClose={handleCloseEmailModal}>
            <AddEmail onComplete={handleCloseEmailModal} fromProfileUpdate={true} onUpdateEmail={updateEmail} />
          </Modal>
          <WalletAddressField>
            <Label>Wallet Address</Label>
            <Input type="text" name="walletAddress" value={profileData.walletAddress} readOnly />
          </WalletAddressField>
          <BioField>
            <Label>Bio</Label>
            <BioInput name="bio" value={profileData.bio} onChange={handleInputChange} />
            <BioInputIcon src={images.edit_black} alt="Edit" />
          </BioField>
          <HorizontalGroup>
            <ExpertiseField>
              <Label>Expertise</Label>
              <Select
                value={{ value: profileData.expertise, label: profileData.expertise }}
                onChange={(selectedOption) =>
                  setProfileData((prevState) => ({
                    ...prevState,
                    expertise: (selectedOption as OptionType).value,
                  }))
                }
                options={expertiseOptions}
                styles={customStyles(false)}
                components={{ Option: CustomOption, Input: CustomInput }}
                placeholder="Select your expertise"
                isSearchable={false}
              />
            </ExpertiseField>
            {/* <CheckboxContainer>
              <CheckboxLabel htmlFor="subscribe-checkbox">
                <Checkbox2
                  id="subscribe-checkbox" 
                  type="checkbox"
                  checked={isSubscribed}
                  onChange={(e) => setIsSubscribed(e.target.checked)}
                />
                <CustomCheckbox /> 
                Stay up to date with Komm DAO
              </CheckboxLabel>
            </CheckboxContainer> */}
          </HorizontalGroup>
          <ButtonGroup>
            <Button className="cancel" onClick={handleCancel}>
              {' '}
              {/* Cancel 버튼에 핸들러 추가 */}
              Cancel
            </Button>
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
