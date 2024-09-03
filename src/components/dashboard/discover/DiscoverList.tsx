import React, { useState, useEffect } from 'react';
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
} from './DiscoverList.style';
import { images } from '../../../assets/discover/images';
import { PATH } from '../../../constants/path';

interface DataItem {
  pjt_id: number;
  pjt_name: string;
  category: string;
  pjt_summary: string;
  pjt_grade: string;
  pinned: boolean;
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
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [data, setData] = useState<DataItem[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [isGradeDropdownVisible, setIsGradeDropdownVisible] = useState<boolean>(false);
  const categories = ['Infra', 'Modular', 'Layer2', 'DeFi', 'CeFi', 'Gaming', 'Social', 'AI'];
  const grades = ['AAA (Exceptional)', 'AA (Excellent)', 'A (Good)', 'BBB (Fair)', 'BB and Below (Poor)'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/admin/project-list');
        const filteredData = response.data.filter((item: any) => item.apply_yn === 'N');
        const formattedData = filteredData.map((item: any) => ({
          ...item,
          pinned: false,
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
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    setSortDirection(direction === 'ascending' ? 'asc' : 'desc');
  };

  const handleStarClick = (id: number) => {
    const newData = data.map((item) => {
      if (item.pjt_id === id) {
        return { ...item, pinned: !item.pinned };
      }
      return item;
    });

    newData.sort((a, b) => (a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1));
    setData(newData);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category) ? prevSelected.filter((c) => c !== category) : [...prevSelected, category]
    );
  };

  const handleGradeChange = (grade: string) => {
    setSelectedGrades((prevSelected) =>
      prevSelected.includes(grade) ? prevSelected.filter((g) => g !== grade) : [...prevSelected, grade]
    );
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
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const toggleGradeDropdown = () => {
    setIsGradeDropdownVisible(!isGradeDropdownVisible);
  };

  const closeDropdown = () => {
    setIsDropdownVisible(false);
    setIsGradeDropdownVisible(false);
  };

  return (
    <DiscoverPageContainer>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader width="10%">
                Watchlist
                <img src={images.sorticon} alt="" onClick={() => handleSort('pinned')} />
              </TableHeader>
              <TableHeader width="15%">
                Project
                <img src={images.sorticon} alt="" onClick={() => handleSort('pjt_name')} />
              </TableHeader>
              <TableHeader width="15%" onClick={toggleDropdown} isActive={isDropdownVisible}>
                <DropdownContainer>
                  Category
                  <img src={isDropdownVisible ? images.downicon : images.sorticon} alt="" />
                  {isDropdownVisible && (
                    <DropdownMenu onMouseLeave={closeDropdown}>
                      {categories.map((category) => (
                        <DropdownItem key={category}>
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                          />
                          {category}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  )}
                </DropdownContainer>
              </TableHeader>
              <TableHeader width="25%">Description</TableHeader>
              <TableHeader width="20%" onClick={toggleGradeDropdown} isActive={isGradeDropdownVisible}>
                <DropdownContainer>
                  <TooltipContainer>
                    <img src={images.exclamationIcon} alt="Info Icon" />
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
                  <img src={isGradeDropdownVisible ? images.downicon : images.sorticon} alt="" />
                  {isGradeDropdownVisible && (
                    <DropdownMenu onMouseLeave={closeDropdown}>
                      {grades.map((grade) => (
                        <DropdownItem key={grade}>
                          <input
                            type="checkbox"
                            checked={selectedGrades.includes(grade)}
                            onChange={() => handleGradeChange(grade)}
                          />
                          {grade}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  )}
                </DropdownContainer>
              </TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            {sortedData.map((row) => (
              <TableRow key={row.pjt_id}>
                <TableCell width="10%">
                  <StarIcon
                    src={row.pinned ? `${images.checked_star}` : `${images.star}`}
                    alt={row.pinned ? 'Pinned' : 'Not pinned'}
                    onClick={() => handleStarClick(row.pjt_id)}
                  />
                </TableCell>
                <TableCell width="15%">
                  <ProjectLink as="button" onClick={() => handleProjectClick(row)}>
                    {row.pjt_name}
                  </ProjectLink>
                </TableCell>
                <TableCell width="15%">{row.category}</TableCell>
                <TableCell className="description" width="25%">
                  {row.pjt_summary}
                </TableCell>
                <TableCell width="20%">
                  <GradeBadge grade={row.pjt_grade.split(' ')[0]}>{row.pjt_grade}</GradeBadge>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </DiscoverPageContainer>
  );
};

export default DiscoverList;
