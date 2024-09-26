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
} from './AddMember.style';
import axios from 'axios';
import { API_BASE_URL } from 'src/utils/utils';

interface KommitProps {
  selectedCommittee: string;
  onSave: (selectedMembers: Member[], membersToRemove: string[]) => void;
  onClose: () => void;
  //   onSearchChange: (value: string) => void;
}

interface Member {
  user_id: string;
  name: string;
  wallet: string;
  avatar: string;
  added: boolean;
}

const AddMember: React.FC<KommitProps> = ({ selectedCommittee, onSave, onClose }) => {
  const [members, setMembers] = useState<Member[]>([]);
  const [membersToRemove, setMembersToRemove] = useState<string[]>([]); // 삭제할 멤버 추적
  const [membersToAdd, setMembersToAdd] = useState<string[]>([]); // 추가할 멤버 추적

  useEffect(() => {
    // selectedCommittee에 따라 멤버 리스트를 가져옴
    const fetchMembers = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/admin/add-kommittee?selectedCommittee=${selectedCommittee}`
        );

        console.log(response.data);
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

  const toggleMember = (index: any) => {
    const updatedMembers = [...members];
    updatedMembers[index].added = !updatedMembers[index].added;

    // // 만약 멤버가 Remove로 설정되면, 삭제 목록에 추가
    // if (!updatedMembers[index].added) {
    //   setMembersToRemove((prev) => [...prev, updatedMembers[index].user_id]);
    // } else {
    //   // Add로 다시 변경된 경우 삭제 목록에서 제거
    //   setMembersToRemove((prev) => prev.filter((id) => id !== updatedMembers[index].user_id));
    // }

    if (updatedMembers[index].added) {
      // 멤버가 Add 상태로 변경되면 membersToAdd에 추가하고 membersToRemove에서 제거
      setMembersToAdd((prev) => [...prev, updatedMembers[index].user_id]);
      setMembersToRemove((prev) => prev.filter((id) => id !== updatedMembers[index].user_id));
    } else {
      // 멤버가 Remove 상태로 변경되면 membersToRemove에 추가하고 membersToAdd에서 제거
      setMembersToRemove((prev) => [...prev, updatedMembers[index].user_id]);
      setMembersToAdd((prev) => prev.filter((id) => id !== updatedMembers[index].user_id));
    }

    setMembers(updatedMembers);
    console.log(members);
  };

  // const handleSave = () => {
  //   const selectedMembers = members.filter((member) => member.added && !membersToRemove.includes(member.user_id));
  //   onSave(selectedMembers, membersToRemove); // selectedMembers는 Member[] 타입
  // };

  const handleSave = () => {
    const selectedMembers = members.filter(
      (member) => membersToAdd.includes(member.user_id) || membersToRemove.includes(member.user_id)
    );
    onSave(selectedMembers, membersToRemove);
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

export default AddMember;
