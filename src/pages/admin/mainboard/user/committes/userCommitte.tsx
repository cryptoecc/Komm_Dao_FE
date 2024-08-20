import React, { useEffect, useState, useCallback } from 'react';
import Modal from 'src/components/admin/modal/Modal';
import EditKommit from 'src/components/admin/modal/editKommittee/EditKommittee';
import AddKommit from 'src/components/admin/modal/addKommittee/addKommittee';
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
} from './userCommitte.style';
import axios from 'axios';
import headerbox from 'src/assets/admin/headerbox.svg';
import checkbox from 'src/assets/admin/cellbox.svg';
import TopBar from 'src/components/admin/topbar/Topbar';
import checkmark from 'src/assets/admin/cell_check.svg';

interface Committee {
  komm_ver: string;
  komm_name: string;
  user: {
    user_id: number;
    user_name: string;
    wallet_addr: string;
  };
  start_date: string;
  end_date: string;
  kommitte_role: string;
}

const UserCommitte: React.FC = () => {
  const [Kommittees, setKommittees] = useState<Committee[]>([]);
  const [filteredKommittees, setFilteredKommittees] = useState<Committee[]>([]);
  const [popupContent, setPopupContent] = useState<string | null>(null);
  const [popupPosition, setPopupPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

  // 모달
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // 모달 상태 관리
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false); // Add Members 모달 상태 관리

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

  useEffect(() => {
    const fetchKommittees = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/admin/kommittee-list');
        const data = response.data;

        if (data.length < 20) {
          const emptyItems = Array.from({ length: 20 - data.length }, (_, index) => ({
            komm_ver: `~~`,
            komm_name: `~~`,
            user: {
              user_id: `empty-${index}`,
              user_name: `~~`,
              wallet_addr: `~~`,
            },
            start_date: `~~`,
            end_date: `~~`,
          }));
          setKommittees([...data, ...emptyItems]);
        } else {
          setKommittees(data);
        }
      } catch (error) {
        console.error('Error fetching applicants:', error);
      }
    };

    fetchKommittees();
  }, []);

  useEffect(() => {
    const filteredData = Kommittees.filter((Kommittees) =>
      Object.values(Kommittees).some(
        (value) => typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredKommittees(filteredData);
  }, [searchTerm, Kommittees]);

  // Approve 기능
  //   const handleRevoke = async (user_id: number, status: string) => {
  //     try {
  //       const response = await axios.post('http://localhost:4000/api/admin/update-status', { user_id, status });
  //       if (response.status === 200) {
  //         setKommittees((prevCommittees) =>
  //           prevCommittees.map((kommittee) =>
  //             kommittee.user_id === user_id ? { ...kommittee, appr_status: status } : kommittee
  //           )
  //         );
  //       }
  //     } catch (error) {
  //       console.error('Error updating status:', error);
  //     }
  //   };

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
      const allIds = new Set(
        Kommittees.filter((kommittee) => kommittee.user.user_name !== '~~').map((kommittee) => kommittee.user.user_id)
      );
      setSelectedRows(allIds);
    }
    setIsAllSelected(!isAllSelected);
  };

  return (
    <UserMemberContainer>
      <Title>User Mgmt {'>'} K-ommittees</Title>
      <TopBar
        onSearchChange={setSearchTerm}
        onEditClick={() => setIsModalOpen(true)}
        onAddClick={() => setIsAddModalOpen(true)}
      />
      <Table>
        <thead>
          <TableRow>
            <TableHeader>
              <CheckboxContainer onClick={handleSelectAllChange}>
                <Checkbox src={headerbox} alt="checkbox" />
                {isAllSelected && <Checkmark src={checkmark} alt="checkmark" />}
              </CheckboxContainer>
            </TableHeader>
            <TableHeader>Komm_Ver</TableHeader>
            <TableHeader>Komm_Name</TableHeader>
            <TableHeader>User Name</TableHeader>
            <TableHeader>Wallet address</TableHeader>
            <TableHeader>Start date</TableHeader>
            <TableHeader>End date</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {filteredKommittees.map((kommittee) => (
            <TableRow key={kommittee.user.user_id} $isSelected={selectedRows.has(kommittee.user.user_id)}>
              <TableCell
                $isSelected={selectedRows.has(kommittee.user.user_id)}
                onClick={() => handleCheckboxChange(kommittee.user.user_id)}
              >
                {kommittee.user.user_name !== '~~' && (
                  <CheckboxContainer>
                    <Checkbox src={checkbox} alt="checkbox" />
                    {selectedRows.has(kommittee.user.user_id) && <Checkmark src={checkmark} alt="checkmark" />}
                  </CheckboxContainer>
                )}
              </TableCell>
              <TableCell $isSelected={selectedRows.has(kommittee.user.user_id)}>{kommittee.komm_ver}</TableCell>
              <TableCell $isSelected={selectedRows.has(kommittee.user.user_id)}>{kommittee.komm_name}</TableCell>
              <TableCell $isSelected={selectedRows.has(kommittee.user.user_id)}>{kommittee.user.user_name}</TableCell>
              <TableCell $isSelected={selectedRows.has(kommittee.user.user_id)}>{kommittee.user.wallet_addr}</TableCell>
              <TableCell $isSelected={selectedRows.has(kommittee.user.user_id)}>{kommittee.start_date}</TableCell>
              <TableCell $isSelected={selectedRows.has(kommittee.user.user_id)}>{kommittee.end_date}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      {popupContent && <Popup style={{ top: popupPosition.top, left: popupPosition.left }}>{popupContent}</Popup>}
      {/* 모달 컴포넌트 추가 */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Edit Members">
        {/* 여기에 모달 내부 내용을 추가하면 됩니다. */}
        <EditKommit onSearchChange={setSearchTerm} />
      </Modal>

      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="New Kommittees">
        {/* 여기에 Add 모달 내부 내용을 추가하면 됩니다. */}
        <AddKommit onClose={() => setIsAddModalOpen(false)} />
      </Modal>
    </UserMemberContainer>
  );
};

export default UserCommitte;
