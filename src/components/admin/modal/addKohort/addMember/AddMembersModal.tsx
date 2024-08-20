import React, { useState, useEffect } from 'react';
import {
  Container,
  Search,
  SearchInput,
  MemberListContainer,
  MemberItem,
  MemberAvatar,
  MemberInfo,
  MemberName,
  WalletAddress,
  MemberButton,
  Header,
  HeaderItem,
  ButtonWrapper,
  SaveButton,
  CancelButton,
} from './AddMembersModal.style';

interface Member {
  user_id: string;
  name: string;
  wallet: string;
  avatar: string;
  added: boolean;
}

interface AddMemberModalProps {
  onClose: () => void;
  onSave: (members: Member[]) => void;
}

const AddMemberModal: React.FC<AddMemberModalProps> = ({ onClose, onSave }) => {
  const [members, setMembers] = useState<Member[]>([]);
  const [membersToAdd, setMembersToAdd] = useState<Member[]>([]);
  useEffect(() => {
    // 여기서 초기 멤버 데이터를 받아올 수 있습니다. 예시로서 하드코딩된 데이터를 사용합니다.
    setMembers([
      { user_id: '1', name: 'Stella', wallet: '0xf6595...e835c', avatar: '/path/to/avatar1.png', added: false },
      { user_id: '2', name: 'Allex', wallet: '0xf1231...c232c', avatar: '/path/to/avatar2.png', added: false },
      // 더 많은 멤버 추가...
    ]);
  }, []);

  const toggleMember = (index: number) => {
    const updatedMembers = [...members];
    updatedMembers[index].added = !updatedMembers[index].added;

    setMembers(updatedMembers);

    if (updatedMembers[index].added) {
      setMembersToAdd([...membersToAdd, updatedMembers[index]]);
    } else {
      setMembersToAdd(membersToAdd.filter((member) => member.user_id !== updatedMembers[index].user_id));
    }
  };

  const handleSave = () => {
    onSave(membersToAdd);
    onClose(); // Save 후 모달을 닫습니다.
  };

  return (
    <>
      <Container>
        <Search>
          <SearchInput placeholder="Search Member" />
        </Search>
        <MemberListContainer>
          <Header>
            <HeaderItem>Name</HeaderItem>
            <HeaderItem>Wallet Address</HeaderItem>
          </Header>
          {members.map((member, index) => (
            <MemberItem key={index}>
              <MemberAvatar src={member.avatar} alt={member.name} />
              <MemberInfo>
                <MemberName>{member.name}</MemberName>
                <WalletAddress>{member.wallet}</WalletAddress>
              </MemberInfo>
              <MemberButton $added={member.added} onClick={() => toggleMember(index)}>
                {member.added ? 'Remove' : 'Add'}
              </MemberButton>
            </MemberItem>
          ))}
        </MemberListContainer>
        <ButtonWrapper>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <SaveButton onClick={handleSave}>Save</SaveButton>
        </ButtonWrapper>
      </Container>
    </>
  );
};

export default AddMemberModal;
