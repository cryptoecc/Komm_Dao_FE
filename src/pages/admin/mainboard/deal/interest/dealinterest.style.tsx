import styled from 'styled-components';
interface TableHeaderProps {
  $isActive?: boolean; // $isActive가 선택적 속성으로 추가됨
}

export const DiscoverContainer = styled.div`
  width: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  overflow-x: auto;
`;

export const Title = styled.h1`
  color: #1a0737;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 10px;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  height: 600px;
  border-collapse: collapse;
  overflow-y: auto;
  /* max-height: 600px; */
  display: block; /* 테이블을 블록 요소로 변경 */
`;

export const TableHeader = styled.th<TableHeaderProps>`
  background: #fff;
  color: var(--Light-Dark, #343a40);
  font-feature-settings: 'clig' off, 'liga' off;
  line-height: 22px;
  height: 50px;
  text-align: left;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  width: 150px;
  padding: 10px;
  position: sticky;
  top: 0; /* 헤더를 고정시킵니다 */

  &:first-child {
    width: 40px; /* 체크박스 열의 너비 설정 */
    text-align: center;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #dfdfdf;
  }
`;

export const TableRow = styled.tr<{ $isSelected?: boolean }>`
  &:nth-child(even) {
    background: #f9f9f9;
  }

  background-color: ${(props) => (props.$isSelected ? 'rgba(217, 217, 217, 0.50)' : 'transparent')};
`;
export const TableCell = styled.td<{ $isSelected?: boolean }>`
  /* display: flex; */

  height: 50px;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: ${(props) => (props.$isSelected ? 'rgba(217, 217, 217, 0.50)' : '#fff')}; /* 선택된 셀의 배경 변경 */
  color: #6c757d;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  padding: 10px;
  vertical-align: middle; /* 세로 중앙 정렬 */
  /* 기본 셀 너비 */
  max-width: 150px;
  cursor: pointer;
  /* position: relative; */

  &:hover .popup {
    display: block;
  }

  .popup {
    display: none;
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    color: #000;
    border: 1px solid #ddd;
    padding: 10px;
    z-index: 10;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: auto; /* 팝업의 너비를 설정 */
    max-width: 300px;
    word-wrap: break-word;
    white-space: normal;
  }

  /* 큰 화면에서 셀 너비 확대 */
  @media (min-width: 1200px) {
    max-width: 150px;
  }

  /* 중간 화면에서 셀 너비 조정 */
  @media (min-width: 768px) and (max-width: 1199px) {
    max-width: 150px;
  }

  /* 작은 화면에서 셀 너비 축소 */
  @media (max-width: 767px) {
    max-width: 100px;
  }
`;

export const CheckboxContainer = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
  vertical-align: middle;
  cursor: pointer;
`;

export const Checkbox = styled.img`
  width: 28px;
  height: 28px;
  vertical-align: middle;
  top: 0;
  left: 0;
  cursor: pointer;
`;

export const CheckboxHeader = styled(CheckboxContainer)`
  vertical-align: middle;
`;

export const Checkmark = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 4px;
  left: 4px;
  pointer-events: none;
`;

export const Popup = styled.div`
  position: fixed;
  border-radius: 10px;
  background: #fff;
  color: #000;
  border: 1px solid #ddd;
  padding: 10px;
  z-index: 10;
  box-shadow: -10px 10px 50px 0px rgba(0, 0, 0, 0.25);
  width: auto;
  max-width: 500px;
  word-wrap: break-word;
  white-space: normal;

  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  /* transform: translateX(-50%); */
`;

export const ApplyBtn = styled.button`
  background: var(--Miscellaneous-Sidebar-Text---Selected, #007aff);
  border: none;
  color: white;
  padding: 5px 10px;
  font-weight: 500;
  border-radius: 20px;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  cursor: pointer;
`;

export const EditBtn = styled.button`
  background: #8c63ff;
  border: none;
  color: white;
  padding: 5px 10px;
  font-weight: 500;
  border-radius: 20px;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  cursor: pointer;
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
  z-index: 999;
  /* top: 100%;
  left: 0; */

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

// Payment Pending 버튼 스타일
export const PaymentButton = styled.button`
  background: #007aff;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 2px 6px;
  cursor: pointer;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
`;

// 활성화된 인풋 스타일
export const EditableInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 5px 8px;
  font-size: 14px;
  color: #333;
  background: #fff;
  width: 70px;

  &:focus {
    border-color: #8c63ff;
    outline: none;
    background: #fff;
  }
`;

export const CalculateButton = styled.button`
  background: #8c63ff;
  border: none;
  color: white;
  padding: 5px 10px;
  font-weight: 500;
  border-radius: 25px;
  font-family: Roboto;
  font-size: 12px;
  cursor: pointer;
  margin-left: 8px; /* 버튼과 Input 간의 여백 */

  &:hover {
    background: #7a53e3;
  }
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  align-items: center; /* 아이콘과 텍스트가 같은 높이로 정렬되도록 설정 */
  gap: 8px; /* 아이콘과 텍스트 사이의 간격 */
  cursor: pointer;
`;

export const DateIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  vertical-align: middle;
`;

export const DateText = styled.span`
  margin-left: 8px; // 아이콘과 텍스트 간격 조정
  color: #343a40;
  font-size: 14px;
  vertical-align: middle;
  white-space: nowrap;
`;
