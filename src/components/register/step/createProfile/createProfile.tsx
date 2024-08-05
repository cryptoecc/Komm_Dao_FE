import React, { useState } from 'react';
import Select, { SingleValue, components, OptionProps, InputProps, GroupBase } from 'react-select';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from 'src/store/user/UserSlice';
import ArrowDown from 'src/assets/register/arrow_drop_down.svg';
import ArrowUp from 'src/assets/register/arrow_drop_up.svg';
import {
  Text,
  SubText,
  Form,
  FormGroup,
  // Select,
  Input,
  TextArea,
  Counter,
  CheckboxWrapper,
  Checkbox,
  Label,
  SaveButton,
  EditIcon,
  EditIconWrapper,
  ProfileImage,
  ProfileContainer,
  ProfileImageWrapper,
  // SelectWrapper,
  ErrorMessage,
  CheckboxLabel,
  CustomCheckbox,
} from './createProfile.style';
import smileIcon from 'src/assets/register/smileIcon.svg';
import editIcon from 'src/assets/register/editIcon.svg';
import { RootState } from 'src/store/store';

interface StepProps {
  onComplete: () => void;
  setSelectedImage: (file: File | null) => void;
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
  { value: 'Other', label: 'Headhunter' },
];

const customStyles = (isFocused: boolean) => ({
  control: (provided: any, state: any) => ({
    ...provided,
    width: '400px',
    height: '60px',
    marginLeft: '50px',
    padding: '10px',
    borderRadius: state.menuIsOpen ? '10px 10px 0 0' : '10px',
    borderTop: '1px solid rgba(0, 0, 0, 0.5)',
    borderLeft: '1px solid rgba(0, 0, 0, 0.5)',
    borderRight: '1px solid rgba(0, 0, 0, 0.5)',
    borderBottom: state.menuIsOpen ? 'none' : '1px solid rgba(0, 0, 0, 0.5)',
    backgroundColor: '#f8f8fa',
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: 'normal',
    color: 'rgba(0, 0, 0, 0.5)',
    boxShadow: 'none', // 선택했을 때 파란색 테두리 없애기
    borderColor: state.menuIsOpen ? '#8E63FF' : 'rgba(0, 0, 0, 0.5)', // 선택했을 때 파란색 테두리 없애기
    '&:hover': {
      borderColor: 'rgba(0, 0, 0, 0.5)',
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    width: '400px',
    marginLeft: '50px',
    padding: '5px',
    borderRadius: '0 0 10px 10px',
    border: '1px solid rgba(0, 0, 0, 0.5)',
    backgroundColor: '#f8f8fa',
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: 'normal',
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: '0px',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: 'normal',
    color: '#000',
    backgroundColor: '#f8f8fa',
    '&:hover': {
      backgroundColor: 'rgba(142, 99, 255, 0.1)',
    },
  }),
  singleValue: (provided: any) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: 'normal',
    color: '#000',
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

const CustomOption = (props: OptionProps<OptionType>) => {
  return (
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
};
const CustomInput = (props: InputProps<OptionType, false, GroupBase<OptionType>>) => (
  <components.Input {...props} isHidden />
);

const CreateProfile: React.FC<StepProps> = ({ onComplete, setSelectedImage }) => {
  const dispatch = useDispatch();
  const [expertise, setExpertise] = useState<SingleValue<OptionType>>(null);
  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');
  const [bioLength, setBioLength] = useState(0);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [displayNameError, setDisplayNameError] = useState('');
  const [bioError, setBioError] = useState('');
  const [isSelectFocused, setIsSelectFocused] = useState(false);
  const [isSubscribedError, setIsSubscribedError] = useState('');
  // const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

  const handleSave = async () => {
    const displayNamePattern = /^[a-zA-Z0-9가-힣\s]+$/;
    if (!displayName || !displayNamePattern.test(displayName)) {
      setDisplayNameError('Please enter a valid display name (letters, numbers, and spaces only).');
      return;
    }

    if (bioLength < 50) {
      setBioError('Bio must be at least 50 characters long.');
      return;
    }

    if (!isSubscribed) {
      setIsSubscribedError('Please subscribe to stay up to date with Komm DAO.');
      return;
    }

    if (expertise && 'value' in expertise) {
      dispatch(setUserData({ expertise: expertise.value, user_name: displayName, bio }));
    }

    // if (selectedImage) {
    //   dispatch(
    //     setUserData({
    //       user_image_preview: URL.createObjectURL(selectedImage),
    //       user_image_link: selectedImage,
    //     })
    //   );
    // }

    onComplete();
  };

  const handleDisplayNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayName(e.target.value);
    setDisplayNameError('');
  };

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
    setBioLength(e.target.value.length);
    setBioError('');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    console.log(file);
    setSelectedImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreviewUrl(result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreviewUrl(null);
    }
  };

  return (
    <div>
      <Text>You're almost done</Text>
      <SubText>
        Please select one of the following roles and fill out
        <br />
        your profile information to Finish up.
        <br />
        You can change your role later.
      </SubText>
      <ProfileContainer>
        <Form>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
            <ProfileImageWrapper
              $backgroundImage={imagePreviewUrl}
              onClick={() => document.getElementById('file-input')?.click()}
            >
              {!imagePreviewUrl && <ProfileImage src={smileIcon} alt="Profile" />}
              {/* {imagePreviewUrl && <ProfileImage src={imagePreviewUrl} alt="Profile" />} */}
              <EditIconWrapper onClick={(e) => e.stopPropagation()}>
                <label htmlFor="file-input">
                  <EditIcon src={editIcon} alt="Edit" />
                </label>
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleImageChange}
                />
              </EditIconWrapper>
            </ProfileImageWrapper>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '30px' }}>
              <FormGroup>
                <Select
                  value={expertise}
                  onChange={(selectedOption) => setExpertise(selectedOption as SingleValue<OptionType>)}
                  options={expertiseOptions}
                  styles={customStyles(isSelectFocused)}
                  components={{ Option: CustomOption, Input: CustomInput }}
                  placeholder="Select your expertise"
                  isSearchable={false} // 텍스트 입력 기능 비활성화
                  onFocus={() => setIsSelectFocused(true)}
                  onBlur={() => setIsSelectFocused(false)}
                />
              </FormGroup>
              <FormGroup>
                <Input type="text" placeholder="Display name" value={displayName} onChange={handleDisplayNameChange} />
                {displayNameError && <ErrorMessage>{displayNameError}</ErrorMessage>}
              </FormGroup>
            </div>
          </div>
          <FormGroup>
            <TextArea
              placeholder="Bio (Please write at least 50 characters, including spaces)"
              value={bio}
              onChange={handleBioChange}
            />
            {bioError && <ErrorMessage>{bioError}</ErrorMessage>}
            <Counter>{bioLength}/200</Counter>
          </FormGroup>
          <CheckboxWrapper>
            <CheckboxLabel>
              <Checkbox type="checkbox" checked={isSubscribed} onChange={(e) => setIsSubscribed(e.target.checked)} />
              <CustomCheckbox />
              <Label>Stay up to date with Komm DAO</Label>
            </CheckboxLabel>
          </CheckboxWrapper>
          {isSubscribedError && <ErrorMessage>{isSubscribedError}</ErrorMessage>}
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <SaveButton onClick={handleSave}>Save</SaveButton>
          </div>
        </Form>
        {/* <button onClick={onComplete}>Save÷÷??</button> */}
      </ProfileContainer>
    </div>
  );
};

export default CreateProfile;
