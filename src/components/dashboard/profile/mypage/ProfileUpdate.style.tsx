import styled from 'styled-components';
import checkedIcon from 'src/assets/register/checked_circle.svg';
import uncheckedIcon from 'src/assets/register/check_circle.svg';

// 기존 스타일 코드
export const Container = styled.div`
  height: 100%;
  border-radius: 30px;
  padding: 20px;
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: flex-start;
  justify-content: center; */

  gap: 40px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const Header = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const MainContent = styled.div`
  max-width: 830px;
  display: flex;
  align-items: flex-start;
  gap: 50px;

  @media (max-width: 600px) {
    gap: 20px;
    flex-direction: column;
  }
`;

export const ProfileImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;

  @media (max-width: 600px) {
    align-items: center;
  }
`;

export const ProfileImage = styled.img`
  width: 133px;
  height: 124px;
  border-radius: 50px;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 600px) {
    width: 120px;
    height: 120px;
  }
`;

export const EditImageButton = styled.label`
  background-color: #e3d9ff;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  bottom: -10px; /* Adjusted for more overlap */
  right: -10px; /* Adjusted for more overlap */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  &:hover {
    background: #d1d1e9;
    color: var(--Purple-900, #7c4dff);
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media (max-width: 600px) {
    padding: 8px;
    font-size: 14px;
    width: 30px;
    height: 30px;
  }

  input {
    display: none;
  }

  img {
    width: 20px;
    height: 20px;
    color: black;
  }
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;

  @media (max-width: 600px) {
    gap: 15px;
  }
`;

export const HorizontalGroup = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: row; /* Ensure horizontal alignment */
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
  }
`;

// Generic InputField with max-width
const InputField = styled.div<{ maxWidth?: string }>`
  display: flex;
  flex-direction: column;

  gap: 5px;
  width: 100%;
  max-width: ${(props) => props.maxWidth || '100%'};
  position: relative; /* Added for absolute positioning of icon */

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

// Updated NoBorderInput style to add padding-right for icon
export const NoBorderInput = styled.input`
  padding: 10px;
  border: none; /* Remove border */
  border-radius: 5px;
  font-size: 16px;
  width: 100%; /* Ensure input takes up available space */
  padding-left: 20px; /* Space for icon/link on the left */
  padding-right: 40px; /* Space for icon on the right */

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 8px;
  }
`;

export const NameField = styled(InputField)`
  max-width: 385px;
  display: flex;
`;

// New styles for icons
export const InputIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  @media (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
`;

export const BioInputIcon = styled.img`
  position: absolute;
  right: 10px; /* Position icon on the right */
  bottom: 5%;
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  @media (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
`;

export const MembershipNftField = styled(InputField)`
  max-width: 830px;
`;

export const EmailField = styled(InputField)`
  max-width: 830px;
`;

export const WalletAddressField = styled(InputField)`
  max-width: 830px;
`;

export const BioField = styled(InputField)`
  max-width: 830px;
`;

export const ExpertiseField = styled(InputField)`
  max-width: 50%; /* Adjusted to half width */
  /* flex-grow: 1; Ensure it takes up remaining space */
  /* height: 10px; */
  @media (max-width: 600px) {
    max-width: 70%; /* Adjusted to 70% width on mobile */
  }
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  color: '#404040';
  margin-left: 5px;
  margin-bottom: 5px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const NameInput = styled.input`
  padding: 10px;
  border: 1px solid #858585;
  height: 100%;
  border-radius: 20px;
  width: 385px; /* Ensure input takes up available space */
  padding-left: 20px; /* Space for icon/link on the left */

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 600px) {
    font-size: 14px;
    padding: 8px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #858585;
  height: 100%;
  border-radius: 20px;
  width: 830px; /* Ensure input takes up available space */
  padding-left: 20px; /* Space for icon/link on the left */
  padding-right: 40px;
  font-size: 16px;
  font-style: normal;
  color: #404040;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 600px) {
    font-size: 14px;
    padding: 8px;
  }
`;

export const BioInput = styled.textarea`
  padding: 25px;
  border: 1px solid #858585;
  height: 190px;
  border-radius: 20px;
  width: 100%; /* Ensure input takes up available space */
  /* padding-left: 20px; /* Space for icon/link on the left * */
  color: #404040;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 600px) {
    font-size: 14px;
    padding: 10px;
  }
  flex-shrink: 0;
  vertical-align: top; /* Ensure text starts from the top */
  resize: none; /* Prevents resizing */

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 10px;
  }
`;

export const MembershipNftInputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const MembershipNftIcon = styled.img`
  position: absolute;
  left: 10px;
  width: 24px;
  height: 24px;

  @media (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
`;

export const MembershipNftLink = styled.a`
  position: absolute;
  left: 40px;
  color: #875cff;

  font-size: 18px;
  font-weight: 500;
  text-decoration: underline;
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 600px) {
    font-size: 14px;
    left: 30px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  margin-top: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

export const Button = styled.button`
  padding: 8px 24px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;

  &.cancel {
    color: #404040;
    border-radius: 20px;
    border: 1px solid #404040;
    background: #fff;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  &.save {
    padding: 8px 34px;
    border-radius: 20px;
    color: #fff;
    background: #6a5feb;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  &.save:hover {
    &:hover {
      background: #564dba;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
  &.cancel:hover {
    &:hover {
      background: #d1d1e9;

      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }

  @media (max-width: 600px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

// New styles for checkbox and text
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 30px;

  @media (max-width: 600px) {
    /* flex-direction: column; */
    align-items: flex-start;
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  width: 300px;
  align-items: center;
  font-size: 16px;
  color: #404040;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Checkbox2 = styled.input`
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
  cursor: pointer;
`;
