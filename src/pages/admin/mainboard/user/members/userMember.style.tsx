import styled from 'styled-components';

export const UserMemberContainer = styled.div`
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

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-left: 110px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  width: 350px;
  background: var(--Light-Light, #f8f9fa);
  margin-right: 10px;

  &::placeholder {
    color: var(--Dark-Secondary, #9fa2ab);
    font-weight: 400;
    font-feature-settings: 'clig' off, 'liga' off;
    /* Base/Body */
    font-family: Poppins;
    font-size: 14px;
    line-height: 22px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  /* flex-grow: -1; */
  justify-content: flex-end;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const SendMessageButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: var(--Purple-900, #7c4dff);
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  /* gap: 10px; */
  margin-left: 20px;

  img {
    margin-right: 10px;
    /* color: #fff; */
  }
`;

export const Table = styled.table`
  /* width: 1078px; */
  border-collapse: collapse;
  overflow-y: auto; /* 세로 스크롤이 생기게 합니다 */
  max-height: 600px; /* 테이블 최대 높이 설정 */
  display: block; /* 테이블을 블록 요소로 변경 */
`;

export const TableHeader = styled.th`
  background: #fff;
  color: var(--Light-Dark, #343a40);
  font-feature-settings: 'clig' off, 'liga' off;
  line-height: 22px;
  height: 50px;
  text-align: left;
  font-weight: 500;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  width: 300px;
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
  /* text-overflow: ellipsis; */
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

  button {
    background: none;
    border: none;
    font-family: Roboto;
    color: var(--Light-Dark, #343a40);
    font-feature-settings: 'clig' off, 'liga' off;
    text-decoration-line: underline;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
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

// export const CheckboxHeader = styled.img`
//   width: 28px;
//   height: 28px;
//   vertical-align: middle;
//   cursor: pointer;
// `;

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
