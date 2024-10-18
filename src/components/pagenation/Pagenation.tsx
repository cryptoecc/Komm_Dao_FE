import React from 'react';
import styled from 'styled-components';
import leftArrow from 'src/assets/admin/leftIcon.png'; // 왼쪽 화살표 이미지
import rightArrow from 'src/assets/admin/rightIcon.png'; // 오른쪽 화살표 이미지

// Pagination 전체를 감싸는 컨테이너
const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 10px;
`;

// 페이지 당 아이템 수를 선택하는 셀렉트 박스
const DisplaySelect = styled.select`
  margin-right: 10px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

// 화살표 버튼 (왼쪽/오른쪽 화살표)
const ArrowButton = styled.button<{ disabled: boolean }>`
  background: ${({ disabled }) => (disabled ? '#ddd' : 'transparent')}; // 비활성화 상태일 때 회색 배경
  border: none;
  padding: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')}; // 비활성화 상태일 때 커서 변경

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? '#ddd' : '#f0f0f0'}; // 비활성화되지 않은 경우 hover 시 배경색 변경
  }

  img {
    width: 16px;
    height: 16px;
  }
`;

// 페이지 번호 버튼
const PageNumber = styled.span<{ isActive: boolean }>`
  margin: 0 5px;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? '#7a23ff' : 'transparent')}; // 활성화된 페이지는 보라색 배경
  color: ${({ isActive }) => (isActive ? 'white' : '#333')}; // 활성화된 페이지는 흰색 글씨
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')}; // 활성화된 페이지는 굵은 글씨

  &:hover {
    background-color: #e0e0e0; // hover 시 배경색 변경
  }
`;

// Pagination 컴포넌트의 props 타입 정의
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
  itemsPerPage: number;
  setItemsPerPage: (items: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  handlePageChange,
  itemsPerPage,
  setItemsPerPage,
}) => {
  return (
    <PaginationContainer>
      {/* 페이지당 항목 수 선택하는 Select */}
      <DisplaySelect value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </DisplaySelect>

      {/* 이전 페이지로 이동하는 버튼 */}
      <ArrowButton disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
        <img src={leftArrow} alt="Previous" />
      </ArrowButton>

      {/* 페이지 번호 표시 */}
      {[...Array(totalPages)].map((_, index) => (
        <PageNumber key={index + 1} isActive={currentPage === index + 1} onClick={() => handlePageChange(index + 1)}>
          {index + 1}
        </PageNumber>
      ))}

      {/* 다음 페이지로 이동하는 버튼 */}
      <ArrowButton disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
        <img src={rightArrow} alt="Next" />
      </ArrowButton>
    </PaginationContainer>
  );
};

export default Pagination;
