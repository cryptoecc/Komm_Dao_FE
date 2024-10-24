import styled from 'styled-components';
interface TableHeaderProps {
  $isActive?: boolean; // $isActive가 선택적 속성으로 추가됨
}

export const DiscoverContainer = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  overflow-x: auto;
`;

export const Title = styled.h1`
  color: #1a0737;
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
  overflow-x: auto; /* 가로 스크롤 추가 */
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
    color: #404040;
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
  color: #404040;
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

export const EditableInput = styled.input<{ isFocused: boolean }>`
  width: ${(props) => (props.isFocused ? '400px' : '100px')}; /* 클릭 시 넓어지게 설정 */
  transition: width 0.3s ease; /* 부드럽게 변하도록 트랜지션 추가 */
  padding: 5px;
  font-size: 14px;
`;

export const PopupContainer = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  position: absolute;
  top: 50%; /* 팝업 위치 설정 */
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: auto;
  padding: 20px;

  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* 팝업이 상단에 보이도록 설정 */
  border-radius: 15px;

  h3 {
    font-size: 24px;
    margin-top: 10px;
  }
`;

export const PopupBackdrop = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999; /* 팝업 뒤의 어두운 배경 설정 */
`;

export const PopupInput = styled.textarea`
  width: 500px;
  height: 150px;
  padding: 10px;
  margin-top: 10px;
  /* margin: 0 auto; */
  font-size: 16px;
  border: 1px solid #ccc;
`;

export const Textarea = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
`;

export const SaveBtn = styled.button`
  color: #fff;
  float: right;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 700;
  padding: 17px 26px;
  border-radius: 20px;
  background: var(--Purple-900, #7c4dff);
  cursor: pointer;
`;
