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
  ErrorMessage,
} from './inviteModal.style';
import { ReactComponent as AddIcon } from 'src/assets/contribution/add_circle.svg';
import axios from 'axios';
import { API_BASE_URL } from 'src/utils/utils';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store'; // Redux 스토어의 RootState 타입을 가져옵니다.
import Spinner from '../spinner/Spinner';

interface InviteModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: number;
}

const InviteModal: React.FC<InviteModalProps> = ({ isOpen, onClose, data }) => {
  const [members, setMembers] = useState([{ email: '', nickname: '' }]);
  const [duplicateEmails, setDuplicateEmails] = useState<string[]>([]); // 중복 이메일 저장
  const [errorMessage, setErrorMessage] = useState<string>(''); // 에러 메시지 저장
  const [isLoading, setIsLoading] = useState<boolean>(false); // 로딩 상태 추가

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
    setIsLoading(true);
    const emails = members.map((member) => member.email); // 모든 이메일을 배열로 저장
    setErrorMessage(''); // 에러 메시지 초기화

    // 이메일 중복 체크 API 호출
    try {
      const checkResponse = await axios.post(`${API_BASE_URL}/api/contribution/check-duplicate-emails`, { emails });
      const { existingEmails } = checkResponse.data;

      if (existingEmails.length > 0) {
        // 중복 이메일이 있을 경우
        setDuplicateEmails(existingEmails);
        setErrorMessage(`The following emails are already applied: ${existingEmails.join(', ')}`);
        return; // 초대 진행 중단
      }

      // 중복 이메일이 없으면 초대 진행
      const payload = {
        cont_id: data,
        user_id: userId,
        members,
      };

      const inviteResponse = await axios.post(`${API_BASE_URL}/api/contribution/send-invite-email`, payload, {
        withCredentials: true,
      });

      if (inviteResponse.data.success) {
        alert('Invitations sent successfully');
        onClose(); // 모달 닫기
      } else {
        alert('Failed to send invitations');
      }
    } catch (error) {
      console.error('Error sending invitations:', error);
      setErrorMessage('An error occurred while sending invitations');
    } finally {
      setIsLoading(false); // 로딩 상태 종료
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
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>} {/* 에러 메시지 표시 */}
          <ButtonWrap>
            <AddPersonButton onClick={handleAddPerson}>
              <AddIconWrapper>
                <AddIcon /> {/* SVG 아이콘을 여기에 적용 */}
                Add another person
              </AddIconWrapper>
            </AddPersonButton>
            <InviteButton onClick={handleInvite} disabled={isLoading}>
              {isLoading ? <Spinner /> : 'Invite'} {/* 로딩 중일 때 Spinner 표시 */}
            </InviteButton>
          </ButtonWrap>
        </InviteModalWrapper>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default InviteModal;
