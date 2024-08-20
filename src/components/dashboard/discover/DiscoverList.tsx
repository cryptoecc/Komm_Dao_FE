import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  id: number;
  watchlist: boolean;
  project: string;
  category: string;
  description: string;
  grade: string;
  pinned: boolean;
}

type SortKey = keyof DataItem;

interface SortConfig {
  key: SortKey;
  direction: 'ascending' | 'descending';
}

const DiscoverList = () => {
  const navigate = useNavigate();

  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'project', direction: 'ascending' });
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [data, setData] = useState<DataItem[]>([
    {
      id: 1,
      watchlist: true,
      project: 'MYX',
      category: 'Infra',
      description:
        'MYX Finance는 제로 슬리피지 및 최대 125배 레버리지를 지원하는 탈중앙화 선물 거래소입니다. MYX Finance는 제로 슬리피지 및 최대 125배 레버리지를 지원하는 탈중앙화 선물 거래소입니다. MYX Finance는 제로 슬리피지 및 최대 125배 레버리지를 지원하는 탈중앙화 선물 거래소입니다. MYX Finance는 제로 슬리피지 및 최대 125배 레버리지를 지원하는 탈중앙화 선물 거래소입니다. MYX Finance는 제로 슬리피지 및 최대 125배 레버리지를 지원하는 탈중앙화 선물 거래소입니다. MYX Finance는 제로 슬리피지 및 최대 125배 레버리지를 지원하는 탈중앙화 선물 거래소입니다. MYX Finance는 제로 슬리피지 및 최대 125배 레버리지를 지원하는 탈중앙화 선물 거래소입니다. MYX Finance는 제로 슬리피지 및 최대 125배 레버리지를 지원하는 탈중앙화 선물 거래소입니다. MYX Finance는 제로 슬리피지 및 최대 125배 레버리지를 지원하는 탈중앙화 선물 거래소입니다.',
      grade: 'AAA (Exceptional)',
      pinned: false,
    },
    {
      id: 2,
      watchlist: true,
      project: '0g Labs',
      category: 'DeFi',
      description:
        '0G Labs는 초당 50GB의 처리 속도를 제공하며 AI 앱의 속도와 비용을 개선하는 웹3 모듈형 블록체인 회사입니다.',
      grade: 'AA (Excellent)',
      pinned: false,
    },
    {
      id: 3,
      watchlist: false,
      project: 'Delegate Cash',
      category: 'Modular',
      description:
        'Delegate Cash는 NFT 에어드롭 청구, 토큰 거버넌스, 온체인 자산 관리를 위한 플랫폼으로, 핫월렛 대상 트레저리 사용의 안전한 자산 보호를 제공합니다.',
      grade: 'A (Good)',
      pinned: false,
    },
    {
      id: 4,
      watchlist: true,
      project: 'Aave',
      category: 'Modular',
      description: 'Aave는 사용자들이 자산을 대출하거나 차입할 수 있는 탈중앙화 금융 프로토콜입니다.',
      grade: 'BBB (Fair)',
      pinned: false,
    },
    {
      id: 5,
      watchlist: false,
      project: 'SushiSwap',
      category: 'Infra',
      description: 'SushiSwap은 유동성 공급자에게 인센티브를 제공하는 탈중앙화 거래소입니다.',
      grade: 'BB (Poor)',
      pinned: false,
    },
    {
      id: 6,
      watchlist: true,
      project: 'Yearn Finance',
      category: 'Infra',
      description: 'Yearn Finance는 자동으로 최적의 수익을 제공하는 수익 농업 프로토콜입니다.',
      grade: 'AAA (Exceptional)',
      pinned: false,
    },
    {
      id: 7,
      watchlist: false,
      project: 'Curve Finance',
      category: 'Social',
      description: 'Curve Finance는 스테이블코인 거래에 최적화된 유동성 풀을 제공하는 탈중앙화 거래소입니다.',
      grade: 'AA (Excellent)',
      pinned: false,
    },
    {
      id: 8,
      watchlist: true,
      project: 'MakerDAO',
      category: 'AI',
      description: 'MakerDAO는 다중 담보 대출을 통해 스테이블코인 DAI를 발행하는 탈중앙화 프로토콜입니다.',
      grade: 'AAA (Exceptional)',
      pinned: false,
    },
    {
      id: 9,
      watchlist: false,
      project: 'ChainLink',
      category: 'AI',
      description: 'ChainLink는 스마트 계약이 오프체인 데이터에 접근할 수 있도록 하는 탈중앙화 오라클 네트워크입니다.',
      grade: 'A (Good)',
      pinned: false,
    },
    {
      id: 10,
      watchlist: false,
      project: 'Balancer',
      category: 'DEX',
      description:
        'Balancer는 다양한 디지털 자산 간의 자동화된 포트폴리오 관리와 유동성 공급을 제공하는 프로토콜입니다.',
      grade: 'BBB (Fair)',
      pinned: false,
    },
    {
      id: 11,
      watchlist: false,
      project: 'Balancer',
      category: 'Social',
      description:
        'Balancer는 다양한 디지털 자산 간의 자동화된 포트폴리오 관리와 유동성 공급을 제공하는 프로토콜입니다.',
      grade: 'BBB (Fair)',
      pinned: false,
    },
    {
      id: 12,
      watchlist: false,
      project: 'Balancer',
      category: 'Social',
      description:
        'Balancer는 다양한 디지털 자산 간의 자동화된 포트폴리오 관리와 유동성 공급을 제공하는 프로토콜입니다.',
      grade: 'BBB (Fair)',
      pinned: false,
    },
    {
      id: 13,
      watchlist: false,
      project: 'Balancer',
      category: 'Gaming',
      description:
        'Balancer는 다양한 디지털 자산 간의 자동화된 포트폴리오 관리와 유동성 공급을 제공하는 프로토콜입니다.',
      grade: 'BBB (Fair)',
      pinned: false,
    },
    {
      id: 14,
      watchlist: false,
      project: 'Balancer',
      category: 'Gaming',
      description:
        'Balancer는 다양한 디지털 자산 간의 자동화된 포트폴리오 관리와 유동성 공급을 제공하는 프로토콜입니다.',
      grade: 'BBB (Fair)',
      pinned: false,
    },
    {
      id: 15,
      watchlist: false,
      project: 'Balancer',
      category: 'CeFi',
      description:
        'Balancer는 다양한 디지털 자산 간의 자동화된 포트폴리오 관리와 유동성 공급을 제공하는 프로토콜입니다.',
      grade: 'BBB (Fair)',
      pinned: false,
    },
    {
      id: 16,
      watchlist: false,
      project: 'Balancer',
      category: 'CeFi',
      description:
        'Balancer는 다양한 디지털 자산 간의 자동화된 포트폴리오 관리와 유동성 공급을 제공하는 프로토콜입니다.',
      grade: 'BBB (Fair)',
      pinned: false,
    },
    {
      id: 17,
      watchlist: false,
      project: 'Balancer',
      category: 'Layer2',
      description:
        'Balancer는 다양한 디지털 자산 간의 자동화된 포트폴리오 관리와 유동성 공급을 제공하는 프로토콜입니다.',
      grade: 'BBB (Fair)',
      pinned: false,
    },
    {
      id: 18,
      watchlist: false,
      project: 'Balancer',
      category: 'Layer2',
      description:
        'Balancer는 다양한 디지털 자산 간의 자동화된 포트폴리오 관리와 유동성 공급을 제공하는 프로토콜입니다.',
      grade: 'BBB (Fair)',
      pinned: false,
    },
  ]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [isGradeDropdownVisible, setIsGradeDropdownVisible] = useState<boolean>(false);

  const categories = ['Infra', 'Modular', 'Layer2', 'DeFi', 'CeFi', 'Gaming', 'Social', 'AI'];
  const grades = ['AAA (Exceptional)', 'AA (Excellent)', 'A (Good)', 'BBB (Fair)', 'BB and Below (Poor)'];

  const handleSort = (key: SortKey) => {
    // watchlist 경우 한번 더 누르면 즐찾 초기화..
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    setSortDirection(direction === 'ascending' ? 'asc' : 'desc');
  };

  const handleStarClick = (id: number) => {
    const newData = data.map((item) => {
      if (item.id === id) {
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
    navigate(PATH.DISCOVER_DETAILS.replace(':projectId', projectData.id.toString()), {
      state: projectData,
    });
  };

  const filteredData = data.filter((item) => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.category);
    const matchesGrade = selectedGrades.length === 0 || selectedGrades.includes(item.grade);
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
                <img src={images.sorticon} alt="" onClick={() => handleSort('watchlist')} />
              </TableHeader>
              <TableHeader width="15%">
                Project
                <img src={images.sorticon} alt="" onClick={() => handleSort('project')} />
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
              <TableRow key={row.id}>
                <TableCell width="10%">
                  <StarIcon
                    src={row.pinned ? `${images.checked_star}` : `${images.star}`}
                    alt={row.pinned ? 'Pinned' : 'Not pinned'}
                    onClick={() => handleStarClick(row.id)}
                  />
                </TableCell>
                <TableCell width="15%">
                  <ProjectLink as="button" onClick={() => handleProjectClick(row)}>
                    {row.project}
                  </ProjectLink>
                </TableCell>

                <TableCell width="15%">{row.category}</TableCell>
                <TableCell className="description" width="25%">
                  {row.description}
                </TableCell>
                <TableCell width="20%">
                  <GradeBadge grade={row.grade.split(' ')[0]}>{row.grade}</GradeBadge>
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
