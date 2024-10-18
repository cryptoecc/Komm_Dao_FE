import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify
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
  apply_yn: string;
}

type SortKey = keyof DataItem;

interface SortConfig {
  key: SortKey;
  direction: 'ascending' | 'descending';
}

interface DiscoverListProps {
  searchTerm: string; // 검색어 추가
}

const DiscoverList: React.FC<DiscoverListProps> = ({ searchTerm }) => {
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

  const [discoverData, setDiscoverData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. 프로젝트 리스트 불러오기
        const projectResponse = await axios.get(`${API_BASE_URL}/api/admin/main-project-list`);
        const filteredProjects = projectResponse.data.filter((item: any) => item.apply_yn === 'Y');
        console.log(filteredProjects);
        // 2. 유저의 Watchlist 불러오기
        const watchlistResponse = await axios.get(`${API_BASE_URL}/api/user/watchlist/${user.user_id}`);
        const userWatchlist = watchlistResponse.data.data.map((item: any) => item.pjt_id);

        // 3. 프로젝트 데이터와 Watchlist 매칭
        const formattedData = filteredProjects.map((item: any) => ({
          ...item,
          pinned: userWatchlist.includes(item.pjt_id), // Watchlist에 있는지 확인
          checked: userWatchlist.includes(item.pjt_id), // UI에서 반영할 상태
        }));

        console.log('Formatted Data:', formattedData); // 데이터가 올바르게 로드되었는지 확인
        setData(formattedData);
      } catch (error) {
        console.error('프로젝트 데이터를 가져오는 중 에러:', error);
      }
    };
    fetchData();
  }, [user.user_id]);

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
        // Remove from watchlist
        console.log('Removing from watchlist:', { user_id: user.user_id, pjt_id: id });
        await axios.delete(`${API_BASE_URL}/api/user/watchlist/remove`, {
          data: { user_id: user.user_id, pjt_id: id },
        });
        toast.error('Item removed from watchlist');
      } else {
        // Add to watchlist
        console.log('Adding to watchlist:', { user_id: user.user_id, pjt_id: id });
        await axios.post(`${API_BASE_URL}/api/user/watchlist/add`, {
          user_id: user.user_id,
          pjt_id: id,
        });
        toast.success('Successfully added to watchlist!'); // Success message
      }

      // UI 업데이트: pinned 상태와 checked 상태를 반영하여 아이콘 변경
      const updatedData = data.map((item) => {
        if (item.pjt_id === id) {
          return { ...item, pinned: !item.pinned, checked: !item.checked };
        }
        return item;
      });

      setData(updatedData);
    } catch (error) {
      console.error('Error toggling watchlist:', error);
    }
  };

  // Watchlist에 추가된 항목을 상단으로 이동, 다시 누르면 원래 위치로 복원
  // const handleWatchlistClick = () => {
  //   // 현재 Watchlist 상태에 따라 다른 동작 수행
  //   if (isWatchlistSorted) {
  //     // pinned 상태를 해제하고, pjt_id 기준으로 정렬
  //     const updatedData = [...data].map((item) => ({ ...item, pinned: false })).sort((a, b) => a.pjt_id - b.pjt_id);
  //     setData(updatedData);
  //   } else {
  //     // 핀된 항목을 상단으로 이동
  //     const sortedData = [...data].sort((a, b) => (a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1));
  //     setData(sortedData);
  //   }

  //   // 상태 토글을 바로 업데이트
  //   setIsWatchlistSorted(!isWatchlistSorted);
  // };

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
      state: { ...projectData }, // 이 부분에서 projectData 전체를 전달해야 합니다.
    });
  };

  // 필터링된 데이터
  const filteredData = data.filter((item) => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.category);

    const matchesGrade =
      selectedGrades.length === 0 ||
      selectedGrades.some((selectedGrade) => {
        const selectedGradeCode = selectedGrade.split(' ')[0].trim(); // 선택된 등급의 코드를 추출
        const itemGradeCode = item.pjt_grade.split(' ')[0].trim(); // 항목의 등급 코드를 추출
        return selectedGradeCode === itemGradeCode; // 정확히 일치하는지 비교
      });

    // 검색어가 포함되는지 확인 (pjt_name, pjt_summary에서 검색어 확인)
    const matchesSearchTerm =
      !searchTerm ||
      (item.pjt_name && item.pjt_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.pjt_summary && item.pjt_summary.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesGrade && matchesSearchTerm;
  });

  const gradePriority: { [key: string]: number } = {
    AAA: 1,
    AA: 2,
    A: 3,
    BBB: 4,
    BB: 5,
    B: 6,
  };

  // 등급을 숫자로 변환하여 우선순위를 반환하는 함수
  const getGradePriority = (grade: string) => {
    // 등급의 첫 번째 부분만 추출하여 우선순위 반환
    const gradeKey = grade.split(' ')[0].trim();
    return gradePriority[gradeKey] || Number.MAX_VALUE; // 매핑되지 않은 등급은 최하위로 처리
  };

  const sortedData = [...filteredData].sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;

    // 현재 정렬 기준에 따른 값을 가져옵니다.
    const aValue = sortConfig.key === 'pjt_grade' ? getGradePriority(a.pjt_grade) : a[sortConfig.key];
    const bValue = sortConfig.key === 'pjt_grade' ? getGradePriority(b.pjt_grade) : b[sortConfig.key];

    if (aValue < bValue) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
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
                {/* <img
                  src={images.sorticon}
                  alt=""
                  onClick={handleWatchlistClick}
                  style={{ width: '16px', height: '16px' }}
                /> */}
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
              <TableHeader width="25%">Description</TableHeader>
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
                      onClick={() => handleStarClick(row.pjt_id)}
                    />
                  </TableCell>
                  <TableCell width="20%">
                    <ProjectLink as="button" onClick={() => handleProjectClick(row)}>
                      {row.pjt_name}
                    </ProjectLink>
                  </TableCell>
                  <TableCell width="15%">{row.category || 'N/A'}</TableCell>
                  <TableCell className="description" width="25%">
                    {row.pjt_summary || 'No summary available'}
                  </TableCell>
                  <TableCell width="20%">
                    <GradeBadge $grade={row.pjt_grade ? row.pjt_grade.split(' ')[0] : 'N/A'}>
                      {row.pjt_grade || 'No grade'}
                    </GradeBadge>
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
      <ToastContainer /> {/* Add ToastContainer to the component */}
    </DiscoverPageContainer>
  );
};

export default DiscoverList;
