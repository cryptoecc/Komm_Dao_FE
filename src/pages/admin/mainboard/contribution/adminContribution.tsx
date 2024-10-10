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
  ConfirmBtn,
} from './adminContribution.style';
import React, { useState, useEffect } from 'react';
import headerbox from 'src/assets/admin/headerbox.svg';
import checkbox from 'src/assets/admin/cellbox.svg';
import TopBar from 'src/components/admin/topbar/Topbar';
import checkmark from 'src/assets/admin/cell_check.svg';
import Modal from 'src/components/admin/modal/Modal';
import axios from 'axios';
import AddContribution from 'src/components/admin/modal/addContribution/AddContribution';
import { API_BASE_URL } from 'src/utils/utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Contribution {
  cont_id: number;
  pjt_name: string;
  cont_type: string;
  cont_category: string;
  cont_summary: string;
  cont_desc: string;
  cont_reward: number;
  start_date: string; // 'YYYY-MM-DD' 형식으로 가정
  end_date: string; // 'YYYY-MM-DD' 형식으로 가정
  cur_participant: number;
  max_participant: number;
  cont_xp: number;
  cont_status: string;
}

const AdminContribution = () => {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [filteredContributions, setFilteredContributions] = useState<Contribution[]>([]);
  const [popupContent, setPopupContent] = useState<string | null>(null);
  const [popupPosition, setPopupPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

  // 모달
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  // 검색
  const [searchTerm, setSearchTerm] = useState<string>('');

  // 체크박스
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);

  useEffect(() => {
    // 백엔드에서 Contribution 데이터를 가져오기
    const fetchContributions = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/admin/contribution-list`);
        const data = response.data;
        console.log(data);
        if (data.length < 20) {
          const emptyItems = Array.from({ length: 20 - data.length }, (_, index) => ({
            cont_id: `empty-${index}`, // 고유한 ID를 제공하기 위해 'empty' 접두사 추가
            pjt_name: '~~',
            cont_type: '~~',
            cont_summary: '~~',
            cont_desc: '~~',
            cont_reward: 0,
            start_date: '~~',
            end_date: '~~',
            cont_xp: 0,
            cont_status: '~~',
          }));
          setContributions([...data, ...emptyItems]);
          setFilteredContributions([...data, ...emptyItems]);
        } else {
          setContributions(data);
          setFilteredContributions(data);
        }
      } catch (error) {
        console.error('Error fetching contributions:', error);
      }
    };

    fetchContributions();
  }, []);

  useEffect(() => {
    // Filter contributions based on the search term
    const filtered = contributions.filter((contribution) =>
      Object.values(contribution).some(
        (value) => typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredContributions(filtered);
  }, [searchTerm, contributions]);

  // Handle individual checkbox change
  const handleCheckboxChange = (cont_id: number) => {
    setSelectedRows((prevSelectedRows) => {
      const newSelectedRows = new Set(prevSelectedRows);
      if (newSelectedRows.has(cont_id)) {
        newSelectedRows.delete(cont_id);
      } else {
        newSelectedRows.add(cont_id);
      }
      return newSelectedRows;
    });
  };

  // Handle select all change
  const handleSelectAllChange = () => {
    if (isAllSelected) {
      setSelectedRows(new Set());
    } else {
      const allIds = new Set(filteredContributions.map((contribution) => contribution.cont_id));
      setSelectedRows(allIds);
    }
    setIsAllSelected(!isAllSelected);
  };

  // Handle confirm button click
  const handleConfirmClick = async (cont_id: number) => {
    try {
      // 백엔드로 상태 업데이트 요청
      const response = await axios.put(`${API_BASE_URL}/api/admin/contribution-status`, {
        cont_id,
        cont_status: 'APPLIED',
      });

      if (response.status === 200) {
        // 상태가 성공적으로 변경된 경우
        toast.success(`Contribution ${cont_id} has been successfully applied!`, {
          position: 'top-right',
          autoClose: 1000,
        });

        // 상태 업데이트: 변경된 상태를 바로 반영
        setFilteredContributions((prevContributions) =>
          prevContributions.map((contribution) =>
            contribution.cont_id === cont_id ? { ...contribution, cont_status: 'APPLIED' } : contribution
          )
        );
      } else {
        toast.error('Failed to update contribution status.', {
          position: 'top-right',
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.error('Error updating contribution status:', error);
      toast.error('Error updating contribution status.', {
        position: 'top-right',
        autoClose: 1000,
      });
    }
  };

  return (
    <UserMemberContainer>
      <Title>Contribution Mgmt</Title>
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
            <TableHeader>Cont. Name</TableHeader>
            <TableHeader>Cont. Category</TableHeader>
            <TableHeader>Cont. Type</TableHeader>
            <TableHeader>Start date</TableHeader>
            <TableHeader>End date</TableHeader>
            <TableHeader>Max Part.</TableHeader>
            <TableHeader>Cur Part.</TableHeader>
            <TableHeader>XP</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Performance(%)</TableHeader>
            <TableHeader>Personal XP</TableHeader>
            <TableHeader>Confirm</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {filteredContributions.map((contribution) => (
            <TableRow key={contribution.cont_id} $isSelected={selectedRows.has(contribution.cont_id)}>
              <TableCell
                $isSelected={selectedRows.has(contribution.cont_id)}
                onClick={() => handleCheckboxChange(contribution.cont_id)}
              >
                <CheckboxContainer>
                  <Checkbox src={checkbox} alt="checkbox" />
                  {selectedRows.has(contribution.cont_id) && <Checkmark src={checkmark} alt="checkmark" />}
                </CheckboxContainer>
              </TableCell>
              <TableCell $isSelected={selectedRows.has(contribution.cont_id)}>{contribution.pjt_name}</TableCell>
              <TableCell $isSelected={selectedRows.has(contribution.cont_id)}>{contribution.cont_category}</TableCell>
              <TableCell $isSelected={selectedRows.has(contribution.cont_id)}>{contribution.cont_type}</TableCell>
              <TableCell $isSelected={selectedRows.has(contribution.cont_id)}>{contribution.start_date}</TableCell>
              <TableCell $isSelected={selectedRows.has(contribution.cont_id)}>{contribution.end_date}</TableCell>
              <TableCell $isSelected={selectedRows.has(contribution.cont_id)}>{contribution.max_participant}</TableCell>
              <TableCell $isSelected={selectedRows.has(contribution.cont_id)}>{contribution.cur_participant}</TableCell>
              <TableCell $isSelected={selectedRows.has(contribution.cont_id)}>{contribution.cont_xp}</TableCell>
              <TableCell $isSelected={selectedRows.has(contribution.cont_id)}>{contribution.cont_status}</TableCell>
              <TableCell $isSelected={selectedRows.has(contribution.cont_id)}>{'~~'}</TableCell>
              <TableCell $isSelected={selectedRows.has(contribution.cont_id)}>{'~~'}</TableCell>
              <TableCell $isSelected={selectedRows.has(contribution.cont_id)}>
                {contribution.cont_status === 'PENDING' ? (
                  <ConfirmBtn onClick={() => handleConfirmClick(contribution.cont_id)}>Confirm</ConfirmBtn>
                ) : (
                  contribution.cont_status
                )}
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      {popupContent && <Popup style={{ top: popupPosition.top, left: popupPosition.left }}>{popupContent}</Popup>}
      {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Edit Contribution">

        </Modal> */}

      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="New Contribution">
        <AddContribution onCancel={() => setIsAddModalOpen(false)} />
      </Modal>
    </UserMemberContainer>
  );
};

export default AdminContribution;
