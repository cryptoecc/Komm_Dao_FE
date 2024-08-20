import {
  UserKohortContainer,
  Title,
  // TopBar,
  Table,
  TableRow,
  TableHeader,
  TableCell,
  CheckboxContainer,
  Checkbox,
  Checkmark,
} from './userKohort.style';
import React, { useState, useEffect } from 'react';

import headerbox from 'src/assets/admin/headerbox.svg';
import checkbox from 'src/assets/admin/cellbox.svg';
import TopBar from 'src/components/admin/topbar/Topbar';
import checkmark from 'src/assets/admin/cell_check.svg';
import Modal from 'src/components/admin/modal/Modal';
import AddKohort from 'src/components/admin/modal/addKohort/AddKohort';
import axios from 'axios';

const UserKohort = () => {
  // 검색
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [kohorts, setKohorts] = useState<any[]>([]); // Kohorts 데이터를 담을 상태
  const [filteredKohorts, setFilteredKohorts] = useState<any[]>([]);

  // 모달
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // 모달 상태 관리

  // 체크박스
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);

  useEffect(() => {
    // 데이터 가져오기
    const fetchKohorts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/admin/kohort-list');
        setKohorts(response.data);
      } catch (error) {
        console.error('Error fetching kohorts:', error);
      }
    };

    fetchKohorts();
  }, []);

  useEffect(() => {
    // 검색어로 필터링
    const filteredData = kohorts.filter((kohort) =>
      Object.values(kohort).some(
        (value) => typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredKohorts(filteredData);
  }, [searchTerm, kohorts]);

  // 체크박스 기능
  const handleCheckboxChange = (kohort_id: number) => {
    setSelectedRows((prevSelectedRows) => {
      const newSelectedRows = new Set(prevSelectedRows);
      if (newSelectedRows.has(kohort_id)) {
        newSelectedRows.delete(kohort_id);
      } else {
        newSelectedRows.add(kohort_id);
      }
      return newSelectedRows;
    });
  };

  const handleSelectAllChange = () => {
    if (isAllSelected) {
      setSelectedRows(new Set());
    } else {
      const allIds = new Set(kohorts.map((kohort) => kohort.kohort_id));
      setSelectedRows(allIds);
    }
    setIsAllSelected(!isAllSelected);
  };

  // Add Click 핸들러: 모달을 열도록 설정
  const handleAddClick = () => {
    setIsModalOpen(true); // 모달을 열기
  };

  // 모달 닫기 핸들러
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <UserKohortContainer>
      <Title>User Mgmt {'>'} K-ohorts</Title>
      <TopBar
        onSearchChange={setSearchTerm} // 검색어가 변경될 때 필터링
        onEditClick={() => console.log('Edit Clicked')} // 편집 버튼 클릭 시 동작 추가 가능
        onAddClick={handleAddClick} // 추가 버튼 클릭 시 동작 추가 가능
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
            <TableHeader>Kohort Name</TableHeader>
            <TableHeader>Start Date</TableHeader>
            <TableHeader>End Date</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Leader Name</TableHeader>
            <TableHeader>Kohort Role</TableHeader>
            <TableHeader>Approval</TableHeader>
            <TableHeader>Approval Date</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {filteredKohorts.map((kohort) => (
            <TableRow key={kohort.kohort_id} $isSelected={selectedRows.has(kohort.kohort_id)}>
              <TableCell
                $isSelected={selectedRows.has(kohort.kohort_id)}
                onClick={() => handleCheckboxChange(kohort.kohort_id)}
              >
                <CheckboxContainer>
                  <Checkbox src={checkbox} alt="checkbox" />
                  {selectedRows.has(kohort.kohort_id) && <Checkmark src={checkmark} alt="checkmark" />}
                </CheckboxContainer>
              </TableCell>
              <TableCell>{kohort.kohort_name}</TableCell>
              <TableCell>{kohort.start_date}</TableCell>
              <TableCell>{kohort.end_date}</TableCell>
              <TableCell>{kohort.description}</TableCell>
              <TableCell>{kohort.leader.user_name}</TableCell>
              <TableCell>{kohort.kohort_role}</TableCell>
              <TableCell>{kohort.activate_yn === 'Y' ? 'Approved' : 'Pending'}</TableCell>
              <TableCell>{kohort.approval_date || 'N/A'}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      {/* 모달 컴포넌트 추가 */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="New Kohort">
          {/* 여기에 모달 내부 내용을 추가하면 됩니다 */}
          <AddKohort />
        </Modal>
      )}
    </UserKohortContainer>
  );
};

export default UserKohort;
