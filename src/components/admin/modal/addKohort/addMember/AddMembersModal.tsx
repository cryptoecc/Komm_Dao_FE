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
import axios from 'axios';
import { API_BASE_URL } from 'src/utils/utils';

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
  selectedCommittee: string;
}

const AddMemberModal: React.FC<AddMemberModalProps> = ({ onClose, onSave, selectedCommittee }) => {
  const [members, setMembers] = useState<Member[]>([]);
  const [membersToAdd, setMembersToAdd] = useState<Member[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // selectedCommittee에 따라 멤버 리스트를 가져옴
    const fetchMembers = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/admin/addmemberlist?selectedCommittee=${selectedCommittee}`
        );

        if (Array.isArray(response.data)) {
          setMembers(
            response.data.map((member: any) => ({
              user_id: member.user_id,
              name: member.user_name,
              wallet: `${member.wallet_addr.slice(0, 7)}...${member.wallet_addr.slice(-5)}`, // Wallet Address 형식 조정,
              avatar: `${API_BASE_URL}/${member.user_image_link}`,
              added: member.added, // 백엔드에서 추가된 상태로 제공되는 added 값을 그대로 사용
            }))
          );
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (error) {
        console.error('Error fetching members', error);
      }
    };

    fetchMembers();
  }, [selectedCommittee]);

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
