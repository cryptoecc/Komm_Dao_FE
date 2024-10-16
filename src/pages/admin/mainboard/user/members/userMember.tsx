import React, { useEffect, useState, useCallback } from 'react';
import {
  UserMemberContainer,
  Title,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  CheckboxHeader,
  Checkbox,
  Popup,
  CheckboxContainer,
  Checkmark,
} from './userMember.style';
import axios from 'axios';
import headerbox from 'src/assets/admin/headerbox.svg';
import checkbox from 'src/assets/admin/cellbox.svg';
import TopBar from 'src/components/admin/topbar/Topbar';
import checkmark from 'src/assets/admin/cell_check.svg';
import { API_BASE_URL } from 'src/utils/utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // 알림 스타일 추가

interface Member {
  user_id: number;
  user_name: string;
  email_addr: string;
  wallet_addr: string;
  expertise: string;
  bio: string;
  //   kommitte_role: string;
  kommittees: { komm_name: string }[];
  cur_xp: number;
  grade: string;
  last_login: string;
  appr_date: string;
  appr_status: string;
}

const UserMember: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [filteredMembers, setFilteredMembers] = useState<Member[]>([]);
  const [popupContent, setPopupContent] = useState<string | null>(null);
  const [popupPosition, setPopupPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

  // 검색
  const [searchTerm, setSearchTerm] = useState<string>('');

  // 체크박스
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);

  const handleMouseEnter = useCallback((content: string, e: React.MouseEvent<HTMLTableCellElement>) => {
    if (content === '~~') return;
    const rect = e.currentTarget.getBoundingClientRect();
    setPopupContent(content);
    setPopupPosition({
      top: rect.top + window.scrollY + 40, // Adjust as needed
      left: rect.left + window.scrollX + rect.width / 2,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPopupContent(null);
  }, []);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/admin/member-list`);

        const data = response.data;
        // console.log(data);
        if (data.length < 20) {
          const emptyItems = Array.from({ length: 20 - data.length }, (_, index) => ({
            user_id: `empty-${index}`,
            user_name: '~~',
            email_addr: '~~',
            wallet_addr: '~~',
            expertise: '~~',
            bio: '~~',
            kommittees: {
              komm_name: '~~',
            },
            value_add: '~~',
            reg_date: '~~',
            appr_status: '~~',
            appr_date: '~~',
          }));
          setMembers([...data, ...emptyItems]);
        } else {
          setMembers(data);
        }
      } catch (error) {
        console.error('Error fetching applicants:', error);
      }
    };

    fetchMembers();
  }, [members]);

  useEffect(() => {
    const filteredData = members.filter((members) =>
      Object.values(members).some(
        (value) => typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredMembers(filteredData);
  }, [searchTerm, members]);

  // Approve 기능
  const handleRevoke = async (user_id: number, status: string) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/admin/update-status`, { user_id, status });
      if (response.status === 200) {
        setMembers((prevMembers) =>
          prevMembers.map((member) => (member.user_id === user_id ? { ...member, appr_status: status } : member))
        );
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  // 체크박스 기능
  const handleCheckboxChange = (user_id: number) => {
    setSelectedRows((prevSelectedRows) => {
      const newSelectedRows = new Set(prevSelectedRows);
      if (newSelectedRows.has(user_id)) {
        newSelectedRows.delete(user_id);
      } else {
        newSelectedRows.add(user_id);
      }
      return newSelectedRows;
    });
  };

  const handleSelectAllChange = () => {
    if (isAllSelected) {
      setSelectedRows(new Set());
    } else {
      const allIds = new Set(members.filter((member) => member.user_name !== '~~').map((member) => member.user_id));
      setSelectedRows(allIds);
    }
    setIsAllSelected(!isAllSelected);
  };

  // 복사 기능 추가
  const handleCellClick = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      toast.success('Copied to clipboard!', {
        position: 'top-right', // 문자열로 위치를 지정합니다.
        autoClose: 1000, // 1초 후 자동으로 알림 닫힘
      });
    } catch (error) {
      toast.error('Failed to copy', {
        position: 'top-right', // 문자열로 위치를 지정합니다.
        autoClose: 1000,
      });
    }
  };

  return (
    <UserMemberContainer>
      <Title>User Mgmt {'>'} Members</Title>
      <TopBar onSearchChange={setSearchTerm} />
      <Table>
        <thead>
          <TableRow>
            <TableHeader>
              <CheckboxContainer onClick={handleSelectAllChange}>
                <Checkbox src={headerbox} alt="checkbox" />
                {isAllSelected && <Checkmark src={checkmark} alt="checkmark" />}
              </CheckboxContainer>
            </TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Wallet</TableHeader>
            <TableHeader>Expertise</TableHeader>
            <TableHeader>Bio</TableHeader>
            <TableHeader>Kommittee Role</TableHeader>
            <TableHeader>XP</TableHeader>
            <TableHeader>Grade</TableHeader>
            <TableHeader>Approval Date</TableHeader>
            <TableHeader>Last Login Date</TableHeader>
            <TableHeader>Revoke</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {filteredMembers.map((member) => (
            <TableRow key={member.user_id} $isSelected={selectedRows.has(member.user_id)}>
              <TableCell
                $isSelected={selectedRows.has(member.user_id)}
                onClick={() => handleCheckboxChange(member.user_id)}
              >
                {member.user_name !== '~~' && (
                  <CheckboxContainer>
                    <Checkbox src={checkbox} alt="checkbox" />
                    {selectedRows.has(member.user_id) && <Checkmark src={checkmark} alt="checkmark" />}
                  </CheckboxContainer>
                )}
              </TableCell>
              <TableCell
                $isSelected={selectedRows.has(member.user_id)}
                onMouseEnter={(e) => handleMouseEnter(member.user_name, e)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleCellClick(member.user_name)}
              >
                {member.user_name}
              </TableCell>
              <TableCell
                $isSelected={selectedRows.has(member.user_id)}
                onMouseEnter={(e) => handleMouseEnter(member.email_addr, e)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleCellClick(member.email_addr)}
              >
                {member.email_addr}
              </TableCell>
              <TableCell
                $isSelected={selectedRows.has(member.user_id)}
                onMouseEnter={(e) => handleMouseEnter(member.wallet_addr, e)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleCellClick(member.wallet_addr)}
              >
                {member.wallet_addr}
              </TableCell>
              <TableCell
                $isSelected={selectedRows.has(member.user_id)}
                onClick={() => handleCellClick(member.expertise)}
              >
                {member.expertise}
              </TableCell>
              <TableCell
                $isSelected={selectedRows.has(member.user_id)}
                onMouseEnter={(e) => handleMouseEnter(member.bio, e)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleCellClick(member.bio)}
              >
                {member.bio}
              </TableCell>
              <TableCell
                $isSelected={selectedRows.has(member.user_id)}
                onMouseEnter={(e) => handleMouseEnter(member.kommittees[0]?.komm_name || '~~', e)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleCellClick(member.kommittees[0].komm_name)}
              >
                {member.kommittees.length > 0 ? member.kommittees[0].komm_name : '~~'}
              </TableCell>
              <TableCell $isSelected={selectedRows.has(member.user_id)}>{member.cur_xp}</TableCell>
              <TableCell $isSelected={selectedRows.has(member.user_id)}>
                {member.grade == null ? `~~` : member.grade}
              </TableCell>
              <TableCell
                $isSelected={selectedRows.has(member.user_id)}
                onMouseEnter={(e) => handleMouseEnter(member.appr_date, e)}
                onMouseLeave={handleMouseLeave}
              >
                {member.appr_date == null ? '~~' : member.appr_date}
              </TableCell>
              <TableCell $isSelected={selectedRows.has(member.user_id)}>
                {member.last_login == null ? `~~` : member.last_login}
              </TableCell>
              <TableCell $isSelected={selectedRows.has(member.user_id)}>
                {member.appr_status === 'APPLIED' ? (
                  <>
                    <button onClick={() => handleRevoke(member.user_id, 'PENDING')}>Revoke</button>
                  </>
                ) : (
                  member.appr_status
                )}
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      {popupContent && <Popup style={{ top: popupPosition.top, left: popupPosition.left }}>{popupContent}</Popup>}
      <ToastContainer />
    </UserMemberContainer>
  );
};

export default UserMember;
