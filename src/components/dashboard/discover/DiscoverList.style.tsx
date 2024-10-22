import styled from 'styled-components';

interface TableHeaderProps {
  isActive?: boolean;
  width?: string;
}

export const DiscoverPageContainer = styled.div`
  padding: 20px;
`;

export const TableContainer = styled.div`
  max-height: 600px;
  min-height: 400px;
  /* overflow-y: hidden; */
  overflow-y: auto;
`;

export const Table = styled.table`
  width: 100%;
  padding: 20px;
  border-collapse: separate;
  border-spacing: 0; /* 테이블 셀 사이의 간격을 없애기 위해 추가 */
  /* table-layout: fixed; 테이블 셀 크기 고정 */

  thead {
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: #f9f8fe;
    border-radius: 10px;
    height: 50px;
  }

  tbody {
    max-height: 500px;
    overflow-y: auto;
  }

  thead th {
    position: sticky;
    top: 0;
    background-color: #f9f8fe;
  }

  tbody td,
  tbody th {
    text-align: center;
    vertical-align: middle;
  }

  tbody::-webkit-scrollbar {
    width: 8px;
  }

  tbody::-webkit-scrollbar-thumb {
    background-color: #c1c1c1;
    border-radius: 10px;
  }

  tbody::-webkit-scrollbar-track {
    background-color: #f9f8fe;
  }
`;

export const TableHead = styled.thead`
  background-color: #f9f8fe;
  width: 100%;
  border-radius: 10px;
  height: 50px;
  table-layout: fixed;
  white-space: nowrap;
  /* border-bottom: none; */
`;

export const TableRow = styled.tr`
  height: 50px;
  border-top: none;
  cursor: pointer;

  /* 행 전체에 마우스를 올렸을 때 셀의 스타일을 변경 */
  &:hover td {
    border: 1px solid #6a5feb;
    background-color: #fbfbff;
  }

  &:hover td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-right: none;
  }

  &:hover td:last-child {
    border-left: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  /* 두 번째 셀에 다른 스타일 적용 */
  &:hover td:nth-child(2) {
    border-left: none; /* 예시로 배경색만 변경 */
    border-right: none;
  }

  /* 세 번째 셀에 다른 스타일 적용 */
  &:hover td:nth-child(3) {
    border-left: none; /* 예시로 배경색만 변경 */
    border-right: none;
  }
  &:hover td:nth-child(4) {
    border-left: none; /* 예시로 배경색만 변경 */
    border-right: none;
  }
`;

export const TableHeader = styled.th<TableHeaderProps & { $isActive?: boolean }>`
  padding: 10px;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  color: ${({ $isActive }) => ($isActive ? 'black' : '#1a0737')};
  /* border-bottom: 1px solid #ddd; */
  /* border-radius: 10px; */
  vertical-align: middle;
  background-color: ${({ $isActive }) => ($isActive ? '#E4D9FF' : '#f9f8fe')};
  width: ${({ width }) => width || '10%'};
  z-index: 3;

  cursor: pointer;
  &:hover {
    color: #7c4dff;
  }

  &:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  img {
    margin-left: 5px;
    cursor: pointer;
  }
`;

export const TableCell = styled.td<{ width?: string }>`
  padding: 10px;
  text-align: center;
  font-size: 16px;
  color: #404040;
  border-top: none;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.2); */
  vertical-align: middle;
  width: ${({ width }) => width || '10%'};
  box-sizing: border-box;
  height: 85px;
  /* overflow: hidden; */

  &.description {
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const TooltipContainer = styled.div`
  display: inline-block;
  position: relative;

  img {
    width: 13px;
    height: 13px;
    margin-right: 5px;
    cursor: pointer;
    position: relative;
    top: 3px; /* Add this line to lower the icon */
  }

  .tooltip {
    display: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 25px;
    position: absolute;
    background-color: #eeedfd;
    color: #000;
    text-align: left;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 100;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }

  img:hover + .tooltip {
    display: block;
  }

  @media (max-width: 768px) {
    img {
      width: 10px;
      height: 10px;
      top: 2px; /* Adjusted for smaller screens */
    }

    .tooltip {
      font-size: 12px;
      padding: 8px;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 8px;
      height: 8px;
      top: 1px; /* Adjusted for even smaller screens */
    }

    .tooltip {
      font-size: 10px;
      padding: 6px;
    }
  }
`;

export const StarIcon = styled.img`
  width: 29px;
  height: 29px;

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 480px) {
    width: 15px;
    height: 15px;
  }
`;

export const ProjectLink = styled.span`
  color: #6a5feb;
  font-weight: bold;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const GradeBadge = styled.span<{ $grade: string }>`
  /* background-color: ${({ $grade }) => ($grade === 'AAA' ? 'white' : 'white')}; */
  color: black;
  padding: 5px;
  border-radius: 5px;
  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const DropdownContainer = styled.div`
  width: 100%;
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const DropdownMenu = styled.div`
  margin-top: 20px;
  display: block;
  position: absolute;
  background: white;
  width: 100%;
  min-width: 150px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: 2px solid rgba(163, 128, 249, 0.3);
  padding: 12px 16px;
  z-index: 1;
  top: 100%;
  left: 0;

  white-space: nowrap; /* Prevent text wrapping */
  overflow: hidden; /* Hide overflowed text */
  text-overflow: ellipsis; /* Add ellipsis if text overflows */

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 10px;
  }
`;

export const DropdownItem = styled.label`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding: 5px 0;
  cursor: pointer;
  width: 100%;

  white-space: nowrap; /* Prevent text wrapping */
  overflow: hidden; /* Hide overflowed text */
  text-overflow: ellipsis; /* Add ellipsis if text overflows */

  input {
    margin-right: 8px;
    flex-shrink: 0; /* Prevent checkbox from shrinking */
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 4px 0;

    input {
      margin-right: 6px;
    }
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 3px 0;

    input {
      margin-right: 4px;
    }
  }
`;

export const NoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  text-align: center;
  padding: 20px;
  color: #aaa;
`;

export const NoDataImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

export const NoDataText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #666;
`;
