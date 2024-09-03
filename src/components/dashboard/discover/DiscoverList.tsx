import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  DiscoverPageContainer,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  StarIcon,
  ProjectLink,
  GradeBadge,
  DropdownContainer,
  DropdownItem,
  DropdownMenu,
  TooltipContainer,
  NoDataContainer,
  NoDataImage,
  NoDataText,
} from './DiscoverList.style';
import { images } from '../../../assets/discover/images';
import { PATH } from '../../../constants/path';
import { API_BASE_URL } from 'src/utils/utils';

interface DataItem {
  pjt_id: number;
  pjt_name: string;
  category: string;
  pjt_summary: string;
  pjt_grade: string;
  pinned: boolean;
  checked: boolean; // 추가된 상태
  originalIndex: number;
  apply_yn: string;
}

type SortKey = keyof DataItem;

interface SortConfig {
  key: SortKey;
  direction: 'ascending' | 'descending';
}

const DiscoverList = () => {
  const navigate = useNavigate();
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'pjt_name', direction: 'ascending' });
  const [data, setData] = useState<DataItem[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [isGradeDropdownVisible, setIsGradeDropdownVisible] = useState<boolean>(false);

  const categories = ['Infra', 'Modular', 'Layer2', 'DeFi', 'CeFi', 'Gaming', 'Social', 'AI'];
  const grades = ['AAA (Exceptional)', 'AA (Excellent)', 'A (Good)', 'BBB (Fair)', 'BB and Below (Poor)'];

  const categoryDropdownRef = useRef<HTMLDivElement>(null);
  const gradeDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/admin/project-list`);
        const filteredData = response.data.filter((item: any) => item.apply_yn === 'N');
        const formattedData = filteredData.map((item: any, index: number) => ({
          ...item,
          pinned: false,
          checked: false, // 처음에는 모든 항목의 checked 상태는 false
          originalIndex: index,
        }));
        setData(formattedData);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSort = (key: SortKey) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleStarClick = (id: number) => {
    const newData = data.map((item) => {
      if (item.pjt_id === id) {
        if (item.pinned) {
          // 상단 고정을 해제하되 checked 상태를 유지
          return { ...item, pinned: false, checked: true };
        } else {
          // 상단 고정 및 checked 상태로 변경
          return { ...item, pinned: true, checked: true };
        }
      }
      return item;
    });

    const pinnedItems = newData.filter((item) => item.pinned);
    const unpinnedItems = newData.filter((item) => !item.pinned);

    // unpinned 항목들은 원래 자리로 돌아가도록 originalIndex로 정렬
    unpinnedItems.sort((a, b) => a.originalIndex - b.originalIndex);

    setData([...pinnedItems, ...unpinnedItems]);
  };

  const handleWatchlistClick = () => {
    const newData = data.map((item) => {
      if (item.pinned) {
        return { ...item, pinned: false }; // 상단 고정 해제
      }
      return item;
    });

    // 모든 항목을 originalIndex에 따라 정렬
    newData.sort((a, b) => a.originalIndex - b.originalIndex);

    setData(newData);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category) ? prevSelected.filter((c) => c !== category) : [...prevSelected, category]
    );
    setIsDropdownVisible(true);
  };

  const handleGradeChange = (grade: string) => {
    setSelectedGrades((prevSelected) =>
      prevSelected.includes(grade) ? prevSelected.filter((g) => g !== grade) : [...prevSelected, grade]
    );
    setIsGradeDropdownVisible(true);
  };

  const handleProjectClick = (projectData: DataItem) => {
    navigate(PATH.DISCOVER_DETAILS.replace(':projectId', projectData.pjt_id.toString()), {
      state: projectData,
    });
  };

  const filteredData = data.filter((item) => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.category);
    const matchesGrade = selectedGrades.length === 0 || selectedGrades.includes(item.pjt_grade);
    return matchesCategory && matchesGrade;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
    if (sortConfig) {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
    }
    return 0;
  });

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const toggleGradeDropdown = () => {
    setIsGradeDropdownVisible(!isGradeDropdownVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target as Node)) {
      setIsDropdownVisible(false);
    }
    if (gradeDropdownRef.current && !gradeDropdownRef.current.contains(event.target as Node)) {
      setIsGradeDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DiscoverPageContainer>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader width="10%">
                Watchlist
                <img
                  src={images.sorticon}
                  alt=""
                  onClick={handleWatchlistClick} // Watchlist 아이콘 클릭 시 handleWatchlistClick 호출
                  style={{ width: '16px', height: '16px' }}
                />
              </TableHeader>
              <TableHeader width="20%">
                Project
                <img
                  src={images.sorticon}
                  alt=""
                  onClick={() => handleSort('pjt_name')}
                  style={{ width: '16px', height: '16px' }}
                />
              </TableHeader>
              <TableHeader width="15%" onClick={toggleDropdown} isActive={isDropdownVisible}>
                <DropdownContainer ref={categoryDropdownRef}>
                  Category
                  <img
                    src={isDropdownVisible ? images.downicon : images.sorticon}
                    alt=""
                    style={{ width: '16px', height: '16px' }}
                  />
                  {isDropdownVisible && (
                    <DropdownMenu>
                      {categories.map((category) => (
                        <DropdownItem key={category} onClick={(e) => e.stopPropagation()}>
                          <label>
                            <input
                              type="checkbox"
                              checked={selectedCategories.includes(category)}
                              onChange={() => handleCategoryChange(category)}
                            />
                            {category}
                          </label>
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  )}
                </DropdownContainer>
              </TableHeader>
              <TableHeader width="35%">Description</TableHeader>
              <TableHeader width="20%" onClick={toggleGradeDropdown} isActive={isGradeDropdownVisible}>
                <DropdownContainer ref={gradeDropdownRef}>
                  <TooltipContainer>
                    <img src={images.exclamationIcon} alt="Info Icon" style={{ width: '16px', height: '16px' }} />
                    Grade
                    <div className="tooltip">
                      AAA: 2.5 to 3.0
                      <br />
                      AA: 2.0 to 2.5
                      <br />
                      A: 1.5 to 2.0
                      <br />
                      BBB: 1.0 to 1.5
                      <br />
                      BB and Below: 1.0 or below
                    </div>
                  </TooltipContainer>
                  <img
                    src={isGradeDropdownVisible ? images.downicon : images.sorticon}
                    alt=""
                    style={{ width: '16px', height: '16px' }}
                  />
                  {isGradeDropdownVisible && (
                    <DropdownMenu>
                      {grades.map((grade) => (
                        <DropdownItem key={grade} onClick={(e) => e.stopPropagation()}>
                          <label>
                            <input
                              type="checkbox"
                              checked={selectedGrades.includes(grade)}
                              onChange={() => handleGradeChange(grade)}
                            />
                            {grade}
                          </label>
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  )}
                </DropdownContainer>
              </TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((row) => (
                <TableRow key={row.pjt_id}>
                  <TableCell width="10%">
                    <StarIcon
                      src={row.checked ? `${images.checked_star}` : `${images.star}`} // checked 상태에 따라 아이콘 표시
                      alt={row.pinned ? 'Pinned' : 'Not pinned'}
                      onClick={() => handleStarClick(row.pjt_id)}
                    />
                  </TableCell>
                  <TableCell width="20%">
                    <ProjectLink as="button" onClick={() => handleProjectClick(row)}>
                      {row.pjt_name}
                    </ProjectLink>
                  </TableCell>
                  <TableCell width="15%">{row.category}</TableCell>
                  <TableCell className="description" width="35%">
                    {row.pjt_summary}
                  </TableCell>
                  <TableCell width="20%">
                    <GradeBadge grade={row.pjt_grade.split(' ')[0]}>{row.pjt_grade}</GradeBadge>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <NoDataContainer>
                <NoDataImage src={images.user} alt="No Data" />
                <NoDataText>No projects found.</NoDataText>
              </NoDataContainer>
            )}
          </tbody>
        </Table>
      </TableContainer>
    </DiscoverPageContainer>
  );
};

export default DiscoverList;
