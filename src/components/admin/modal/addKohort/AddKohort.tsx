import React, { useState, forwardRef } from 'react';
import {
  Container,
  Title,
  ImageContainer,
  ProfileImage,
  BannerImage,
  Form,
  Input,
  Select,
  DateWrapper,
  DateInput,
  TextArea,
  AddMembersButton,
  ButtonContainer,
  CancelButton,
  CreateButton,
  EditIconContainer,
  EditIconBackground,
  EditIconForeground,
  TeamGroup,
  TeamCategory,
  DateInputWrapper,
  CalendarIcon,
  Date,
  TelInput,
  TeamInput,
  SelectedMembersContainer,
  MemberName,
  HiddenFileInput,
  PreviewImage,
} from './AddKohort.style';
import DatePicker from 'react-datepicker';
import calenderIcon from 'src/assets/admin/calendar_month.svg';
import Modal from '../Modal';
import AddMemberModal from './addMember/AddMembersModal';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store'; // Redux 스토어의 RootState 타입을 가져옵니다.

interface Member {
  user_id: string;
  name: string;
  wallet: string;
  avatar: string;
  added: boolean;
}

const CustomDateInput = forwardRef(({ value, onClick, placeholder }: any, ref: any) => (
  <DateInputWrapper onClick={onClick} ref={ref}>
    <DateInput value={value} placeholder={placeholder} readOnly />
    <CalendarIcon src={calenderIcon} alt="calendar" />
  </DateInputWrapper>
));

const AddKohort: React.FC = () => {
  const [teamName, setTeamName] = useState('');
  const [maxParticipants, setMaxParticipants] = useState('');
  const [contributionCategory, setContributionCategory] = useState('');
  const [selectedCommittee, setSelectedCommittee] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [description, setDescription] = useState('');
  const [telegramUsername, setTelegramUsername] = useState('');
  const [teamGroupChatLink, setTeamGroupChatLink] = useState('');

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [bannerImage, setBannerImage] = useState<File | null>(null);

  const [profileImagePreview, setProfileImagePreview] = useState<string | null>(null);
  const [bannerImagePreview, setBannerImagePreview] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState<Member[]>([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveMembers = (members: Member[]) => {
    setSelectedMembers(members);
    closeModal();
  };

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
      setProfileImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleBannerImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBannerImage(e.target.files[0]);
      setBannerImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const userId = useSelector((state: RootState) => state.user.user_id); // 전역 상태에서 user_id를 가져옵니다.

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('teamName', teamName);
    formData.append('maxParticipants', maxParticipants);
    formData.append('contributionCategory', contributionCategory);
    formData.append('selectedCommittee', selectedCommittee);
    formData.append('startDate', startDate ? startDate.toISOString() : '');
    formData.append('endDate', endDate ? endDate.toISOString() : '');
    formData.append('description', description);
    formData.append('telegramUsername', telegramUsername);
    formData.append('teamGroupChatLink', teamGroupChatLink);
    formData.append('leader_user_id', userId.toString());

    if (profileImage) {
      formData.append('profileImage', profileImage);
    }
    if (bannerImage) {
      formData.append('bannerImage', bannerImage);
    }

    formData.append('members', JSON.stringify(selectedMembers));

    try {
      const response = await axios.post('http://localhost:4000/api/admin/create-kohort', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Kohort created successfully', response.data);
    } catch (error) {
      console.error('Error creating Kohort', error);
    }
  };

  return (
    <Container>
      <ImageContainer>
        <ProfileImage as="label">
          {profileImagePreview && <PreviewImage src={profileImagePreview} alt="Profile Preview" />}
          <HiddenFileInput type="file" accept="image/*" onChange={handleProfileImageChange} />
          <EditIconContainer>
            <EditIconBackground>
              <EditIconForeground />
            </EditIconBackground>
          </EditIconContainer>
        </ProfileImage>
        <BannerImage as="label">
          {bannerImagePreview && <PreviewImage src={bannerImagePreview} alt="Banner Preview" />}
          <HiddenFileInput type="file" accept="image/*" onChange={handleBannerImageChange} />
          <EditIconContainer>
            <EditIconBackground>
              <EditIconForeground />
            </EditIconBackground>
          </EditIconContainer>
        </BannerImage>
      </ImageContainer>
      <Form>
        <TeamGroup>
          <Input type="text" placeholder="Team name" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
          <Input
            type="number"
            placeholder="Max Participants"
            value={maxParticipants}
            onChange={(e) => setMaxParticipants(e.target.value)}
          />
        </TeamGroup>
        <TeamCategory>
          <Select value={contributionCategory} onChange={(e) => setContributionCategory(e.target.value)}>
            <option value="" disabled>
              Contribution Category
            </option>
            <option value="Kohort">Kohort</option>
          </Select>
          <Select value={selectedCommittee} onChange={(e) => setSelectedCommittee(e.target.value)}>
            <option value="" disabled>
              Select committee
            </option>
            <option value="Governance">Governance</option>
            <option value="Treasury">Treasury</option>
            <option value="Program">Program</option>
          </Select>
        </TeamCategory>
        <DateWrapper>
          <Date>
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => setStartDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Start Date"
              customInput={<CustomDateInput />}
            />
          </Date>
          <Date>
            <DatePicker
              selected={endDate}
              onChange={(date: Date | null) => setEndDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="End Date"
              customInput={<CustomDateInput />}
            />
          </Date>
        </DateWrapper>

        <TextArea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <TelInput
          type="text"
          placeholder="Telegram Username"
          value={telegramUsername}
          onChange={(e) => setTelegramUsername(e.target.value)}
        />
        <TeamInput
          type="text"
          placeholder="Team Group Chat link"
          value={teamGroupChatLink}
          onChange={(e) => setTeamGroupChatLink(e.target.value)}
        />
      </Form>

      <ButtonContainer>
        {selectedMembers.length > 0 ? (
          <SelectedMembersContainer>
            {selectedMembers.map((member) => (
              <MemberName key={member.user_id}>{member.name}</MemberName>
            ))}
          </SelectedMembersContainer>
        ) : (
          <AddMembersButton onClick={openModal}>Add members</AddMembersButton>
        )}
        <CancelButton>Cancel</CancelButton>
        <CreateButton onClick={handleSubmit}>Create</CreateButton>
      </ButtonContainer>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Add Members">
        <AddMemberModal onClose={closeModal} onSave={handleSaveMembers} selectedCommittee={selectedCommittee} />
      </Modal>
    </Container>
  );
};

export default AddKohort;
