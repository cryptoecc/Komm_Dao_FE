import styled from 'styled-components';
import profileImage from 'src/assets/admin/LOGO_KommDao_3.png';
import bannerImage from 'src/assets/admin/LOGO_Komm_DAO_2.png';
import backgroundIcon from 'src/assets/admin/editback.svg';
import editIcon from 'src/assets/admin/adminedit.svg';
import dropdownIcon from 'src/assets/admin/arrow_back_ios.svg';
import addIcon from 'src/assets/admin/add.svg';

export const Container = styled.div`
  /* padding-right: 55px; */
  background-color: #fff;
  border-radius: 10px;
  width: 800px;
  overflow-y: auto; /* Y축 스크롤 추가 */
  max-height: 90vh; /* 화면 크기의 90%를 넘으면 스크롤 */
  /* height: 700px; */
  max-width: 100%;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;
  position: relative; /* Edit 아이콘을 배치하기 위해 relative로 설정 */
`;

export const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  position: relative; /* Edit 아이콘을 프로필 이미지 위에 배치하기 위해 relative로 설정 */
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    width: 80%; /* 심볼 이미지의 크기를 줄입니다 */
    height: 80%; /* 심볼 이미지의 크기를 줄입니다 */
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
      url(${profileImage}) center / contain no-repeat;
    /* background: url(${profileImage}) center / contain no-repeat; */
    background-size: contain;
  }
`;

export const EditIconContainer = styled.div`
  position: absolute;
  bottom: -10px; /* 아이콘이 이미지의 테두리에 걸쳐 나오도록 위치 조정 */
  right: -10px;
  width: 50px;
  height: 50px;
`;

export const EditIconBackground = styled.div`
  width: 100%;
  height: 100%;
  background: url(${backgroundIcon}) no-repeat center;
  background-size: cover;
`;

export const EditIconForeground = styled.div`
  width: 24px; /* 실제 edit 이미지 크기 조절 */
  height: 24px;
  background: url(${editIcon}) no-repeat center;
  background-size: contain;
  position: absolute;
  top: 50%; /* 아이콘을 배경의 가운데에 위치시키기 위한 설정 */
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BannerImage = styled.div`
  width: 500px;
  height: 120px;
  object-fit: cover;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  &::before {
    content: '';
    width: 70%;
    height: 70%;
    background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
      url(${bannerImage}) center / contain no-repeat;
    background-size: contain;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 325px;
  height: 50px;
  font-weight: 300;
  /* font-family: Inter; */
  border-radius: 20px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
`;

export const Select = styled.select`
  width: 660px;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-weight: 300;
  appearance: none;
  background-image: url(${dropdownIcon});
  background-repeat: no-repeat;
  background-position: calc(100% - 15px) 40%; /* 화살표 위치 조정 */
  background-size: 16px 16px; /* 화살표 크기 조정 */
  color: #797777;
  option {
    background-color: #fff;
    color: #000;
    padding: 10px;
    border-radius: 20px; /* 옵션의 모서리를 둥글게 */
  }
`;

export const DealName = styled.div`
  width: 660px;
  height: 50px;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-weight: 300;
  color: #797777;
`;

export const DateWrapper = styled.div`
  /* display: flex; */
  /* justify-content: center; */
`;

export const TextArea = styled.textarea`
  width: 660px;
  height: 154px;
  margin: 0 auto;
  padding: 15px;
  font-size: 16px;
  font-style: normal;
  font-weight: 300px;
  font-family: Inter;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  resize: none;
`;

export const SumArea = styled.textarea`
  width: 660px;
  height: 100px;
  margin: 0 auto;
  padding: 15px;
  font-size: 16px;
  font-style: normal;
  font-weight: 300px;
  font-family: Inter;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  resize: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding-left: 50px;
  padding-right: 50px;
`;

export const CancelButton = styled.button`
  background-color: #fff;
  border: 1px solid #000;
  padding: 16px 24px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  font-family: Inter;
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const CreateButton = styled.button`
  background: var(--Purple-900, #7c4dff);
  color: #fff;
  border: none;
  font-weight: 700;
  font-family: Inter;
  padding: 16px 24px;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #5952db;
  }
`;

export const TeamGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const TeamCategory = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const DateInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #ccc;
  padding: 7px;
  width: 325px;
  height: 50px;
  box-sizing: border-box; /* 이 속성을 추가 */
`;

export const CalendarIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export const DateInput = styled.input`
  /* display: flex; */
  flex-grow: 1;
  width: 325px;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 300;
  /* box-sizing: border-box; 이 속성을 추가 */
`;

export const Date = styled.div`
  .form-control {
    width: 325px; /* DatePicker의 너비를 부모 요소에 맞춤 */
    padding: 10px;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    font-size: 20px;
    font-weight: 300;
    font-family: Inter;
    font-style: normal;
    /* display: flex; */
    align-items: center;
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const PreviewImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 50px;
  gap: 20px;
  align-items: center;
`;

export const RoundSelect = styled.select`
  width: 325px;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-weight: 300;
  appearance: none;
  background-image: url(${dropdownIcon});
  background-repeat: no-repeat;
  background-position: calc(100% - 15px) 40%; /* 화살표 위치 조정 */
  background-size: 16px 16px; /* 화살표 크기 조정 */
  color: #797777;
  option {
    background-color: #fff;
    color: #000;
    padding: 10px;
    border-radius: 20px; /* 옵션의 모서리를 둥글게 */
  }
`;
