import styled from 'styled-components';
import SmileIcon from 'src/assets/register/smileIcon.svg';
import ImageBack from 'src/assets/register/Ellipse.svg';
import EditBack from 'src/assets/register/Ellipse136.svg';
import EditImg from 'src/assets/register/editIcon.svg';
import ArrowDown from 'src/assets/register/arrow_drop_down.svg';
import checkedIcon from 'src/assets/register/checked_circle.svg';
import uncheckedIcon from 'src/assets/register/check_circle.svg';

export const ProfileContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  gap: 20px;
  margin-top: 10px;
  /* margin-bottom: 20px; */
`;

export const Text = styled.p`
  color: #404040;
  font-size: 36px;

  font-weight: 600;
  line-height: normal;
`;

export const SubText = styled.p`
  color: #404040;
  font-size: 24px;

  font-weight: 400;
  line-height: normal;
  margin-top: 20px;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfileImageWrapper = styled.div<{ $backgroundImage: string | null }>`
  position: relative;
  width: 153px;
  height: 153px;
  border-radius: 50%; /* 원형 모양으로 자르기 */
  background: ${(props) =>
    props.$backgroundImage
      ? `url(${props.$backgroundImage}) center/cover no-repeat`
      : `url(${ImageBack}) center/contain no-repeat`};
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer; /* 클릭 가능한 커서 추가 */
  /* overflow: hidden; 자식 요소가 부모의 경계를 넘지 않도록 숨기기 */
`;

export const ProfileImage = styled.img`
  width: 130px;
  height: 130px;
  object-fit: cover;

  /* width: 50px;
  height: 50px; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background: url(${SmileIcon}); */
  /* background-repeat: no-repeat; */
  /* background-position: center; */
`;

export const EditIconWrapper = styled.div`
  position: absolute;
  bottom: -5px;
  /* top: 20px; */
  right: -5px;
  /* backgroun÷÷d: #8e63ff; */
  width: 67px;
  height: 67px;
  background: url(${EditBack});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer; /* 클릭 가능한 커서 추가 */
`;

export const EditIcon = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(${EditImg});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer; /* 클릭 가능한 커서 추가 */
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CustomSelectWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 60px;
  margin-left: 50px;
`;

export const CustomSelect = styled.select`
  width: 400px;
  height: 60px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: #f8f8fa url(${ArrowDown}) no-repeat right 10px center;
  background-size: 20px;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  color: rgba(0, 0, 0, 0.5);
  appearance: none; /* 기본 드롭다운 화살표 숨김 */
  cursor: pointer;
`;

export const CustomOption = styled.option`
  /* width: 400px; */
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  color: rgba(0, 0, 0, 0.5);
  background: #fff;
  &:checked {
    background: #f8f8fa;
  }
`;

// export const SelectWrapper = styled.div`
//   position: relative;
//   width: 350px;
//   height: 60px;
//   margin-left: 50px;
// `;

// export const Select = styled.select`
//   width: 400px;
//   height: 60px;
//   margin-left: 50px;
//   padding: 10px;
//   border-radius: 10px;
//   border: 1px solid rgba(0, 0, 0, 0.5);
//   appearance: none; /* 기본 화살표 제거 */
//   -webkit-appearance: none; /* 웹킷 기반 브라우저에서 기본 화살표 제거 */
//   -moz-appearance: none; /* 모질라 기반 브라우저에서 기본 화살표 제거 */
//   background: #f8f8fa url(${ArrowDown}) no-repeat right 10px center;
//   font-size: 20px;
//   font-weight: 400;
//   line-height: normal;
//   color: rgba(0, 0, 0, 0.5);
// `;
export const Input = styled.input`
  width: 400px;
  height: 60px;
  margin-left: 50px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: #f8f8fa;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  font-family: Inter;
  color: #404040

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const TextArea = styled.textarea`
  width: 600px;
  height: 165px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: #f8f8fa;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  color: rgba(0, 0, 0, 0.5);
  font-family: Inter;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  display: none;

  &:checked + span {
    background: url(${checkedIcon}) no-repeat center;
    background-size: cover;
  }

  &:not(:checked) + span {
    background: url(${uncheckedIcon}) no-repeat center;
    background-size: cover;
  }
`;

export const CustomCheckbox = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  color: #404040
  cursor: pointer;
  user-select: none;
`;

export const SaveButton = styled.button`
  /* align-items: center; */
  background: #7c4dff;
  width: 100px;
  height: 58px;
  color: #fff;
  border: none;
  padding: 17px 26px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  line-height: normal;
  font-weight: 700;

  &:hover {
    background: #6b42d9;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const Counter = styled.div`
  font-size: 19px;
  font-weight: 500;
  color: #a380f9;
  text-align: right;
  line-height: normal;
  margin-top: 10px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
  text-align: end;
`;
