import React, { useEffect, useState, useCallback } from 'react';
import {
  UserApplicantContainer,
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
} from './userApplicant.style';
import axios from 'axios';
import headerbox from 'src/assets/admin/headerbox.svg';
import checkbox from 'src/assets/admin/cellbox.svg';
import TopBar from 'src/components/admin/topbar/Topbar';
import checkmark from 'src/assets/admin/cell_check.svg';

interface Applicant {
  user_id: number;
  user_name: string;
  email_addr: string;
  wallet_addr: string;
  expertise: string;
  bio: string;
  value_add: string;
  reg_date: string;
  appr_status: string;
  appr_date: string;
}

const UserApplicants: React.FC = () => {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [filteredApplicants, setFilteredApplicants] = useState<Applicant[]>([]);
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
    const fetchApplicants = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/admin/user-list');
        console.log(response.data);

        const data = response.data;
        if (data.length < 20) {
          const emptyItems = Array.from({ length: 20 - data.length }, (_, index) => ({
            user_id: `empty-${index}`,
            user_name: '~~',
            email_addr: '~~',
            wallet_addr: '~~',
            expertise: '~~',
            bio: '~~',
            value_add: '~~',
            reg_date: '~~',
            appr_status: '~~',
            appr_date: '~~',
          }));
          setApplicants([...data, ...emptyItems]);
        } else {
          setApplicants(data);
        }
      } catch (error) {
        console.error('Error fetching applicants:', error);
      }
    };

    fetchApplicants();
  }, []);

  useEffect(() => {
    const filteredData = applicants.filter((applicant) =>
      Object.values(applicant).some(
        (value) => typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredApplicants(filteredData);
  }, [searchTerm, applicants]);

  // Approve 기능
  const handleApproval = async (user_id: number, status: string) => {
    try {
      const response = await axios.post('http://localhost:4000/api/admin/update-status', { user_id, status });
      if (response.status === 200) {
        setApplicants((prevApplicants) =>
          prevApplicants.map((applicant) =>
            applicant.user_id === user_id ? { ...applicant, appr_status: status } : applicant
          )
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
      const allIds = new Set(
        applicants.filter((applicant) => applicant.user_name !== '~~').map((applicant) => applicant.user_id)
      );
      setSelectedRows(allIds);
    }
    setIsAllSelected(!isAllSelected);
  };

  return (
    <UserApplicantContainer>
      <Title>User Mgmt {'>'} Applicants</Title>
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
            <TableHeader>Value Add</TableHeader>
            <TableHeader>Registration Date</TableHeader>
            <TableHeader>Approval</TableHeader>
            <TableHeader>Approval Date</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {filteredApplicants.map((applicant) => (
            <TableRow key={applicant.user_id}>
              <TableCell onClick={() => handleCheckboxChange(applicant.user_id)}>
                {applicant.user_name !== '~~' && (
                  <CheckboxContainer>
                    <Checkbox src={checkbox} alt="checkbox" />
                    {selectedRows.has(applicant.user_id) && <Checkmark src={checkmark} alt="checkmark" />}
                  </CheckboxContainer>
                )}
              </TableCell>
              <TableCell>{applicant.user_name}</TableCell>
              <TableCell>{applicant.email_addr}</TableCell>
              <TableCell>{applicant.wallet_addr}</TableCell>
              <TableCell>{applicant.expertise}</TableCell>
              <TableCell onMouseEnter={(e) => handleMouseEnter(applicant.bio, e)} onMouseLeave={handleMouseLeave}>
                {applicant.bio}
              </TableCell>
              <TableCell onMouseEnter={(e) => handleMouseEnter(applicant.value_add, e)} onMouseLeave={handleMouseLeave}>
                {applicant.value_add}
              </TableCell>
              <TableCell>{applicant.reg_date}</TableCell>
              <TableCell>
                {applicant.appr_status === 'PENDING' ? (
                  <>
                    <button onClick={() => handleApproval(applicant.user_id, 'APPLIED')}>Add</button>
                    <button className="deny" onClick={() => handleApproval(applicant.user_id, 'DENIED')}>
                      Deny
                    </button>
                  </>
                ) : (
                  applicant.appr_status
                )}
              </TableCell>
              <TableCell onMouseEnter={(e) => handleMouseEnter(applicant.appr_date, e)} onMouseLeave={handleMouseLeave}>
                {applicant.appr_date == null ? '~~' : applicant.appr_date}
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      {popupContent && <Popup style={{ top: popupPosition.top, left: popupPosition.left }}>{popupContent}</Popup>}
    </UserApplicantContainer>
  );
};

export default UserApplicants;
