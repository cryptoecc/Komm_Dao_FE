import styled from 'styled-components';

export const AdminBoard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(75, 75, 75, 0.5);
`;

export const Container = styled.div`
  width: 934px;
  height: 654px;
  border-radius: 20px;
  padding: 73px;
  background: #fff;
  text-align: center;
`;

export const Title = styled.span`
  color: var(--Purple-900, #7c4dff);
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SubTitle = styled.span`
  color: var(--Purple-900, #7c4dff);
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Form = styled.form`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  width: 788px;
  height: 60px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 20px;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  color: #404040
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  /* align-items: start; */
`;

export const Button = styled.button`
  width: 100%;
  height: 69px;
  padding: 10px;
  background: #6c63ff;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 20px;
  border: 1px solid #fff;
  background: var(--Purple-900, #7c4dff);

  color: #fff;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &:hover {
    background: #594fc2;
  }
`;

export const ForgotPassword = styled.a`
  text-align: right;
  margin-top: -10px;
  margin-bottom: 20px;
  cursor: pointer;
  color: #404040
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    color: #404040
  }
`;

export const EyeIcon = styled.img`
  position: absolute;
  right: 24px;
  top: 15px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
