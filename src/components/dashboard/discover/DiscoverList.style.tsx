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
  overflow-y: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: #f9f8fe;
    min-height: 50px;
  }

  tbody {
    display: block;
    max-height: 500px;
    overflow-y: auto;
    width: 100%;
  }

  thead th {
    position: sticky;
    top: 0;
    background-color: #f9f8fe;
  }

  tbody td,
  tbody th {
    display: table-cell;
    text-align: center;
  }

  tbody {
    width: 100%;
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
  display: table;
  width: calc(100% - 8px);
  table-layout: fixed;
  white-space: nowrap;
`;

export const TableRow = styled.tr`
  max-height: 50px;
  height: 50px;
`;

export const TableHeader = styled.th<TableHeaderProps>`
  padding: 10px;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  color: ${({ isActive }) => (isActive ? 'black' : '#1a0737')};
  border-bottom: 1px solid #ddd;
  vertical-align: middle;
  background-color: ${({ isActive }) => (isActive ? '#E4D9FF' : '#f9f8fe')};
  border-radius: ${({ isActive }) => (isActive ? '10px' : '0')};
  width: ${({ width }) => width || '10%'};
  box-sizing: border-box;
  z-index: 3;

  img {
    margin-left: 5px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const TableCell = styled.td<{ width?: string }>`
  padding: 10px;
  text-align: center;
  font-size: 14px;
  color: #1a0737;
  border-bottom: 1px solid #ddd;
  vertical-align: middle;
  width: ${({ width }) => width || '10%'};
  box-sizing: border-box;
  overflow: hidden;

  &.description {
    text-align: left;
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
    position: absolute;
    background-color: #f3ecff;
    color: #333;
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
  width: 20px;
  height: 20px;

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 480px) {
    width: 15px;
    height: 15px;
  }
`;

export const ProjectLink = styled.a`
  color: #875cff;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const GradeBadge = styled.span<{ grade: string }>`
  font-weight: bold;
  color: ${(props) => (props.grade === 'AAA' ? '#00c853' : props.grade === 'AA' ? '#ffeb3b' : '#ff7043')};

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
