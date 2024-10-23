import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

export const Label = styled.label`
  display: block;
  font-size: 22px;
  font-weight: 500;
  line-height: normal;
  font-family: Inter;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 660px;
  height: 48px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: #fff;
  font-size: 20px;
  font-weight: 300;
  line-height: normal;
`;

export const DateWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  justify-content: center;
  margin-bottom: 20px;
  gap: 20px;
`;

export const Date = styled.div`
  .form-control {
    width: 320px; /* DatePicker의 너비를 부모 요소에 맞춤 */
    padding: 10px;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    font-size: 20px;
    font-weight: 300;
    font-family: Inter;
    font-style: normal;

    display: flex;
    align-items: center;
    gap: 10px; /* 아이콘과 텍스트 사이의 간격을 조정 */
  }
`;

export const CalendarIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export const AddIcon = styled.img`
  width: 17px;
  height: 17px;
`;

export const CommitteeList = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* padding: 20px; */
  /* margin: 0 auto; */
  padding: 0 35px 0 35px;
`;
export const Wrap = styled.div`
  display: flex;
  gap: 40px; /* 간격을 조정합니다 */
`;

export const CommitteeItem = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  /* justify-content: space-between; */
`;

export const Button = styled.button`
  display: flex;
  gap: 8px;
  font-size: 17px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  padding-right: 30px;
`;

export const CancelButton = styled.button`
  padding: 17px 26px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  font-family: Inter;
  font-style: normal;
`;

export const CreateButton = styled.button`
  padding: 17px 26px;
  background: var(--Purple-900, #7c4dff);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  font-family: Inter;
  font-style: normal;
`;

export const DateInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 10px;
  width: 320px; /* DatePicker의 너비를 설정 */
  gap: 10px; /* 아이콘과 텍스트 사이의 간격을 설정 */
  background-color: #fff; /* 배경색 설정 */
`;

export const DateInput = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 20px;
  background-color: transparent; /* 배경색을 투명하게 설정 */
  font-family: Inter;
  font-weight: 300;
`;

export const Popup = styled.div`
  position: fixed;
  border-radius: 10px;
  background: #fff;
  color: #404040
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

export const EllipsisText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`;
