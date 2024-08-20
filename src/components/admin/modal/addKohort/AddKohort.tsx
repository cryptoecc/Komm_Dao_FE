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
} from './AddKohort.style';
import DatePicker from 'react-datepicker';
import calenderIcon from 'src/assets/admin/calendar_month.svg';
import Modal from '../Modal';
import AddMemberModal from './addMember/AddMembersModal';

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveMembers = (members: any) => {
    // 멤버 추가 로직을 여기서 처리합니다.
    console.log('Selected members:', members);
  };

  return (
    <Container>
      <ImageContainer>
        <ProfileImage>
          <EditIconContainer>
            <EditIconBackground>
              <EditIconForeground />
            </EditIconBackground>
          </EditIconContainer>
        </ProfileImage>
        <BannerImage>
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
        <AddMembersButton onClick={openModal}>Add members</AddMembersButton>
        <CancelButton>Cancel</CancelButton>
        <CreateButton>Create</CreateButton>
      </ButtonContainer>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Add Members">
        <AddMemberModal onClose={closeModal} onSave={handleSaveMembers} />
      </Modal>
    </Container>
  );
};

export default AddKohort;
