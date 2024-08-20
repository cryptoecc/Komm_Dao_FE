import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Container,
  Title,
  InputWrapper,
  Label,
  Input,
  DateWrapper,
  Date,
  CommitteeList,
  CommitteeItem,
  ButtonWrapper,
  CancelButton,
  CreateButton,
  CalendarIcon,
  DateInputWrapper,
  DateInput,
  Wrap,
  Button,
  AddIcon,
  Popup,
  EllipsisText,
} from './addKommittee.style';
import Modal from 'src/components/admin/modal/Modal';
import AddMember from '../addMember/AddMember';
import calenderIcon from 'src/assets/admin/calendar_month.svg';
import addIcon from 'src/assets/admin/add.svg';
import axios from 'axios';

interface Member {
  user_id: string;
  name: string;
  wallet: string;
  avatar: string;
  added: boolean;
}

interface KommitProps {
  onClose: () => void;
}

const CustomDateInput = forwardRef(({ value, onClick, placeholder }: any, ref: any) => (
  <DateInputWrapper onClick={onClick} ref={ref}>
    <DateInput value={value} placeholder={placeholder} readOnly />
    <CalendarIcon src={calenderIcon} alt="calendar" />
  </DateInputWrapper>
));

const AddKommit: React.FC<KommitProps> = ({ onClose }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [popupContent, setPopupContent] = useState<string | null>(null);
  const [popupPosition, setPopupPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // 모달 상태 관리

  const [selectedCommittee, setSelectedCommittee] = useState<string>('');

  // 각 커미티에 대한 선택된 멤버들을 저장하는 상태
  const [treasuryMembers, setTreasuryMembers] = useState<Member[]>([]);
  const [governanceMembers, setGovernanceMembers] = useState<Member[]>([]);
  const [programMembers, setProgramMembers] = useState<Member[]>([]);

  const [treasuryMembersToRemove, setTreasuryMembersToRemove] = useState<string[]>([]);
  const [governanceMembersToRemove, setGovernanceMembersToRemove] = useState<string[]>([]);
  const [programMembersToRemove, setProgramMembersToRemove] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddMembersClick = (committee: string) => {
    setSelectedCommittee(committee);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  const handleSaveMembers = (selectedMembers: Member[], membersToRemove: string[]) => {
    if (selectedCommittee === 'Treasury') {
      setTreasuryMembers(selectedMembers);
      setTreasuryMembersToRemove(membersToRemove); // 삭제할 멤버들을 상태에 저장
    } else if (selectedCommittee === 'Governance') {
      setGovernanceMembers(selectedMembers);
      setGovernanceMembersToRemove(membersToRemove); // 삭제할 멤버들을 상태에 저장
    } else if (selectedCommittee === 'Program') {
      setProgramMembers(selectedMembers);
      setProgramMembersToRemove(membersToRemove); // 삭제할 멤버들을 상태에 저장
    }

    setIsModalOpen(false); // 모달 닫기
  };

  const handleCreate = async () => {
    if (!inputValue || !startDate || !endDate) {
      alert('모든 필수 항목을 입력해주세요.');
      return;
    }

    const data = {
      committee_name: inputValue,
      start_date: startDate,
      end_date: endDate,
      treasury_members: treasuryMembers.map((member) => member.user_id),
      governance_members: governanceMembers.map((member) => member.user_id),
      program_members: programMembers.map((member) => member.user_id),
      membersToRemove: [...treasuryMembersToRemove, ...governanceMembersToRemove, ...programMembersToRemove],
    };

    try {
      const response = await axios.post('http://localhost:4000/api/admin/create-kommittee', data);

      if (response.status === 200) {
        alert('Kommittee가 성공적으로 생성되었습니다!');
        // 성공 시 추가적인 로직 처리 가능
      } else {
        alert('Kommittee 생성 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('Error creating Kommittee', error);
      alert('Kommittee 생성 중 오류가 발생했습니다.');
    }
  };

  return (
    <Container>
      <InputWrapper>
        <Input placeholder="S1" value={inputValue} onChange={handleInputChange} />
      </InputWrapper>
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
      <CommitteeList>
        <Label>Please select a committee to edit or add members.</Label>
        <Wrap>
          <div>
            <CommitteeItem>
              <span>Treasury</span>
            </CommitteeItem>
            <CommitteeItem>
              <span>Governance</span>
            </CommitteeItem>
            <CommitteeItem>
              <span>Program</span>
            </CommitteeItem>
          </div>
          <div>
            <CommitteeItem>
              <Button onClick={() => handleAddMembersClick('Treasury')}>
                <AddIcon src={addIcon} />
                {treasuryMembers.length > 0 ? (
                  <EllipsisText>{treasuryMembers.map((member) => member.name).join(', ')}</EllipsisText>
                ) : (
                  'Add members'
                )}
              </Button>
            </CommitteeItem>
            <CommitteeItem>
              <Button onClick={() => handleAddMembersClick('Governance')}>
                <AddIcon src={addIcon} />
                {governanceMembers.length > 0 ? (
                  <EllipsisText>{governanceMembers.map((member) => member.name).join(', ')}</EllipsisText>
                ) : (
                  'Add members'
                )}
              </Button>
            </CommitteeItem>
            <CommitteeItem>
              <Button onClick={() => handleAddMembersClick('Program')}>
                <AddIcon src={addIcon} />
                {programMembers.length > 0 ? (
                  <EllipsisText>{programMembers.map((member) => member.name).join(', ')}</EllipsisText>
                ) : (
                  'Add members'
                )}
              </Button>
            </CommitteeItem>
          </div>
        </Wrap>
      </CommitteeList>
      <ButtonWrapper>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
        <CreateButton onClick={handleCreate}>Create</CreateButton>
      </ButtonWrapper>
      {popupContent && <Popup style={{ top: popupPosition.top, left: popupPosition.left }}>{popupContent}</Popup>}
      {/* 모달 컴포넌트 추가 */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Members">
        {/* 여기에 모달 내부 내용을 추가하면 됩니다. */}
        <AddMember selectedCommittee={selectedCommittee} onSave={handleSaveMembers} onClose={handleCloseModal} />
      </Modal>
    </Container>
  );
};

export default AddKommit;
