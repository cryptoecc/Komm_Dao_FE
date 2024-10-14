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
  DropdownContainer,
  DropdownMenu,
  DropdownItem,
} from './adminDiscover.style';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { API_BASE_URL } from 'src/utils/utils';
import TopBar from 'src/components/admin/topbar/Topbar';
import headerbox from 'src/assets/admin/headerbox.svg';
import checkbox from 'src/assets/admin/cellbox.svg';
import checkmark from 'src/assets/admin/cell_check.svg';
import ToggleSwitch from 'src/components/toggle/Toggle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // 알림 스타일 추가
import { images } from 'src/assets/discover/images';

const categories = ['Infra', 'Modular', 'Layer2', 'DeFi', 'CeFi', 'Gaming', 'Social', 'AI']; // 카테고리

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

  // Add
  const [newRowVisible, setNewRowVisible] = useState<boolean>(false); // 새로운 행을 추가할지 여부
  const [newRowData, setNewRowData] = useState<any>({
    pjt_name: '',
    website: '',
    category: '',
    x_link: '',
    x_followers: '',
    discord_link: '',
    discord_members: '',
    linkedIn_link: '',
    github_link: '',
    github_stars: '',
    raising_amount: '',
    valuation: '',
    investors: '',
    pjt_grade: '',
    pjt_summary: '',
    pjt_details: '',
    adm_trend: '',
    adm_expertise: '',
    adm_final_grade: '',
    update_date: '',
    apply_yn: '',
    // 필요한 다른 필드들 추가
  });

  // 새로운 데이터 행 추가
  const handleAddClick = () => setNewRowVisible(true);

  const handleNewRowInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setNewRowData({ ...newRowData, [field]: e.target.value });
  };

  // 새로운 데이터를 추가하는 함수
  const handleSaveNewRow = () => {
    setDiscovers((prevDiscovers) => [newRowData, ...prevDiscovers]); // 새로운 데이터를 테이블 맨 위에 추가
    setNewRowVisible(false); // 새로운 행 감추기
    setNewRowData({
      pjt_name: '',
      website: '',
      category: '',
      x_link: '',
      x_followers: '',
      discord_link: '',
      discord_members: '',
      linkedIn_link: '',
      github_link: '',
      github_stars: '',
      raising_amount: '',
      valuation: '',
      investors: '',
      pjt_grade: '',
      pjt_summary: '',
      pjt_details: '',
      adm_trend: '',
      adm_expertise: '',
      adm_final_grade: '',
      update_date: '',
      apply_yn: '',
    }); // 필드 초기화
  };

  // Category
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] = useState<boolean>(false);
  const categoryDropdownRef = useRef<HTMLDivElement>(null); // Dropdown 외부 클릭 감지를 위한 Ref

  // 카테고리 드롭다운 토글
  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownVisible(!isCategoryDropdownVisible);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories([category]); // 선택된 카테고리만 남기고 나머지 초기화
  };

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target as Node)) {
        setIsCategoryDropdownVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
        const response = await axios.get(`${API_BASE_URL}/api/admin/project-list`);
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
  }, [isEditable]);

  // 데이터 필터링 (카테고리 및 검색어 기준)
  useEffect(() => {
    const filteredData = discovers.filter((discover) => {
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(discover.category);
      const matchesSearchTerm = Object.values(discover).some(
        (value) => typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return matchesCategory && matchesSearchTerm;
    });
    setFilteredDiscovers(filteredData);
  }, [searchTerm, discovers, selectedCategories]);

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
      const response = await axios.post(`${API_BASE_URL}/api/admin/apply-project`, { pjt_id });
      if (response.status === 200) {
        setDiscovers((prevDiscovers) =>
          prevDiscovers.map((discover) => (discover.pjt_id === pjt_id ? { ...discover, apply_yn: 'Y' } : discover))
        );
      }
    } catch (error) {
      console.error('Error updating apply status:', error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, // HTMLSelectElement 타입도 추가
    id: number,
    field: string
  ) => {
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
      const response = await axios.post(`${API_BASE_URL}/api/admin/update-project`, {
        pjt_id,
        ...updatedFields,
      });

      if (response.status === 200) {
        setDiscovers((prevDiscovers) =>
          prevDiscovers.map((discover) => (discover.pjt_id === pjt_id ? { ...discover, ...updatedFields } : discover))
        );
        console.log('Update successful');
        toast.success('Update Successful!', {
          position: 'top-right',
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  // 복사 기능 추가
  const handleCellClick = async (content: string) => {
    if (isEditable) {
      // isEditable이 true인 경우에는 복사 기능을 하지 않음
      return;
    }
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
    <DiscoverContainer>
      <Title>Discover Mgmt</Title>
      <TopBar
        onSearchChange={setSearchTerm} // 검색어가 변경될 때 필터링
        onEditClick={() => console.log('Edit Clicked')} // 편집 버튼 클릭 시 동작 추가 가능
        onAddClick={handleAddClick}
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
              <TableHeader onClick={toggleCategoryDropdown} $isActive={isCategoryDropdownVisible}>
                <DropdownContainer ref={categoryDropdownRef}>
                  Category
                  <img
                    src={isCategoryDropdownVisible ? images.downicon : images.sorticon}
                    alt="toggle"
                    style={{ width: '16px', height: '16px' }}
                  />
                  {isCategoryDropdownVisible && (
                    <DropdownMenu>
                      {categories.map((category) => (
                        <DropdownItem key={category}>
                          <label onClick={(e) => e.stopPropagation()}>
                            <input
                              type="checkbox"
                              checked={selectedCategories.includes(category)}
                              onChange={() => handleCategoryChange(category)} // 체크박스와 글자 클릭 모두 적용
                            />
                            {category}
                          </label>
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  )}
                </DropdownContainer>
              </TableHeader>
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
            {newRowVisible && (
              <TableRow>
                <TableCell></TableCell>
                <TableCell>
                  <input
                    type="text"
                    value={newRowData.pjt_name}
                    onChange={(e) => handleNewRowInputChange(e, 'pjt_name')}
                    placeholder="Project Name"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="text"
                    value={newRowData.website}
                    onChange={(e) => handleNewRowInputChange(e, 'website')}
                    placeholder="Website"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="text"
                    value={newRowData.category}
                    onChange={(e) => handleNewRowInputChange(e, 'category')}
                    placeholder="Category"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="text"
                    value={newRowData.category}
                    onChange={(e) => handleNewRowInputChange(e, 'category')}
                    placeholder="X(Twitter)"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="text"
                    value={newRowData.category}
                    onChange={(e) => handleNewRowInputChange(e, 'category')}
                    placeholder="X Followers"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="text"
                    value={newRowData.category}
                    onChange={(e) => handleNewRowInputChange(e, 'category')}
                    placeholder="Discord"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="text"
                    value={newRowData.category}
                    onChange={(e) => handleNewRowInputChange(e, 'category')}
                    placeholder="Discord Members"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="text"
                    value={newRowData.category}
                    onChange={(e) => handleNewRowInputChange(e, 'category')}
                    placeholder="Linkdein"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="text"
                    value={newRowData.category}
                    onChange={(e) => handleNewRowInputChange(e, 'category')}
                    placeholder="Github"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="text"
                    value={newRowData.category}
                    onChange={(e) => handleNewRowInputChange(e, 'category')}
                    placeholder="Github Stars"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="text"
                    value={newRowData.category}
                    onChange={(e) => handleNewRowInputChange(e, 'category')}
                    placeholder="Github wkly"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="text"
                    value={newRowData.category}
                    onChange={(e) => handleNewRowInputChange(e, 'category')}
                    placeholder="Raising"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="text"
                    value={newRowData.category}
                    onChange={(e) => handleNewRowInputChange(e, 'category')}
                    placeholder="Valuation"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="text"
                    value={newRowData.category}
                    onChange={(e) => handleNewRowInputChange(e, 'category')}
                    placeholder="Investors"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="text"
                    value={newRowData.category}
                    onChange={(e) => handleNewRowInputChange(e, 'category')}
                    placeholder="Grade"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="text"
                    value={newRowData.category}
                    onChange={(e) => handleNewRowInputChange(e, 'category')}
                    placeholder="Summary"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="text"
                    value={newRowData.category}
                    onChange={(e) => handleNewRowInputChange(e, 'category')}
                    placeholder="Details"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="text"
                    value={newRowData.category}
                    onChange={(e) => handleNewRowInputChange(e, 'category')}
                    placeholder="Trend"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="text"
                    value={newRowData.category}
                    onChange={(e) => handleNewRowInputChange(e, 'category')}
                    placeholder="Expertise"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="text"
                    value={newRowData.category}
                    onChange={(e) => handleNewRowInputChange(e, 'category')}
                    placeholder="Final Grade"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="text"
                    value={newRowData.category}
                    onChange={(e) => handleNewRowInputChange(e, 'category')}
                    placeholder="update date"
                  />
                </TableCell>
                <TableCell>
                  <EditBtn onClick={handleSaveNewRow}>Save</EditBtn>
                </TableCell>
              </TableRow>
            )}
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
                <TableCell
                  $isSelected={selectedRows.has(discover.pjt_id)}
                  onClick={() => handleCellClick(discover.pjt_name)}
                >
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
                  onClick={() => handleCellClick(discover.website)}
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
                  {isEditable ? (
                    <select
                      value={
                        (editValues[discover.pjt_id] && editValues[discover.pjt_id]['category']) || discover.category
                      }
                      onChange={(e) => handleInputChange(e, discover.pjt_id, 'category')}
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  ) : (
                    discover.category
                  )}
                </TableCell>
                <TableCell
                  $isSelected={selectedRows.has(discover.pjt_id)}
                  onMouseEnter={(e) => handleMouseEnter(discover.x_link, e)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleCellClick(discover.x_link)}
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
                <TableCell
                  $isSelected={selectedRows.has(discover.pjt_id)}
                  onClick={() => handleCellClick(discover.x_followers)}
                >
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
                  onClick={() => handleCellClick(discover.discord_link)}
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
                <TableCell
                  $isSelected={selectedRows.has(discover.pjt_id)}
                  onClick={() => handleCellClick(discover.discord_members)}
                >
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
                  onClick={() => handleCellClick(discover.linkedIn_link)}
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
                  onClick={() => handleCellClick(discover.github_link)}
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
                <TableCell
                  $isSelected={selectedRows.has(discover.pjt_id)}
                  onClick={() => handleCellClick(discover.github_stars)}
                >
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
                <TableCell
                  $isSelected={selectedRows.has(discover.pjt_id)}
                  onClick={() => handleCellClick(discover.linkedin)}
                >
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
                <TableCell
                  $isSelected={selectedRows.has(discover.pjt_id)}
                  onClick={() => handleCellClick(discover.raising_amount)}
                >
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
                <TableCell
                  $isSelected={selectedRows.has(discover.pjt_id)}
                  onClick={() => handleCellClick(discover.valuation)}
                >
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
                <TableCell
                  $isSelected={selectedRows.has(discover.pjt_id)}
                  onClick={() => handleCellClick(discover.investors)}
                >
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
                <TableCell
                  $isSelected={selectedRows.has(discover.pjt_id)}
                  onClick={() => handleCellClick(discover.pjt_grade)}
                >
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
                  onClick={() => handleCellClick(discover.pjt_summary)}
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
                  onClick={() => handleCellClick(discover.pjt_details)}
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
                <TableCell
                  $isSelected={selectedRows.has(discover.pjt_id)}
                  onClick={() => handleCellClick(discover.adm_trend)}
                >
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
                <TableCell
                  $isSelected={selectedRows.has(discover.pjt_id)}
                  onClick={() => handleCellClick(discover.adm_expertise)}
                >
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
                <TableCell
                  $isSelected={selectedRows.has(discover.pjt_id)}
                  onClick={() => handleCellClick(discover.adm_final_grade)}
                >
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
      <ToastContainer />
    </DiscoverContainer>
  );
};

export default AdminDiscover;
