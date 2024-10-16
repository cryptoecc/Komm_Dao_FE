import React, { useState } from 'react';
import {
  AdminBoard,
  Container,
  Title,
  SubTitle,
  Form,
  Input,
  ForgotPassword,
  Button,
  Label,
  PasswordWrapper,
  EyeIcon,
} from './adminLogin.style';
import eyeIcon from 'src/assets/admin/eye-off.svg';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserData } from 'src/store/user/UserSlice';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from 'src/utils/utils';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/admin/admin-login`, {
        email,
        password,
      });

      if (response.data.token) {
        // 토큰 저장 (예: localStorage 또는 Redux)
        localStorage.setItem('token', response.data.token);
        // 로그인 성공 후 리다이렉트
        // `user_id`를 사용해서 사용자 정보 가져오기
        const userResponse = await axios.get(`${API_BASE_URL}/api/admin/user-info/${response.data.user_id}`, {
          headers: {
            Authorization: `Bearer ${response.data.token}`,
          },
        });

        // dispatch(setUserData(userResponse.data));

        navigate('/admin-mainboard');
      } else {
        setErrorMessage('Invalid email or password');
      }
    } catch (error) {
      setErrorMessage('Login failed. Please try again.');
    }
  };

  return (
    <AdminBoard>
      <Container>
        <Title>Komm DAO </Title>
        <SubTitle>Admin Login</SubTitle>
        <Form onSubmit={handleSubmit}>
          <Label>Email Address</Label>
          <Input type="email" value={email} onChange={handleEmailChange} required />
          <Label>Password</Label>

          <PasswordWrapper>
            <Input
              type={passwordVisible ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <EyeIcon src={eyeIcon} alt="Toggle visibility" onClick={togglePasswordVisibility} />
          </PasswordWrapper>
          <ForgotPassword>forgot password?</ForgotPassword>
          {errorMessage && <p>{errorMessage}</p>}
          <Button type="submit">Sign In</Button>
        </Form>
      </Container>
    </AdminBoard>
  );
};

export default AdminLogin;
