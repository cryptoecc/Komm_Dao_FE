import React, { useState } from 'react';
import {
  InviteModalWrapper,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  InviteForm,
  InviteButton,
  AddPersonButton,
  NickInput,
  EmailInput,
  FormInputWrapper,
  FormLabel,
  RemoveButton,
  Label,
  LabelRow,
  ButtonWrap,
  AddIconWrapper,
} from './inviteModal.style';
import { ReactComponent as AddIcon } from 'src/assets/contribution/add_circle.svg';
import axios from 'axios';
import { API_BASE_URL } from 'src/utils/utils';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store'; // Redux 스토어의 RootState 타입을 가져옵니다.

interface InviteModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: number;
}

const InviteModal: React.FC<InviteModalProps> = ({ isOpen, onClose, data }) => {
  const [members, setMembers] = useState([{ email: '', nickname: '' }]);

  const userId = useSelector((state: RootState) => state.user.user_id); // 전역 상태에서 user_id를 가져옵니다.
  console.log(userId);
  if (!isOpen) return null;

  // 멤버 추가 핸들러
  const handleAddPerson = () => {
    setMembers([...members, { email: '', nickname: '' }]);
  };

  // 멤버 삭제 핸들러 (필요한 경우)
  const handleRemovePerson = (index: number) => {
    const updatedMembers = members.filter((_, i) => i !== index);
    setMembers(updatedMembers);
  };

  const handleInvite = async () => {
    const payload = {
      cont_id: data, // ContributionDetail.tsx에서 전달받은 cont_id
      user_id: userId, // Redux 또는 session에서 가져온 user_id
      members, // [{ nickname: "", email: "" }] 형태로 보낼 예정
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/api/contribution/send-invite-email`, payload, {
        withCredentials: true,
      });

      if (response.data.success) {
        alert('Invitations sent successfully');
        onClose(); // 모달 창 닫기
      } else {
        alert('Failed to send invitations');
      }
    } catch (error) {
      console.error('Error sending invitations:', error);
      alert('An error occurred while sending invitations');
    }
  };

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Invite a New Member</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <InviteModalWrapper>
          {members.length > 0 && (
            <LabelRow>
              <Label>Nickname</Label>
              <Label style={{ marginRight: '260px' }}>Email Address</Label>
            </LabelRow>
          )}
          {members.map((member, index) => (
            <InviteForm key={index}>
              {/* <FormInputWrapper> */}

              <NickInput
                type="text"
                value={member.nickname}
                onChange={(e) => {
                  const updatedMembers = [...members];
                  updatedMembers[index].nickname = e.target.value;
                  setMembers(updatedMembers);
                }}
              />
              {/* </FormInputWrapper> */}

              {/* <FormInputWrapper> */}
              <EmailInput
                type="email"
                value={member.email}
                onChange={(e) => {
                  const updatedMembers = [...members];
                  updatedMembers[index].email = e.target.value;
                  setMembers(updatedMembers);
                }}
              />
              {/* </FormInputWrapper> */}
              {index !== 0 && <RemoveButton onClick={() => handleRemovePerson(index)}>-</RemoveButton>}
              {/* 필요하면 삭제 버튼 추가 가능 */}
            </InviteForm>
          ))}
          <ButtonWrap>
            <AddPersonButton onClick={handleAddPerson}>
              <AddIconWrapper>
                <AddIcon /> {/* SVG 아이콘을 여기에 적용 */}
                Add another person
              </AddIconWrapper>
            </AddPersonButton>
            <InviteButton onClick={handleInvite}>Invite</InviteButton>
          </ButtonWrap>
        </InviteModalWrapper>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default InviteModal;
