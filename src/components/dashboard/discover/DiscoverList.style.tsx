import styled from 'styled-components';

export const DiscoverPageContainer = styled.div`
  padding: 20px;
`;

export const TableContainer = styled.div`
  max-height: 550px;
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
  }
`;

export const TableHead = styled.thead`
  background-color: #f9f8fe;
`;

export const TableRow = styled.tr`
  max-height: 50px;
  height: 50px;
`;

export const TableHeader = styled.th<{ isActive?: boolean; width?: string }>`
  padding: 5px 10px;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  color: ${({ isActive }) => (isActive ? 'black' : '#1a0737')};
  border-bottom: 1px solid #ddd;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? '#E4D9FF' : '#f9f8fe')};
  border-radius: ${({ isActive }) => (isActive ? '10px' : '0')};
  width: ${({ width }) => width || 'auto'};
  z-index: 3;

  img {
    text-align: left;
    width: 15px;
    height: 15px;
    margin-left: 10px;
    cursor: pointer;
  }
`;

export const TooltipContainer = styled.div`
  display: inline-block;
  position: relative;

  img {
    width: 12px;
    height: 12px;
    margin-right: 5px;
    cursor: pointer;
  }

  /* Initially hide the tooltip */
  .tooltip {
    display: none;
    position: absolute;
    background-color: #f9f8fe;
    color: #333;
    text-align: left;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 100;
    top: 20px; /* Adjusts the position of the tooltip */
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap; /* Prevents text from wrapping */
  }

  /* Show the tooltip when hovering over the img */
  img:hover + .tooltip {
    display: block;
  }
`;

export const Tooltip = styled.div`
  display: none;
  position: absolute;
  text-align: left;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f3ecff;
  font-weight: 500;
  padding: 20px;
  border-radius: 20px;
  font-size: 14px;
  color: #000;
  z-index: 5;
  white-space: nowrap;
`;

export const TableCell = styled.td<{ width?: string }>`
  padding: 5px 10px;
  text-align: center;
  font-size: 14px;
  color: #1a0737;
  border-bottom: 1px solid #ddd;
  vertical-align: middle;
  width: ${({ width }) => width || 'auto'};
  position: relative;
  overflow: hidden;

  &.description {
    max-width: 450px;
    max-height: 500px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: nowrap;
    text-align: left;
    cursor: pointer;
  }
`;

export const StarIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const ProjectLink = styled.a`
  color: #875cff;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const GradeBadge = styled.span<{ grade: string }>`
  font-weight: bold;
  color: ${(props) => (props.grade === 'AAA' ? '#00c853' : props.grade === 'AA' ? '#ffeb3b' : '#ff7043')};
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
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: 2px solid rgba(163, 128, 249, 0.3);
  padding: 12px 16px;
  z-index: 1;
  top: 100%;
  left: 0;
`;

export const DropdownItem = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 5px 0;
  cursor: pointer;

  input {
    margin-right: 8px;
  }
`;
