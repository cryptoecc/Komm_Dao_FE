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
} from './DiscoverList.style'; // 스타일 파일 경로
import { images } from '../../../assets/discover/images'; // 이미지 경로
import { PATH } from '../../../constants/path'; // 경로 상수
import { API_BASE_URL } from 'src/utils/utils'; // API 베이스 URL
import { useSelector } from 'react-redux'; // Redux
import { RootState } from 'src/store/store'; // 스토어 경로

interface DataItem {
  pjt_id: number;
  pjt_name: string;
  category: string;
  pjt_summary: string;
  pjt_grade: string;
  pinned: boolean;
  checked: boolean;
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
  const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] = useState<boolean>(false);
  const [isGradeDropdownVisible, setIsGradeDropdownVisible] = useState<boolean>(false);

  const user = useSelector((state: RootState) => state.user); // Redux에서 유저 정보 가져오기

  const categories = ['Infra', 'Modular', 'Layer2', 'DeFi', 'CeFi', 'Gaming', 'Social', 'AI']; // 카테고리
  const grades = ['AAA (Exceptional)', 'AA (Excellent)', 'A (Good)', 'BBB (Fair)', 'BB and Below (Poor)']; // 등급

  const categoryDropdownRef = useRef<HTMLDivElement>(null);
  const gradeDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('API_BASE_URL:', API_BASE_URL);

    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/admin/project-list`); // 프로젝트 리스트 API 호출
        const filteredData = response.data.filter((item: any) => item.apply_yn === 'N');
        const formattedData = filteredData.map((item: any, index: number) => ({
          ...item,
          pinned: false,
          checked: false,
        }));
        setData(formattedData);
      } catch (error) {
        console.error('프로젝트 데이터를 가져오는 중 에러:', error);
      }
    };

    fetchData();
  }, []);

  // 정렬 함수
  const handleSort = (key: SortKey) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // 즐겨찾기 기능
  const handleStarClick = async (id: number) => {
    if (!user) {
      console.error('User is not logged in');
      return;
    }

    const project = data.find((item) => item.pjt_id === id);
    if (!project) return;

    try {
      if (project.pinned) {
        // 즐겨찾기 삭제
        console.log('Removing from watchlist:', { user_id: user.user_id, pjt_id: id });
        await axios.delete(`${API_BASE_URL}/api/user/watchlist/remove`, {
          data: { user_id: user.user_id, pjt_id: id }, // Ensure user_id and pjt_id are valid
        });
      } else {
        // 즐겨찾기 추가
        console.log('Adding to watchlist:', { user_id: user.user_id, pjt_id: id });
        await axios.post(`${API_BASE_URL}/api/user/watchlist/add`, {
          user_id: user.user_id, // Ensure this value is correct
          pjt_id: id,
        });
      }

      // UI 업데이트
      const updatedData = data.map((item) => {
        if (item.pjt_id === id) {
          return { ...item, pinned: !item.pinned, checked: true };
        }
        return item;
      });

      setData(updatedData);
    } catch (error) {
      console.error('Error toggling watchlist:', error);
    }
  };

  // Watchlist에 추가된 항목만 보기
  const handleWatchlistClick = () => {
    const newData = data.map((item) => {
      if (item.pinned) {
        return { ...item, pinned: false };
      }
      return item;
    });

    newData.sort((a, b) => a.originalIndex - b.originalIndex);
    setData(newData);
  };

  // 카테고리 필터링
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category) ? prevSelected.filter((c) => c !== category) : [...prevSelected, category]
    );
  };

  // 등급 필터링
  const handleGradeChange = (grade: string) => {
    setSelectedGrades((prevSelected) =>
      prevSelected.includes(grade) ? prevSelected.filter((g) => g !== grade) : [...prevSelected, grade]
    );
  };

  // 프로젝트 클릭 시 상세 페이지로 이동
  const handleProjectClick = (projectData: DataItem) => {
    navigate(PATH.DISCOVER_DETAILS.replace(':projectId', projectData.pjt_id.toString()), {
      state: projectData,
    });
  };

  // 필터링된 데이터
  const filteredData = data.filter((item) => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.category);
    const matchesGrade =
      selectedGrades.length === 0 ||
      selectedGrades.some(
        (selectedGrade) => item.pjt_grade.split(' ')[0].trim().toUpperCase() === selectedGrade.trim().toUpperCase()
      );
    return matchesCategory && matchesGrade;
  });

  // 정렬된 데이터
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

  // 카테고리 드롭다운 토글
  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownVisible(!isCategoryDropdownVisible);
    setIsGradeDropdownVisible(false);
  };

  // 등급 드롭다운 토글
  const toggleGradeDropdown = () => {
    setIsGradeDropdownVisible(!isGradeDropdownVisible);
    setIsCategoryDropdownVisible(false);
  };

  // 드롭다운 외부 클릭 감지
  const handleClickOutside = (event: MouseEvent) => {
    if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target as Node)) {
      setIsCategoryDropdownVisible(false);
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
                  onClick={handleWatchlistClick}
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
              <TableHeader width="15%" onClick={toggleCategoryDropdown} $isActive={isCategoryDropdownVisible}>
                <DropdownContainer ref={categoryDropdownRef}>
                  Category
                  <img
                    src={isCategoryDropdownVisible ? images.downicon : images.sorticon}
                    alt=""
                    style={{ width: '16px', height: '16px' }}
                  />
                  {isCategoryDropdownVisible && (
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
              <TableHeader width="20%" onClick={toggleGradeDropdown} $isActive={isGradeDropdownVisible}>
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
                      src={row.checked ? `${images.checked_star}` : `${images.star}`}
                      alt={row.pinned ? 'Pinned' : 'Not pinned'}
                      onClick={() => handleStarClick(row.pjt_id)} // 즐겨찾기 클릭 시
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
              <TableRow>
                <TableCell colSpan={5}>
                  <NoDataContainer>
                    <NoDataImage src={images.user} alt="No Data" />
                    <NoDataText>No projects found.</NoDataText>
                  </NoDataContainer>
                </TableCell>
              </TableRow>
            )}
          </tbody>
        </Table>
      </TableContainer>
    </DiscoverPageContainer>
  );
};

export default DiscoverList;
