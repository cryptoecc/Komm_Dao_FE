import styled from 'styled-components';

interface MemberButtonProps {
  $added: boolean;
}

export const Container = styled.div`
  height: 780px;
  padding: 10px;
`;

export const Title = styled.div`
  color: #404040;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const SearchInput = styled.input`
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  width: 720px;
  height: 50px;
  background: #fff;
  font-size: 20px;

  &::placeholder {
    color: #404040;
    font-weight: 300;
    font-style: normal;
    font-family: Inter;
    font-size: 20px;
    align-items: center;
  }
`;

export const MemberListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-height: 400px;
  overflow-y: scroll;
  margin-top: 30px;
`;

export const MemberItem = styled.div`
  /* display: grid; */
  /* grid-template-columns: 1fr 2fr 1fr; */
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

export const MemberAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 15px;
`;

export const MemberInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr;
  flex-grow: 1;
  /* justify-content: space-between; */
  /* flex-direction: column; */
  /* justify-content: center; */
`;

export const MemberName = styled.div`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  /* float: left; */
  /* margin-right: auto; 이름 부분이 Wallet Address와 겹치지 않도록 오른쪽 마진 추가 */
`;

export const WalletAddress = styled.div`
  font-size: 14px;
  width: 145px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 400;
  font-family: Inter;
  /* margin-left: auto; */
  text-align: center;
  /* flex-grow: 1; */

  /* white-space: nowrap; */
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
  /* margin: 0 auto; */
`;

export const MemberButton = styled.button<MemberButtonProps>`
  /* padding: 10px 20px; */
  padding: 10px 14px;
  width: 90px;
  border: none;
  border-radius: 20px;
  background-color: ${(props) => (props.$added ? 'red' : '#875CFF')};
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 7fr 1fr;
  align-items: center;
  padding: 10px;
  border-bottom: 2px solid #e0e0e0;
  background-color: #fff; /* 스크롤 시 헤더가 배경과 구분되도록 배경색 설정 */
  font-weight: bold;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const HeaderItem = styled.div`
  flex: 1;
  text-align: center;
  font-size: 16px;
  color: #333;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const SaveButton = styled.button`
  padding: 12px 26px;

  border-radius: 20px;
  background: var(--Purple-900, #7c4dff);
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  margin-right: 25px;

  &:hover {
    background: #7647f1;
  }
`;

export const CancelButton = styled.button`
  padding: 12px 26px;
  background: #fff;
  color: #404040;
  border-radius: 20px;
  border: 1px solid #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 20px;

  cursor: pointer;
`;
