import {
  DiscoverContainer,
  Title,
  // TopBar,
  Table,
  TableRow,
  TableHeader,
  TableCell,
  CheckboxContainer,
  Checkbox,
  Checkmark,
  TableWrapper,
  Popup,
  ApplyBtn,
  EditBtn,
} from './adminDiscover.style';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import TopBar from 'src/components/admin/topbar/Topbar';
import headerbox from 'src/assets/admin/headerbox.svg';
import checkbox from 'src/assets/admin/cellbox.svg';
import checkmark from 'src/assets/admin/cell_check.svg';
import ToggleSwitch from 'src/components/toggle/Toggle';

const AdminDiscover = () => {
  // 검색
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [discovers, setDiscovers] = useState<any[]>([]); // Kohorts 데이터를 담을 상태
  const [filteredDiscovers, setFilteredDiscovers] = useState<any[]>([]);
  const [popupContent, setPopupContent] = useState<string | null>(null);
  const [popupPosition, setPopupPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

  // 체크박스
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);

  // Edit
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [editValues, setEditValues] = useState<{ [key: number]: { [field: string]: string } }>({});

  const handleToggle = () => {
    setIsEditable((prev) => !prev);
  };

  const handleMouseEnter = useCallback((content: string, e: React.MouseEvent<HTMLTableCellElement>) => {
    if (content === '~~') return;
    const rect = e.currentTarget.getBoundingClientRect();
    setPopupContent(content);
    setPopupPosition({
      top: rect.top + window.scrollY + 40,
      left: rect.left + window.scrollX + rect.width / 2,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPopupContent(null);
  }, []);

  useEffect(() => {
    // 백엔드에서 Discover 데이터를 가져오기
    const fetchDiscovers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/admin/project-list');
        const data = response.data;

        if (data.length < 20) {
          const emptyItems = Array.from({ length: 20 - data.length }, (_, index) => ({
            pjt_id: `empty-${index}`, // 고유한 ID를 제공하기 위해 'empty' 접두사 추가
            pjt_name: '~~',
            website: '~~',
            category: '~~',
            x_link: '~~',
            x_followers: '~~',
            discord_link: '~~',
            discord_members: '~~',
            linkedIn_link: '~~',
            github_link: '~~',
            github_stars: '~~',
            raising_amount: '~~',
            valuation: '~~',
            investors: '~~',
            pjt_grade: '~~',
            pjt_summary: '~~',
            pjt_details: '~~',
            adm_trend: '~~',
            adm_expertise: '~~',
            adm_final_grade: '~~',
            update_date: '~~',
            apply_yn: '~~',
          }));
          setDiscovers([...data, ...emptyItems]);
        } else {
          setDiscovers(data);
        }
      } catch (error) {
        console.error('Error fetching discovers:', error);
      }
    };

    fetchDiscovers();
  }, []);

  useEffect(() => {
    // 검색어로 필터링
    const filteredData = discovers.filter((discover) =>
      Object.values(discover).some(
        (value) => typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredDiscovers(filteredData);
  }, [searchTerm, discovers]);

  // 체크박스 기능
  const handleCheckboxChange = (pjt_id: number) => {
    setSelectedRows((prevSelectedRows) => {
      const newSelectedRows = new Set(prevSelectedRows);
      if (newSelectedRows.has(pjt_id)) {
        newSelectedRows.delete(pjt_id);
      } else {
        newSelectedRows.add(pjt_id);
      }
      return newSelectedRows;
    });
  };

  const handleSelectAllChange = () => {
    if (isAllSelected) {
      setSelectedRows(new Set());
    } else {
      const allIds = new Set(discovers.map((discover) => discover.pjt_id));
      setSelectedRows(allIds);
    }
    setIsAllSelected(!isAllSelected);
  };

  const handleApply = async (pjt_id: number) => {
    try {
      const response = await axios.post('http://localhost:4000/api/admin/apply-project', { pjt_id });
      if (response.status === 200) {
        setDiscovers((prevDiscovers) =>
          prevDiscovers.map((discover) => (discover.pjt_id === pjt_id ? { ...discover, apply_yn: 'Y' } : discover))
        );
      }
    } catch (error) {
      console.error('Error updating apply status:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, id: number, field: string) => {
    const { value } = e.target;

    setEditValues((prevValues) => ({
      ...prevValues,
      [id]: {
        ...prevValues[id],
        [field]: value,
      },
    }));

    setDiscovers((prevDiscovers) =>
      prevDiscovers.map((discover) => (discover.pjt_id === id ? { ...discover, [field]: value } : discover))
    );
  };

  const handleUpdate = async (pjt_id: number) => {
    const updatedFields = editValues[pjt_id];
    console.log(updatedFields); // 업데이트된 필드들을 확인

    if (!updatedFields) {
      console.error('No changes detected');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/api/admin/update-project', {
        pjt_id,
        ...updatedFields,
      });

      if (response.status === 200) {
        setDiscovers((prevDiscovers) =>
          prevDiscovers.map((discover) => (discover.pjt_id === pjt_id ? { ...discover, ...updatedFields } : discover))
        );
        console.log('Update successful');
      }
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };
  return (
    <DiscoverContainer>
      <Title>Discover Mgmt</Title>
      <TopBar
        onSearchChange={setSearchTerm} // 검색어가 변경될 때 필터링
        onEditClick={() => console.log('Edit Clicked')} // 편집 버튼 클릭 시 동작 추가 가능
        showToggle={true}
        onToggleChange={handleToggle}
        // 추가 버튼 클릭 시 동작 추가 가능
      />
      <TableWrapper>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>
                <CheckboxContainer onClick={handleSelectAllChange}>
                  <Checkbox src={headerbox} alt="checkbox" />
                  {isAllSelected && <Checkmark src={checkmark} alt="checkmark" />}
                </CheckboxContainer>
              </TableHeader>
              <TableHeader>Project Name</TableHeader>
              <TableHeader>Website</TableHeader>
              <TableHeader>Category</TableHeader>
              <TableHeader>X(Twitter)</TableHeader>
              <TableHeader>X Followers</TableHeader>
              <TableHeader>Discord</TableHeader>
              <TableHeader>Discord Members</TableHeader>
              <TableHeader>Linkdein</TableHeader>
              <TableHeader>Github</TableHeader>
              <TableHeader>Github Stars</TableHeader>
              <TableHeader>Linkdein</TableHeader>
              <TableHeader>Raising</TableHeader>
              <TableHeader>Valuation</TableHeader>
              <TableHeader>Investors</TableHeader>
              <TableHeader>Grade</TableHeader>
              <TableHeader>Summary (50자 이내)</TableHeader>
              <TableHeader>Details (200자 이내)</TableHeader>
              <TableHeader>Trend Alignment</TableHeader>
              <TableHeader>Founder Expertise</TableHeader>
              <TableHeader>Final Grade</TableHeader>
              <TableHeader>Update</TableHeader>
              <TableHeader>Approval</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {filteredDiscovers.map((discover) => (
              <TableRow key={discover.pjt_id} $isSelected={selectedRows.has(discover.pjt_id)}>
                <TableCell
                  $isSelected={selectedRows.has(discover.pjt_id)}
                  onClick={() => handleCheckboxChange(discover.pjt_id)}
                >
                  <CheckboxContainer>
                    <Checkbox src={checkbox} alt="checkbox" />
                    {selectedRows.has(discover.pjt_id) && <Checkmark src={checkmark} alt="checkmark" />}
                  </CheckboxContainer>
                </TableCell>
                <TableCell $isSelected={selectedRows.has(discover.pjt_id)}>
                  {isEditable ? (
                    <input
                      type="text"
                      value={
                        (editValues[discover.pjt_id] && editValues[discover.pjt_id]['pjt_name']) || discover.pjt_name
                      }
                      onChange={(e) => handleInputChange(e, discover.pjt_id, 'pjt_name')}
                    />
                  ) : (
                    discover.pjt_name
                  )}
                </TableCell>
                <TableCell
                  $isSelected={selectedRows.has(discover.pjt_id)}
                  onMouseEnter={(e) => handleMouseEnter(discover.website, e)}
                  onMouseLeave={handleMouseLeave}
                >
                  {isEditable ? (
                    <input
                      type="text"
                      value={
                        (editValues[discover.pjt_id] && editValues[discover.pjt_id]['website']) || discover.website
                      }
                      onChange={(e) => handleInputChange(e, discover.pjt_id, 'website')}
                    />
                  ) : (
                    discover.website
                  )}
                </TableCell>
                <TableCell $isSelected={selectedRows.has(discover.pjt_id)}>
                  {' '}
                  {isEditable ? (
                    <input
                      type="text"
                      value={
                        (editValues[discover.pjt_id] && editValues[discover.pjt_id]['category']) || discover.category
                      }
                      onChange={(e) => handleInputChange(e, discover.pjt_id, 'category')}
                    />
                  ) : (
                    discover.category
                  )}
                </TableCell>
                <TableCell
                  $isSelected={selectedRows.has(discover.pjt_id)}
                  onMouseEnter={(e) => handleMouseEnter(discover.x_link, e)}
                  onMouseLeave={handleMouseLeave}
                >
                  {isEditable ? (
                    <input
                      type="text"
                      value={(editValues[discover.pjt_id] && editValues[discover.pjt_id]['x_link']) || discover.x_link}
                      onChange={(e) => handleInputChange(e, discover.pjt_id, 'x_link')}
                    />
                  ) : (
                    discover.x_link
                  )}
                </TableCell>
                <TableCell $isSelected={selectedRows.has(discover.pjt_id)}>
                  {' '}
                  {isEditable ? (
                    <input
                      type="text"
                      value={
                        (editValues[discover.pjt_id] && editValues[discover.pjt_id]['x_followers']) ||
                        discover.x_followers
                      }
                      onChange={(e) => handleInputChange(e, discover.pjt_id, 'x_followers')}
                    />
                  ) : (
                    discover.x_followers
                  )}
                </TableCell>
                <TableCell
                  $isSelected={selectedRows.has(discover.pjt_id)}
                  onMouseEnter={(e) => handleMouseEnter(discover.discord_link, e)}
                  onMouseLeave={handleMouseLeave}
                >
                  {isEditable ? (
                    <input
                      type="text"
                      value={
                        (editValues[discover.pjt_id] && editValues[discover.pjt_id]['discord_link']) ||
                        discover.discord_link
                      }
                      onChange={(e) => handleInputChange(e, discover.pjt_id, 'discord_link')}
                    />
                  ) : (
                    discover.discord_link
                  )}
                </TableCell>
                <TableCell $isSelected={selectedRows.has(discover.pjt_id)}>
                  {isEditable ? (
                    <input
                      type="text"
                      value={
                        (editValues[discover.pjt_id] && editValues[discover.pjt_id]['discord_members']) ||
                        discover.discord_members
                      }
                      onChange={(e) => handleInputChange(e, discover.pjt_id, 'discord_members')}
                    />
                  ) : (
                    discover.discord_members
                  )}
                </TableCell>
                <TableCell
                  $isSelected={selectedRows.has(discover.pjt_id)}
                  onMouseEnter={(e) => handleMouseEnter(discover.linkedIn_link, e)}
                  onMouseLeave={handleMouseLeave}
                >
                  {isEditable ? (
                    <input
                      type="text"
                      value={
                        (editValues[discover.pjt_id] && editValues[discover.pjt_id]['linkedIn_link']) ||
                        discover.linkedIn_link
                      }
                      onChange={(e) => handleInputChange(e, discover.pjt_id, 'linkedIn_link')}
                    />
                  ) : (
                    discover.linkedIn_link
                  )}
                </TableCell>
                <TableCell
                  $isSelected={selectedRows.has(discover.pjt_id)}
                  onMouseEnter={(e) => handleMouseEnter(discover.github_link, e)}
                  onMouseLeave={handleMouseLeave}
                >
                  {isEditable ? (
                    <input
                      type="text"
                      value={
                        (editValues[discover.pjt_id] && editValues[discover.pjt_id]['github_link']) ||
                        discover.github_link
                      }
                      onChange={(e) => handleInputChange(e, discover.pjt_id, 'github_link')}
                    />
                  ) : (
                    discover.github_link
                  )}
                </TableCell>
                <TableCell $isSelected={selectedRows.has(discover.pjt_id)}>
                  {' '}
                  {isEditable ? (
                    <input
                      type="text"
                      value={
                        (editValues[discover.pjt_id] && editValues[discover.pjt_id]['github_stars']) ||
                        discover.github_stars
                      }
                      onChange={(e) => handleInputChange(e, discover.pjt_id, 'github_stars')}
                    />
                  ) : (
                    discover.github_stars
                  )}
                </TableCell>
                <TableCell $isSelected={selectedRows.has(discover.pjt_id)}>
                  {' '}
                  {isEditable ? (
                    <input
                      type="text"
                      value={
                        (editValues[discover.pjt_id] && editValues[discover.pjt_id]['linkedin']) || discover.linkedin
                      }
                      onChange={(e) => handleInputChange(e, discover.pjt_id, 'linkedin')}
                    />
                  ) : (
                    discover.linkedin
                  )}
                </TableCell>
                <TableCell $isSelected={selectedRows.has(discover.pjt_id)}>
                  {isEditable ? (
                    <input
                      type="text"
                      value={
                        (editValues[discover.pjt_id] && editValues[discover.pjt_id]['raising_amount']) ||
                        discover.raising_amount
                      }
                      onChange={(e) => handleInputChange(e, discover.pjt_id, 'raising_amount')}
                    />
                  ) : (
                    discover.raising_amount
                  )}
                </TableCell>
                <TableCell $isSelected={selectedRows.has(discover.pjt_id)}>
                  {' '}
                  {isEditable ? (
                    <input
                      type="text"
                      value={
                        (editValues[discover.pjt_id] && editValues[discover.pjt_id]['valuation']) || discover.valuation
                      }
                      onChange={(e) => handleInputChange(e, discover.pjt_id, 'valuation')}
                    />
                  ) : (
                    discover.valuation
                  )}
                </TableCell>
                <TableCell $isSelected={selectedRows.has(discover.pjt_id)}>
                  {' '}
                  {isEditable ? (
                    <input
                      type="text"
                      value={
                        (editValues[discover.pjt_id] && editValues[discover.pjt_id]['investors']) || discover.investors
                      }
                      onChange={(e) => handleInputChange(e, discover.pjt_id, 'investors')}
                    />
                  ) : (
                    discover.investors
                  )}
                </TableCell>
                <TableCell $isSelected={selectedRows.has(discover.pjt_id)}>
                  {isEditable ? (
                    <input
                      type="text"
                      value={
                        (editValues[discover.pjt_id] && editValues[discover.pjt_id]['pjt_grade']) || discover.pjt_grade
                      }
                      onChange={(e) => handleInputChange(e, discover.pjt_id, 'pjt_grade')}
                    />
                  ) : (
                    discover.pjt_grade
                  )}
                </TableCell>
                <TableCell
                  $isSelected={selectedRows.has(discover.pjt_id)}
                  onMouseEnter={(e) => handleMouseEnter(discover.pjt_summary, e)}
                  onMouseLeave={handleMouseLeave}
                >
                  {isEditable ? (
                    <input
                      type="text"
                      value={
                        (editValues[discover.pjt_id] && editValues[discover.pjt_id]['pjt_summary']) ||
                        discover.pjt_summary
                      }
                      onChange={(e) => handleInputChange(e, discover.pjt_id, 'pjt_summary')}
                    />
                  ) : (
                    discover.pjt_summary
                  )}
                </TableCell>
                <TableCell
                  $isSelected={selectedRows.has(discover.pjt_id)}
                  onMouseEnter={(e) => handleMouseEnter(discover.pjt_details, e)}
                  onMouseLeave={handleMouseLeave}
                >
                  {isEditable ? (
                    <input
                      type="text"
                      value={
                        (editValues[discover.pjt_id] && editValues[discover.pjt_id]['pjt_details']) ||
                        discover.pjt_details
                      }
                      onChange={(e) => handleInputChange(e, discover.pjt_id, 'pjt_details')}
                    />
                  ) : (
                    discover.pjt_details
                  )}
                </TableCell>
                <TableCell $isSelected={selectedRows.has(discover.pjt_id)}>
                  {' '}
                  {isEditable ? (
                    <input
                      type="text"
                      value={
                        (editValues[discover.pjt_id] && editValues[discover.pjt_id]['adm_trend']) || discover.adm_trend
                      }
                      onChange={(e) => handleInputChange(e, discover.pjt_id, 'adm_trend')}
                    />
                  ) : (
                    discover.adm_trend
                  )}
                </TableCell>
                <TableCell $isSelected={selectedRows.has(discover.pjt_id)}>
                  {' '}
                  {isEditable ? (
                    <input
                      type="text"
                      value={
                        (editValues[discover.pjt_id] && editValues[discover.pjt_id]['adm_expertise']) ||
                        discover.adm_expertise
                      }
                      onChange={(e) => handleInputChange(e, discover.pjt_id, 'adm_expertise')}
                    />
                  ) : (
                    discover.adm_expertise
                  )}
                </TableCell>
                <TableCell $isSelected={selectedRows.has(discover.pjt_id)}>
                  {' '}
                  {isEditable ? (
                    <input
                      type="text"
                      value={
                        (editValues[discover.pjt_id] && editValues[discover.pjt_id]['adm_final_grade']) ||
                        discover.adm_final_grade
                      }
                      onChange={(e) => handleInputChange(e, discover.pjt_id, 'adm_final_grade')}
                    />
                  ) : (
                    discover.adm_final_grade
                  )}
                </TableCell>
                <TableCell $isSelected={selectedRows.has(discover.pjt_id)}>
                  {' '}
                  {isEditable ? (
                    <EditBtn onClick={() => handleUpdate(discover.pjt_id)}>Update</EditBtn>
                  ) : (
                    discover.update_date || '~~'
                  )}
                </TableCell>
                <TableCell $isSelected={selectedRows.has(discover.pjt_id)}>
                  {discover.apply_yn === 'N' ? (
                    <ApplyBtn onClick={() => handleApply(discover.pjt_id)}>Apply</ApplyBtn>
                  ) : discover.apply_yn === 'Y' ? (
                    'APPLIED'
                  ) : (
                    '~~'
                  )}
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
      {popupContent && <Popup style={{ top: popupPosition.top, left: popupPosition.left }}>{popupContent}</Popup>}
    </DiscoverContainer>
  );
};

export default AdminDiscover;
