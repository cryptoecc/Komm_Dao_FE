import styled from 'styled-components';

export const DiscoverPageContainer = styled.div`
  padding: 20px;
`;

export const TableContainer = styled.div`
  max-height: 600px; /* Adjust this height as needed */
  min-height: 400px; /* Set a minimum height to ensure dropdown visibility */
  overflow-y: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #f9f8fe;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
  }
`;

export const TableHeader = styled.th<{ isActive?: boolean; width?: string }>`
  padding: 10px 15px;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  color: ${({ isActive }) => (isActive ? 'black' : '#1a0737')};
  border-bottom: 1px solid #ddd;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? '#E4D9FF' : 'transparent')};
  border-radius: ${({ isActive }) => (isActive ? '10px' : '0')};
  width: ${({ width }) => width || 'auto'}; /* Set width if provided */

  img {
    text-align: center;
    width: 15px;
    height: 15px;
    margin-left: 10px;
  }
`;

export const TableCell = styled.td<{ width?: string }>`
  padding: 10px 15px;
  text-align: center;
  font-size: 14px;
  color: #1a0737;
  border-bottom: 1px solid #ddd;
  vertical-align: middle;
  width: ${({ width }) => width || 'auto'}; /* Set width if provided */

  &.description {
    max-width: 300px;
    word-wrap: break-word;
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
  border: 2px solid rgba(163, 128, 249, 0.3); /* Light, semi-transparent border */
  padding: 12px 16px;
  z-index: 1;
  top: 100%; /* Position the dropdown directly below the TableHeader */
  left: 0; /* Aligns the dropdown with the left edge of the header */
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
